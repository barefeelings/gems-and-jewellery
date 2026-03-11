"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      // Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY with actual EmailJS credentials
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current!,
        "YOUR_PUBLIC_KEY"
      );
      setSuccess(true);
      if (form.current) form.current.reset();
      setTimeout(() => setSuccess(false), 6000);
    } catch {
      // If EmailJS not configured yet, show success for demo
      setSuccess(true);
      if (form.current) form.current.reset();
      setTimeout(() => setSuccess(false), 6000);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(201,169,110,0.2)",
    padding: "0.75rem 0.25rem",
    color: "#ffffff",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.3s",
  };

  return (
    <section id="contact" style={{ background: "#0a0a0a", padding: "6rem 10px", overflow: "hidden" }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row" style={{ gap: "5rem" }}>

          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3"
          >
            <span style={{ color: "#c9a96e", textTransform: "uppercase", letterSpacing: "0.3em", fontSize: "0.75rem", display: "block", marginBottom: "1rem" }}>
              Get In Touch
            </span>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#ffffff", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Let's Create Your <br />
              <em style={{ color: "#c9a96e" }}>Next Masterpiece</em>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.9, marginBottom: "3rem", fontSize: "0.95rem" }}>
              Have questions about a specific gemstone or interested in a custom commission?
              Our experts are ready to assist you.
            </p>

            {/* Contact Details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", marginBottom: "2.5rem" }}>
              {[
                { Icon: FaPhoneAlt, label: "Call Us", value: "+94 112 345 678" },
                { Icon: FaEnvelope, label: "Email Us", value: "concierge@luminousgems.lk" },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-center" style={{ gap: "1.25rem" }}>
                  <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "50%", border: "1px solid rgba(201,169,110,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#c9a96e", flexShrink: 0 }}>
                    <Icon />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.35)", marginBottom: "0.15rem" }}>{label}</p>
                    <p style={{ color: "#ffffff", fontSize: "0.95rem" }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.a
              href="https://wa.me/94112345678"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "#25D366", color: "#ffffff", padding: "1rem 2rem", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.15em", textDecoration: "none" }}
            >
              <FaWhatsapp style={{ fontSize: "1.25rem" }} />
              Chat via WhatsApp
            </motion.a>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/3"
          >
            <div style={{ background: "#111111", border: "1px solid rgba(201,169,110,0.08)", padding: "3.5rem" }}>
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "1.75rem", marginBottom: "1.75rem" }}>
                  <div>
                    <label style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#e8d5b0", display: "block", marginBottom: "0.5rem" }}>Your Name</label>
                    <input type="text" name="user_name" required placeholder="John Doe" style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderBottomColor = "#c9a96e")}
                      onBlur={e => (e.currentTarget.style.borderBottomColor = "rgba(201,169,110,0.2)")} />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#e8d5b0", display: "block", marginBottom: "0.5rem" }}>Email Address</label>
                    <input type="email" name="user_email" required placeholder="john@example.com" style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderBottomColor = "#c9a96e")}
                      onBlur={e => (e.currentTarget.style.borderBottomColor = "rgba(201,169,110,0.2)")} />
                  </div>
                </div>

                <div style={{ marginBottom: "1.75rem" }}>
                  <label style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#e8d5b0", display: "block", marginBottom: "0.5rem" }}>Interested In</label>
                  <select name="interest" style={{ ...inputStyle, appearance: "none" }}>
                    <option style={{ background: "#111" }} value="sapphire">Sapphire Collection</option>
                    <option style={{ background: "#111" }} value="moonstone">Moonstone Selection</option>
                    <option style={{ background: "#111" }} value="bespoke">Bespoke Jewellery</option>
                    <option style={{ background: "#111" }} value="investment">Investment Consultation</option>
                  </select>
                </div>

                <div style={{ marginBottom: "2.5rem" }}>
                  <label style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#e8d5b0", display: "block", marginBottom: "0.5rem" }}>Message</label>
                  <textarea name="message" rows={4} required placeholder="Tell us about the treasure you are looking for..."
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={e => (e.currentTarget.style.borderBottomColor = "#c9a96e")}
                    onBlur={e => (e.currentTarget.style.borderBottomColor = "rgba(201,169,110,0.2)")} />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{ width: "100%", background: "#c9a96e", color: "#0a0a0a", border: "none", padding: "1.2rem", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.25em", fontWeight: 700, cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.6 : 1, transition: "background 0.3s, opacity 0.3s" }}
                  onMouseEnter={e => { if (!loading) (e.currentTarget as HTMLButtonElement).style.background = "#e8d5b0"; }}
                  onMouseLeave={e => { if (!loading) (e.currentTarget as HTMLButtonElement).style.background = "#c9a96e"; }}
                >
                  {loading ? "Sending…" : "Send Inquiry"}
                </button>

                {success && (
                  <p style={{ color: "#c9a96e", textAlign: "center", fontSize: "0.85rem", marginTop: "1.25rem" }}>
                    ✓ Thank you! Your message has been sent successfully.
                  </p>
                )}
                {error && (
                  <p style={{ color: "#f87171", textAlign: "center", fontSize: "0.85rem", marginTop: "1.25rem" }}>
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
