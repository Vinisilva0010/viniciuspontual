"use client";

import { useState, useEffect } from "react";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

export default function Navbar() {
  const tNav = useTranslations("common.nav");  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleLanguage = () => {
    const nextLocale = locale === "pt" ? "en" : "pt";
    router.replace(pathname, { locale: nextLocale });
  };

  const servicesLinks = [
    { name: "Agentic AI & MCP Sandbox", href: "/servicos/agentic-ai" },
    { name: "Backend & Systems Security", href: "/servicos/backend-security" },
    { name: "Crypto & Solana Security", href: "/servicos/crypto-security" },
    { name: "DeFi Protocols & Yield", href: "/servicos/defi-protocol" },
    { name: "Enterprise Blockchain & RWA", href: "/servicos/enterprise-blockchain" },
    { name: "Smart Contracts & Anchor Audits", href: "/servicos/smart-contracts-audits" },
    { name: "HFT Trading & Arbitrage Bots", href: "/servicos/trading-bots" },
    { name: "Wallet & Treasury Defense", href: "/servicos/wallet-treasury-security" },
  ];

  const projectsLinks = [
    { name: "Autenticação RWA Autopeças", href: "/projetos/autenticacao-rwa-autopecas-solana" },
    { name: "Protocolo STRATA (FIDC)", href: "/projetos/protocolo-strata-tranches-solana" },
    { name: "IA Médica Federada", href: "/projetos/ia-medica-federada-solana" },
    { name: "Reputação Token-2022", href: "/projetos/reputacao-academica-token-2022" },
    { name: "Octopus Crowd Predições", href: "/projetos/octopus-crowd-previsoes-esportivas" },
    { name: "SmartFlow Smart Money", href: "/projetos/smartflow-radar-smart-money-solana" },
    { name: "Faturamento Kirapay Anchor", href: "/projetos/faturamento-kirapay-anchor-solana" },
    { name: "Identidade SSI & ZKP", href: "/projetos/camada-identidade-ssi-solana" },
    { name: "Solana Access Control SDK", href: "/projetos/solana-access-control-sdk" },
    { name: "Motor Copy Trading Rust", href: "/projetos/motor-copy-trading-rust-solana" },
    { name: "Sandbox Agentes IA (MCP)", href: "/projetos/sandbox-agentes-ia-rust-mcp" },
    { name: "Flash Loan Arbitragem", href: "/projetos/flash-loan-arbitragem-solana" },
    { name: "Plataforma Agendamento Go", href: "/projetos/plataforma-agendamento-financeiro-go" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-black border-b-4 border-white h-20 sm:h-24 flex items-center z-50">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-12 flex justify-between items-center">
          <Link href="/" className="group flex items-center">
            <span className="font-mono text-2xl sm:text-4xl uppercase font-black !text-white tracking-tighter">
              vinicius pontual
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              href="/"
              className={`font-mono text-sm lg:text-base font-black uppercase tracking-wider ${
                pathname === "/" ? "!text-white underline underline-offset-8 decoration-4" : "!text-neutral-300"
              }`}
            >
              HOME
            </Link>

            {/* Dropdown Services */}
            <div className="relative group py-6">
              <button className="flex items-center gap-2 font-mono text-sm lg:text-base font-black uppercase tracking-wider !text-white">
                SERVICES <span className="text-xs">▼</span>
              </button>
              <div className="absolute top-full left-0 w-80 bg-black border-4 border-white shadow-[6px_6px_0px_#ffffff] p-4 flex flex-col gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                {servicesLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-mono text-xs font-black !text-white hover:!text-black hover:bg-white p-2 border-b border-neutral-800 last:border-none uppercase"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Dropdown Projects com scroll limitado para 13 itens */}
            <div className="relative group py-6">
              <button className="flex items-center gap-2 font-mono text-sm lg:text-base font-black uppercase tracking-wider !text-white">
                PROJECTS <span className="text-xs">▼</span>
              </button>
              <div className="absolute top-full left-0 w-88 max-h-[70vh] overflow-y-auto bg-black border-4 border-white shadow-[6px_6px_0px_#ffffff] p-4 flex flex-col gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                {projectsLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-mono text-xs font-black !text-white hover:!text-black hover:bg-white p-2 border-b border-neutral-800 last:border-none uppercase"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/sobre" className="font-mono text-sm lg:text-base font-black uppercase tracking-wider !text-white">
              ABOUT
            </Link>

            {/* Seletor Duplo PT / EN Desktop */}
            <div className="flex items-center border-2 border-white font-mono text-xs font-black">
              <button
                onClick={() => router.replace(pathname, { locale: "pt" })}
                className={`px-2.5 py-1 uppercase transition-colors ${
                  locale === "pt"
                    ? "bg-white !text-black"
                    : "bg-black !text-white hover:bg-neutral-800"
                }`}
              >
                PT
              </button>
              <span className="!text-white font-black">|</span>
              <button
                onClick={() => router.replace(pathname, { locale: "en" })}
                className={`px-2.5 py-1 uppercase transition-colors ${
                  locale === "en"
                    ? "bg-white !text-black"
                    : "bg-black !text-white hover:bg-neutral-800"
                }`}
              >
                EN
              </button>
            </div>

            {/* CTA */}
            <Link
              href="/contato"
              className="border-4 border-white bg-white !text-black px-5 py-2.5 font-mono text-xs lg:text-sm font-black uppercase hover:bg-black hover:!text-white shadow-[4px_4px_0px_#ffffff]"
            >
              TALK TO ME [›]
            </Link>

            {/* Botao Menu Cortina */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="border-2 border-white p-2.5 bg-black hover:bg-white group"
              aria-label="Abrir Menu"
            >
              <div className="w-6 h-0.5 bg-white group-hover:bg-black mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white group-hover:bg-black mb-1.5"></div>
              <div className="w-4 h-0.5 bg-white group-hover:bg-black"></div>
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-3">
            {/* Seletor Duplo PT / EN Mobile */}
            <div className="flex items-center border-2 border-white font-mono text-xs font-black">
              <button
                onClick={() => router.replace(pathname, { locale: "pt" })}
                className={`px-2 py-0.5 uppercase transition-colors ${
                  locale === "pt"
                    ? "bg-white !text-black"
                    : "bg-black !text-white"
                }`}
              >
                PT
              </button>
              <span className="!text-white font-black">|</span>
              <button
                onClick={() => router.replace(pathname, { locale: "en" })}
                className={`px-2 py-0.5 uppercase transition-colors ${
                  locale === "en"
                    ? "bg-white !text-black"
                    : "bg-black !text-white"
                }`}
              >
                EN
              </button>
            </div>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="border-2 border-white p-2 bg-black"
              aria-label="Abrir Menu"
            >
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-4 h-0.5 bg-white"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Cortina Fullscreen */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-[150] overflow-y-auto p-6 md:p-12 flex flex-col justify-between">
          <div className="max-w-7xl mx-auto w-full flex justify-between items-center border-b-4 border-white pb-6 mb-8">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <span className="font-mono text-3xl md:text-5xl uppercase font-black !text-white tracking-tighter">
                ZANVEXIS
              </span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-12 h-12 border-2 border-white bg-black !text-white flex items-center justify-center hover:bg-white hover:!text-black"
              aria-label="Fechar Menu"
            >
              <span className="font-mono text-xl font-black">✕</span>
            </button>
          </div>

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 flex-grow py-4">
            <div className="flex flex-col gap-4">
              <h3 className="font-mono text-xl uppercase font-black !text-white border-b-2 border-white/40 pb-2">
                // SERVICES
              </h3>
              <ul className="flex flex-col gap-2.5 font-mono text-sm font-bold">
                {servicesLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} onClick={() => setIsMenuOpen(false)} className="!text-neutral-300 hover:!text-white block">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-mono text-xl uppercase font-black !text-white border-b-2 border-white/40 pb-2">
                // PROJECTS
              </h3>
              <ul className="flex flex-col gap-2.5 font-mono text-sm font-bold max-h-[50vh] overflow-y-auto pr-2">
                {projectsLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} onClick={() => setIsMenuOpen(false)} className="!text-neutral-300 hover:!text-white block">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-mono text-xl uppercase font-black !text-white border-b-2 border-white/40 pb-2">
                // DIRECTORY
              </h3>
              <ul className="flex flex-col gap-2.5 font-mono text-sm font-bold">
                <li><Link href="/sobre" onClick={() => setIsMenuOpen(false)} className="!text-neutral-300 hover:!text-white block">ABOUT</Link></li>
                <li><Link href="/contato" onClick={() => setIsMenuOpen(false)} className="!text-neutral-300 hover:!text-white block">CONTACT</Link></li>
                <li><Link href="/privacidade" onClick={() => setIsMenuOpen(false)} className="!text-neutral-300 hover:!text-white block">PRIVACY</Link></li>
                <li><Link href="/termos" onClick={() => setIsMenuOpen(false)} className="!text-neutral-300 hover:!text-white block">TERMS</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-6 font-mono">
              <div className="flex flex-col gap-1">
                <span className="font-black !text-white text-sm uppercase">[ DIRECT CONTACT ]</span>
                <a href="mailto:zanvexistech@gmail.com" className="!text-neutral-300 hover:!text-white text-sm font-bold underline">
                  zanvexistech@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a href="https://t.me/vinisilva_10" target="_blank" rel="noopener noreferrer" className="border-2 border-white px-3 py-1.5 bg-black !text-white font-black text-xs hover:bg-white hover:!text-black">
                  TELEGRAM
                </a>
                <a href="https://github.com/Vinisilva0010" target="_blank" rel="noopener noreferrer" className="border-2 border-white px-3 py-1.5 bg-black !text-white font-black text-xs hover:bg-white hover:!text-black">
                  GITHUB
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}