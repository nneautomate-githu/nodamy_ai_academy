import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  // Dimensions based on size
  const iconSizeMap = {
    sm: { w: 32, h: 32 },
    md: { w: 48, h: 48 },
    lg: { w: 72, h: 72 },
    xl: { w: 120, h: 120 },
  };

  const dim = iconSizeMap[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* SVG Logo Icon */}
      <svg
        width={dim.w}
        height={dim.h}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          {/* Blue Gradients */}
          <linearGradient id="blueGradient" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1e3a8a" /> {/* Deep blue */}
            <stop offset="50%" stopColor="#3b82f6" /> {/* Electric blue */}
            <stop offset="100%" stopColor="#60a5fa" /> {/* Light blue */}
          </linearGradient>

          <linearGradient id="bookGradient" x1="20" y1="70" x2="80" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#172554" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>

          {/* Green Gradients for leaf and nodes */}
          <linearGradient id="greenGradient" x1="60" y1="25" x2="75" y2="45" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>

          <linearGradient id="circuitGradient" x1="10" y1="30" x2="40" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>

        {/* 1. Outer Circuit ring with nodes on the left */}
        <path
          d="M 40,15 A 35,35 0 0,0 45,85"
          stroke="url(#blueGradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 40,15 A 35,35 0 0,0 20,40"
          stroke="url(#blueGradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Circuit stems and nodes */}
        {/* Top Node Stem */}
        <path d="M 23,28 Q 15,28 15,35" stroke="#1d4ed8" strokeWidth="2.5" fill="none" />
        <circle cx="15" cy="35" r="3" fill="#10b981" />

        {/* Middle Node Stem 1 */}
        <path d="M 18,42 L 11,42" stroke="#1d4ed8" strokeWidth="2.5" fill="none" />
        <circle cx="11" cy="42" r="3" fill="#10b981" />

        {/* Middle Node Stem 2 */}
        <path d="M 19,51 Q 13,51 13,58" stroke="#1d4ed8" strokeWidth="2.5" fill="none" />
        <circle cx="13" cy="58" r="3" fill="#10b981" />

        {/* Bottom circuit connect */}
        <path d="M 23,65 Q 16,68 16,74" stroke="#1d4ed8" strokeWidth="2.5" fill="none" />
        <circle cx="16" cy="74" r="3" fill="#10b981" />


        {/* 2. Stylized Blue Letter 'N' */}
        {/* Left Column of N */}
        <path
          d="M 33,36 L 33,68 C 33,70 34,71 36,71 L 37,71 C 39,71 40,70 40,68 L 40,43"
          fill="url(#blueGradient)"
        />
        {/* Middle Slash and Right Column of N */}
        <path
          d="M 33,38 L 57,64 L 57,41 C 57,39 56,38 54,38 L 53,38 C 51,38 50,39 50,41 L 50,68 L 33,38"
          fill="url(#blueGradient)"
        />
        {/* Right column stem (3D overlap) */}
        <path
          d="M 50,38 L 57,38 C 59,38 60,39 60,41 L 60,68 C 60,70 59,71 57,71 C 55,71 54,70 54,68 L 54,45"
          fill="url(#blueGradient)"
        />

        {/* Joint circles under the column to represent the original logo's styling */}
        <circle cx="36.5" cy="71" r="3.5" fill="#10b981" />


        {/* 3. Green Leaf on top-right of 'N' */}
        {/* Positioned at coordinates (55, 20) to (68, 38) */}
        <path
          d="M 57,39 C 57,28 66,22 71,20 C 70,26 67,36 57,39 Z"
          fill="url(#greenGradient)"
        />
        {/* Leaf center vein */}
        <path
          d="M 57,39 Q 63,30 71,20"
          stroke="#fff"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />


        {/* 4. Open Book at the base */}
        {/* Left Page curve */}
        <path
          d="M 50,78 Q 35,78 20,83 C 25,75 35,74 50,78 Z"
          fill="url(#bookGradient)"
          stroke="#1e3a8a"
          strokeWidth="1"
        />
        {/* Right Page curve */}
        <path
          d="M 50,78 Q 65,78 80,83 C 75,75 65,74 50,78 Z"
          fill="url(#bookGradient)"
          stroke="#1e3a8a"
          strokeWidth="1"
        />
        {/* Inner page pages (White and light teal lines) */}
        <path
          d="M 50,81 Q 35,81 22,85"
          stroke="#60a5fa"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M 50,81 Q 65,81 78,85"
          stroke="#60a5fa"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-baseline tracking-wide leading-none">
            <span className="font-display font-bold text-slate-950 text-xl tracking-tight sm:text-2xl">NODAMY</span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="font-sans font-semibold text-emerald-600 text-[10px] tracking-[0.25em] leading-none uppercase">AI ACADEMY</span>
          </div>
        </div>
      )}
    </div>
  );
}
