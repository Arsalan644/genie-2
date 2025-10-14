"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlowCardProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * A smooth glowing animated card using Framer Motion.
 * - Scales slightly on hover
 * - Adds a soft purple glow
 * - Accepts custom children and className
 */
export const GlowCard: React.FC<GlowCardProps> = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`relative rounded-2xl p-6 overflow-hidden bg-white shadow-md hover:shadow-2xl cursor-pointer transition-all duration-300 ${className}`}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 30px rgba(91, 33, 182, 0.4)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      {/* Subtle glowing background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-indigo-500/10 to-blue-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        aria-hidden="true"
      />

      {/* Foreground content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
