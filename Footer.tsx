import React from 'react';
import Logo from './Logo';
import { Mail, Phone, Linkedin, MessageSquare, Shield, Globe, ExternalLink } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (pageId: string) => {
    onPageChange(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePolicyClick = (policyType: string) => {
    alert(`Nodamy AI Academy - ${policyType} Policy:\n\nOur full updated legal terms are registered in our physical offices. For questions or digital duplicates, contact our support team directly at support@nodamy.com.`);
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand/Logo Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/5 py-2 px-3.5 rounded-2xl inline-block">
              <Logo size="md" showText={true} className="brightness-150 text-white" />
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mt-4">
              Providing modern, hands-on, highly practical AI skills for creators, professionals, and business owners. Build your future in the intelligence era.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/2348069205177"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-md"
                title="WhatsApp Support"
              >
                <Phone size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/nneka-madubuike"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-md"
                title="LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.tiktok.com/@nekkystories?_r=1&_t=ZN-944cwTovJhe"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-fuchsia-600 text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-md"
                title="TikTok Creator"
              >
                <MessageSquare size={16} />
              </a>
              <a
                href="mailto:nnekasmadubuike@gmail.com"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-indigo-600 text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-md"
                title="Email Support"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Nav Lists */}
          <div>
            <h4 className="text-white text-xs font-bold font-mono tracking-widest uppercase mb-4">Academy</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-white transition-colors">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('faq')} className="hover:text-white transition-colors">
                  Frequently Asked FAQs
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-white transition-colors">
                  Get In Touch
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold font-mono tracking-widest uppercase mb-4">Training Hub</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => handleLinkClick('courses')} className="hover:text-white transition-colors">
                  All Pricing Courses
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('tools')} className="hover:text-white transition-colors">
                  AI Tools We Teach
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('portfolio')} className="hover:text-white transition-colors">
                  Student Portfolios
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('results')} className="hover:text-white transition-colors">
                  Graduation Metrics
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold font-mono tracking-widest uppercase mb-4">Knowledge</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => handleLinkClick('resources')} className="hover:text-white transition-colors">
                  Free Prompts Guide
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('resources')} className="hover:text-white transition-colors">
                  AI Career Roadmaps
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('resources')} className="hover:text-white transition-colors">
                  Copywriting Templates
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('resources')} className="hover:text-white transition-colors">
                  AI Tools Directory
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-slate-900 py-6 flex flex-col md:flex-row items-center justify-between text-xs gap-4 mt-8">
          <div>
            <p className="text-slate-500">
              © {currentYear} Nodamy AI Academy. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6 text-slate-500">
            <button
              onClick={() => handlePolicyClick('Privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handlePolicyClick('Terms & Conditions')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span className="flex items-center gap-1 text-slate-600">
              <Shield size={12} /> SSL Secured
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
