"use client";

import Link from "next/link";
import aboutData from "@/content/about.json"; // requires "resolveJsonModule": true in tsconfig

type AboutItem = { id: string; title: string; body: string };

export default function AboutAccordion() {
  const items = aboutData as AboutItem[];

  return (
    <section
      id="about"
      className="w-full bg-black/90 text-white py-20 px-4 md:px-12 flex justify-center"
    >
      <div className="max-w-6xl w-full">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold leading-normal bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            À propos
          </h2>
          <p className="mt-3 text-neutral-300 max-w-3xl mx-auto">
            Développeur front-end, je crée des interfaces où les lignes de code
            deviennent invisibles, au service de l’émotion et de l’expérience.
          </p>
        </div>

        {/* Card + accordion */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-2 md:p-3 divide-y divide-white/5">
          {items.map((it) => (
            <details key={it.id} className="group">
              <summary
                className={[
                  "list-none cursor-pointer px-4 md:px-5 py-4",
                  "flex items-center justify-between gap-4",
                  "hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
                  "text-left",
                ].join(" ")}
              >
                <span className="text-base md:text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                  {it.title}
                </span>

                {/* Chevron: points vers le bas, puis rotate-180 quand ouvert */}
                <span
                  aria-hidden
                  className="text-white/70 transition-transform duration-200 group-open:rotate-180"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    {/* chevron down */}
                    <path
                      d="M6 9l6 6 6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </summary>

              <div className="px-4 md:px-5 pb-5 text-neutral-300">
                {it.body.split("\n\n").map((p, i) => (
                  <p key={i} className={i ? "mt-3" : undefined}>
                    {p}
                  </p>
                ))}
              </div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white text-neutral-900 px-5 py-2 text-sm font-medium hover:bg-white/90 transition"
          >
            Contactez-moi
          </Link>
        </div>
      </div>
    </section>
  );
}
