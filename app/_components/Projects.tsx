import SectionHeader from "./SectionHeader";

const projects = [
  {
    name: "Home Lab Infrastructure",
    description:
      "Personal homelab running Proxmox VE with multiple VMs and LXC containers. Includes self-hosted services, monitoring stack, and automated backups.",
    tags: ["Proxmox", "Docker", "Grafana", "Ansible"],
    href: "https://github.com/damianrobert",
  },
  {
    name: "Network Automation",
    description:
      "Collection of scripts for automating network device configuration, monitoring, and reporting across enterprise environments.",
    tags: ["Python", "Netmiko", "SNMP", "Bash"],
    href: "https://github.com/damianrobert",
  },
  {
    name: "System Monitoring Stack",
    description:
      "Full-stack observability setup with Prometheus metrics collection, Grafana dashboards, and alerting for infrastructure health.",
    tags: ["Prometheus", "Grafana", "Docker Compose", "AlertManager"],
    href: "https://github.com/damianrobert",
  },
];

function ExternalLinkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader tag="// projects" title="Projects" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map(({ name, description, tags, href }) => (
            <div
              key={name}
              className="border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur-sm hover:border-emerald-500/30 hover:bg-white/[0.08] transition-all flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-white text-base leading-snug">
                  {name}
                </h3>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-emerald-400 transition-colors ml-3 shrink-0 mt-0.5"
                  aria-label={`View ${name}`}
                >
                  <ExternalLinkIcon />
                </a>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4 flex-1">
                {description}
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                  >
                    {tag}
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
