import { useSEO } from "@/hooks/useSEO";
import { SITE_URL, EDITORIAL, LEGAL_ENTITY } from "@/lib/site-config";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SchemaScript } from "@/components/content/SchemaScript";
import { Card } from "@/components/ui/card";
import { Mail, Calendar, BookOpen } from "lucide-react";

const AutorGabrielCandido = () => {
  const canonical = `${SITE_URL}/autor/gabriel-candido`;

  useSEO({
    title: "Gabriel Candido da Silva — Editor e Pesquisador de Cultura Brasileira",
    description: `Conheça ${EDITORIAL.authorName}, editor do Calendário Brasileiro. Pesquisador especializado em feriados, tradições culturais e folclore do Brasil.`,
    keywords: "Gabriel Candido, autor calendário brasileiro, pesquisador cultura brasileira, editor feriados",
    canonical,
    ogType: "profile",
  });

  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: EDITORIAL.authorName,
    jobTitle: EDITORIAL.authorRole,
    email: LEGAL_ENTITY.email,
    worksFor: {
      "@type": "Organization",
      name: LEGAL_ENTITY.name,
      url: SITE_URL,
    },
    knowsAbout: [
      "Feriados Brasileiros",
      "Cultura Brasileira",
      "Tradições Regionais",
      "Folclore Brasileiro",
      "História do Brasil",
    ],
    url: canonical,
    sameAs: [],
  };

  return (
    <>
      <SchemaScript data={authorSchema} />
      <ArticleLayout
        title={EDITORIAL.authorName}
        subtitle={EDITORIAL.authorRole}
        breadcrumbs={[{ title: "Equipe", href: "/equipe" }, { title: "Gabriel Candido" }]}
      >
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Sobre o Autor</h2>
            <p className="text-muted-foreground leading-relaxed">
              {EDITORIAL.authorName} é o editor e pesquisador principal do Calendário Brasileiro,
              dedicado a documentar e preservar as tradições culturais que fazem do Brasil único.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Com formação em pesquisa cultural e anos de experiência em documentação de tradições
              regionais, Gabriel lidera a equipe editorial responsável por verificar e atualizar
              todas as informações sobre feriados nacionais, estaduais e municipais publicadas no site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Áreas de Especialização</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Feriados e Datas Comemorativas</h3>
                    <p className="text-sm text-muted-foreground">
                      Pesquisa sobre legislação, origem e significado de feriados nacionais e regionais
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Tradições Culturais</h3>
                    <p className="text-sm text-muted-foreground">
                      Documentação de folclore, festas populares e manifestações culturais brasileiras
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Diversidade Regional</h3>
                    <p className="text-sm text-muted-foreground">
                      Estudo das diferenças culturais entre as cinco regiões brasileiras
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">História e Origem</h3>
                    <p className="text-sm text-muted-foreground">
                      Pesquisa histórica sobre a evolução das celebrações brasileiras
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Metodologia de Pesquisa</h2>
            <p className="text-muted-foreground leading-relaxed">
              Todo conteúdo publicado por Gabriel segue rigorosos padrões editoriais, incluindo:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
              <li>Verificação cruzada com fontes oficiais do governo federal e estadual</li>
              <li>Consulta a documentos históricos e acadêmicos</li>
              <li>Entrevistas com especialistas em cultura regional</li>
              <li>Revisão anual de todas as datas e informações</li>
              <li>Atualização contínua conforme mudanças na legislação</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Publicações e Artigos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Gabriel é autor de diversos artigos sobre feriados e cultura brasileira publicados no
              blog do Calendário Brasileiro, cobrindo temas como:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
              <li>História e evolução do Carnaval brasileiro</li>
              <li>Tradições regionais das festas juninas</li>
              <li>Significado cultural dos feriados religiosos</li>
              <li>Análise comparativa de feriados entre estados</li>
              <li>Guias de planejamento de férias e emendas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contato</h2>
            <Card className="p-6">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href={`mailto:${LEGAL_ENTITY.email}`}
                    className="text-primary hover:underline"
                  >
                    {LEGAL_ENTITY.email}
                  </a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Para sugestões, correções ou parcerias editoriais, entre em contato diretamente.
              </p>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Transparência Editorial</h2>
            <p className="text-muted-foreground leading-relaxed">
              {EDITORIAL.authorName} segue os princípios de E-E-A-T (Experience, Expertise, 
              Authoritativeness, Trustworthiness) do Google, garantindo que todo conteúdo seja:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
              <li><strong>Baseado em experiência:</strong> Anos de pesquisa em cultura brasileira</li>
              <li><strong>Especializado:</strong> Foco exclusivo em feriados e tradições do Brasil</li>
              <li><strong>Autoritativo:</strong> Verificação com fontes governamentais oficiais</li>
              <li><strong>Confiável:</strong> Revisão constante e correção de informações</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              Última revisão editorial: {new Date(EDITORIAL.lastReviewed).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
          </section>
        </div>
      </ArticleLayout>
    </>
  );
};

export default AutorGabrielCandido;
