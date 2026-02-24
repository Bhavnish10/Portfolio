import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import GitHubSection from './components/GitHubSection';
import LinkedInSection from './components/LinkedInSection';
import Contact from './components/Contact';

// Lazy load components that are below the fold
const LazyEducation = lazy(() => import('./components/Education'));
const LazySkills = lazy(() => import('./components/Skills'));
const LazyExperience = lazy(() => import('./components/Experience'));
const LazyProjects = lazy(() => import('./components/Projects'));
const LazyCertifications = lazy(() => import('./components/Certifications'));
const LazyAchievements = lazy(() => import('./components/Achievements'));
const LazyGitHubSection = lazy(() => import('./components/GitHubSection'));
const LazyLinkedInSection = lazy(() => import('./components/LinkedInSection'));
const LazyContact = lazy(() => import('./components/Contact'));

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950 text-slate-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Suspense fallback={
          <div className="section-container py-12 md:py-16">
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-light border-t-transparent"></div>
            </div>
          </div>
        }>
          <LazyEducation />
        </Suspense>
        <Suspense fallback={
          <div className="section-container py-12 md:py-16">
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-light border-t-transparent"></div>
            </div>
          </div>
        }>
          <LazySkills />
        </Suspense>
        <Suspense fallback={
          <div className="section-container py-12 md:py-16">
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-light border-t-transparent"></div>
            </div>
          </div>
        }>
          <LazyExperience />
        </Suspense>
        <Suspense fallback={
          <div className="section-container py-12 md:py-16">
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-light border-t-transparent"></div>
            </div>
          </div>
        }>
          <LazyProjects />
        </Suspense>
        <Suspense fallback={
          <div className="section-container py-12 md:py-16">
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-light border-t-transparent"></div>
            </div>
          </div>
        }>
          <LazyCertifications />
        </Suspense>
        <Suspense fallback={
          <div className="section-container py-12 md:py-16">
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-light border-t-transparent"></div>
            </div>
          </div>
        }>
          <LazyAchievements />
        </Suspense>
        <Suspense fallback={
          <div className="section-container py-12 md:py-16">
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-light border-t-transparent"></div>
            </div>
          </div>
        }>
          <LazyGitHubSection />
        </Suspense>
        <Suspense fallback={
          <div className="section-container py-12 md:py-16">
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-light border-t-transparent"></div>
            </div>
          </div>
        }>
          <LazyLinkedInSection />
        </Suspense>
        <Suspense fallback={
          <div className="section-container py-12 md:py-16">
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-light border-t-transparent"></div>
            </div>
          </div>
        }>
          <LazyContact />
        </Suspense>
      </main>
      <footer className="border-t border-slate-800/80 bg-slate-950">
        <div className="section-container py-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-[11px] text-slate-500">
          <span> {new Date().getFullYear()} Bhavnish Nanda. All rights reserved.</span>
          <span>Built with React, Tailwind CSS, Node.js, and MongoDB.</span>
        </div>
      </footer>
    </div>
  );
}
