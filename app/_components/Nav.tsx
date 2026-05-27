"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../_context/language";

export default function Nav() {
  const { lang, t, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.certifications, href: "#certifications" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["about", "skills", "projects", "certifications"];
    const observers: IntersectionObserver[] = [];

    // Track intersection ratios per section to pick the most visible one
    const ratios: Record<string, number> = {};

    const pickActive = () => {
      const top = Object.entries(ratios).sort((a, b) => b[1] - a[1])[0];
      setActiveSection(top?.[1] > 0 ? top[0] : "");
    };

    sectionIds.forEach((id) => {
      ratios[id] = 0;
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          ratios[id] = entry.intersectionRatio;
          pickActive();
        },
        { threshold: Array.from({ length: 21 }, (_, i) => i / 20) }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-zinc-950/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto w-full px-6 h-14 flex items-center justify-between">
        <span className="font-mono text-sm select-none bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
          rd@portfolio:~$
        </span>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          {links.map(({ label, href }) => {
            const id = href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                className={`relative font-mono text-sm transition-colors ${
                  isActive
                    ? "text-emerald-400"
                    : "text-zinc-400 hover:text-emerald-400"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full" />
                )}
              </a>
            );
          })}
          <button
            onClick={toggleLang}
            aria-label="Switch language"
            className="font-mono text-xs flex items-center gap-1 px-2.5 py-1 rounded border border-white/10 hover:border-emerald-500/30 transition-colors"
          >
            <span className={lang === "en" ? "text-emerald-400" : "text-zinc-500"}>EN</span>
            <span className="text-zinc-700">/</span>
            <span className={lang === "ro" ? "text-emerald-400" : "text-zinc-500"}>RO</span>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-px w-5 bg-zinc-300 transition-all duration-200 origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-zinc-300 transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-zinc-300 transition-all duration-200 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-white/10 px-6 pb-4 flex flex-col gap-4 pt-4">
          {links.map(({ label, href }) => {
            const id = href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`font-mono text-sm transition-colors ${
                  isActive ? "text-emerald-400" : "text-zinc-400"
                }`}
              >
                {label}
              </a>
            );
          })}
          <button
            onClick={toggleLang}
            aria-label="Switch language"
            className="self-start font-mono text-xs flex items-center gap-1 px-2.5 py-1 rounded border border-white/10"
          >
            <span className={lang === "en" ? "text-emerald-400" : "text-zinc-500"}>EN</span>
            <span className="text-zinc-700">/</span>
            <span className={lang === "ro" ? "text-emerald-400" : "text-zinc-500"}>RO</span>
          </button>
        </div>
      )}
    </nav>
  );
}
