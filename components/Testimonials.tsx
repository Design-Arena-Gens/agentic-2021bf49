type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  flag: string;
};

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Lucía Andrade",
    role: "Arquitecta · São Paulo",
    quote:
      "Las mentorías culturales cambiaron mi percepción del español. Ahora puedo liderar proyectos en Latinoamérica con confianza total.",
    flag: "🇧🇷"
  },
  {
    id: "2",
    name: "Marcus Li",
    role: "Product Manager · Singapur",
    quote:
      "Las cápsulas de negocios me dieron el vocabulario exacto para negociar contratos. En tres meses obtuve el DELE B2.",
    flag: "🇸🇬"
  },
  {
    id: "3",
    name: "Aisha Mbaye",
    role: "Consultora educativa · Dakar",
    quote:
      "El acompañamiento personalizado y la comunidad global mantienen mi motivación alta. Aprender español se siente como una celebración.",
    flag: "🇸🇳"
  }
];

export function Testimonials() {
  return (
    <section className="card gradient-border" aria-labelledby="testimonios">
      <span className="tag">Historias reales</span>
      <h3 id="testimonios">Impacto en todo el mundo</h3>
      <div className="card-grid">
        {testimonials.map((testimonial) => (
          <article key={testimonial.id} className="card">
            <div style={{ fontSize: "2rem" }}>{testimonial.flag}</div>
            <blockquote
              style={{
                margin: "1rem 0",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "var(--color-text)"
              }}
            >
              “{testimonial.quote}”
            </blockquote>
            <div>
              <strong>{testimonial.name}</strong>
              <p style={{ margin: 0, color: "var(--color-muted)" }}>{testimonial.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
