import { getAllHolidaysForMonth, getAllHolidaysForYear } from "@/lib/national-holidays";

export interface BrazilianHoliday {
  id: string;
  date: string;
  name: string;
  type: 'federal' | 'religious' | 'cultural' | 'commercial';
  description: string;
  traditions: string[];
  regionalVariations?: string[];
  significance: string;
  preparation?: string[];
}

export const brazilianHolidays: BrazilianHoliday[] = [
  // 2025 Holidays
  {
    id: 'ano-novo-2025',
    date: '2025-01-01',
    name: 'Ano Novo',
    type: 'federal',
    description: 'O primeiro dia do ano é celebrado em todo o Brasil com festas, fogos de artifício e tradições especiais. Momento de renovação e esperança para milhões de brasileiros.',
    traditions: [
      'Roupas brancas para dar sorte',
      'Queima de fogos de artifício',
      'Festa na praia de Copacabana',
      'Ceia de Ano Novo com lentilha',
      'Pular sete ondas no mar',
      'Fazer pedidos para Iemanjá'
    ],
    significance: 'Marca o início de um novo ciclo, sendo momento de renovação e esperanças. Tradição que mistura elementos cristãos e afro-brasileiros.',
    preparation: [
      'Comprar roupas brancas',
      'Preparar ceia especial com lentilha e uva passa',
      'Organizar festa em casa ou escolher local para comemorar',
      'Preparar flores brancas para oferenda ao mar'
    ],
    regionalVariations: [
      'Rio de Janeiro: Reveillon de Copacabana com mais de 2 milhões de pessoas',
      'Salvador: Réveillon da Bahia no Porto da Barra',
      'São Paulo: Virada Cultural e festa na Paulista',
      'Brasília: Queima de fogos na Esplanada dos Ministérios'
    ]
  },
  {
    id: 'dia-mundial-paz-2025',
    date: '2025-01-01',
    name: 'Dia Mundial da Paz',
    type: 'cultural',
    description: 'Data instituída pela Igreja Católica para reflexão sobre a paz mundial.',
    traditions: [
      'Missas especiais pela paz',
      'Reflexões sobre não-violência',
      'Orações ecumênicas'
    ],
    significance: 'Momento de reflexão sobre paz, tolerância e não-violência no mundo.',
    preparation: [
      'Participar de celebrações religiosas',
      'Refletir sobre ações de paz pessoais'
    ]
  },
  {
    id: 'carnaval-2025',
    date: '2025-03-04',
    name: 'Carnaval',
    type: 'cultural',
    description: 'A maior festa popular do Brasil, celebrada com desfiles, blocos e muita música.',
    traditions: [
      'Desfiles das escolas de samba',
      'Blocos de rua',
      'Fantasias coloridas',
      'Música e dança'
    ],
    regionalVariations: [
      'Rio de Janeiro: Sambódromo e blocos de rua',
      'Salvador: Trio elétrico e axé',
      'Recife/Olinda: Frevo e bonecos gigantes',
      'São Paulo: Blocos de rua revitalizados'
    ],
    significance: 'Expressão máxima da cultura brasileira, misturando tradições africanas, indígenas e europeias.',
    preparation: [
      'Escolher fantasia',
      'Comprar abadá (Salvador)',
      'Programar roteiro de blocos',
      'Reservar hospedagem com antecedência'
    ]
  },
  {
    id: 'sexta-feira-santa-2025',
    date: '2025-04-18',
    name: 'Sexta-feira Santa',
    type: 'religious',
    description: 'Também chamada de "Sexta Feira da Paixão", é o dia que os cristãos lembram da crucificação de Cristo.',
    traditions: [
      'Via Sacra nas igrejas',
      'Procissões religiosas',
      'Jejum e abstinência',
      'Reflexão sobre a Paixão de Cristo'
    ],
    significance: 'Momento de reflexão e recolhimento espiritual, preparando para a Páscoa.',
    preparation: [
      'Participar de celebrações religiosas',
      'Fazer jejum e oração'
    ]
  },
  {
    id: 'tiradentes-2025',
    date: '2025-04-21',
    name: 'Tiradentes',
    type: 'federal',
    description: 'Feriado nacional em homenagem ao mártir da Inconfidência Mineira.',
    traditions: [
      'Visitação a museus históricos',
      'Turismo histórico em Minas Gerais',
      'Reflexões sobre história do Brasil'
    ],
    significance: 'Homenagem a Joaquim José da Silva Xavier, símbolo da luta pela independência.',
    preparation: [
      'Visitar Ouro Preto e região',
      'Estudar história da Inconfidência Mineira'
    ]
  },
  {
    id: 'dia-trabalho-2025',
    date: '2025-05-01',
    name: 'Dia do Trabalho',
    type: 'federal',
    description: 'Feriado mundial que celebra os direitos dos trabalhadores.',
    traditions: [
      'Descanso do trabalho',
      'Manifestações sindicais',
      'Tempo em família'
    ],
    significance: 'Reconhecimento da importância do trabalho e dos direitos trabalhistas.',
    preparation: [
      'Planejar descanso ou viagem curta',
      'Refletir sobre direitos trabalhistas'
    ]
  },
  {
    id: 'dia-maes-2025',
    date: '2025-05-11',
    name: 'Dia das Mães',
    type: 'commercial',
    description: 'Data especial para homenagear as mães brasileiras.',
    traditions: [
      'Presentes para as mães',
      'Almoços especiais em família',
      'Flores e cartões',
      'Missas e cultos especiais'
    ],
    significance: 'Reconhecimento do papel fundamental das mães na sociedade brasileira.',
    preparation: [
      'Comprar presente especial',
      'Organizar almoço ou jantar',
      'Preparar homenagem personalizada'
    ]
  },
  {
    id: 'festa-junina-2025',
    date: '2025-06-24',
    name: 'Festa Junina',
    type: 'cultural',
    description: 'Tradicional festa do interior brasileiro, celebrando São João.',
    traditions: [
      'Quadrilha e dança country',
      'Comidas típicas: pamonha, quentão, milho',
      'Fogueira e fogos de artifício',
      'Roupas caipiras'
    ],
    regionalVariations: [
      'Nordeste: Forró e sanfona',
      'Sudeste: Quadrilha e viola',
      'Centro-Oeste: Siriri e cururu'
    ],
    significance: 'Celebração das tradições rurais e da colheita, com forte influência católica.',
    preparation: [
      'Preparar roupa caipira',
      'Aprender passos de quadrilha',
      'Fazer comidas típicas'
    ]
  },
  {
    id: 'independencia-2025',
    date: '2025-09-07',
    name: 'Independência do Brasil',
    type: 'federal',
    description: 'Comemoração da independência brasileira proclamada em 1822.',
    traditions: [
      'Desfile militar em Brasília',
      'Hasteamento da bandeira',
      'Eventos patrióticos',
      'Reflexões sobre história nacional'
    ],
    significance: 'Marco da emancipação política do Brasil do domínio português.',
    preparation: [
      'Assistir desfile pela TV',
      'Visitar museus históricos',
      'Estudar história da independência'
    ]
  },
  {
    id: 'nossa-senhora-2025',
    date: '2025-10-12',
    name: 'Nossa Senhora Aparecida',
    type: 'religious',
    description: 'Feriado nacional dedicado à padroeira do Brasil.',
    traditions: [
      'Peregrinação a Aparecida-SP',
      'Missas especiais',
      'Procissões religiosas',
      'Orações em família'
    ],
    significance: 'Devoção à padroeira do Brasil, unindo fé católica e identidade nacional.',
    preparation: [
      'Planejar visita ao Santuário',
      'Participar de novena',
      'Organizar oração em família'
    ]
  },
  {
    id: 'finados-2025',
    date: '2025-11-02',
    name: 'Finados',
    type: 'religious',
    description: 'Dia de homenagem aos que já partiram.',
    traditions: [
      'Visitas aos cemitérios',
      'Flores nos túmulos',
      'Orações pelos falecidos',
      'Missas de sufrágio'
    ],
    significance: 'Momento de lembrança e oração pelos entes queridos que faleceram.',
    preparation: [
      'Comprar flores',
      'Organizar visita ao cemitério',
      'Preparar orações especiais'
    ]
  },
  {
    id: 'proclamacao-republica-2025',
    date: '2025-11-15',
    name: 'Proclamação da República',
    type: 'federal',
    description: 'Comemoração da proclamação da República brasileira em 1889.',
    traditions: [
      'Eventos históricos educativos',
      'Reflexões sobre cidadania',
      'Visitação a museus'
    ],
    significance: 'Marco da transição do Império para a República no Brasil.',
    preparation: [
      'Estudar história republicana',
      'Visitar locais históricos'
    ]
  },
  {
    id: 'consciencia-negra-2025',
    date: '2025-11-20',
    name: 'Consciência Negra',
    type: 'federal',
    description: 'Dia Nacional de Zumbi ou Dia da Consciência Negra é Feriado Nacional, dedicado à reflexão sobre a importância da cultura afro-brasileira.',
    traditions: [
      'Eventos culturais afro-brasileiros',
      'Palestras sobre história negra',
      'Manifestações culturais',
      'Reflexão sobre direitos iguais'
    ],
    significance: 'Celebra a contribuição dos afrodescendentes para a formação da sociedade brasileira e promove a reflexão contra o racismo.',
    preparation: [
      'Participar de eventos culturais',
      'Estudar história afro-brasileira',
      'Visitar museus e centros culturais'
    ]
  },
  {
    id: 'natal-2025',
    date: '2025-12-25',
    name: 'Natal',
    type: 'religious',
    description: 'Celebração do nascimento de Jesus Cristo.',
    traditions: [
      'Ceia de Natal em família',
      'Troca de presentes',
      'Árvore e decorações natalinas',
      'Missa do Galo'
    ],
    regionalVariations: [
      'Sul: Ceia com chester e panetone',
      'Nordeste: Frutos do mar e tapioca doce',
      'Norte: Tucumã e açaí na ceia'
    ],
    significance: 'Celebração cristã que reúne famílias e promove valores de amor e união.',
    preparation: [
      'Preparar cardápio especial',
      'Comprar e embrulhar presentes',
      'Decorar casa e árvore',
      'Organizar encontro familiar'
    ]
  },

  // 2026 Holidays
  {
    id: 'ano-novo-2026',
    date: '2026-01-01',
    name: 'Ano Novo',
    type: 'federal',
    description: 'O primeiro dia do ano é celebrado em todo o Brasil com festas, fogos de artifício e tradições especiais.',
    traditions: [
      'Roupas brancas para dar sorte',
      'Queima de fogos de artifício',
      'Festa na praia de Copacabana',
      'Ceia de Ano Novo com lentilha',
      'Pular sete ondas no mar'
    ],
    significance: 'Marca o início de um novo ciclo, sendo momento de renovação e esperanças.',
    preparation: [
      'Comprar roupas brancas',
      'Preparar ceia especial',
      'Organizar festa em casa ou escolher local para comemorar'
    ]
  },
  {
    id: 'carnaval-2026',
    date: '2026-02-17',
    name: 'Carnaval',
    type: 'cultural',
    description: 'A maior festa popular do Brasil, celebrada com desfiles, blocos e muita música.',
    traditions: [
      'Desfiles das escolas de samba',
      'Blocos de rua',
      'Fantasias coloridas',
      'Música e dança',
      'Trio elétrico'
    ],
    regionalVariations: [
      'Rio de Janeiro: Sambódromo e blocos de rua',
      'Salvador: Trio elétrico e axé music',
      'Recife/Olinda: Frevo e bonecos gigantes',
      'São Paulo: Blocos de rua e festa de salão'
    ],
    significance: 'Expressão máxima da cultura brasileira, misturando tradições africanas, indígenas e europeias.',
    preparation: [
      'Escolher fantasia',
      'Comprar abadá (Salvador)',
      'Programar roteiro de blocos',
      'Reservar hospedagem com antecedência'
    ]
  },
  {
    id: 'tiradentes-2026',
    date: '2026-04-21',
    name: 'Tiradentes',
    type: 'federal',
    description: 'Feriado nacional em homenagem ao mártir da Inconfidência Mineira.',
    traditions: [
      'Visitação a museus históricos',
      'Turismo histórico em Minas Gerais',
      'Reflexões sobre história do Brasil'
    ],
    significance: 'Homenagem a Joaquim José da Silva Xavier, símbolo da luta pela independência.',
    preparation: [
      'Visitar Ouro Preto e região',
      'Estudar história da Inconfidência Mineira'
    ]
  },
  {
    id: 'dia-trabalho-2026',
    date: '2026-05-01',
    name: 'Dia do Trabalho',
    type: 'federal',
    description: 'Feriado mundial que celebra os direitos dos trabalhadores.',
    traditions: [
      'Descanso do trabalho',
      'Manifestações sindicais',
      'Tempo em família'
    ],
    significance: 'Reconhecimento da importância do trabalho e dos direitos trabalhistas.',
    preparation: [
      'Planejar descanso ou viagem curta',
      'Refletir sobre direitos trabalhistas'
    ]
  },
  {
    id: 'independencia-2026',
    date: '2026-09-07',
    name: 'Independência do Brasil',
    type: 'federal',
    description: 'Comemoração da independência brasileira proclamada em 1822.',
    traditions: [
      'Desfile militar em Brasília',
      'Hasteamento da bandeira',
      'Eventos patrióticos',
      'Reflexões sobre história nacional'
    ],
    significance: 'Marco da emancipação política do Brasil do domínio português.',
    preparation: [
      'Assistir desfile pela TV',
      'Visitar museus históricos',
      'Estudar história da independência'
    ]
  },
  {
    id: 'nossa-senhora-2026',
    date: '2026-10-12',
    name: 'Nossa Senhora Aparecida',
    type: 'religious',
    description: 'Feriado nacional dedicado à padroeira do Brasil.',
    traditions: [
      'Peregrinação a Aparecida-SP',
      'Missas especiais',
      'Procissões religiosas',
      'Orações em família'
    ],
    significance: 'Devoção à padroeira do Brasil, unindo fé católica e identidade nacional.',
    preparation: [
      'Planejar visita ao Santuário',
      'Participar de novena',
      'Organizar oração em família'
    ]
  },
  {
    id: 'finados-2026',
    date: '2026-11-02',
    name: 'Finados',
    type: 'religious',
    description: 'Dia de homenagem aos que já partiram.',
    traditions: [
      'Visitas aos cemitérios',
      'Flores nos túmulos',
      'Orações pelos falecidos',
      'Missas de sufrágio'
    ],
    significance: 'Momento de lembrança e oração pelos entes queridos que faleceram.',
    preparation: [
      'Comprar flores',
      'Organizar visita ao cemitério',
      'Preparar orações especiais'
    ]
  },
  {
    id: 'proclamacao-republica-2026',
    date: '2026-11-15',
    name: 'Proclamação da República',
    type: 'federal',
    description: 'Comemoração da proclamação da República brasileira em 1889.',
    traditions: [
      'Eventos históricos educativos',
      'Reflexões sobre cidadania',
      'Visitação a museus'
    ],
    significance: 'Marco da transição do Império para a República no Brasil.',
    preparation: [
      'Estudar história republicana',
      'Visitar locais históricos'
    ]
  },
  {
    id: 'natal-2026',
    date: '2026-12-25',
    name: 'Natal',
    type: 'religious',
    description: 'Celebração do nascimento de Jesus Cristo.',
    traditions: [
      'Ceia de Natal em família',
      'Troca de presentes',
      'Árvore e decorações natalinas',
      'Missa do Galo'
    ],
    regionalVariations: [
      'Sul: Ceia com chester e panetone',
      'Nordeste: Frutos do mar e tapioca doce',
      'Norte: Tucumã e açaí na ceia'
    ],
    significance: 'Celebração cristã que reúne famílias e promove valores de amor e união.',
    preparation: [
      'Preparar cardápio especial',
      'Comprar e embrulhar presentes',
      'Decorar casa e árvore',
      'Organizar encontro familiar'
    ]
  },

  // 2027 Holidays
  {
    id: 'ano-novo-2027',
    date: '2027-01-01',
    name: 'Ano Novo',
    type: 'federal',
    description: 'O primeiro dia do ano é celebrado em todo o Brasil com festas, fogos de artifício e tradições especiais.',
    traditions: [
      'Roupas brancas para dar sorte',
      'Queima de fogos de artifício',
      'Festa na praia de Copacabana',
      'Ceia de Ano Novo com lentilha',
      'Pular sete ondas no mar'
    ],
    significance: 'Marca o início de um novo ciclo, sendo momento de renovação e esperanças.',
    preparation: [
      'Comprar roupas brancas',
      'Preparar ceia especial',
      'Organizar festa em casa ou escolher local para comemorar'
    ]
  },
  {
    id: 'carnaval-2027',
    date: '2027-02-09',
    name: 'Carnaval',
    type: 'cultural',
    description: 'A maior festa popular do Brasil, celebrada com desfiles, blocos e muita música.',
    traditions: [
      'Desfiles das escolas de samba',
      'Blocos de rua',
      'Fantasias coloridas',
      'Música e dança'
    ],
    regionalVariations: [
      'Rio de Janeiro: Sambódromo e blocos de rua',
      'Salvador: Trio elétrico e axé',
      'Recife/Olinda: Frevo e bonecos gigantes'
    ],
    significance: 'Expressão máxima da cultura brasileira, misturando tradições africanas, indígenas e europeias.',
    preparation: [
      'Escolher fantasia',
      'Programar roteiro de blocos',
      'Reservar hospedagem com antecedência'
    ]
  },
  {
    id: 'tiradentes-2027',
    date: '2027-04-21',
    name: 'Tiradentes',
    type: 'federal',
    description: 'Feriado nacional em homenagem ao mártir da Inconfidência Mineira.',
    traditions: [
      'Visitação a museus históricos',
      'Turismo histórico em Minas Gerais',
      'Reflexões sobre história do Brasil'
    ],
    significance: 'Homenagem a Joaquim José da Silva Xavier, símbolo da luta pela independência.',
    preparation: [
      'Visitar Ouro Preto e região',
      'Estudar história da Inconfidência Mineira'
    ]
  },
  {
    id: 'dia-trabalho-2027',
    date: '2027-05-01',
    name: 'Dia do Trabalho',
    type: 'federal',
    description: 'Feriado mundial que celebra os direitos dos trabalhadores.',
    traditions: [
      'Descanso do trabalho',
      'Manifestações sindicais',
      'Tempo em família'
    ],
    significance: 'Reconhecimento da importância do trabalho e dos direitos trabalhistas.',
    preparation: [
      'Planejar descanso ou viagem curta'
    ]
  },
  {
    id: 'independencia-2027',
    date: '2027-09-07',
    name: 'Independência do Brasil',
    type: 'federal',
    description: 'Comemoração da independência brasileira proclamada em 1822.',
    traditions: [
      'Desfile militar em Brasília',
      'Hasteamento da bandeira',
      'Eventos patrióticos'
    ],
    significance: 'Marco da emancipação política do Brasil do domínio português.',
    preparation: [
      'Assistir desfile pela TV',
      'Visitar museus históricos'
    ]
  },
  {
    id: 'nossa-senhora-2027',
    date: '2027-10-12',
    name: 'Nossa Senhora Aparecida',
    type: 'religious',
    description: 'Feriado nacional dedicado à padroeira do Brasil.',
    traditions: [
      'Peregrinação a Aparecida-SP',
      'Missas especiais',
      'Procissões religiosas'
    ],
    significance: 'Devoção à padroeira do Brasil, unindo fé católica e identidade nacional.',
    preparation: [
      'Planejar visita ao Santuário',
      'Participar de novena'
    ]
  },
  {
    id: 'finados-2027',
    date: '2027-11-02',
    name: 'Finados',
    type: 'religious',
    description: 'Dia de homenagem aos que já partiram.',
    traditions: [
      'Visitas aos cemitérios',
      'Flores nos túmulos',
      'Orações pelos falecidos'
    ],
    significance: 'Momento de lembrança e oração pelos entes queridos que faleceram.',
    preparation: [
      'Comprar flores',
      'Organizar visita ao cemitério'
    ]
  },
  {
    id: 'proclamacao-republica-2027',
    date: '2027-11-15',
    name: 'Proclamação da República',
    type: 'federal',
    description: 'Comemoração da proclamação da República brasileira em 1889.',
    traditions: [
      'Eventos históricos educativos',
      'Reflexões sobre cidadania'
    ],
    significance: 'Marco da transição do Império para a República no Brasil.',
    preparation: [
      'Estudar história republicana',
      'Visitar locais históricos'
    ]
  },
  {
    id: 'consciencia-negra-2027',
    date: '2027-11-20',
    name: 'Consciência Negra',
    type: 'federal',
    description: 'Dia Nacional de Zumbi dedicado à reflexão sobre a importância da cultura afro-brasileira.',
    traditions: [
      'Eventos culturais afro-brasileiros',
      'Palestras sobre história negra',
      'Manifestações culturais'
    ],
    significance: 'Celebra a contribuição dos afrodescendentes para a formação da sociedade brasileira.',
    preparation: [
      'Participar de eventos culturais',
      'Estudar história afro-brasileira'
    ]
  },
  {
    id: 'natal-2027',
    date: '2027-12-25',
    name: 'Natal',
    type: 'religious',
    description: 'Celebração do nascimento de Jesus Cristo.',
    traditions: [
      'Ceia de Natal em família',
      'Troca de presentes',
      'Árvore e decorações natalinas'
    ],
    significance: 'Celebração cristã que reúne famílias e promove valores de amor e união.',
    preparation: [
      'Preparar cardápio especial',
      'Comprar e embrulhar presentes',
      'Decorar casa e árvore'
    ]
  },

  // 2028 Holidays
  {
    id: 'ano-novo-2028',
    date: '2028-01-01',
    name: 'Ano Novo',
    type: 'federal',
    description: 'O primeiro dia do ano é celebrado em todo o Brasil com festas, fogos de artifício e tradições especiais.',
    traditions: [
      'Roupas brancas para dar sorte',
      'Queima de fogos de artifício',
      'Festa na praia de Copacabana'
    ],
    significance: 'Marca o início de um novo ciclo, sendo momento de renovação e esperanças.',
    preparation: [
      'Comprar roupas brancas',
      'Preparar ceia especial'
    ]
  },
  {
    id: 'carnaval-2028',
    date: '2028-02-29',
    name: 'Carnaval',
    type: 'cultural',
    description: 'A maior festa popular do Brasil, celebrada com desfiles, blocos e muita música.',
    traditions: [
      'Desfiles das escolas de samba',
      'Blocos de rua',
      'Fantasias coloridas'
    ],
    significance: 'Expressão máxima da cultura brasileira, misturando tradições africanas, indígenas e europeias.',
    preparation: [
      'Escolher fantasia',
      'Programar roteiro de blocos'
    ]
  },
  {
    id: 'tiradentes-2028',
    date: '2028-04-21',
    name: 'Tiradentes',
    type: 'federal',
    description: 'Feriado nacional em homenagem ao mártir da Inconfidência Mineira.',
    traditions: [
      'Visitação a museus históricos',
      'Turismo histórico em Minas Gerais'
    ],
    significance: 'Homenagem a Joaquim José da Silva Xavier, símbolo da luta pela independência.',
    preparation: [
      'Visitar Ouro Preto e região'
    ]
  },
  {
    id: 'dia-trabalho-2028',
    date: '2028-05-01',
    name: 'Dia do Trabalho',
    type: 'federal',
    description: 'Feriado mundial que celebra os direitos dos trabalhadores.',
    traditions: [
      'Descanso do trabalho',
      'Manifestações sindicais'
    ],
    significance: 'Reconhecimento da importância do trabalho e dos direitos trabalhistas.',
    preparation: [
      'Planejar descanso ou viagem curta'
    ]
  },
  {
    id: 'independencia-2028',
    date: '2028-09-07',
    name: 'Independência do Brasil',
    type: 'federal',
    description: 'Comemoração da independência brasileira proclamada em 1822.',
    traditions: [
      'Desfile militar em Brasília',
      'Hasteamento da bandeira'
    ],
    significance: 'Marco da emancipação política do Brasil do domínio português.',
    preparation: [
      'Assistir desfile pela TV'
    ]
  },
  {
    id: 'nossa-senhora-2028',
    date: '2028-10-12',
    name: 'Nossa Senhora Aparecida',
    type: 'religious',
    description: 'Feriado nacional dedicado à padroeira do Brasil.',
    traditions: [
      'Peregrinação a Aparecida-SP',
      'Missas especiais'
    ],
    significance: 'Devoção à padroeira do Brasil, unindo fé católica e identidade nacional.',
    preparation: [
      'Planejar visita ao Santuário'
    ]
  },
  {
    id: 'finados-2028',
    date: '2028-11-02',
    name: 'Finados',
    type: 'religious',
    description: 'Dia de homenagem aos que já partiram.',
    traditions: [
      'Visitas aos cemitérios',
      'Flores nos túmulos'
    ],
    significance: 'Momento de lembrança e oração pelos entes queridos que faleceram.',
    preparation: [
      'Comprar flores'
    ]
  },
  {
    id: 'proclamacao-republica-2028',
    date: '2028-11-15',
    name: 'Proclamação da República',
    type: 'federal',
    description: 'Comemoração da proclamação da República brasileira em 1889.',
    traditions: [
      'Eventos históricos educativos'
    ],
    significance: 'Marco da transição do Império para a República no Brasil.',
    preparation: [
      'Estudar história republicana'
    ]
  },
  {
    id: 'consciencia-negra-2028',
    date: '2028-11-20',
    name: 'Consciência Negra',
    type: 'federal',
    description: 'Dia Nacional de Zumbi dedicado à reflexão sobre a importância da cultura afro-brasileira.',
    traditions: [
      'Eventos culturais afro-brasileiros',
      'Palestras sobre história negra'
    ],
    significance: 'Celebra a contribuição dos afrodescendentes para a formação da sociedade brasileira.',
    preparation: [
      'Participar de eventos culturais'
    ]
  },
  {
    id: 'natal-2028',
    date: '2028-12-25',
    name: 'Natal',
    type: 'religious',
    description: 'Celebração do nascimento de Jesus Cristo.',
    traditions: [
      'Ceia de Natal em família',
      'Troca de presentes'
    ],
    significance: 'Celebração cristã que reúne famílias e promove valores de amor e união.',
    preparation: [
      'Preparar cardápio especial'
    ]
  },

  // 2029 Holidays
  {
    id: 'ano-novo-2029',
    date: '2029-01-01',
    name: 'Ano Novo',
    type: 'federal',
    description: 'O primeiro dia do ano é celebrado em todo o Brasil com festas, fogos de artifício e tradições especiais.',
    traditions: [
      'Roupas brancas para dar sorte',
      'Queima de fogos de artifício'
    ],
    significance: 'Marca o início de um novo ciclo, sendo momento de renovação e esperanças.',
    preparation: [
      'Comprar roupas brancas'
    ]
  },
  {
    id: 'carnaval-2029',
    date: '2029-02-13',
    name: 'Carnaval',
    type: 'cultural',
    description: 'A maior festa popular do Brasil, celebrada com desfiles, blocos e muita música.',
    traditions: [
      'Desfiles das escolas de samba',
      'Blocos de rua'
    ],
    significance: 'Expressão máxima da cultura brasileira, misturando tradições africanas, indígenas e europeias.',
    preparation: [
      'Escolher fantasia'
    ]
  },
  {
    id: 'tiradentes-2029',
    date: '2029-04-21',
    name: 'Tiradentes',
    type: 'federal',
    description: 'Feriado nacional em homenagem ao mártir da Inconfidência Mineira.',
    traditions: [
      'Visitação a museus históricos'
    ],
    significance: 'Homenagem a Joaquim José da Silva Xavier, símbolo da luta pela independência.',
    preparation: [
      'Visitar Ouro Preto e região'
    ]
  },
  {
    id: 'dia-trabalho-2029',
    date: '2029-05-01',
    name: 'Dia do Trabalho',
    type: 'federal',
    description: 'Feriado mundial que celebra os direitos dos trabalhadores.',
    traditions: [
      'Descanso do trabalho'
    ],
    significance: 'Reconhecimento da importância do trabalho e dos direitos trabalhistas.',
    preparation: [
      'Planejar descanso'
    ]
  },
  {
    id: 'independencia-2029',
    date: '2029-09-07',
    name: 'Independência do Brasil',
    type: 'federal',
    description: 'Comemoração da independência brasileira proclamada em 1822.',
    traditions: [
      'Desfile militar em Brasília'
    ],
    significance: 'Marco da emancipação política do Brasil do domínio português.',
    preparation: [
      'Assistir desfile pela TV'
    ]
  },
  {
    id: 'nossa-senhora-2029',
    date: '2029-10-12',
    name: 'Nossa Senhora Aparecida',
    type: 'religious',
    description: 'Feriado nacional dedicado à padroeira do Brasil.',
    traditions: [
      'Peregrinação a Aparecida-SP'
    ],
    significance: 'Devoção à padroeira do Brasil, unindo fé católica e identidade nacional.',
    preparation: [
      'Planejar visita ao Santuário'
    ]
  },
  {
    id: 'finados-2029',
    date: '2029-11-02',
    name: 'Finados',
    type: 'religious',
    description: 'Dia de homenagem aos que já partiram.',
    traditions: [
      'Visitas aos cemitérios'
    ],
    significance: 'Momento de lembrança e oração pelos entes queridos que faleceram.',
    preparation: [
      'Comprar flores'
    ]
  },
  {
    id: 'proclamacao-republica-2029',
    date: '2029-11-15',
    name: 'Proclamação da República',
    type: 'federal',
    description: 'Comemoração da proclamação da República brasileira em 1889.',
    traditions: [
      'Eventos históricos educativos'
    ],
    significance: 'Marco da transição do Império para a República no Brasil.',
    preparation: [
      'Estudar história republicana'
    ]
  },
  {
    id: 'consciencia-negra-2029',
    date: '2029-11-20',
    name: 'Consciência Negra',
    type: 'federal',
    description: 'Dia Nacional de Zumbi dedicado à reflexão sobre a importância da cultura afro-brasileira.',
    traditions: [
      'Eventos culturais afro-brasileiros'
    ],
    significance: 'Celebra a contribuição dos afrodescendentes para a formação da sociedade brasileira.',
    preparation: [
      'Participar de eventos culturais'
    ]
  },
  {
    id: 'natal-2029',
    date: '2029-12-25',
    name: 'Natal',
    type: 'religious',
    description: 'Celebração do nascimento de Jesus Cristo.',
    traditions: [
      'Ceia de Natal em família'
    ],
    significance: 'Celebração cristã que reúne famílias e promove valores de amor e união.',
    preparation: [
      'Preparar cardápio especial'
    ]
  },

  // 2030 Holidays
  {
    id: 'ano-novo-2030',
    date: '2030-01-01',
    name: 'Ano Novo',
    type: 'federal',
    description: 'O primeiro dia do ano é celebrado em todo o Brasil com festas, fogos de artifício e tradições especiais.',
    traditions: [
      'Roupas brancas para dar sorte',
      'Queima de fogos de artifício'
    ],
    significance: 'Marca o início de um novo ciclo, sendo momento de renovação e esperanças.',
    preparation: [
      'Comprar roupas brancas'
    ]
  },
  {
    id: 'carnaval-2030',
    date: '2030-03-05',
    name: 'Carnaval',
    type: 'cultural',
    description: 'A maior festa popular do Brasil, celebrada com desfiles, blocos e muita música.',
    traditions: [
      'Desfiles das escolas de samba',
      'Blocos de rua'
    ],
    significance: 'Expressão máxima da cultura brasileira, misturando tradições africanas, indígenas e europeias.',
    preparation: [
      'Escolher fantasia'
    ]
  },
  {
    id: 'tiradentes-2030',
    date: '2030-04-21',
    name: 'Tiradentes',
    type: 'federal',
    description: 'Feriado nacional em homenagem ao mártir da Inconfidência Mineira.',
    traditions: [
      'Visitação a museus históricos'
    ],
    significance: 'Homenagem a Joaquim José da Silva Xavier, símbolo da luta pela independência.',
    preparation: [
      'Visitar Ouro Preto e região'
    ]
  },
  {
    id: 'dia-trabalho-2030',
    date: '2030-05-01',
    name: 'Dia do Trabalho',
    type: 'federal',
    description: 'Feriado mundial que celebra os direitos dos trabalhadores.',
    traditions: [
      'Descanso do trabalho'
    ],
    significance: 'Reconhecimento da importância do trabalho e dos direitos trabalhistas.',
    preparation: [
      'Planejar descanso'
    ]
  },
  {
    id: 'independencia-2030',
    date: '2030-09-07',
    name: 'Independência do Brasil',
    type: 'federal',
    description: 'Comemoração da independência brasileira proclamada em 1822.',
    traditions: [
      'Desfile militar em Brasília'
    ],
    significance: 'Marco da emancipação política do Brasil do domínio português.',
    preparation: [
      'Assistir desfile pela TV'
    ]
  },
  {
    id: 'nossa-senhora-2030',
    date: '2030-10-12',
    name: 'Nossa Senhora Aparecida',
    type: 'religious',
    description: 'Feriado nacional dedicado à padroeira do Brasil.',
    traditions: [
      'Peregrinação a Aparecida-SP'
    ],
    significance: 'Devoção à padroeira do Brasil, unindo fé católica e identidade nacional.',
    preparation: [
      'Planejar visita ao Santuário'
    ]
  },
  {
    id: 'finados-2030',
    date: '2030-11-02',
    name: 'Finados',
    type: 'religious',
    description: 'Dia de homenagem aos que já partiram.',
    traditions: [
      'Visitas aos cemitérios'
    ],
    significance: 'Momento de lembrança e oração pelos entes queridos que faleceram.',
    preparation: [
      'Comprar flores'
    ]
  },
  {
    id: 'proclamacao-republica-2030',
    date: '2030-11-15',
    name: 'Proclamação da República',
    type: 'federal',
    description: 'Comemoração da proclamação da República brasileira em 1889.',
    traditions: [
      'Eventos históricos educativos'
    ],
    significance: 'Marco da transição do Império para a República no Brasil.',
    preparation: [
      'Estudar história republicana'
    ]
  },
  {
    id: 'consciencia-negra-2030',
    date: '2030-11-20',
    name: 'Consciência Negra',
    type: 'federal',
    description: 'Dia Nacional de Zumbi dedicado à reflexão sobre a importância da cultura afro-brasileira.',
    traditions: [
      'Eventos culturais afro-brasileiros'
    ],
    significance: 'Celebra a contribuição dos afrodescendentes para a formação da sociedade brasileira.',
    preparation: [
      'Participar de eventos culturais'
    ]
  },
  {
    id: 'natal-2030',
    date: '2030-12-25',
    name: 'Natal',
    type: 'religious',
    description: 'Celebração do nascimento de Jesus Cristo.',
    traditions: [
      'Ceia de Natal em família'
    ],
    significance: 'Celebração cristã que reúne famílias e promove valores de amor e união.',
    preparation: [
      'Preparar cardápio especial'
    ]
  },
  // 2031-2040 Holidays
  {
    id: 'ano-novo-2031',
    date: '2031-01-01',
    name: 'Ano Novo',
    type: 'federal',
    description: 'Celebração do primeiro dia do ano.',
    traditions: ['Roupas brancas', 'Fogos de artifício'],
    significance: 'Renovação e esperança para o novo ano.',
    preparation: ['Comprar roupas brancas', 'Preparar ceia']
  },
  {
    id: 'carnaval-2031',
    date: '2031-03-04',
    name: 'Carnaval',
    type: 'cultural',
    description: 'A maior festa popular do Brasil.',
    traditions: ['Desfiles de escola de samba', 'Blocos de rua'],
    significance: 'Expressão cultural brasileira.',
    preparation: ['Escolher fantasia', 'Programar blocos']
  },
  {
    id: 'sexta-feira-santa-2031',
    date: '2031-04-18',
    name: 'Sexta-feira Santa',
    type: 'religious',
    description: 'Dia da crucificação de Cristo.',
    traditions: ['Via Sacra', 'Procissões'],
    significance: 'Reflexão espiritual cristã.',
    preparation: ['Participar de celebrações religiosas']
  },
  {
    id: 'tiradentes-2031',
    date: '2031-04-21',
    name: 'Tiradentes',
    type: 'federal',
    description: 'Homenagem ao mártir da Inconfidência Mineira.',
    traditions: ['Visitação a museus históricos'],
    significance: 'Símbolo da luta pela independência.',
    preparation: ['Visitar Ouro Preto']
  },
  {
    id: 'dia-trabalho-2031',
    date: '2031-05-01',
    name: 'Dia do Trabalho',
    type: 'federal',
    description: 'Celebração dos direitos trabalhistas.',
    traditions: ['Descanso do trabalho'],
    significance: 'Reconhecimento dos direitos dos trabalhadores.',
    preparation: ['Planejar descanso']
  },
  {
    id: 'independencia-2031',
    date: '2031-09-07',
    name: 'Independência do Brasil',
    type: 'federal',
    description: 'Comemoração da independência de 1822.',
    traditions: ['Desfile militar'],
    significance: 'Marco da emancipação política.',
    preparation: ['Assistir desfile']
  },
  {
    id: 'nossa-senhora-2031',
    date: '2031-10-12',
    name: 'Nossa Senhora Aparecida',
    type: 'religious',
    description: 'Padroeira do Brasil.',
    traditions: ['Peregrinação a Aparecida'],
    significance: 'Devoção nacional católica.',
    preparation: ['Planejar visita ao Santuário']
  },
  {
    id: 'finados-2031',
    date: '2031-11-02',
    name: 'Finados',
    type: 'religious',
    description: 'Homenagem aos que partiram.',
    traditions: ['Visitas aos cemitérios'],
    significance: 'Lembrança dos entes queridos.',
    preparation: ['Comprar flores']
  },
  {
    id: 'proclamacao-republica-2031',
    date: '2031-11-15',
    name: 'Proclamação da República',
    type: 'federal',
    description: 'Marco da República brasileira.',
    traditions: ['Eventos educativos'],
    significance: 'Transição do Império para República.',
    preparation: ['Estudar história']
  },
  {
    id: 'consciencia-negra-2031',
    date: '2031-11-20',
    name: 'Consciência Negra',
    type: 'federal',
    description: 'Reflexão sobre cultura afro-brasileira.',
    traditions: ['Eventos culturais'],
    significance: 'Contribuição afrodescendente.',
    preparation: ['Participar de eventos']
  },
  {
    id: 'natal-2031',
    date: '2031-12-25',
    name: 'Natal',
    type: 'religious',
    description: 'Nascimento de Jesus Cristo.',
    traditions: ['Ceia em família'],
    significance: 'Celebração cristã de união.',
    preparation: ['Preparar cardápio']
  },
  // 2032
  {
    id: 'ano-novo-2032',
    date: '2032-01-01',
    name: 'Ano Novo',
    type: 'federal',
    description: 'Celebração do primeiro dia do ano.',
    traditions: ['Roupas brancas', 'Fogos de artifício'],
    significance: 'Renovação e esperança para o novo ano.',
    preparation: ['Comprar roupas brancas', 'Preparar ceia']
  },
  {
    id: 'carnaval-2032',
    date: '2032-02-24',
    name: 'Carnaval',
    type: 'cultural',
    description: 'A maior festa popular do Brasil.',
    traditions: ['Desfiles de escola de samba', 'Blocos de rua'],
    significance: 'Expressão cultural brasileira.',
    preparation: ['Escolher fantasia', 'Programar blocos']
  },
  {
    id: 'sexta-feira-santa-2032',
    date: '2032-03-26',
    name: 'Sexta-feira Santa',
    type: 'religious',
    description: 'Dia da crucificação de Cristo.',
    traditions: ['Via Sacra', 'Procissões'],
    significance: 'Reflexão espiritual cristã.',
    preparation: ['Participar de celebrações religiosas']
  },
  {
    id: 'tiradentes-2032',
    date: '2032-04-21',
    name: 'Tiradentes',
    type: 'federal',
    description: 'Homenagem ao mártir da Inconfidência Mineira.',
    traditions: ['Visitação a museus históricos'],
    significance: 'Símbolo da luta pela independência.',
    preparation: ['Visitar Ouro Preto']
  },
  {
    id: 'dia-trabalho-2032',
    date: '2032-05-01',
    name: 'Dia do Trabalho',
    type: 'federal',
    description: 'Celebração dos direitos trabalhistas.',
    traditions: ['Descanso do trabalho'],
    significance: 'Reconhecimento dos direitos dos trabalhadores.',
    preparation: ['Planejar descanso']
  },
  {
    id: 'independencia-2032',
    date: '2032-09-07',
    name: 'Independência do Brasil',
    type: 'federal',
    description: 'Comemoração da independência de 1822.',
    traditions: ['Desfile militar'],
    significance: 'Marco da emancipação política.',
    preparation: ['Assistir desfile']
  },
  {
    id: 'nossa-senhora-2032',
    date: '2032-10-12',
    name: 'Nossa Senhora Aparecida',
    type: 'religious',
    description: 'Padroeira do Brasil.',
    traditions: ['Peregrinação a Aparecida'],
    significance: 'Devoção nacional católica.',
    preparation: ['Planejar visita ao Santuário']
  },
  {
    id: 'finados-2032',
    date: '2032-11-02',
    name: 'Finados',
    type: 'religious',
    description: 'Homenagem aos que partiram.',
    traditions: ['Visitas aos cemitérios'],
    significance: 'Lembrança dos entes queridos.',
    preparation: ['Comprar flores']
  },
  {
    id: 'proclamacao-republica-2032',
    date: '2032-11-15',
    name: 'Proclamação da República',
    type: 'federal',
    description: 'Marco da República brasileira.',
    traditions: ['Eventos educativos'],
    significance: 'Transição do Império para República.',
    preparation: ['Estudar história']
  },
  {
    id: 'consciencia-negra-2032',
    date: '2032-11-20',
    name: 'Consciência Negra',
    type: 'federal',
    description: 'Reflexão sobre cultura afro-brasileira.',
    traditions: ['Eventos culturais'],
    significance: 'Contribuição afrodescendente.',
    preparation: ['Participar de eventos']
  },
  {
    id: 'natal-2032',
    date: '2032-12-25',
    name: 'Natal',
    type: 'religious',
    description: 'Nascimento de Jesus Cristo.',
    traditions: ['Ceia em família'],
    significance: 'Celebração cristã de união.',
    preparation: ['Preparar cardápio']
  },
  // 2033
  {
    id: 'ano-novo-2033',
    date: '2033-01-01',
    name: 'Ano Novo',
    type: 'federal',
    description: 'Celebração do primeiro dia do ano.',
    traditions: ['Roupas brancas', 'Fogos de artifício'],
    significance: 'Renovação e esperança para o novo ano.',
    preparation: ['Comprar roupas brancas', 'Preparar ceia']
  },
  {
    id: 'carnaval-2033',
    date: '2033-02-15',
    name: 'Carnaval',
    type: 'cultural',
    description: 'A maior festa popular do Brasil.',
    traditions: ['Desfiles de escola de samba', 'Blocos de rua'],
    significance: 'Expressão cultural brasileira.',
    preparation: ['Escolher fantasia', 'Programar blocos']
  },
  {
    id: 'sexta-feira-santa-2033',
    date: '2033-04-15',
    name: 'Sexta-feira Santa',
    type: 'religious',
    description: 'Dia da crucificação de Cristo.',
    traditions: ['Via Sacra', 'Procissões'],
    significance: 'Reflexão espiritual cristã.',
    preparation: ['Participar de celebrações religiosas']
  },
  {
    id: 'tiradentes-2033',
    date: '2033-04-21',
    name: 'Tiradentes',
    type: 'federal',
    description: 'Homenagem ao mártir da Inconfidência Mineira.',
    traditions: ['Visitação a museus históricos'],
    significance: 'Símbolo da luta pela independência.',
    preparation: ['Visitar Ouro Preto']
  },
  {
    id: 'dia-trabalho-2033',
    date: '2033-05-01',
    name: 'Dia do Trabalho',
    type: 'federal',
    description: 'Celebração dos direitos trabalhistas.',
    traditions: ['Descanso do trabalho'],
    significance: 'Reconhecimento dos direitos dos trabalhadores.',
    preparation: ['Planejar descanso']
  },
  {
    id: 'independencia-2033',
    date: '2033-09-07',
    name: 'Independência do Brasil',
    type: 'federal',
    description: 'Comemoração da independência de 1822.',
    traditions: ['Desfile militar'],
    significance: 'Marco da emancipação política.',
    preparation: ['Assistir desfile']
  },
  {
    id: 'nossa-senhora-2033',
    date: '2033-10-12',
    name: 'Nossa Senhora Aparecida',
    type: 'religious',
    description: 'Padroeira do Brasil.',
    traditions: ['Peregrinação a Aparecida'],
    significance: 'Devoção nacional católica.',
    preparation: ['Planejar visita ao Santuário']
  },
  {
    id: 'finados-2033',
    date: '2033-11-02',
    name: 'Finados',
    type: 'religious',
    description: 'Homenagem aos que partiram.',
    traditions: ['Visitas aos cemitérios'],
    significance: 'Lembrança dos entes queridos.',
    preparation: ['Comprar flores']
  },
  {
    id: 'proclamacao-republica-2033',
    date: '2033-11-15',
    name: 'Proclamação da República',
    type: 'federal',
    description: 'Marco da República brasileira.',
    traditions: ['Eventos educativos'],
    significance: 'Transição do Império para República.',
    preparation: ['Estudar história']
  },
  {
    id: 'consciencia-negra-2033',
    date: '2033-11-20',
    name: 'Consciência Negra',
    type: 'federal',
    description: 'Reflexão sobre cultura afro-brasileira.',
    traditions: ['Eventos culturais'],
    significance: 'Contribuição afrodescendente.',
    preparation: ['Participar de eventos']
  },
  {
    id: 'natal-2033',
    date: '2033-12-25',
    name: 'Natal',
    type: 'religious',
    description: 'Nascimento de Jesus Cristo.',
    traditions: ['Ceia em família'],
    significance: 'Celebração cristã de união.',
    preparation: ['Preparar cardápio']
  },
  // 2034
  {
    id: 'ano-novo-2034',
    date: '2034-01-01',
    name: 'Ano Novo',
    type: 'federal',
    description: 'Celebração do primeiro dia do ano.',
    traditions: ['Roupas brancas', 'Fogos de artifício'],
    significance: 'Renovação e esperança para o novo ano.',
    preparation: ['Comprar roupas brancas', 'Preparar ceia']
  },
  {
    id: 'carnaval-2034',
    date: '2034-02-28',
    name: 'Carnaval',
    type: 'cultural',
    description: 'A maior festa popular do Brasil.',
    traditions: ['Desfiles de escola de samba', 'Blocos de rua'],
    significance: 'Expressão cultural brasileira.',
    preparation: ['Escolher fantasia', 'Programar blocos']
  },
  {
    id: 'sexta-feira-santa-2034',
    date: '2034-04-07',
    name: 'Sexta-feira Santa',
    type: 'religious',
    description: 'Dia da crucificação de Cristo.',
    traditions: ['Via Sacra', 'Procissões'],
    significance: 'Reflexão espiritual cristã.',
    preparation: ['Participar de celebrações religiosas']
  },
  {
    id: 'tiradentes-2034',
    date: '2034-04-21',
    name: 'Tiradentes',
    type: 'federal',
    description: 'Homenagem ao mártir da Inconfidência Mineira.',
    traditions: ['Visitação a museus históricos'],
    significance: 'Símbolo da luta pela independência.',
    preparation: ['Visitar Ouro Preto']
  },
  {
    id: 'dia-trabalho-2034',
    date: '2034-05-01',
    name: 'Dia do Trabalho',
    type: 'federal',
    description: 'Celebração dos direitos trabalhistas.',
    traditions: ['Descanso do trabalho'],
    significance: 'Reconhecimento dos direitos dos trabalhadores.',
    preparation: ['Planejar descanso']
  },
  {
    id: 'independencia-2034',
    date: '2034-09-07',
    name: 'Independência do Brasil',
    type: 'federal',
    description: 'Comemoração da independência de 1822.',
    traditions: ['Desfile militar'],
    significance: 'Marco da emancipação política.',
    preparation: ['Assistir desfile']
  },
  {
    id: 'nossa-senhora-2034',
    date: '2034-10-12',
    name: 'Nossa Senhora Aparecida',
    type: 'religious',
    description: 'Padroeira do Brasil.',
    traditions: ['Peregrinação a Aparecida'],
    significance: 'Devoção nacional católica.',
    preparation: ['Planejar visita ao Santuário']
  },
  {
    id: 'finados-2034',
    date: '2034-11-02',
    name: 'Finados',
    type: 'religious',
    description: 'Homenagem aos que partiram.',
    traditions: ['Visitas aos cemitérios'],
    significance: 'Lembrança dos entes queridos.',
    preparation: ['Comprar flores']
  },
  {
    id: 'proclamacao-republica-2034',
    date: '2034-11-15',
    name: 'Proclamação da República',
    type: 'federal',
    description: 'Marco da República brasileira.',
    traditions: ['Eventos educativos'],
    significance: 'Transição do Império para República.',
    preparation: ['Estudar história']
  },
  {
    id: 'consciencia-negra-2034',
    date: '2034-11-20',
    name: 'Consciência Negra',
    type: 'federal',
    description: 'Reflexão sobre cultura afro-brasileira.',
    traditions: ['Eventos culturais'],
    significance: 'Contribuição afrodescendente.',
    preparation: ['Participar de eventos']
  },
  {
    id: 'natal-2034',
    date: '2034-12-25',
    name: 'Natal',
    type: 'religious',
    description: 'Nascimento de Jesus Cristo.',
    traditions: ['Ceia em família'],
    significance: 'Celebração cristã de união.',
    preparation: ['Preparar cardápio']
  },
  // 2035
  {
    id: 'ano-novo-2035',
    date: '2035-01-01',
    name: 'Ano Novo',
    type: 'federal',
    description: 'Celebração do primeiro dia do ano.',
    traditions: ['Roupas brancas', 'Fogos de artifício'],
    significance: 'Renovação e esperança para o novo ano.',
    preparation: ['Comprar roupas brancas', 'Preparar ceia']
  },
  {
    id: 'carnaval-2035',
    date: '2035-02-13',
    name: 'Carnaval',
    type: 'cultural',
    description: 'A maior festa popular do Brasil.',
    traditions: ['Desfiles de escola de samba', 'Blocos de rua'],
    significance: 'Expressão cultural brasileira.',
    preparation: ['Escolher fantasia', 'Programar blocos']
  },
  {
    id: 'sexta-feira-santa-2035',
    date: '2035-03-30',
    name: 'Sexta-feira Santa',
    type: 'religious',
    description: 'Dia da crucificação de Cristo.',
    traditions: ['Via Sacra', 'Procissões'],
    significance: 'Reflexão espiritual cristã.',
    preparation: ['Participar de celebrações religiosas']
  },
  {
    id: 'tiradentes-2035',
    date: '2035-04-21',
    name: 'Tiradentes',
    type: 'federal',
    description: 'Homenagem ao mártir da Inconfidência Mineira.',
    traditions: ['Visitação a museus históricos'],
    significance: 'Símbolo da luta pela independência.',
    preparation: ['Visitar Ouro Preto']
  },
  {
    id: 'dia-trabalho-2035',
    date: '2035-05-01',
    name: 'Dia do Trabalho',
    type: 'federal',
    description: 'Celebração dos direitos trabalhistas.',
    traditions: ['Descanso do trabalho'],
    significance: 'Reconhecimento dos direitos dos trabalhadores.',
    preparation: ['Planejar descanso']
  },
  {
    id: 'independencia-2035',
    date: '2035-09-07',
    name: 'Independência do Brasil',
    type: 'federal',
    description: 'Comemoração da independência de 1822.',
    traditions: ['Desfile militar'],
    significance: 'Marco da emancipação política.',
    preparation: ['Assistir desfile']
  },
  {
    id: 'nossa-senhora-2035',
    date: '2035-10-12',
    name: 'Nossa Senhora Aparecida',
    type: 'religious',
    description: 'Padroeira do Brasil.',
    traditions: ['Peregrinação a Aparecida'],
    significance: 'Devoção nacional católica.',
    preparation: ['Planejar visita ao Santuário']
  },
  {
    id: 'finados-2035',
    date: '2035-11-02',
    name: 'Finados',
    type: 'religious',
    description: 'Homenagem aos que partiram.',
    traditions: ['Visitas aos cemitérios'],
    significance: 'Lembrança dos entes queridos.',
    preparation: ['Comprar flores']
  },
  {
    id: 'proclamacao-republica-2035',
    date: '2035-11-15',
    name: 'Proclamação da República',
    type: 'federal',
    description: 'Marco da República brasileira.',
    traditions: ['Eventos educativos'],
    significance: 'Transição do Império para República.',
    preparation: ['Estudar história']
  },
  {
    id: 'consciencia-negra-2035',
    date: '2035-11-20',
    name: 'Consciência Negra',
    type: 'federal',
    description: 'Reflexão sobre cultura afro-brasileira.',
    traditions: ['Eventos culturais'],
    significance: 'Contribuição afrodescendente.',
    preparation: ['Participar de eventos']
  },
  {
    id: 'natal-2035',
    date: '2035-12-25',
    name: 'Natal',
    type: 'religious',
    description: 'Nascimento de Jesus Cristo.',
    traditions: ['Ceia em família'],
    significance: 'Celebração cristã de união.',
    preparation: ['Preparar cardápio']
  },
  // 2036
  {
    id: 'ano-novo-2036',
    date: '2036-01-01',
    name: 'Ano Novo',
    type: 'federal',
    description: 'Celebração do primeiro dia do ano.',
    traditions: ['Roupas brancas', 'Fogos de artifício'],
    significance: 'Renovação e esperança para o novo ano.',
    preparation: ['Comprar roupas brancas', 'Preparar ceia']
  },
  {
    id: 'carnaval-2036',
    date: '2036-03-04',
    name: 'Carnaval',
    type: 'cultural',
    description: 'A maior festa popular do Brasil.',
    traditions: ['Desfiles de escola de samba', 'Blocos de rua'],
    significance: 'Expressão cultural brasileira.',
    preparation: ['Escolher fantasia', 'Programar blocos']
  },
  {
    id: 'sexta-feira-santa-2036',
    date: '2036-04-18',
    name: 'Sexta-feira Santa',
    type: 'religious',
    description: 'Dia da crucificação de Cristo.',
    traditions: ['Via Sacra', 'Procissões'],
    significance: 'Reflexão espiritual cristã.',
    preparation: ['Participar de celebrações religiosas']
  },
  {
    id: 'tiradentes-2036',
    date: '2036-04-21',
    name: 'Tiradentes',
    type: 'federal',
    description: 'Homenagem ao mártir da Inconfidência Mineira.',
    traditions: ['Visitação a museus históricos'],
    significance: 'Símbolo da luta pela independência.',
    preparation: ['Visitar Ouro Preto']
  },
  {
    id: 'dia-trabalho-2036',
    date: '2036-05-01',
    name: 'Dia do Trabalho',
    type: 'federal',
    description: 'Celebração dos direitos trabalhistas.',
    traditions: ['Descanso do trabalho'],
    significance: 'Reconhecimento dos direitos dos trabalhadores.',
    preparation: ['Planejar descanso']
  },
  {
    id: 'independencia-2036',
    date: '2036-09-07',
    name: 'Independência do Brasil',
    type: 'federal',
    description: 'Comemoração da independência de 1822.',
    traditions: ['Desfile militar'],
    significance: 'Marco da emancipação política.',
    preparation: ['Assistir desfile']
  },
  {
    id: 'nossa-senhora-2036',
    date: '2036-10-12',
    name: 'Nossa Senhora Aparecida',
    type: 'religious',
    description: 'Padroeira do Brasil.',
    traditions: ['Peregrinação a Aparecida'],
    significance: 'Devoção nacional católica.',
    preparation: ['Planejar visita ao Santuário']
  },
  {
    id: 'finados-2036',
    date: '2036-11-02',
    name: 'Finados',
    type: 'religious',
    description: 'Homenagem aos que partiram.',
    traditions: ['Visitas aos cemitérios'],
    significance: 'Lembrança dos entes queridos.',
    preparation: ['Comprar flores']
  },
  {
    id: 'proclamacao-republica-2036',
    date: '2036-11-15',
    name: 'Proclamação da República',
    type: 'federal',
    description: 'Marco da República brasileira.',
    traditions: ['Eventos educativos'],
    significance: 'Transição do Império para República.',
    preparation: ['Estudar história']
  },
  {
    id: 'consciencia-negra-2036',
    date: '2036-11-20',
    name: 'Consciência Negra',
    type: 'federal',
    description: 'Reflexão sobre cultura afro-brasileira.',
    traditions: ['Eventos culturais'],
    significance: 'Contribuição afrodescendente.',
    preparation: ['Participar de eventos']
  },
  {
    id: 'natal-2036',
    date: '2036-12-25',
    name: 'Natal',
    type: 'religious',
    description: 'Nascimento de Jesus Cristo.',
    traditions: ['Ceia em família'],
    significance: 'Celebração cristã de união.',
    preparation: ['Preparar cardápio']
  },
  // 2037
  {
    id: 'ano-novo-2037',
    date: '2037-01-01',
    name: 'Ano Novo',
    type: 'federal',
    description: 'Celebração do primeiro dia do ano.',
    traditions: ['Roupas brancas', 'Fogos de artifício'],
    significance: 'Renovação e esperança para o novo ano.',
    preparation: ['Comprar roupas brancas', 'Preparar ceia']
  },
  {
    id: 'carnaval-2037',
    date: '2037-02-17',
    name: 'Carnaval',
    type: 'cultural',
    description: 'A maior festa popular do Brasil.',
    traditions: ['Desfiles de escola de samba', 'Blocos de rua'],
    significance: 'Expressão cultural brasileira.',
    preparation: ['Escolher fantasia', 'Programar blocos']
  },
  {
    id: 'sexta-feira-santa-2037',
    date: '2037-04-03',
    name: 'Sexta-feira Santa',
    type: 'religious',
    description: 'Dia da crucificação de Cristo.',
    traditions: ['Via Sacra', 'Procissões'],
    significance: 'Reflexão espiritual cristã.',
    preparation: ['Participar de celebrações religiosas']
  },
  {
    id: 'tiradentes-2037',
    date: '2037-04-21',
    name: 'Tiradentes',
    type: 'federal',
    description: 'Homenagem ao mártir da Inconfidência Mineira.',
    traditions: ['Visitação a museus históricos'],
    significance: 'Símbolo da luta pela independência.',
    preparation: ['Visitar Ouro Preto']
  },
  {
    id: 'dia-trabalho-2037',
    date: '2037-05-01',
    name: 'Dia do Trabalho',
    type: 'federal',
    description: 'Celebração dos direitos trabalhistas.',
    traditions: ['Descanso do trabalho'],
    significance: 'Reconhecimento dos direitos dos trabalhadores.',
    preparation: ['Planejar descanso']
  },
  {
    id: 'independencia-2037',
    date: '2037-09-07',
    name: 'Independência do Brasil',
    type: 'federal',
    description: 'Comemoração da independência de 1822.',
    traditions: ['Desfile militar'],
    significance: 'Marco da emancipação política.',
    preparation: ['Assistir desfile']
  },
  {
    id: 'nossa-senhora-2037',
    date: '2037-10-12',
    name: 'Nossa Senhora Aparecida',
    type: 'religious',
    description: 'Padroeira do Brasil.',
    traditions: ['Peregrinação a Aparecida'],
    significance: 'Devoção nacional católica.',
    preparation: ['Planejar visita ao Santuário']
  },
  {
    id: 'finados-2037',
    date: '2037-11-02',
    name: 'Finados',
    type: 'religious',
    description: 'Homenagem aos que partiram.',
    traditions: ['Visitas aos cemitérios'],
    significance: 'Lembrança dos entes queridos.',
    preparation: ['Comprar flores']
  },
  {
    id: 'proclamacao-republica-2037',
    date: '2037-11-15',
    name: 'Proclamação da República',
    type: 'federal',
    description: 'Marco da República brasileira.',
    traditions: ['Eventos educativos'],
    significance: 'Transição do Império para República.',
    preparation: ['Estudar história']
  },
  {
    id: 'consciencia-negra-2037',
    date: '2037-11-20',
    name: 'Consciência Negra',
    type: 'federal',
    description: 'Reflexão sobre cultura afro-brasileira.',
    traditions: ['Eventos culturais'],
    significance: 'Contribuição afrodescendente.',
    preparation: ['Participar de eventos']
  },
  {
    id: 'natal-2037',
    date: '2037-12-25',
    name: 'Natal',
    type: 'religious',
    description: 'Nascimento de Jesus Cristo.',
    traditions: ['Ceia em família'],
    significance: 'Celebração cristã de união.',
    preparation: ['Preparar cardápio']
  },
  // 2038
  {
    id: 'ano-novo-2038',
    date: '2038-01-01',
    name: 'Ano Novo',
    type: 'federal',
    description: 'Celebração do primeiro dia do ano.',
    traditions: ['Roupas brancas', 'Fogos de artifício'],
    significance: 'Renovação e esperança para o novo ano.',
    preparation: ['Comprar roupas brancas', 'Preparar ceia']
  },
  {
    id: 'carnaval-2038',
    date: '2038-03-09',
    name: 'Carnaval',
    type: 'cultural',
    description: 'A maior festa popular do Brasil.',
    traditions: ['Desfiles de escola de samba', 'Blocos de rua'],
    significance: 'Expressão cultural brasileira.',
    preparation: ['Escolher fantasia', 'Programar blocos']
  },
  {
    id: 'sexta-feira-santa-2038',
    date: '2038-04-23',
    name: 'Sexta-feira Santa',
    type: 'religious',
    description: 'Dia da crucificação de Cristo.',
    traditions: ['Via Sacra', 'Procissões'],
    significance: 'Reflexão espiritual cristã.',
    preparation: ['Participar de celebrações religiosas']
  },
  {
    id: 'tiradentes-2038',
    date: '2038-04-21',
    name: 'Tiradentes',
    type: 'federal',
    description: 'Homenagem ao mártir da Inconfidência Mineira.',
    traditions: ['Visitação a museus históricos'],
    significance: 'Símbolo da luta pela independência.',
    preparation: ['Visitar Ouro Preto']
  },
  {
    id: 'dia-trabalho-2038',
    date: '2038-05-01',
    name: 'Dia do Trabalho',
    type: 'federal',
    description: 'Celebração dos direitos trabalhistas.',
    traditions: ['Descanso do trabalho'],
    significance: 'Reconhecimento dos direitos dos trabalhadores.',
    preparation: ['Planejar descanso']
  },
  {
    id: 'independencia-2038',
    date: '2038-09-07',
    name: 'Independência do Brasil',
    type: 'federal',
    description: 'Comemoração da independência de 1822.',
    traditions: ['Desfile militar'],
    significance: 'Marco da emancipação política.',
    preparation: ['Assistir desfile']
  },
  {
    id: 'nossa-senhora-2038',
    date: '2038-10-12',
    name: 'Nossa Senhora Aparecida',
    type: 'religious',
    description: 'Padroeira do Brasil.',
    traditions: ['Peregrinação a Aparecida'],
    significance: 'Devoção nacional católica.',
    preparation: ['Planejar visita ao Santuário']
  },
  {
    id: 'finados-2038',
    date: '2038-11-02',
    name: 'Finados',
    type: 'religious',
    description: 'Homenagem aos que partiram.',
    traditions: ['Visitas aos cemitérios'],
    significance: 'Lembrança dos entes queridos.',
    preparation: ['Comprar flores']
  },
  {
    id: 'proclamacao-republica-2038',
    date: '2038-11-15',
    name: 'Proclamação da República',
    type: 'federal',
    description: 'Marco da República brasileira.',
    traditions: ['Eventos educativos'],
    significance: 'Transição do Império para República.',
    preparation: ['Estudar história']
  },
  {
    id: 'consciencia-negra-2038',
    date: '2038-11-20',
    name: 'Consciência Negra',
    type: 'federal',
    description: 'Reflexão sobre cultura afro-brasileira.',
    traditions: ['Eventos culturais'],
    significance: 'Contribuição afrodescendente.',
    preparation: ['Participar de eventos']
  },
  {
    id: 'natal-2038',
    date: '2038-12-25',
    name: 'Natal',
    type: 'religious',
    description: 'Nascimento de Jesus Cristo.',
    traditions: ['Ceia em família'],
    significance: 'Celebração cristã de união.',
    preparation: ['Preparar cardápio']
  },
  // 2039
  {
    id: 'ano-novo-2039',
    date: '2039-01-01',
    name: 'Ano Novo',
    type: 'federal',
    description: 'Celebração do primeiro dia do ano.',
    traditions: ['Roupas brancas', 'Fogos de artifício'],
    significance: 'Renovação e esperança para o novo ano.',
    preparation: ['Comprar roupas brancas', 'Preparar ceia']
  },
  {
    id: 'carnaval-2039',
    date: '2039-02-22',
    name: 'Carnaval',
    type: 'cultural',
    description: 'A maior festa popular do Brasil.',
    traditions: ['Desfiles de escola de samba', 'Blocos de rua'],
    significance: 'Expressão cultural brasileira.',
    preparation: ['Escolher fantasia', 'Programar blocos']
  },
  {
    id: 'sexta-feira-santa-2039',
    date: '2039-04-08',
    name: 'Sexta-feira Santa',
    type: 'religious',
    description: 'Dia da crucificação de Cristo.',
    traditions: ['Via Sacra', 'Procissões'],
    significance: 'Reflexão espiritual cristã.',
    preparation: ['Participar de celebrações religiosas']
  },
  {
    id: 'tiradentes-2039',
    date: '2039-04-21',
    name: 'Tiradentes',
    type: 'federal',
    description: 'Homenagem ao mártir da Inconfidência Mineira.',
    traditions: ['Visitação a museus históricos'],
    significance: 'Símbolo da luta pela independência.',
    preparation: ['Visitar Ouro Preto']
  },
  {
    id: 'dia-trabalho-2039',
    date: '2039-05-01',
    name: 'Dia do Trabalho',
    type: 'federal',
    description: 'Celebração dos direitos trabalhistas.',
    traditions: ['Descanso do trabalho'],
    significance: 'Reconhecimento dos direitos dos trabalhadores.',
    preparation: ['Planejar descanso']
  },
  {
    id: 'independencia-2039',
    date: '2039-09-07',
    name: 'Independência do Brasil',
    type: 'federal',
    description: 'Comemoração da independência de 1822.',
    traditions: ['Desfile militar'],
    significance: 'Marco da emancipação política.',
    preparation: ['Assistir desfile']
  },
  {
    id: 'nossa-senhora-2039',
    date: '2039-10-12',
    name: 'Nossa Senhora Aparecida',
    type: 'religious',
    description: 'Padroeira do Brasil.',
    traditions: ['Peregrinação a Aparecida'],
    significance: 'Devoção nacional católica.',
    preparation: ['Planejar visita ao Santuário']
  },
  {
    id: 'finados-2039',
    date: '2039-11-02',
    name: 'Finados',
    type: 'religious',
    description: 'Homenagem aos que partiram.',
    traditions: ['Visitas aos cemitérios'],
    significance: 'Lembrança dos entes queridos.',
    preparation: ['Comprar flores']
  },
  {
    id: 'proclamacao-republica-2039',
    date: '2039-11-15',
    name: 'Proclamação da República',
    type: 'federal',
    description: 'Marco da República brasileira.',
    traditions: ['Eventos educativos'],
    significance: 'Transição do Império para República.',
    preparation: ['Estudar história']
  },
  {
    id: 'consciencia-negra-2039',
    date: '2039-11-20',
    name: 'Consciência Negra',
    type: 'federal',
    description: 'Reflexão sobre cultura afro-brasileira.',
    traditions: ['Eventos culturais'],
    significance: 'Contribuição afrodescendente.',
    preparation: ['Participar de eventos']
  },
  {
    id: 'natal-2039',
    date: '2039-12-25',
    name: 'Natal',
    type: 'religious',
    description: 'Nascimento de Jesus Cristo.',
    traditions: ['Ceia em família'],
    significance: 'Celebração cristã de união.',
    preparation: ['Preparar cardápio']
  },
  // 2040
  {
    id: 'ano-novo-2040',
    date: '2040-01-01',
    name: 'Ano Novo',
    type: 'federal',
    description: 'Celebração do primeiro dia do ano.',
    traditions: ['Roupas brancas', 'Fogos de artifício'],
    significance: 'Renovação e esperança para o novo ano.',
    preparation: ['Comprar roupas brancas', 'Preparar ceia']
  },
  {
    id: 'carnaval-2040',
    date: '2040-02-14',
    name: 'Carnaval',
    type: 'cultural',
    description: 'A maior festa popular do Brasil.',
    traditions: ['Desfiles de escola de samba', 'Blocos de rua'],
    significance: 'Expressão cultural brasileira.',
    preparation: ['Escolher fantasia', 'Programar blocos']
  },
  {
    id: 'sexta-feira-santa-2040',
    date: '2040-03-30',
    name: 'Sexta-feira Santa',
    type: 'religious',
    description: 'Dia da crucificação de Cristo.',
    traditions: ['Via Sacra', 'Procissões'],
    significance: 'Reflexão espiritual cristã.',
    preparation: ['Participar de celebrações religiosas']
  },
  {
    id: 'tiradentes-2040',
    date: '2040-04-21',
    name: 'Tiradentes',
    type: 'federal',
    description: 'Homenagem ao mártir da Inconfidência Mineira.',
    traditions: ['Visitação a museus históricos'],
    significance: 'Símbolo da luta pela independência.',
    preparation: ['Visitar Ouro Preto']
  },
  {
    id: 'dia-trabalho-2040',
    date: '2040-05-01',
    name: 'Dia do Trabalho',
    type: 'federal',
    description: 'Celebração dos direitos trabalhistas.',
    traditions: ['Descanso do trabalho'],
    significance: 'Reconhecimento dos direitos dos trabalhadores.',
    preparation: ['Planejar descanso']
  },
  {
    id: 'independencia-2040',
    date: '2040-09-07',
    name: 'Independência do Brasil',
    type: 'federal',
    description: 'Comemoração da independência de 1822.',
    traditions: ['Desfile militar'],
    significance: 'Marco da emancipação política.',
    preparation: ['Assistir desfile']
  },
  {
    id: 'nossa-senhora-2040',
    date: '2040-10-12',
    name: 'Nossa Senhora Aparecida',
    type: 'religious',
    description: 'Padroeira do Brasil.',
    traditions: ['Peregrinação a Aparecida'],
    significance: 'Devoção nacional católica.',
    preparation: ['Planejar visita ao Santuário']
  },
  {
    id: 'finados-2040',
    date: '2040-11-02',
    name: 'Finados',
    type: 'religious',
    description: 'Homenagem aos que partiram.',
    traditions: ['Visitas aos cemitérios'],
    significance: 'Lembrança dos entes queridos.',
    preparation: ['Comprar flores']
  },
  {
    id: 'proclamacao-republica-2040',
    date: '2040-11-15',
    name: 'Proclamação da República',
    type: 'federal',
    description: 'Marco da República brasileira.',
    traditions: ['Eventos educativos'],
    significance: 'Transição do Império para República.',
    preparation: ['Estudar história']
  },
  {
    id: 'consciencia-negra-2040',
    date: '2040-11-20',
    name: 'Consciência Negra',
    type: 'federal',
    description: 'Reflexão sobre cultura afro-brasileira.',
    traditions: ['Eventos culturais'],
    significance: 'Contribuição afrodescendente.',
    preparation: ['Participar de eventos']
  },
  {
    id: 'natal-2040',
    date: '2040-12-25',
    name: 'Natal',
    type: 'religious',
    description: 'Nascimento de Jesus Cristo.',
    traditions: ['Ceia em família'],
    significance: 'Celebração cristã de união.',
    preparation: ['Preparar cardápio']
  }
];

// Delegated to the unified resolver so computed national holidays
// (e.g. Corpus Christi) are never missing from the interactive calendar.
export const getHolidaysByMonth = (year: number, month: number): BrazilianHoliday[] => {
  return getAllHolidaysForMonth(year, month);
};

export const getHolidaysByYear = (year: number): BrazilianHoliday[] => {
  return getAllHolidaysForYear(year);
};

export const getNextHoliday = (): BrazilianHoliday | null => {
  const today = new Date();
  const year = today.getFullYear();
  const upcoming = [...getAllHolidaysForYear(year), ...getAllHolidaysForYear(year + 1)]
    .filter(holiday => new Date(holiday.date) > today)
    .sort((a, b) => a.date.localeCompare(b.date));
  return upcoming[0] ?? null;
};

export const searchHolidays = (query: string): BrazilianHoliday[] => {
  const searchTerm = query.toLowerCase();
  // Search the unified set for nearby years (includes computed national
  // holidays), then the remaining static entries for other years.
  const pool = new Map<string, BrazilianHoliday>();
  const currentYear = new Date().getFullYear();
  for (let y = currentYear; y <= currentYear + 2; y++) {
    for (const h of getAllHolidaysForYear(y)) pool.set(h.id, h);
  }
  for (const h of brazilianHolidays) {
    if (!pool.has(h.id)) pool.set(h.id, h);
  }
  return [...pool.values()].filter(holiday =>
    holiday.name.toLowerCase().includes(searchTerm) ||
    holiday.description.toLowerCase().includes(searchTerm) ||
    holiday.traditions.some(tradition => 
      tradition.toLowerCase().includes(searchTerm)
    )
  );
};