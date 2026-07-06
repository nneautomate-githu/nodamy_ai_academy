import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, Sparkles, Check, Play, Zap, FileText, Download, MessageSquare, 
  Terminal, Image as ImageIcon, Video, Music, Mic, Globe, Smartphone, Users, Tv, Coins,
  TrendingUp, Star, Award, ChevronRight, Briefcase, HelpCircle, Shield, Phone, Mail,
  Laptop, FolderKanban, Smile, LayoutGrid, Milestone, Cpu
} from 'lucide-react';
import { COURSES, WHAT_YOU_LEARN, AI_TOOLS, PORTFOLIO, STATS, ADVANTAGES, TESTIMONIALS } from '../data';
import { Course, PortfolioProject } from '../types';

interface HomeProps {
  onPageChange: (pageId: string) => void;
  onEnrollClick: (course: Course) => void;
  onProjectClick: (project: PortfolioProject) => void;
}

export default function Home({ onPageChange, onEnrollClick, onProjectClick }: HomeProps) {
  // Counters animation state simulation
  const [activeCounter, setActiveCounter] = useState(false);

  useEffect(() => {
    setActiveCounter(true);
  }, []);

  return (
    <div className="pt-24 font-sans bg-transparent text-slate-900 overflow-hidden relative">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center py-16 px-4 sm:px-6 lg:px-8 bg-transparent border-b border-slate-100/50">
        {/* Glow ambient background assets */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-purple-200/40 rounded-full filter blur-[100px] -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-blue-200/30 rounded-full filter blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-50 text-purple-700 border border-purple-100"
            >
              <Sparkles size={12} className="animate-spin" /> Next-Generation Practical AI Academy
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-slate-950 leading-[1.05]"
            >
              Master Practical AI Skills That Help You{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500">
                Create, Build, and Earn
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-2xl"
            >
              Join Nodamy AI Academy and learn practical AI skills that help you create professional content, build AI-powered websites and apps, increase productivity, and monetize your digital skills.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button
                onClick={() => {
                  onPageChange('courses');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-slate-950 hover:bg-slate-900 text-white font-bold py-4 px-8 rounded-2xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                id="hero-enroll-btn"
              >
                Enroll Now <ArrowRight size={16} />
              </button>
              <button
                onClick={() => {
                  onPageChange('portfolio');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white hover:bg-slate-50 text-slate-900 font-bold py-4 px-8 rounded-2xl text-sm border border-slate-200 transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                id="hero-portfolio-btn"
              >
                View Portfolio <Award size={16} className="text-slate-500" />
              </button>
            </motion.div>

            {/* Quick trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-100 max-w-lg"
            >
              <div>
                <p className="font-display font-extrabold text-slate-950 text-xl">100%</p>
                <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Practical Focus</p>
              </div>
              <div>
                <p className="font-display font-extrabold text-slate-950 text-xl">No-Code</p>
                <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Zero Code Experience Required</p>
              </div>
              <div>
                <p className="font-display font-extrabold text-slate-950 text-xl">45 Days</p>
                <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Launch Timeline</p>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* SVG-based SaaS tech artwork */}
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-slate-50 border border-slate-100/80 p-6 flex flex-col justify-between overflow-hidden shadow-xl shadow-slate-100">
              {/* Circuit background accent lines */}
              <svg className="absolute inset-0 w-full h-full -z-10 opacity-30" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="200" r="120" stroke="#c7d2fe" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                <path d="M 0 100 Q 150 150 400 100" stroke="#818cf8" strokeWidth="1.5" fill="none" />
                <path d="M 50 400 Q 250 250 350 0" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
              </svg>

              {/* Top Row: Generative Art Indicator */}
              <div className="flex justify-between items-center bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-slate-200/50 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                    N
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Prompt Optimizer</p>
                    <p className="text-[9px] font-mono text-emerald-500">SYSTEM: ONLINE</p>
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                </div>
              </div>

              {/* Center: Interactive Creative AI Generator Card */}
              <div className="my-6 p-5 rounded-2xl glass-panel border border-white shadow-lg space-y-4">
                <div className="space-y-1.5">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-600">Dynamic prompt pipeline</p>
                  <p className="text-sm font-semibold text-slate-800 leading-snug bg-slate-50 p-3 rounded-xl border border-slate-100 font-mono">
                    "cinematic photo of a modern African digital artist working in studio, neon purple lighting, 8k resolution, photorealistic"
                  </p>
                </div>

                <div className="flex gap-2.5">
                  <span className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] px-2.5 py-1 rounded-md font-mono font-semibold">
                    #Midjourney v6
                  </span>
                  <span className="bg-purple-50 border border-purple-100 text-purple-700 text-[10px] px-2.5 py-1 rounded-md font-mono font-semibold">
                    #HyperRealism
                  </span>
                </div>

                {/* Simulated Generator Slider and Action */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                    <span className="text-[10px] text-slate-400 font-mono">Inference Time: 1.2s</span>
                  </div>
                  <div className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white py-1 px-3.5 rounded-lg text-[10px] font-bold shadow-sm transition-all cursor-pointer">
                    Generate Asset
                  </div>
                </div>
              </div>

              {/* Bottom Row: AI tools list simulation */}
              <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-bold text-slate-500">
                <div className="bg-white border border-slate-200/50 p-2.5 rounded-xl shadow-sm hover:border-purple-200 hover:text-purple-600 transition-all">
                  Claude
                </div>
                <div className="bg-white border border-slate-200/50 p-2.5 rounded-xl shadow-sm hover:border-purple-200 hover:text-purple-600 transition-all">
                  Midjourney
                </div>
                <div className="bg-white border border-slate-200/50 p-2.5 rounded-xl shadow-sm hover:border-purple-200 hover:text-purple-600 transition-all">
                  Runway
                </div>
                <div className="bg-white border border-slate-200/50 p-2.5 rounded-xl shadow-sm hover:border-purple-200 hover:text-purple-600 transition-all">
                  Lovable
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. MEET NODAMY AI ACADEMY */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-50 bg-transparent">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* About graphic Left */}
          <div className="lg:col-span-5 relative flex justify-center order-last lg:order-first">
            <div className="p-8 bg-white/80 backdrop-blur-md rounded-3xl border border-slate-100 max-w-md w-full relative shadow-sm">
              <div className="absolute -top-4 -right-4 bg-purple-600 text-white p-3.5 rounded-2xl shadow-lg">
                <Sparkles size={20} />
              </div>

              <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-600 mb-2">Our Core Mission</p>
              <h4 className="text-xl font-display font-extrabold text-slate-950 mb-3">Empowering Human Capability</h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                Artificial Intelligence is changing the global economy. Those who learn to direct these models will replace those who do not. We bypass dense algorithms and tech jargon to deliver pure practical capabilities.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-sm shrink-0">
                    <Check size={16} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">Learn to Execute</h5>
                    <p className="text-[10px] text-slate-400 mt-0.5">Hands-on creation from minute one.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-sm shrink-0">
                    <Check size={16} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">Generate Income</h5>
                    <p className="text-[10px] text-slate-400 mt-0.5">Monetize digital assets immediately.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Text Right */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600">About the Academy</span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950">
                Meet Nodamy AI Academy
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              We simplify Artificial Intelligence by teaching practical, hands-on skills that anyone can learn. Our training focuses on real-world applications, helping students create content, build digital products, grow businesses, and unlock new income opportunities using AI.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white/70 backdrop-blur-sm border border-slate-100 rounded-2xl">
                <h4 className="font-bold text-slate-900 text-sm">Simplifying Complex Systems</h4>
                <p className="text-xs text-slate-500 mt-1">We translate intimidating algorithms into visual templates and drag-and-drop operations.</p>
              </div>
              <div className="p-4 bg-white/70 backdrop-blur-sm border border-slate-100 rounded-2xl">
                <h4 className="font-bold text-slate-900 text-sm">Converting Action to Income</h4>
                <p className="text-xs text-slate-500 mt-1">Every curriculum pathway finishes with active freelance pitching, client contracts, and product launches.</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  onPageChange('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 font-bold text-purple-600 hover:text-purple-700 text-sm transition-all"
                id="about-learn-more-btn"
              >
                Learn More About Our Philosophy <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR TRAINING PROGRAMS (Pricing Cards) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent border-b border-slate-50">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600">Pricing & Programs</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950">
              Our Training Programs
            </h2>
            <p className="text-slate-500 text-sm">
              Choose the learning pathway that fits your aspirations. Select from creative masterclasses, pro engineering setups, or tailored private advisory.
            </p>
          </div>

          {/* Pricing cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COURSES.map((course) => (
              <div
                key={course.id}
                className={`relative rounded-3xl bg-white p-6 md:p-8 border transition-all flex flex-col justify-between ${
                  course.isPopular
                    ? 'border-purple-500 shadow-xl shadow-purple-100/50 ring-1 ring-purple-500/30 -translate-y-2'
                    : 'border-slate-100 bg-white/75 backdrop-blur-md shadow-sm hover:shadow-md hover:border-slate-200'
                }`}
              >
                {course.isPopular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-[10px] font-bold tracking-wider px-3.5 py-1.5 rounded-full uppercase shadow-md">
                    Recommended
                  </span>
                )}

                <div className="space-y-4 text-left">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-mono font-semibold uppercase tracking-wide bg-slate-100 text-slate-700">
                      {course.suitability}
                    </span>
                    <h3 className="text-xl font-display font-extrabold text-slate-950 mt-2 leading-tight">
                      {course.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    {course.description}
                  </p>

                  {/* Divider */}
                  <div className="border-t border-slate-100 pt-4">
                    <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wide mb-2.5">
                      Syllabus Topics Include:
                    </p>
                    <ul className="space-y-2">
                      {course.topics.map((topic, i) => (
                        <li key={i} className="flex gap-2.5 items-start text-xs text-slate-600">
                          <Check className="text-purple-600 shrink-0 mt-0.5" size={13} />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Price and Action Section */}
                <div className="pt-6 mt-6 border-t border-slate-100 text-left space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-black text-slate-950 text-2xl md:text-3xl">
                      ₦{course.price}
                    </span>
                    {course.originalPrice && (
                      <span className="text-xs text-slate-400 line-through">
                        ₦{course.originalPrice}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onEnrollClick(course)}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      course.isPopular
                        ? 'bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white shadow-md shadow-purple-100/50 hover:shadow-lg'
                        : 'bg-slate-950 hover:bg-slate-900 text-white'
                    }`}
                    id={`enroll-btn-${course.id}`}
                  >
                    {course.ctaText} <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT YOU'LL LEARN */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent border-b border-slate-50">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600">Curriculum Breadth</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950">
              What You'll Learn
            </h2>
            <p className="text-slate-500 text-sm">
              Our training structure is designed to load your personal digital arsenal with practical capabilities across content creation, app prototyping, automation, and global business strategies.
            </p>
          </div>

          {/* Grid of learn features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {WHAT_YOU_LEARN.map((item, idx) => (
              <div 
                key={item.id}
                className="p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-100 text-left transition-all hover:bg-white hover:border-purple-200 hover:shadow-md hover:-translate-y-0.5 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-100/50 text-purple-700 flex items-center justify-center mb-4 transition-all group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-500 group-hover:text-white shrink-0">
                    {idx === 0 && <Terminal size={16} />}
                    {idx === 1 && <ImageIcon size={16} />}
                    {idx === 2 && <Video size={16} />}
                    {idx === 3 && <Music size={16} />}
                    {idx === 4 && <Mic size={16} />}
                    {idx === 5 && <MessageSquare size={16} />}
                    {idx === 6 && <Sparkles size={16} />}
                    {idx === 7 && <Zap size={16} />}
                    {idx === 8 && <Globe size={16} />}
                    {idx === 9 && <Smartphone size={16} />}
                    {idx === 10 && <Users size={16} />}
                    {idx === 11 && <Tv size={16} />}
                    {idx === 12 && <Award size={16} />}
                    {idx === 13 && <Briefcase size={16} />}
                    {idx === 14 && <Coins size={16} />}
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AI TOOLS WE TEACH */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent border-b border-slate-50">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600">The Modern Stack</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950">
              AI Tools We Teach
            </h2>
            <p className="text-slate-500 text-sm">
              Never get locked into a single ecosystem. We instruct on 15+ world-class generative AI frameworks and sandbox workspaces.
            </p>
          </div>

          {/* Grid of tools */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
            {AI_TOOLS.map((tool) => (
              <div
                key={tool.id}
                className="p-4 rounded-xl bg-white/80 backdrop-blur-md border border-slate-100 shadow-sm flex flex-col justify-between items-center text-center hover:border-purple-200 hover:shadow-md transition-all cursor-pointer"
                onClick={() => {
                  onPageChange('tools');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-sm mb-3">
                  {tool.name.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">{tool.name}</h4>
                  <span className="text-[9px] text-slate-400 font-mono mt-0.5 inline-block">{tool.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STUDENT PORTFOLIO HIGHLIGHTS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent border-b border-slate-50">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 text-left">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600">Creative Outputs</span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950">
                Student Portfolio Highlight
              </h2>
              <p className="text-slate-500 text-sm max-w-xl">
                Behold genuine assets, visuals, films, and live web apps built entirely by our masterclass students using advanced prompt directives and no-code builders.
              </p>
            </div>
            <button
              onClick={() => {
                onPageChange('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-slate-950 hover:bg-slate-900 text-white font-bold py-3 px-6 rounded-xl text-xs transition-all flex items-center gap-1.5 shrink-0 self-start md:self-end cursor-pointer"
              id="view-all-portfolio-home-btn"
            >
              Explore Full Gallery <ArrowRight size={14} />
            </button>
          </div>

          {/* Quick portfolio gallery (First 3 items) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PORTFOLIO.slice(0, 3).map((proj) => (
              <div
                key={proj.id}
                className="group rounded-2xl overflow-hidden border border-slate-100 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-md transition-all flex flex-col text-left cursor-pointer"
                onClick={() => onProjectClick(proj)}
              >
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-slate-900 text-[9px] font-bold font-mono px-2.5 py-0.5 rounded-full shadow-sm">
                    {proj.category}
                  </span>
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <p className="text-[10px] font-mono text-purple-600 font-bold">Creator: {proj.studentName}</p>
                    <h3 className="font-display font-bold text-slate-950 text-base leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-light line-clamp-2">
                      {proj.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1 max-w-[70%]">
                      {proj.toolsUsed.slice(0, 2).map((t, idx) => (
                        <span key={idx} className="bg-slate-50 text-slate-500 text-[8px] font-mono px-1.5 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-purple-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      View <ChevronRight size={12} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. STUDENT SUCCESS STATS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto space-y-16 text-center">
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">Proven Metrics</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
              Student Outcomes & Success
            </h2>
            <p className="text-slate-400 text-sm">
              Our graduates aren’t just learning AI—they are building businesses, optimizing agencies, and commanding premium client fees.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {STATS.map((stat) => (
              <div
                key={stat.id}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2 hover:border-white/20 transition-all"
              >
                <div className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white">
                  {stat.prefix}
                  {stat.value.toLocaleString()}
                  {stat.suffix}
                </div>
                <h4 className="font-bold text-slate-100 text-xs sm:text-sm tracking-wide">
                  {stat.label}
                </h4>
                <p className="text-[10px] text-slate-400 leading-normal font-light">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE NODAMY */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent border-b border-slate-50">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600">The Nodamy Advantage</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950">
              Why Choose Nodamy AI Academy
            </h2>
            <p className="text-slate-500 text-sm">
              We stand apart from standard theoretic courses. Discover how our practical structures, portfolio pipelines, and active client strategies yield immediate transformation.
            </p>
          </div>

          {/* Grid of benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ADVANTAGES.map((adv, idx) => (
              <div
                key={adv.id}
                className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-100 text-left hover:bg-white hover:border-purple-200 hover:shadow-md transition-all flex gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  {idx === 0 && <Laptop size={18} />}
                  {idx === 1 && <FolderKanban size={18} />}
                  {idx === 2 && <Smile size={18} />}
                  {idx === 3 && <Cpu size={18} />}
                  {idx === 4 && <LayoutGrid size={18} />}
                  {idx === 5 && <Briefcase size={18} />}
                  {idx === 6 && <HelpCircle size={18} />}
                  {idx === 7 && <Users size={18} />}
                  {idx === 8 && <Milestone size={18} />}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">{adv.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">{adv.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent border-b border-slate-50">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600">Alumni Reviews</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950">
              What Our Students Say
            </h2>
            <p className="text-slate-500 text-sm">
              Read authentic feedback from working designers, brand creators, and corporate leads who scaled their performance using our frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="p-6 rounded-3xl bg-white/80 backdrop-blur-md border border-slate-100 shadow-sm flex flex-col justify-between text-left relative"
              >
                <div className="space-y-4">
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 italic leading-relaxed font-light">
                    "{test.review}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 mt-6 pt-4 border-t border-slate-50">
                  <img
                    src={test.avatarUrl}
                    alt={test.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-slate-100"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs">{test.name}</h4>
                    <p className="text-[10px] text-slate-400 leading-tight mt-0.5">{test.role}</p>
                    {test.company && <p className="text-[9px] text-purple-500 font-semibold font-mono">{test.company}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQS & FREE RESOURCES LINK (Teaser block) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-blue-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl shadow-purple-500/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16" />
          
          <div className="relative space-y-6 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-semibold bg-white/10 text-purple-200">
              <Zap size={11} className="animate-bounce" /> Free Resources & FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold">
              Accelerate Your Learning Curves Completely Free
            </h2>
            <p className="text-slate-100 text-xs sm:text-sm leading-relaxed font-light">
              Do you have technical questions or want to sample our prompt resources? Download our Free Copy-Paste Prompt Guides, view the learning roadmap, or review our detailed FAQ catalog.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={() => {
                  onPageChange('resources');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white hover:bg-slate-50 text-purple-700 font-bold py-3.5 px-6 rounded-2xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                id="home-free-resources-btn"
              >
                Grab Free Resources <Download size={14} />
              </button>
              <button
                onClick={() => {
                  onPageChange('faq');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-6 rounded-2xl text-xs border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                id="home-faq-btn"
              >
                Read FAQs <HelpCircle size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 11. STRONG CONVERSION CALL TO ACTION */}
      <section className="py-16 bg-transparent border-t border-slate-100/50 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-5">
          <h2 className="text-2xl md:text-3xl font-display font-black text-slate-950">
            Ready to Begin? Start Learning Now
          </h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed">
            Secure your seat today, gain instant access to our interactive discord workspace, and master prompt engineering under professional AI trainers.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                onPageChange('courses');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white text-xs font-bold px-8 py-3.5 rounded-full transition-all flex items-center gap-1.5 mx-auto hover:shadow-lg cursor-pointer"
              id="cta-start-learning-btn"
            >
              Get Started & Browse Courses <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
