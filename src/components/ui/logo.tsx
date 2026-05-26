"use client";

import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
  /** Width (and height) of the logo in pixels */
  size?: number;
  /** 'hero' renders the globe in white for dark/hero backgrounds */
  variant?: "default" | "hero";
  className?: string;
}

export const Logo = ({ size = 220, variant = "default", className = "" }: LogoProps) => {
  const globeColor = "#F97316"  // orange variant === "hero" ? "#ffffff" : "#F97316";
  const topColor = "#5B5EF4"; // blue-purple
  const bottomColor = "#5B5EF4"; // near-black
  const font = "'Arial Black', 'Impact', sans-serif";

  return (
    <div
      className={`inline-flex items-center justify-center cursor-pointer ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 220 220"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        overflow="visible"
      >
        {/* ── TOP ARC: "DIGITAL WEB TEK" ── */}
        <path id="top-arc" fill="none" d="M 18 138 A 95 95 0 1 1 202 138" />
        <text
          fontFamily={font}
          fontWeight="900"
          fontSize="19.5"
          fill={topColor}
          letterSpacing="3"
        >
          <textPath href="#top-arc" startOffset="50%" textAnchor="middle">
            DIGITAL WEB TEK
          </textPath>
        </text>

        {/* ── BOTTOM ARC: "BUILD. GROW. SCALE." ── */}
        <path id="bottom-arc" fill="none" d="M 18 81 A 92 92 0 0 0 202 81" />
        <text
          fontFamily={font}
          fontWeight="900"
          fontSize="14.5"
          fill={bottomColor}
          letterSpacing="2"
        >
          <textPath href="#bottom-arc" startOffset="50%" textAnchor="middle">
            BUILD. GROW. SCALE.
          </textPath>
        </text>

        {/* ── GLOBE WIREFRAME (center 110, 108) ── */}
        {/* Outer g positions the globe; inner motion.g rotates around local (0,0) */}
        <g transform="translate(110, 90)">
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            fill="none"
            stroke={globeColor}
            strokeWidth="1.3"
          >
            {/* outer circle */}
            <circle cx="0" cy="0" r="58" />

            {/* longitude ellipses at 30° intervals */}
            {[0, 30, 60, 90, 120, 150].map((deg) => (
              <React.Fragment key={deg}>
                <ellipse cx="0" cy="0" rx="58" ry="46" transform={`rotate(${deg})`} />
                <ellipse cx="0" cy="0" rx="58" ry="34" transform={`rotate(${deg})`} />
                <ellipse cx="0" cy="0" rx="58" ry="20" transform={`rotate(${deg})`} />
              </React.Fragment>
            ))}
          </motion.g>
        </g>
      </svg>
    </div>
  );
};

export default Logo;