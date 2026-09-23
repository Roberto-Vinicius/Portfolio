export type Locale = "pt" | "en";

export interface BookLink {
  label: string;
  url: string;
}
export interface BookFaq {
  question: string;
  answer: string;
}

export interface BookDossier {
  fullTitle: string;
  openCoverLabel: string;
  openControlLabel: string;
  closeLabel: string;
  heading: string;
  synopsisHeading: string;
  synopsis: string[];
  topicsHeading: string;
  topics: string[];
  editionsHeading: string;
  amazonHeading: string;
  amazonFormatsLabel: string;
  amazonFormats: string[];
  hardcoverHeading: string;
  appleHeading: string;
  factsLabels: {
    author: string;
    byline: string;
    publisher: string;
    publicationDate: string;
    availabilityDate: string;
    language: string;
    pages: string;
    isbn13: string;
    asin: string;
    format: string;
    seller: string;
  };
  amazonHardcover: {
    byline: string;
    publisher: string;
    publicationDate: string;
    language: string;
    pages: string;
    isbn13: string;
    asin: string;
  };
  appleEbook: {
    author: string;
    publisher: string;
    availabilityDate: string;
    language: string;
    pages: string;
    format: string;
    seller: string;
  };
  retailerLinksLabel: string;
  foundationHeading: string;
  foundationIntroduction: string;
  foundationLinksLabel: string;
  foundationLinks: BookLink[];
  faqHeading: string;
  faqs: BookFaq[];
}

export interface BookContent {
  locale: Locale;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  path: string;
  cover: string;
  coverAlt: string;
  caseImage: string;
  language: string;
  availability: string;
  amazonUrl: string;
  appleBooksUrl: string;
  backHome: string;
  dossier: BookDossier;
}

export interface Book {
  id: string;
  collection: string;
  number: string;
  content: Record<Locale, BookContent>;
}

const portfolioLinks = [
  { label: "GitHub", url: "https://github.com/Roberto-Vinicius" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/robertoviniciusd" },
  { label: "Email", url: "mailto:robertodantas1030@gmail.com" },
];

const makeDossier = (locale: Locale): BookDossier =>
  locale === "pt"
    ? {
        fullTitle: "ROBERTO VINICIUS DANTAS BATISTA — Portfólio & Carreira",
        openCoverLabel: "Abrir o dossiê profissional",
        openControlLabel: "Toque para abrir a trajetória profissional",
        closeLabel: "Fechar dossiê",
        heading: "Trajetória & Experiência",
        synopsisHeading: "Experiência Profissional",
        synopsis: [
          "SESAP/RN (10/01/2025 - Atual) — Desenvolvedor de Software: Responsável pelo desenvolvimento e sustentação de sistemas da Secretaria de Estado da Saúde Pública do RN, atuando na concepção e implementação de soluções com PHP (Laravel) e Vue.js focadas em resiliência e atendimento às demandas do setor de saúde pública.",
          "SESAP/RN (10/01/2025 - Atual) — DevOps: Infraestrutura containerizada para aplicações Laravel utilizando Docker e Docker Compose. Implementação de pipelines CI/CD com automação de deploy, monitoramento Git e rollback automático. Criação de scripts Bash de backup com compressão, rotação e validação de integridade. Arquitetura de microsserviços com PHP-FPM 8.2, Nginx e PostgreSQL, limites de recursos, healthchecks e deploy com zero-downtime.",
          "BCZM / UFRN (01/10/2023 - 20/07/2024) — Bolsista / Analista de Suporte de TI: Suporte técnico a usuários, montagem, instalação e manutenção preventiva do parque tecnológico, configuração de softwares corporativos e manutenção de infraestrutura de rede lógica.",
        ],
        topicsHeading: "Stack Tecnológica & Habilidades",
        topics: [
          "Linguagens: JavaScript, PHP, Python, TypeScript, Bash",
          "Frameworks & Bibliotecas: Laravel, Vue.js, React, Node.js, Bootstrap",
          "DevOps & Banco de Dados: Docker, Docker Compose, Nginx, PostgreSQL, CI/CD, Git",
          "Soft Skills: Resolução de problemas, comunicação assertiva e proatividade",
        ],
        editionsHeading: "Formação Acadêmica & Qualificações",
        amazonHeading: "Graduação",
        amazonFormatsLabel: "Educação Superior",
        amazonFormats: [
          "Bacharelado em Ciência e Tecnologia (UFRN) — Noturno (Conclusão 2027 / 8º período)",
        ],
        hardcoverHeading: "Universidade Federal do RN",
        appleHeading: "Formação Técnica",
        factsLabels: {
          author: "Profissional",
          byline: "Cargo Atual",
          publisher: "Instituição / Órgão",
          publicationDate: "Período",
          availabilityDate: "Disponibilidade",
          language: "Idioma",
          pages: "Contato",
          isbn13: "Telefone",
          asin: "Localização",
          format: "Nível Técnico",
          seller: "Instituição de Ensino",
        },
        amazonHardcover: {
          byline: "Desenvolvedor de Software & DevOps",
          publisher: "SESAP/RN",
          publicationDate: "2025 - Presente",
          language: "Português",
          pages: "robertodantas1030@gmail.com",
          isbn13: "(84) 99405-6581",
          asin: "Natal - RN, Brasil",
        },
        appleEbook: {
          author: "Roberto Vinicius Dantas Batista",
          publisher: "Colégio e Curso Motivar",
          availabilityDate: "Concluído em 2020",
          language: "Português",
          pages: "Informática - Manutenção e Suporte de TI",
          format: "Curso Técnico",
          seller: "Colégio e Curso Motivar",
        },
        retailerLinksLabel: "Canais de Contato e Portfólio",
        foundationHeading: "Objetivo Profissional",
        foundationIntroduction:
          "Entregar a melhor solução técnica para o seu problema, combinando boas práticas de engenharia de software, automação de infraestrutura moderna e interfaces reativas de alto desempenho.",
        foundationLinksLabel: "Links Profissionais",
        foundationLinks: portfolioLinks,
        faqHeading: "Perguntas Frequentes & Contratação",
        faqs: [
          {
            question: "Quais são as principais especialidades de Roberto?",
            answer:
              "Desenvolvimento Full Stack moderno com PHP (Laravel), Vue.js, React, arquitetura containerizada em Docker e orquestração de deploy com Nginx e PostgreSQL.",
          },
          {
            question: "Como entrar em contato para projetos ou oportunidades?",
            answer:
              "Diretamente pelo e-mail robertodantas1030@gmail.com ou através do LinkedIn e GitHub listados.",
          },
        ],
      }
    : {
        fullTitle: "ROBERTO VINICIUS DANTAS BATISTA — Portfolio & Career",
        openCoverLabel: "Open professional dossier",
        openControlLabel: "Tap to open professional journey",
        closeLabel: "Close dossier",
        heading: "Journey & Experience",
        synopsisHeading: "Professional Experience",
        synopsis: [
          "SESAP/RN (01/10/2025 - Present) — Software Developer: Responsible for the development and maintenance of public health systems and official portals at RN State Health Secretariat, building scalable solutions with PHP (Laravel) and Vue.js.",
          "SESAP/RN (01/10/2025 - Present) — DevOps Engineer: Containerized infrastructure management for Laravel applications with Docker and Docker Compose. Automated CI/CD pipelines, Git tracking, automated rollback, robust backup scripts with integrity checks, and microservice setups (PHP-FPM 8.2, Nginx, PostgreSQL, healthchecks and zero-downtime deployments).",
          "BCZM / UFRN (10/01/2023 - 07/20/2024) — IT Support Analyst: Technical user support, workstation assembly and maintenance, software deployment and network infrastructure maintenance at UFRN Central Library.",
        ],
        topicsHeading: "Tech Stack & Skills",
        topics: [
          "Languages: JavaScript, PHP, Python, TypeScript, Bash",
          "Frameworks & Libraries: Laravel, Vue.js, React, Node.js, Bootstrap",
          "DevOps & Databases: Docker, Docker Compose, Nginx, PostgreSQL, CI/CD, Git",
          "Soft Skills: Proactive mindset, effective communication, and problem solving",
        ],
        editionsHeading: "Education & Qualifications",
        amazonHeading: "Higher Education",
        amazonFormatsLabel: "Degree",
        amazonFormats: [
          "B.S. in Science and Technology — UFRN (Expected 2027 / 8th Term)",
        ],
        hardcoverHeading: "Federal University of Rio Grande do Norte",
        appleHeading: "Technical Education",
        factsLabels: {
          author: "Professional",
          byline: "Current Role",
          publisher: "Organization",
          publicationDate: "Period",
          availabilityDate: "Availability",
          language: "Language",
          pages: "Contact",
          isbn13: "Phone",
          asin: "Location",
          format: "Certification",
          seller: "Institution",
        },
        amazonHardcover: {
          byline: "Software Developer & DevOps",
          publisher: "SESAP/RN",
          publicationDate: "2025 - Present",
          language: "English / Portuguese",
          pages: "robertodantas1030@gmail.com",
          isbn13: "+55 (84) 99405-6581",
          asin: "Natal - RN, Brazil",
        },
        appleEbook: {
          author: "Roberto Vinicius Dantas Batista",
          publisher: "Colégio e Curso Motivar",
          availabilityDate: "Completed in 2020",
          language: "Portuguese",
          pages: "IT Hardware Maintenance & Support",
          format: "Technical Degree",
          seller: "Colégio e Curso Motivar",
        },
        retailerLinksLabel: "Professional Links & Contact",
        foundationHeading: "Professional Objective",
        foundationIntroduction:
          "Deliver the best technical solutions for complex problems, combining solid software engineering practices, modern containerized infrastructure, and high-performance user interfaces.",
        foundationLinksLabel: "Professional Links",
        foundationLinks: portfolioLinks,
        faqHeading: "Frequently Asked Questions",
        faqs: [
          {
            question: "What are Roberto's main specialties?",
            answer:
              "Full Stack development with PHP (Laravel), Vue.js, React, Docker container infrastructure, automated CI/CD and PostgreSQL/Nginx architecture.",
          },
          {
            question: "How to get in touch for projects or career opportunities?",
            answer:
              "Directly via email at robertodantas1030@gmail.com or via LinkedIn and GitHub.",
          },
        ],
      };

const content = (locale: Locale): BookContent =>
  locale === "pt"
    ? {
        locale,
        title: "Roberto Vinicius",
        subtitle: "Engenheiro de Software Full Stack & DevOps",
        description:
          "Desenvolvedor de Software e especialista em DevOps atuando com Laravel, Vue.js, React, Docker, Nginx e PostgreSQL. Focado em soluções escaláveis e arquiteturas resilientes.",
        cta: "Explorar Portfólio",
        path: "/pt/perfil/roberto-vinicius/",
        cover: "/media/template-cover-es.svg",
        coverAlt: "Portfólio de Roberto Vinicius",
        caseImage: "/media/template-cover-es.svg",
        language: "Português",
        availability: "Disponível para novos projetos",
        amazonUrl: "https://github.com/Roberto-Vinicius",
        appleBooksUrl: "https://www.linkedin.com/in/robertoviniciusd",
        backHome: "Voltar ao início",
        dossier: makeDossier(locale),
      }
    : {
        locale,
        title: "Roberto Vinicius",
        subtitle: "Full Stack Software Engineer & DevOps",
        description:
          "Software Developer and DevOps Specialist experienced in Laravel, Vue.js, React, Docker, Nginx, and PostgreSQL. Focused on scalable solutions and resilient architecture.",
        cta: "Explore Portfolio",
        path: "/en/profile/roberto-vinicius/",
        cover: "/media/template-cover-en.svg",
        coverAlt: "Roberto Vinicius Portfolio",
        caseImage: "/media/template-cover-en.svg",
        language: "English",
        availability: "Available for new projects",
        amazonUrl: "https://github.com/Roberto-Vinicius",
        appleBooksUrl: "https://www.linkedin.com/in/robertoviniciusd",
        backHome: "Back home",
        dossier: makeDossier(locale),
      };

export const exampleBook: Book = {
  id: "roberto-vinicius",
  collection: "Software Engineering & DevOps",
  number: "2026",
  content: { pt: content("pt"), en: content("en") },
};

export const books: Book[] = [exampleBook];
export const localeLabels = { pt: "PT", en: "EN" } as const satisfies Record<
  Locale,
  string
>;
