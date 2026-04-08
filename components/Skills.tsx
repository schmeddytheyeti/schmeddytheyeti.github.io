const C = {
  border: "#1e1e1e",
  accent: "#51C9DB",
  textSecondary: "#888888",
};

const groups = [
  { title: "Languages", items: ["Rust", "Python", "TypeScript", "SQL"] },
  { title: "Backend & Data", items: ["PostgreSQL", "Loco / SeaORM", "ETL Pipelines", "Anthropic API"] },
  { title: "Frontend & Tools", items: ["React / Next.js", "Git / GitHub", "Figma · Notion", "Google Sheets"] },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "64px 40px", borderBottom: `1px solid ${C.border}` }}>
      <p style={{
        fontSize: "11px",
        color: C.accent,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        marginBottom: "32px",
      }}>
        Skills
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "32px" }}>
        {groups.map((g) => (
          <div key={g.title}>
            <p style={{
              fontSize: "11px",
              color: C.accent,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}>
              {g.title}
            </p>
            <div>
              {g.items.map((item, i) => (
                <div
                  key={item}
                  style={{
                    fontSize: "14px",
                    color: C.textSecondary,
                    padding: "10px 0",
                    borderTop: i === 0 ? `1px solid ${C.border}` : undefined,
                    borderBottom: `1px solid ${C.border}`,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
