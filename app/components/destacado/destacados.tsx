import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from "@/components/ui/card";
import { destacadosData } from "./destacados.data";

export default function Destacados() {
  return (
    <div className="h-auto w-full py-30 timeline-view animate-reveal">
          <div className="flex flex-col items-center gap-4 mb-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Categorias populares
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Explora nuestras categorías más populares y encuentra todo lo que
          necesitas
        </p>
      </div>
      
      <div className="flex flex-row w-full h-auto max-w-6xl py-10 gap-5 mx-auto">
        {destacadosData.map((destacado, index) => (
        <Card className="w-72 h-40 flex flex-col items-center justify-center text-2xl font-bold hover:scale-105 transform transition-all duration-300 ring-1 ring-white/20" key={index}>
          <CardHeader className="flex items-center justify-center text-4xl">
            {destacado.icon}
          </CardHeader>
          <CardTitle className="text-center text-lg text-gray-800">{destacado.title}</CardTitle>
        </Card>
        ))}
      </div>
   </div>
  );
}
