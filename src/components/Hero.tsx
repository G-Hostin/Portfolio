"use client";
import HeroMobile from "@/components/HeroMobile";
import HeroDesktop from "@/components/HeroDesktop";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Hero() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop === null) return <section className="w-full min-h-[40vh]" />;
  return isDesktop ? <HeroDesktop /> : <HeroMobile />;
}
