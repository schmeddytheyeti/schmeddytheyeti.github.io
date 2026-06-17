const C = {
  border: "#1e1e1e",
  accent: "#51C9DB",
  textPrimary: "#e8e8e8",
  textSecondary: "#888888",
  textMuted: "#7a7a7a",
};

const stats = [
  { label: "Most Recent Role", value: "Technical Advisor, Food-Tech Startup" },
  { label: "Location", value: "Rochester, MN" },
  { label: "Experience", value: "3+ years" },
  { label: "Focus", value: "Rust · Python · TypeScript" },
  { label: "Background", value: "Biotechnology · Bartending" },
  { label: "SQL Cert", value: "TestDome Gold · Top 10% Globally" },
  { label: "Rust Book", value: "Brown Univ. Interactive Edition" },
];

export default function About() {
  return (
    <section id="about" className="section" style={{ borderBottom: `1px solid ${C.border}` }}>
      <h2 style={{
        fontSize: "11px",
        color: C.accent,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        marginBottom: "32px",
        fontWeight: 400,
      }}>
        About
      </h2>
      <div className="grid-2col">
        <div style={{ fontSize: "14px", color: C.textSecondary, lineHeight: 1.75, display: "flex", flexDirection: "column", gap: "16px" }}>
          <p>
            I'm a self-taught engineer who spent 3+ years as a generalist at an early-stage food-tech startup — doing the work of a{" "}
            <span style={{ color: C.textPrimary }}>data engineer, backend developer, and frontend developer</span>
            {" "}on a small team where wearing many hats is the job.
          </p>
          <p>
            Before tech, I spent years behind the bar — which taught me how to read a room, adapt fast, and make
            complicated things feel effortless. I bring that same instinct to engineering.
          </p>
          <p>
            Most recently, I built ingredient data infrastructure in{" "}
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
                gap: "16px",
              }}
            >
              <span style={{ fontSize: "12px", color: C.textMuted, flexShrink: 0 }}>{label}</span>
              <span style={{ fontSize: "12px", color: C.textPrimary, fontWeight: 500, textAlign: "right" }}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
