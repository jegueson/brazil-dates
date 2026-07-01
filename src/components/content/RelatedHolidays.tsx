import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface RelatedHoliday {
  name: string;
  slug: string;
  description: string;
  date?: string;
}

interface RelatedHolidaysProps {
  holidays: RelatedHoliday[];
  title?: string;
}

export function RelatedHolidays({ holidays, title = "Feriados Relacionados" }: RelatedHolidaysProps) {
  if (holidays.length === 0) return null;

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {holidays.map((holiday) => (
          <Link key={holiday.slug} to={`/feriado/${holiday.slug}`}>
            <Card className="p-4 hover:shadow-lg transition-shadow h-full">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">{holiday.name}</h3>
                  {holiday.date && (
                    <p className="text-sm text-muted-foreground mb-2">{holiday.date}</p>
                  )}
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {holiday.description}
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
