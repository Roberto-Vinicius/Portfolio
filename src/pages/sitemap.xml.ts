import type { APIRoute } from "astro";
import { books, type Locale } from "../data/books";

const locales: Locale[] = ["pt", "en"];

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site?.toString().replace(/\/+$/, "") ?? "https://example.com";
  const urls: string[] = [];

  for (const locale of locales) {
    urls.push(`${baseUrl}/${locale}/`);
    for (const book of books) {
      urls.push(`${baseUrl}${book.content[locale].path}`);
    }
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
};
