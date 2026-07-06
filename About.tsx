import React from 'react';
import { motion } from 'motion/react';
import { Target, BookOpen, Compass, Award, Star, Heart, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-transparent font-sans text-slate-900 relative">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Title Header */}
        <div className="text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-50 text-purple-700 border border-purple-100">
            Learn AI. Create Faster. Earn Smarter.
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-slate-950">
            Meet Nodamy AI Academy
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Vision & Mission Core Block */}
        <div className="bg-white/40 backdrop-blur-xl border border-slate-150/50 rounded-3xl p-6 md:p-10 space-y-6 shadow-sm">
          <h3 className="text-xl md:text-2xl font-display font-bold text-slate-950 flex items-center gap-2.5">
            <Target className="text-purple-600 shrink-0" size={24} /> Our Mission
          </h3>
          <p className="text-base md:text-lg text-slate-700 font-light leading-relaxed">
            Helping students, freelancers, entrepreneurs, professionals, and businesses master practical AI skills that increase productivity, create professional digital content, and generate new income opportunities.
          </p>
          <div className="border-t border-slate-200/50 pt-6">
            <p className="text-sm text-slate-600 leading-relaxed">
              We simplify Artificial Intelligence by teaching practical, hands-on skills that anyone can learn. Our training focuses on real-world applications, helping students create content, build digital products, grow businesses, and unlock new income opportunities using AI.
            </p>
          </div>
        </div>

        {/* Three Core Pillars of Learning */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold font-mono tracking-widest text-purple-600 text-center uppercase">Our Educational Pillars</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
                01
              </div>
              <h4 className="font-display font-bold text-slate-900 text-base">Absolute Simplicity</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                We banish mathematical formulas and academic papers. We open standard web tools immediately, instructing in simple, conversational English.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
                02
              </div>
              <h4 className="font-display font-bold text-slate-900 text-base">Direct Realism</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Every prompt, canvas edit, or code template must result in a tangible commercial asset. We practice on active, realistic business briefs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                03
              </div>
              <h4 className="font-display font-bold text-slate-900 text-base">Career Alignment</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                We believe learning is useless without financial outcome. We provide rigorous training in Upwork proposals, pricing strategies, and template sales.
              </p>
            </div>
          </div>
        </div>

        {/* Lead Educator Bio */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white/40 backdrop-blur-xl border border-slate-150/50 p-6 md:p-8 rounded-3xl shadow-sm">
          <div className="md:col-span-4 flex justify-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300"
                alt="Nneka Madubuike"
                referrerPolicy="no-referrer"
                className="w-44 h-44 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <span className="absolute bottom-1 right-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-[9px] font-mono font-bold py-1 px-2.5 rounded-full shadow">
                Lead Trainer
              </span>
            </div>
          </div>
          <div className="md:col-span-8 text-left space-y-3">
            <p className="text-xs font-mono font-bold text-purple-600 uppercase tracking-widest">Lead Educator Profile</p>
            <h3 className="text-xl md:text-2xl font-display font-extrabold text-slate-950">Nneka Madubuike</h3>
            <p className="text-xs font-semibold text-slate-500">Founder & Principal AI Instructor, Nodamy AI Academy</p>
            <p className="text-xs text-slate-600 leading-relaxed font-light">
              Nneka Madubuike is an accomplished digital content architect, AI workflow advisor, and veteran educator. Her mission is to democratize high-technology systems—empowering professionals across the global south to command premium rates and automate repetitive operational bottlenecks.
            </p>
            <div className="flex flex-wrap gap-2 pt-1.5">
              <span className="bg-white border border-slate-200 text-slate-700 text-[10px] px-2.5 py-1 rounded-md font-semibold">
                Prompt Architect
              </span>
              <span className="bg-white border border-slate-200 text-slate-700 text-[10px] px-2.5 py-1 rounded-md font-semibold">
                No-Code Pioneer
              </span>
              <span className="bg-white border border-slate-200 text-slate-700 text-[10px] px-2.5 py-1 rounded-md font-semibold">
                Creative Director
              </span>
            </div>
          </div>
        </div>

        {/* Student Promises Accordion/List */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold font-mono text-slate-900 uppercase tracking-wide text-center">The Nodamy Student Covenant</h3>
          <div className="space-y-3">
            <div className="p-4 bg-white border border-slate-100 rounded-xl flex gap-3 items-start shadow-sm">
              <CheckCircle2 className="text-purple-600 shrink-0 mt-0.5" size={16} />
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                <span className="font-bold text-slate-800">No student gets left behind.</span> Our private community forums are constantly active to answer your questions, resolve tool errors, and review prompt scripts.
              </p>
            </div>
            <div className="p-4 bg-white border border-slate-100 rounded-xl flex gap-3 items-start shadow-sm">
              <CheckCircle2 className="text-purple-600 shrink-0 mt-0.5" size={16} />
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                <span className="font-bold text-slate-800">Always learning the state-of-the-art.</span> In the fast-moving AI sector, we update our curriculum templates weekly, ensuring you are using model releases before they make headlines.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
