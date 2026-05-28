import { useState } from "react";
import { useSEO } from "@/hooks/useSEO";
import { SITE_URL } from "@/lib/site-config";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BRAZIL_STATES } from "@/data/brazil-states";
import { countBusinessDays } from "@/lib/business-days";

const CalculadoraDiasUteis = () => {
  const [start, setStart] = useState("2026-01-01");
  const [end, setEnd] = useState("2026-12-31");
  const [state, setState] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  useSEO({
    title: "Calculadora de Dias Úteis — Feriados Nacionais e Estaduais",
    description:
      "Calcule dias úteis entre duas datas descontando fins de semana e feriados nacionais e estaduais no Brasil.",
    canonical: `${SITE_URL}/calculadora-dias-uteis`,
  });

  const calculate = () => {
    const s = new Date(start + "T12:00:00");
    const e = new Date(end + "T12:00:00");
    const stateName = state
      ? BRAZIL_STATES.find((st) => st.slug === state)?.name
      : undefined;
    setResult(
      countBusinessDays({
        start: s,
        end: e,
        state: stateName,
        excludeNational: true,
        excludeRegional: !!stateName,
      })
    );
  };

  return (
    <ArticleLayout
      title="Calculadora de dias úteis"
      subtitle="Desconta fins de semana e feriados"
      breadcrumbs={[{ title: "Ferramentas" }, { title: "Dias úteis" }]}
      showUpdatedAt={false}
    >
      <div className="not-prose space-y-4 max-w-md">
        <div>
          <Label htmlFor="start">Data inicial</Label>
          <Input id="start" type="date" value={start} onChange={(e) => setStart(e.target.value)} />
        </div>
        <div>
          <Label htmlFor="end">Data final</Label>
          <Input id="end" type="date" value={end} onChange={(e) => setEnd(e.target.value)} />
        </div>
        <div>
          <Label>Estado (feriados regionais)</Label>
          <Select value={state || "none"} onValueChange={(v) => setState(v === "none" ? "" : v)}>
            <SelectTrigger>
              <SelectValue placeholder="Opcional" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">Apenas feriados nacionais</SelectItem>
              {BRAZIL_STATES.map((st) => (
                <SelectItem key={st.slug} value={st.slug}>
                  {st.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button onClick={calculate}>Calcular</Button>
        {result !== null && (
          <p className="text-2xl font-bold text-primary">
            {result} dias úteis no período
          </p>
        )}
      </div>
      <p className="text-sm text-muted-foreground mt-8">
        Baseado em feriados nacionais cadastrados e feriados regionais do estado selecionado.
        Para prazos judiciais, consulte também a{" "}
        <a href="/calculadora-prazos" className="text-primary hover:underline">
          calculadora de prazos
        </a>
        .
      </p>
    </ArticleLayout>
  );
};

export default CalculadoraDiasUteis;
