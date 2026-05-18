import SectionHeader from "./SectionHeader";

const skills = [
  {
    category: "Systems & Linux",
    items: [
      "Linux",
      "Linux System Administration",
      "Linux Network Administration",
      "SELinux",
      "Storage Management",
    ],
  },
  {
    category: "Networking",
    items: [
      "Network Design",
      "Network Switches",
      "Cisco Routers",
      "NetDevOps",
      "Cisco Unified Communications Manager (CUCM)",
    ],
  },
  {
    category: "Security",
    items: [
      "Network Security",
      "Cybersecurity",
      "Virtual Private Network (VPN)",
    ],
  },
  {
    category: "Cloud & Containers",
    items: ["Cloud Computing", "Cloud Applications", "Kubernetes", "Containers"],
  },
  {
    category: "DevOps & SRE",
    items: [
      "DevOps",
      "DevOps Foundations",
      "Site Reliability Engineering",
      "Automation",
      "Software Development Life Cycle (SDLC)",
      "Platform Engineering",
      "Cross-platform Development",
    ],
  },
  {
    category: "Scripting & Development",
    items: [
      "Python",
      "Bash",
      "Shell Scripting",
      "Scripting",
      "Git",
      "Web Services API",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader tag="// skills" title="Technical Skills" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map(({ category, items }) => (
            <div
              key={category}
              className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/20 hover:border-cyan-500/30 transition-colors"
            >
              <h3 className="font-mono text-cyan-400 text-xs mb-4 tracking-widest uppercase">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 rounded text-xs font-mono bg-zinc-800 text-zinc-300 border border-zinc-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
