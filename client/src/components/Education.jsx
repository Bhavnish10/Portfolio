import React, { useState } from 'react';

const educationData = [
  {
    id: 1,
    title: "MBA — Institute of Management, Nirma University (2025–2027)",
    details: [
      "Specialization: Finance",
      "Minor: Digital Transformation & Analytics",
      "Currently pursuing MBA with focus on finance, analytics, and investment analysis",
      "Developing expertise in financial markets, data analytics, and business strategy"
    ],
    icon: "🎓",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    id: 2,
    title: "B.Tech in Computer Science — Institute of Technology, Nirma University (2022–2025)",
    details: [
      "CGPA/Percentage: 82.90%",
      "Built strong foundation in programming, machine learning, and data analytics",
      "Completed academic and research projects in cybersecurity and machine learning",
      "Developed strong problem-solving and analytical skills"
    ],
    icon: "💻",
    color: "from-green-500/20 to-teal-500/20"
  },
  {
    id: 3,
    title: "Class XII (CBSE) — Bhagwan Mahavir International School, Surat (2020–2021)",
    details: [
      "Percentage: 92.80%",
      "Focused on science and mathematics",
      "Developed strong analytical and logical thinking foundation"
    ],
    icon: "📚",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 4,
    title: "Class X (CBSE) — S. D. Jain Modern School (2018–2019)",
    details: [
      "Percentage: 91.80%",
      "Built strong academic foundation",
      "Developed interest in technology and analytical thinking"
    ],
    icon: "🏫",
    color: "from-pink-500/20 to-rose-500/20"
  }
];

export default function Education() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="education" className="border-b border-slate-800/80 bg-slate-950">
      <div className="section-container py-12 md:py-16">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Education
            </h3>
          </div>
        </div>

        <div className="mt-6 relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-light via-primary to-primary-light/30" />
          
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                className="relative flex items-start gap-4"
              >
                {/* Timeline dot */}
                <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 border-2 border-primary-light flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary-light ${expandedId === edu.id ? 'ring-4 ring-primary-light/30' : ''}`}>
                  <span className="text-lg">{edu.icon}</span>
                </div>

                {/* Content card */}
                <div className="flex-1 min-w-0">
                  <div
                    className={`relative overflow-hidden rounded-xl border border-slate-700/50 transition-all duration-700 hover:border-primary-light/50 ${
                      expandedId === edu.id ? 'shadow-lg shadow-primary-light/10' : ''
                    }`}
                  >
                    {/* Gradient background overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-0 transition-opacity duration-700 ${expandedId === edu.id ? 'opacity-100' : ''}`} />
                    
                    <button
                      type="button"
                      onClick={() => toggleExpand(edu.id)}
                      className="relative w-full px-5 py-4 text-left flex items-center justify-between hover:bg-slate-800/30 transition-all duration-300 group"
                    >
                      <h4 className="text-sm font-semibold text-slate-50 leading-relaxed pr-4 relative z-10">
                        {edu.title}
                      </h4>
                      <div
                        className={`relative z-10 flex-shrink-0 transition-all duration-500 transform ${
                          expandedId === edu.id ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
                        }`}
                      >
                        <svg
                          className="h-5 w-5 text-primary-light transition-colors duration-300 group-hover:text-primary"
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
                    
                    {/* Expandable content with slide animation */}
                    <div
                      className={`relative z-10 transition-all duration-700 ease-out transform ${
                        expandedId === edu.id 
                          ? 'max-h-96 opacity-100 translate-y-0' 
                          : 'max-h-0 opacity-0 -translate-y-2'
                      }`}
                    >
                      <div className="px-5 pb-4 border-t border-slate-700/50">
                        <div className="pt-4 space-y-3">
                          {edu.details.map((detail, detailIndex) => (
                            <div 
                              key={detailIndex} 
                              className={`flex items-start gap-3 transition-all duration-500 delay-${detailIndex * 100} ${
                                expandedId === edu.id 
                                  ? 'opacity-100 translate-x-0' 
                                  : 'opacity-0 -translate-x-4'
                              }`}
                            >
                              <div className="mt-2 flex-shrink-0">
                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-light to-primary animate-pulse" />
                              </div>
                              <span className="text-xs text-slate-300 leading-relaxed">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

