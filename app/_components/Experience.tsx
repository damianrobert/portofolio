import Link from "next/link";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    company: "CANCOM Romania",
    url: "https://www.cancom.ro",
    role: "Network Technician",
    start: "Aug 2023",
    end: null,
    description:
      "Working on network infrastructure, system maintenance, and IT support within a managed services environment.",
  },
] as const;

function duration(start: string, end: string | null): string {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();
  const months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());
  const yrs = Math.floor(months / 12);
  const mos = months % 12;
  const parts = [];
  if (yrs > 0) parts.push(`${yrs} yr${yrs > 1 ? "s" : ""}`);
  if (mos > 0) parts.push(`${mos} mo${mos > 1 ? "s" : ""}`);
  return parts.join(" ");
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader tag="// work_history" title="Experience" />
        <div className="relative">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-emerald-400/40 via-blue-400/20 to-transparent" />
          <ul className="space-y-8">
            {experiences.map((exp) => (
              <li key={exp.company + exp.role} className="relative flex gap-6">
                <div className="relative flex-shrink-0 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-emerald-400 to-blue-400" />
                  </div>
                </div>
                <div className="flex-1 pb-2">
                  <div className="border border-white/10 rounded-xl px-5 py-4 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                      <h3 className="text-white font-semibold text-base">
                        {exp.role}
                      </h3>
                      <span className="font-mono text-xs text-zinc-500">
                        {exp.start} – {exp.end ?? "Present"} &middot;{" "}
                        {duration(exp.start, exp.end)}
                      </span>
                    </div>
                    <Link
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors font-mono"
                    >
                      {exp.company}
                    </Link>
                    <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
