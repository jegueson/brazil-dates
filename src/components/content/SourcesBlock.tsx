import { ExternalLink, BookOpen } from "lucide-react";

export interface SourceItem {
  title: string;
  url?: string;
}

interface SourcesBlockProps {
  sources: SourceItem[];
}

/** E-E-A-T: cited sources for holiday and editorial content. */
export function SourcesBlock({ sources }: SourcesBlockProps) {
  if (sources.length === 0) return null;

  return (
    <section className="mt-8 p-6 bg-muted/20 rounded-xl border border-border">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold">Fontes e referências</h2>
      </div>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {sources.map((source, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-primary font-medium">{i + 1}.</span>
            {source.url ? (
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary inline-flex items-center gap-1 underline-offset-2 hover:underline"
              >
                {source.title}
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <span>{source.title}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
