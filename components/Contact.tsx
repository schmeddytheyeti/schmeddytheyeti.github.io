"use client";
import { useState } from "react";

const C = {
  border: "#1e1e1e",
  accent: "#51C9DB",
  textMuted: "#555555",
  textDim: "#333333",
};

const links = [
  { label: "Email", value: "sschmaedeka@gmail.com", href: "mailto:sschmaedeka@gmail.com" },
  { label: "GitHub", value: "github.com/schmeddytheyeti", href: "https://github.com/schmeddytheyeti" },
  { label: "LinkedIn", value: "linkedin.com/in/samschmaedeka", href: "https://linkedin.com/in/samschmaedeka" },
];

function ContactLink({ label, value, href }: { label: string; value: string; href: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <span style={{
        fontSize: "11px",
        color: C.textDim,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        width: "64px",
      }}>
        {label}
      </span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          fontSize: "14px",
          color: C.accent,
          textDecoration: "none",
          opacity: hovered ? 0.7 : 1,
          transition: "opacity 0.2s",
        }}
      >
        {value}
      </a>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "64px 40px", borderBottom: `1px solid ${C.border}` }}>
      <p style={{
        fontSize: "11px",
        color: C.accent,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        marginBottom: "32px",
      }}>
        Contact
      </p>
      <div style={{ maxWidth: "448px" }}>
        <p style={{ fontSize: "14px", color: C.textMuted, lineHeight: 1.7, marginBottom: "32px" }}>
          I'm open to full-time roles, contract work, and interesting conversations. Feel free to reach out.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {links.map((l) => <ContactLink key={l.label} {...l} />)}
        </div>
      </div>
    </section>
  );
}
