"use client";

import SectionHeader from "./SectionHeader";
import { useLanguage } from "../_context/language";

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
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader tag={t.skills.tag} title={t.skills.title} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map(({ category, items }) => (
            <div
              key={category}
              className="border border-white/10 rounded-lg p-6 bg-white/5 backdrop-blur-sm hover:border-emerald-500/30 hover:bg-white/[0.08] transition-all"
            >
              <h3 className="font-mono text-xs mb-4 tracking-widest uppercase bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 rounded text-xs font-mono bg-white/5 text-zinc-300 border border-white/10"
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
