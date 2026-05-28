export interface FAQEntry {
  question: string;
  answer: string;
  category: string;
}

export const FAQ_ENTRIES: FAQEntry[] = [
  {
    category: "Geral",
    question: "Quantos feriados nacionais existem no Brasil?",
    answer:
      "O Brasil possui 12 feriados nacionais previstos em lei federal, incluindo datas fixas (como Natal e Independência) e móveis (como Sexta-feira Santa e Corpus Christi). Além disso, estados e municípios podem decretar feriados locais.",
  },
  {
    category: "Geral",
    question: "Qual a diferença entre feriado nacional e ponto facultativo?",
    answer:
      "Feriado nacional suspende atividades em todo o território (bancos fecham, por exemplo). Ponto facultativo é definido por decreto e permite que órgãos públicos e empresas dispensem o trabalho sem obrigatoriedade universal.",
  },
  {
    category: "Geral",
    question: "O Carnaval é feriado nacional?",
    answer:
      "Não há lei federal que torne o Carnaval feriado em todo o país. Muitos municípios decretam ponto facultativo na segunda e terça de Carnaval.",
  },
  {
    category: "Geral",
    question: "Como são calculadas as datas móveis como a Páscoa?",
    answer:
      "A Páscoa cristã segue o calendário lunar: primeiro domingo após a lua cheia que ocorre no ou após o equinócio de primavera. Outras datas derivam dela (Sexta-feira Santa: 2 dias antes; Corpus Christi: 60 dias depois).",
  },
  {
    category: "Trabalho",
    question: "Trabalhar em feriado nacional gera pagamento extra?",
    answer:
      "Sim. A CLT prevê remuneração em dobro para trabalho em feriados, salvo acordo ou convenção coletiva diferente.",
  },
  {
    category: "Trabalho",
    question: "Bancos abrem em feriado nacional?",
    answer:
      "Não. Feriados nacionais são feriados bancários; agências permanecem fechadas, com exceções raras para plantões definidos pelo Banco Central.",
  },
  {
    category: "Trabalho",
    question: "Comércio pode abrir em feriado?",
    answer:
      "Depende da legislação municipal e estadual. Em muitas cidades, shoppings e comércio podem funcionar com autorização e regras específicas.",
  },
  {
    category: "Trabalho",
    question: "Escolas têm aula em feriado nacional?",
    answer:
      "Não. Feriados nacionais suspendem atividades escolares em redes públicas e privadas, salvo recuperação excepcional definida por secretarias.",
  },
  {
    category: "Regional",
    question: "Feriados estaduais valem em todo o estado?",
    answer:
      "Sim, quando decretados por lei estadual, aplicam-se a todo o território do estado. Feriados municipais valem apenas no município.",
  },
  {
    category: "Regional",
    question: "O que é a Inconfidência Mineira?",
    answer:
      "Movimento separatista de 1789 em Minas Gerais, liderado por Tiradentes. Em MG, 21 de abril é feriado estadual (Inconfidência Mineira) além do feriado nacional de Tiradentes.",
  },
  {
    category: "Regional",
    question: "Por que a Bahia tem feriado em 2 de julho?",
    answer:
      "Comemora a Independência da Bahia em 1823, após resistência às tropas portuguesas. É feriado estadual na Bahia.",
  },
  {
    category: "Regional",
    question: "O que é o Círio de Nazaré?",
    answer:
      "Maior procissão católica do Brasil, em Belém (PA), em homenagem à Nossa Senhora de Nazaré. Mobiliza milhões de fiéis em outubro.",
  },
  {
    category: "Datas específicas",
    question: "Quando é o Natal em 2026?",
    answer: "Natal em 2026 cai em sexta-feira, 25 de dezembro.",
  },
  {
    category: "Datas específicas",
    question: "Quando é o Carnaval em 2026?",
    answer:
      "A terça-feira de Carnaval em 2026 é em 17 de fevereiro (data móvel; confirme no calendário oficial do ano).",
  },
  {
    category: "Datas específicas",
    question: "Quando é Corpus Christi em 2026?",
    answer: "Corpus Christi em 2026 cai em 4 de junho (60 dias após a Páscoa).",
  },
  {
    category: "Datas específicas",
    question: "O Dia da Consciência Negra é feriado nacional?",
    answer:
      "Sim, desde a Lei 14.759/2023, 20 de novembro é feriado nacional em todo o Brasil.",
  },
  {
    category: "Planejamento",
    question: "O que é emenda de feriado?",
    answer:
      "É tirar folga em um dia útil adjacente ao feriado para prolongar o descanso — por exemplo, folgar a segunda quando o feriado cai na terça.",
  },
  {
    category: "Planejamento",
    question: "Como planejar férias aproveitando feriados?",
    answer:
      "Use nosso planejador de férias e a página de feriados prolongados para identificar períodos que maximizam dias de folga com poucos dias de férias usados.",
  },
  {
    category: "Planejamento",
    question: "Como exportar feriados para o Google Calendar?",
    answer:
      "Acesse a página Exportar, selecione ano e estado, e baixe o arquivo .ics para importar no Google Calendar, Outlook ou Apple Calendar.",
  },
  {
    category: "Planejamento",
    question: "Como calcular dias úteis entre duas datas?",
    answer:
      "Use a calculadora de dias úteis: informe as datas e o estado para descontar fins de semana e feriados nacionais/estaduais.",
  },
  {
    category: "Legislação",
    question: "Qual lei define os feriados nacionais?",
    answer:
      "A Lei nº 662, de 6 de abril de 1949, estabelece os feriados nacionais. Outras leis acrescentaram datas, como Nossa Senhora Aparecida (Lei 6.802/1980) e Consciência Negra (Lei 14.759/2023).",
  },
  {
    category: "Legislação",
    question: "Nossa Senhora Aparecida é feriado em todo o Brasil?",
    answer: "Sim, 12 de outubro é feriado nacional desde a Lei 6.802/1980.",
  },
  {
    category: "Legislação",
    question: "Finados é feriado nacional?",
    answer: "Sim, 2 de novembro é feriado nacional conforme a Lei 662/1949.",
  },
  {
    category: "Site",
    question: "Como vocês apuram as datas dos feriados?",
    answer:
      "Consultamos legislação federal, calendários oficiais e algoritmos para datas móveis (Páscoa, Carnaval, Corpus Christi). Veja a página Como apuramos as datas.",
  },
  {
    category: "Site",
    question: "Posso usar os dados do calendário no meu site?",
    answer:
      "Sim. Oferecemos API JSON pública e widget embedável. Consulte a página Exportar e /api/feriados/[ano].json.",
  },
  {
    category: "Site",
    question: "Como entrar em contato com a equipe?",
    answer:
      "Use o formulário na página Contato ou envie e-mail para contato@calendario-feriados.com.br.",
  },
  {
    category: "Cultura",
    question: "Qual a diferença entre feriado religioso e cultural?",
    answer:
      "Feriados religiosos têm origem litúrgica (ex.: Natal). Festas culturais como Carnaval têm raízes religiosas mas são vivas principalmente como celebração popular.",
  },
  {
    category: "Cultura",
    question: "O que são festas juninas?",
    answer:
      "Celebrações de São João, São Pedro e Santo Antônio em junho, com fogueiras, quadrilhas e comidas típicas, especialmente no Nordeste e interior.",
  },
  {
    category: "Cultura",
    question: "Por que se comemora Tiradentes em 21 de abril?",
    answer:
      "Homenagem a Joaquim José da Silva Xavier, executado em 21 de abril de 1792, mártir da Inconfidência Mineira.",
  },
  {
    category: "Cultura",
    question: "O Réveillon é feriado?",
    answer:
      "1º de janeiro (Ano Novo) é feriado nacional. A festa da virada (31/dez) não é feriado, mas é ponto facultativo em muitos locais.",
  },
  {
    category: "Comparativos",
    question: "Qual estado tem mais feriados?",
    answer:
      "Varia conforme feriados estaduais e municipais. Consulte nossa página Qual estado tem mais feriados para ranking atualizado.",
  },
];
