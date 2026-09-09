"use client";

import Link from "next/link";
import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";

export default function ContactPage() {
  const [isPending, setIsPending] = useState(false);
  const [formState, setFormState] = useState<{
    status: string;
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setFormState(null);

    const formData = new FormData(e.currentTarget);

    try {
      const result = await submitContactForm(null, formData);
      setFormState(result);
    } catch {
      setFormState({ status: "ERROR", message: "TRANSMISSION_FAILED" });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-black">
      {/* HEADER EDITORIAL */}
      <header className="border-b-4 border-black pb-8 mb-12">
        <div className="flex flex-wrap items-center gap-3 font-mono text-sm uppercase tracking-widest text-neutral-600 mb-4">
          <span className="font-black text-black">[ DIRECT CHANNEL // DISPATCH ]</span>
          <span>•</span>
          <span>SYSTEMS &amp; CONTRACTS</span>
          <span>•</span>
          <span>ZANVEXIS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[1.05] mb-6 text-black">
          Initiate Direct Technical Contact
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-800 font-medium max-w-4xl leading-relaxed">
          Direct communication for Solana smart contracts, execution bots, defensive security middleware, corporate systems, or international engineering sprints.
        </p>
      </header>

      {/* GRID DE 2 COLUNAS: METADADOS & FORMULÁRIO */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* COLUNA ESQUERDA: METADADOS & CANAIS DIRETOS */}
        <div className="lg:col-span-5 space-y-10">
          
          <div className="border-4 border-black p-6 bg-white space-y-6">
            <div>
              <span className="font-mono text-xs text-neutral-500 font-black uppercase tracking-wider block mb-1">
                PRIMARY EMAIL
              </span>
              <a
                href="mailto:vns.pontual77@gmail.com"
                className="font-mono text-base sm:text-lg text-black font-black hover:underline"
              >
                vns.pontual77@gmail.com
              </a>
            </div>

            <div className="border-t-2 border-neutral-200 pt-4">
              <span className="font-mono text-xs text-neutral-500 font-black uppercase tracking-wider block mb-1">
                RESPONSE SLA
              </span>
              <span className="font-mono text-base sm:text-lg text-black font-black">
                &lt; 24 BUSINESS HOURS
              </span>
            </div>

            <div className="border-t-2 border-neutral-200 pt-4">
              <span className="font-mono text-xs text-neutral-500 font-black uppercase tracking-wider block mb-1">
                OPERATIONAL BASE
              </span>
              <span className="font-mono text-sm text-neutral-800 font-bold block">
                SÃO PAULO / SP — BRAZIL (GLOBAL UTC-3)
              </span>
            </div>
          </div>

          {/* REDES & TELEGRAM */}
          <div className="space-y-4">
            <span className="font-mono text-xs font-black uppercase tracking-widest text-black block">
              INSTANT CHANNELS &amp; PROFILES
            </span>
            
            <div className="grid grid-cols-2 gap-4 font-mono text-xs font-black uppercase">
              <Link
                href="https://t.me/vinisilva_10"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-black p-3 bg-white hover:bg-black hover:text-white transition-colors flex items-center justify-between"
              >
                <span>Telegram</span>
                <span>[›]</span>
              </Link>

              <Link
                href="https://discord.com/users/vini0010"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-black p-3 bg-white hover:bg-black hover:text-white transition-colors flex items-center justify-between"
              >
                <span>Discord</span>
                <span>[›]</span>
              </Link>

              <Link
                href="https://www.linkedin.com/in/vinicius-pontual-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-black p-3 bg-white hover:bg-black hover:text-white transition-colors flex items-center justify-between"
              >
                <span>LinkedIn</span>
                <span>[›]</span>
              </Link>

              <Link
                href="https://github.com/Vinisilva0010"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-black p-3 bg-white hover:bg-black hover:text-white transition-colors flex items-center justify-between"
              >
                <span>GitHub</span>
                <span>[›]</span>
              </Link>
            </div>
          </div>

          <div className="border-l-4 border-black pl-4 py-2 font-mono text-xs text-neutral-600">
            All submitted dispatches trigger immediate webhook delivery to active mobile dev monitors.
          </div>
        </div>

        {/* COLUNA DIREITA: FORMULÁRIO BRUTALISTA */}
        <div className="lg:col-span-7 border-4 border-black bg-white p-6 sm:p-10">
          
          <div className="flex justify-between items-center border-b-2 border-black pb-4 mb-8">
            <span className="font-mono text-xs sm:text-sm text-black uppercase font-black tracking-wider">
              [ TRANSMISSION TERMINAL ]
            </span>
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase">
              <span
                className={`w-2.5 h-2.5 border border-black ${
                  isPending ? "bg-amber-400 animate-pulse" : "bg-emerald-500"
                }`}
              />
              <span>{isPending ? "TRANSMITTING..." : "RELAY ONLINE"}</span>
            </div>
          </div>

          {formState?.status === "SUCCESS" ? (
            <div className="border-2 border-black p-8 bg-neutral-100 text-center font-mono space-y-3">
              <div className="text-3xl font-black">[ ACKNOWLEDGED ]</div>
              <p className="text-sm font-bold text-neutral-800">
                Your transmission has been committed and relayed to Telegram. Review will proceed within our SLA window.
              </p>
              <button
                onClick={() => setFormState(null)}
                className="mt-4 border-2 border-black bg-white px-4 py-2 text-xs font-black uppercase hover:bg-black hover:text-white transition-colors cursor-pointer"
              >
                Send Another Dispatch
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 font-mono">
              
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase font-black text-black">
                  Name / Entity / Organization *
                </label>
                <input
                  type="text"
                  name="entityId"
                  placeholder="e.g. Alex Vance / Protocol Labs"
                  required
                  disabled={isPending}
                  className="w-full bg-neutral-100 border-2 border-black p-3 text-sm text-black placeholder:text-neutral-400 focus:bg-white focus:outline-none transition-colors disabled:opacity-50"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase font-black text-black">
                  Return Channel (Email, Telegram Handle or Phone) *
                </label>
                <input
                  type="text"
                  name="channel"
                  placeholder="e.g. alex@protocol.io or @alex_tg"
                  required
                  disabled={isPending}
                  className="w-full bg-neutral-100 border-2 border-black p-3 text-sm text-black placeholder:text-neutral-400 focus:bg-white focus:outline-none transition-colors disabled:opacity-50"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase font-black text-black">
                  Primary Scope / Engagement Area *
                </label>
                <select
                  name="operation"
                  required
                  disabled={isPending}
                  className="w-full bg-neutral-100 border-2 border-black p-3 text-sm text-black focus:bg-white focus:outline-none transition-colors appearance-none disabled:opacity-50 cursor-pointer"
                >
                  <option value="">[ SELECT INQUIRY CLASSIFICATION ]</option>
                  <option value="Solana Smart Contracts & dApps">
                    Solana Smart Contracts (Rust / Anchor / cNFTs)
                  </option>
                  <option value="Trading Bots & Arbitrage Systems">
                    High-Frequency Trading &amp; Flash Loan Engines
                  </option>
                  <option value="Security Middleware & AI Sandboxes">
                    Security Middleware &amp; Autonomous AI Sandboxes
                  </option>
                  <option value="B2B Systems & Automation Engineering">
                    B2B Enterprise Backends &amp; Process Automation
                  </option>
                  <option value="Technical Partnership or Code Licensing">
                    Code Licensing or Hackathon IP Inquiries
                  </option>
                  <option value="Freelance Sprint or International Contract">
                    International Contract / Remote Engineering Sprint
                  </option>
                  <option value="General Inquiry">General Technical Question</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase font-black text-black">
                  Specifications / Message Payload *
                </label>
                <textarea
                  name="payload"
                  placeholder="Provide technical scope, timeline, current codebase status or constraints..."
                  required
                  rows={5}
                  disabled={isPending}
                  className="w-full bg-neutral-100 border-2 border-black p-3 text-sm text-black placeholder:text-neutral-400 focus:bg-white focus:outline-none transition-colors resize-none disabled:opacity-50"
                />
              </div>

              {formState?.status === "ERROR" && (
                <div className="border-2 border-red-600 bg-red-50 p-3 text-xs text-red-700 font-bold uppercase">
                  [ ERROR: {formState.message}. TRANSMIT VIA DIRECT EMAIL INSTEAD. ]
                </div>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="border-2 border-black bg-black text-white px-6 py-4 text-xs font-black uppercase tracking-wider transition-all hover:bg-neutral-800 active:translate-y-0.5 disabled:bg-neutral-300 disabled:border-neutral-400 disabled:text-neutral-500 cursor-pointer"
              >
                {isPending ? "RELAYING TO TELEGRAM..." : "DISPATCH MESSAGE [→]"}
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
}