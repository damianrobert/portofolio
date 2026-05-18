"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 h-14 transition-all duration-300 ${
        scrolled
          ? "bg-white/5 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto w-full px-6 h-full flex items-center justify-between">
        <span className="font-mono text-sm select-none bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
          rd@portfolio:~$
        </span>
        <div className="hidden sm:flex items-center gap-6">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="font-mono text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
