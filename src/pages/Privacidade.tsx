import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Eye, Lock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Privacidade = () => {
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
                Política de Privacidade
              </h1>
              <p className="text-sm text-muted-foreground">
                Como protegemos seus dados pessoais
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
              <Shield className="w-10 h-10 text-white" />
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                Sua Privacidade é Nossa Prioridade
              </h2>
              <p className="text-lg text-muted-foreground">
                Última atualização: Janeiro de 2025
              </p>
            </div>
          </section>

          {/* Introduction */}
          <section className="bg-gradient-to-r from-muted/20 via-card to-muted/20 rounded-xl p-6 border border-border">
            <p className="text-muted-foreground leading-relaxed">
              O Calendário Brasileiro está comprometido em proteger sua privacidade e dados pessoais. 
              Esta política descreve como coletamos, usamos e protegemos suas informações quando você 
              usa nosso site e serviços.
            </p>
          </section>

          {/* Data Collection */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Eye className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Informações que Coletamos</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary/10 via-card to-primary/5 rounded-xl p-6 border border-primary/20">
                <h4 className="font-bold text-lg mb-3">Informações Fornecidas por Você</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Nome e endereço de e-mail (formulário de contato)</li>
                  <li>• Mensagens e feedback enviados</li>
                  <li>• Preferências de feriados (se cadastradas)</li>
                  <li>• Informações de localização (se permitidas)</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-accent/10 via-card to-accent/5 rounded-xl p-6 border border-accent/20">
                <h4 className="font-bold text-lg mb-3">Informações Coletadas Automaticamente</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Endereço IP e dados de navegação</li>
                  <li>• Tipo de dispositivo e navegador</li>
                  <li>• Páginas visitadas e tempo de permanência</li>
                  <li>• Cookies e tecnologias similares</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Data */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-bold">Como Usamos Suas Informações</h3>
            </div>
            
            <div className="bg-gradient-to-r from-muted/20 via-card to-muted/20 rounded-xl p-6 border border-border">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Finalidades Principais</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Fornecer informações sobre feriados brasileiros</li>
                    <li>• Responder suas mensagens e dúvidas</li>
                    <li>• Melhorar a experiência do usuário</li>
                    <li>• Enviar notificações sobre feriados (se solicitado)</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Análises e Melhorias</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Analisar padrões de uso do site</li>
                    <li>• Identificar problemas técnicos</li>
                    <li>• Desenvolver novos recursos</li>
                    <li>• Personalizar conteúdo relevante</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Data Protection */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Lock className="w-6 h-6 text-holiday-cultural" />
              <h3 className="text-2xl font-bold">Como Protegemos Seus Dados</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-100/20 via-card to-green-50/10 rounded-xl p-6 border border-green-200/30 text-center">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Criptografia</h4>
                <p className="text-sm text-muted-foreground">
                  Todos os dados são transmitidos usando criptografia SSL/TLS
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-100/20 via-card to-blue-50/10 rounded-xl p-6 border border-blue-200/30 text-center">
                <Lock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Acesso Restrito</h4>
                <p className="text-sm text-muted-foreground">
                  Apenas pessoal autorizado tem acesso aos dados pessoais
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-100/20 via-card to-purple-50/10 rounded-xl p-6 border border-purple-200/30 text-center">
                <Eye className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Monitoramento</h4>
                <p className="text-sm text-muted-foreground">
                  Sistemas são constantemente monitorados por ameaças
                </p>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold">Cookies e Tecnologias Similares</h3>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-muted/20 via-card to-muted/20 rounded-xl p-6 border border-border">
                <h4 className="font-semibold text-lg mb-3">Tipos de Cookies que Utilizamos</h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p><strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site.</p>
                  <p><strong>Cookies de Análise:</strong> Nos ajudam a entender como você usa o site.</p>
                  <p><strong>Cookies de Preferência:</strong> Lembram suas configurações e preferências.</p>
                  <p><strong>Cookies de Marketing:</strong> Utilizados para mostrar conteúdo relevante (Google Tag Manager).</p>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Você pode gerenciar suas preferências de cookies através das configurações do seu navegador. 
                Note que desabilitar alguns cookies pode afetar a funcionalidade do site.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold">Seus Direitos (LGPD)</h3>
            
            <div className="bg-gradient-to-r from-primary/10 via-card to-accent/10 rounded-xl p-6 border border-primary/20">
              <p className="mb-4 text-muted-foreground">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Acesso:</strong> Saber quais dados temos sobre você</li>
                  <li>• <strong>Correção:</strong> Corrigir dados incorretos ou incompletos</li>
                  <li>• <strong>Exclusão:</strong> Solicitar a remoção de seus dados</li>
                  <li>• <strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
                </ul>
                
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Oposição:</strong> Opor-se ao tratamento de dados</li>
                  <li>• <strong>Revogação:</strong> Retirar consentimento a qualquer momento</li>
                  <li>• <strong>Informação:</strong> Saber com quem compartilhamos dados</li>
                  <li>• <strong>Não discriminação:</strong> Não ser discriminado por exercer direitos</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Sharing */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold">Compartilhamento de Dados</h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Não vendemos ou alugamos suas informações pessoais para terceiros. 
                Podemos compartilhar dados apenas nas seguintes situações:
              </p>
              
              <ul className="space-y-2 text-sm ml-4">
                <li>• Com provedores de serviços que nos ajudam a operar o site</li>
                <li>• Quando exigido por lei ou autoridades competentes</li>
                <li>• Para proteger nossos direitos legais ou segurança</li>
                <li>• Com seu consentimento explícito</li>
              </ul>
            </div>
          </section>

          {/* Contact and Changes */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold">Contato e Alterações</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary/10 via-card to-primary/5 rounded-xl p-6 border border-primary/20">
                <h4 className="font-bold text-lg mb-3">Entre em Contato</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Para exercer seus direitos ou esclarecer dúvidas sobre privacidade:
                </p>
                <p className="text-sm text-foreground font-medium">
                  E-mail: privacidade@calendariobrasileiro.com.br
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-accent/10 via-card to-accent/5 rounded-xl p-6 border border-accent/20">
                <h4 className="font-bold text-lg mb-3">Alterações na Política</h4>
                <p className="text-sm text-muted-foreground">
                  Esta política pode ser atualizada ocasionalmente. Alterações significativas 
                  serão notificadas através do site ou por e-mail.
                </p>
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

export default Privacidade;