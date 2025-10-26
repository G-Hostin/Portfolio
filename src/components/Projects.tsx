"use client";

import projetsContent from "../content/projects.json";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import { makeIconComponent } from "@/lib/si";
import { siGithub } from "simple-icons/icons";

const GitHubIcon = makeIconComponent(siGithub);

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
          testimonials={projetsContent}
          autoplay={true}
          colors={{
            name: "#ffffff",
            designation: "#cccccc",
            testimony: "#dddddd",
            arrowBackground: "#1f1f1f",
            arrowForeground: "#ffffff",
            arrowHoverBackground: "#ffffff",
          }}
          renderActions={(t) => (
            <div className="flex flex-wrap justify-center gap-3">
              {t.links?.github && (
                <a
                  href={t.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-white/90 transition"
                >
                  <GitHubIcon
                    className="h-4 w-4 text-neutral-900"
                    aria-hidden
                  />
                  GitHub
                </a>
              )}
              {t.links?.demo && (
                <a
                  href={t.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-neutral-200 hover:bg-white/10 transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          )}
        />
      </div>
    </section>
  );
}
