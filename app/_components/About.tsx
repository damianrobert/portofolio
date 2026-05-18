import SectionHeader from "./SectionHeader";

const details = [
  ["Location", "Romania"],
  ["Role", "System Engineer"],
  ["Focus", "Infrastructure & DevOps"],
  ["Status", "Open to opportunities"],
] as const;

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader tag="// about_me" title="About Me" />
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4 text-zinc-400 leading-relaxed text-base">
            <p>
              I&apos;m a System Engineer passionate about building and
              maintaining reliable, scalable infrastructure. I work at the
              intersection of hardware, software, and networking to keep systems
              running smoothly.
            </p>
            <p>
              With experience across Linux and Windows environments,
              virtualization platforms, and cloud services, I take a pragmatic
              approach to solving infrastructure challenges.
            </p>
            <p>
              When I&apos;m not managing systems, you&apos;ll find me expanding
              my homelab, studying for the next certification, or exploring new
              tools in the DevOps ecosystem.
            </p>
          </div>
          <div className="space-y-3">
            {details.map(([label, value]) => (
              <div
                key={label}
                className="flex items-center gap-3 font-mono text-sm border border-white/10 rounded-lg px-4 py-3 bg-white/5 backdrop-blur-sm"
              >
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent w-20 shrink-0">{label}:</span>
                <span className="text-zinc-300">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
