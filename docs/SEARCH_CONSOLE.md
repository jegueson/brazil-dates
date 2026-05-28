# Google Search Console & Bing Webmaster Tools

## Google Search Console

1. Acesse [Google Search Console](https://search.google.com/search-console).
2. Adicione a propriedade `https://calendario-feriados.com.br` (prefixo de URL).
3. Verifique via registro DNS ou arquivo HTML na Vercel.
4. Envie o sitemap: `https://calendario-feriados.com.br/sitemap.xml`
5. Monitore semanalmente:
   - **Cobertura** — páginas indexadas vs. enviadas
   - **Experiência** — Core Web Vitals
   - **Desempenho** — consultas para "feriados 2026", "calendario brasil", etc.

## Bing Webmaster Tools

1. Acesse [Bing Webmaster](https://www.bing.com/webmasters).
2. Importe configurações do Google Search Console (recomendado).
3. Envie o mesmo `sitemap.xml`.

## Após cada deploy

- Confirme que `https://calendario-feriados.com.br/sitemap.xml` responde 200.
- Confirme que `https://calendario-feriados.com.br/robots.txt` aponta para o sitemap.
- Use "Inspecionar URL" no GSC para uma página nova (ex.: `/feriado/carnaval`).

## KPIs (meta 90 dias)

- ≥ 60% das URLs do sitemap indexadas
- ≥ 20 keywords no top 10
- CTR médio > 3% nas páginas de feriado
