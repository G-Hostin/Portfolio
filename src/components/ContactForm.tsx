"use client";

import React from "react";

type Status = "normal" | "sending" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [touched, setTouched] = React.useState({
    name: false,
    email: false,
    message: false,
  });

  const [status, setStatus] = React.useState<Status>("normal");
  const [shake, setShake] = React.useState(false);

  // --- validations ultra simples
  const nameError =
    name.trim().length < 2 ? "Veuillez renseigner votre nom." : "";
  const emailError = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ? ""
    : "Adresse e-mail invalide.";
  const messageError =
    message.trim().length < 10
      ? "Message trop court (10 caractères min.)."
      : "";

  const hasErrors = !!(nameError || emailError || messageError);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // force l’affichage des erreurs si l’utilisateur n’a pas “touché” tous les champs
    setTouched({ name: true, email: true, message: true });

    if (hasErrors) {
      // animation “shake” CSS
      setShake(true);
      setTimeout(() => setShake(false), 400);
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await fetch("https://formspree.io/f/xovpvagn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setTouched({ name: false, email: false, message: false });
    } catch (err) {
      setStatus("error");
      setShake(true);
      setTimeout(() => setShake(false), 400);
      console.error(err);
    }
  }

  return (
    <section
      id="contact"
      className="w-full bg-black/90 text-white py-20 px-4 md:px-12 flex justify-center flex-col items-center"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold leading-normal bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Contactez-moi
        </h2>
        <p className="mt-3 text-neutral-300 max-w-3xl mx-auto">
          Un projet en tête ou une question ? Contactez-moi via ce formulaire.
        </p>
      </div>
      <form
        onSubmit={onSubmit}
        noValidate
        aria-busy={status === "sending"}
        className={[
          "max-w-6xl w-full",
          "relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8",
          "shadow-[0_8px_24px_rgba(0,0,0,0.35)]",
          shake ? "animate-shake" : "",
        ].join(" ")}
      >
        {/* barre de chargement */}
        {status === "sending" && (
          <div className="absolute left-0 top-0 h-[3px] w-full overflow-hidden">
            <div className="h-full w-full bg-white/90 animate-shimmer" />
          </div>
        )}

        <h3 className="mb-6 text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
          Me contacter
        </h3>

        {/* NOM */}
        <label className="mb-1 block text-sm text-neutral-300" htmlFor="name">
          Nom
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, name: true }))}
          disabled={status === "sending"}
          className={[
            "mb-3 w-full rounded-lg border bg-black/40 px-3 py-2 text-white placeholder:text-neutral-500 focus:outline-none",
            "border-white/10 focus:ring-2",
            touched.name && nameError
              ? "border-red-400/40 focus:ring-red-400/40"
              : "focus:ring-white/20",
            "disabled:opacity-60 disabled:cursor-not-allowed",
          ].join(" ")}
          placeholder="Votre nom"
          aria-invalid={!!(touched.name && nameError)}
          aria-describedby={
            touched.name && nameError ? "name-error" : undefined
          }
        />
        {touched.name && nameError && (
          <p id="name-error" className="mb-3 text-sm text-red-400" role="alert">
            {nameError}
          </p>
        )}

        {/* EMAIL */}
        <label className="mb-1 block text-sm text-neutral-300" htmlFor="email">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, email: true }))}
          disabled={status === "sending"}
          className={[
            "mb-3 w-full rounded-lg border bg-black/40 px-3 py-2 text-white placeholder:text-neutral-500 focus:outline-none",
            "border-white/10 focus:ring-2",
            touched.email && emailError
              ? "border-red-400/40 focus:ring-red-400/40"
              : "focus:ring-white/20",
            "disabled:opacity-60 disabled:cursor-not-allowed",
          ].join(" ")}
          placeholder="votre@email.com"
          aria-invalid={!!(touched.email && emailError)}
          aria-describedby={
            touched.email && emailError ? "email-error" : undefined
          }
        />
        {touched.email && emailError && (
          <p
            id="email-error"
            className="mb-3 text-sm text-red-400"
            role="alert"
          >
            {emailError}
          </p>
        )}

        {/* MESSAGE */}
        <label
          className="mb-1 block text-sm text-neutral-300"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, message: true }))}
          disabled={status === "sending"}
          className={[
            "mb-3 min-h-[140px] w-full rounded-lg border bg-black/40 px-3 py-2 text-white placeholder:text-neutral-500 focus:outline-none",
            "border-white/10 focus:ring-2",
            touched.message && messageError
              ? "border-red-400/40 focus:ring-red-400/40"
              : "focus:ring-white/20",
            "disabled:opacity-60 disabled:cursor-not-allowed",
          ].join(" ")}
          placeholder="Votre message…"
          aria-invalid={!!(touched.message && messageError)}
          aria-describedby={
            touched.message && messageError ? "message-error" : undefined
          }
        />
        {touched.message && messageError && (
          <p
            id="message-error"
            className="mb-3 text-sm text-red-400"
            role="alert"
          >
            {messageError}
          </p>
        )}

        {/* MSG GLOBAL */}
        {status === "success" && (
          <p className="mb-4 rounded-md bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300">
            Merci ! Votre message a bien été envoyé.
          </p>
        )}
        {status === "error" && !hasErrors && (
          <p className="mb-4 rounded-md bg-red-500/10 px-3 py-2 text-sm text-red-300">
            Une erreur est survenue. Réessayez plus tard.
          </p>
        )}

        {/* BOUTON */}
        <button
          type="submit"
          disabled={status === "sending"}
          className={[
            "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5",
            "bg-white text-neutral-900 hover:bg-white/90",
            "border border-white/15 shadow transition",
            "disabled:opacity-60 disabled:cursor-not-allowed",
          ].join(" ")}
        >
          {status === "sending" && (
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-neutral-900 border-t-transparent" />
          )}
          {status === "sending" ? "Envoi…" : "Envoyer"}
        </button>

        {/* anim CSS */}
        <style jsx>{`
          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            50% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          .animate-shimmer {
            animation: shimmer 1.1s ease-in-out infinite;
          }

          @keyframes shake {
            0% {
              transform: translateX(0);
            }
            20% {
              transform: translateX(-6px);
            }
            40% {
              transform: translateX(6px);
            }
            60% {
              transform: translateX(-4px);
            }
            80% {
              transform: translateX(4px);
            }
            100% {
              transform: translateX(0);
            }
          }
          .animate-shake {
            animation: shake 0.35s linear;
          }
        `}</style>
      </form>
    </section>
  );
}
