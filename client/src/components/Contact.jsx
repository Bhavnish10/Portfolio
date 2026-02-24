import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="border-t border-slate-800/80 bg-slate-950">
      <div className="section-container py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr,1fr] items-start">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Contact
            </h3>
            <h2 className="mt-2 text-xl font-semibold text-slate-50">
              Let&apos;s talk about finance, analytics, and technology.
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Whether it&apos;s equity research, private equity deal evaluation, or building
              analytics workflows, I&apos;d be happy to connect.
            </p>

            <div className="mt-6 flex gap-3 text-xs text-slate-300">
              <a
                href="https://www.linkedin.com/in/bhavnishnanda/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1 hover:border-primary-light hover:text-primary-light transition"
              >
                <span className="h-2 w-2 rounded-full bg-sky-500" />
                LinkedIn
              </a>
              <a
                href="https://github.com/Bhavnish10"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1 hover:border-primary-light hover:text-primary-light transition"
              >
                <span className="h-2 w-2 rounded-full bg-slate-200" />
                GitHub
              </a>
            </div>
          </div>

          <div className="card-surface p-5 space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-slate-50 mb-3">
                Get in Touch
              </h4>
              <p className="text-xs text-slate-300 mb-4">
                Feel free to reach out directly via email.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="h-4 w-4 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-slate-400">Email</p>
                  <a 
                    href="mailto:bhavnishnanda9933@gmail.com"
                    className="text-xs text-primary-light hover:text-primary transition"
                  >
                    bhavnishnanda9933@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="h-4 w-4 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-slate-400">Location</p>
                  <p className="text-xs text-slate-300">Available for remote and WFH  opportunities</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="h-4 w-4 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-slate-400">Open to</p>
                  <p className="text-xs text-slate-300">Full-time opportunities & collaborations</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700">
              <a
                href="mailto:bhavnishnanda9933@gmail.com"
                className="inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-semibold text-slate-50 shadow-soft transition hover:bg-primary-light"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

