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
          ? "bg-[#080c10]/90 backdrop-blur-md border-b border-zinc-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto w-full px-6 h-full flex items-center justify-between">
        <span className="font-mono text-cyan-400 text-sm select-none">
          rd@portfolio:~$
        </span>
        <div className="hidden sm:flex items-center gap-6">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="font-mono text-sm text-zinc-400 hover:text-cyan-400 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
