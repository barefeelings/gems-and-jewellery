"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const jewelleryItems = [
  {
    name: "Cerulean Radiance Ring",
    category: "Engagement Rings",
    image: "/images/sapphire.png",
    price: "From $4,500",
  },
  {
    name: "Moonlight Serenade Pendant",
    category: "Necklaces",
    image: "/images/moonstone.png",
    price: "From $2,800",
  },
  {
    name: "Crimson Ember Studs",
    category: "Earrings",
    image: "/images/ruby.png",
    price: "From $3,200",
  },
];

export default function Jewellery() {
  return (
    <section id="jewellery" style={{ background: "#0a0a0a", padding: "6rem 0", position: "relative", overflow: "hidden" }}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" style={{ zIndex: 0 }}>
        <span style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(6rem,20vw,18rem)", color: "rgba(255,255,255,0.03)", textTransform: "uppercase", whiteSpace: "nowrap" }}>
          Jewellery
        </span>
      </div>

      <div className="container mx-auto px-6" style={{ position: "relative", zIndex: 10 }}>
        {/* Heading */}
        <div className="text-center" style={{ marginBottom: "4rem" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span style={{ color: "#c9a96e", textTransform: "uppercase", letterSpacing: "0.3em", fontSize: "0.75rem", display: "block", marginBottom: "1rem" }}>
              Elegance Redefined
            </span>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#ffffff", position: "relative", display: "inline-block" }}>
              Bespoke Jewellery
              <div style={{ position: "absolute", bottom: "-1rem", left: "50%", transform: "translateX(-50%)", width: "5rem", height: "1px", background: "#c9a96e" }}></div>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "2.5rem" }}>
          {jewelleryItems.map((item, index) => (
            <motion.div
              key={item.name}
              // initial={{ opacity: 0, scale: 0.93 }}
              // whileInView={{ opacity: 1, scale: 1 }}
              // viewport={{ once: true }}
              // transition={{ duration: 0.7, delay: index * 0.15 }}
              style={{ position: "relative", cursor: "pointer" }}
              className="group"
            >
              <div style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden", border: "1px solid rgba(201,169,110,0.1)" }}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  style={{ filter: "grayscale(60%)", transition: "filter 0.6s, transform 0.7s" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.filter = "grayscale(0%)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.filter = "grayscale(60%)")}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }}></div>

                <div className="absolute" style={{ bottom: "2.5rem", left: "2rem", right: "2rem" }}>
                  <span style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "#e8d5b0", display: "block", marginBottom: "0.5rem" }}>
                    {item.category}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.4rem", color: "#ffffff", marginBottom: "0.5rem" }}>
                    {item.name}
                  </h3>
                  <div style={{ width: "0", height: "1px", background: "#c9a96e", marginBottom: "0.75rem", transition: "width 0.5s" }} className="group-hover:w-full"></div>
                  <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.55)", letterSpacing: "0.15em" }}>
                    {item.price}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: "4rem" }}>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{ background: "none", border: "none", borderBottom: "2px solid #c9a96e", color: "#c9a96e", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", fontWeight: 700, padding: "0.5rem 0.25rem", cursor: "pointer" }}
          >
            Custom Commissions
          </motion.button>
        </div>
      </div>
    </section>
  );
}
