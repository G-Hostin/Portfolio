"use client";

import { CircularTestimonials } from "@/components/ui/circular-testimonials";

const projects = [
  {
    quote:
      "Application bancaire sécurisée avec authentification, gestion de profil et Redux.",
    name: "ArgentBank",
    designation: "React • Redux • Authentification • API",
    src: "/images/projects/argentbank.png",
  },
  {
    quote:
      "Débogage complet et finalisation d’un site vitrine pour une agence évènementielle.",
    name: "724 Events",
    designation: "Debug • Front-End • Vanilla JS",
    src: "/images/projects/724events.png",
  },
  {
    quote:
      "Optimisation SEO et accessibilité pour le portfolio d’une photographe professionnelle.",
    name: "Nina Carducci",
    designation: "SEO • Accessibilité • Performance",
    src: "/images/projects/ninacarducci.webp",
  },
  {
    quote:
      "Application React pour la réservation de logements avec gestion des routes et composants dynamiques.",
    name: "Kasa",
    designation: "React • Routing • Composants dynamiques",
    src: "/images/projects/kasa.png",
  },
  {
    quote:
      "Développement d’un portfolio d’architecte d’intérieur avec back-end Node.js.",
    name: "Sophie Bluel",
    designation: "JavaScript • API • DOM • CRUD",
    src: "/images/projects/sophie-bluel.webp",
  },
  {
    quote:
      "Site mobile-first listant des menus gastronomiques avec animations CSS et performance optimisée.",
    name: "OhMyFood",
    designation: "HTML • SCSS • Animations • Mobile First",
    src: "/images/projects/ohmyfood.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full bg-black/90 text-white py-20 px-4 md:px-12 flex justify-center"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold leading-normal bg-clip-text text-center mb-12 text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Projets de formation
        </h2>
        <CircularTestimonials
          testimonials={projects}
          autoplay={true}
          colors={{
            name: "#ffffff",
            designation: "#cccccc",
            testimony: "#dddddd",
            arrowBackground: "#1f1f1f",
            arrowForeground: "#ffffff",
            arrowHoverBackground: "#ffffff",
          }}
        />
      </div>
    </section>
  );
}
