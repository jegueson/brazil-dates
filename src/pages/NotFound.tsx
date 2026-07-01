import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log 404 error
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    
    // Track 404 in GTM
    if (window.dataLayer) {
      window.dataLayer.push({
        event: '404_error',
        page_path: location.pathname,
        page_location: window.location.href
      });
    }
  }, [location.pathname]);

  const popularPages = [
    { title: "Feriados 2026", href: "/feriados/2026", icon: Calendar },
    { title: "Carnaval", href: "/feriado/carnaval", icon: Calendar },
    { title: "Feriados Regionais", href: "/regionais", icon: MapPin },
    { title: "Calculadora de Dias Úteis", href: "/calculadora-dias-uteis", icon: Calendar },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/20 px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-8xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-bold text-foreground">Página Não Encontrada</h2>
          <p className="text-lg text-muted-foreground">
            Desculpe, a página <code className="bg-muted px-2 py-1 rounded">{location.pathname}</code> não existe.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Página Inicial
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/cidades">
              <Search className="w-4 h-4 mr-2" />
              Buscar Feriados
            </Link>
          </Button>
        </div>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Páginas Populares</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {popularPages.map((page) => (
              <Link
                key={page.href}
                to={page.href}
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors text-left"
              >
                <page.icon className="w-5 h-5 text-primary shrink-0" />
                <span className="font-medium">{page.title}</span>
              </Link>
            ))}
          </div>
        </Card>

        <p className="text-sm text-muted-foreground">
          Ou consulte nosso{" "}
          <Link to="/" className="text-primary hover:underline">
            mapa do site
          </Link>{" "}
          para encontrar o que procura.
        </p>
      </div>
    </div>
  );
};

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

export default NotFound;
