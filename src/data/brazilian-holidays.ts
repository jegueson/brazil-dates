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

export const brazilianHolidays2025: BrazilianHoliday[] = [
  {
    id: 'ano-novo-2025',
    date: '2025-01-01',
    name: 'Ano Novo',
    type: 'federal',
    description: 'O primeiro dia do ano é celebrado em todo o Brasil com festas, fogos de artifício e tradições especiais.',
    traditions: [
      'Roupas brancas para dar sorte',
      'Queima de fogos de artifício',
      'Festa na praia de Copacabana',
      'Ceia de Ano Novo'
    ],
    significance: 'Marca o início de um novo ciclo, sendo momento de renovação e esperanças.',
    preparation: [
      'Comprar roupas brancas',
      'Preparar ceia especial',
      'Organizar festa em casa ou escolher local para comemorar'
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
    id: 'black-friday-2025',
    date: '2025-11-28',
    name: 'Black Friday Brasil',
    type: 'commercial',
    description: 'Maior evento comercial do ano no Brasil.',
    traditions: [
      'Grandes promoções online e físicas',
      'Compras antecipadas para o Natal',
      'Madrugadas em filas de lojas'
    ],
    significance: 'Oportunidade de economia e aquecimento da economia nacional.',
    preparation: [
      'Pesquisar preços com antecedência',
      'Fazer lista de desejos',
      'Separar orçamento para compras'
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
  }
];

export const getHolidaysByMonth = (year: number, month: number): BrazilianHoliday[] => {
  return brazilianHolidays2025.filter(holiday => {
    const holidayDate = new Date(holiday.date);
    return holidayDate.getFullYear() === year && holidayDate.getMonth() === month;
  });
};

export const getNextHoliday = (): BrazilianHoliday | null => {
  const today = new Date();
  const upcomingHolidays = brazilianHolidays2025.filter(holiday => 
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
  return brazilianHolidays2025.filter(holiday =>
    holiday.name.toLowerCase().includes(searchTerm) ||
    holiday.description.toLowerCase().includes(searchTerm) ||
    holiday.traditions.some(tradition => 
      tradition.toLowerCase().includes(searchTerm)
    )
  );
};