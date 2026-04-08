"use client";
import { useState } from "react";

const C = {
  bg: "#0e0e0e",
  borderMid: "#2a2a2a",
  accent: "#51C9DB",
  textSecondary: "#888888",
};

export default function Nav() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 40px",
      borderBottom: `1px solid ${C.borderMid}`,
      position: "sticky",
      top: 0,
      backgroundColor: C.bg,
      zIndex: 50,
    }}>
      <div style={{ fontSize: "14px", fontWeight: 500, letterSpacing: "0.15em", color: "#fff" }}>
        SS<span style={{ color: C.accent }}>.</span>
      </div>
      <div style={{ display: "flex", gap: "28px" }}>
        {["About", "Projects", "Skills", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onMouseEnter={() => setHovered(link)}
            onMouseLeave={() => setHovered(null)}
            style={{
              fontSize: "12px",
              color: hovered === link ? C.accent : C.textSecondary,
              textDecoration: "none",
              letterSpacing: "0.05em",
              transition: "color 0.2s",
            }}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}
