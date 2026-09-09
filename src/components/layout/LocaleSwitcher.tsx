"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useTransition } from "react";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function onSelectChange(nextLocale: "pt" | "en") {
    if (nextLocale === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div className="inline-flex border-2 border-black font-black text-sm">
      <button
        type="button"
        disabled={isPending}
        onClick={() => onSelectChange("pt")}
        className={`px-4 py-1.5 transition-colors cursor-pointer disabled:opacity-50 ${
          locale === "pt"
            ? "bg-black text-[#fdf9eb]"
            : "bg-transparent text-black hover:bg-black/10"
        }`}
      >
        PT
      </button>
      <div className="w-0.5 bg-black" />
      <button
        type="button"
        disabled={isPending}
        onClick={() => onSelectChange("en")}
        className={`px-4 py-1.5 transition-colors cursor-pointer disabled:opacity-50 ${
          locale === "en"
            ? "bg-black text-[#fdf9eb]"
            : "bg-transparent text-black hover:bg-black/10"
        }`}
      >
        EN
      </button>
    </div>
  );
}