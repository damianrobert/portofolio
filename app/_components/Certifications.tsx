"use client";

import SectionHeader from "./SectionHeader";
import CertificationCard from "./CertificationCard";
import { useLanguage } from "../_context/language";

const certifications = [
  {
    name: "LFCA: Linux Foundation Certified IT Associate",
    issuer: "The Linux Foundation",
    logo: "/logos/linux-foundation.svg",
    href: "https://www.credly.com/badges/45e5cba7-4284-4264-90e5-b39d09fa0e1a/linked_in_profile",
    skills: [
      "Linux",
      "Linux System Administration",
      "Linux Network Administration",
      "SELinux",
      "Kubernetes",
      "Web Services API",
      "Git",
      "DevOps",
      "Scripting",
      "Cloud Computing",
      "Cloud Applications",
      "Automation",
    ],
  },
  {
    name: "LFS158: Introduction to Kubernetes",
    issuer: "The Linux Foundation",
    logo: "/logos/linux-foundation.svg",
    href: "https://www.credly.com/badges/86637b57-63b0-4410-b32b-1e5a25e9277c/linked_in_profile",
    skills: ["Kubernetes", "Containers", "DevOps", "Software Development Life Cycle (SDLC)"],
  },
  {
    name: "LFS162: Introduction to DevOps and Site Reliability Engineering",
    issuer: "The Linux Foundation",
    logo: "/logos/linux-foundation.svg",
    href: "https://www.credly.com/badges/89bef102-22fd-4d9b-a282-c9cc39306364/linked_in_profile",
    skills: [
      "Linux",
      "DevOps Foundations",
      "Site Reliability Engineering",
      "Software Development Life Cycle (SDLC)",
      "Cloud Applications",
      "NetDevOps",
      "Cross-platform Development",
      "Platform Engineering",
    ],
  },
  {
    name: "DevNet Associate 200-901",
    issuer: "Cisco",
    logo: "/logos/cisco.svg",
    href: "https://cp.certmetrics.com/cisco/en/public/verify/credential/1e03a1451bc84a8cb11ea34789af21ca",
    skills: [
      "Python",
      "Bash",
      "Shell Scripting",
      "Automation",
      "Web Services API",
      "Git",
      "DevOps",
      "NetDevOps",
      "DevOps Foundations",
      "Linux",
      "Linux Network Administration",
      "Containers",
      "Cloud Applications",
      "Software Development Life Cycle (SDLC)",
      "Cisco Unified Communications Manager (CUCM)",
    ],
  },
  {
    name: "Cisco Certified Network Associate 200-301 (CCNA)",
    issuer: "Cisco",
    logo: "/logos/cisco.svg",
    href: "https://cp.certmetrics.com/cisco/en/public/verify/credential/c085103aa49e4cf6ba28a138cb66fac9",
    skills: [
      "Network Design",
      "Network Switches",
      "Cisco Routers",
      "Network Security",
      "Linux Network Administration",
    ],
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
    logo: "/logos/cisco.svg",
    href: "https://www.credly.com/badges/1ea73f6a-45aa-476d-a4c3-17efc26672ee/linked_in_profile",
    skills: ["Network Design", "Network Security", "Cybersecurity", "Virtual Private Network (VPN)"],
  },
  {
    name: "Oracle Certified Associate, Oracle Solaris 11 System Administrator",
    issuer: "Oracle",
    logo: "/logos/oracle.svg",
    href: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=F73F0A99F71737D58599B122EAE25970F1D948A16E76CA54283D9F9880F01902",
    skills: ["Linux", "Bash", "Shell Scripting", "Storage Management"],
  },
  {
    name: "PCAP™ – Certified Associate Python Programmer",
    issuer: "Python Institute",
    logo: "/logos/python-institute.svg",
    href: "https://www.credly.com/badges/65724e55-04dd-4a4d-bdcf-045b9a512fc8/linked_in_profile",
    skills: ["Python", "Scripting"],
  },
];

export default function Certifications() {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader tag={t.certifications.tag} title={t.certifications.title} />
        <div className="space-y-3">
          {certifications.map((cert) => (
            <CertificationCard
              key={cert.name}
              {...cert}
              expandLabel={t.certifications.expandSkills}
              collapseLabel={t.certifications.collapseSkills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
