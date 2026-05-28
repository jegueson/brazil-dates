import { regionalHolidaysExtra } from "./regional-holidays-extra";

export interface RegionalHoliday {
  id: string;
  date: string;
  name: string;
  type: 'municipal' | 'estadual' | 'regional' | 'cultural';
  description: string;
  traditions: string[];
  significance: string;
  preparation?: string[];
  region: string;
  state: string;
  city?: string;
}

export const regionalHolidays: RegionalHoliday[] = [
  // RIO DE JANEIRO
  {
    id: 'sao-sebastiao-rj-2025',
    date: '2025-01-20',
    name: 'São Sebastião (RJ)',
    type: 'municipal',
    description: 'Padroeiro da cidade do Rio de Janeiro, celebrado com missas e procissões.',
    traditions: [
      'Missas especiais na Catedral Metropolitana',
      'Procissão pelas ruas do centro',
      'Festa popular no Largo da Carioca',
      'Queima de fogos no Cristo Redentor'
    ],
    significance: 'São Sebastião é o padroeiro do Rio de Janeiro desde 1565.',
    preparation: ['Participar das missas', 'Assistir à procissão', 'Visitar a Catedral'],
    region: 'Sudeste',
    state: 'Rio de Janeiro',
    city: 'Rio de Janeiro'
  },
  {
    id: 'aniversario-rj-2025',
    date: '2025-03-01',
    name: 'Aniversário da Cidade do Rio de Janeiro',
    type: 'municipal',
    description: 'Comemoração da fundação da cidade do Rio de Janeiro em 1565.',
    traditions: [
      'Desfile cívico na Avenida Rio Branco',
      'Hasteamento da bandeira na Prefeitura',
      'Apresentações culturais',
      'Fogos de artifício na Praia de Copacabana'
    ],
    significance: 'Marco da fundação da cidade por Estácio de Sá.',
    preparation: ['Assistir ao desfile cívico', 'Participar das celebrações oficiais'],
    region: 'Sudeste',
    state: 'Rio de Janeiro',
    city: 'Rio de Janeiro'
  },

  // SÃO PAULO
  {
    id: 'aniversario-sp-2025',
    date: '2025-01-25',
    name: 'Aniversário de São Paulo',
    type: 'municipal',
    description: 'Comemoração da fundação da cidade de São Paulo em 1554.',
    traditions: [
      'Desfile cívico na Avenida Paulista',
      'Apresentações culturais no Anhangabaú',
      'Fogos de artifício no Parque Ibirapuera',
      'Feira gastronômica com comidas típicas'
    ],
    significance: 'Fundação da cidade pelos jesuítas em 25 de janeiro de 1554.',
    preparation: ['Assistir ao desfile na Paulista', 'Visitar o Pátio do Colégio', 'Participar das festividades no Ibirapuera'],
    region: 'Sudeste',
    state: 'São Paulo',
    city: 'São Paulo'
  },
  {
    id: 'revolucao-1932-sp-2025',
    date: '2025-07-09',
    name: 'Revolução Constitucionalista de 1932',
    type: 'estadual',
    description: 'Feriado estadual em homenagem à Revolução de 1932.',
    traditions: [
      'Desfile militar no Obelisco do Ibirapuera',
      'Hasteamento da bandeira paulista',
      'Apresentações sobre a história',
      'Visitas ao Museu da Revolução'
    ],
    significance: 'Movimento armado contra o governo de Getúlio Vargas.',
    preparation: ['Visitar o Obelisco do Ibirapuera', 'Conhecer a história da revolução'],
    region: 'Sudeste',
    state: 'São Paulo'
  },

  // MINAS GERAIS
  {
    id: 'inconfidencia-mg-2025',
    date: '2025-04-21',
    name: 'Inconfidência Mineira',
    type: 'estadual',
    description: 'Feriado estadual em homenagem à Inconfidência Mineira.',
    traditions: [
      'Visitação ao Museu da Inconfidência',
      'Turismo histórico em Ouro Preto',
      'Apresentações sobre Tiradentes',
      'Festa popular com comidas mineiras'
    ],
    significance: 'Movimento separatista liderado por Tiradentes.',
    preparation: ['Visitar Ouro Preto e Tiradentes', 'Conhecer a história da Inconfidência', 'Experimentar comidas típicas mineiras'],
    region: 'Sudeste',
    state: 'Minas Gerais'
  },

  // ESPÍRITO SANTO
  {
    id: 'nossa-senhora-penha-es-2025',
    date: '2025-04-08',
    name: 'Nossa Senhora da Penha (ES)',
    type: 'estadual',
    description: 'Padroeira do Espírito Santo, celebrada com romaria e festividades.',
    traditions: [
      'Romaria ao Convento da Penha',
      'Missas especiais',
      'Festa popular em Vila Velha',
      'Apresentações culturais'
    ],
    significance: 'Devoção à padroeira do estado do Espírito Santo.',
    preparation: ['Participar da romaria', 'Visitar o Convento da Penha'],
    region: 'Sudeste',
    state: 'Espírito Santo'
  },

  // BAHIA
  {
    id: 'iemanja-ba-2025',
    date: '2025-02-02',
    name: 'Festa de Iemanjá',
    type: 'cultural',
    description: 'Celebração da Rainha do Mar, uma das maiores festas religiosas da Bahia.',
    traditions: [
      'Oferendas ao mar na Praia do Rio Vermelho',
      'Procissão de barcos enfeitados',
      'Ritual de limpeza espiritual',
      'Festa popular com música e dança'
    ],
    significance: 'Homenagem à orixá Iemanjá, protetora dos pescadores.',
    preparation: ['Preparar oferendas (flores brancas, espelhos, perfumes)', 'Participar da procissão', 'Fazer pedidos à Rainha do Mar'],
    region: 'Nordeste',
    state: 'Bahia',
    city: 'Salvador'
  },
  {
    id: 'independencia-bahia-2025',
    date: '2025-07-02',
    name: 'Independência da Bahia',
    type: 'estadual',
    description: 'Comemoração da independência da Bahia em 1823.',
    traditions: [
      'Desfile cívico no Campo Grande',
      'Apresentações de capoeira',
      'Festa popular com comidas típicas',
      'Queima de fogos no Farol da Barra'
    ],
    significance: 'Marco da luta pela independência do Brasil na Bahia.',
    preparation: ['Assistir ao desfile', 'Experimentar comidas típicas', 'Participar das festividades'],
    region: 'Nordeste',
    state: 'Bahia'
  },

  // PERNAMBUCO
  {
    id: 'revolucao-pernambucana-2025',
    date: '2025-03-06',
    name: 'Revolução Pernambucana',
    type: 'estadual',
    description: 'Feriado estadual em homenagem à Revolução Pernambucana de 1817.',
    traditions: [
      'Desfile cívico no Recife',
      'Apresentações sobre a história',
      'Festa popular com frevo',
      'Visitas aos locais históricos'
    ],
    significance: 'Primeiro movimento republicano do Brasil.',
    preparation: ['Conhecer a história da revolução', 'Assistir apresentações de frevo'],
    region: 'Nordeste',
    state: 'Pernambuco'
  },

  // CEARÁ
  {
    id: 'padre-cicero-ce-2025',
    date: '2025-03-20',
    name: 'Padre Cícero',
    type: 'cultural',
    description: 'Celebração do Padre Cícero, importante figura religiosa do Ceará.',
    traditions: [
      'Romaria a Juazeiro do Norte',
      'Missas especiais',
      'Festa popular',
      'Apresentações culturais'
    ],
    significance: 'Homenagem ao Padre Cícero, importante figura do Nordeste.',
    preparation: ['Participar da romaria', 'Visitar Juazeiro do Norte'],
    region: 'Nordeste',
    state: 'Ceará'
  },

  // MARANHÃO
  {
    id: 'bumba-meu-boi-ma-2025',
    date: '2025-06-24',
    name: 'Bumba-meu-boi',
    type: 'cultural',
    description: 'Festa tradicional do Maranhão com apresentações de bumba-meu-boi.',
    traditions: [
      'Apresentações de bumba-meu-boi',
      'Festa popular em São Luís',
      'Comidas típicas',
      'Música e dança tradicional'
    ],
    significance: 'Tradição cultural única do Maranhão.',
    preparation: ['Assistir apresentações', 'Experimentar comidas típicas'],
    region: 'Nordeste',
    state: 'Maranhão'
  },

  // PARAÍBA
  {
    id: 'independencia-pb-2025',
    date: '2025-08-05',
    name: 'Independência da Paraíba',
    type: 'estadual',
    description: 'Comemoração da independência da Paraíba.',
    traditions: [
      'Desfile cívico',
      'Apresentações culturais',
      'Festa popular',
      'Hasteamento da bandeira'
    ],
    significance: 'Marco da independência da Paraíba.',
    preparation: ['Assistir ao desfile', 'Participar das festividades'],
    region: 'Nordeste',
    state: 'Paraíba'
  },

  // RIO GRANDE DO NORTE
  {
    id: 'santa-luzia-rn-2025',
    date: '2025-12-13',
    name: 'Santa Luzia (RN)',
    type: 'cultural',
    description: 'Celebração de Santa Luzia, padroeira do Rio Grande do Norte.',
    traditions: [
      'Missas especiais',
      'Procissões',
      'Festa popular',
      'Apresentações culturais'
    ],
    significance: 'Devoção à Santa Luzia, padroeira do estado.',
    preparation: ['Participar das missas', 'Assistir às procissões'],
    region: 'Nordeste',
    state: 'Rio Grande do Norte'
  },

  // ALAGOAS
  {
    id: 'frei-caneca-al-2025',
    date: '2025-01-20',
    name: 'Frei Caneca (AL)',
    type: 'estadual',
    description: 'Homenagem a Frei Caneca, mártir da Confederação do Equador.',
    traditions: [
      'Desfile cívico',
      'Apresentações sobre a história',
      'Festa popular',
      'Visitas aos locais históricos'
    ],
    significance: 'Homenagem ao mártir da Confederação do Equador.',
    preparation: ['Conhecer a história', 'Participar das celebrações'],
    region: 'Nordeste',
    state: 'Alagoas'
  },

  // SERGIPE
  {
    id: 'sao-joao-se-2025',
    date: '2025-06-24',
    name: 'São João (SE)',
    type: 'cultural',
    description: 'Festa de São João, uma das maiores celebrações de Sergipe.',
    traditions: [
      'Fogueiras',
      'Quadrilhas',
      'Comidas típicas',
      'Música forró'
    ],
    significance: 'Maior festa popular de Sergipe.',
    preparation: ['Participar das quadrilhas', 'Experimentar comidas típicas'],
    region: 'Nordeste',
    state: 'Sergipe'
  },

  // PIAUÍ
  {
    id: 'nossa-senhora-conceicao-pi-2025',
    date: '2025-12-08',
    name: 'Nossa Senhora da Conceição (PI)',
    type: 'cultural',
    description: 'Celebração da padroeira do Piauí.',
    traditions: [
      'Missas especiais',
      'Procissões',
      'Festa popular',
      'Apresentações culturais'
    ],
    significance: 'Devoção à padroeira do Piauí.',
    preparation: ['Participar das missas', 'Assistir às procissões'],
    region: 'Nordeste',
    state: 'Piauí'
  },

  // PARÁ
  {
    id: 'ciri-nazare-para-2025',
    date: '2025-10-12',
    name: 'Círio de Nazaré',
    type: 'cultural',
    description: 'Maior procissão católica do Brasil, celebrada em Belém.',
    traditions: [
      'Grande procissão pelas ruas de Belém',
      'Romaria de milhões de fiéis',
      'Oferendas à Virgem de Nazaré',
      'Festa popular com comidas típicas'
    ],
    significance: 'Maior manifestação de fé católica do Brasil.',
    preparation: ['Participar da romaria', 'Fazer oferendas à santa', 'Experimentar comidas paraenses'],
    region: 'Norte',
    state: 'Pará',
    city: 'Belém'
  },

  // AMAZONAS
  {
    id: 'elevacao-amazonas-2025',
    date: '2025-09-05',
    name: 'Elevação do Amazonas à Categoria de Província',
    type: 'estadual',
    description: 'Comemoração da elevação do Amazonas à categoria de província.',
    traditions: [
      'Desfile cívico',
      'Apresentações culturais',
      'Festa popular',
      'Hasteamento da bandeira'
    ],
    significance: 'Marco histórico da elevação do Amazonas.',
    preparation: ['Assistir ao desfile', 'Participar das festividades'],
    region: 'Norte',
    state: 'Amazonas'
  },

  // ACRE
  {
    id: 'revolucao-acreana-2025',
    date: '2025-08-06',
    name: 'Revolução Acreana',
    type: 'estadual',
    description: 'Comemoração da Revolução Acreana e anexação do Acre ao Brasil.',
    traditions: [
      'Desfile cívico',
      'Apresentações sobre a história',
      'Festa popular',
      'Visitas aos locais históricos'
    ],
    significance: 'Marco da anexação do Acre ao Brasil.',
    preparation: ['Conhecer a história', 'Participar das celebrações'],
    region: 'Norte',
    state: 'Acre'
  },

  // RONDÔNIA
  {
    id: 'criacao-rondonia-2025',
    date: '2025-01-04',
    name: 'Criação do Estado de Rondônia',
    type: 'estadual',
    description: 'Comemoração da criação do estado de Rondônia.',
    traditions: [
      'Desfile cívico',
      'Apresentações culturais',
      'Festa popular',
      'Hasteamento da bandeira'
    ],
    significance: 'Marco da criação do estado de Rondônia.',
    preparation: ['Assistir ao desfile', 'Participar das festividades'],
    region: 'Norte',
    state: 'Rondônia'
  },

  // RORAIMA
  {
    id: 'criacao-roraima-2025',
    date: '2025-10-05',
    name: 'Criação do Estado de Roraima',
    type: 'estadual',
    description: 'Comemoração da criação do estado de Roraima.',
    traditions: [
      'Desfile cívico',
      'Apresentações culturais',
      'Festa popular',
      'Hasteamento da bandeira'
    ],
    significance: 'Marco da criação do estado de Roraima.',
    preparation: ['Assistir ao desfile', 'Participar das festividades'],
    region: 'Norte',
    state: 'Roraima'
  },

  // AMAPÁ
  {
    id: 'criacao-amapa-2025',
    date: '2025-10-13',
    name: 'Criação do Estado do Amapá',
    type: 'estadual',
    description: 'Comemoração da criação do estado do Amapá.',
    traditions: [
      'Desfile cívico',
      'Apresentações culturais',
      'Festa popular',
      'Hasteamento da bandeira'
    ],
    significance: 'Marco da criação do estado do Amapá.',
    preparation: ['Assistir ao desfile', 'Participar das festividades'],
    region: 'Norte',
    state: 'Amapá'
  },

  // TOCANTINS
  {
    id: 'criacao-tocantins-2025',
    date: '2025-10-05',
    name: 'Criação do Estado do Tocantins',
    type: 'estadual',
    description: 'Comemoração da criação do estado do Tocantins.',
    traditions: [
      'Desfile cívico',
      'Apresentações culturais',
      'Festa popular',
      'Hasteamento da bandeira'
    ],
    significance: 'Marco da criação do estado do Tocantins.',
    preparation: ['Assistir ao desfile', 'Participar das festividades'],
    region: 'Norte',
    state: 'Tocantins'
  },

  // RIO GRANDE DO SUL
  {
    id: 'revolucao-farrapos-rs-2025',
    date: '2025-09-20',
    name: 'Revolução Farroupilha',
    type: 'estadual',
    description: 'Feriado estadual em homenagem à Revolução Farroupilha.',
    traditions: [
      'Desfile de cavalarianos',
      'Apresentações de danças gaúchas',
      'Festa popular com churrasco',
      'Hasteamento da bandeira rio-grandense'
    ],
    significance: 'Movimento separatista do Rio Grande do Sul.',
    preparation: ['Participar do desfile', 'Experimentar churrasco gaúcho', 'Assistir apresentações culturais'],
    region: 'Sul',
    state: 'Rio Grande do Sul'
  },

  // SANTA CATARINA
  {
    id: 'revolucao-farroupilha-sc-2025',
    date: '2025-09-20',
    name: 'Revolução Farroupilha (SC)',
    type: 'cultural',
    description: 'Celebração da Revolução Farroupilha em Santa Catarina.',
    traditions: [
      'Apresentações culturais',
      'Festa popular',
      'Comidas típicas',
      'Música regional'
    ],
    significance: 'Participação de Santa Catarina na Revolução Farroupilha.',
    preparation: ['Participar das festividades', 'Experimentar comidas típicas'],
    region: 'Sul',
    state: 'Santa Catarina'
  },

  // PARANÁ
  {
    id: 'emancipacao-parana-2025',
    date: '2025-12-19',
    name: 'Emancipação do Paraná',
    type: 'estadual',
    description: 'Comemoração da emancipação do Paraná.',
    traditions: [
      'Desfile cívico',
      'Apresentações culturais',
      'Festa popular',
      'Hasteamento da bandeira'
    ],
    significance: 'Marco da emancipação do Paraná.',
    preparation: ['Assistir ao desfile', 'Participar das festividades'],
    region: 'Sul',
    state: 'Paraná'
  },

  // MATO GROSSO
  {
    id: 'criacao-mato-grosso-2025',
    date: '2025-05-28',
    name: 'Criação do Estado de Mato Grosso',
    type: 'estadual',
    description: 'Comemoração da criação do estado de Mato Grosso.',
    traditions: [
      'Desfile cívico',
      'Apresentações culturais',
      'Festa popular',
      'Hasteamento da bandeira'
    ],
    significance: 'Marco da criação do estado de Mato Grosso.',
    preparation: ['Assistir ao desfile', 'Participar das festividades'],
    region: 'Centro-Oeste',
    state: 'Mato Grosso'
  },

  // MATO GROSSO DO SUL
  {
    id: 'criacao-mato-grosso-sul-2025',
    date: '2025-10-11',
    name: 'Criação do Estado de Mato Grosso do Sul',
    type: 'estadual',
    description: 'Comemoração da criação do estado de Mato Grosso do Sul.',
    traditions: [
      'Desfile cívico',
      'Apresentações culturais',
      'Festa popular',
      'Hasteamento da bandeira'
    ],
    significance: 'Marco da criação do estado de Mato Grosso do Sul.',
    preparation: ['Assistir ao desfile', 'Participar das festividades'],
    region: 'Centro-Oeste',
    state: 'Mato Grosso do Sul'
  },

  // GOIÁS
  {
    id: 'fundacao-goias-2025',
    date: '2025-07-25',
    name: 'Fundação de Goiás',
    type: 'cultural',
    description: 'Comemoração da fundação do estado de Goiás.',
    traditions: [
      'Desfile cívico',
      'Apresentações culturais',
      'Festa popular',
      'Hasteamento da bandeira'
    ],
    significance: 'Marco da fundação do estado de Goiás.',
    preparation: ['Assistir ao desfile', 'Participar das festividades'],
    region: 'Centro-Oeste',
    state: 'Goiás'
  },

  // DISTRITO FEDERAL
  {
    id: 'fundacao-brasilia-2025',
    date: '2025-04-21',
    name: 'Fundação de Brasília',
    type: 'cultural',
    description: 'Comemoração da fundação de Brasília.',
    traditions: [
      'Desfile cívico',
      'Apresentações culturais',
      'Festa popular',
      'Visitas aos monumentos'
    ],
    significance: 'Marco da fundação de Brasília.',
    preparation: ['Assistir ao desfile', 'Visitar os monumentos', 'Participar das festividades'],
    region: 'Centro-Oeste',
    state: 'Distrito Federal',
    city: 'Brasília'
  }
];

const allRegionalHolidays: RegionalHoliday[] = [
  ...regionalHolidays,
  ...regionalHolidaysExtra,
];

export const getRegionalHolidaysByState = (state: string): RegionalHoliday[] => {
  return allRegionalHolidays.filter((holiday) => holiday.state === state);
};

export const getRegionalHolidaysByRegion = (region: string): RegionalHoliday[] => {
  return allRegionalHolidays.filter((holiday) => holiday.region === region);
};

export const getRegionalHolidaysByCity = (city: string): RegionalHoliday[] => {
  return allRegionalHolidays.filter((holiday) => holiday.city === city);
};

export const getAllStates = (): string[] => {
  return [...new Set(allRegionalHolidays.map((holiday) => holiday.state))];
};

export const getAllRegions = (): string[] => {
  return [...new Set(allRegionalHolidays.map((holiday) => holiday.region))];
};
