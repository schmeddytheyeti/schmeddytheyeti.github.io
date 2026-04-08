const C = {
  border: "#1e1e1e",
  accent: "#51C9DB",
  textPrimary: "#e8e8e8",
  textSecondary: "#888888",
  textMuted: "#555555",
};

const stats = [
  { label: "Current Role", value: "Technical Advisor, CooksAtlas" },
  { label: "Location", value: "Rochester, MN" },
  { label: "Experience", value: "3+ years" },
  { label: "Focus", value: "Rust · Python · React" },
  { label: "Background", value: "Biotechnology · Bartending" },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "64px 40px", borderBottom: `1px solid ${C.border}` }}>
      <p style={{
        fontSize: "11px",
        color: C.accent,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        marginBottom: "32px",
      }}>
        About
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
        <div style={{ fontSize: "14px", color: C.textSecondary, lineHeight: 1.75, display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            I'm a self-taught engineer operating as a generalist at a food-tech startup — doing the work of a{" "}
            <span style={{ color: C.textPrimary }}>data engineer, backend developer, and frontend developer</span>
            {" "}on a small team where wearing many hats is the job.
          </p>
          <p>
            Before tech, I spent years behind the bar — which taught me how to read a room, adapt fast, and make
            complicated things feel effortless. I bring that same instinct to engineering.
          </p>
          <p>
            Currently building ingredient data infrastructure in{" "}
            <span style={{ color: C.textPrimary }}>Rust + PostgreSQL</span>
            {" "}and LLM-assisted pipelines using the Anthropic API.
          </p>
        </div>
        <div>
          {stats.map(({ label, value }, i) => (
            <div
              key={label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 0",
                borderTop: i === 0 ? `1px solid ${C.border}` : undefined,
                borderBottom: `1px solid ${C.border}`,
              }}
            >
              <span style={{ fontSize: "12px", color: C.textMuted }}>{label}</span>
              <span style={{ fontSize: "12px", color: C.textPrimary, fontWeight: 500 }}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
