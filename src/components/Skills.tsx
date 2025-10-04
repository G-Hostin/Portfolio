// Skills.tsx
"use client";

import React from "react";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { fromSimpleIconData } from "@/lib/si"; //transforme l'objet de SI en composant React
import {
  siReact,
  siJavascript,
  siRedux,
  siSass,
  siGit,
  siGithub,
  siTypescript,
  siNextdotjs,
  siHtml5,
} from "simple-icons/icons";

// Harmonise la taille/couleur de tous les logos
const asLogo =
  (Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>) =>
  (p: React.SVGProps<SVGSVGElement>) =>
    <Icon {...p} className="h-10 w-auto sm:h-12 text-white/90" />;

const ReactIcon = asLogo(fromSimpleIconData(siReact));
const JSIcon = asLogo(fromSimpleIconData(siJavascript));
const ReduxIcon = asLogo(fromSimpleIconData(siRedux));
const SassIcon = asLogo(fromSimpleIconData(siSass));
const GitIcon = asLogo(fromSimpleIconData(siGit));
const GitHubIcon = asLogo(fromSimpleIconData(siGithub));
const TSIcon = asLogo(fromSimpleIconData(siTypescript));
const NextIcon = asLogo(fromSimpleIconData(siNextdotjs));
const HtmlIcon = asLogo(fromSimpleIconData(siHtml5));

const logos = [
  { id: 1, name: "React", img: ReactIcon },
  { id: 2, name: "JavaScript", img: JSIcon },
  { id: 3, name: "Redux", img: ReduxIcon },
  { id: 4, name: "Sass", img: SassIcon },
  { id: 5, name: "Git", img: GitIcon },
  { id: 6, name: "GitHub", img: GitHubIcon },
  { id: 7, name: "TypeScript", img: TSIcon },
  { id: 8, name: "Next.js", img: NextIcon },
  { id: 9, name: "HTML5", img: HtmlIcon },
];

export default function Skills() {
  return (
    <section
      id="clients"
      className="w-full bg-black/90 text-white py-20 px-4 md:px-12 flex justify-center"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold leading-normal bg-clip-text text-center mb-12 text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Mes compétences
        </h2>

        <div className="mx-auto max-w-screen-lg">
          <div className="flex justify-center">
            <LogoCarousel columnCount={3} logos={logos} />
          </div>
        </div>
      </div>
    </section>
  );
}
