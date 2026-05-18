export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8 px-6 mt-auto">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-sm text-zinc-600">
        <span>© {new Date().getFullYear()} Rădulescu Roberto-Damian</span>
        <div className="flex gap-6">
          <a
            href="https://github.com/damianrobert"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/roberto-damian-radulescu-214432253/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
