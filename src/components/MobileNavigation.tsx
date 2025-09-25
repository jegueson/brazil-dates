import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Flag, Home, Info, History, Sparkles, Mail, Shield, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Início", icon: Home },
    { href: "/sobre", label: "Sobre", icon: Info },
    { href: "/historia", label: "História", icon: History },
    { href: "/tradicoes", label: "Tradições", icon: Sparkles },
    { href: "/contato", label: "Contato", icon: Mail },
    { href: "/privacidade", label: "Privacidade", icon: Shield },
    { href: "/termos", label: "Termos", icon: FileText },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="w-4 h-4" />
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="w-[300px] bg-background/95 backdrop-blur-lg border-l border-border/50"
      >
        <SheetHeader>
          <SheetTitle className="flex items-center gap-3 text-left">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Flag className="w-4 h-4 text-white" />
            </div>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Calendário Brasileiro
            </span>
          </SheetTitle>
        </SheetHeader>
        
        <nav className="mt-8">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    onClick={handleLinkClick}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg text-foreground hover:bg-muted transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="bg-gradient-to-br from-holiday-cultural/10 via-card to-holiday-cultural/5 rounded-lg p-4 border border-holiday-cultural/20">
            <p className="text-sm text-muted-foreground leading-relaxed">
              📅 Explore os feriados brasileiros e planeje suas celebrações com antecedência!
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}