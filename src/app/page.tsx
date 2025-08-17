import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-neutral-900">
      <Header />
      <Hero />
      <Projects />
    </main>
  );
}
