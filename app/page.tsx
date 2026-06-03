import Hero from "@/app/components/hero/hero";
import Beneficios from "@/app/components/beneficios";
import Destacados from "@/app/components/destacado";
import Criticas from "@/app/components/criticas";

export default function Home() {
  return (
    <>
      <div className="">
        <Hero />
        <Beneficios />
        <Destacados />
        <Criticas />
      </div>
    </>
  );
}
