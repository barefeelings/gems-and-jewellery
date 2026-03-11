"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, light = false }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center text-center mb-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-gold uppercase tracking-[0.3em] text-sm mb-4 block font-sans">
          {subtitle}
        </span>
        <h2 className={`text-4xl md:text-5xl font-serif ${light ? "text-white" : "text-primary-light"} relative inline-block`}>
          {title}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gold"></div>
        </h2>
      </motion.div>
    </div>
  );
}
