import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useSEO, seoConfigs } from "@/hooks/useSEO";
import { getAllStates, getRegionalHolidaysByState } from "@/data/regional-holidays";

const Regionais = () => {
  useSEO(seoConfigs.regionais);

  const states = getAllStates();
  
  const getStateInfo = (stateName: string) => {
    const stateInfo: { [key: string]: { region: string; capital: string; population: string; description: string; flag: string } } = {
      'Rio de Janeiro': {
        region: 'Sudeste',
        capital: 'Rio de Janeiro',
        population: '17,4 milhões',
        description: 'Estado conhecido por suas praias, carnaval e cultura vibrante.',
        flag: '🏖️'
      },
      'São Paulo': {
        region: 'Sudeste',
        capital: 'São Paulo',
        population: '46,6 milhões',
        description: 'Maior estado do Brasil, centro econômico e cultural do país.',
        flag: '🏙️'
      },
      'Bahia': {
        region: 'Nordeste',
        capital: 'Salvador',
        population: '14,9 milhões',
        description: 'Estado com forte herança africana e tradições religiosas únicas.',
        flag: '🌴'
      },
      'Minas Gerais': {
        region: 'Sudeste',
        capital: 'Belo Horizonte',
        population: '21,4 milhões',
        description: 'Estado histórico com rica tradição cultural e gastronômica.',
        flag: '⛰️'
      },
      'Pernambuco': {
        region: 'Nordeste',
        capital: 'Recife',
        population: '9,7 milhões',
        description: 'Berço do frevo e das festas juninas mais animadas do Brasil.',
        flag: '🎭'
      },
      'Pará': {
        region: 'Norte',
        capital: 'Belém',
        population: '8,7 milhões',
        description: 'Estado amazônico com tradições indígenas e o maior Círio do Brasil.',
        flag: '🌳'
      },
      'Rio Grande do Sul': {
        region: 'Sul',
        capital: 'Porto Alegre',
        population: '11,4 milhões',
        description: 'Estado com forte tradição gaúcha e cultura única no Brasil.',
        flag: '🤠'
      }
    };
    return stateInfo[stateName] || { region: '', capital: '', population: '', description: '', flag: '🇧🇷' };
  };

  const getStateSlug = (stateName: string): string => {
    return stateName.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/ã/g, 'a')
      .replace(/á/g, 'a')
      .replace(/é/g, 'e')
      .replace(/í/g, 'i')
      .replace(/ó/g, 'o')
      .replace(/ú/g, 'u')
      .replace(/ç/g, 'c');
  };

  const getRegionColor = (region: string): string => {
    const colors: { [key: string]: string } = {
      'Norte': 'from-green-500 to-emerald-600',
      'Nordeste': 'from-yellow-500 to-orange-600',
      'Centro-Oeste': 'from-orange-500 to-red-600',
      'Sudeste': 'from-blue-500 to-indigo-600',
      'Sul': 'from-purple-500 to-pink-600'
    };
    return colors[region] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Header showSearch={false} />
      
      {/* Custom Header for Regionais Page */}
      <div className="bg-card/50 border-b border-border/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="outline" size="icon">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-holiday-cultural bg-clip-text text-transparent">
                Feriados Regionais do Brasil
              </h1>
              <p className="text-sm text-muted-foreground">
                Descubra as tradições e celebrações de cada estado
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Hero Section */}
          <section className="text-center space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-bounce-in">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-foreground">
                Brasil: Um Mosaico de Tradições
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Cada estado brasileiro possui suas próprias tradições, feriados regionais e 
                celebrações únicas que refletem nossa diversidade cultural.
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-primary/10 via-card to-primary/5 rounded-xl p-6 border border-primary/20 text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">27 Estados</h3>
              <p className="text-muted-foreground text-sm">Cada um com suas tradições</p>
            </div>
            
            <div className="bg-gradient-to-br from-accent/10 via-card to-accent/5 rounded-xl p-6 border border-accent/20 text-center">
              <Calendar className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">+200 Feriados</h3>
              <p className="text-muted-foreground text-sm">Regionais e municipais</p>
            </div>
            
            <div className="bg-gradient-to-br from-holiday-cultural/10 via-card to-holiday-cultural/5 rounded-xl p-6 border border-holiday-cultural/20 text-center">
              <Heart className="w-8 h-8 text-holiday-cultural mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">5 Regiões</h3>
              <p className="text-muted-foreground text-sm">Diversidade cultural</p>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 via-card to-primary/5 rounded-xl p-6 border border-primary/20 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">215 Milhões</h3>
              <p className="text-muted-foreground text-sm">De brasileiros</p>
            </div>
          </section>

          {/* States Grid */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Explore por Estado</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {states.map((state) => {
                const stateInfo = getStateInfo(state);
                const regionalHolidays = getRegionalHolidaysByState(state);
                const stateSlug = getStateSlug(state);
                
                return (
                  <Link 
                    key={state} 
                    to={`/regional/${stateSlug}`}
                    className="group block"
                  >
                    <div className="bg-gradient-to-br from-card via-muted/20 to-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{stateInfo.flag}</span>
                            <h3 className="font-bold text-lg text-primary group-hover:text-accent transition-colors">
                              {state}
                            </h3>
                          </div>
                          <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {stateInfo.region}
                          </span>
                        </div>
                        
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <p><strong>Capital:</strong> {stateInfo.capital}</p>
                          <p><strong>População:</strong> {stateInfo.population}</p>
                          <p><strong>Feriados regionais:</strong> {regionalHolidays.length}</p>
                        </div>
                        
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {stateInfo.description}
                        </p>
                        
                        {regionalHolidays.length > 0 && (
                          <div className="space-y-2">
                            <h4 className="font-semibold text-sm text-accent">Principais feriados:</h4>
                            <ul className="text-xs text-muted-foreground space-y-1">
                              {regionalHolidays.slice(0, 3).map((holiday, index) => (
                                <li key={index}>• {holiday.name}</li>
                              ))}
                              {regionalHolidays.length > 3 && (
                                <li className="text-primary">+{regionalHolidays.length - 3} mais...</li>
                              )}
                            </ul>
                          </div>
                        )}
                        
                        <div className="pt-2">
                          <span className="text-sm text-primary group-hover:text-accent transition-colors font-medium">
                            Ver calendário completo →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Regional Highlights */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Destaques Regionais</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { region: 'Norte', color: 'from-green-500 to-emerald-600', icon: '🌳', description: 'Tradições indígenas e amazônicas' },
                { region: 'Nordeste', color: 'from-yellow-500 to-orange-600', icon: '☀️', description: 'Forte herança africana e festas juninas' },
                { region: 'Centro-Oeste', color: 'from-orange-500 to-red-600', icon: '🌾', description: 'Cultura sertaneja e pantaneira' },
                { region: 'Sudeste', color: 'from-blue-500 to-indigo-600', icon: '🏙️', description: 'Diversidade urbana e rural' },
                { region: 'Sul', color: 'from-purple-500 to-pink-600', icon: '❄️', description: 'Tradições europeias e gaúchas' }
              ].map((region) => (
                <div key={region.region} className="bg-gradient-to-br from-card via-muted/20 to-card rounded-xl p-6 border border-border text-center">
                  <div className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-br ${region.color} flex items-center justify-center mb-4`}>
                    <span className="text-2xl">{region.icon}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{region.region}</h3>
                  <p className="text-sm text-muted-foreground">{region.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Descubra Sua Região</h2>
            <p className="text-muted-foreground text-lg">
              Cada estado brasileiro tem suas próprias tradições e celebrações. 
              Explore e descubra a riqueza cultural do seu estado.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                  Voltar ao Calendário
                </Button>
              </Link>
              <Link to="/tradicoes">
                <Button variant="outline" size="lg">
                  Conhecer Tradições
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Regionais;
