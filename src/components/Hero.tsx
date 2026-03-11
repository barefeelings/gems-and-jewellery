"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ height: "100vh", minHeight: "600px" }}>
      {/* Background */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <Image
          src="/images/hero.png"
          alt="Luxury Gemstones"
          fill
          className="object-cover"
          style={{ transform: "scale(1.05)" }}
          priority
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 50%, #0a0a0a 100%)" }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative text-center" style={{ zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <span style={{ color: "#c9a96e", textTransform: "uppercase", letterSpacing: "0.35em", fontSize: "0.85rem", display: "block", marginBottom: "1.5rem", fontFamily: "var(--font-inter), sans-serif" }}>
            Exquisite Heritage &amp; Unmatched Quality
          </span>
          <h1 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(3rem, 8vw, 6rem)", color: "#ffffff", lineHeight: 1.1, marginBottom: "1.5rem", textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}>
            Luminous <em style={{ color: "#c9a96e" }}>Legacy</em>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1rem", maxWidth: "640px", margin: "0 auto 2.5rem", lineHeight: 1.8, fontFamily: "var(--font-inter), sans-serif" }}>
            Discover the world's finest ethically sourced Sri Lankan gemstones, 
            crafted for those who appreciate the extraordinary.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center" style={{ gap: "1.5rem" }}>
            <motion.a
              href="#collection"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ background: "#c9a96e", color: "#0a0a0a", padding: "1rem 2.5rem", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700, textDecoration: "none", display: "inline-block", transition: "background 0.3s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#e8d5b0")}
              onMouseLeave={e => (e.currentTarget.style.background = "#c9a96e")}
            >
              Explore Collection
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ border: "1px solid rgba(255,255,255,0.45)", color: "#ffffff", padding: "1rem 2.5rem", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", textDecoration: "none", display: "inline-block", transition: "border-color 0.3s" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#c9a96e")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.45)")}
            >
              Inquire Now
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute flex flex-col items-center"
        style={{ bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}
      >
        <span style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "rgba(255,255,255,0.5)", marginBottom: "0.5rem" }}>Scroll</span>
        <div style={{ width: "1px", height: "3rem", background: "linear-gradient(to bottom, #c9a96e, transparent)" }}></div>
      </motion.div>
    </section>
  );
}
