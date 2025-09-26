import { Link } from "react-router-dom";
import { ArrowLeft, FileText, AlertCircle, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO, seoConfigs } from "@/hooks/useSEO";

const Termos = () => {
  useSEO(seoConfigs.termos);
  
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
                Termos de Uso
              </h1>
              <p className="text-sm text-muted-foreground">
                Condições para uso do Calendário Brasileiro
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero Section */}
          <section className="text-center space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-bounce-in">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                Termos e Condições de Uso
              </h2>
              <p className="text-lg text-muted-foreground">
                Última atualização: Janeiro de 2025
              </p>
            </div>
          </section>

          {/* Introduction */}
          <section className="bg-gradient-to-r from-muted/20 via-card to-muted/20 rounded-xl p-6 border border-border">
            <p className="text-muted-foreground leading-relaxed">
              Bem-vindo ao Calendário Brasileiro. Estes termos de uso estabelecem as condições 
              para o acesso e utilização de nosso site e serviços. Ao usar nosso site, você 
              concorda em cumprir estes termos.
            </p>
          </section>

          {/* Acceptance */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h3 className="text-2xl font-bold">Aceitação dos Termos</h3>
            </div>
            
            <div className="bg-gradient-to-br from-green-100/20 via-card to-green-50/10 rounded-xl p-6 border border-green-200/30">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ao acessar e usar o site Calendário Brasileiro, você automaticamente concorda com estes 
                termos de uso. Se você não concordar com qualquer parte destes termos, 
                não deve usar nosso site.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Você deve ser maior de 18 anos ou ter autorização parental</li>
                <li>• Você é responsável por manter a segurança de sua conta</li>
                <li>• Você concorda em usar o site de forma legal e ética</li>
              </ul>
            </div>
          </section>

          {/* Services Description */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold">Descrição dos Serviços</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary/10 via-card to-primary/5 rounded-xl p-6 border border-primary/20">
                <h4 className="font-bold text-lg mb-3">O que Oferecemos</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Calendário interativo com feriados brasileiros</li>
                  <li>• Informações culturais e históricas</li>
                  <li>• Contagem regressiva para próximos feriados</li>
                  <li>• Sistema de busca e navegação</li>
                  <li>• Conteúdo educativo sobre tradições</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-accent/10 via-card to-accent/5 rounded-xl p-6 border border-accent/20">
                <h4 className="font-bold text-lg mb-3">Gratuidade</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Todos os serviços são oferecidos gratuitamente</li>
                  <li>• Não cobramos taxas de acesso ou assinatura</li>
                  <li>• Financiamos o site através de publicidade</li>
                  <li>• Reservamos o direito de introduzir serviços premium</li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-yellow-600" />
              <h3 className="text-2xl font-bold">Responsabilidades do Usuário</h3>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-100/20 via-card to-yellow-50/10 rounded-xl p-6 border border-yellow-200/30">
              <h4 className="font-bold text-lg mb-4">Uso Permitido</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="text-sm font-medium text-green-700">✓ Permitido:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Visualizar informações sobre feriados</li>
                    <li>• Compartilhar links do site</li>
                    <li>• Usar informações para fins pessoais</li>
                    <li>• Enviar feedback e sugestões</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <p className="text-sm font-medium text-red-700">✗ Proibido:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Copiar conteúdo sem autorização</li>
                    <li>• Usar para fins comerciais sem permissão</li>
                    <li>• Tentar hackear ou danificar o sistema</li>
                    <li>• Enviar spam ou conteúdo malicioso</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold">Propriedade Intelectual</h3>
            
            <div className="bg-gradient-to-r from-muted/20 via-card to-muted/20 rounded-xl p-6 border border-border">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Todo o conteúdo do site, incluindo textos, imagens, design, código e organização 
                  das informações, é de propriedade do Calendário Brasileiro ou de seus licenciadores.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Direitos Autorais</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Conteúdo original protegido por direitos autorais</li>
                      <li>• Uso educacional permitido com atribuição</li>
                      <li>• Reprodução comercial requer autorização</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Marcas</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• "Calendário Brasileiro" é nossa marca registrada</li>
                      <li>• Logos e identidade visual protegidos</li>
                      <li>• Uso não autorizado é proibido</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Disclaimers */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <XCircle className="w-6 h-6 text-red-600" />
              <h3 className="text-2xl font-bold">Limitações e Responsabilidades</h3>
            </div>
            
            <div className="bg-gradient-to-br from-red-100/20 via-card to-red-50/10 rounded-xl p-6 border border-red-200/30">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-lg mb-2">Precisão das Informações</h4>
                  <p className="text-sm text-muted-foreground">
                    Embora nos esforcemos para manter as informações precisas e atualizadas, 
                    não garantimos a exatidão completa de todas as informações. Recomendamos 
                    verificar datas oficiais em fontes governamentais.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-2">Disponibilidade do Serviço</h4>
                  <p className="text-sm text-muted-foreground">
                    Não garantimos que o site estará sempre disponível. Pode haver 
                    interrupções para manutenção, atualizações ou por problemas técnicos.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-2">Limitação de Responsabilidade</h4>
                  <p className="text-sm text-muted-foreground">
                    Não somos responsáveis por danos diretos ou indiretos resultantes do 
                    uso do site, incluindo perda de dados, lucros ou oportunidades de negócio.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy and Data */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold">Privacidade e Proteção de Dados</h3>
            
            <div className="bg-gradient-to-br from-primary/10 via-card to-accent/10 rounded-xl p-6 border border-primary/20">
              <p className="text-muted-foreground mb-4">
                O tratamento de seus dados pessoais é regido por nossa Política de Privacidade, 
                que faz parte integrante destes termos de uso.
              </p>
              
              <div className="flex justify-center">
                <Link to="/privacidade">
                  <Button variant="outline">
                    Ver Política de Privacidade
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Modifications */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold">Alterações nos Termos</h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Reservamos o direito de modificar estes termos a qualquer momento. 
                Alterações significativas serão notificadas através do site ou por e-mail.
              </p>
              
              <div className="bg-gradient-to-r from-muted/20 via-card to-muted/20 rounded-xl p-4 border border-border">
                <p className="text-sm">
                  <strong>Importante:</strong> O uso continuado do site após alterações nos termos 
                  constitui aceitação das novas condições.
                </p>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold">Lei Aplicável e Foro</h3>
            
            <div className="bg-gradient-to-r from-muted/20 via-card to-muted/20 rounded-xl p-6 border border-border">
              <p className="text-muted-foreground mb-4">
                Estes termos são regidos pelas leis da República Federativa do Brasil. 
                Qualquer disputa será resolvida no foro da comarca de São Paulo - SP.
              </p>
              
              <div className="text-sm text-muted-foreground space-y-2">
                <p><strong>Lei Aplicável:</strong> Legislação brasileira, incluindo:</p>
                <ul className="ml-4 space-y-1">
                  <li>• Lei Geral de Proteção de Dados (LGPD)</li>
                  <li>• Marco Civil da Internet</li>
                  <li>• Código de Defesa do Consumidor</li>
                  <li>• Código Civil Brasileiro</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold">Contato</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary/10 via-card to-primary/5 rounded-xl p-6 border border-primary/20">
                <h4 className="font-bold text-lg mb-3">Dúvidas sobre os Termos</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Se você tiver dúvidas sobre estes termos de uso:
                </p>
                <p className="text-sm text-foreground font-medium">
                  E-mail: juridico@calendariobrasileiro.com.br
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-accent/10 via-card to-accent/5 rounded-xl p-6 border border-accent/20">
                <h4 className="font-bold text-lg mb-3">Contato Geral</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Para outros assuntos relacionados ao site:
                </p>
                <Link to="/contato">
                  <Button variant="outline" size="sm">
                    Página de Contato
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Back to site */}
          <section className="text-center">
            <Link to="/">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                Voltar ao Calendário
              </Button>
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Termos;