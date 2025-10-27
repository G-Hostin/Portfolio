"use client";
import { SplineScene } from "@/components/ui/splite";

export default function HeroMobile() {
  return (
    <section className="relative w-full min-h-[70vh] bg-black/80 overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0 opacity-60">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full px-8 md:pl-16 lg:pl-24 py-12 text-white">
        <h1 className="text-4xl font-bold leading-normal bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Grégory Hostin
        </h1>
        <p className="mt-4 text-neutral-300 max-w-xl">
          Développeur front-end, je crée des interfaces où les lignes de code
          deviennent invisibles, au service de l’émotion et de l’expérience.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="cta-animate px-6 py-3 text-sm font-medium rounded-full bg-neutral-200 text-neutral-950 text-center"
          >
            Contactez-moi
          </a>
          <a
            href="#projects"
            className="cta-animate px-6 py-3 text-sm font-medium rounded-full border border-neutral-200 text-neutral-200 text-center"
          >
            Découvrez mes projets
          </a>
        </div>
      </div>
    </section>
  );
}
