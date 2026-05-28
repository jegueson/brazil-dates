import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MessageSquare, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useSEO, seoConfigs } from "@/hooks/useSEO";
import { WEB3FORMS_ACCESS_KEY, LEGAL_ENTITY } from "@/lib/site-config";

const Contato = () => {
  useSEO(seoConfigs.contato);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (WEB3FORMS_ACCESS_KEY) {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            subject: `Contato: ${formData.subject}`,
            message: formData.message,
          }),
        });
        const data = await response.json();
        if (!data.success) {
          throw new Error(data.message || "Falha ao enviar formulário");
        }
      } else {
        const subject = encodeURIComponent(`Contato Calendário Brasileiro: ${formData.subject}`);
        const body = encodeURIComponent(
          `Nome: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\n${formData.message}`
        );
        window.location.href = `mailto:${LEGAL_ENTITY.email}?subject=${subject}&body=${body}`;
      }

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="outline" size="icon">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-holiday-cultural bg-clip-text text-transparent">
                Entre em Contato
              </h1>
              <p className="text-sm text-muted-foreground">
                Estamos aqui para ajudar você
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <section className="text-center space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-bounce-in">
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-foreground">
                Fale Conosco
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Tem dúvidas, sugestões ou quer compartilhar uma tradição? 
                Entre em contato conosco!
              </p>
            </div>
          </section>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold">Envie uma Mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nome</Label>
                    <Input 
                      id="firstName" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Seu nome" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Sobrenome</Label>
                    <Input 
                      id="lastName" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Seu sobrenome" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Sobre o que você gostaria de falar?" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Compartilhe suas dúvidas, sugestões ou tradições familiares..."
                    rows={6}
                    required 
                  />
                </div>
                
                {isSubmitted && (
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg border border-green-200">
                    <CheckCircle className="w-5 h-5" />
                    <span>Mensagem enviada com sucesso! Responderemos em breve.</span>
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Preparando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </section>

            {/* Contact Info */}
            <section className="space-y-8">
              <h3 className="text-2xl font-bold">Outras Formas de Contato</h3>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-primary/10 via-card to-primary/5 rounded-xl p-6 border border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">E-mail</h4>
                      <p className="text-muted-foreground">contato@calendario-feriados.com.br</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Respondemos em até 24 horas
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-accent/10 via-card to-accent/5 rounded-xl p-6 border border-accent/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Redes Sociais</h4>
                      <p className="text-muted-foreground">@calendariobrasileiro</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Siga-nos para dicas culturais diárias
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-holiday-cultural/10 via-card to-holiday-cultural/5 rounded-xl p-6 border border-holiday-cultural/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-holiday-cultural flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Localização</h4>
                      <p className="text-muted-foreground">São Paulo, Brasil</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Cobrimos todo o território nacional
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-gradient-to-r from-muted/20 via-card to-muted/20 rounded-xl p-6 border border-border">
                <h4 className="font-bold text-lg mb-4">Perguntas Frequentes</h4>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-foreground">Como posso sugerir um novo feriado?</p>
                    <p className="text-muted-foreground">Entre em contato conosco com informações históricas e culturais sobre a data.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Vocês incluem feriados municipais?</p>
                    <p className="text-muted-foreground">Focamos em feriados nacionais e estaduais, mas consideramos sugestões locais importantes.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Como posso colaborar com conteúdo?</p>
                    <p className="text-muted-foreground">Historiadores e especialistas em cultura brasileira são sempre bem-vindos!</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Community Section */}
          <section className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Faça Parte da Nossa Comunidade</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Junte-se a milhares de brasileiros que compartilham suas tradições familiares 
              e ajudam a preservar nossa cultura para as próximas gerações.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/sobre">
                <Button variant="outline" size="lg">
                  Conheça Nossa Missão
                </Button>
              </Link>
              <Link to="/tradicoes">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                  Explorar Tradições
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Contato;