"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export type GithubRepo = {
  slug: string;
  name: string;
  description: string | null;
  topics: string[];
  html_url: string;
  default_branch: string;
};

export default function ProjectCard({ repo }: { repo: GithubRepo }) {
  const [open, setOpen] = useState(false);
  const [readme, setReadme] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  async function openModal() {
    setOpen(true);
    if (readme !== null || fetchError) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://raw.githubusercontent.com/${repo.slug}/${repo.default_branch}/README.md`
      );
      if (!res.ok) throw new Error();
      setReadme(await res.text());
    } catch {
      setFetchError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div
        onClick={openModal}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && openModal()}
        className="cursor-pointer border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur-sm hover:border-emerald-500/30 hover:bg-white/[0.08] transition-all flex flex-col"
      >
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-semibold text-white text-base leading-snug">
            {repo.name}
          </h3>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-zinc-600 hover:text-emerald-400 transition-colors ml-3 shrink-0 mt-0.5"
            aria-label={`View ${repo.name} on GitHub`}
          >
            <ExternalLinkIcon />
          </a>
        </div>
        <p className="text-zinc-500 text-sm leading-relaxed mb-4 flex-1">
          {repo.description ?? "No description provided."}
        </p>
        {repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {repo.topics.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-xs font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-[#0d1117] border border-white/10 rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
              <h2 className="text-white font-semibold text-lg">{repo.name}</h2>
              <div className="flex items-center gap-4">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  View on GitHub
                  <ExternalLinkIcon />
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="text-zinc-500 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <CloseIcon />
                </button>
              </div>
            </div>

            <div className="overflow-y-auto px-6 py-5">
              {loading && (
                <p className="text-zinc-500 text-sm">Loading README…</p>
              )}
              {fetchError && (
                <p className="text-zinc-500 text-sm">
                  No README found for this repository.
                </p>
              )}
              {readme && (
                <div className="readme-prose">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {readme}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

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

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
