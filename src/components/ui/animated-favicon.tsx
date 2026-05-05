"use client";

import { useEffect } from "react";

export function AnimatedFavicon() {
  useEffect(() => {
    let angle = 0;
    let opacityTime = 0;
    
    // Check if the user prefers reduced motion, if so, don't animate the favicon
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const interval = setInterval(() => {
      angle = (angle + 2) % 360;
      opacityTime += 0.05;
      
      // Calculate opacity bouncing between 0.4 and 1 (similar to framer-motion easeInOut)
      const opacity = 0.4 + (Math.sin(opacityTime) + 1) / 2 * 0.6;

      const svg = `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(50, 50)" style="stroke: %238a2be2; fill: none; stroke-width: 4px;">
            <g transform="rotate(${angle})" opacity="${opacity.toFixed(2)}">
              <circle cx="0" cy="0" r="44" />
              <ellipse cx="0" cy="0" rx="30" ry="44" />
              <ellipse cx="0" cy="0" rx="12" ry="44" />
              <ellipse cx="0" cy="0" rx="44" ry="30" />
              <ellipse cx="0" cy="0" rx="44" ry="12" />
              <path d="M -30 -30 L 30 30" stroke-width="2" opacity="0.5" />
              <path d="M 30 -30 L -30 30" stroke-width="2" opacity="0.5" />
            </g>
          </g>
        </svg>
      `;

      // Use data URI instead of Blob for better browser compatibility with favicons
      const dataUri = "data:image/svg+xml;charset=utf-8," + svg.trim().replace(/\n/g, '').replace(/\s+/g, ' ');
      
      let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = dataUri;
    }, 100); // 10fps for favicon is usually enough and saves CPU

    return () => clearInterval(interval);
  }, []);

  return null;
}
