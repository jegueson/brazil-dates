# Checklist — Reenvio Google AdSense

Execute após deploy em produção:

## Conteúdo (mínimo 40 páginas profundas)

- [x] 12 guias `/feriado/*` com história, regional, FAQ e fontes
- [x] `/feriados/2026`, `/feriados/2027`, `/feriados/2028`
- [x] 24 páginas mensais `/feriados/[ano]/[mes]`
- [x] 27 páginas estaduais `/regional/*`
- [x] 50 páginas `/cidade/*`
- [x] `/perguntas-frequentes` (30+ perguntas)
- [x] `/equipe`, `/linha-editorial`, `/como-apuramos-as-datas`
- [x] Blog com 10 artigos

## E-E-A-T

- [x] Autor identificado em `/equipe`
- [x] Bloco "Atualizado em" nas páginas editoriais
- [x] Fontes legais citadas nos guias de feriados
- [x] Contato funcional (Web3Forms — configurar `VITE_WEB3FORMS_ACCESS_KEY`)
- [x] Responsável legal no rodapé
- [x] `/privacidade` e `/termos` existentes

## Técnico

- [x] `sitemap.xml` e `robots.txt`
- [x] Prerender pós-build (`npm run postbuild`)
- [x] `hreflang` pt-BR
- [ ] Validar Rich Results Test em 3 URLs (feriado, FAQ, artigo)
- [ ] Lighthouse SEO ≥ 90 na home

## Antes de clicar em "Pedir revisão"

1. Navegue manualmente por 10 URLs — sem erros 404.
2. Confirme que o site **não** está em construção (sem páginas vazias).
3. Remova anúncios de terceiros concorrentes ao AdSense.
4. Aguarde 24–48h após deploy para o Googlebot re-rastrear.
5. No AdSense: Sites → solicitar revisão.

## Se reprovado novamente

- Verificar "Página de destino" no relatório de políticas.
- Aumentar word count em guias abaixo de 1.200 palavras.
- Adicionar mais artigos de blog (2/semana).
