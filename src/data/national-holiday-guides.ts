/** Editorial guides for the 12 main national holidays — AdSense-quality long-form content. */

export interface HolidayGuideFAQ {
  question: string;
  answer: string;
}

export interface HolidayGuide {
  slug: string;
  name: string;
  type: "federal" | "religious" | "cultural";
  fixedMonth?: number;
  fixedDay?: number;
  movable?: "carnival" | "good-friday" | "corpus-christi" | "easter";
  summary: string[];
  historicalOrigin: string;
  culturalSignificance: string;
  regionalCelebration: Record<string, string>;
  foods: Array<{ name: string; description: string }>;
  musicAndSymbols: string[];
  legalStatus: {
    national: boolean;
    banks: string;
    commerce: string;
    schools: string;
  };
  faq: HolidayGuideFAQ[];
  sources: Array<{ title: string; url?: string }>;
  relatedSlugs: string[];
}

export const NATIONAL_HOLIDAY_GUIDES: HolidayGuide[] = [
  {
    slug: "ano-novo",
    name: "Ano Novo",
    type: "federal",
    fixedMonth: 1,
    fixedDay: 1,
    summary: [
      "O Ano Novo (1º de janeiro) é feriado nacional no Brasil desde a Lei nº 662/1949. Marca o início do calendário gregoriano e mobiliza milhões em festas públicas e privadas.",
      "No Brasil, a celebração mistura tradições europeias com rituais afro-brasileiros, especialmente no litoral, onde oferendas a Iemanjá e o uso de branco simbolizam paz e renovação.",
    ],
    historicalOrigin:
      "A comemoração do primeiro dia do ano remonta à Roma antiga, dedicada ao deus Jano, de quem vem o nome janeiro. No Brasil colonial, a data ganhou caráter religioso com missas de ação de graças. Após a República, consolidou-se como feriado civil. O Réveillon moderno, com fogos e festas na praia, intensificou-se no século XX, especialmente no Rio de Janeiro, transformando Copacabana no maior palco público de Ano Novo do país.",
    culturalSignificance:
      "Para milhões de brasileiros, virar o ano é ritual de esperança: roupas brancas, sete ondas no mar, lentilhas na ceia e fogos à meia-noite. A simbologia une renovação espiritual e social. Em comunidades de matriz africana, 31 de dezembro e 1º de janeiro incluem oferendas ao mar. A data também marca férias escolares e alta temporada turística.",
    regionalCelebration: {
      Sudeste:
        "Rio de Janeiro concentra o Réveillon de Copacabana; São Paulo promove a Virada Cultural. Interior tem festas em praças e queima de fogos em cidades médias.",
      Nordeste:
        "Salvador e Recife combinam festas na praia com trios elétricos e axé. Oferendas a Iemanjá em 2 de fevereiro prolongam o ciclo de celebrações marítimas.",
      Sul: "Porto Alegre e litoral catarinense têm festas com música ao vivo e fogos. Tradição europeia de ceia familiar permanece forte.",
      Norte:
        "Belém e Manaus celebram com festas ribeirinhas e shows. O calor amazônico define horários e locais das festividades.",
      "Centro-Oeste":
        "Brasília e Goiânia promovem eventos em parques e esplanadas. Agronegócio reduz ritmo, mas cidades capitalinas mantêm programação cultural.",
    },
    foods: [
      { name: "Lentilha", description: "Associada à prosperidade; servida na ceia em várias regiões." },
      { name: "Uvas-passas", description: "Tradição de comer 12 uvas à meia-noite, uma por mês." },
      { name: "Peru ou chester", description: "Pratos centrais da ceia em famílias de influência europeia." },
    ],
    musicAndSymbols: [
      "Fogos de artifício à meia-noite",
      "Roupas brancas",
      "Samba e axé em festas públicas",
      "Champanhe ou espumante para brindes",
    ],
    legalStatus: {
      national: true,
      banks: "Fechados",
      commerce: "Fechado (exceto serviços essenciais)",
      schools: "Férias em grande parte do país",
    },
    faq: [
      { question: "Ano Novo é feriado nacional?", answer: "Sim. 1º de janeiro é feriado nacional conforme a Lei nº 662/1949." },
      { question: "Por que se usa branco no Réveillon?", answer: "O branco simboliza paz e renovação, influência de tradições afro-brasileiras e espirituais." },
      { question: "Comércio abre no Ano Novo?", answer: "Em geral não. Supermercados e farmácias podem ter plantão conforme legislação municipal." },
    ],
    sources: [
      { title: "Lei nº 662, de 6 de abril de 1949", url: "https://www.planalto.gov.br/ccivil_03/leis/l662.htm" },
      { title: "IBGE — Calendário e estatísticas demográficas", url: "https://www.ibge.gov.br" },
    ],
    relatedSlugs: ["carnaval", "natal"],
  },
  {
    slug: "carnaval",
    name: "Carnaval",
    type: "cultural",
    movable: "carnival",
    summary: [
      "O Carnaval é a maior festa popular do Brasil, com data móvel (47 dias antes da Páscoa). Embora não seja feriado nacional único, vários municípios decretam ponto facultativo ou feriado local.",
      "Expressão máxima da miscigenação cultural brasileira, reúne samba, frevo, axé, blocos de rua e desfiles de escolas de samba.",
    ],
    historicalOrigin:
      "O Carnaval chegou ao Brasil com os portugueses no século XVII, associado à festa católica antes da Quaresma. No Rio e em Salvador, incorporou ritmos africanos e indígenas. O século XX consolidou escolas de samba e o Sambódromo. Hoje é patrimônio imaterial e motor econômico do turismo nacional.",
    culturalSignificance:
      "Mais que folia, o Carnaval é identidade nacional exportada. Permite inversão social simbólica, criatividade coletiva e economia criativa. Para muitas comunidades, é principal fonte de renda anual.",
    regionalCelebration: {
      Sudeste: "Rio: Sambódromo e blocos. São Paulo: blocos de rua em crescimento. MG: Carnaval em Ouro Preto e Belo Horizonte.",
      Nordeste: "Salvador: trio elétrico e axé. Recife/Olinda: frevo e bonecos gigantes.",
      Sul: "Blocos menores; influência de festas de rua em cidades universitárias.",
      Norte: "Belém e Manaus com festas regionais e influência amazônica.",
      "Centro-Oeste": "Blocos em Brasília e Goiânia; festas universitárias.",
    },
    foods: [
      { name: "Feijoada", description: "Tradicional no pós-Carnaval e em confraternizações." },
      { name: "Bebidas e petiscos de rua", description: "Água de coco, churrasquinho e caipirinha em blocos." },
    ],
    musicAndSymbols: [
      "Samba-enredo e batucada",
      "Frevo e maracatu",
      "Axé e trio elétrico",
      "Fantasias e abadás",
    ],
    legalStatus: {
      national: false,
      banks: "Depende do calendário municipal; segunda e terça de Carnaval costumam ser facultativas",
      commerce: "Varia por cidade",
      schools: "Recesso escolar em muitos estados",
    },
    faq: [
      { question: "Carnaval é feriado nacional?", answer: "Não há lei federal que torne o Carnaval feriado em todo o país; municípios e estados definem ponto facultativo." },
      { question: "Como se calcula a data do Carnaval?", answer: "47 dias antes do Domingo de Páscoa (terça-feira de Carnaval)." },
    ],
    sources: [
      { title: "IPHAN — Patrimônio cultural", url: "https://www.gov.br/iphan" },
      { title: "Lei nº 662/1949 (feriados nacionais fixos)", url: "https://www.planalto.gov.br/ccivil_03/leis/l662.htm" },
    ],
    relatedSlugs: ["sexta-santa", "ano-novo"],
  },
  {
    slug: "sexta-santa",
    name: "Sexta-feira Santa",
    type: "religious",
    movable: "good-friday",
    summary: [
      "A Sexta-feira Santa é feriado nacional móvel, dois dias antes da Páscoa. Recorda a crucificação de Jesus Cristo na tradição cristã.",
      "No Brasil, é dia de reflexão religiosa, procissões e, para muitos, jejum ou abstinência de carne.",
    ],
    historicalOrigin:
      "A data foi instituída como feriado nacional no Brasil para permitir que fiéis participassem das celebrações da Paixão. Procissões da Via Sacra existem desde o período colonial, especialmente em cidades históricas como Ouro Preto e Goiás Velho.",
    culturalSignificance:
      "Para católicos, é o dia mais solene do calendário litúrgico. Mesmo não católicos reconhecem o impacto cultural: teatro da Paixão, música sacra e silêncio comercial em muitas cidades.",
    regionalCelebration: {
      Sudeste: "Procissões em MG e SP; Ouro Preto é referência nacional.",
      Nordeste: "Fortes tradições em cidades coloniais; procissões noturnas.",
      Sul: "Celebrações em comunidades de colonização italiana e alemã.",
      Norte: "Missas e procissões em Belém e Manaus.",
      "Centro-Oeste": "Brasília e Goiás Velho com programação religiosa.",
    },
    foods: [
      { name: "Peixe e frutos do mar", description: "Substitutos da carne vermelha no jejum." },
      { name: "Paçoca e sopas simples", description: "Comidas tradicionais em famílias religiosas." },
    ],
    musicAndSymbols: ["Via Sacra", "Procissão do Enterro", "Música sacra", "Cruz e velas"],
    legalStatus: {
      national: true,
      banks: "Fechados",
      commerce: "Muitos estabelecimentos fechados",
      schools: "Sem aulas",
    },
    faq: [
      { question: "Sexta-feira Santa é feriado bancário?", answer: "Sim, é feriado nacional e bancário." },
      { question: "Pode comer carne na Sexta-feira Santa?", answer: "Para católicos praticantes, recomenda-se abstinência; não é exigência legal." },
    ],
    sources: [
      { title: "Lei nº 662/1949", url: "https://www.planalto.gov.br/ccivil_03/leis/l662.htm" },
      { title: "Conferência Nacional dos Bispos do Brasil", url: "https://www.cnbb.org.br" },
    ],
    relatedSlugs: ["carnaval", "natal"],
  },
  {
    slug: "tiradentes",
    name: "Tiradentes",
    type: "federal",
    fixedMonth: 4,
    fixedDay: 21,
    summary: [
      "21 de abril homenageia Joaquim José da Silva Xavier, o Tiradentes, mártir da Inconfidência Mineira (1789).",
      "Feriado nacional desde a República; em Minas Gerais coincide com a Inconfidência Mineira (feriado estadual).",
    ],
    historicalOrigin:
      "Tiradentes foi executado em 21 de abril de 1792. A data tornou-se símbolo da luta pela independência e da república. Em 1965, passou a feriado nacional, substituindo homenagens anteriores.",
    culturalSignificance:
      "Representa resistência à opressão colonial e o ideal republicano. Escolas realizam desfiles cívicos; museus em Vila Rica (Ouro Preto) e Tiradentes (MG) preservam a memória.",
    regionalCelebration: {
      Sudeste: "MG: feriado da Inconfidência; turismo histórico em Ouro Preto.",
      Nordeste: "Desfiles cívicos escolares.",
      Sul: "Cerimônias oficiais e hasteamento da bandeira.",
      Norte: "Eventos educativos e culturais.",
      "Centro-Oeste": "Brasília: fundação da cidade também em 21 de abril.",
    },
    foods: [
      { name: "Comida mineira", description: "Tropeiro, pão de queijo em festas em MG." },
    ],
    musicAndSymbols: ["Hino Nacional em cerimônias", "Bandeira nacional", "Desfiles cívicos"],
    legalStatus: { national: true, banks: "Fechados", commerce: "Fechado", schools: "Sem aulas" },
    faq: [
      { question: "Por que Tiradentes é feriado?", answer: "Homenagem ao mártir da Inconfidência Mineira e símbolo da República." },
    ],
    sources: [{ title: "Lei nº 662/1949", url: "https://www.planalto.gov.br/ccivil_03/leis/l662.htm" }],
    relatedSlugs: ["independencia", "proclamacao-republica"],
  },
  {
    slug: "dia-do-trabalho",
    name: "Dia do Trabalho",
    type: "federal",
    fixedMonth: 5,
    fixedDay: 1,
    summary: [
      "1º de maio é o Dia do Trabalhador, feriado nacional instituído em memória das lutas trabalhistas internacionais.",
      "No Brasil, sindicatos e centrais promovem atos, e muitos trabalhadores têm descanso remunerado.",
    ],
    historicalOrigin:
      "A data remete ao movimento operário de Chicago (1886). No Brasil, foi reconhecida como feriado nacional no século XX, consolidando direitos trabalhistas da CLT.",
    culturalSignificance:
      "Símbolo da organização sindical e dos direitos sociais. Debates sobre reforma trabalhista e condições de trabalho ganham visibilidade na imprensa.",
    regionalCelebration: {
      Sudeste: "Atos em SP e RJ; grandes centros industriais.",
      Nordeste: "Mobilizações em capitais e interior.",
      Sul: "Tradição sindical forte no RS.",
      Norte: "Eventos em capitais.",
      "Centro-Oeste": "Brasília: atos na Esplanada.",
    },
    foods: [{ name: "Churrasco e confraternizações", description: "Alguns sindicatos promovem festas para associados." }],
    musicAndSymbols: ["Bandeiras sindicais", "Discursos e passeatas"],
    legalStatus: { national: true, banks: "Fechados", commerce: "Fechado", schools: "Sem aulas" },
    faq: [{ question: "1º de maio é feriado em todo o Brasil?", answer: "Sim, feriado nacional." }],
    sources: [{ title: "Lei nº 662/1949", url: "https://www.planalto.gov.br/ccivil_03/leis/l662.htm" }],
    relatedSlugs: ["independencia"],
  },
  {
    slug: "corpus-christi",
    name: "Corpus Christi",
    type: "religious",
    movable: "corpus-christi",
    summary: [
      "Corpus Christi é feriado nacional móvel (60 dias após a Páscoa), celebrando a Eucaristia na Igreja Católica.",
      "Tapetes de serragem, procissões e missas marcam cidades históricas como Santana do Parnaíba e Ouro Preto.",
    ],
    historicalOrigin:
      "Instituído na Idade Média; no Brasil colonial, procissões e tapetes ornamentados tornaram-se tradição. A Lei federal incluiu a data como feriado nacional.",
    culturalSignificance:
      "Manifestação pública de fé católica; arte efêmera nos tapetes; turismo religioso.",
    regionalCelebration: {
      Sudeste: "MG e SP: tapetes e procissões famosas.",
      Nordeste: "Fortes tradições em cidades do interior.",
      Sul: "Celebrações em comunidades católicas.",
      Norte: "Belém: procissões.",
      "Centro-Oeste": "Goiás Velho e Pirenópolis.",
    },
    foods: [{ name: "Doces e café após procissão", description: "Confraternização comunitária." }],
    musicAndSymbols: ["Tapetes de serragem", "Procissão e ostensório"],
    legalStatus: {
      national: true,
      banks: "Fechados",
      commerce: "Parcialmente fechado",
      schools: "Sem aulas",
    },
    faq: [
      {
        question: "Corpus Christi é feriado em todo o Brasil?",
        answer: "Sim, é feriado nacional; alguns municípios têm tradições extras.",
      },
    ],
    sources: [
      { title: "Lei nº 662/1949", url: "https://www.planalto.gov.br/ccivil_03/leis/l662.htm" },
      { title: "CNBB", url: "https://www.cnbb.org.br" },
    ],
    relatedSlugs: ["sexta-santa", "nossa-senhora-aparecida"],
  },
  {
    slug: "independencia",
    name: "Independência do Brasil",
    type: "federal",
    fixedMonth: 9,
    fixedDay: 7,
    summary: [
      "7 de setembro de 1822 marca o Grito do Ipiranga e a independência em relação a Portugal.",
      "Feriado nacional com desfiles cívicos, missas e eventos patrióticos em todo o país.",
    ],
    historicalOrigin:
      "Dom Pedro I proclamou a independência às margens do Ipiranga. A data consolidou-se como símbolo da nação e feriado após a República.",
    culturalSignificance:
      "Dia de patriotismo oficial; escolas e Forças Armadas promovem cerimônias. Debates históricos sobre o processo de independência continuam na academia.",
    regionalCelebration: {
      Sudeste: "SP: Ipiranga; desfiles em capitais.",
      Nordeste: "BA celebra independência da Bahia em 2 de julho (feriado estadual).",
      Sul: "Desfiles cívicos.",
      Norte: "Eventos oficiais em capitais.",
      "Centro-Oeste": "Brasília: cerimônias na Esplanada.",
    },
    foods: [{ name: "Feijoada e churrasco", description: "Confraternizações familiares em algumas regiões." }],
    musicAndSymbols: ["Hino Nacional", "Bandeira verde e amarela", "Desfiles"],
    legalStatus: { national: true, banks: "Fechados", commerce: "Fechado", schools: "Sem aulas" },
    faq: [{ question: "O que aconteceu em 7 de setembro de 1822?", answer: "Dom Pedro I proclamou a independência do Brasil." }],
    sources: [{ title: "Lei nº 662/1949", url: "https://www.planalto.gov.br/ccivil_03/leis/l662.htm" }],
    relatedSlugs: ["proclamacao-republica", "tiradentes"],
  },
  {
    slug: "nossa-senhora-aparecida",
    name: "Nossa Senhora Aparecida",
    type: "religious",
    fixedMonth: 10,
    fixedDay: 12,
    summary: [
      "12 de outubro é feriado nacional em homenagem à padroeira do Brasil, canonizada após aparições em Aparecida (SP).",
      "Romaria de milhões ao Santuário Nacional; segunda maior festa religiosa do país após o Círio de Nazaré.",
    ],
    historicalOrigin:
      "A imagem foi encontrada no Rio Paraíba em 1717. Lei nº 6.802/1980 declarou o dia feriado nacional. O santuário em Aparecida do Norte recebe milhões de peregrinos.",
    culturalSignificance:
      "Símbolo da identidade católica brasileira; devoção popular transcende classe social; impacto no turismo religioso.",
    regionalCelebration: {
      Sudeste: "Aparecida (SP): maior romaria; missas em todo o país.",
      Nordeste: "Procissões e festas paroquiais.",
      Sul: "Celebrações em comunidades católicas.",
      Norte: "Pará: proximidade com Círio de Nazaré em outubro.",
      "Centro-Oeste": "Romarias regionais.",
    },
    foods: [{ name: "Comidas de festa em romarias", description: "Doces, pastéis e bebidas em barracas." }],
    musicAndSymbols: ["Romaria", "Missa solene", "Imagem da padroeira"],
    legalStatus: { national: true, banks: "Fechados", commerce: "Parcialmente fechado", schools: "Sem aulas" },
    faq: [
      {
        question: "Nossa Senhora Aparecida é padroeira do Brasil?",
        answer: "Sim, declarada padroeira oficial do Brasil.",
      },
    ],
    sources: [
      { title: "Lei nº 6.802, de 30 de junho de 1980", url: "https://www.planalto.gov.br/ccivil_03/leis/L6802.htm" },
    ],
    relatedSlugs: ["corpus-christi", "natal"],
  },
  {
    slug: "finados",
    name: "Finados",
    type: "federal",
    fixedMonth: 11,
    fixedDay: 2,
    summary: [
      "2 de novembro é o Dia de Finados, feriado nacional para homenagear os mortos na tradição católica e na cultura popular.",
      "Cemitérios recebem visitas, missas e flores; é dia de memória familiar.",
    ],
    historicalOrigin:
      "Origem cristã (All Souls' Day); no Brasil, mistura-se a rituais afro-brasileiros de memória dos ancestrais em algumas comunidades.",
    culturalSignificance:
      "Dia de recolhimento e visita aos cemitérios; famílias reúnem-se para lembrar entes queridos.",
    regionalCelebration: {
      Sudeste: "Cemitérios de grandes cidades com fluxo intenso.",
      Nordeste: "Tradições religiosas e familiares fortes.",
      Sul: "Cemitérios históricos com turismo cultural.",
      Norte: "Missas e visitas aos cemitérios.",
      "Centro-Oeste": "Cerimônias paroquiais.",
    },
    foods: [{ name: "Refeições simples em família", description: "Após visitas ao cemitério." }],
    musicAndSymbols: ["Flores nos túmulos", "Velas", "Missas"],
    legalStatus: { national: true, banks: "Fechados", commerce: "Parcialmente aberto", schools: "Sem aulas" },
    faq: [{ question: "Finados é feriado nacional?", answer: "Sim, 2 de novembro." }],
    sources: [{ title: "Lei nº 662/1949", url: "https://www.planalto.gov.br/ccivil_03/leis/l662.htm" }],
    relatedSlugs: ["natal", "nossa-senhora-aparecida"],
  },
  {
    slug: "proclamacao-republica",
    name: "Proclamação da República",
    type: "federal",
    fixedMonth: 11,
    fixedDay: 15,
    summary: [
      "15 de novembro de 1889 marca a Proclamação da República e o fim do Império.",
      "Feriado nacional com eventos cívicos e reflexão sobre a democracia brasileira.",
    ],
    historicalOrigin:
      "Marechal Deodoro da Fonseca proclamou a República no Rio de Janeiro. A data substituiu celebrações monárquicas e consolidou o calendário republicano.",
    culturalSignificance:
      "Marco político fundamental; escolas e órgãos públicos promovem educação cívica.",
    regionalCelebration: {
      Sudeste: "Desfiles e cerimônias em capitais.",
      Nordeste: "Eventos educativos.",
      Sul: "Tradição republicana e cívica.",
      Norte: "Cerimônias oficiais.",
      "Centro-Oeste": "Brasília: eventos na capital federal.",
    },
    foods: [],
    musicAndSymbols: ["Bandeira da República", "Desfiles cívicos"],
    legalStatus: { national: true, banks: "Fechados", commerce: "Fechado", schools: "Sem aulas" },
    faq: [{ question: "O que foi a Proclamação da República?", answer: "Golpe militar que derrubou a monarquia em 1889." }],
    sources: [{ title: "Lei nº 662/1949", url: "https://www.planalto.gov.br/ccivil_03/leis/l662.htm" }],
    relatedSlugs: ["independencia", "consciencia-negra"],
  },
  {
    slug: "consciencia-negra",
    name: "Dia da Consciência Negra",
    type: "federal",
    fixedMonth: 11,
    fixedDay: 20,
    summary: [
      "20 de novembro homenageia Zumbi dos Palmares, símbolo da resistência negra. Feriado nacional desde a Lei 14.759/2023.",
      "Data de reflexão sobre igualdade racial, cultura afro-brasileira e combate ao racismo.",
    ],
    historicalOrigin:
      "Zumbi foi morto em 20 de novembro de 1695. Movimentos negros pressionaram por décadas; vários estados já tinham feriado antes da lei federal.",
    culturalSignificance:
      "Central para políticas de inclusão, educação em direitos humanos e celebração da cultura negra (samba, capoeira, candomblé, culinária).",
    regionalCelebration: {
      Sudeste: "SP e RJ: eventos culturais e educativos.",
      Nordeste: "BA e PE: forte tradição afro-brasileira.",
      Sul: "Debates e manifestações culturais.",
      Norte: "Comunidades quilombolas.",
      "Centro-Oeste": "Seminários e festas culturais.",
    },
    foods: [
      { name: "Acarajé e moqueca", description: "Culinária baiana em festas." },
      { name: "Feijoada", description: "Símbolo cultural debatido e celebrado." },
    ],
    musicAndSymbols: ["Samba de roda", "Capoeira", "Manifestações culturais"],
    legalStatus: { national: true, banks: "Fechados", commerce: "Varia", schools: "Sem aulas" },
    faq: [
      {
        question: "Consciência Negra é feriado nacional?",
        answer: "Sim, desde a Lei 14.759/2023 em todo o território nacional.",
      },
    ],
    sources: [
      { title: "Lei nº 14.759, de 21 de dezembro de 2023", url: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14759.htm" },
    ],
    relatedSlugs: ["proclamacao-republica", "independencia"],
  },
  {
    slug: "natal",
    name: "Natal",
    type: "federal",
    fixedMonth: 12,
    fixedDay: 25,
    summary: [
      "25 de dezembro celebra o Natal, nascimento de Jesus Cristo no cristianismo, feriado nacional no Brasil.",
      "Ceia, decoração, troca de presentes e festas familiares marcam a data; alta temporada de turismo e consumo.",
    ],
    historicalOrigin:
      "A celebração cristã incorporou tradições pagãs europeias. No Brasil, o Natal colonial misturou-se a festas populares e, no século XX, influências norte-americanas (Papai Noel, árvore).",
    culturalSignificance:
      "Principal data de reunificação familiar no calendário; impacto econômico enorme no varejo e turismo.",
    regionalCelebration: {
      Sudeste: "SP e RJ: decorações em shoppings e ceias.",
      Nordeste: "Presépio e festas religiosas; verão no litoral.",
      Sul: "Natal com influência europeia; frio no inverno gaúcho.",
      Norte: "Festas ribeirinhas e comunidades ribeirinhas.",
      "Centro-Oeste": "Ceias familiares e eventos comerciais.",
    },
    foods: [
      { name: "Peru ou chester", description: "Prato central da ceia." },
      { name: "Rabanada e panetone", description: "Sobremesas tradicionais." },
      { name: "Arroz à grega e salpicão", description: "Acompanhamentos brasileiros." },
    ],
    musicAndSymbols: ["Presépio", "Árvore de Natal", "Cantatas e músicas natalinas"],
    legalStatus: { national: true, banks: "Fechados", commerce: "Fechado no dia 25", schools: "Férias" },
    faq: [{ question: "Natal é feriado nacional?", answer: "Sim, 25 de dezembro em todo o Brasil." }],
    sources: [{ title: "Lei nº 662/1949", url: "https://www.planalto.gov.br/ccivil_03/leis/l662.htm" }],
    relatedSlugs: ["ano-novo", "finados"],
  },
];

export function getHolidayGuideBySlug(slug: string): HolidayGuide | undefined {
  return NATIONAL_HOLIDAY_GUIDES.find((g) => g.slug === slug);
}
