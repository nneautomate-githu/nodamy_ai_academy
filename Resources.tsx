import React from 'react';
import { motion } from 'motion/react';
import { Download, FileText, Compass, Sparkles, BookOpen, Layers } from 'lucide-react';
import { RESOURCES } from '../data';
import { DownloadableResource } from '../types';

interface ResourcesProps {
  onDownloadClick: (resource: DownloadableResource) => void;
}

export default function Resources({ onDownloadClick }: ResourcesProps) {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-transparent font-sans text-slate-900 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Title Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600">Free Knowledge Vault</span>
          <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-slate-950">
            Free Resources
          </h1>
          <p className="text-slate-500 text-sm">
            Bypass expensive entry fees. Get started immediately with our copy-paste prompt formulas, career frameworks, and vetted tool lists. Zero obligation.
          </p>
        </div>

        {/* Resources Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RESOURCES.map((res) => (
            <div
              key={res.id}
              className="p-6 md:p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-slate-100/80 hover:border-purple-150 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between text-left group"
            >
              <div className="space-y-5">
                {/* Card Header indicator */}
                <div className="flex justify-between items-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-purple-50 text-purple-700">
                    <Sparkles size={11} /> Free {res.type}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    File: PDF ({res.size})
                  </span>
                </div>

                {/* Info block */}
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-slate-950 text-xl leading-snug group-hover:text-purple-600 transition-colors">
                    {res.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    {res.description}
                  </p>
                </div>

                {/* Topics outline box */}
                <div className="bg-white/80 border border-slate-200/50 rounded-2xl p-4 space-y-2">
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold">What’s inside this guide:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
                    {res.topicsCovered.map((topic, i) => (
                      <li key={i} className="flex gap-2 items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action row */}
              <div className="pt-6 mt-6 border-t border-slate-200/50 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-[10px] text-slate-400 font-mono">
                  Downloads: {res.downloadsCount.toLocaleString()}+ copies
                </span>
                <button
                  onClick={() => onDownloadClick(res)}
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-2.5 px-5 rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                  id={`download-btn-${res.id}`}
                >
                  Download Free PDF <Download size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Support disclaimer box */}
        <div className="max-w-2xl mx-auto p-6 bg-purple-50/50 rounded-3xl border border-purple-100/30 flex items-start gap-4 text-left shadow-sm">
          <BookOpen size={20} className="text-purple-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h5 className="font-display font-bold text-slate-900 text-sm">Need More Guidance?</h5>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              Our free resources are compiled as dynamic baseline assets. If you require expert validation, live workspace troubleshooting, or corporate consulting, we suggest reviewing our full pricing courses or booking a direct consultation.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
