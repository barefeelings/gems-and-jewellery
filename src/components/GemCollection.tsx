"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const gems = [
  {
    name: "Royal Blue Sapphire",
    origin: "Ceylon · Sri Lanka",
    image: "/images/sapphire.png",
    description: "The pride of Sri Lanka, known for its deep velvet blue and unmatched clarity.",
  },
  {
    name: "Rainbow Moonstone",
    origin: "Meetiyagoda · Sri Lanka",
    image: "/images/moonstone.png",
    description: "Ethereal glow with vibrant blue adularescence, from the world's finest mines.",
  },
  {
    name: "Pigeon Blood Ruby",
    origin: "Ethically Sourced",
    image: "/images/ruby.png",
    description: "A symbol of passion and rarity, featuring a deep red hue and brilliant sparkle.",
  },
  {
    name: "Imperial Topaz",
    origin: "Precious Selection",
    image: "/images/topaz.png",
    description: "A rare golden-yellow treasure with exceptional hardness and golden reflections.",
  },
];

export default function GemCollection() {
  return (
    <section id="collection" style={{ background: "#111111", padding: "6rem 0" }}>
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center" style={{ marginBottom: "4rem" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span style={{ color: "#c9a96e", textTransform: "uppercase", letterSpacing: "0.3em", fontSize: "0.75rem", display: "block", marginBottom: "1rem" }}>
              Earth's Finest Treasures
            </span>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#ffffff", position: "relative", display: "inline-block" }}>
              Masterpiece Collection
              <div style={{ position: "absolute", bottom: "-1rem", left: "50%", transform: "translateX(-50%)", width: "5rem", height: "1px", background: "#c9a96e" }}></div>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: "2rem" }}>
          {gems.map((gem, index) => (
            <motion.div
              key={gem.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{ background: "#0a0a0a", border: "1px solid rgba(201,169,110,0.08)", overflow: "hidden", cursor: "pointer", transition: "border-color 0.4s" }}
              onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,169,110,0.3)")}
              onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,169,110,0.08)")}
            >
              <div className="relative overflow-hidden" style={{ height: "18rem" }}>
                <Image
                  src={gem.image}
                  alt={gem.name}
                  fill
                  className="object-cover transition-transform duration-700"
                  style={{ transition: "transform 0.7s ease" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.1)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
                />
                <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.15)" }}></div>
              </div>
              <div style={{ padding: "2rem" }}>
                <span style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#c9a96e", display: "block", marginBottom: "0.5rem" }}>
                  {gem.origin}
                </span>
                <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.2rem", color: "#ffffff", marginBottom: "1rem" }}>
                  {gem.name}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  {gem.description}
                </p>
                <button
                  style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#c9a96e", fontWeight: 700, background: "none", border: "none", borderBottom: "1px solid rgba(201,169,110,0.35)", paddingBottom: "2px", cursor: "pointer" }}
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
