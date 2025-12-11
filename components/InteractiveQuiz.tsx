// Simple quiz to reinforce vocabulary with immediate feedback.
"use client";

import { useMemo, useState } from "react";

type Option = {
  id: string;
  label: string;
  correct: boolean;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  hint: string;
  options: Option[];
};

const QUIZ_POOL: QuizQuestion[] = [
  {
    id: "saludos",
    prompt: "¿Cómo se dice “Good morning” en español?",
    hint: "Es una expresión que inicia con la palabra 'Buenos'.",
    options: [
      { id: "a", label: "Buenas tardes", correct: false },
      { id: "b", label: "Buenos días", correct: true },
      { id: "c", label: "Buenas noches", correct: false },
      { id: "d", label: "Hola", correct: false }
    ]
  },
  {
    id: "colores",
    prompt: "Selecciona el color que representa la palabra “verde”.",
    hint: "Piensa en el color de la naturaleza.",
    options: [
      { id: "a", label: "Green", correct: true },
      { id: "b", label: "Blue", correct: false },
      { id: "c", label: "Purple", correct: false },
      { id: "d", label: "Yellow", correct: false }
    ]
  },
  {
    id: "verbos",
    prompt: "¿Cuál es la conjugación correcta del verbo “ser” para 'nosotros/as'?",
    hint: "Recuerda que se utiliza para describir identidad permanente.",
    options: [
      { id: "a", label: "Soy", correct: false },
      { id: "b", label: "Eres", correct: false },
      { id: "c", label: "Somos", correct: true },
      { id: "d", label: "Son", correct: false }
    ]
  }
];

const messages = {
  success: [
    "¡Excelente! Sigues construyendo tu dominio del español.",
    "¡Lo lograste! Tu intuición en español está creciendo.",
    "Respuesta correcta. ¡Cada día eres más fluido!"
  ],
  error: [
    "No te preocupes, vuelve a intentarlo con calma.",
    "Casi lo consigues. Lee la pista y prueba otra vez.",
    "El error es parte del aprendizaje. ¡Intenta con otra opción!"
  ]
};

export function InteractiveQuiz() {
  const questions = useMemo(() => QUIZ_POOL, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIndex];

  const handleSelect = (option: Option) => {
    setSelected(option.id);
    if (option.correct) {
      setStatus("correct");
      setScore((prev) => prev + 1);
    } else {
      setStatus("wrong");
    }
  };

  const handleNext = () => {
    if (currentIndex === questions.length - 1) {
      setCurrentIndex(0);
      setScore(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
    setSelected(null);
    setStatus("idle");
  };

  const feedback =
    status === "correct"
      ? messages.success[currentIndex % messages.success.length]
      : messages.error[currentIndex % messages.error.length];

  return (
    <section className="card gradient-border" aria-labelledby="quiz-title">
      <span className="tag">Práctica Express</span>
      <h3 id="quiz-title">{currentQuestion.prompt}</h3>
      <p style={{ marginBottom: "1.25rem", color: "var(--color-muted)" }}>
        Pista: {currentQuestion.hint}
      </p>
      <div
        style={{
          display: "grid",
          gap: "0.75rem",
          marginBottom: "1.25rem"
        }}
      >
        {currentQuestion.options.map((option) => {
          const isSelected = selected === option.id;
          const background =
            status === "correct" && isSelected
              ? "rgba(46, 204, 113, 0.12)"
              : status === "wrong" && isSelected
                ? "rgba(231, 76, 60, 0.12)"
                : "rgba(15,23,42,0.06)";
          const borderColor =
            status === "correct" && isSelected
              ? "rgba(46, 204, 113, 0.48)"
              : status === "wrong" && isSelected
                ? "rgba(231, 76, 60, 0.48)"
                : "transparent";

          return (
            <button
              key={option.id}
              onClick={() => handleSelect(option)}
              className="button-secondary"
              style={{
                justifyContent: "flex-start",
                background,
                borderColor,
                fontWeight: 500
              }}
              type="button"
              disabled={status === "correct" && !option.correct}
            >
              {option.label}
            </button>
          );
        })}
      </div>
      {status !== "idle" && (
        <div
          style={{
            padding: "1rem 1.25rem",
            borderRadius: "var(--radius-md)",
            background:
              status === "correct"
                ? "rgba(46, 204, 113, 0.15)"
                : "rgba(231, 76, 60, 0.12)",
            color: status === "correct" ? "#145a32" : "#7f1d1d",
            marginBottom: "1.25rem"
          }}
        >
          {feedback}
        </div>
      )}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontWeight: 600 }}>
          Progreso: {currentIndex + 1}/{questions.length} · Puntuación: {score}
        </span>
        <button className="button-primary" onClick={handleNext}>
          {currentIndex === questions.length - 1 ? "Reiniciar" : "Siguiente"}
        </button>
      </div>
    </section>
  );
}
