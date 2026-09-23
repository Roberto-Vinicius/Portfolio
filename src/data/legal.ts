import type { Locale } from "./books";

export type LegalDocument = {
  locale: Locale;
  slug: string;
  path: string;
  title: string;
  description: string;
  status: string;
  sections: { heading: string; paragraphs: string[]; items?: string[] }[];
};

const copy = {
  pt: {
    status: "Informações Profissionais",
    docs: [
      ["sobre", "Sobre Mim & Carreira"],
      ["privacidade", "Política de Privacidade e Dados"],
      ["termos", "Termos de Uso"],
    ],
  },
  en: {
    status: "Professional Information",
    docs: [
      ["about", "About Me & Career"],
      ["privacy", "Privacy & Data Policy"],
      ["terms", "Terms of Use"],
    ],
  },
} as const;

const paragraphs = {
  pt: [
    "Portfólio profissional de Roberto Vinicius Dantas Batista. Desenvolvedor Full Stack e DevOps com experiência em Laravel, Vue.js, React, Docker e arquitetura de sistemas.",
    "Graduando em Ciência e Tecnologia pela Universidade Federal do Rio Grande do Norte (UFRN) e atuante no desenvolvimento de sistemas na SESAP/RN.",
  ],
  en: [
    "Professional portfolio of Roberto Vinicius Dantas Batista. Full Stack Developer and DevOps Engineer experienced in Laravel, Vue.js, React, Docker, and system architecture.",
    "Undergraduate in Science and Technology at the Federal University of Rio Grande do Norte (UFRN) and Software Developer / DevOps at SESAP/RN.",
  ],
} satisfies Record<Locale, string[]>;

const documents: LegalDocument[] = [];

for (const locale of ["pt", "en"] as const) {
  for (const [slug, title] of copy[locale].docs) {
    documents.push({
      locale,
      slug,
      path: `/${locale}/legal/${slug}/`,
      title,
      description: `${title} — Roberto Vinicius`,
      status: copy[locale].status,
      sections: [
        {
          heading: locale === "pt" ? "Resumo" : "Overview",
          paragraphs: paragraphs[locale],
        },
        {
          heading: locale === "pt" ? "Contato" : "Contact",
          paragraphs: [
            locale === "pt"
              ? "Para oportunidades de projetos ou vagas, entre em contato via robertodantas1030@gmail.com ou LinkedIn."
              : "For project opportunities or recruitment, please contact robertodantas1030@gmail.com or LinkedIn.",
          ],
        },
      ],
    });
  }
}

export const legalDocuments = documents;
