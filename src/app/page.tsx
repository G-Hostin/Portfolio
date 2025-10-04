import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="bg-neutral-900">
      <Header />
      <Hero />
      <Projects />
      <Skills />
    </main>
  );
}
