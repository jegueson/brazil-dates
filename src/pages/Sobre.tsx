import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO, seoConfigs } from "@/hooks/useSEO";

const Sobre = () => {
  useSEO(seoConfigs.sobre);
  
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
                Sobre o Calendário Brasileiro
              </h1>
              <p className="text-sm text-muted-foreground">
                Conheça nossa missão e história
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
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-foreground">
                Celebrando a Riqueza Cultural Brasileira
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                O Calendário Brasileiro nasceu da paixão de preservar e compartilhar as tradições 
                que fazem do Brasil um país único no mundo.
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary/10 via-card to-primary/5 rounded-xl p-6 border border-primary/20 animate-fade-in">
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Nossa Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Preservar e difundir as tradições brasileiras, conectando pessoas às suas raízes 
                culturais e promovendo o conhecimento sobre nossa rica diversidade de celebrações.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-accent/10 via-card to-accent/5 rounded-xl p-6 border border-accent/20 animate-fade-in">
              <Users className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Nossa Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser a principal referência em informações sobre feriados e tradições brasileiras, 
                ajudando famílias a se planejarem e celebrarem juntas.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-holiday-cultural/10 via-card to-holiday-cultural/5 rounded-xl p-6 border border-holiday-cultural/20 animate-fade-in">
              <Calendar className="w-12 h-12 text-holiday-cultural mb-4" />
              <h3 className="text-xl font-bold mb-3">Nossos Valores</h3>
              <p className="text-muted-foreground leading-relaxed">
                Compromisso com a precisão histórica, respeito à diversidade cultural e 
                paixão pela educação sobre as tradições que nos unem como brasileiros.
              </p>
            </div>
          </section>

          {/* Content Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center">O que Oferecemos</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary">📅 Calendário Completo</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nosso calendário interativo apresenta todos os feriados federais, religiosos, 
                  culturais e comerciais do Brasil. Cada data é cuidadosamente pesquisada e 
                  apresentada com informações históricas precisas.
                </p>
                
                <h3 className="text-2xl font-semibold text-accent">🎭 Tradições Regionais</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Reconhecemos que o Brasil é um país continental com diversas culturas. 
                  Por isso, destacamos as variações regionais de cada celebração, desde o 
                  Carnaval carioca até as Festas Juninas nordestinas.
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-holiday-cultural">📚 Conteúdo Educativo</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cada feriado inclui informações detalhadas sobre sua origem, tradições, 
                  significado cultural e dicas de como celebrar. Nosso objetivo é educar 
                  e inspirar novas gerações a valorizar nossa herança cultural.
                </p>
                
                <h3 className="text-2xl font-semibold text-primary">⏰ Planejamento</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Com nosso sistema de contagem regressiva e busca avançada, você pode 
                  planejar suas celebrações com antecedência, garantindo que nenhuma 
                  data especial passe despercebida.
                </p>
              </div>
            </div>
          </section>

          {/* History Section */}
          <section className="bg-gradient-to-r from-muted/20 via-card to-muted/20 rounded-xl p-8 border border-border">
            <h2 className="text-3xl font-bold mb-6 text-center">Nossa História</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                O projeto Calendário Brasileiro nasceu em 2024 da necessidade de reunir em um 
                só lugar todas as informações sobre as celebrações brasileiras. Percebemos que 
                muitas pessoas, especialmente as novas gerações, estavam perdendo o contato com 
                as tradições familiares e regionais.
              </p>
              <p>
                Nossa equipe de pesquisadores culturais trabalha constantemente para garantir 
                a precisão das informações, consultando fontes históricas confiáveis, 
                especialistas em folclore brasileiro e instituições culturais renomadas.
              </p>
              <p>
                Hoje, servimos milhares de usuários que buscam reconectar-se com suas raízes 
                culturais, planejar celebrações familiares ou simplesmente aprender mais sobre 
                a riqueza das tradições brasileiras.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Faça Parte da Nossa Comunidade</h2>
            <p className="text-muted-foreground text-lg">
              Junte-se a milhares de brasileiros que já usam nosso calendário para 
              celebrar e preservar nossas tradições.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                  Explorar Calendário
                </Button>
              </Link>
              <Link to="/contato">
                <Button variant="outline" size="lg">
                  Entre em Contato
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Sobre;