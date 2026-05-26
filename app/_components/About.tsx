import Link from "next/link";
import SectionHeader from "./SectionHeader";

const details = [
  ["Location", "Romania"],
  ["Role", "Network Technician"],
  ["Company", "CANCOM Romania"],
  ["Focus", "Linux, DevOps & Platform Engineering"],
  ["Status", "Open to opportunities"],
] as const;

const companyLinks: Record<string, string> = {
  "CANCOM Romania": "https://www.cancom.ro",
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader tag="// about_me" title="About Me" />
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4 text-zinc-400 leading-relaxed text-base">
            <p>
              I&apos;m a Network Technician at{" "}
              <Link
                href="https://www.cancom.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                CANCOM Romania
              </Link>
              , working at the intersection of networking, infrastructure, and
              systems to keep things running reliably.
            </p>
            <p>
              I&apos;m enthusiastic about Linux, DevOps, and platform
              engineering — drawn to the challenge of building scalable,
              automated systems and turning complex infrastructure into
              something clean and maintainable.
            </p>
            <p>
              When I&apos;m not on the job, you&apos;ll find me tinkering in my
              homelab, chasing the next certification, or exploring new tools in
              the DevOps and cloud-native ecosystem.
            </p>
          </div>
          <div className="space-y-3">
            {details.map(([label, value]) => (
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
