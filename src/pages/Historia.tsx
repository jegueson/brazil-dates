import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Crown, Cross, Palmtree } from "lucide-react";
import { Button } from "@/components/ui/button";

const Historia = () => {
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
                História dos Feriados Brasileiros
              </h1>
              <p className="text-sm text-muted-foreground">
                A evolução das celebrações ao longo dos séculos
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
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                Uma Jornada Através do Tempo
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Descubra como os feriados brasileiros evoluíram desde o período colonial 
                até os dias de hoje, refletindo nossa história e diversidade cultural.
              </p>
            </div>
          </section>

          {/* Timeline */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center mb-8">Linha do Tempo</h2>
            
            {/* Colonial Period */}
            <div className="bg-gradient-to-br from-amber-100/20 via-card to-amber-50/10 rounded-xl p-8 border border-amber-200/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                  <Cross className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-amber-700">1500-1822: Período Colonial</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Durante o período colonial, os feriados eram predominantemente religiosos, 
                    trazidos pelos colonizadores portugueses. O calendário litúrgico católico 
                    determinava as principais celebrações.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Natal e Páscoa:</strong> Principais celebrações cristãs</li>
                    <li>• <strong>Santos Padroeiros:</strong> Cada cidade tinha seu santo protetor</li>
                    <li>• <strong>Corpus Christi:</strong> Grande procissão e festividade</li>
                    <li>• <strong>Festas Juninas:</strong> Introduzidas pelos portugueses</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Imperial Period */}
            <div className="bg-gradient-to-br from-purple-100/20 via-card to-purple-50/10 rounded-xl p-8 border border-purple-200/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-purple-700">1822-1889: Período Imperial</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Com a independência, surgem os primeiros feriados nacionais patrióticos, 
                    embora a influência religiosa permanecesse forte. O Imperador Dom Pedro I 
                    estabelece algumas datas cívicas importantes.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>7 de Setembro (1822):</strong> Independência do Brasil</li>
                    <li>• <strong>2 de Dezembro:</strong> Aniversário do Imperador Pedro II</li>
                    <li>• <strong>Tiradentes (21 de Abril):</strong> Homenagem ao mártir da Inconfidência</li>
                    <li>• <strong>Carnaval:</strong> Ganha características brasileiras</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Republican Period */}
            <div className="bg-gradient-to-br from-green-100/20 via-card to-green-50/10 rounded-xl p-8 border border-green-200/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <Palmtree className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-green-700">1889-Presente: República</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A Proclamação da República trouxe novos feriados cívicos e a consolidação 
                    do calendário nacional. O século XX viu a criação de feriados trabalhistas 
                    e de consciência social.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>15 de Novembro (1889):</strong> Proclamação da República</li>
                    <li>• <strong>1º de Maio (1925):</strong> Dia do Trabalho</li>
                    <li>• <strong>12 de Outubro (1929):</strong> Nossa Senhora Aparecida</li>
                    <li>• <strong>20 de Novembro (2024):</strong> Consciência Negra - Feriado Nacional</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Cultural Influences */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Influências Culturais</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-red-100/20 via-card to-red-50/10 rounded-xl p-6 border border-red-200/30">
                <h3 className="text-xl font-bold text-red-700 mb-4">🇵🇹 Influência Portuguesa</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Os portugueses trouxeram o calendário católico, estabelecendo as principais 
                  festividades religiosas que ainda celebramos hoje, como Natal, Páscoa e 
                  Festas Juninas.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-100/20 via-card to-yellow-50/10 rounded-xl p-6 border border-yellow-200/30">
                <h3 className="text-xl font-bold text-yellow-700 mb-4">🌍 Influência Africana</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A cultura africana enriqueceu nossas celebrações com música, dança e 
                  religiosidade, especialmente visível no Carnaval e em festas como 
                  Iemanjá e Consciência Negra.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-brown-100/20 via-card to-brown-50/10 rounded-xl p-6 border border-brown-200/30">
                <h3 className="text-xl font-bold text-amber-700 mb-4">🏹 Influência Indígena</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Os povos indígenas contribuíram com conhecimentos sobre ciclos naturais, 
                  influenciando celebrações ligadas à natureza e aos períodos de plantio 
                  e colheita.
                </p>
              </div>
            </div>
          </section>

          {/* Modern Evolution */}
          <section className="bg-gradient-to-r from-muted/20 via-card to-muted/20 rounded-xl p-8 border border-border">
            <h2 className="text-3xl font-bold mb-6 text-center">Evolução Moderna</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <strong>Século XX e XXI:</strong> Os feriados brasileiros continuam evoluindo. 
                Novas datas são criadas para refletir conquistas sociais e reconhecer grupos 
                historicamente marginalizados, como o Dia da Consciência Negra.
              </p>
              <p>
                <strong>Regionalização:</strong> Cada estado e município pode ter seus próprios 
                feriados locais, refletindo a diversidade cultural do país. Isso resulta em 
                mais de 200 datas comemorativas diferentes pelo Brasil.
              </p>
              <p>
                <strong>Comercialização:</strong> Algumas datas ganharam forte apelo comercial, 
                como Dia das Mães, Dia dos Pais e Black Friday, adaptando tradições 
                internacionais ao contexto brasileiro.
              </p>
            </div>
          </section>

          {/* Fun Facts */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Curiosidades Históricas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary/10 via-card to-primary/5 rounded-xl p-6 border border-primary/20">
                <h3 className="font-bold text-lg mb-3 text-primary">🎭 Carnaval</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  O Carnaval brasileiro evoluiu do entrudo português, mas ganhou características 
                  únicas com influências africanas e indígenas. As primeiras escolas de samba 
                  surgiram no Rio de Janeiro na década de 1920.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-accent/10 via-card to-accent/5 rounded-xl p-6 border border-accent/20">
                <h3 className="font-bold text-lg mb-3 text-accent">⚰️ Finados</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  O Dia de Finados tem origem no século X, estabelecido pela Igreja Católica. 
                  No Brasil, ganhou características próprias, com famílias inteiras visitando 
                  cemitérios em clima de celebração da vida.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-holiday-cultural/10 via-card to-holiday-cultural/5 rounded-xl p-6 border border-holiday-cultural/20">
                <h3 className="font-bold text-lg mb-3 text-holiday-cultural">🔥 Festa Junina</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  As Festas Juninas celebram santos católicos, mas incorporaram tradições 
                  pagãs europeias de celebração do solstício de inverno, adaptadas ao 
                  hemisfério sul brasileiro.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 via-card to-primary/5 rounded-xl p-6 border border-primary/20">
                <h3 className="font-bold text-lg mb-3 text-primary">👑 Tiradentes</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Joaquim José da Silva Xavier foi escolhido como herói nacional durante 
                  a República para substituir as comemorações monárquicas. Seu feriado 
                  foi oficializado em 1890.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Historia;