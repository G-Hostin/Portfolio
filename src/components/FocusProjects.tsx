"use client";

import Image from "next/image";
import React from "react";

// --- (optionnel) si tu as déjà fromSimpleIconData, sinon remplace par /public/*.svg ---
import { fromSimpleIconData, makeIconComponent } from "@/lib/si";
import {
  siReact,
  siRedux,
  siJavascript,
  siSass,
  siReactrouter,
  siNodedotjs,
  siGithub,
} from "simple-icons/icons";

const ReactIcon = makeIconComponent(siReact);
const ReduxIcon = makeIconComponent(siRedux);
const JSIcon = makeIconComponent(siJavascript);
const SassIcon = makeIconComponent(siSass);
const RouterIcon = makeIconComponent(siReactrouter);
const NodeIcon = makeIconComponent(siNodedotjs);
const GitHubIcon = makeIconComponent(siGithub);

type Project = {
  id: string;
  title: string;
  cover: string;
  tech: {
    name: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }[];
  context: string;
  goals: string[];
  stack: string[];
  skills: string[];
  results: string[];
  improvements: string[];
  links: { github?: string; demo?: string; video?: string };
};

// --- CONTENU ---
const PROJECTS: Project[] = [
  {
    id: "argentbank",
    title: "ArgentBank — Secure Banking App",
    cover: "/images/projects/argentbank2.png",
    tech: [
      { name: "React", Icon: ReactIcon },
      { name: "Redux", Icon: ReduxIcon },
      { name: "Node.js", Icon: NodeIcon },
    ],
    context:
      "Application bancaire front-end construite à partir d’une API existante : authentification, gestion de session et mise à jour du profil utilisateur.",
    goals: [
      "Implémenter une authentification sécurisée (login, token, persistence).",
      "Créer des vues protégées et un flux utilisateur fluide (connexion → tableau de bord → édition profil).",
      "Structurer le state global avec Redux, actions asynchrones et slices.",
    ],
    stack: [
      "React (hooks, composants contrôlés)",
      "Redux Toolkit (slices, thunks)",
      "REST API (JWT, endpoints profil)",
    ],
    skills: [
      "Gestion d’état global et logique async côté client",
      "Sécurisation de routes (guards) et redirections",
      "Modélisation des types de données côté front",
      "Tests manuels des scénarios critiques (auth, edit profil)",
    ],
    results: [
      "Parcours d’authentification complet et stable",
      "Mise à jour du profil en temps réel",
      "Structure Redux claire, facilement extensible",
    ],
    improvements: [
      "Ajouter des tests e2e (Cypress/Playwright)",
      "Gérer le refresh token / rotation de tokens",
      "Mettre en place des messages d’erreurs UX plus détaillés",
    ],
    links: {
      github: "https://github.com/G-Hostin/ArgentBank-Frontend",
      demo: "https://argent-bank-mu.vercel.app/",
    },
  },
  {
    id: "kasa",
    title: "Kasa — Housing Rental UI",
    cover: "/images/projects/kasa2.png",
    tech: [
      { name: "React", Icon: ReactIcon },
      { name: "Router", Icon: RouterIcon },
      { name: "Sass", Icon: SassIcon },
      { name: "JavaScript", Icon: JSIcon },
    ],
    context:
      "Refonte d’une application de location de logements : routing dynamique, composants réutilisables, gestion d’erreurs et animations légères.",
    goals: [
      "Mettre en place un router côté client avec pages dynamiques (slug/ID).",
      "Créer des composants UI modulaires (galerie, tags, collapses).",
      "Soigner l’accessibilité et les états vides/erreurs.",
    ],
    stack: [
      "React + React Router",
      "Sass/SCSS (architecture utilitaire légère)",
      "Lighthouse checks",
    ],
    skills: [
      "Routing (params, 404, redirections)",
      "Composition de composants et lifting state",
      "Optimisations de rendu et lazy-loading des assets",
    ],
    results: [
      "Interface responsive et accessible",
      "Navigation fluide entre les logements",
      "Codebase claire et documentée",
    ],
    improvements: [
      "Internationalisation (fr/en) et formats de date",
      "Pré-chargement conditionnel des images de galerie",
      "Tests unitaires des composants clés",
    ],
    links: {
      github: "https://github.com/G-Hostin/Kasa",
      demo: "https://kasa-ghostin.vercel.app/",
    },
  },
];

function TechBadges({ tech }: { tech: Project["tech"] }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {tech.map(({ name, Icon }) => (
        <li
          key={name}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/80"
        >
          <Icon aria-hidden />
          <span className="text-sm">{name}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-semibold text-neutral-300">{title}</h4>
      <ul className="list-disc pl-5 space-y-1 text-neutral-200">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900/60 to-neutral-900/20 p-4 md:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
      {/* COLONNE GAUCHE — titre + desc + image + badges */}
      <div className="md:col-span-5">
        <div className="h-full flex flex-col justify-center gap-4 rounded-xl bg-white/[0.03] p-4 ring-1 ring-white/5">
          {/* Titre + description */}
          <header className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-semibold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              {p.title}
            </h3>
            <p className="text-neutral-300">{p.context}</p>
          </header>

          {/* Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-white/10">
            <Image
              src={p.cover}
              alt={`${p.title} screenshot`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
          </div>

          {/* Badges stack */}
          <TechBadges tech={p.tech} />
        </div>
      </div>

      {/* COLONNE DROITE — listes + liens */}
      <div className="md:col-span-7 rounded-xl p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <SectionList title="Objectifs" items={p.goals} />
          <SectionList title="Stack technique" items={p.stack} />
          <SectionList title="Skills développés" items={p.skills} />
          <SectionList title="Resultats & impacts" items={p.results} />
        </div>

        <div className="mt-6">
          <SectionList title="Améliorations" items={p.improvements} />
        </div>

        {/* Liens */}
        <div className="mt-10 flex flex-wrap gap-3">
          {p.links.github && (
            <a
              href={p.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-white/90 transition"
            >
              {/* GitHub noir par défaut */}
              <GitHubIcon className="h-4 w-4 text-neutral-900" aria-hidden />
              GitHub
            </a>
          )}
          {p.links.demo && (
            <a
              href={p.links.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-neutral-200 hover:bg-white/10 transition"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function FocusProjects() {
  return (
    <section
      id="featured-projects"
      className="w-full bg-black/90 text-white py-20 px-4 md:px-12 flex justify-center"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold leading-normal bg-clip-text text-center mb-12 text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Projets clés
        </h2>

        <div className="space-y-10">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
