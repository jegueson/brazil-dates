import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { UpdatedAt } from "./UpdatedAt";

interface BreadcrumbItem {
  title: string;
  href?: string;
}

interface ArticleLayoutProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  children: ReactNode;
  showUpdatedAt?: boolean;
  backHref?: string;
  backLabel?: string;
}

export function ArticleLayout({
  title,
  subtitle,
  breadcrumbs,
  children,
  showUpdatedAt = true,
  backHref = "/",
  backLabel = "Voltar ao calendário",
}: ArticleLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Header showSearch={false} />
      <div className="bg-card/50 border-b border-border/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to={backHref}>
              <Button variant="outline" size="icon" aria-label={backLabel}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-holiday-cultural bg-clip-text text-transparent">
                {title}
              </h1>
              {subtitle && (
                <p className="text-sm text-muted-foreground">{subtitle}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <Breadcrumb items={breadcrumbs} />
          {showUpdatedAt && <UpdatedAt />}
          <article className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            {children}
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
