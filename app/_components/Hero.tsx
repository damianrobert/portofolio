export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(rgba(139, 92, 246, 0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <p className="font-mono text-sm mb-6 tracking-widest bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
          $ whoami
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-4">
          Rădulescu
          <br />
          <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Roberto-Damian
          </span>
          <span className="text-emerald-400 animate-pulse">_</span>
        </h1>

        <p className="font-mono text-zinc-400 text-lg sm:text-xl mb-3">
          System Engineer
        </p>
        <p className="text-zinc-500 text-base mb-10 max-w-sm mx-auto">
          Building reliable infrastructure, one system at a time.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://github.com/damianrobert"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/10 hover:border-emerald-400 transition-all font-mono text-sm backdrop-blur-sm bg-white/5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/roberto-damian-radulescu-214432253/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/15 text-zinc-300 hover:border-blue-500/50 hover:text-blue-400 transition-all font-mono text-sm backdrop-blur-sm bg-white/5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-zinc-600 text-xs font-mono">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-emerald-500/50 to-transparent" />
      </div>
    </section>
  );
}
