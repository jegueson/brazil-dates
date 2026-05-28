import { useState } from "react";
import { useSEO } from "@/hooks/useSEO";
import { SITE_URL } from "@/lib/site-config";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { addBusinessDays } from "@/lib/business-days";
import { formatDateBR } from "@/lib/holiday-utils";

const CalculadoraPrazos = () => {
  const [start, setStart] = useState(new Date().toISOString().slice(0, 10));
  const [days, setDays] = useState("30");
  const [mode, setMode] = useState<"uteis" | "corridos">("uteis");
  const [result, setResult] = useState<string | null>(null);

  useSEO({
    title: "Calculadora de Prazos — Dias Úteis ou Corridos",
    description:
      "Some dias úteis ou corridos a uma data inicial para prazos contratuais e processuais (referência).",
    canonical: `${SITE_URL}/calculadora-prazos`,
  });

  const calculate = () => {
    const s = new Date(start + "T12:00:00");
    const n = parseInt(days, 10);
    if (Number.isNaN(n) || n < 0) return;
    if (mode === "corridos") {
      const end = new Date(s);
      end.setDate(end.getDate() + n);
      setResult(formatDateBR(end));
    } else {
      const end = addBusinessDays(s, n);
      setResult(formatDateBR(end));
    }
  };

  return (
    <ArticleLayout
      title="Calculadora de prazos"
      subtitle="Dias úteis ou corridos a partir de uma data"
      breadcrumbs={[{ title: "Ferramentas" }, { title: "Prazos" }]}
      showUpdatedAt={false}
    >
      <div className="not-prose space-y-4 max-w-md">
        <div>
          <Label>Data inicial</Label>
          <Input type="date" value={start} onChange={(e) => setStart(e.target.value)} />
        </div>
        <div>
          <Label>Quantidade de dias</Label>
          <Input type="number" min={1} value={days} onChange={(e) => setDays(e.target.value)} />
        </div>
        <RadioGroup value={mode} onValueChange={(v) => setMode(v as "uteis" | "corridos")}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="uteis" id="uteis" />
            <Label htmlFor="uteis">Dias úteis (sem fins de semana/feriados nacionais)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="corridos" id="corridos" />
            <Label htmlFor="corridos">Dias corridos</Label>
          </div>
        </RadioGroup>
        <Button onClick={calculate}>Calcular vencimento</Button>
        {result && (
          <p className="text-xl font-bold text-primary">Data final: {result}</p>
        )}
      </div>
      <p className="text-sm text-muted-foreground mt-8">
        Ferramenta informativa. Prazos processuais seguem regras do CPC e tribunais — consulte
        um advogado.
      </p>
    </ArticleLayout>
  );
};

export default CalculadoraPrazos;
