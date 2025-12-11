import Link from "next/link";
import { FeatureHighlights } from "@/components/FeatureHighlights";
import { InteractiveQuiz } from "@/components/InteractiveQuiz";
import { LearningPath } from "@/components/LearningPath";
import { ResourceShowcase } from "@/components/ResourceShowcase";
import { StatsBar } from "@/components/StatsBar";
import { Testimonials } from "@/components/Testimonials";

const liveEvents = [
  {
    id: "clase",
    title: "Clase abierta · Conecta con tu voz en español",
    date: "Miércoles 19 · 18:00 CET",
    seats: "Quedan 12 cupos",
    focus: "Pronunciación y storytelling"
  },
  {
    id: "taller",
    title: "Taller intensivo · Español profesional",
    date: "Sábado 22 · 10:00 CDT",
    seats: "Quedan 5 cupos",
    focus: "Negociación y pitch"
  }
];

export default function HomePage() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="chip">Español para crear, liderar y disfrutar</div>
          <div className="hero-grid">
            <article className="hero-card">
              <h1>
                Domina el español y <span className="highlight">cuenta tu historia</span> con el mundo.
              </h1>
              <p>
                Hispania es la plataforma inmersiva que mezcla mentorías en vivo, proyectos reales e
                inteligencia artificial para que pienses, hables y sientas en español.
              </p>
              <div className="hero-actions">
                <Link href="#ruta" className="button-primary">
                  Empezar ahora
                </Link>
                <Link href="#agenda" className="button-secondary">
                  Ver agenda de eventos
                </Link>
              </div>
              <StatsBar />
            </article>
            <article className="hero-card gradient-border" id="agenda">
              <span className="tag">Eventos en vivo</span>
              <div style={{ display: "grid", gap: "1.25rem", marginTop: "1.5rem" }}>
                {liveEvents.map((event) => (
                  <div key={event.id} className="floating-card">
                    <div className="pill">{event.focus}</div>
                    <strong>{event.title}</strong>
                    <p style={{ margin: 0, color: "var(--color-muted)" }}>{event.date}</p>
                    <span style={{ fontWeight: 600, color: "var(--color-secondary)" }}>
                      {event.seats}
                    </span>
                    <Link
                      href="#registro"
                      className="button-secondary"
                      style={{ justifyContent: "center" }}
                    >
                      Reservar cupo →
                    </Link>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section">
          <FeatureHighlights />
        </section>

        <section className="section" id="ruta">
          <div className="section-header">
            <span className="chip">Método 360°</span>
            <h2>Una metodología que celebra la diversidad del español</h2>
            <p>
              Explora un ecosistema de aprendizaje diseñado para adaptarse a tus metas personales, con
              sesiones en vivo, laboratorios interactivos y proyectos culturales que conectan con la realidad
              hispanohablante.
            </p>
          </div>
          <div className="card-grid">
            <LearningPath />
            <InteractiveQuiz />
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <span className="chip">Cultura y comunidad</span>
            <h2>Vive experiencias auténticas cada semana</h2>
            <p>
              Sumérgete en actividades en directo, clubs de conversación y recursos exclusivos que te ayudan a
              mantener el ritmo y la motivación. Todo en español, siempre.
            </p>
          </div>
          <ResourceShowcase />
        </section>

        <section className="section">
          <Testimonials />
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Hispania · Construido con amor por el idioma español.</p>
      </footer>
    </>
  );
}
