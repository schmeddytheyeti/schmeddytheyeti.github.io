"use client";
import { useState } from "react";

const C = {
  bg: "#0e0e0e",
  borderMid: "#2a2a2a",
  border: "#1e1e1e",
  accent: "#51C9DB",
  textPrimary: "#e8e8e8",
  textSecondary: "#888888",
  textMuted: "#555555",
};

export default function Hero() {
  const [primaryHovered, setPrimaryHovered] = useState(false);
  const [secondaryHovered, setSecondaryHovered] = useState(false);

  return (
    <section style={{ padding: "96px 40px", borderBottom: `1px solid ${C.border}` }}>
      <p style={{
        fontSize: "11px",
        color: C.accent,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        marginBottom: "20px",
      }}>
        Available for opportunities
      </p>
      <h1 style={{
        fontSize: "64px",
        fontWeight: 500,
        color: "#fff",
        lineHeight: 1.1,
        marginBottom: "16px",
      }}>
        Sam<br />Schmaedeka
      </h1>
      <p style={{ fontSize: "18px", color: C.textSecondary, marginBottom: "32px" }}>
        <span style={{ color: C.textPrimary }}>Technical Advisor</span>
        {" · "}Data Engineer{" · "}Full-Stack
      </p>
      <p style={{
        fontSize: "14px",
        color: C.textMuted,
        maxWidth: "480px",
        lineHeight: 1.7,
        marginBottom: "40px",
      }}>
        I build data pipelines, backend systems, and interfaces — currently deep in Rust,
        PostgreSQL, and AI-assisted data workflows at CooksAtlas.
      </p>
      <div style={{ display: "flex", gap: "12px" }}>
        <a
          href="#projects"
          onMouseEnter={() => setPrimaryHovered(true)}
          onMouseLeave={() => setPrimaryHovered(false)}
          style={{
            backgroundColor: C.accent,
            color: C.bg,
            fontSize: "12px",
            fontWeight: 500,
            padding: "10px 20px",
            borderRadius: "6px",
            textDecoration: "none",
            opacity: primaryHovered ? 0.85 : 1,
            transition: "opacity 0.2s",
          }}
        >
          View Projects
        </a>
        <a
          href="/Sam_Schmaedeka_Resume.pdf"
          target="_blank"
          onMouseEnter={() => setSecondaryHovered(true)}
          onMouseLeave={() => setSecondaryHovered(false)}
          style={{
            fontSize: "12px",
            color: secondaryHovered ? C.textPrimary : C.textSecondary,
            padding: "10px 20px",
            borderRadius: "6px",
            border: `1px solid ${C.borderMid}`,
            textDecoration: "none",
            transition: "color 0.2s",
          }}
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
