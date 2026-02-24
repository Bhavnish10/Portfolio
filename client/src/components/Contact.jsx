import React, { useState } from 'react';
import { submitContact } from '../api';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      await submitContact(form);
      setStatus({ type: 'success', message: 'Message sent successfully. Thank you!' });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.response?.data?.message || 'Something went wrong. Please try again.'
      });
    } finally {
      setSubmitting(false);
    }
  };

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

            <div className="mt-4 flex gap-3 text-xs text-slate-300">
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

          <form onSubmit={handleSubmit} className="card-surface p-5 space-y-3">
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="block text-[11px] font-medium text-slate-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none focus:border-primary-light"
                  placeholder="Your name"
                />
              </div>
              <div className="flex-1">
                <label className="block text-[11px] font-medium text-slate-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none focus:border-primary-light"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-medium text-slate-300 mb-1">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none focus:border-primary-light resize-none"
                placeholder="Briefly share what you’d like to discuss."
              />
            </div>
            {status && (
              <p
                className={`text-[11px] ${
                  status.type === 'success' ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {status.message}
              </p>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-semibold text-slate-50 shadow-soft transition hover:bg-primary-light disabled:opacity-60"
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

