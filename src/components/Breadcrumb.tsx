import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { SchemaScript } from "./content/SchemaScript";
import { SITE_URL } from "@/lib/site-config";

interface BreadcrumbItem {
  title: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  // Generate BreadcrumbList structured data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": SITE_URL
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.title,
        ...(item.href && index < items.length - 1 ? { "item": `${SITE_URL}${item.href}` } : {})
      }))
    ]
  };

  return (
    <>
      <SchemaScript data={breadcrumbSchema} />
      <nav className="flex items-center space-x-2 text-sm text-muted-foreground py-4" aria-label="Breadcrumb">
        <Link 
          to="/" 
          className="flex items-center hover:text-primary transition-colors"
          aria-label="Página inicial"
        >
          <Home className="w-4 h-4" />
        </Link>
        
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4" />
            {item.href ? (
              <Link 
                to={item.href} 
                className="hover:text-primary transition-colors"
                aria-current={index === items.length - 1 ? "page" : undefined}
              >
                {item.title}
              </Link>
            ) : (
              <span className="text-foreground font-medium" aria-current="page">
                {item.title}
              </span>
            )}
          </div>
        ))}
      </nav>
    </>
  );
};