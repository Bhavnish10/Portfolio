import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { fetchExperience } from '../api';

const EXPERIENCE_DETAILS = [
  'Developed interactive Power BI dashboards for financial data analysis',
  'Performed data cleaning, transformation, and visualization',
  'Applied DAX and analytics techniques to generate business insights',
  'Supported investment analysis using data-driven approaches'
];

export default function Experience() {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let active = true;
    fetchExperience()
      .then((res) => {
        if (active) setItems(res.data);
      })
      .catch(() => {
        if (active) setItems([]);
      });
    return () => {
      active = false;
    };
  }, []);

  const handleExperienceClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const experienceData = useMemo(() => 
    items.length ? items : [{ 
      _id: 'fallback', 
      role: 'Power BI Intern', 
      company: 'Cognifyz Technologies', 
      period: 'Internship', 
      responsibilities: [] 
    }], [items]
  );

  return (
    <section id="experience" className="border-b border-slate-800/80 bg-slate-950">
      <div className="section-container py-12 md:py-16">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Experience
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Applying analytics and visualization to real datasets in a business context.
            </p>
            <p className="mt-1 text-[11px] text-slate-500">Click a card to see detailed pointers →</p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {experienceData.map((exp, index) => (
            <div key={exp._id} className={`card-surface flex flex-col overflow-hidden rounded-2xl overflow-hidden animate-fadeInUp animate-stagger-${Math.min(index + 1, 5)}`}>
              <button
                type="button"
                onClick={handleExperienceClick}
                className="flex flex-col flex-1 w-full text-left transition-all-smooth hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-2xl cursor-pointer p-4"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-50 transition-colors-smooth hover:text-primary-light">{exp.role}</h4>
                    <p className="text-xs font-medium text-slate-300 transition-colors-smooth hover:text-primary-light">{exp.company}</p>
                  </div>
                  <p className="text-[11px] text-slate-400">{exp.period}</p>
                </div>
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                    {exp.responsibilities.map((r, idx) => (
                      <li key={idx} className="transition-colors-smooth hover:text-primary-light">• {r}</li>
                    ))}
                  </ul>
                )}
                <span className="mt-2 inline-block text-[10px] text-primary-light transition-all-smooth hover:scale-110">View short version →</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div
          className="skill-modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          onClick={closeModal}
          onKeyDown={(e) => e.key === 'Escape' && closeModal()}
          role="button"
          tabIndex={0}
          aria-label="Close"
        >
          <div
            className="skill-modal-content relative w-full max-w-md max-h-[85vh] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-labelledby="experience-modal-title"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-700 bg-slate-900/95 px-5 py-4 backdrop-blur">
              <h2 id="experience-modal-title" className="text-sm font-semibold text-slate-50">
                Experience (Short Version)
              </h2>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-full p-1.5 text-slate-400 hover:bg-slate-700 hover:text-slate-100 transition"
                aria-label="Close"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="px-5 py-4 space-y-2">
              {EXPERIENCE_DETAILS.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-light" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}

