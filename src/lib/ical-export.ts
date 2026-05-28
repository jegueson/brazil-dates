import { BrazilianHoliday } from "@/data/brazilian-holidays";
import { RegionalHoliday } from "@/data/regional-holidays";
import { format, parseISO } from "date-fns";

function escapeIcal(text: string): string {
  return text.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}

function toIcalDate(dateStr: string): string {
  const d = parseISO(dateStr);
  return format(d, "yyyyMMdd");
}

export function generateIcs(
  events: Array<{ name: string; date: string; description?: string }>,
  calendarName: string
): string {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Calendario Brasileiro//PT-BR",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    `X-WR-CALNAME:${escapeIcal(calendarName)}`,
  ];

  for (const ev of events) {
    const uid = `${ev.date}-${ev.name.replace(/\s+/g, "-").toLowerCase()}@calendario-feriados.com.br`;
    lines.push(
      "BEGIN:VEVENT",
      `UID:${uid}`,
      `DTSTART;VALUE=DATE:${toIcalDate(ev.date)}`,
      `DTEND;VALUE=DATE:${toIcalDate(ev.date)}`,
      `SUMMARY:${escapeIcal(ev.name)}`,
      ev.description ? `DESCRIPTION:${escapeIcal(ev.description)}` : "",
      "END:VEVENT"
    );
  }

  lines.push("END:VCALENDAR");
  return lines.filter(Boolean).join("\r\n");
}

export function holidaysToIcsEvents(
  national: BrazilianHoliday[],
  regional: RegionalHoliday[] = []
): Array<{ name: string; date: string; description?: string }> {
  const nationalEvents = national.map((h) => ({
    name: h.name,
    date: h.date,
    description: h.description,
  }));
  const regionalEvents = regional.map((h) => ({
    name: h.name,
    date: h.date,
    description: h.description,
  }));
  return [...nationalEvents, ...regionalEvents].sort((a, b) =>
    a.date.localeCompare(b.date)
  );
}

export function downloadIcs(content: string, filename: string): void {
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
