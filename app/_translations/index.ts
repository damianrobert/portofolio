export type Lang = "en" | "ro";

export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      certifications: "Certifications",
    },
    hero: {
      role: "Network Technician",
      tagline: "Building reliable infrastructure, one system at a time.",
      scroll: "scroll",
    },
    about: {
      tag: "// about_me",
      title: "About Me",
      p1Before: "I'm a Network Technician at ",
      p1After:
        ", working at the intersection of networking, infrastructure, and systems to keep things running reliably.",
      p2: "I'm enthusiastic about Linux, DevOps, and platform engineering — drawn to the challenge of building scalable, automated systems and turning complex infrastructure into something clean and maintainable.",
      p3: "When I'm not on the job, you'll find me tinkering in my homelab, chasing the next certification, or exploring new tools in the DevOps and cloud-native ecosystem.",
      details: [
        ["Location", "Romania"],
        ["Position", "Network Technician"],
        ["Company", "CANCOM Romania"],
        ["Focus", "Linux, DevOps & Platform Engineering"],
        ["Status", "Open to opportunities"],
      ] as [string, string][],
    },
    experience: {
      tag: "// work_history",
      title: "Experience",
      present: "Present",
      role: "Network Technician",
      description:
        "Working on network infrastructure, system maintenance, and IT support within a managed services environment.",
      yr: "yr",
      yrs: "yrs",
      mo: "mo",
      mos: "mos",
    },
    skills: {
      tag: "// skills",
      title: "Technical Skills",
    },
    projects: {
      tag: "// projects",
      title: "Projects",
      empty: "No projects to display yet.",
      viewOnGithub: "View on GitHub",
      loadingReadme: "Loading README…",
      noReadme: "No README found for this repository.",
      noDescription: "No description provided.",
    },
    certifications: {
      tag: "// certifications",
      title: "Certifications",
      expandSkills: "Show skills",
      collapseSkills: "Collapse skills",
    },
  },
  ro: {
    nav: {
      about: "Despre",
      skills: "Competențe",
      projects: "Proiecte",
      certifications: "Certificări",
    },
    hero: {
      role: "Tehnician Rețele",
      tagline: "Construind infrastructură fiabilă, sistem cu sistem.",
      scroll: "derulează",
    },
    about: {
      tag: "// despre_mine",
      title: "Despre Mine",
      p1Before: "Sunt Tehnician Rețele la ",
      p1After:
        ", lucrând la intersecția rețelisticii, infrastructurii și sistemelor pentru a menține funcționarea fiabilă.",
      p2: "Sunt pasionat de Linux, DevOps și inginerie de platformă — atras de provocarea construirii de sisteme scalabile, automatizate și de transformarea infrastructurii complexe în ceva curat și ușor de gestionat.",
      p3: "Când nu sunt la job, mă găsiți tinkerând în homelab-ul meu, urmărind următoarea certificare sau explorând noi instrumente din ecosistemul DevOps și cloud-native.",
      details: [
        ["Locație", "România"],
        ["Poziție", "Tehnician Rețele"],
        ["Companie", "CANCOM Romania"],
        ["Focus", "Linux, DevOps & Inginerie de Platformă"],
        ["Stare", "Deschis oportunităților"],
      ] as [string, string][],
    },
    experience: {
      tag: "// istoric_muncă",
      title: "Experiență",
      present: "Prezent",
      role: "Tehnician Rețele",
      description:
        "Lucrez pe infrastructură de rețea, mentenanță de sisteme și suport IT într-un mediu de servicii gestionate.",
      yr: "an",
      yrs: "ani",
      mo: "lună",
      mos: "luni",
    },
    skills: {
      tag: "// competențe",
      title: "Competențe Tehnice",
    },
    projects: {
      tag: "// proiecte",
      title: "Proiecte",
      empty: "Nu există proiecte de afișat.",
      viewOnGithub: "Vezi pe GitHub",
      loadingReadme: "Se încarcă README…",
      noReadme: "Nu s-a găsit README pentru acest repository.",
      noDescription: "Fără descriere.",
    },
    certifications: {
      tag: "// certificări",
      title: "Certificări",
      expandSkills: "Arată competențele",
      collapseSkills: "Ascunde competențele",
    },
  },
};
