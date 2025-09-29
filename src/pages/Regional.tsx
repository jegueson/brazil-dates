import { Link, useParams } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useSEO, getRegionalSEO } from "@/hooks/useSEO";
import { getRegionalHolidaysByState, RegionalHoliday } from "@/data/regional-holidays";
import { brazilianHolidays } from "@/data/brazilian-holidays";

const Regional = () => {
  const { state } = useParams<{ state: string }>();
  
  const getStateDisplayName = (stateParam: string): string => {
    const stateMap: { [key: string]: string } = {
      'rio-janeiro': 'Rio de Janeiro',
      'sao-paulo': 'São Paulo',
      'bahia': 'Bahia',
      'minas-gerais': 'Minas Gerais',
      'pernambuco': 'Pernambuco',
      'para': 'Pará',
      'rio-grande-sul': 'Rio Grande do Sul'
    };
    return stateMap[stateParam] || stateParam;
  };
  
  if (!state) {
    return <div>Estado não encontrado</div>;
  }

  const stateName = getStateDisplayName(state);
  const regionalHolidays = getRegionalHolidaysByState(stateName);
  const nationalHolidays = brazilianHolidays.filter(holiday => 
    holiday.type === 'federal' || holiday.type === 'religious'
  );

  // Get state region for SEO
  const getStateRegion = (stateName: string): string => {
    const regionMap: { [key: string]: string } = {
      'Rio de Janeiro': 'Sudeste',
      'São Paulo': 'Sudeste', 
      'Minas Gerais': 'Sudeste',
      'Espírito Santo': 'Sudeste',
      'Bahia': 'Nordeste',
      'Pernambuco': 'Nordeste',
      'Ceará': 'Nordeste',
      'Maranhão': 'Nordeste',
      'Paraíba': 'Nordeste',
      'Rio Grande do Norte': 'Nordeste',
      'Alagoas': 'Nordeste',
      'Sergipe': 'Nordeste',
      'Piauí': 'Nordeste',
      'Pará': 'Norte',
      'Amazonas': 'Norte',
      'Acre': 'Norte',
      'Rondônia': 'Norte',
      'Roraima': 'Norte',
      'Amapá': 'Norte',
      'Tocantins': 'Norte',
      'Rio Grande do Sul': 'Sul',
      'Santa Catarina': 'Sul',
      'Paraná': 'Sul',
      'Mato Grosso': 'Centro-Oeste',
      'Mato Grosso do Sul': 'Centro-Oeste',
      'Goiás': 'Centro-Oeste',
      'Distrito Federal': 'Centro-Oeste'
    };
    return regionMap[stateName] || 'Brasil';
  };

  const stateRegion = getStateRegion(stateName);

  // SEO Configuration with Brazilian optimizations
  useSEO(getRegionalSEO(state, stateName, stateRegion));

  const getStateInfo = (stateName: string) => {
    const stateInfo: { [key: string]: { region: string; capital: string; population: string; description: string } } = {
      'Rio de Janeiro': {
        region: 'Sudeste',
        capital: 'Rio de Janeiro',
        population: '17,4 milhões',
        description: 'Estado conhecido por suas praias, carnaval e cultura vibrante.'
      },
      'São Paulo': {
        region: 'Sudeste',
        capital: 'São Paulo',
        population: '46,6 milhões',
        description: 'Maior estado do Brasil, centro econômico e cultural do país.'
      },
      'Bahia': {
        region: 'Nordeste',
        capital: 'Salvador',
        population: '14,9 milhões',
        description: 'Estado com forte herança africana e tradições religiosas únicas.'
      },
      'Minas Gerais': {
        region: 'Sudeste',
        capital: 'Belo Horizonte',
        population: '21,4 milhões',
        description: 'Estado histórico com rica tradição cultural e gastronômica.'
      },
      'Pernambuco': {
        region: 'Nordeste',
        capital: 'Recife',
        population: '9,7 milhões',
        description: 'Berço do frevo e das festas juninas mais animadas do Brasil.'
      },
      'Pará': {
        region: 'Norte',
        capital: 'Belém',
        population: '8,7 milhões',
        description: 'Estado amazônico com tradições indígenas e o maior Círio do Brasil.'
      },
      'Rio Grande do Sul': {
        region: 'Sul',
        capital: 'Porto Alegre',
        population: '11,4 milhões',
        description: 'Estado com forte tradição gaúcha e cultura única no Brasil.'
      }
    };
    return stateInfo[stateName] || { region: '', capital: '', population: '', description: '' };
  };

  const stateInfo = getStateInfo(stateName);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Header showSearch={false} />
      
      {/* Custom Header for Regional Page */}
      <div className="bg-card/50 border-b border-border/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/regionais">
              <Button variant="outline" size="icon">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-holiday-cultural bg-clip-text text-transparent">
                Feriados de {stateName}
              </h1>
              <p className="text-sm text-muted-foreground">
                Calendário regional com tradições e celebrações locais
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
                {stateName} - Tradições e Feriados
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {stateInfo.description}
              </p>
            </div>
          </section>

          {/* State Info Cards */}
          <section className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-primary/10 via-card to-primary/5 rounded-xl p-6 border border-primary/20">
              <MapPin className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold text-lg mb-2">Região</h3>
              <p className="text-muted-foreground">{stateInfo.region}</p>
            </div>
            
            <div className="bg-gradient-to-br from-accent/10 via-card to-accent/5 rounded-xl p-6 border border-accent/20">
              <Calendar className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-bold text-lg mb-2">Capital</h3>
              <p className="text-muted-foreground">{stateInfo.capital}</p>
            </div>
            
            <div className="bg-gradient-to-br from-holiday-cultural/10 via-card to-holiday-cultural/5 rounded-xl p-6 border border-holiday-cultural/20">
              <Users className="w-8 h-8 text-holiday-cultural mb-3" />
              <h3 className="font-bold text-lg mb-2">População</h3>
              <p className="text-muted-foreground">{stateInfo.population} habitantes</p>
            </div>
          </section>

          {/* Regional Holidays */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Feriados Regionais</h2>
            
            {regionalHolidays.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regionalHolidays.map((holiday) => (
                  <div key={holiday.id} className="bg-gradient-to-br from-card via-muted/20 to-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg text-primary">{holiday.name}</h3>
                        <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {holiday.type}
                        </span>
                      </div>
                      
                      <p className="text-sm text-muted-foreground">
                        {new Date(holiday.date).toLocaleDateString('pt-BR', {
                          day: '2-digit',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </p>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {holiday.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Tradições:</h4>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {holiday.traditions.slice(0, 3).map((tradition, index) => (
                            <li key={index}>• {tradition}</li>
                          ))}
                          {holiday.traditions.length > 3 && (
                            <li className="text-primary">+{holiday.traditions.length - 3} mais...</li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Nenhum feriado regional encontrado</h3>
                <p className="text-muted-foreground">
                  Este estado não possui feriados regionais específicos cadastrados.
                </p>
              </div>
            )}
          </section>

          {/* National Holidays */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Feriados Nacionais</h2>
            <p className="text-center text-muted-foreground">
              Além dos feriados regionais, {stateName} também celebra todos os feriados nacionais do Brasil.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nationalHolidays.slice(0, 6).map((holiday) => (
                <div key={holiday.id} className="bg-gradient-to-br from-card via-muted/20 to-card rounded-xl p-6 border border-border">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg text-accent">{holiday.name}</h3>
                      <span className="text-sm bg-accent/10 text-accent px-2 py-1 rounded-full">
                        {holiday.type}
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      {new Date(holiday.date).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'long'
                      })}
                    </p>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {holiday.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/">
                <Button variant="outline" size="lg">
                  Ver Calendário Completo
                </Button>
              </Link>
            </div>
          </section>

          {/* Cultural Traditions */}
          <section className="bg-gradient-to-r from-muted/20 via-card to-muted/20 rounded-xl p-8 border border-border">
            <h2 className="text-3xl font-bold mb-6 text-center">Tradições Culturais de {stateName}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">🎭 Manifestações Culturais</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Carnaval com características regionais</li>
                  <li>• Festas religiosas tradicionais</li>
                  <li>• Danças folclóricas locais</li>
                  <li>• Música regional característica</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">🍽️ Gastronomia Típica</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Pratos tradicionais da região</li>
                  <li>• Doces e sobremesas locais</li>
                  <li>• Bebidas típicas</li>
                  <li>• Ingredientes regionais únicos</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Explore Mais Sobre {stateName}</h2>
            <p className="text-muted-foreground text-lg">
              Descubra todas as tradições e celebrações que fazem de {stateName} um estado único no Brasil.
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

export default Regional;
