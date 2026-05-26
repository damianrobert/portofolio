"use client";

import SectionHeader from "./SectionHeader";
import ProjectCard, { type GithubRepo } from "./ProjectCard";
import { useLanguage } from "../_context/language";

export default function ProjectsGrid({ repos }: { repos: GithubRepo[] }) {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader tag={t.projects.tag} title={t.projects.title} />
        {repos.length === 0 ? (
          <p className="text-zinc-500 text-sm">{t.projects.empty}</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos.map((repo) => (
              <ProjectCard
                key={repo.slug}
                repo={repo}
                viewOnGithub={t.projects.viewOnGithub}
                loadingReadme={t.projects.loadingReadme}
                noReadme={t.projects.noReadme}
                noDescription={t.projects.noDescription}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
