import { Link } from "react-router-dom";
import { ArrowLeft, Music, Utensils, Gift, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO, seoConfigs } from "@/hooks/useSEO";

const Tradicoes = () => {
  useSEO(seoConfigs.tradicoes);
  
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
                Tradições Brasileiras
              </h1>
              <p className="text-sm text-muted-foreground">
                A riqueza cultural que nos une como nação
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
              <Music className="w-10 h-10 text-white" />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-foreground">
                Um Mosaico de Culturas
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                As tradições brasileiras são o resultado de séculos de miscigenação cultural, 
                criando celebrações únicas que expressam nossa identidade nacional.
              </p>
            </div>
          </section>

          {/* Categories */}
          <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-primary/10 via-card to-primary/5 rounded-xl p-6 border border-primary/20 animate-fade-in text-center">
              <Music className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Música & Dança</h3>
              <p className="text-sm text-muted-foreground">Ritmos que embalam nossas celebrações</p>
            </div>
            
            <div className="bg-gradient-to-br from-accent/10 via-card to-accent/5 rounded-xl p-6 border border-accent/20 animate-fade-in text-center">
              <Utensils className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Gastronomia</h3>
              <p className="text-sm text-muted-foreground">Sabores que contam nossa história</p>
            </div>
            
            <div className="bg-gradient-to-br from-holiday-cultural/10 via-card to-holiday-cultural/5 rounded-xl p-6 border border-holiday-cultural/20 animate-fade-in text-center">
              <Gift className="w-12 h-12 text-holiday-cultural mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Rituais</h3>
              <p className="text-sm text-muted-foreground">Cerimônias cheias de significado</p>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 via-card to-primary/5 rounded-xl p-6 border border-primary/20 animate-fade-in text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Regionais</h3>
              <p className="text-sm text-muted-foreground">Diversidade de norte a sul</p>
            </div>
          </section>

          {/* Major Traditions */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Principais Tradições</h2>
            
            {/* Carnaval */}
            <div className="bg-gradient-to-r from-muted/20 via-card to-muted/20 rounded-xl p-8 border border-border">
              <h3 className="text-2xl font-bold mb-4 text-primary">🎭 Carnaval</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    O Carnaval é nossa maior expressão cultural, misturando música, dança, 
                    arte e religiosidade. Cada região tem sua forma única de celebrar.
                  </p>
                  <h4 className="font-semibold">Tradições Principais:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Desfiles das escolas de samba no Rio de Janeiro</li>
                    <li>• Trio elétrico e axé music na Bahia</li>
                    <li>• Frevo e maracatu em Pernambuco</li>
                    <li>• Blocos de rua em todo o país</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold">Elementos Culturais:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Africanos:</strong> Ritmos percussivos e danças</li>
                    <li>• <strong>Indígenas:</strong> Cores e adornos</li>
                    <li>• <strong>Europeus:</strong> Organização em grupos e desfiles</li>
                    <li>• <strong>Modernos:</strong> Tecnologia em carros alegóricos</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Festas Juninas */}
            <div className="bg-gradient-to-r from-muted/20 via-card to-muted/20 rounded-xl p-8 border border-border">
              <h3 className="text-2xl font-bold mb-4 text-holiday-cultural">🌽 Festas Juninas</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Celebração do inverno e dos santos juninos, com fogueiras, quadrilhas 
                    e comidas típicas. Uma das tradições mais populares do interior.
                  </p>
                  <h4 className="font-semibold">Comidas Típicas:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Milho cozido e pamonha</li>
                    <li>• Quentão e vinho quente</li>
                    <li>• Pipoca e amendoim</li>
                    <li>• Bolo de milho e curau</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold">Atividades Tradicionais:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Quadrilha e dança country</li>
                    <li>• Casamento caipira encenado</li>
                    <li>• Fogueira e queima de fogos</li>
                    <li>• Pescaria e derrubada da lata</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Natal */}
            <div className="bg-gradient-to-r from-muted/20 via-card to-muted/20 rounded-xl p-8 border border-border">
              <h3 className="text-2xl font-bold mb-4 text-accent">🎄 Natal Brasileiro</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    O Natal brasileiro adapta tradições europeias ao clima tropical, 
                    criando celebrações únicas em família com pratos regionais.
                  </p>
                  <h4 className="font-semibold">Tradições Familiares:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Ceia na noite do dia 24</li>
                    <li>• Troca de presentes à meia-noite</li>
                    <li>• Missa do Galo</li>
                    <li>• Decoração com pisca-pisca</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold">Pratos Regionais:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Sul:</strong> Chester e panetone</li>
                    <li>• <strong>Nordeste:</strong> Frutos do mar</li>
                    <li>• <strong>Norte:</strong> Pato no tucumã</li>
                    <li>• <strong>Sudeste:</strong> Peru e rabanada</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Regional Traditions */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Tradições Regionais</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Norte */}
              <div className="bg-gradient-to-br from-green-100/20 via-card to-green-50/10 rounded-xl p-6 border border-green-200/30">
                <h3 className="text-xl font-bold text-green-700 mb-4">🌳 Região Norte</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Festival de Parintins:</strong> Boi-bumbá caprichoso e garantido</li>
                  <li>• <strong>Círio de Nazaré:</strong> Maior procissão católica do Brasil</li>
                  <li>• <strong>Festival de Inverno:</strong> Celebração amazônica</li>
                  <li>• <strong>Açaí:</strong> Fruto sagrado da região</li>
                </ul>
              </div>

              {/* Nordeste */}
              <div className="bg-gradient-to-br from-yellow-100/20 via-card to-yellow-50/10 rounded-xl p-6 border border-yellow-200/30">
                <h3 className="text-xl font-bold text-yellow-700 mb-4">☀️ Região Nordeste</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>São João:</strong> Maior festa junina do país</li>
                  <li>• <strong>Bumba meu boi:</strong> Auto popular maranhense</li>
                  <li>• <strong>Festa de Iemanjá:</strong> Rainha do mar</li>
                  <li>• <strong>Forró:</strong> Música e dança tradicional</li>
                </ul>
              </div>

              {/* Centro-Oeste */}
              <div className="bg-gradient-to-br from-orange-100/20 via-card to-orange-50/10 rounded-xl p-6 border border-orange-200/30">
                <h3 className="text-xl font-bold text-orange-700 mb-4">🌾 Centro-Oeste</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Siriri e Cururu:</strong> Danças tradicionais</li>
                  <li>• <strong>Festa do Peão:</strong> Cultura country brasileira</li>
                  <li>• <strong>Pantanal:</strong> Festivais da natureza</li>
                  <li>• <strong>Pacu assado:</strong> Gastronomia regional</li>
                </ul>
              </div>

              {/* Sudeste */}
              <div className="bg-gradient-to-br from-blue-100/20 via-card to-blue-50/10 rounded-xl p-6 border border-blue-200/30">
                <h3 className="text-xl font-bold text-blue-700 mb-4">🏙️ Região Sudeste</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Carnaval Carioca:</strong> Escolas de samba</li>
                  <li>• <strong>Festa de Aparecida:</strong> Padroeira do Brasil</li>
                  <li>• <strong>Congado:</strong> Folguedo afro-brasileiro</li>
                  <li>• <strong>Feijoada:</strong> Prato nacional aos sábados</li>
                </ul>
              </div>

              {/* Sul */}
              <div className="bg-gradient-to-br from-purple-100/20 via-card to-purple-50/10 rounded-xl p-6 border border-purple-200/30">
                <h3 className="text-xl font-bold text-purple-700 mb-4">❄️ Região Sul</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Oktoberfest:</strong> Herança alemã em Blumenau</li>
                  <li>• <strong>Festa da Uva:</strong> Tradição italiana</li>
                  <li>• <strong>Churrasco Gaúcho:</strong> Arte de assar carne</li>
                  <li>• <strong>Fandango:</strong> Dança tradicional</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Preserve Nossas Tradições</h2>
            <p className="text-muted-foreground text-lg">
              Cada geração tem a responsabilidade de manter vivas as tradições 
              que nos conectam como povo brasileiro.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                  Explorar Calendário
                </Button>
              </Link>
              <Link to="/historia">
                <Button variant="outline" size="lg">
                  Conhecer História
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Tradicoes;