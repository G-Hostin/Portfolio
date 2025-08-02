import { SplineScene } from "@/components/ui/splite";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-10">
      <div className="w-full max-w-6xl h-[500px] bg-black/90 rounded-xl overflow-hidden flex">
        <div className="flex-1 text-white p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">Interactive 3D</h1>
          <p className="text-neutral-300">
            Bring your UI to life with beautiful 3D scenes. Create immersive
            experiences that capture attention and enhance your design.
          </p>
        </div>
        <div className="flex-1 relative">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </main>
  );
}
