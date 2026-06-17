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
    description: "An 8-phase Python pipeline that transforms 13,000+ raw USDA records into 1,900+ clean, production-ready ingredients, standardizing names, categories, and dietary tags with LLM-assisted processing via the Anthropic API.",
    tech: ["Python", "Anthropic API", "CSV"],
    href: "/projects/usda-ingredient-pipeline",
  },
  {
    tag: "Backend · Rust",
    title: "Ingredient Seeder",
    description: "A Rust seeding task (Loco framework) that loads the full ingredient set into PostgreSQL and can be re-run safely without creating duplicates, handling unique ID generation (UUIDv7) and cross-table relationships automatically.",
    tech: ["Rust", "PostgreSQL", "SeaORM"],
    href: null,
  },
  {
    tag: "Full-Stack",
    title: "Seasonality Engine",
    description: "A full-stack tool that shows which of 180+ fruits and vegetables are in season for any U.S. ZIP code and date, cross-referencing produce data across all 50 states.",
    tech: ["Python", "SQL", "React"],
    href: null,
  },
  {
    tag: "Frontend",
    title: "Recipe Analytics Cards",
    description: "Reusable React and TypeScript components that surface cook time, difficulty, and nutrition at a glance, with built-in checks that flag inconsistent or missing recipe data.",
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
