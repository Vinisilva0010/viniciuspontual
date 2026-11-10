export function AIKnowledgeSection() {
  const t = useTranslations("aiKnowledge");
  const locale = useLocale();

  const cards = [
    {
      code: t("cards.infra.code"),
      title: t("cards.infra.title"),
      description: t("cards.infra.description"),
      href: `/${locale}/projetos/agentes-ia`,
    },
    {
      code: t("cards.arch.code"),
      title: t("cards.arch.title"),
      description: t("cards.arch.description"),
      href: `/${locale}/projetos/agentes-ia/como-usar`,
    },
    {
      code: t("cards.agents.code"),
      title: t("cards.agents.title"),
      description: t("cards.agents.description"),
      href: `/${locale}/projetos/agentes-ia/agentes-uteis`,
    },
  ];

  return (
    <section className="w-full py-16 border-b-2 border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black mb-10 text-center uppercase">
          {t("sectionTitle")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {cards.map((card) => (
            <OptimizedLiquidCard
              key={card.code}
              code={card.code}
              title={card.title}
              description={card.description}
              buttonText={t("exploreButton")}
              href={card.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}







<div className="flex overflow-x-auto pb-6 pt-2 snap-x snap-mandatory -mx-6 px-6 gap-4 sm:mx-0 sm:px-0 sm:gap-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">
          {[
            { key: "strata_protocol", slug: "protocolo-strata-tranches-solana", image: "/projects/strata.png" },
            { key: "federated_medical_ai", slug: "ia-medica-federada-solana", image: "/projects/medical-ai.png" },
            { key: "academic_reputation", slug: "reputacao-academica-token-2022", image: "/projects/academic-reputation.png" },
            { key: "octopus_crowd", slug: "octopus-crowd-previsoes-esportivas", image: "/projects/octopus-crowd.png" },
            { key: "smartflow", slug: "smartflow-radar-smart-money-solana", image: "/projects/smartflow.png" },
            { key: "kirapay_invoicing", slug: "faturamento-kirapay-anchor-solana", image: "/projects/kirapay-invoicing.png" },
          ].map((project, index) => (
            <article
              key={project.key}
              className={`w-[82vw] shrink-0 snap-center border-2 border-black p-5 sm:border-0 sm:w-auto sm:p-6 sm:shrink ${
                index % 3 !== 0 ? "sm:border-l-4 sm:border-black" : ""
              } ${index >= 3 ? "sm:border-t-4 sm:border-black sm:pt-8" : ""}`}
            >
              <Link href={`/projetos/${project.slug}`} className="space-y-4 no-underline group h-full flex flex-col justify-between">
                <div className="space-y-3">
                  {/* Espaço quadrado/retangular sutil para foto */}
                  <div className="w-full aspect-video border-2 border-black bg-neutral-100 relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={tProjects(`personal_items.${project.key}.title` as any)}
                      fill
                      sizes="(max-width: 640px) 80vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  <span className="text-xs font-black uppercase tracking-wider text-black block opacity-80">
                    // {tProjects(`personal_items.${project.key}.category` as any)}
                  </span>

                  <h3 className="text-lg sm:text-2xl font-black text-black leading-tight group-hover:underline underline-offset-4 decoration-4">
                    {tProjects(`personal_items.${project.key}.title` as any)}
                  </h3>

                  <p className="text-sm sm:text-base font-semibold text-black leading-relaxed">
                    {tProjects(`personal_items.${project.key}.description` as any)}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-xs sm:text-base font-black text-black uppercase underline decoration-2">
                    {tProjects("view_case")}
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>