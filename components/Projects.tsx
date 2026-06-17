"use client";
import { useState } from "react";
import Link from "next/link";

const C = {
  border: "#1e1e1e",
  surface: "#141414",
  accent: "#51C9DB",
  textPrimary: "#e8e8e8",
  textMuted: "#7a7a7a",
};

const projects = [
  {
    tag: "Data Engineering",
    title: "USDA Ingredient Pipeline",
    description: "8-phase pipeline that reduced 13k+ raw USDA records to 1,900+ production-ready ingredients, with 95%+ automated diet-tag accuracy — built with Python and the Anthropic API.",
    tech: ["Python", "Anthropic API", "CSV"],
    href: "/projects/usda-ingredient-pipeline",
  },
  {
    tag: "Backend · Rust",
    title: "Ingredient Seeder",
    description: "Rust task (Loco framework) that seeds PostgreSQL with idempotent upserts, UUIDv7 keys, and multi-table bridge relationships — zero manual SQL required.",
    tech: ["Rust", "PostgreSQL", "SeaORM"],
    href: null,
  },
  {
    tag: "Full-Stack",
    title: "Seasonality Engine",
    description: "ZIP-to-region lookup that maps 180+ produce items to seasonal availability across all 50 states — any location, any date.",
    tech: ["Python", "SQL", "React"],
    href: null,
  },
  {
    tag: "Frontend",
    title: "Recipe Analytics Cards",
    description: "React components that surface cook time, difficulty, and nutrition data — with built-in consistency checks to flag mismatched recipe metadata.",
    tech: ["React", "TypeScript"],
    href: null,
  },
];

function ProjectCard({ p }: { p: typeof projects[0] }) {
  const [hovered, setHovered] = useState(false);

  const cardStyle = {
    backgroundColor: C.surface,
    border: `1px solid ${hovered ? "#51C9DB33" : C.border}`,
    borderRadius: "12px",
    padding: "24px",
    transition: "border-color 0.2s",
    display: "flex",
    flexDirection: "column" as const,
    height: "100%",
  };

  const inner = (
    <>
      <p style={{ fontSize: "11px", color: C.accent, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "10px" }}>
        {p.tag}
      </p>
      <h3 style={{ fontSize: "14px", fontWeight: 500, color: C.textPrimary, marginBottom: "8px" }}>
        {p.title}
      </h3>
      <p style={{ fontSize: "12px", color: C.textMuted, lineHeight: 1.7, marginBottom: "16px", flex: 1 }}>
        {p.description}
      </p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "8px" }}>
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
        {p.href && (
          <span style={{ fontSize: "11px", color: C.accent, whiteSpace: "nowrap", letterSpacing: "0.05em" }}>
            Case Study →
          </span>
        )}
      </div>
    </>
  );

  if (p.href) {
    return (
      <Link
        href={p.href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ ...cardStyle, textDecoration: "none" }}
      >
        {inner}
      </Link>
    );
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={cardStyle}
    >
      {inner}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ borderBottom: `1px solid ${C.border}` }}>
      <h2 style={{
        fontSize: "11px",
        color: C.accent,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        marginBottom: "32px",
        fontWeight: 400,
      }}>
        Projects
      </h2>
      <div className="grid-cards">
        {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
      </div>
    </section>
  );
}
