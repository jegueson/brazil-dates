import { useEffect } from 'react';

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
  hreflang?: { [key: string]: string };
}

export const useSEO = (seoData: SEOData) => {
  useEffect(() => {
    // Update document title
    document.title = seoData.title;

    // Get or create meta tags
    const updateOrCreateMeta = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Update meta description
    updateOrCreateMeta('description', seoData.description);

    // Update keywords if provided
    if (seoData.keywords) {
      updateOrCreateMeta('keywords', seoData.keywords);
    }

    // Update Open Graph tags
    updateOrCreateMeta('og:title', seoData.title, true);
    updateOrCreateMeta('og:description', seoData.description, true);
    updateOrCreateMeta('og:type', seoData.ogType || 'website', true);
    updateOrCreateMeta('og:url', seoData.canonical || window.location.href, true);
    updateOrCreateMeta('og:locale', 'pt_BR', true);
    updateOrCreateMeta('og:site_name', 'Calendário Brasileiro', true);
    updateOrCreateMeta('og:country-name', 'Brasil', true);
    
    if (seoData.ogImage) {
      updateOrCreateMeta('og:image', seoData.ogImage, true);
      updateOrCreateMeta('og:image:width', '1200', true);
      updateOrCreateMeta('og:image:height', '630', true);
      updateOrCreateMeta('og:image:alt', seoData.title, true);
    }

    // Update Twitter Card tags
    updateOrCreateMeta('twitter:card', 'summary_large_image');
    updateOrCreateMeta('twitter:title', seoData.title);
    updateOrCreateMeta('twitter:description', seoData.description);
    if (seoData.ogImage) {
      updateOrCreateMeta('twitter:image', seoData.ogImage);
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = seoData.canonical || window.location.href;

    // Add hreflang tags if provided
    if (seoData.hreflang) {
      // Remove existing hreflang tags
      document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(link => link.remove());
      
      Object.entries(seoData.hreflang).forEach(([lang, url]) => {
        const hreflang = document.createElement('link');
        hreflang.rel = 'alternate';
        hreflang.hreflang = lang;
        hreflang.href = url;
        document.head.appendChild(hreflang);
      });
    }

    // Add structured data if provided
    if (seoData.structuredData) {
      let structuredDataScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.type = 'application/ld+json';
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(seoData.structuredData);
    }

    // Cleanup function to reset some meta tags when component unmounts
    return () => {
      // Keep essential meta tags, only remove component-specific ones
    };
  }, [seoData]);
};

// Predefined SEO configurations for common pages
export const seoConfigs = {
  home: {
    title: 'Calendário Brasileiro 2025 - Feriados e Datas Comemorativas',
    description: 'Calendário completo dos feriados brasileiros 2025-2040. Conheça todas as datas comemorativas, tradições culturais e regionais do Brasil. Planeje suas celebrações!',
    keywords: 'feriados brasileiros 2025, calendario brasil, datas comemorativas, carnaval, festa junina, natal, tradicoes brasileiras, feriados nacionais',
    canonical: 'https://calendario-feriados.com.br',
    ogImage: 'https://calendario-feriados.com.br/og-image.jpg',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Calendário Brasileiro",
      "description": "Calendário completo dos feriados brasileiros com tradições e informações culturais",
      "url": "https://calendario-feriados.com.br",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://calendario-feriados.com.br/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "inLanguage": "pt-BR",
      "publisher": {
        "@type": "Organization",
        "name": "Calendário Brasileiro",
        "url": "https://calendario-feriados.com.br"
      }
    }
  },
  sobre: {
    title: 'Sobre o Calendário Brasileiro - Nossa Missão e História',
    description: 'Conheça a história e missão do Calendário Brasileiro. Dedicados a preservar e compartilhar as tradições culturais que fazem do Brasil único.',
    keywords: 'sobre calendario brasileiro, missao, historia, cultura brasileira, tradicoes',
    canonical: 'https://calendario-feriados.com.br/sobre',
    ogType: 'article'
  },
  historia: {
    title: 'História dos Feriados Brasileiros - Evolução Cultural',
    description: 'Descubra como os feriados brasileiros evoluíram desde o período colonial. A fascinante jornada das celebrações que moldaram nossa cultura.',
    keywords: 'historia feriados brasil, evolucao cultural, periodo colonial, tradicoes historicas',
    canonical: 'https://calendario-feriados.com.br/historia',
    ogType: 'article'
  },
  tradicoes: {
    title: 'Tradições Brasileiras - Riqueza Cultural do Brasil',
    description: 'Explore as tradições brasileiras em toda sua diversidade. Carnaval, Festas Juninas, tradições regionais e o mosaico cultural do Brasil.',
    keywords: 'tradicoes brasileiras, carnaval, festas juninas, cultura regional, folclore brasileiro',
    canonical: 'https://calendario-feriados.com.br/tradicoes',
    ogType: 'article'
  },
  contato: {
    title: 'Contato - Calendário Brasileiro',
    description: 'Entre em contato conosco. Sugestões, dúvidas ou colaborações para o Calendário Brasileiro são sempre bem-vindas.',
    keywords: 'contato calendario brasileiro, sugestoes, colaboracao',
    canonical: 'https://calendario-feriados.com.br/contato',
    ogType: 'website'
  },
  privacidade: {
    title: 'Política de Privacidade - Calendário Brasileiro',
    description: 'Política de privacidade do Calendário Brasileiro. Saiba como tratamos seus dados pessoais e informações de navegação.',
    keywords: 'politica privacidade, dados pessoais, lgpd',
    canonical: 'https://calendario-feriados.com.br/privacidade',
    ogType: 'website'
  },
  termos: {
    title: 'Termos de Uso - Calendário Brasileiro',
    description: 'Termos de uso do Calendário Brasileiro. Condições para utilização do nosso site e serviços.',
    keywords: 'termos uso, condicoes utilizacao',
    canonical: 'https://calendario-feriados.com.br/termos',
    ogType: 'website'
  },
  regionais: {
    title: 'Feriados Regionais do Brasil 2025 - Calendário por Estado',
    description: 'Descubra os feriados regionais de cada estado brasileiro. Tradições locais, feriados municipais e estaduais com informações culturais completas para todo o Brasil.',
    keywords: 'feriados regionais brasil, feriados por estado, calendario regional, tradicoes locais, feriados municipais, estados brasileiros, cultura regional',
    canonical: 'https://calendario-feriados.com.br/regionais',
    ogType: 'website',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Feriados Regionais do Brasil",
      "description": "Lista completa dos feriados regionais de todos os estados brasileiros",
      "url": "https://calendario-feriados.com.br/regionais",
      "inLanguage": "pt-BR",
      "numberOfItems": 27,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Feriados do Rio de Janeiro",
          "url": "https://calendario-feriados.com.br/regional/rio-janeiro"
        },
        {
          "@type": "ListItem", 
          "position": 2,
          "name": "Feriados de São Paulo",
          "url": "https://calendario-feriados.com.br/regional/sao-paulo"
        }
      ]
    }
  }
};

// Regional SEO configurations for each state
export const getRegionalSEO = (state: string, stateName: string, region: string) => {
  const stateSlug = state.toLowerCase().replace(/\s+/g, '-');
  const baseUrl = 'https://calendario-feriados.com.br';
  
  return {
    title: `Feriados de ${stateName} 2025 - Calendário Regional ${region}`,
    description: `Calendário completo dos feriados de ${stateName} em 2025. Feriados municipais, estaduais e nacionais com tradições e informações culturais da região ${region}.`,
    keywords: `feriados ${stateName.toLowerCase()}, calendario ${stateName.toLowerCase()}, feriados municipais ${stateName.toLowerCase()}, tradicoes ${stateName.toLowerCase()}, cultura ${stateName.toLowerCase()}, ${region.toLowerCase()}, brasil`,
    canonical: `${baseUrl}/regional/${stateSlug}`,
    ogType: 'article',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": `Feriados de ${stateName} 2025`,
      "description": `Calendário completo dos feriados de ${stateName} com tradições regionais`,
      "url": `${baseUrl}/regional/${stateSlug}`,
      "inLanguage": "pt-BR",
      "author": {
        "@type": "Organization",
        "name": "Calendário Brasileiro"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Calendário Brasileiro",
        "url": baseUrl
      },
      "about": {
        "@type": "Place",
        "name": stateName,
        "containedInPlace": {
          "@type": "Country",
          "name": "Brasil"
        }
      },
      "keywords": `feriados ${stateName.toLowerCase()}, calendario ${stateName.toLowerCase()}, tradicoes ${stateName.toLowerCase()}, ${region.toLowerCase()}`
    }
  };
};
