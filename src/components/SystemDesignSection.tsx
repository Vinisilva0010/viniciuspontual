import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

// Ordem e rotas das páginas de arquitetura. As rotas usam os nomes de pasta reais em disco.
export const systemDesignEntries = [
  { key: "parity", href: "/projetos/parity/arquitetura" },
  { key: "agent_orchestration", href: "/projetos/orquestracao-agentes/arquitetura" },
  { key: "veymark", href: "/projetos/veymark/arquitetura" },
  { key: "trend_pullback", href: "/projetos/trend-pullback/arquitetura" },
  { key: "review_harness", href: "/projetos/review-harness/arquitetura" },
] as const;

export function SystemDesignSection() {
  const t = useTranslations("systemDesign");

  return (
    <section className="space-y-8 pb-16 border-t-4 border-black pt-10 w-full">
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-black uppercase text-black tracking-tight">
          {t("title")}
        </h2>
        <p className="font-bold text-base sm:text-lg text-black max-w-4xl">
          {t("intro")}
        </p>
      </div>

      <div className="border-b-4 border-black">
        {systemDesignEntries.map((entry) => (
          <div
            key={entry.key}
            className="grid grid-cols-1 sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)_auto] gap-2 sm:gap-8 items-baseline border-t-4 border-black py-5"
          >
            <h3 className="text-lg sm:text-2xl font-black text-black leading-tight">
              {t(`items.${entry.key}.name`)}
            </h3>

            <p className="text-base sm:text-lg font-semibold text-black leading-relaxed">
              {t(`items.${entry.key}.description`)}
            </p>

            <Link
              href={entry.href}
              className="inline-block text-base font-black text-black uppercase tracking-wider underline decoration-2 underline-offset-4 hover:opacity-80 whitespace-nowrap"
            >
              {t("cta")} →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
