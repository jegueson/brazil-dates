import { brazilianHolidays } from "@/data/brazilian-holidays";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

/** Minimal embed page for iframe widget — no chrome. */
const WidgetEmbed = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const upcoming = brazilianHolidays
    .filter((h) => {
      const d = parseISO(h.date);
      return d >= today && (h.type === "federal" || h.type === "religious");
    })
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 3);

  return (
    <div className="min-h-[200px] p-4 bg-white text-gray-900 font-sans text-sm">
      <p className="font-bold mb-2">Próximos feriados 🇧🇷</p>
      <ul className="space-y-1">
        {upcoming.map((h) => (
          <li key={h.id}>
            {format(parseISO(h.date), "dd/MM", { locale: ptBR })} — {h.name}
          </li>
        ))}
      </ul>
      <a
        href="https://calendario-feriados.com.br"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-700 text-xs mt-3 inline-block"
      >
        Calendário Brasileiro
      </a>
    </div>
  );
};

export default WidgetEmbed;
