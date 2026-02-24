import React from 'react';

export default function LinkedInSection() {
  return (
    <section className="border-b border-slate-800/80 bg-slate-950">
      <div className="section-container py-10 md:py-12 flex flex-col items-center text-center gap-3">
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          LinkedIn
        </h3>
        <p className="text-sm text-slate-300 max-w-md">
          For detailed experience, activities, and professional updates, connect with me on
          LinkedIn.
        </p>
        <a
          href="https://www.linkedin.com/in/bhavnishnanda/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-semibold text-slate-50 shadow-soft transition hover:bg-primary-light"
        >
          Visit LinkedIn Profile
        </a>
      </div>
    </section>
  );
}

