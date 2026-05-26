"use client";

import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../_context/language";

const company = {
  name: "CANCOM Romania",
  url: "https://www.cancom.ro",
  start: "Aug 2023",
  end: null as string | null,
};

function duration(
  start: string,
  end: string | null,
  t: { yr: string; yrs: string; mo: string; mos: string }
): string {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();
  const months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());
  const yrs = Math.floor(months / 12);
  const mos = months % 12;
  const parts = [];
  if (yrs > 0) parts.push(`${yrs} ${yrs > 1 ? t.yrs : t.yr}`);
  if (mos > 0) parts.push(`${mos} ${mos > 1 ? t.mos : t.mo}`);
  return parts.join(" ");
}

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader tag={t.experience.tag} title={t.experience.title} />
        <div className="relative">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-emerald-400/40 via-blue-400/20 to-transparent" />
          <ul className="space-y-8">
            <li className="relative flex gap-6">
              <div className="relative flex-shrink-0 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-emerald-400 to-blue-400" />
                </div>
              </div>
              <div className="flex-1 pb-2">
                <div className="border border-white/10 rounded-xl px-5 py-4 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="text-white font-semibold text-base">
                      {t.experience.role}
                    </h3>
                    <span className="font-mono text-xs text-zinc-500">
                      {company.start} – {company.end ?? t.experience.present}{" "}
                      &middot;{" "}
                      {duration(company.start, company.end, {
                        yr: t.experience.yr,
                        yrs: t.experience.yrs,
                        mo: t.experience.mo,
                        mos: t.experience.mos,
                      })}
                    </span>
                  </div>
                  <Link
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors font-mono"
                  >
                    {company.name}
                  </Link>
                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                    {t.experience.description}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
