import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Lock, ArrowRight, Download, Eye, Sparkles, AlertCircle, Phone } from 'lucide-react';
import { Course, PortfolioProject, DownloadableResource } from '../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'enroll' | 'download' | 'project' | 'success';
  data: Course | PortfolioProject | DownloadableResource | any;
}

export default function Modal({ isOpen, onClose, type, data }: ModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // Checkout Form State
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank' | 'mobile_money'>('card');
  const [acceptedTerms, setAcceptedTerms] = useState(true);

  // Auto scroll freeze when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Reset states when closing/opening
  useEffect(() => {
    if (isOpen) {
      setSuccess(false);
      setLoading(false);
    }
  }, [isOpen]);

  if (!isOpen || !data) return null;

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formPhone) {
      alert('Please fill out all fields.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1800);
  };

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) {
      alert('Please enter your name and email to download.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      
      // Simulate download triggering
      const link = document.createElement('a');
      link.href = '#';
      link.setAttribute('download', `${data.title}.pdf`);
      document.body.appendChild(link);
      // Wait a bit and remove
      setTimeout(() => document.body.removeChild(link), 100);
    }, 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 z-10 max-h-[90vh] flex flex-col"
        >
          {/* Top header glow */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-500" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full text-slate-400 hover:text-slate-950 hover:bg-slate-100 transition-all"
            id="modal-close-btn"
          >
            <X size={20} />
          </button>

          {/* Body Content (Scrollable) */}
          <div className="overflow-y-auto p-6 md:p-8 pt-10">
            {/* ==================== 1. ENROLLMENT WORKFLOW ==================== */}
            {type === 'enroll' && (
              <div>
                {!success ? (
                  <div>
                    <div className="mb-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-50 text-indigo-700">
                        <Sparkles size={12} /> {data.badge || 'Professional Training'}
                      </span>
                      <h3 className="text-2xl font-display font-bold text-slate-900 mt-2">
                        Enroll in {data.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1">
                        Complete your enrollment details below to secure your workspace seat.
                      </p>
                    </div>

                    {/* Order summary card */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-6 flex justify-between items-center">
                      <div>
                        <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Course Selection</p>
                        <p className="font-semibold text-slate-800 text-sm md:text-base mt-0.5">{data.title}</p>
                        <p className="text-xs text-indigo-600 font-medium mt-0.5">Suitability: {data.suitability}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Total Investment</p>
                        <p className="font-display font-extrabold text-slate-950 text-xl md:text-2xl mt-0.5">
                          ₦{data.price}
                        </p>
                        {data.originalPrice && (
                          <span className="text-xs text-slate-400 line-through">
                            ₦{data.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Checkout Form */}
                    <form onSubmit={handleEnrollSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Enter your first & last name"
                            value={formName}
                            onChange={(e) => setFormName(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="you@example.com"
                            value={formEmail}
                            onChange={(e) => setFormEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                            WhatsApp / Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="e.g. +234 80 6920 5177"
                            value={formPhone}
                            onChange={(e) => setFormPhone(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                            Payment Route
                          </label>
                          <div className="grid grid-cols-3 gap-2">
                            <button
                              type="button"
                              onClick={() => setPaymentMethod('card')}
                              className={`py-2 px-1 rounded-xl text-xs font-semibold border transition-all flex flex-col items-center justify-center ${
                                paymentMethod === 'card'
                                  ? 'bg-indigo-50 border-indigo-600 text-indigo-700'
                                  : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'
                              }`}
                            >
                              Card
                            </button>
                            <button
                              type="button"
                              onClick={() => setPaymentMethod('bank')}
                              className={`py-2 px-1 rounded-xl text-xs font-semibold border transition-all flex flex-col items-center justify-center ${
                                paymentMethod === 'bank'
                                  ? 'bg-indigo-50 border-indigo-600 text-indigo-700'
                                  : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'
                              }`}
                            >
                              Transfer
                            </button>
                            <button
                              type="button"
                              onClick={() => setPaymentMethod('mobile_money')}
                              className={`py-2 px-1 rounded-xl text-xs font-semibold border transition-all flex flex-col items-center justify-center ${
                                paymentMethod === 'mobile_money'
                                  ? 'bg-indigo-50 border-indigo-600 text-indigo-700'
                                  : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'
                              }`}
                            >
                              USSD
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 bg-slate-50 rounded-xl flex items-start gap-2.5 border border-slate-100">
                        <Lock className="text-emerald-500 flex-shrink-0 mt-0.5" size={15} />
                        <p className="text-[11px] text-slate-500 leading-relaxed">
                          Secure Payment Gateway. All payments are encrypted. Upon successful enrollment, you will receive an automatic WhatsApp invite and email link containing access to the student dashboard and private Discord community.
                        </p>
                      </div>

                      <div className="flex items-center gap-2 pt-1">
                        <input
                          type="checkbox"
                          id="terms"
                          checked={acceptedTerms}
                          onChange={(e) => setAcceptedTerms(e.target.checked)}
                          className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"
                        />
                        <label htmlFor="terms" className="text-xs text-slate-500 cursor-pointer select-none">
                          I agree to Nodamy Academy's training syllabus, schedule, and refund terms.
                        </label>
                      </div>

                      <button
                        type="submit"
                        disabled={loading || !acceptedTerms}
                        className="w-full mt-4 bg-slate-950 hover:bg-slate-900 text-white py-3.5 px-6 rounded-2xl font-semibold text-sm transition-all flex items-center justify-center gap-2 hover:shadow-lg disabled:opacity-50"
                        id="enroll-submit-btn"
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Processing Secure Workspace Booking...
                          </>
                        ) : (
                          <>
                            Confirm Enrollment & Learn AI <ArrowRight size={16} />
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="mx-auto w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 border border-emerald-100 mb-4 shadow-sm">
                      <Check size={28} strokeWidth={3} />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-slate-950">
                      Enrollment Completed!
                    </h3>
                    <p className="text-slate-600 max-w-md mx-auto mt-2 text-sm leading-relaxed">
                      Congratulations, <span className="font-semibold text-slate-800">{formName}</span>! You have successfully registered for the <span className="font-semibold text-indigo-600">{data.title}</span>.
                    </p>

                    <div className="my-6 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-left max-w-md mx-auto space-y-2.5">
                      <p className="text-xs font-mono text-slate-400 uppercase tracking-wide">Next Action Steps</p>
                      <div className="flex gap-2.5 items-start text-xs text-slate-600">
                        <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-[10px] shrink-0">1</span>
                        <p>Check your WhatsApp inbox <span className="font-mono font-medium text-slate-800">({formPhone})</span>. We have sent a direct onboarding message.</p>
                      </div>
                      <div className="flex gap-2.5 items-start text-xs text-slate-600">
                        <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-[10px] shrink-0">2</span>
                        <p>Check your email <span className="font-mono font-medium text-slate-800">({formEmail})</span> for receipts, syllabus documents, and scheduling links.</p>
                      </div>
                      <div className="flex gap-2.5 items-start text-xs text-slate-600">
                        <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-[10px] shrink-0">3</span>
                        <p>Join the Nodamy private student Discord community to meet other builders.</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto mt-6">
                      <a
                        href="https://wa.me/2348069205177"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-5 rounded-2xl text-sm transition-all flex items-center justify-center gap-2"
                      >
                        <Phone size={16} /> Instant WhatsApp Onboarding
                      </a>
                      <button
                        onClick={onClose}
                        className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 px-5 rounded-2xl text-sm transition-all"
                      >
                        Back to Website
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            )}

            {/* ==================== 2. FREE RESOURCE DOWNLOAD ==================== */}
            {type === 'download' && (
              <div>
                {!success ? (
                  <div>
                    <div className="mb-5 text-center">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-indigo-50 text-indigo-700">
                        <Download size={10} /> Free Knowledge Asset
                      </span>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 mt-2">
                        Get Your Free {data.type}
                      </h3>
                      <p className="text-xs md:text-sm text-slate-500 mt-1 max-w-md mx-auto">
                        Enter your contact details below, and we will immediately prepare your personalized digital download link and send a backup guide to your email inbox.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl border border-slate-100 bg-slate-50 flex items-center gap-3.5 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-mono font-bold shrink-0 text-xs">
                        {data.type === 'Guide' && 'PDF'}
                        {data.type === 'Roadmap' && 'MAP'}
                        {data.type === 'Resource List' && 'LST'}
                        {data.type === 'Templates' && 'TPL'}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 text-sm">{data.title}</h4>
                        <p className="text-xs text-slate-400 mt-0.5">Size: {data.size} | Downloads: {data.downloadsCount}+</p>
                      </div>
                    </div>

                    <form onSubmit={handleDownloadSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="What should we call you?"
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="you@domain.com"
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full mt-4 bg-slate-950 hover:bg-slate-900 text-white py-3 px-5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2"
                        id="download-submit-btn"
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Compiling E-Book Graphics & Prompts...
                          </>
                        ) : (
                          <>
                            Download Free PDF Now <Download size={15} />
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-6"
                  >
                    <div className="mx-auto w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-700 border border-indigo-100 mb-3.5">
                      <Check size={24} strokeWidth={3} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900">
                      Download Started!
                    </h3>
                    <p className="text-slate-600 text-xs md:text-sm mt-1.5 max-w-sm mx-auto">
                      Thank you! Your copy of <span className="font-medium text-slate-800">{data.title}</span> has been compiled and is now downloading.
                    </p>

                    <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl text-left max-w-sm mx-auto my-5 space-y-1 text-xs">
                      <p className="font-semibold text-slate-800">What’s next?</p>
                      <p className="text-slate-500 leading-relaxed">
                        We have also sent a high-resolution, print-ready PDF duplicate copy to <span className="font-mono text-indigo-600">{formEmail}</span> in case the download fails to complete on your device.
                      </p>
                    </div>

                    <button
                      onClick={onClose}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-6 rounded-xl text-xs transition-all"
                    >
                      Continue Exploring Nodamy
                    </button>
                  </motion.div>
                )}
              </div>
            )}

            {/* ==================== 3. STUDENT PORTFOLIO DETAIL VIEW ==================== */}
            {type === 'project' && (
              <div className="space-y-5">
                {/* Visual header */}
                <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-2xl bg-slate-100 border border-slate-100">
                  <img
                    src={data.imageUrl}
                    alt={data.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-950 font-mono text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                    {data.category}
                  </span>
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[10px] font-mono text-emerald-300 uppercase tracking-widest font-bold">Graduation Project</p>
                    <h4 className="text-lg md:text-xl font-display font-bold mt-0.5 leading-snug">{data.title}</h4>
                    <p className="text-xs text-slate-200 mt-1">Creator: <span className="font-medium text-white">{data.studentName}</span> (Nodamy Graduate)</p>
                  </div>
                </div>

                {/* Details layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-1">
                  <div className="md:col-span-2 space-y-3">
                    <h5 className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Project Specification & Scope</h5>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {data.description}
                    </p>
                    <div className="p-3 bg-emerald-50 rounded-xl flex gap-2 border border-emerald-100">
                      <AlertCircle className="text-emerald-700 mt-0.5 shrink-0" size={15} />
                      <p className="text-[11px] text-emerald-800 leading-normal">
                        This project is live, functional, and fully generated by the student as a graduation portfolio project. No manual developers or professional agencies were hired.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <div>
                      <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Project Tags</h5>
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {data.tags.map((tag: string, idx: number) => (
                          <span key={idx} className="bg-white border border-slate-200 text-slate-700 text-[10px] px-2 py-0.5 rounded-md font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">AI Systems Mastered</h5>
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {data.toolsUsed.map((tool: string, idx: number) => (
                          <span key={idx} className="bg-indigo-50 border border-indigo-100 text-indigo-700 text-[10px] px-2 py-0.5 rounded-md font-semibold">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={onClose}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 px-5 rounded-xl text-xs transition-all"
                  >
                    Close Showcase
                  </button>
                  <button
                    onClick={() => {
                      alert('Redirecting to the student\'s active live demo on high-performance sandbox...');
                    }}
                    className="bg-slate-950 hover:bg-slate-900 text-white font-semibold py-2.5 px-5 rounded-xl text-xs transition-all flex items-center gap-1.5"
                  >
                    <Eye size={14} /> Open Live Project Demo
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
