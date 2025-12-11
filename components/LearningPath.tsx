import { ReactNode } from "react";

type PathModule = {
  id: string;
  title: string;
  description: string;
  focus: string[];
  icon: ReactNode;
  level: "Inicial" | "Intermedio" | "Avanzado";
};

const modules: PathModule[] = [
  {
    id: "basics",
    title: "Fundamentos Esenciales",
    description:
      "Domina saludos, presentaciones, pronunciación y verbos básicos para construir frases completas desde el primer día.",
    focus: ["Fonética", "Vocabulario cotidiano", "Conjugación presente"],
    icon: "🌱",
    level: "Inicial"
  },
  {
    id: "fluidez",
    title: "Confianza Conversacional",
    description:
      "Mejora tu fluidez con situaciones reales, dominio de tiempos pasados y expresiones idiomáticas frecuentes.",
    focus: ["Pasado simple", "Expresiones coloquiales", "Comprensión auditiva"],
    icon: "🗣️",
    level: "Intermedio"
  },
  {
    id: "excelencia",
    title: "Excelencia Cultural",
    description:
      "Profundiza en matices culturales, storytelling avanzado y estrategias para certificar tu nivel oficial.",
    focus: ["Subjuntivo", "Narrativa", "Preparación DELE"],
    icon: "🚀",
    level: "Avanzado"
  }
];

export function LearningPath() {
  return (
    <section className="card gradient-border" aria-labelledby="ruta-aprendizaje">
      <span className="tag">Ruta guiada</span>
      <h3 id="ruta-aprendizaje">Tu viaje al dominio del español</h3>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.75rem", lineHeight: 1.7 }}>
        Sigue un itinerario curado por expertos con metas claras, evaluaciones periódicas y proyectos
        aplicados que conectan con tu realidad profesional y personal.
      </p>
      <div style={{ display: "grid", gap: "1.25rem" }}>
        {modules.map((module) => (
          <article
            key={module.id}
            className="floating-card"
            style={{ background: "rgba(255,255,255,0.92)", borderColor: "rgba(67,97,238,0.2)" }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div className="pill">{module.level}</div>
              <div style={{ fontSize: "1.75rem" }}>{module.icon}</div>
            </div>
            <strong>{module.title}</strong>
            <p style={{ margin: 0, color: "var(--color-muted)", lineHeight: 1.6 }}>
              {module.description}
            </p>
            <div className="pill-group">
              {module.focus.map((item) => (
                <span className="pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
