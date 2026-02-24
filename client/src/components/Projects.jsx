import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { fetchProjects } from '../api';

const PROJECT_DETAILS = {
  'fallback1': [
    'Developed ML-based Android malware detection framework',
    'Achieved 97% accuracy using advanced ML algorithms',
    'Applied Explainable AI for model transparency',
    'Presented research at ICIT 2025, Bangkok'
  ],
  'fallback2': [
    'Developed AI-based electricity demand forecasting system using Random Forest algorithm',
    'Integrated weather, holiday, and historical demand datasets for accurate predictions',
    'Built interactive dashboard using Streamlit for real-time visualization'
  ],
  'fallback3': [
    'Developed Android-based Expense Tracker application for efficient expense management',
    'Implemented MVVM architecture for scalable and structured application design',
    'Used Room Database for secure, persistent, and offline data storage',
    'Enabled CRUD operations (add, edit, delete expenses) for effective financial tracking',
    'Designed responsive UI with animations for improved user experience',
    'Provided financial insights by tracking spending patterns and total expenses'
  ]
};

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    let active = true;
    fetchProjects()
      .then((res) => {
        if (active) setProjects(res.data);
      })
      .catch(() => {
        if (active) setProjects([]);
      });
    return () => {
      active = false;
    };
  }, []);

  const handleProjectClick = useCallback((project) => {
    setSelectedProject(project._id);
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
    setSelectedProject(null);
  }, []);

  const projectsData = useMemo(() => 
    projects.length ? projects : [
      { 
        _id: 'fallback1', 
        title: 'Android Malware Detection Framework', 
        description: 'ML and XAI-based research project.', 
        techStack: ['Python', 'ML', 'XAI'], 
        githubUrl: 'https://github.com/Bhavnish10', 
        featured: true 
      },
      {
        _id: 'fallback2', 
        title: 'ElectroCast — AI-Based Electricity Demand Forecasting System', 
        description: 'Developed ML-based electricity demand forecasting system using Random Forest algorithm with integrated datasets and interactive dashboard.',
        techStack: ['Python', 'ML', 'Streamlit', 'Random Forest'], 
        githubUrl: 'https://github.com/Bhavnish10', 
        featured: false 
      },
      {
        _id: 'fallback3', 
        title: 'Expense Tracker App — Android Application', 
        description: 'Developed an Android-based Expense Tracker application for efficient expense management. Implemented MVVM architecture for scalable and structured application design. Used Room Database for secure, persistent, and offline data storage. Enabled CRUD operations (add, edit, delete expenses) for effective financial tracking. Designed responsive UI with animations for improved user experience. Provided financial insights by tracking spending patterns and total expenses.',
        techStack: ['Android', 'MVVM', 'Room Database', 'Kotlin'], 
        githubUrl: 'https://github.com/Bhavnish10', 
        featured: false 
      }
    ], [projects]
  );

  return (
    <section id="projects" className="border-b border-slate-800/80 bg-slate-950">
      <div className="section-container py-12 md:py-16">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Projects
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Selected work combining machine learning and explainable AI.
            </p>
            <p className="mt-1 text-[11px] text-slate-500">Click a card to see short version →</p>
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {projectsData.map((project, index) => (
            <div key={project._id} className={`card-surface flex flex-col overflow-hidden rounded-2xl overflow-hidden animate-fadeInUp animate-stagger-${Math.min(index + 1, 5)}`}>
              <button
                type="button"
                onClick={() => handleProjectClick(project)}
                className="flex flex-col flex-1 w-full text-left transition-all-smooth hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-2xl cursor-pointer"
              >
                <div className="p-4 space-y-3 flex-1">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-50 transition-colors-smooth hover:text-primary-light">{project.title}</h4>
                    <p className="mt-1 text-xs text-slate-300 line-clamp-2">{project.description}</p>
                  </div>

                  {project.techStack?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="chip border-slate-700/80 bg-slate-900/80 text-[10px] text-slate-200 transition-all-smooth hover:border-primary-light hover:text-primary-light hover:scale-110"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <span className="inline-block text-[10px] text-primary-light transition-all-smooth hover:scale-110">Click to view short version →</span>
                </div>
              </button>
              <div className="px-4 pb-4 pt-0 flex justify-end items-center">
                {project.featured && (
                  <span className="text-[10px] text-slate-500">97% accuracy · ML & XAI</span>
                )}
              </div>
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
            aria-labelledby="project-modal-title"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-700 bg-slate-900/95 px-5 py-4 backdrop-blur">
              <h2 id="project-modal-title" className="text-sm font-semibold text-slate-50">
                Project (Short Version)
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
              {selectedProject && PROJECT_DETAILS[selectedProject]?.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
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

