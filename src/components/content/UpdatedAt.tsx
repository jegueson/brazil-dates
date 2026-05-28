import { EDITORIAL } from "@/lib/site-config";
import { Calendar } from "lucide-react";

interface UpdatedAtProps {
  date?: string;
  author?: string;
}

/** E-E-A-T: visible last-reviewed date and author on editorial pages. */
export function UpdatedAt({
  date = EDITORIAL.lastReviewed,
  author = EDITORIAL.authorName,
}: UpdatedAtProps) {
  const formatted = new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div
      className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 rounded-lg px-4 py-2 border border-border/50"
      data-testid="updated-at"
    >
      <Calendar className="w-4 h-4 shrink-0" />
      <span>
        Atualizado em <strong className="text-foreground">{formatted}</strong> por{" "}
        <strong className="text-foreground">{author}</strong>
      </span>
    </div>
  );
}
