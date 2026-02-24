import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { fetchSkills } from '../api';

const SKILL_DETAILS = {
  Technical: [
    'Data Analytics and Data Interpretation',
    'Data Visualization and Dashboard Development',
    'Machine Learning and Predictive Modeling',
    'Exploratory Data Analysis (EDA)',
    'Statistical Analysis',
    'Business Intelligence and Reporting',
    'Correlation and Trend Analysis',
    'Data Cleaning and Data Transformation'
  ],
  Finance: [
    'Financial Statement Analysis',
    'Balance Sheet Analysis',
    'Profit & Loss Analysis',
    'Cash Flow Analysis',
    'Corporate Finance Fundamentals'
  ],
  Language: [
    'Python',
    'SQL',
    'JavaScript',
    'HTML5',
    'CSS3',
    'React.js',
    'Node.js',
    'Express.js'
  ],
  Tool: [
    'Power BI',
    'Tableau',
    'SPSS',
    'Microsoft Excel (Advanced)',
    'Git',
    'GitHub',
    'MongoDB',
    'VS Code',
    'Jupyter Notebook'
  ]
};

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [openModal, setOpenModal] = useState(null);

  useEffect(() => {
    let active = true;
    fetchSkills()
      .then((res) => {
        if (active) setSkills(res.data);
      })
      .catch(() => {
        if (active) setSkills([]);
      });
    return () => {
      active = false;
    };
  }, []);

  const openModalHandler = useCallback((category) => {
    setOpenModal(category);
  }, []);

  const closeModal = useCallback(() => {
    setOpenModal(null);
  }, []);

  const byCategory = useMemo(() => {
    const grouped = { Technical: [], Finance: [], Language: [], Tool: [] };
    for (const s of skills) {
      if (grouped[s.category]) grouped[s.category].push(s);
    }
    return grouped;
  }, [skills]);

  const renderChips = (list) =>
    list.map((s) => (
      <span
        key={s._id}
        className="chip border-slate-700/80 bg-slate-900/80 text-[11px] text-slate-200"
      >
        {s.name}
      </span>
    ));

  const categoryLabels = {
    Technical: 'Technical Skills',
    Finance: 'Finance Skills',
    Language: 'Languages & Frameworks',
    Tool: 'Tools'
  };

  return (
    <section id="skills" className="border-b border-slate-800/80 bg-slate-950">
      <div className="section-container py-12 md:py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Skills
            </h3>
            <h2 className="mt-2 text-xl font-semibold text-slate-50">
              A toolkit built for finance, analytics, and technology.
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              From Power BI dashboards to machine learning models, I bridge business understanding
              with technical execution to deliver actionable insights.
            </p>
            <p className="mt-2 text-[11px] text-slate-500">
              Click a category to see detailed pointers →
            </p>
          </div>

          <div className="grid flex-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {(['Technical', 'Finance', 'Language', 'Tool']).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setOpenModal(key)}
                className="card-surface p-4 text-left transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-2xl"
              >
                <h4 className="text-xs font-semibold text-slate-300">{categoryLabels[key]}</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {renderChips(byCategory[key] || [])}
                </div>
                <span className="mt-2 inline-block text-[10px] text-primary-light">View details →</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Animated modal with pointers */}
      {openModal && (
        <div
          className="skill-modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setOpenModal(null)}
          onKeyDown={(e) => e.key === 'Escape' && setOpenModal(null)}
          role="button"
          tabIndex={0}
          aria-label="Close"
        >
          <div
            className="skill-modal-content relative w-full max-w-md max-h-[85vh] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-labelledby="skill-modal-title"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-700 bg-slate-900/95 px-5 py-4 backdrop-blur">
              <h2 id="skill-modal-title" className="text-sm font-semibold text-slate-50">
                {categoryLabels[openModal]}
              </h2>
              <button
                type="button"
                onClick={() => setOpenModal(null)}
                className="rounded-full p-1.5 text-slate-400 hover:bg-slate-700 hover:text-slate-100 transition"
                aria-label="Close"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="px-5 py-4 space-y-2">
              {(SKILL_DETAILS[openModal] || []).map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-slate-300"
                >
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

