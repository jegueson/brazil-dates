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
  }
];

export const getHolidaysByMonth = (year: number, month: number): BrazilianHoliday[] => {
  return brazilianHolidays.filter(holiday => {
    const holidayDate = new Date(holiday.date);
    return holidayDate.getFullYear() === year && holidayDate.getMonth() === month;
  });
};

export const getHolidaysByYear = (year: number): BrazilianHoliday[] => {
  return brazilianHolidays.filter(holiday => {
    const holidayDate = new Date(holiday.date);
    return holidayDate.getFullYear() === year;
  });
};

export const getNextHoliday = (): BrazilianHoliday | null => {
  const today = new Date();
  const upcomingHolidays = brazilianHolidays.filter(holiday => 
    new Date(holiday.date) > today
  );
  
  if (upcomingHolidays.length === 0) return null;
  
  return upcomingHolidays.reduce((closest, current) => {
    const currentDate = new Date(current.date);
    const closestDate = new Date(closest.date);
    return currentDate < closestDate ? current : closest;
  });
};

export const searchHolidays = (query: string): BrazilianHoliday[] => {
  const searchTerm = query.toLowerCase();
  return brazilianHolidays.filter(holiday =>
    holiday.name.toLowerCase().includes(searchTerm) ||
    holiday.description.toLowerCase().includes(searchTerm) ||
    holiday.traditions.some(tradition => 
      tradition.toLowerCase().includes(searchTerm)
    )
  );
};