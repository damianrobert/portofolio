"use client";

import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../_context/language";

const companyLinks: Record<string, string> = {
  "CANCOM Romania": "https://www.cancom.ro",
};

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader tag={t.about.tag} title={t.about.title} />
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4 text-zinc-400 leading-relaxed text-base">
            <p>
              {t.about.p1Before}
              <Link
                href="https://www.cancom.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                CANCOM Romania
              </Link>
              {t.about.p1After}
            </p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>
          <div className="space-y-3">
            {t.about.details.map(([label, value]) => (
              <div
                key={label}
                className="flex items-center gap-3 font-mono text-sm border border-white/10 rounded-lg px-4 py-3 bg-white/5 backdrop-blur-sm"
              >
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent w-20 shrink-0">
                  {label}:
                </span>
                {companyLinks[value] ? (
                  <Link
                    href={companyLinks[value]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 hover:text-emerald-400 transition-colors"
                  >
                    {value}
                  </Link>
                ) : (
                  <span className="text-zinc-300">{value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
