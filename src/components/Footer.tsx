"use client";

import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const linkStyle = { color: "rgba(255,255,255,0.35)", fontSize: "0.875rem", textDecoration: "none", display: "block", marginBottom: "0.85rem", transition: "color 0.3s" };

  return (
    <footer style={{ background: "#0a0a0a", borderTop: "1px solid rgba(201,169,110,0.1)", paddingTop: "5rem", paddingBottom: "2.5rem" }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: "3rem", marginBottom: "5rem" }}>

          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: "none", display: "block", marginBottom: "1.5rem" }}>
              <span style={{ fontFamily: "var(--font-playfair), serif", color: "#c9a96e", fontSize: "1.6rem", letterSpacing: "0.2em", display: "block" }}>LUMINOUS</span>
              <span style={{ color: "#e8d5b0", fontSize: "0.6rem", letterSpacing: "0.3em", marginTop: "-3px", display: "block" }}>GEMS &amp; JEWELLERY</span>
            </Link>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.85rem", lineHeight: 1.8, marginBottom: "2rem" }}>
              Sri Lanka's premier destination for rare gemstones and bespoke high-jewellery.
              Ethically sourced, masterfully crafted, timelessly elegant.
            </p>
            <div className="flex" style={{ gap: "0.75rem" }}>
              {[FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{ width: "2.5rem", height: "2.5rem", border: "1px solid rgba(201,169,110,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.3s, border-color 0.3s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#c9a96e"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "#c9a96e"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,169,110,0.2)"; }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily: "var(--font-playfair), serif", color: "#ffffff", fontSize: "1.1rem", marginBottom: "2rem" }}>Navigation</h4>
            {["Home", "About", "Collection", "Jewellery", "Why Us", "Contact"].map(link => (
              <Link
                key={link}
                href={link === "Home" ? "#" : `#${link.toLowerCase().replace(" ", "-")}`}
                style={linkStyle}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "#c9a96e")}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.35)")}
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Collection */}
          <div>
            <h4 style={{ fontFamily: "var(--font-playfair), serif", color: "#ffffff", fontSize: "1.1rem", marginBottom: "2rem" }}>Collection</h4>
            {["Royal Blue Sapphire", "Rainbow Moonstone", "Imperial Topaz", "Pigeon Blood Ruby", "Bespoke Jewellery"].map(link => (
              <Link
                key={link}
                href="#collection"
                style={linkStyle}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "#c9a96e")}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.35)")}
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Location */}
          <div>
            <h4 style={{ fontFamily: "var(--font-playfair), serif", color: "#ffffff", fontSize: "1.1rem", marginBottom: "2rem" }}>Location</h4>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.875rem", lineHeight: 2 }}>
              128 Galle Road,<br />
              Colombo 03,<br />
              Sri Lanka
            </p>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.875rem", lineHeight: 2, marginTop: "1rem" }}>
              Monday – Saturday<br />
              09:00 AM – 06:00 PM
            </p>
            <p style={{ color: "#c9a96e", marginTop: "1rem", fontSize: "0.95rem" }}>+94 112 345 678</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center" style={{ borderTop: "1px solid rgba(201,169,110,0.06)", paddingTop: "2rem", gap: "1.25rem" }}>
          <p style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.25)" }}>
            © 2026 Luminous Gems &amp; Jewellery Sri Lanka. All Rights Reserved.
          </p>
          <div className="flex" style={{ gap: "2rem" }}>
            {["Privacy Policy", "Terms of Service"].map(link => (
              <Link
                key={link}
                href="#"
                style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.25)", textDecoration: "none", transition: "color 0.3s" }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)")}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.25)")}
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
