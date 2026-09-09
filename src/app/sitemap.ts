import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zanvexis.com";
  const lastModified = new Date("2026-09-09T00:00:00.000Z");

  const locales = ["en", "pt"];

  // Rotas institucionais de alto nível
  const staticRoutes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/sobre", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/contato", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/faq", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/privacidade", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  // Slugs exatos dos 13 projetos desenvolvidos
  const projectSlugs = [
    "sinapse-protocolo-ia-medica-solana",
    "campus-points-reputacao-academica",
    "octopus-crowd-previsoes-esportivas",
    "smartflow-radar-smart-money-solana",
    "faturamento-kirapay-anchor-solana",
    "autenticacao-rwa-autopecas-solana",
    "camada-identidade-ssi-solana",
    "solana-access-control-sdk",
    "motor-copy-trading-rust-solana",
    "sandbox-agentes-ia-rust-mcp",
    "flash-loan-arbitragem-solana",
    "plataforma-agendamento-financeiro-go",
    "protocolo-strata-tranches-solana",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Gera entradas das páginas estáticas para cada idioma com alternates hreflang
  for (const route of staticRoutes) {
    for (const locale of locales) {
      const url = `${baseUrl}/${locale}${route.path}`;
      sitemapEntries.push({
        url,
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route.path}`,
            pt: `${baseUrl}/pt${route.path}`,
            "x-default": `${baseUrl}/en${route.path}`,
          },
        },
      });
    }
  }

  // Gera entradas para cada projeto de engenharia com prioridade técnica elevada
  for (const slug of projectSlugs) {
    for (const locale of locales) {
      const url = `${baseUrl}/${locale}/projetos/${slug}`;
      sitemapEntries.push({
        url,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.85,
        alternates: {
          languages: {
            en: `${baseUrl}/en/projetos/${slug}`,
            pt: `${baseUrl}/pt/projetos/${slug}`,
            "x-default": `${baseUrl}/en/projetos/${slug}`,
          },
        },
      });
    }
  }

  return sitemapEntries;
}