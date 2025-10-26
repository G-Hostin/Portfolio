"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full h-16 flex items-center justify-between px-8 bg-black text-white border-b border-white/10 shadow-[0_4px_8px_rgba(255,255,255,0.25)] z-50">
      {/* Logo GHOST */}
      <Link
        href="/"
        aria-label="Aller à l'accueil"
        className="flex items-center space-x-2"
      >
        <div className="relative w-[120px] h-10 shrink-0">
          <Image
            src="/logo.png"
            alt="Logo Ghost"
            fill
            className="object-cover"
            priority
            sizes="120px" // pour le responsive
          />
        </div>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex space-x-6 text-sm text-neutral-300">
        <a href="#projects" className="hover:text-white transition">
          Projets
        </a>
        <a href="#about" className="hover:text-white transition">
          À propos
        </a>
        <a href="#contact" className="hover:text-white transition">
          Contact
        </a>
      </nav>

      {/* Mobile burger */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-start px-6 py-4 space-y-2 md:hidden text-neutral-300 text-sm border-t border-white/10 animate-fade-slide-down z-50">
          <a href="#projects" className="hover:text-white transition">
            Projets
          </a>
          <a href="#about" className="hover:text-white transition">
            À propos
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
