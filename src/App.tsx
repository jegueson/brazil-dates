import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Historia from "./pages/Historia";
import Tradicoes from "./pages/Tradicoes";
import Contato from "./pages/Contato";
import Privacidade from "./pages/Privacidade";
import Termos from "./pages/Termos";
import Regionais from "./pages/Regionais";
import Regional from "./pages/Regional";
import NotFound from "./pages/NotFound";
import Feriado from "./pages/Feriado";
import FeriadosAno from "./pages/FeriadosAno";
import FeriadosMes from "./pages/FeriadosMes";
import QuandoE from "./pages/QuandoE";
import QuantosDias from "./pages/QuantosDias";
import PerguntasFrequentes from "./pages/PerguntasFrequentes";
import Equipe from "./pages/Equipe";
import LinhaEditorial from "./pages/LinhaEditorial";
import ComoApuramos from "./pages/ComoApuramos";
import Cidade from "./pages/Cidade";
import QualEstadoMaisFeriados from "./pages/comparativas/QualEstadoMaisFeriados";
import FeriadosProlongados from "./pages/comparativas/FeriadosProlongados";
import PontosFacultativos from "./pages/comparativas/PontosFacultativos";
import FeriadoBancario from "./pages/comparativas/FeriadoBancario";
import FimDeSemana from "./pages/comparativas/FimDeSemana";
import CalculadoraDiasUteis from "./pages/tools/CalculadoraDiasUteis";
import CalculadoraPrazos from "./pages/tools/CalculadoraPrazos";
import PlanejadorFerias from "./pages/tools/PlanejadorFerias";
import EmendasFeriado from "./pages/tools/EmendasFeriado";
import Exportar from "./pages/tools/Exportar";
import Widget from "./pages/tools/Widget";
import WidgetEmbed from "./pages/tools/WidgetEmbed";
import Imprimir from "./pages/tools/Imprimir";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-[40vh] flex items-center justify-center text-muted-foreground">
    Carregando…
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/tradicoes" element={<Tradicoes />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/regionais" element={<Regionais />} />
            <Route path="/regional/:state" element={<Regional />} />
            <Route path="/feriado/:slug" element={<Feriado />} />
            <Route path="/feriados/:year" element={<FeriadosAno />} />
            <Route path="/feriados/:year/:month" element={<FeriadosMes />} />
            <Route path="/quando-e/:slug" element={<QuandoE />} />
            <Route path="/quantos-dias-faltam/:slug" element={<QuantosDias />} />
            <Route path="/perguntas-frequentes" element={<PerguntasFrequentes />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/linha-editorial" element={<LinhaEditorial />} />
            <Route path="/como-apuramos-as-datas" element={<ComoApuramos />} />
            <Route path="/cidade/:slug" element={<Cidade />} />
            <Route path="/qual-estado-tem-mais-feriados" element={<QualEstadoMaisFeriados />} />
            <Route path="/feriados-prolongados-2026" element={<FeriadosProlongados />} />
            <Route path="/pontos-facultativos-2026" element={<PontosFacultativos />} />
            <Route path="/feriado-bancario-vs-feriado-nacional" element={<FeriadoBancario />} />
            <Route path="/feriado-cai-em-fim-de-semana-2026" element={<FimDeSemana />} />
            <Route path="/calculadora-dias-uteis" element={<CalculadoraDiasUteis />} />
            <Route path="/calculadora-prazos" element={<CalculadoraPrazos />} />
            <Route path="/planejador-de-ferias" element={<PlanejadorFerias />} />
            <Route path="/emendas-de-feriado/:year" element={<EmendasFeriado />} />
            <Route path="/exportar" element={<Exportar />} />
            <Route path="/widget" element={<Widget />} />
            <Route path="/widget-embed" element={<WidgetEmbed />} />
            <Route path="/imprimir" element={<Imprimir />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
