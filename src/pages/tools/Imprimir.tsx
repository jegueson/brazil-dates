import { useState } from "react";
import { useSEO } from "@/hooks/useSEO";
import { SITE_URL } from "@/lib/site-config";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BRAZIL_STATES } from "@/data/brazil-states";
import { getFederalHolidaysForYear } from "@/lib/holiday-utils";
import { getRegionalHolidaysByState } from "@/data/regional-holidays";
import { formatDateBR } from "@/lib/holiday-utils";
import jsPDF from "jspdf";

const Imprimir = () => {
  const [year, setYear] = useState("2026");
  const [stateSlug, setStateSlug] = useState("");

  useSEO({
    title: "Imprimir Calendário de Feriados — PDF Personalizado",
    description: "Gere PDF com feriados nacionais e estaduais para imprimir ou arquivar.",
    canonical: `${SITE_URL}/imprimir`,
  });

  const generatePdf = () => {
    const y = parseInt(year, 10);
    const national = getFederalHolidaysForYear(y);
    const stateName = stateSlug
      ? BRAZIL_STATES.find((s) => s.slug === stateSlug)?.name
      : undefined;
    const regional = stateName ? getRegionalHolidaysByState(stateName) : [];

    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(`Feriados ${y} - Brasil${stateName ? ` (${stateName})` : ""}`, 14, 20);
    doc.setFontSize(11);
    let yPos = 32;
    doc.text("Feriados nacionais:", 14, yPos);
    yPos += 8;
    national.forEach((h) => {
      if (yPos > 270) {
        doc.addPage();
        yPos = 20;
      }
      doc.text(`• ${formatDateBR(h.date)} - ${h.name}`, 18, yPos);
      yPos += 7;
    });
    if (regional.length > 0) {
      yPos += 5;
      doc.text(`Feriados regionais (${stateName}):`, 14, yPos);
      yPos += 8;
      regional.forEach((h) => {
        if (yPos > 270) {
          doc.addPage();
          yPos = 20;
        }
        doc.text(`• ${formatDateBR(h.date)} - ${h.name}`, 18, yPos);
        yPos += 7;
      });
    }
    doc.save(`feriados-${y}${stateSlug ? `-${stateSlug}` : ""}.pdf`);
  };

  return (
    <ArticleLayout
      title="Imprimir calendário"
      subtitle="PDF personalizado por ano e estado"
      breadcrumbs={[{ title: "Ferramentas" }, { title: "Imprimir" }]}
      showUpdatedAt={false}
    >
      <div className="not-prose space-y-4 max-w-md">
        <div>
          <Label>Ano</Label>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {["2025", "2026", "2027", "2028"].map((y) => (
                <SelectItem key={y} value={y}>
                  {y}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Estado</Label>
          <Select value={stateSlug || "none"} onValueChange={(v) => setStateSlug(v === "none" ? "" : v)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">Somente nacionais</SelectItem>
              {BRAZIL_STATES.map((s) => (
                <SelectItem key={s.slug} value={s.slug}>
                  {s.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button onClick={generatePdf}>Gerar PDF</Button>
      </div>
    </ArticleLayout>
  );
};

export default Imprimir;
