import React from 'react';

export default function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative overflow-hidden border-b border-slate-800/80 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 min-h-screen">
      <div className="pointer-events-none absolute -left-10 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse-slow" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-primary-light/10 blur-3xl animate-pulse-slow" />

      <div className="section-container relative flex flex-col gap-12 py-20 md:flex-row md:items-center md:py-24 md:gap-16">
        <div className="flex-1 space-y-8 animate-fadeInLeft">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/90 px-4 py-2 text-[11px] font-medium text-slate-300 shadow-soft animate-slideDown">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-light animate-pulse-slow" />
            MBA Finance · Data Analytics · Investment Analysis
          </p>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-50 animate-fadeInUp leading-tight">
              Bhavnish <span className="text-primary-light animate-pulse-slow">Nanda</span>
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl font-medium text-slate-300 animate-fadeInUp animate-stagger-1">
              MBA Finance Candidate | Data Analytics & Technology Professional
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-slate-300 animate-fadeInUp animate-stagger-2">
              Applying financial knowledge and analytical skills to develop data-driven insights and contribute to strategic financial and business decision-making.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 animate-fadeInUp animate-stagger-3">
            <a
              href="/resume.pdf"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-slate-50 shadow-soft transition-all-smooth hover:scale-110 hover:shadow-lg"
              download
            >
              Download Resume
            </a>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition-all-smooth hover:border-primary-light hover:text-primary-light hover:scale-110"
            >
              Contact Me
            </button>
            <a
              href="https://www.linkedin.com/in/bhavnishnanda/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition-all-smooth hover:border-primary-light hover:text-primary-light hover:scale-110"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Bhavnish10"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition-all-smooth hover:border-primary-light hover:text-primary-light hover:scale-110"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="relative animate-fadeInRight">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-primary/40 to-primary-light/20 blur-2xl animate-pulse-slow" />
            <div className="card-surface flex h-64 w-64 sm:h-72 sm:w-72 items-center justify-center rounded-3xl overflow-hidden hover-lift">
              <img
                src="/profile.jpeg"
                alt="Bhavnish Nanda"
                className="h-48 w-48 sm:h-56 sm:w-56 rounded-2xl object-cover border-2 border-slate-700 transition-all-smooth hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

