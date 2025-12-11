const stats = [
  {
    id: "comunidad",
    label: "Comunidad global",
    value: "48,000+",
    detail: "Personas practicando juntos cada día."
  },
  {
    id: "mentorias",
    label: "Sesiones guiadas",
    value: "3,200",
    detail: "Mentorías completadas este mes."
  },
  {
    id: "satisfaccion",
    label: "Nivel de satisfacción",
    value: "97%",
    detail: "Usuarios recomiendan Hispania a un amigo."
  }
];

export function StatsBar() {
  return (
    <div className="stat-grid" aria-label="Estadísticas de la plataforma">
      {stats.map((stat) => (
        <article key={stat.id} className="stat-card">
          <span style={{ fontSize: "0.9rem", opacity: 0.9 }}>{stat.label}</span>
          <strong>{stat.value}</strong>
          <span style={{ opacity: 0.8 }}>{stat.detail}</span>
        </article>
      ))}
    </div>
  );
}
