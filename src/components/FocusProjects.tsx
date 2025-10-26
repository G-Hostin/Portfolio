"use client";

import Image from "next/image";
import React from "react";

import PROJECTS_JSON from "@/content/focus-projects.json";

import { makeIconComponent } from "@/lib/si";
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

const ICONS_BY_NAME: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  React: ReactIcon,
  Redux: ReduxIcon,
  JavaScript: JSIcon,
  Sass: SassIcon,
  "React Router": RouterIcon,
  "Node.js": NodeIcon,
};

type ProjectJSON = {
  id: string;
  title: string;
  cover: string;
  tech: string[];
  context: string;
  goals: string[];
  stack: string[];
  skills: string[];
  results: string[];
  improvements: string[];
  links: { github?: string; demo?: string; video?: string };
};

// transforme le JSON en tableau typé
const PROJECTS = PROJECTS_JSON as ProjectJSON[];

function TechBadges({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {tech.map((name) => {
        const Icon = ICONS_BY_NAME[name];
        return (
          <li
            key={name}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/80"
          >
            {Icon ? <Icon aria-hidden /> : null}
            <span className="text-sm">{name}</span>
          </li>
        );
      })}
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

function ProjectCard({ p }: { p: ProjectJSON }) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900/60 to-neutral-900/20 p-4 md:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
      {/* COLONNE GAUCHE titre + desc + image + badges */}
      <div className="md:col-span-5">
        <div className="h-full flex flex-col justify-center gap-4 rounded-xl bg-white/[0.03] p-4 ring-1 ring-white/5">
          <header className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-semibold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              {p.title}
            </h3>
            <p className="text-neutral-300">{p.context}</p>
          </header>

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

          <TechBadges tech={p.tech} />
        </div>
      </div>

      {/* COLONNE DROITE listes + liens */}
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

        <div className="mt-10 flex flex-wrap gap-3">
          {p.links.github && (
            <a
              href={p.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-white/90 transition"
            >
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
