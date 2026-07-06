import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle, Trophy, BarChart3, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { STATS } from '../data';

export default function StudentResults() {
  // Animated values state
  const [animatedStats, setAnimatedStats] = useState(
    STATS.map((s) => ({ ...s, currentValue: 0 }))
  );

  useEffect(() => {
    // Increment counters smoothly over 1.5s
    const duration = 1500;
    const steps = 30;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setAnimatedStats((prev) =>
        prev.map((s, idx) => {
          const target = STATS[idx].value;
          const increment = Math.ceil((target / steps) * step);
          return {
            ...s,
            currentValue: increment > target ? target : increment,
          };
        })
      );

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-transparent font-sans text-slate-900 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600">Performance Index</span>
          <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-slate-950">
            Student Outcomes & Success
          </h1>
          <p className="text-slate-500 text-sm">
            Read high-precision indicators documenting the active output, launch velocity, and commercial agency integrations of Nodamy AI Academy graduates.
          </p>
        </div>

        {/* Big Metrics Grid with animated counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {animatedStats.map((stat) => (
            <div
              key={stat.id}
              className="p-6 md:p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-slate-100 flex flex-col justify-between text-left space-y-4 hover:border-purple-150 transition-all hover:bg-white hover:shadow-md"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Verified Output</span>
                <div className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-slate-950 mt-1 flex items-baseline">
                  <span>{stat.prefix}</span>
                  <span>{stat.currentValue.toLocaleString()}</span>
                  <span className="text-purple-600">{stat.suffix}</span>
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-sm text-slate-900 leading-tight">
                  {stat.label}
                </h4>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white/40 backdrop-blur-xl border border-slate-150/50 rounded-3xl p-6 md:p-10 shadow-sm">
          <div className="lg:col-span-4 flex justify-center">
            {/* Visual Certificate Graphic Mockup */}
            <div className="relative aspect-[4/3] w-full max-w-xs bg-white rounded-2xl shadow-lg border-8 border-slate-900 p-4 text-center flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 w-full h-full opacity-5 pointer-events-none">
                <svg width="100%" height="100%">
                  <pattern id="cert-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="1.5" fill="#000" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#cert-pattern)" />
                </svg>
              </div>

              <div className="border border-slate-200 p-3.5 h-full flex flex-col justify-between">
                <div>
                  <span className="text-[8px] font-mono tracking-wider text-slate-400 uppercase">NODAMY AI ACADEMY</span>
                  <h4 className="font-display font-black text-slate-950 text-xs mt-1">CERTIFICATE OF COMPLETION</h4>
                  <div className="w-10 h-0.5 bg-purple-600 mx-auto my-1.5" />
                </div>

                <div>
                  <p className="text-[7px] text-slate-400 italic">This credential is formally awarded to</p>
                  <p className="font-display font-bold text-slate-950 text-[11px] mt-0.5">GRADUATED STUDENT</p>
                  <p className="text-[6px] text-slate-500 max-w-[180px] mx-auto mt-1 leading-normal">
                    for successfully mastering Prompt Engineering, Content Automation pipelines, and graduating the Portfolio Defense boards.
                  </p>
                </div>

                <div className="flex justify-between items-end pt-2">
                  <div className="text-left">
                    <div className="w-12 h-px bg-slate-300" />
                    <p className="text-[5px] text-slate-400 mt-1">NNEKA MADUBUIKE<br />Principal Instructor</p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center">
                    <Trophy size={10} className="text-emerald-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 text-left space-y-4">
            <div className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border border-emerald-100">
              <Award size={11} /> Graduation Credentialing Program
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-950">
              Get Certified Upon Successful Portfolio Launch
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-light">
              Nodamy AI Academy is dedicated to active capability. We do not issue credentials simply for playing videos in the background. Students receive our prestigious **Certificate of Completion** only after:
            </p>

            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex gap-2.5 items-start">
                <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={14} />
                <span><strong className="text-slate-800">100% Core Course Attendance</strong>: Completing all interactive online instruction modules and training workshops.</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={14} />
                <span><strong className="text-slate-800">8 Practical Lab Exercises</strong>: Creating and refining functional image models, video cuts, and copy blocks.</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={14} />
                <span><strong className="text-slate-800">Active Portfolio Defense</strong>: Publishing your custom student showcase containing 8+ vetted client-ready project assets.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Outcomes call-out box */}
        <div className="bg-gradient-to-r from-purple-900 to-indigo-950 text-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center text-left gap-6 shadow-xl shadow-purple-950/20">
          <div>
            <h4 className="font-display font-bold text-lg text-white">Join Our Elite Class of Graduates</h4>
            <p className="text-xs text-slate-400 mt-1 font-light max-w-lg">
              94% of Nodamy graduates successfully land international freelance contracts or monetize digital templates within 45 days of graduation. Secure your workspace now.
            </p>
          </div>
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-white hover:bg-slate-100 text-slate-950 text-xs font-bold py-3.5 px-6 rounded-2xl transition-all flex items-center gap-1.5 shrink-0 cursor-pointer shadow-md"
          >
            Enroll in Masterclass <ArrowRight size={13} />
          </button>
        </div>

      </div>
    </div>
  );
}
