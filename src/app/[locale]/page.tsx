import { AIKnowledgeSection } from "@/components/AIKnowledgeSection";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";


export default function HomePage() {
  const tAbout = useTranslations("about");
  const tSkills = useTranslations("skills");
  const tProjects = useTranslations("projects");

  return (
    <div className="space-y-16">
      {/* Perfil */}
      <section className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pb-10 border-b-4 border-black">
        <div className="w-36 h-36 sm:w-44 sm:h-44 border-4 border-black bg-neutral-200 shrink-0 relative overflow-hidden">
          <Image
            src="/profile.jpg"
            alt="Vinicius S. Pontual"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-4xl sm:text-6xl font-black text-black tracking-tight uppercase">
            Vinicius S. Pontual
          </h1>

          <p className="text-lg sm:text-xl font-extrabold text-black tracking-tight">
            Systems Engineer | Rust, Solana &amp; Go Backend Specialist
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://github.com/Vinisilva0010"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="w-12 h-12 border-2 border-black bg-(--color-base) hover:bg-black hover:text-[#fdf9eb] flex items-center justify-center transition-colors cursor-pointer text-black"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/vinicius-pontual-dev/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="w-12 h-12 border-2 border-black bg-(--color-base) hover:bg-black hover:text-[#fdf9eb] flex items-center justify-center transition-colors cursor-pointer text-black"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            <a
              href="mailto:vns.pontual77@gmail.com"
              title="Email"
              className="w-12 h-12 border-2 border-black bg-(--color-base) hover:bg-black hover:text-[#fdf9eb] flex items-center justify-center transition-colors cursor-pointer text-black"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-11.402l4.623 5.69zm-4.483-6.929h19.72l-9.86 8.328-9.86-8.328zm5.637 7.872l4.223 3.565 4.223-3.565 5.155 6.131h-18.756l5.155-6.131zm11.6-2.181l4.623-5.69v11.402l-4.623-5.712z"/>
              </svg>
            </a>

            <a
              href="https://www.zanvexis.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Zanvexis"
              className="w-12 h-12 border-2 border-black bg-(--color-base) hover:bg-black hover:text-[#fdf9eb] flex items-center justify-center font-black text-2xl transition-colors cursor-pointer text-black"
            >
              Z
            </a>
          </div>
        </div>
      </section>

      {/* Sobre mim */}
      <section className="space-y-6 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-black uppercase text-black tracking-tight">
          {tAbout("title")}
        </h2>

        <div className="space-y-4 font-semibold text-lg leading-relaxed text-black">
          <p>{tAbout("bio_1")}</p>
          <p>{tAbout("bio_2")}</p>
          <p>{tAbout("bio_3")}</p>
          <p>{tAbout("bio_4")}</p>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="space-y-8 pb-12 border-t-4 border-black pt-10 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-black uppercase text-black tracking-tight">
          {tSkills("title")}
        </h2>

        <div className="space-y-6 text-black">
          <div>
            <h3 className="text-xl font-black uppercase text-black mb-3">
              {tSkills("languages_title")}
            </h3>
            <ul className="space-y-3 font-semibold text-lg">
              <li>
                <span className="font-black underline decoration-2">Rust:</span> {tSkills("rust_desc")}
              </li>
              <li>
                <span className="font-black underline decoration-2">Go (Golang):</span> {tSkills("go_desc")}
              </li>
              <li>
                <span className="font-black underline decoration-2">Python:</span> {tSkills("python_desc")}
              </li>
              <li>
                <span className="font-black underline decoration-2">TypeScript:</span> {tSkills("typescript_desc")}
              </li>
              <li>
                <span className="font-black underline decoration-2">PostgreSQL &amp; SQL:</span> {tSkills("db_desc")}
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t-2 border-black space-y-4">
            <div>
              <span className="text-xl font-black uppercase block mb-1">
                {tSkills("blockchain_title")}:
              </span>
              <p className="font-bold text-lg">
                Solana, Anchor Framework, Smart Contracts, DeFi Protocols, Jito MEV, Decentralized Identity (SSI/DIDs).
              </p>
            </div>

            <div>
              <span className="text-xl font-black uppercase block mb-1">
                {tSkills("backend_title")}:
              </span>
              <p className="font-bold text-lg">
                Async Programming (Tokio, Asyncio), PostgreSQL, SQLite, IPC, High-Performance Networking, REST/WebSockets.
              </p>
            </div>

            <div>
              <span className="text-xl font-black uppercase block mb-1">
                {tSkills("security_title")}:
              </span>
              <p className="font-bold text-lg">
                Test-Driven Development (TDD), Smart Contract Auditing, Cryptographic Verification, Secure Application Design, Runtime Defense.
              </p>
            </div>
          </div>
        </div>
      </section>



 <AIKnowledgeSection />



{/* Projetos Proprietários: Projeto Atual no Topo + Grid 3x3 */}
      <section className="space-y-10 pb-20 border-t-4 border-black pt-10 w-full">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-black tracking-tight">
            {tProjects("personal_title")}
          </h2>
          <p className="font-bold text-base sm:text-lg text-black">
            {tProjects("personal_subtitle")}
          </p>
        </div>

        {/* PROJETO ATUAL - EM DESTAQUE TOTAL FORA DO GRID */}
        <article className="border-4 border-black p-5 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-black border-2 border-black px-2.5 py-0.5">
              {tProjects("current_work_label")}
            </span>
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-black opacity-80">
              // {tProjects("personal_items.rwa_autoparts.category")}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Imagem em cima no mobile (order-first) e na direita no desktop (lg:order-last) */}
            <div className="w-full aspect-video border-4 border-black bg-neutral-100 relative overflow-hidden order-first lg:order-last">
              <Image
                src="/projects/rwa-autoparts.png"
                alt={tProjects("personal_items.rwa_autoparts.title")}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl sm:text-4xl font-black text-black leading-tight">
                {tProjects("personal_items.rwa_autoparts.title")}
              </h3>

              <p className="text-base sm:text-lg font-semibold text-black leading-relaxed">
                {tProjects("personal_items.rwa_autoparts.description")}
              </p>

              <div>
                <Link
                  href="/projetos/autenticacao-rwa-autopecas-solana"
                  className="inline-block text-base font-black text-black uppercase underline decoration-2 hover:opacity-80"
                >
                  {tProjects("view_case")}
                  
                </Link>

                <Link
                  href="/projetos/autenticacao-rwa-autopecas-demo"
                  className="inline-block text-base font-black text-black uppercase underline decoration-2 hover:opacity-80"
                >
                  {tProjects("view_demo")}
                  
                </Link>
                
              </div>
            </div>
          </div>
        </article>

        {/* DEMAIS 6 PROJETOS EM GRID / CARROSSEL NO MOBILE */}
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




      {/* Projetos Zanvexis / Produção */}
      <section className="space-y-8 pb-16 border-t-4 border-black pt-10 w-full">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-black tracking-tight">
            {tProjects("title")}
          </h2>
          <p className="font-bold text-base sm:text-lg text-black">
            {tProjects("subtitle")}
          </p>
        </div>

        <div className="flex overflow-x-auto pb-6 pt-2 snap-x snap-mandatory -mx-6 px-6 gap-4 sm:mx-0 sm:px-0 sm:gap-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">
          {[
            { key: "ssi_identity", slug: "camada-identidade-ssi-solana" },
            { key: "solana_auth_sdk", slug: "solana-access-control-sdk" },
            { key: "copy_trading_engine", slug: "motor-copy-trading-rust-solana" },
            { key: "ai_agent_sandbox", slug: "sandbox-agentes-ia-rust-mcp" },
            { key: "flash_loan_arbitrage", slug: "flash-loan-arbitragem-solana" },
            { key: "enterprise_scheduling", slug: "plataforma-agendamento-financeiro-go" },
          ].map((project, index) => (
            <article
              key={project.key}
              className={`w-[82vw] shrink-0 snap-center border-2 border-black p-5 sm:border-0 sm:w-auto sm:p-6 sm:shrink ${
                index % 3 !== 0 ? "sm:border-l-4 sm:border-black" : ""
              } ${index >= 3 ? "sm:border-t-4 sm:border-black sm:pt-8" : ""}`}
            >
              <Link href={`/projetos/${project.slug}`} className="space-y-4 no-underline group h-full flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-black uppercase tracking-wider text-black block opacity-80">
                    // {tProjects(`items.${project.key}.category` as any)}
                  </span>

                  <h3 className="text-lg sm:text-2xl font-black text-black leading-tight group-hover:underline underline-offset-4 decoration-4">
                    {tProjects(`items.${project.key}.title` as any)}
                  </h3>

                  <p className="text-sm sm:text-base font-semibold text-black leading-relaxed">
                    {tProjects(`items.${project.key}.description` as any)}
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

      {/* Seção Esteiras de Interfaces / UI Marquee */}
      <section className="space-y-10 pb-20 border-t-4 border-black pt-10 w-full overflow-hidden">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-black tracking-tight">
            Interfaces &amp; Design Systems
          </h2>
          <p className="font-bold text-base sm:text-lg text-black">
            Interfaces de dApps, plataformas Web3 e aplicações mobile focadas em alta fidelidade.
          </p>
        </div>

        <div className="space-y-8">
          {[
            {
              id: "app-1",
              title: "Interface // web site zanvexis",
              direction: "left",
              images: [
                "/projects/ui-1-1.png",
                "/projects/ui-1-2.png",
                "/projects/ui-1-3.png",
                "/projects/ui-1-4.png",
              ],
            },
            {
              id: "app-2",
              title: "Interface // Mobile App & Carteira Web3",
              direction: "right",
              images: [
                "/projects/ui-2-1.png",
                "/projects/ui-2-2.png",
                "/projects/ui-2-3.png",
                "/projects/ui-2-4.png",
              ],
            },
            {
              id: "app-3",
              title: "Interface // Plataforma sistema",
              direction: "left",
              images: [
                "/projects/ui-3-1.png",
                "/projects/ui-3-2.png",
                "/projects/ui-3-3.png",
                "/projects/ui-3-4.png",
              ],
            },
            {
              id: "app-4",
              title: "web site finance ",
              direction: "right",
              images: [
                "/projects/ui-4-1.png",
                "/projects/ui-4-2.png",
                "/projects/ui-4-3.png",
                "/projects/ui-4-4.png",
              ],
            },
          ].map((row) => (
            <div key={row.id} className="space-y-3">
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-black block">
                {row.title}
              </span>

              {/* Trilho da esteira com overflow cortado */}
              <div className="w-full overflow-hidden border-y-2 border-black py-3 bg-neutral-100/50">
                <div
                  className={
                    row.direction === "left"
                      ? "animate-marquee-left gap-4"
                      : "animate-marquee-right gap-4"
                  }
                >
                  {/* Renderiza o conjunto duas vezes para o loop ser 100% contínuo */}
                  {[...row.images, ...row.images].map((src, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="w-72 sm:w-96 aspect-video border-2 border-black bg-neutral-200 shrink-0 relative overflow-hidden"
                    >
                      <Image
                        src={src}
                        alt={`Screenshot ${imgIndex + 1}`}
                        fill
                        sizes="(max-width: 640px) 288px, 384px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}