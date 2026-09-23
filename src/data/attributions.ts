import type { Locale } from "./books";

export interface AttributionItem {
  name: string;
  source: string;
  author: string;
  license: string;
}

export const attributionsData: Record<Locale, AttributionItem[]> = {
  pt: [
    {
      name: "Tecnologia do Template",
      source: "Astro Framework & Three.js",
      author: "Comunidade Astro & Three.js",
      license: "MIT",
    },
  ],
  en: [
    {
      name: "Template Technology",
      source: "Astro Framework & Three.js",
      author: "Astro & Three.js Community",
      license: "MIT",
    },
  ],
};
