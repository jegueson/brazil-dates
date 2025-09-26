import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  title: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
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
  );
};