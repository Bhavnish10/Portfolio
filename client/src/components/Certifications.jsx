import React, { useState } from 'react';

const certificationsData = [
  {
    id: 1,
    year: 2025,
    title: "Bloomberg Market Concepts (BMC) — Bloomberg (Nov 2025)",
    details: [
      "Earned Bloomberg Market Concepts certification covering equities, fixed income, foreign exchange, and macroeconomic indicators.",
      "Developed strong understanding of financial markets, investment principles, and Bloomberg Terminal functionality.",
      "Strengthened practical knowledge of global financial systems and market analysis."
    ]
  },
  {
    id: 2,
    year: 2025,
    title: "Alteryx Designer Core Certification — Alteryx (2025)",
    details: [
      "Earned certification demonstrating proficiency in data preparation, blending, and transformation using Alteryx Designer.",
      "Developed skills in building automated data workflows and performing advanced data analytics.",
      "Gained hands-on experience in data cleaning, transformation, and analytical reporting.",
      "Strengthened ability to convert raw data into actionable business insights using no-code/low-code analytics tools."
    ]
  },
  {
    id: 3,
    year: 2025,
    title: "Deloitte Australia — Data Analytics Job Simulation (Jul 2025)",
    details: [
      "Completed Deloitte's data analytics simulation program focused on real-world business problem solving.",
      "Applied data analysis, interpretation, and visualization techniques to derive business insights.",
      "Gained practical exposure to analytics workflows used in professional consulting environments."
    ]
  },
  {
    id: 4,
    year: 2024,
    title: "Career Essentials in Generative AI — Microsoft & LinkedIn (Jun 2024)",
    details: [
      "Completed certification covering fundamentals of Artificial Intelligence and Generative AI.",
      "Developed understanding of AI applications in business, analytics, and automation."
    ]
  },
  {
    id: 5,
    year: 2024,
    title: "Ethics in the Age of Generative AI — LinkedIn (Jun 2024)",
    details: [
      "Learned ethical principles, responsible AI usage, and governance in AI systems.",
      "Gained awareness of ethical challenges and real-world AI implementation considerations."
    ]
  }
];

export default function Certifications() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Sort certifications by year (2025 first, then 2024)
  const sortedCertifications = [...certificationsData].sort((a, b) => {
    if (a.year !== b.year) {
      return b.year - a.year;
    }
    return 0;
  });

  return (
    <section id="certifications" className="border-b border-slate-800/80 bg-slate-950">
      <div className="section-container py-12 md:py-16">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Certifications
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Professional certifications in finance, analytics, and emerging technologies.
            </p>
            <p className="mt-1 text-xs text-slate-500">Click any certification to see details →</p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {sortedCertifications.map((certification, index) => (
            <div
              key={certification.id}
              className="card-surface overflow-hidden rounded-xl border border-slate-700/50 transition-all duration-300 hover:border-primary-light/50"
            >
              <button
                type="button"
                onClick={() => toggleExpand(certification.id)}
                className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-slate-800/30 transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-primary-light">{certification.year}</span>
                      <span className="text-xs text-slate-400">•</span>
                    </div>
                    <h4 className="text-sm font-semibold text-slate-50 pr-4 leading-relaxed">
                      {certification.title}
                    </h4>
                  </div>
                  <div
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      expandedId === certification.id ? 'rotate-180' : ''
                    }`}
                  >
                    <svg
                      className="h-5 w-5 text-primary-light"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedId === certification.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-5 pb-4 border-t border-slate-700/50">
                  <ul className="pt-4 space-y-2">
                    {certification.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-light flex-shrink-0" />
                        <span className="text-xs text-slate-300 leading-relaxed">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
