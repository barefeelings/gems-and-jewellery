"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" style={{ background: "#0a0a0a", padding: "6rem 0", overflow: "hidden" }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center" style={{ gap: "5rem" }}>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:w-1/2 relative"
          >
            <div style={{ border: "1px solid rgba(201,169,110,0.25)", padding: "1rem" }}>
              <Image
                src="/images/about.png"
                alt="Sri Lankan Gemstone Heritage"
                width={600}
                height={750}
                className="w-full object-cover"
              />
            </div>
            <div className="absolute" style={{ bottom: "-2.5rem", right: "-2.5rem", width: "10rem", height: "10rem", borderRight: "1px solid rgba(201,169,110,0.15)", borderBottom: "1px solid rgba(201,169,110,0.15)", zIndex: -1 }}></div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:w-1/2"
          >
            <span style={{ color: "#c9a96e", textTransform: "uppercase", letterSpacing: "0.3em", fontSize: "0.75rem", display: "block", marginBottom: "1rem" }}>Our Story</span>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#ffffff", lineHeight: 1.2, marginBottom: "2rem" }}>
              Sri Lankan Heritage,<br />
              <em style={{ color: "#c9a96e" }}>Timeless Excellence</em>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              For generations, Sri Lanka has been known as the <strong style={{ color: "rgba(255,255,255,0.85)" }}>"Ratna-Dweepa"</strong> (Island of Gems).
              Our journey began in the heart of these legendary mines, where we sought the finest earth-mined treasures.
            </p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", lineHeight: 1.9, marginBottom: "3rem" }}>
              At Luminous Gems, we bridge the gap between ancient mining traditions and modern luxury.
              Every gemstone is ethically sourced, hand-selected, and certified for its purity and brilliance.
            </p>

            <div className="grid grid-cols-3" style={{ borderTop: "1px solid rgba(201,169,110,0.15)", paddingTop: "2rem", gap: "1.5rem" }}>
              {[["40+", "Years of Legacy"], ["10k+", "Gems Sourced"], ["100%", "Certified Pure"]].map(([stat, label]) => (
                <div key={label}>
                  <h4 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "2rem", color: "#c9a96e", marginBottom: "0.25rem" }}>{stat}</h4>
                  <p style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)" }}>{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
