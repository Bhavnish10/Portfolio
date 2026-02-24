import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const [leftRef, leftVisible] = useScrollReveal();
  const [rightRef, rightVisible] = useScrollReveal();

  return (
    <section id="about" className="border-b border-slate-800/80 bg-slate-950">
      <div className="section-container py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.6fr,1fr] items-start">
          <div ref={leftRef} className={`scroll-reveal ${leftVisible ? 'revealed' : ''}`}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              About
            </h3>
            <h2 className="mt-2 text-xl font-semibold text-slate-50">
              Finance professional with analytical expertise and technical foundation.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              MBA candidate at Institute of Management, Nirma University with a strong foundation 
              in financial analysis and data-driven decision making. My B.Tech in Computer Science 
              provides a unique blend of quantitative rigor, programming expertise, and business acumen.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Proficient in Power BI, data analytics, and machine learning applications for financial modeling. 
              Seeking opportunities in equity research, private equity, and investment analysis where I can 
              leverage technical skills to deliver actionable financial insights and strategic recommendations.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Proven ability to translate complex data into clear narratives for stakeholders ranging from 
              technical teams to executive decision-makers, with experience in research, analytics, and 
              leadership-oriented roles.
            </p>
          </div>

          <div ref={rightRef} className={`space-y-4 scroll-reveal ${rightVisible ? 'revealed' : ''}`}>
            <div className="card-surface p-4 hover-lift transition-all-smooth">
              <h4 className="text-xs font-semibold text-slate-300">Core Competencies</h4>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                <li className="transition-colors-smooth hover:text-primary-light">• Data Analytics</li>
                <li className="transition-colors-smooth hover:text-primary-light">• Power BI Dashboard Development</li>
                <li className="transition-colors-smooth hover:text-primary-light">• Investment Analysis</li>
                <li className="transition-colors-smooth hover:text-primary-light">• Machine Learning</li>
                <li className="transition-colors-smooth hover:text-primary-light">• Data Visualization</li>
                <li className="transition-colors-smooth hover:text-primary-light">• Business Intelligence</li>
                <li className="transition-colors-smooth hover:text-primary-light">• Financial Markets Understanding</li>
                <li className="transition-colors-smooth hover:text-primary-light">• Research and Analytical Thinking</li>
                <li className="transition-colors-smooth hover:text-primary-light">• Leadership and Team Collaboration</li>
              </ul>
            </div>
            <div className="card-surface p-4 hover-lift transition-all-smooth">
              <h4 className="text-xs font-semibold text-slate-300">Career Objectives</h4>
              <p className="mt-2 text-xs text-slate-300">
                Seeking opportunities in <span className="font-bold text-primary">Finance, Equity Research, Private Equity, Investment Banking, or Financial Modeling</span> to apply my analytical skills, financial knowledge, and technical expertise in supporting data-driven investment decisions and strategic business outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

