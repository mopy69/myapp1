import Hero from "@/components/sections/hero";
import Beneficios from "@/components/sections/beneficios";
import Destacados from "@/components/sections/destacados";

export default function Home() {
  return (
    <>
      <div className="">
        <Hero />
        <Beneficios />
        <Destacados />
      </div>
    </>
  );
}
