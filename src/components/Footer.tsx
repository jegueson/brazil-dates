import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Calendário Brasileiro</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Seu guia completo para os feriados e datas comemorativas do Brasil. 
              Planeje suas celebrações com antecedência e conheça nossas tradições.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>🇧🇷 Feriados Federais</li>
              <li>⛪ Feriados Religiosos</li>
              <li>🎉 Festas Culturais</li>
              <li>🛍️ Datas Comerciais</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Páginas</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/regionais" className="text-muted-foreground hover:text-primary transition-colors">Regionais</Link></li>
              <li><Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre</Link></li>
              <li><Link to="/historia" className="text-muted-foreground hover:text-primary transition-colors">História dos Feriados</Link></li>
              <li><Link to="/tradicoes" className="text-muted-foreground hover:text-primary transition-colors">Tradições</Link></li>
              <li><Link to="/contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 mt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Calendário Brasileiro. Celebrando a cultura brasileira.</p>
          <div className="mt-3 space-x-4">
            <Link to="/privacidade" className="hover:text-primary transition-colors">Política de Privacidade</Link>
            <Link to="/termos" className="hover:text-primary transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
