"use client";
import { useState } from "react";

const C = {
  border: "#1e1e1e",
  surface: "#141414",
  accent: "#51C9DB",
  textPrimary: "#e8e8e8",
  textMuted: "#555555",
};

const projects = [
  {
    tag: "Data Engineering",
    title: "USDA Ingredient Pipeline",
    description: "8-phase pipeline reducing 13k+ raw USDA records to ~2,300 production-ready ingredients using Python and the Anthropic API.",
    tech: ["Python", "Anthropic API", "CSV"],
  },
  {
    tag: "Backend · Rust",
    title: "Ingredient Seeder",
    description: "Loco/Rust task seeding a PostgreSQL ingredients table with idempotent logic, UUIDv7 stamping, and multi-table bridge linking.",
    tech: ["Rust", "PostgreSQL", "SeaORM"],
  },
  {
    tag: "Full-Stack",
    title: "Seasonality Engine",
    description: "ZIP code–based produce lookup tool cross-referencing 180+ fruits and vegetables across 50 states and any date.",
    tech: ["Python", "SQL", "React"],
  },
  {
    tag: "Frontend",
    title: "Recipe Analytics Cards",
    description: "Reusable React components displaying cook time, difficulty, and nutritional data with integrated consistency checks.",
    tech: ["React", "TypeScript"],
  },
];

function ProjectCard({ p }: { p: typeof projects[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: C.surface,
        border: `1px solid ${hovered ? "#51C9DB33" : C.border}`,
        borderRadius: "12px",
        padding: "24px",
        transition: "border-color 0.2s",
      }}
    >
      <p style={{ fontSize: "11px", color: C.accent, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "10px" }}>
        {p.tag}
      </p>
      <h3 style={{ fontSize: "14px", fontWeight: 500, color: C.textPrimary, marginBottom: "8px" }}>
        {p.title}
      </h3>
      <p style={{ fontSize: "12px", color: C.textMuted, lineHeight: 1.7, marginBottom: "16px" }}>
        {p.description}
      </p>
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        {p.tech.map((t) => (
          <span key={t} style={{
            fontSize: "11px",
            color: C.textMuted,
            backgroundColor: C.border,
            padding: "2px 8px",
            borderRadius: "4px",
          }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "64px 40px", borderBottom: `1px solid ${C.border}` }}>
      <p style={{
        fontSize: "11px",
        color: C.accent,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        marginBottom: "32px",
      }}>
        Projects
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
      </div>
    </section>
  );
}
