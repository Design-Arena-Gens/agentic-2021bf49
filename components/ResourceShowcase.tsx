type Resource = {
  id: string;
  title: string;
  description: string;
  format: string;
  duration: string;
  link: string;
};

const resources: Resource[] = [
  {
    id: "podcast",
    title: "Crónicas Sonoras",
    description:
      "Mini episodios semanales con historias latinoamericanas narradas a tres velocidades para entrenar el oído.",
    format: "Podcast inmersivo",
    duration: "12 minutos",
    link: "https://www.rtve.es/play/audios/radio-exterior/"
  },
  {
    id: "cineclub",
    title: "Cineclub en directo",
    description:
      "Sesiones mensuales con películas hispanohablantes y debates guiados por guionistas invitados.",
    format: "Cine + debate",
    duration: "90 minutos",
    link: "https://www.cinechile.cl/"
  },
  {
    id: "newsletter",
    title: "Boletín Notas de Español",
    description:
      "Tips lingüísticos, expresiones que marcan tendencia y minihistorias para practicar lectura cada semana.",
    format: "Newsletter interactiva",
    duration: "5 minutos",
    link: "https://www.nytimes.com/es/"
  }
];

export function ResourceShowcase() {
  return (
    <section className="card gradient-border" aria-labelledby="recursos">
      <span className="tag">Recursos premium</span>
      <h3 id="recursos">Escucha, explora y comparte</h3>
      <div className="card-grid">
        {resources.map((resource) => (
          <article key={resource.id} className="card" style={{ boxShadow: "none" }}>
            <div className="pill" style={{ background: "rgba(255,77,109,0.1)" }}>
              {resource.format}
            </div>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <div className="card-footer">
              <span>{resource.duration}</span>
              <a href={resource.link} target="_blank" rel="noreferrer">
                Visitar →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
