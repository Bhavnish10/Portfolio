import React from 'react';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md animate-slideDown">
      <div className="section-container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-sm font-bold shadow-soft transition-all-smooth hover:scale-110 hover:shadow-lg">
            BN
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-slate-50 transition-colors-smooth hover:text-primary-light">Bhavnish Nanda</span>
            <span className="text-xs text-slate-400">
              MBA Finance · Data Analytics · Investment Analysis
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`transition-all-smooth hover:text-primary-light hover:scale-105 animate-fadeInUp animate-stagger-${Math.min(index + 1, 5)}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
