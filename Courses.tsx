import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, ShieldCheck, HelpCircle, Lock, Users, Sparkles, BookOpen } from 'lucide-react';
import { COURSES } from '../data';
import { Course } from '../types';

interface CoursesProps {
  onEnrollClick: (course: Course) => void;
  onPageChange: (pageId: string) => void;
}

export default function Courses({ onEnrollClick, onPageChange }: CoursesProps) {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-transparent font-sans text-slate-900 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600">Syllabus & Pricing</span>
          <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-slate-950">
            Our Training Programs
          </h1>
          <p className="text-slate-500 text-sm">
            Whether you are a complete beginner aiming to create gorgeous digital art, or an advanced professional seeking to automate software building, we have an elite structured pathway for you.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className={`relative rounded-3xl bg-white/70 backdrop-blur-md p-6 md:p-8 border transition-all flex flex-col justify-between ${
                course.isPopular
                  ? 'border-purple-500 shadow-xl shadow-purple-100/75 ring-1 ring-purple-500/30 -translate-y-2'
                  : 'border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200'
              }`}
            >
              {course.isPopular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-[10px] font-bold tracking-wider px-3.5 py-1.5 rounded-full uppercase shadow-md shadow-purple-200/50">
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
                      ? 'bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white shadow-md shadow-purple-150'
                      : 'bg-slate-950 hover:bg-slate-900 text-white shadow-sm'
                  }`}
                  id={`courses-enroll-btn-${course.id}`}
                >
                  {course.ctaText} <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Comparison Matrix */}
        <div className="border border-slate-150/50 rounded-3xl bg-white/40 backdrop-blur-xl p-6 md:p-8 space-y-6 shadow-sm">
          <div className="text-center md:text-left space-y-1.5">
            <h3 className="text-lg font-display font-bold text-slate-900 flex items-center gap-2 justify-center md:justify-start">
              <BookOpen size={18} className="text-purple-600" /> Package Comparison
            </h3>
            <p className="text-xs text-slate-500">Unsure which masterclass is suitable for you? Use our simple matrix comparison below.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 px-2 text-slate-500 font-mono uppercase font-bold tracking-wider">Features</th>
                  <th className="py-3 px-2 font-display font-bold text-slate-900">AI Content Creator</th>
                  <th className="py-3 px-2 font-display font-bold text-slate-900">AI Creator Pro</th>
                  <th className="py-3 px-2 font-display font-bold text-purple-700">Private VIP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3.5 px-2 font-medium text-slate-800">Primary Focus</td>
                  <td className="py-3.5 px-2 text-slate-500">Visual content, logo/flyer design, marketing mockups</td>
                  <td className="py-3.5 px-2 text-slate-500">No-code web development, custom AI apps, script writing</td>
                  <td className="py-3.5 px-2 text-slate-500">Custom workflow audit, tailored executive coaching</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-2 font-medium text-slate-800">Syllabus Depth</td>
                  <td className="py-3.5 px-2 text-slate-500">11 comprehensive topics</td>
                  <td className="py-3.5 px-2 text-slate-500">10 high-value tech topics</td>
                  <td className="py-3.5 px-2 text-purple-600 font-semibold">Custom tailormade curriculum</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-2 font-medium text-slate-800">Prerequisite Device</td>
                  <td className="py-3.5 px-2 text-slate-500 font-semibold">Modern Smartphone enough</td>
                  <td className="py-3.5 px-2 text-slate-500 font-semibold">Laptop (Mac/Win) recommended</td>
                  <td className="py-3.5 px-2 text-slate-500">Laptop recommended</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-2 font-medium text-slate-800">Coaching Layout</td>
                  <td className="py-3.5 px-2 text-slate-500">Interactive peer workshops</td>
                  <td className="py-3.5 px-2 text-slate-500">Interactive peer workshops</td>
                  <td className="py-3.5 px-2 text-purple-600 font-semibold">Strictly 1-on-1 private sessions</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-2 font-medium text-slate-800">Graduation Asset</td>
                  <td className="py-3.5 px-2 text-slate-500">Portfolio visual mockup set</td>
                  <td className="py-3.5 px-2 text-slate-500">Active live website & custom app</td>
                  <td className="py-3.5 px-2 text-slate-500">Corporate system integration</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Safe Checkout trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4 rounded-xl border border-slate-100 flex flex-col items-center">
            <ShieldCheck className="text-emerald-500 mb-2" size={24} />
            <h4 className="font-bold text-xs text-slate-800">SSL Encrypted Checkout</h4>
            <p className="text-[10px] text-slate-400 mt-1">All payments are fully encrypted and securely validated via local gateways.</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-100 flex flex-col items-center">
            <Users className="text-purple-500 mb-2" size={24} />
            <h4 className="font-bold text-xs text-slate-800">VIP Discord Community</h4>
            <p className="text-[10px] text-slate-400 mt-1">Get lifetime access to our hyper-driven peer group, templates, and weekly updates.</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-100 flex flex-col items-center">
            <Lock className="text-purple-500 mb-2" size={24} />
            <h4 className="font-bold text-xs text-slate-800">Safe Graduation Pledge</h4>
            <p className="text-[10px] text-slate-400 mt-1">If you complete all assignments and don't launch your portfolio, we offer free extra support.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
