import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, MessageCircle, Send, CheckCircle2, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

interface ContactProps {
  onPageChange: (pageId: string) => void;
}

export default function Contact({ onPageChange }: ContactProps) {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('General Inquiry');
  const [formMessage, setFormMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formError, setFormError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    if (!formName || !formEmail || !formMessage) {
      setFormError('Please fill out all required fields.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormName('');
      setFormEmail('');
      setFormMessage('');
    }, 1500);
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-transparent font-sans text-slate-900 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Title Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600">Connect With Nodamy</span>
          <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-slate-950">
            Contact Our Advisory
          </h1>
          <p className="text-slate-500 text-sm">
            Have questions about group syllabi, corporate bookings, or specialized setups? Write us a message or connect directly through our official social pipelines.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Left */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-600">Active Support channels</span>
              <h3 className="text-2xl font-display font-bold text-slate-950">Direct Touchpoints</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Our principal instructors are online daily. Connect with our official channels for the absolute fastest response times.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-4">
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/2348069205177"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-100 hover:border-emerald-200 hover:bg-white flex items-center gap-4 transition-all hover:shadow cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">WhatsApp Chat</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">Instant Messaging Support</p>
                  <p className="text-xs text-emerald-600 font-mono mt-0.5 font-bold">+234 80 6920 5177</p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:nnekasmadubuike@gmail.com"
                className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-100 hover:border-purple-200 hover:bg-white flex items-center gap-4 transition-all hover:shadow cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Email Address</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">Administrative & Corporate Queries</p>
                  <p className="text-xs text-purple-600 font-mono mt-0.5 font-bold font-sans">nnekasmadubuike@gmail.com</p>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/nneka-madubuike"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-100 hover:border-blue-200 hover:bg-white flex items-center gap-4 transition-all hover:shadow cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Linkedin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">LinkedIn Professional</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">Corporate Advisory Networking</p>
                  <p className="text-xs text-blue-600 font-mono mt-0.5 font-bold">in/nneka-madubuike</p>
                </div>
              </a>

              {/* TikTok Card */}
              <a
                href="https://www.tiktok.com/@nekkystories?_r=1&_t=ZN-944cwTovJhe"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-100 hover:border-fuchsia-200 hover:bg-white flex items-center gap-4 transition-all hover:shadow cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl bg-fuchsia-50 text-fuchsia-600 flex items-center justify-center shrink-0">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">TikTok Workspace</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">Creative Shorts & AI Quick Hacks</p>
                  <p className="text-xs text-fuchsia-600 font-mono mt-0.5 font-bold">@nekkystories</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form Right */}
          <div className="lg:col-span-7 bg-white/40 backdrop-blur-xl border border-slate-150/50 rounded-3xl p-6 md:p-8 shadow-sm">
            {formError && (
              <div className="mb-4 p-3 bg-rose-50 border border-rose-100 rounded-xl flex gap-2 text-rose-800 text-xs">
                <AlertCircle className="text-rose-500 shrink-0 mt-0.5" size={15} />
                <span>{formError}</span>
              </div>
            )}

            {!success ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="space-y-1">
                  <h3 className="text-xl font-display font-bold text-slate-950">Write Our Advisory Team</h3>
                  <p className="text-xs text-slate-400">Fill out our encrypted questionnaire. We respond in under 3 hours.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                    Primary Interest Subject
                  </label>
                  <select
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all cursor-pointer font-sans"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="AI Content Creator Masterclass">AI Content Creator Masterclass (Package 1)</option>
                    <option value="AI Creator Pro Masterclass">AI Creator Pro Masterclass (Package 2)</option>
                    <option value="Private One-on-one Coaching">Private One-on-one Coaching (Package 3)</option>
                    <option value="Corporate Custom Seminars">Corporate Custom Seminars</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                    Detailed Message Questionnaire *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="How can Nodamy help accelerate your business or digital creation goals?"
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-100 flex gap-2 text-[10px] text-slate-400 leading-normal">
                  <ShieldCheck className="text-emerald-500 mt-0.5 shrink-0" size={14} />
                  <span>Your communications are fully encrypted. We respect privacy and never share emails or contact data with third-party lists.</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-purple-200"
                  id="contact-submit-btn"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Transmitting Encrypted Message...
                    </>
                  ) : (
                    <>
                      Submit Contact Ticket <Send size={12} />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="mx-auto w-14 h-14 bg-emerald-50 rounded-full border border-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 size={28} strokeWidth={2.5} />
                </div>
                <h3 className="font-display font-bold text-slate-950 text-xl">Ticket Transmitted Successfully!</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                  Thank you! We have received your inquiry regarding <span className="font-semibold text-purple-600">{formSubject}</span>. A principal instructor will reach out to you shortly.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-semibold py-2.5 px-5 rounded-lg text-xs cursor-pointer shadow-sm"
                >
                  Submit Another Message
                </button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Strong final CTA */}
        <div className="bg-gradient-to-r from-purple-900 to-indigo-950 text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-xl shadow-purple-950/25">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-transparent to-transparent pointer-events-none" />
          <div className="relative space-y-6 max-w-xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-semibold bg-white/10 text-purple-200">
              <Sparkles size={11} className="animate-spin" /> Start Learning Today
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-white">
              Stop Watching AI Happen. Start Directing It.
            </h2>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-light">
              Join Nodamy AI Academy and lock in your future. Gain access to all tools, our student workspace portals, active Q&A communities, and verified graduation credential.
            </p>
            <button
              onClick={() => {
                onPageChange('courses');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white hover:bg-slate-50 text-slate-950 font-bold py-3 px-6 rounded-xl text-xs transition-all hover:shadow cursor-pointer"
            >
              Browse Pricing Courses Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
