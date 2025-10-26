"use client";

import { SplineScene } from "@/components/ui/splite";

export default function Hero() {
  return (
    <section className="w-full min-h-[40vh] bg-black/80 flex items-center overflow-hidden">
      <div className="flex w-full h-[40vh] flex-col md:flex-row overflow-hidden">
        {/* Texte */}
        <div className="flex-1 flex flex-col justify-center px-8 py-12 text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-normal bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Grégory Hostin
          </h1>
          <p className="mt-4 text-neutral-300 max-w-xl">
            Développeur front-end, je crée des interfaces où les lignes de code
            deviennent invisibles, au service de l’émotion et de l’expérience.
          </p>
          <div className="mt-6 flex flex-row gap-4">
            <a
              href="#contact"
              className="cta-animate px-6 py-3 text-sm font-medium rounded-full bg-neutral-200 text-neutral-950"
            >
              Contactez-moi
            </a>
            <a
              href="#projects"
              className="cta-animate px-6 py-3 text-sm font-medium rounded-full border border-neutral-200 text-neutral-200"
            >
              Découvrez mes projets
            </a>
          </div>
        </div>

        {/* Spline 3D */}
        <div className="flex-1 relative h-full">
          <div className="absolute inset-0">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
