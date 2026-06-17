import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "USDA Ingredient Pipeline — Sam Schmaedeka",
  description:
    "Case study: 8-phase Python pipeline that reduced 13k+ raw USDA records to 1,900+ production-ready ingredients with 95%+ automated diet-tag accuracy.",
  openGraph: {
    title: "USDA Ingredient Pipeline — Sam Schmaedeka",
    description:
      "8-phase pipeline that reduced 13k+ raw USDA records to 1,900+ production-ready ingredients with 95%+ automated diet-tag accuracy.",
    url: "https://samschmaedeka.com/projects/usda-ingredient-pipeline",
  },
};

const C = {
  bg: "#0e0e0e",
  border: "#1e1e1e",
  borderMid: "#2a2a2a",
  surface: "#141414",
  surfaceHigh: "#1a1a1a",
  accent: "#51C9DB",
  textPrimary: "#e8e8e8",
  textSecondary: "#888888",
  textMuted: "#7a7a7a",
};

const phases = [
  {
    num: "01",
    name: "Ingestion",
    desc: "Load and parse raw USDA CSV exports — FoodData Central and legacy FNDDS datasets — into a unified in-memory structure.",
  },
  {
    num: "02",
    name: "Deduplication",
    desc: "Identify equivalent entries across USDA's overlapping datasets using name normalization and fuzzy matching. Merge and retain the richest record.",
  },
  {
    num: "03",
    name: "Filtering",
    desc: "Remove industrial compounds, laboratory standards, and non-food entries. Strip highly specific sub-forms that have no practical recipe utility.",
  },
  {
    num: "04",
    name: "Normalization",
    desc: "Standardize names (e.g. \"APPLES,RAW,WITH SKIN\" → \"Apple\"), strip measurement units from descriptions, and resolve capitalization inconsistencies.",
  },
  {
    num: "05",
    name: "Hierarchy Classification",
    desc: "Use the Anthropic API to classify each ingredient into the 3-tier category system: 17 top-level categories and 29 mid-level groups.",
  },
  {
    num: "06",
    name: "Diet Tag Inference",
    desc: "Automatically tag each ingredient across 10+ dietary patterns — vegan, vegetarian, gluten-free, keto, paleo, and more. Achieves 95%+ accuracy vs. manual review.",
  },
  {
    num: "07",
    name: "Validation",
    desc: "Cross-check category assignments and diet tags for internal consistency. Flag statistical outliers and edge cases for targeted human review.",
  },
  {
    num: "08",
    name: "Production Export",
    desc: "Write production-ready records to structured CSVs consumed by the Ingredient Seeder, which seeds PostgreSQL via idempotent upserts.",
  },
];

const metrics = [
  { label: "Raw USDA records in", value: "13k+" },
  { label: "Production ingredients out", value: "1,900+" },
  { label: "Diet-tag accuracy", value: "95%+" },
  { label: "Top-level categories", value: "17" },
  { label: "Mid-level groups", value: "29" },
  { label: "Diet patterns tagged", value: "10+" },
];

export default function USDAIngredientPipeline() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: C.bg }}>

      {/* Header */}
      <header style={{
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
        <Link href="/" style={{ fontSize: "14px", fontWeight: 500, letterSpacing: "0.15em", color: "#fff", textDecoration: "none" }}>
          SS<span style={{ color: C.accent }}>.</span>
        </Link>
        <Link href="/#projects" style={{
          fontSize: "12px",
          color: C.textSecondary,
          textDecoration: "none",
          letterSpacing: "0.05em",
        }}>
          ← All Projects
        </Link>
      </header>

      {/* Hero */}
      <section style={{ padding: "80px 40px 64px", borderBottom: `1px solid ${C.border}`, maxWidth: "860px" }}>
        <p style={{
          fontSize: "11px",
          color: C.accent,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "16px",
        }}>
          Data Engineering · Case Study
        </p>
        <h1 style={{
          fontSize: "clamp(32px, 6vw, 52px)",
          fontWeight: 500,
          color: "#fff",
          lineHeight: 1.15,
          marginBottom: "20px",
        }}>
          USDA Ingredient Pipeline
        </h1>
        <p style={{
          fontSize: "16px",
          color: C.textSecondary,
          lineHeight: 1.75,
          maxWidth: "640px",
        }}>
          An 8-phase Python pipeline that transformed 13k+ raw USDA food records into
          1,900+ production-ready ingredients — organized into a 3-tier category hierarchy
          and tagged for dietary restrictions at 95%+ accuracy.
        </p>
      </section>

      {/* Metrics strip */}
      <section style={{ borderBottom: `1px solid ${C.border}` }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          borderLeft: `1px solid ${C.border}`,
        }}>
          {metrics.map((m) => (
            <div key={m.label} style={{
              padding: "28px 24px",
              borderRight: `1px solid ${C.border}`,
              borderBottom: `1px solid ${C.border}`,
            }}>
              <p style={{ fontSize: "28px", fontWeight: 500, color: C.accent, marginBottom: "6px", lineHeight: 1 }}>
                {m.value}
              </p>
              <p style={{ fontSize: "11px", color: C.textMuted, letterSpacing: "0.05em" }}>
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section style={{ padding: "64px 40px", borderBottom: `1px solid ${C.border}`, maxWidth: "860px" }}>
        <h2 style={{
          fontSize: "11px",
          color: C.accent,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "28px",
          fontWeight: 400,
        }}>
          The Problem
        </h2>
        <div style={{ fontSize: "15px", color: C.textSecondary, lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            USDA's food datasets — FoodData Central and the legacy FNDDS — contain over 13,000 records.
            They include raw whole foods, processed variants, industrial compounds, laboratory standards,
            and dozens of near-duplicate entries at varying levels of specificity.
          </p>
          <p>
            The startup needed a clean, categorized ingredient database for{" "}
            <span style={{ color: C.textPrimary }}>recipe matching, nutrition display, and dietary restriction filtering</span>.
            No off-the-shelf dataset matched the shape we needed, and manual curation at this scale would
            have taken weeks and introduced inconsistencies.
          </p>
          <p>
            The pipeline needed to be{" "}
            <span style={{ color: C.textPrimary }}>reproducible, auditable, and fast enough</span>{" "}
            to re-run as the USDA data or category schema evolved.
          </p>
        </div>
      </section>

      {/* 8-phase pipeline */}
      <section style={{ padding: "64px 40px", borderBottom: `1px solid ${C.border}` }}>
        <h2 style={{
          fontSize: "11px",
          color: C.accent,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "32px",
          fontWeight: 400,
        }}>
          The 8-Phase Pipeline
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1px",
          backgroundColor: C.border,
          border: `1px solid ${C.border}`,
          borderRadius: "12px",
          overflow: "hidden",
        }}>
          {phases.map((phase) => (
            <div key={phase.num} style={{
              backgroundColor: C.surface,
              padding: "24px",
            }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "10px" }}>
                <span style={{ fontSize: "11px", color: C.accent, fontVariantNumeric: "tabular-nums", letterSpacing: "0.1em" }}>
                  {phase.num}
                </span>
                <span style={{ fontSize: "13px", fontWeight: 500, color: C.textPrimary }}>
                  {phase.name}
                </span>
              </div>
              <p style={{ fontSize: "12px", color: C.textMuted, lineHeight: 1.7 }}>
                {phase.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Data architecture */}
      <section style={{ padding: "64px 40px", borderBottom: `1px solid ${C.border}` }}>
        <h2 style={{
          fontSize: "11px",
          color: C.accent,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "32px",
          fontWeight: 400,
        }}>
          3-Tier Ingredient Hierarchy
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px", maxWidth: "600px", marginBottom: "32px" }}>
          {[
            { level: "Level 1", count: "17 categories", examples: "Proteins · Grains · Produce · Dairy · Fats & Oils", indent: 0 },
            { level: "Level 2", count: "29 groups", examples: "Leafy Greens · Root Vegetables · Citrus · Tree Fruits", indent: 1 },
            { level: "Level 3", count: "1,900+ ingredients", examples: "Spinach · Carrot · Lemon · Granny Smith Apple", indent: 2 },
          ].map((tier) => (
            <div
              key={tier.level}
              style={{
                backgroundColor: tier.indent === 0 ? C.surfaceHigh : tier.indent === 1 ? C.surface : "#121212",
                border: `1px solid ${C.border}`,
                borderRadius: "8px",
                padding: "16px 20px",
                marginLeft: `${tier.indent * 24}px`,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px", gap: "12px" }}>
                <span style={{ fontSize: "11px", color: C.accent, letterSpacing: "0.1em" }}>{tier.level}</span>
                <span style={{ fontSize: "12px", color: C.textPrimary, fontWeight: 500 }}>{tier.count}</span>
              </div>
              <p style={{ fontSize: "11px", color: C.textMuted }}>e.g. {tier.examples}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: "14px", color: C.textSecondary, lineHeight: 1.75, maxWidth: "560px" }}>
          The hierarchy was designed for the product's filtering UI: Level 1 powers broad dietary
          filters ("Show me Proteins"), Level 2 drives subcategory browsing, and Level 3 is what
          appears in recipe ingredient lists and search.
        </p>
      </section>

      {/* Before / After */}
      <section style={{ padding: "64px 40px", borderBottom: `1px solid ${C.border}` }}>
        <h2 style={{
          fontSize: "11px",
          color: C.accent,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "32px",
          fontWeight: 400,
        }}>
          Before &amp; After
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          maxWidth: "720px",
        }}>
          <div style={{
            backgroundColor: C.surface,
            border: `1px solid ${C.border}`,
            borderRadius: "10px",
            padding: "24px",
          }}>
            <p style={{ fontSize: "11px", color: C.textMuted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>Before</p>
            {[
              "13,000+ raw USDA records",
              "Duplicates across datasets",
              "Non-food & lab entries",
              "Inconsistent naming",
              "No category structure",
              "No dietary tags",
            ].map((item) => (
              <div key={item} style={{ fontSize: "13px", color: C.textSecondary, padding: "6px 0", borderBottom: `1px solid ${C.border}` }}>
                {item}
              </div>
            ))}
          </div>
          <div style={{
            backgroundColor: C.surface,
            border: `1px solid #51C9DB22`,
            borderRadius: "10px",
            padding: "24px",
          }}>
            <p style={{ fontSize: "11px", color: C.accent, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>After</p>
            {[
              "1,900+ production ingredients",
              "Deduplicated & merged",
              "Food-only, recipe-relevant",
              "Standardized names & forms",
              "3-tier category hierarchy",
              "95%+ automated diet tags",
            ].map((item) => (
              <div key={item} style={{ fontSize: "13px", color: C.textPrimary, padding: "6px 0", borderBottom: `1px solid ${C.border}` }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo video placeholder */}
      <section style={{ padding: "64px 40px", borderBottom: `1px solid ${C.border}` }}>
        <h2 style={{
          fontSize: "11px",
          color: C.accent,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "32px",
          fontWeight: 400,
        }}>
          Product Demo
        </h2>
        <div style={{
          backgroundColor: C.surface,
          border: `1px dashed ${C.borderMid}`,
          borderRadius: "12px",
          padding: "64px 40px",
          maxWidth: "720px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: "12px",
        }}>
          <div style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            border: `1px solid ${C.borderMid}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "8px",
          }}>
            <span style={{ color: C.accent, fontSize: "18px" }}>▶</span>
          </div>
          <p style={{ fontSize: "14px", color: C.textSecondary }}>Demo video coming soon</p>
          <p style={{ fontSize: "12px", color: C.textMuted }}>
            A walkthrough of the pipeline and the product it powers is being prepared.
          </p>
        </div>
      </section>

      {/* Tech stack */}
      <section style={{ padding: "64px 40px", borderBottom: `1px solid ${C.border}` }}>
        <h2 style={{
          fontSize: "11px",
          color: C.accent,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "28px",
          fontWeight: 400,
        }}>
          Tech Stack
        </h2>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {["Python", "Anthropic API (Claude)", "CSV / Pandas", "PostgreSQL", "Rust / Loco (downstream seeder)"].map((t) => (
            <span key={t} style={{
              fontSize: "12px",
              color: C.textMuted,
              backgroundColor: C.border,
              padding: "6px 14px",
              borderRadius: "6px",
              border: `1px solid #2a2a2a`,
            }}>
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Footer nav */}
      <div style={{ padding: "32px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/#projects" style={{
          fontSize: "12px",
          color: C.textMuted,
          textDecoration: "none",
          letterSpacing: "0.05em",
        }}>
          ← Back to Projects
        </Link>
        <Link href="/#contact" style={{
          fontSize: "12px",
          color: C.accent,
          textDecoration: "none",
          letterSpacing: "0.05em",
        }}>
          Get in touch →
        </Link>
      </div>
    </div>
  );
}
