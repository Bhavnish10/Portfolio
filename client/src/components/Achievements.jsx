import React, { useState } from 'react';

const achievementsData = [
  {
    id: 1,
    title: "HackNUthon 6.0 (2025) — Top 10 Finalist",
    details: [
      "Secured a position among the top 10 teams in RapidOps track.",
      "Demonstrated strong analytical thinking, problem-solving, and technical skills.",
      "Collaborated in a team to develop innovative technology-driven solutions."
    ]
  },
  {
    id: 2,
    title: "Smart India Hackathon (2024) — Top 1400 Teams Nationwide",
    details: [
      "Qualified among the top 1400 teams out of 89,000+ teams across India.",
      "Demonstrated strong innovation, analytical, and technical capabilities.",
      "Worked on solving real-world problems using software and analytical approaches."
    ]
  },
  {
    id: 3,
    title: "MINeD Hackathon (2025) — National Level Participant",
    details: [
      "Participated in national-level hackathon organized by Nirma University.",
      "Strengthened skills in teamwork, innovation, and rapid solution development.",
      "Competed with teams from across the country in challenging technical scenarios."
    ]
  }
];

export default function Achievements() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="achievements" className="border-b border-slate-800/80 bg-slate-950">
      <div className="section-container py-12 md:py-16">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Achievements
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Competitive hackathons and innovation challenges showcasing technical excellence.
            </p>
            <p className="mt-1 text-xs text-slate-500">Click any achievement to see details →</p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {achievementsData.map((achievement) => (
            <div
              key={achievement.id}
              className="card-surface overflow-hidden rounded-xl border border-slate-700/50 transition-all duration-300 hover:border-primary-light/50"
            >
              <button
                type="button"
                onClick={() => toggleExpand(achievement.id)}
                className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-slate-800/30 transition-colors duration-200"
              >
                <h4 className="text-sm font-semibold text-slate-50 pr-4 leading-relaxed">
                  {achievement.title}
                </h4>
                <div
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    expandedId === achievement.id ? 'rotate-180' : ''
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
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedId === achievement.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-5 pb-4 border-t border-slate-700/50">
                  <ul className="pt-4 space-y-2">
                    {achievement.details.map((detail, index) => (
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

