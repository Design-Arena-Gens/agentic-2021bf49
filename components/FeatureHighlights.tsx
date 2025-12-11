const highlights = [
  {
    id: "ritmo",
    title: "Ritmo personalizado",
    description:
      "Sesiones adaptativas que calibran la dificultad según tu pronunciación y precisión gramatical."
  },
  {
    id: "coach",
    title: "Coach cultural",
    description:
      "Mentores nativos disponibles cada semana para corregir matices y ayudarte a sonar auténtico."
  },
  {
    id: "laboratorio",
    title: "Laboratorio de acento",
    description:
      "Herramientas interactivas con IA para pulir entonación, ritmo y musicalidad del español."
  }
];

export function FeatureHighlights() {
  return (
    <section className="card gradient-border" aria-labelledby="destacados">
      <span className="tag">Experiencia Hispania</span>
      <h3 id="destacados">Todo lo que necesitas para vivir en español</h3>
      <div className="card-grid">
        {highlights.map((item) => (
          <article key={item.id} className="card" style={{ boxShadow: "none" }}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="card-footer">
              <span>Disponible 24/7</span>
              <span>→</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
