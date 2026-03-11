"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Collection", href: "#collection" },
  { name: "Jewellery", href: "#jewellery" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed  w-full z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        padding: scrolled ? "1rem 10px" : "1.5rem 10px",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start leading-none">
          <span style={{ fontFamily: "var(--font-playfair), serif", color: "#c9a96e", fontSize: "1.6rem", letterSpacing: "0.2em" }}>
            LUMINOUS
          </span>
          <span style={{ color: "#e8d5b0", fontSize: "0.6rem", letterSpacing: "0.3em", marginTop: "-2px" }}>
            GEMS &amp; JEWELLERY
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center" style={{ gap: "2.5rem" }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", transition: "color 0.3s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#c9a96e")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          style={{ color: "#c9a96e", background: "none", border: "none", cursor: "pointer" }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 flex flex-col items-center justify-center md:hidden"
            style={{ background: "#0a0a0a", zIndex: 999 }}
          >
            <button
              className="absolute text-3xl"
              style={{ top: "1.5rem", right: "1.5rem", color: "#c9a96e", background: "none", border: "none", cursor: "pointer" }}
              onClick={() => setIsOpen(false)}
            >
              <HiX />
            </button>
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={link.href}
                  style={{ fontFamily: "var(--font-playfair), serif", fontSize: "2rem", color: "#ffffff", display: "block", margin: "1rem 0", textDecoration: "none" }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
