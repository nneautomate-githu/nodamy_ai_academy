import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, AlertCircle, Phone } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-transparent font-sans text-slate-900 relative">
      <div className="max-w-3xl mx-auto space-y-12">
        
        {/* Title Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600">Got Questions?</span>
          <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-slate-950">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-500 text-sm">
            Read comprehensive technical, hardware, scheduling, and curriculum answers to ensure complete transparency before secure booking.
          </p>
        </div>

        {/* Accordions Container */}
        <div className="space-y-4 text-left">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all ${
                  isOpen 
                    ? 'border-purple-600/30 bg-white/60 backdrop-blur-md shadow-sm' 
                    : 'border-slate-100 bg-white/85 hover:border-slate-200 hover:shadow-sm'
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex justify-between items-center p-5 font-bold font-display text-sm md:text-base text-slate-900 focus:outline-none cursor-pointer"
                  id={`faq-trigger-${faq.id}`}
                >
                  <span className="max-w-[90%]">{faq.question}</span>
                  <span className="text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>

                {/* Accordion Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 border-t border-slate-100 text-xs md:text-sm text-slate-600 font-light leading-relaxed whitespace-pre-line space-y-3">
                        <p>{faq.answer}</p>
                        
                        {/* Device requirements special warning */}
                        {faq.id === 'faq-5' && (
                          <div className="p-3 bg-purple-50 border border-purple-100 rounded-xl flex gap-2 text-purple-800 text-[11px] font-medium leading-relaxed mt-4">
                            <AlertCircle className="text-purple-600 shrink-0 mt-0.5" size={15} />
                            <div>
                              <strong>Device Pledge:</strong> If you don't have a laptop, start with Package 1 on your smartphone, earn your first income applying your AI skills, and then upgrade to Package 2 when you are ready.
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="p-6 rounded-3xl bg-white/40 backdrop-blur-xl border border-slate-150/50 text-center space-y-4 max-w-xl mx-auto shadow-sm">
          <HelpCircle className="text-purple-600 mx-auto" size={32} />
          <div>
            <h4 className="font-display font-bold text-slate-950 text-base">Still Have Any Unanswered Questions?</h4>
            <p className="text-xs text-slate-500 mt-1">Our advisory team is active 24/7. Reach out via WhatsApp or email to clear any doubts.</p>
          </div>
          <div className="flex gap-2 justify-center pt-2">
            <a
              href="https://wa.me/2348069205177"
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-5 rounded-xl text-xs flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
            >
              <Phone size={13} /> Message WhatsApp Support
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
