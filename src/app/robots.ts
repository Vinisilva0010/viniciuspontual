import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://viniciuspontual.zanvexis.com";

  // Crawlers e Agentes de Treinamento/Busca das principais IAs
  const aiUserAgents = [
    "GPTBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    "Google-Extended",
    "PerplexityBot",
    "Applebot-Extended",
    "Meta-ExternalAgent",
    "FacebookBot",
    "cohere-ai",
    "Bytespider",
    "Diffbot",
  ];

  return {
    rules: [
      // Regra geral para todos os bots de busca tradicionais
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Liberação explícita para agentes e indexadores de IA
      ...aiUserAgents.map((agent) => ({
        userAgent: agent,
        allow: "/",
        disallow: ["/api/", "/_next/"],
      })),
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}