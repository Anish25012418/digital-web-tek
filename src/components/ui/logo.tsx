"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  /** When true, renders the globe wireframe in white instead of navy */
  variant?: 'default' | 'hero';
}

export const Logo = ({ variant = 'default' }: LogoProps) => {
  const globeColor = variant === 'hero' ? 'white' : 'navy';

  return (
    <div className="relative flex flex-col items-center justify-center w-[170px] h-[136px] group cursor-pointer">
      <svg viewBox="0 0 200 160" className="w-full h-full overflow-visible">
        {/* Animated Globe */}
        <motion.g
          initial={{ x: 100, y: 87.5 }}
          animate={{
            rotate: 360,
            opacity: [0.4, 1, 0.4]
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          {/* Globe wireframe rings, radius 40 to avoid overlap with text */}
          <g style={{ stroke: globeColor, fill: 'none', strokeWidth: 1.2 }}>
            <circle cx="0" cy="0" r="40" />
            <ellipse cx="0" cy="0" rx="30" ry="40" />
            <ellipse cx="0" cy="0" rx="15" ry="40" />
            <ellipse cx="0" cy="0" rx="40" ry="30" />
            <ellipse cx="0" cy="0" rx="40" ry="15" />
            {/* Optional crosslines for more globe effect */}
            <path d="M -28 -28 L 28 28" strokeWidth="0.8" opacity="0.5" />
            <path d="M 28 -28 L -28 28" strokeWidth="0.8" opacity="0.5" />
          </g>
        </motion.g>

        {/* Circular Text */}
        <path id="curve" fill="transparent" d="M 15 130 A 85 85 0 1 1 185 130" />
        <text className="font-extrabold fill-primary" style={{ fontSize: '22px', letterSpacing: '4px' }}>
           <textPath href="#curve" startOffset="50%" textAnchor="middle">
             DIGITAL WEB TEK
           </textPath>
        </text>
        
        {/* Bottom Text — increased size */}
        <text x="100" y="157" textAnchor="middle" className="font-black fill-primary" style={{ fontSize: '16px', letterSpacing: '0.2em' }}>
          BUILD. GROW. SCALE.
        </text>
      </svg>
    </div>
  );
};
