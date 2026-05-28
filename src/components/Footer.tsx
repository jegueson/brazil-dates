import { Link } from "react-router-dom";
import { LEGAL_ENTITY } from "@/lib/site-config";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Calendário Brasileiro</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Guia editorial de feriados nacionais, estaduais e ferramentas para planejar
              folgas e celebrações no Brasil.
            </p>
            <p className="text-xs text-muted-foreground mt-3">
              Responsável: {LEGAL_ENTITY.responsible}
              <br />
              {LEGAL_ENTITY.email}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Calendário</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/feriados/2026" className="text-muted-foreground hover:text-primary">Feriados 2026</Link></li>
              <li><Link to="/feriados/2027" className="text-muted-foreground hover:text-primary">Feriados 2027</Link></li>
              <li><Link to="/regionais" className="text-muted-foreground hover:text-primary">Por estado</Link></li>
              <li><Link to="/perguntas-frequentes" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Ferramentas</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/calculadora-dias-uteis" className="text-muted-foreground hover:text-primary">Dias úteis</Link></li>
              <li><Link to="/planejador-de-ferias" className="text-muted-foreground hover:text-primary">Planejador de férias</Link></li>
              <li><Link to="/exportar" className="text-muted-foreground hover:text-primary">Exportar iCal</Link></li>
              <li><Link to="/widget" className="text-muted-foreground hover:text-primary">Widget</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Editorial</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/equipe" className="text-muted-foreground hover:text-primary">Equipe</Link></li>
              <li><Link to="/linha-editorial" className="text-muted-foreground hover:text-primary">Linha editorial</Link></li>
              <li><Link to="/como-apuramos-as-datas" className="text-muted-foreground hover:text-primary">Metodologia</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link to="/contato" className="text-muted-foreground hover:text-primary">Contato</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 mt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {LEGAL_ENTITY.name}. Celebrando a cultura brasileira.</p>
          <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-2">
            <Link to="/privacidade" className="hover:text-primary">Privacidade</Link>
            <Link to="/termos" className="hover:text-primary">Termos</Link>
            <Link to="/sobre" className="hover:text-primary">Sobre</Link>
            <a href="/sitemap.xml" className="hover:text-primary">Sitemap</a>
            <a href="/feed.xml" className="hover:text-primary">RSS</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
