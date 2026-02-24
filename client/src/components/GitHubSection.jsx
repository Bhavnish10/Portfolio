import React, { useEffect, useState } from 'react';

const GITHUB_USERNAME = 'Bhavnish10';

export default function GitHubSection() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    let active = true;
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`)
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) return;
        if (active) setRepos(data);
      })
      .catch(() => {
        if (active) setRepos([]);
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="border-b border-slate-800/80 bg-slate-950">
      <div className="section-container py-12 md:py-16">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              GitHub
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Explore more code, experiments, and analytics work.
            </p>
          </div>
          <a
            href="https://github.com/Bhavnish10"
            target="_blank"
            rel="noreferrer"
            className="text-[11px] font-semibold text-primary-light hover:text-primary transition"
          >
            View full profile →
          </a>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {repos.map((repo) => (
            <article key={repo.id} className="card-surface p-4">
              <h4 className="text-sm font-semibold text-slate-50 line-clamp-1">
                {repo.name}
              </h4>
              {repo.description && (
                <p className="mt-1 text-xs text-slate-300 line-clamp-2">{repo.description}</p>
              )}
              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                <span>{repo.language || 'Multiple'}</span>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-primary-light hover:text-primary transition"
                >
                  Repo →
                </a>
              </div>
            </article>
          ))}
          {repos.length === 0 && (
            <p className="text-xs text-slate-400">
              Repositories will appear here once GitHub data is available.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

