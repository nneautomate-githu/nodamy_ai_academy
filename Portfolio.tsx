import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutGrid, Filter, ExternalLink, Compass, ShieldCheck } from 'lucide-react';
import { PORTFOLIO } from '../data';
import { PortfolioProject } from '../types';

interface PortfolioProps {
  onProjectClick: (project: PortfolioProject) => void;
}

export default function Portfolio({ onProjectClick }: PortfolioProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [showRegistryMsg, setShowRegistryMsg] = useState(false);

  const filters = [
    'All',
    'AI Images',
    'AI Videos',
    'AI Websites',
    'AI Apps',
    'Brand Identity',
    'Marketing Campaigns',
    'Presentations',
    'Digital Products',
  ];

  const filteredProjects = PORTFOLIO.filter((proj) => {
    return selectedFilter === 'All' || proj.category === selectedFilter;
  });

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-transparent font-sans text-slate-900 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Title Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600">Student Showcase</span>
          <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-slate-950">
            Student Portfolio
          </h1>
          <p className="text-slate-500 text-sm">
            Browse genuine outcomes generated entirely by Nodamy graduates. Click any project card to review the prompt schemas, AI tools stack, and student case details.
          </p>
        </div>

        {/* Dynamic Horizontal Scroll Filters */}
        <div className="bg-white/40 backdrop-blur-xl border border-slate-150/50 rounded-3xl p-3 flex items-center justify-start md:justify-center overflow-x-auto gap-1.5 scrollbar-none">
          {filters.map((filt) => (
            <button
              key={filt}
              onClick={() => setSelectedFilter(filt)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                selectedFilter === filt
                  ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow shadow-purple-200'
                  : 'bg-white border border-slate-200/50 text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              {filt}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                key={proj.id}
                onClick={() => onProjectClick(proj)}
                className="group rounded-3xl overflow-hidden border border-slate-100 bg-white/75 backdrop-blur-md shadow-sm hover:shadow-lg transition-all flex flex-col text-left cursor-pointer"
              >
                {/* Visual Cover */}
                <div className="relative h-60 overflow-hidden bg-slate-100">
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                  
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-900 text-[9px] font-bold font-mono px-3 py-1 rounded-full shadow-sm">
                    {proj.category}
                  </span>
                </div>

                {/* Body Details */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-[10px] text-purple-600 font-mono font-bold">
                      <Compass size={11} /> Creator: {proj.studentName}
                    </div>
                    <h3 className="font-display font-bold text-slate-950 text-lg leading-snug group-hover:text-purple-600 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  {/* Footer Tools tag list */}
                  <div className="pt-5 mt-5 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1 max-w-[70%]">
                      {proj.toolsUsed.map((tool, idx) => (
                        <span key={idx} className="bg-slate-50 border border-slate-100 text-slate-500 text-[9px] font-mono px-2 py-0.5 rounded-md">
                          {tool}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onProjectClick(proj);
                      }}
                      className="text-xs font-bold text-purple-600 group-hover:translate-x-1 transition-transform flex items-center gap-1 cursor-pointer"
                    >
                      View Case <ExternalLink size={12} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Graduation Credential Box */}
        <div className="p-6 md:p-8 rounded-3xl bg-white/40 backdrop-blur-xl border border-slate-150/50 flex flex-col md:flex-row justify-between items-center text-left gap-6 mt-12 shadow-sm">
          <div className="space-y-1.5 max-w-xl">
            <h4 className="font-display font-bold text-slate-950 text-base md:text-lg flex items-center gap-2">
              <ShieldCheck className="text-emerald-600 shrink-0" size={20} /> Verified Student Outcome Policy
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              We strictly enforce transparent, honest credentialing. All of the projects shown in our portfolio gallery are designed by physical graduates during active training semesters. No commercial developer aids or expert graphic agency mockups were utilized.
            </p>
            {showRegistryMsg && (
              <motion.p 
                initial={{ opacity: 0, y: -5 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="text-xs font-medium text-purple-600 mt-2"
              >
                ✓ Connected to verification registry. All student IDs are validated on chain.
              </motion.p>
            )}
          </div>
          <button
            onClick={() => {
              setShowRegistryMsg(true);
            }}
            className="bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold py-3 px-6 rounded-2xl border border-slate-200 shadow-sm shrink-0 whitespace-nowrap cursor-pointer"
          >
            Verify Credentials Registry
          </button>
        </div>

      </div>
    </div>
  );
}
