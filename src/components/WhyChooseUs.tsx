"use client";

import { motion } from "framer-motion";
import { HiCheckBadge, HiShieldCheck, HiSparkles, HiGlobeAmericas } from "react-icons/hi2";

const features = [
  {
    icon: HiCheckBadge,
    title: "GIA Certified",
    description: "Every gemstone in our collection carries a globally recognized certification of authenticity and quality.",
  },
  {
    icon: HiShieldCheck,
    title: "Ethically Sourced",
    description: "We work directly with local mines to ensure sustainable and fair trade practices in every acquisition.",
  },
  {
    icon: HiSparkles,
    title: "Master Craftsmanship",
    description: "Our in-house artisans combine decades of experience with modern precision to cut and set every stone.",
  },
  {
    icon: HiGlobeAmericas,
    title: "Worldwide Shipping",
    description: "Secure, insured, and fully tracked international shipping brings Sri Lanka's treasures to your door.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" style={{ background: "#111111", padding: "6rem 0" }}>
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center" style={{ marginBottom: "4rem" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span style={{ color: "#c9a96e", textTransform: "uppercase", letterSpacing: "0.3em", fontSize: "0.75rem", display: "block", marginBottom: "1rem" }}>
              Why Discriminating Collectors Choose Us
            </span>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#ffffff", position: "relative", display: "inline-block" }}>
              The Luminous Promise
              <div style={{ position: "absolute", bottom: "-1rem", left: "50%", transform: "translateX(-50%)", width: "5rem", height: "1px", background: "#c9a96e" }}></div>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
                style={{ background: "#0a0a0a", border: "1px solid rgba(201,169,110,0.06)", padding: "3rem 2rem", textAlign: "center", transition: "border-color 0.4s" }}
                onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,169,110,0.2)")}
                onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,169,110,0.06)")}
              >
                <div style={{ fontSize: "2.5rem", color: "#c9a96e", display: "flex", justifyContent: "center", marginBottom: "1.5rem", transition: "transform 0.3s" }}>
                  <Icon />
                </div>
                <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.25rem", color: "#ffffff", marginBottom: "1rem" }}>
                  {feature.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.875rem", lineHeight: 1.8 }}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
