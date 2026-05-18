"use client";

import { useState } from "react";
import Image from "next/image";

function ExternalLinkIcon() {
  return (
    <svg
      width="13"
      height="13"
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

function ChevronIcon({ open }: { open: boolean }) {
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
      className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

type Props = {
  name: string;
  issuer: string;
  href: string;
  logo: string;
  skills: string[];
};

export default function CertificationCard({ name, issuer, href, logo, skills }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm hover:border-emerald-500/30 transition-colors">
      <div className="flex items-center gap-4 px-5 py-4">
        <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/10 shrink-0 flex items-center justify-center p-2">
          <Image
            src={logo}
            alt={issuer}
            width={24}
            height={24}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white font-medium text-sm leading-snug">{name}</p>
          <p className="text-zinc-500 text-xs font-mono mt-0.5">{issuer}</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label="View credential"
            className="text-zinc-600 hover:text-emerald-400 transition-colors"
          >
            <ExternalLinkIcon />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Collapse skills" : "Show skills"}
            aria-expanded={open}
            className="text-zinc-600 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <ChevronIcon open={open} />
          </button>
        </div>
      </div>

      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-4 pt-1 flex flex-wrap gap-2 border-t border-white/10">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 rounded text-xs font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
