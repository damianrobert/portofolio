import SectionHeader from "./SectionHeader";
import ProjectCard, { type GithubRepo } from "./ProjectCard";
import { GITHUB_REPOS } from "../_data/repos";

function toSlug(entry: string): string {
  try {
    const url = new URL(entry);
    return url.pathname.replace(/^\//, "").replace(/\/$/, "");
  } catch {
    return entry;
  }
}

async function fetchRepo(entry: string): Promise<GithubRepo | null> {
  const slug = toSlug(entry);
  try {
    const res = await fetch(`https://api.github.com/repos/${slug}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      slug,
      name: data.name as string,
      description: (data.description as string | null) ?? null,
      topics: (data.topics as string[]) ?? [],
      html_url: data.html_url as string,
      default_branch: (data.default_branch as string) ?? "main",
    };
  } catch {
    return null;
  }
}

export default async function Projects() {
  const repos = (await Promise.all(GITHUB_REPOS.map(fetchRepo))).filter(
    (r): r is GithubRepo => r !== null
  );

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader tag="// projects" title="Projects" />
        {repos.length === 0 ? (
          <p className="text-zinc-500 text-sm">No projects to display yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos.map((repo) => (
              <ProjectCard key={repo.slug} repo={repo} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
