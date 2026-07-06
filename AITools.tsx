import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Sparkles, HelpCircle, CheckCircle, ChevronRight } from 'lucide-react';
import { AI_TOOLS } from '../data';
import { AITool } from '../types';

export default function AITools() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Text & Logic', 'Design & Creative', 'Video & Audio', 'Development & No-Code', 'Automation'];

  const filteredTools = AI_TOOLS.filter((tool) => {
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.primaryUse.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-transparent font-sans text-slate-900 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Title Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600">The Technology Stack</span>
          <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-slate-950">
            AI Tools We Teach
          </h1>
          <p className="text-slate-500 text-sm">
            We don’t just teach you one tool. We train you on the world’s most advanced artificial intelligence models and sandbox environments so you can tackle any creative or technical client request.
          </p>
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white/40 backdrop-blur-xl border border-slate-150/50 rounded-3xl p-4 shadow-sm">
          {/* Categories select row */}
          <div className="flex flex-wrap gap-1.5 items-center justify-center md:justify-start w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-sm shadow-purple-100'
                    : 'bg-white border border-slate-200/60 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:max-w-xs">
            <input
              type="text"
              placeholder="Search tools or primary uses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-xl text-xs bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
            />
            <Search className="absolute left-3 top-2.5 text-slate-400" size={14} />
          </div>
        </div>

        {/* Tools Display Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredTools.map((tool) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                key={tool.id}
                className="group p-6 rounded-3xl bg-white/75 backdrop-blur-md border border-slate-100 shadow-sm hover:shadow-md hover:border-purple-150 transition-all text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-purple-50 border border-purple-100 text-purple-700 font-display font-extrabold flex items-center justify-center shadow-sm">
                        {tool.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-slate-950 text-base leading-tight">
                          {tool.name}
                        </h3>
                        <span className="text-[9px] font-mono font-semibold uppercase tracking-wider text-slate-400">
                          {tool.category}
                        </span>
                      </div>
                    </div>

                    <span className="bg-purple-50/50 border border-purple-100/30 text-purple-700 text-[9px] px-2 py-0.5 rounded-full font-semibold font-mono">
                      {tool.courseCovered.includes('Both') ? 'Core Stack' : 'Specialized'}
                    </span>
                  </div>

                  {/* Tool Description */}
                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    {tool.description}
                  </p>

                  {/* Highlight Specs */}
                  <div className="space-y-2 py-3 border-t border-slate-50 text-[11px]">
                    <div>
                      <p className="font-mono text-slate-400 text-[9px] uppercase tracking-wider">Primary Commercial Use:</p>
                      <p className="font-semibold text-slate-700 mt-0.5">{tool.primaryUse}</p>
                    </div>
                    <div>
                      <p className="font-mono text-slate-400 text-[9px] uppercase tracking-wider">Covered In Course:</p>
                      <p className="font-medium text-purple-600 mt-0.5">{tool.courseCovered}</p>
                    </div>
                  </div>

                  {/* Key Features Bullet List */}
                  <div className="border-t border-slate-50 pt-3">
                    <p className="font-mono text-slate-400 text-[9px] uppercase tracking-wider mb-2">Key Competencies:</p>
                    <div className="grid grid-cols-1 gap-1.5">
                      {tool.features.map((feat, idx) => (
                        <div key={idx} className="flex gap-2 items-center text-[10px] text-slate-600">
                          <CheckCircle className="text-emerald-500 shrink-0" size={12} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-50 flex justify-between items-center text-xs">
                  <span className="text-[10px] text-slate-400 font-mono">State: Production Tool</span>
                  <span className="text-purple-600 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Syllabus <ChevronRight size={12} />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic fallback if empty */}
        {filteredTools.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-100 max-w-md mx-auto space-y-4">
            <HelpCircle className="text-slate-400 mx-auto" size={40} />
            <div>
              <h4 className="font-bold text-slate-800 text-sm">No specific tools found</h4>
              <p className="text-xs text-slate-400 mt-1">Try modifying your search queries or selecting 'All' categories.</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
