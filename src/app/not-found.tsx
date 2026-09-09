import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Routing Fault // Zanvexis Engineering Dossier",
  description: "The requested route does not resolve to an active system module.",
};

export default function NotFound() {
  return (
    <div className="w-full min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 text-black">
      <div className="w-full max-w-3xl border-4 border-black bg-white p-6 sm:p-12 shadow-[8px_8px_0px_#000000]">
        
        {/* TERMINAL HEADER */}
        <div className="flex flex-wrap items-center justify-between border-b-2 border-black pb-4 mb-8 font-mono text-xs uppercase">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-600 border border-black inline-block" />
            <span className="font-black tracking-widest text-black">[ EXCEPTION // ROUTE_NOT_FOUND ]</span>
          </div>
          <span className="text-neutral-500 font-bold">STATUS: 404 UNRESOLVED</span>
        </div>

        {/* ERROR HEADING */}
        <div className="space-y-4 mb-8">
          <h1 className="text-6xl sm:text-8xl font-black tracking-tighter leading-none text-black uppercase">
            404
          </h1>
          <p className="font-mono text-lg sm:text-xl font-black uppercase tracking-tight text-neutral-900">
            Target Address Does Not Resolve to an Active Module
          </p>
          <p className="text-neutral-700 text-base sm:text-lg leading-relaxed font-medium">
            The requested uniform resource identifier (URI) does not match any compiled route, smart contract dossier, or public infrastructure specification in this deployment.
          </p>
        </div>

        {/* DIAGNOSTIC BLOCK */}
        <div className="font-mono text-xs sm:text-sm bg-neutral-100 border-2 border-black p-4 space-y-2 mb-8">
          <div><strong className="text-black uppercase">DIAGNOSIS:</strong> Path parameter invalid or historical endpoint decommissioned.</div>
          <div><strong className="text-black uppercase">CORRECTIVE ACTION:</strong> Return to root registry or select an operational dossier below.</div>
        </div>

        {/* RECOVERY NAVIGATION ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-4 font-mono text-xs uppercase font-black">
          <Link
            href="/"
            className="border-2 border-black bg-black text-white px-6 py-4 text-center hover:bg-neutral-800 transition-colors shadow-[3px_3px_0px_#000000] active:translate-y-0.5"
          >
            Return to Root Registry [›]
          </Link>
          
          <Link
            href="/sobre"
            className="border-2 border-black bg-white text-black px-6 py-4 text-center hover:bg-neutral-100 transition-colors shadow-[3px_3px_0px_#000000] active:translate-y-0.5"
          >
            View Engineer Profile
          </Link>

          <Link
            href="/contato"
            className="border-2 border-black bg-white text-black px-6 py-4 text-center hover:bg-neutral-100 transition-colors shadow-[3px_3px_0px_#000000] active:translate-y-0.5"
          >
            Contact Terminal
          </Link>
        </div>

      </div>
    </div>
  );
}