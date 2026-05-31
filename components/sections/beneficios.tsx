"use client";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Apple } from "lucide-react";
import { Van } from "lucide-react";
import { SmilePlus } from "lucide-react";

export default function Beneficios() {
  return (
    <div className="h-screen">
      <div className="w-full max-w-6xl mx-auto pt-28 align-items-center justify-center text-center">
        <h2 className="text-4xl font-bold mb-6">
          ¿Por qué elegir FreshMart?Novedades de la revista
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Ofrecemos la mejor experiencia de compra con productos de calidad
          garantizada
        </p>
      </div>
      <div className="flex flex-row w-full h-auto max-w-6xl py-10 gap-5 align-items-center justify-center mx-auto">
        
        <Card className="w-96 p-6 gap-3">
          <Apple className="mx-auto rounded-xl h-16 w-16" size={30} color="green" />
          <CardTitle className="text-xl font-semibold mt-4">
            Productos Frescos
          </CardTitle>
          <CardDescription className="text-gray-600 mt-2">
            Garantizamos la frescura de nuestros productos con entregas rápidas
            y control de calidad riguroso.
          </CardDescription>
        </Card>
        <Card className="w-96 p-6 gap-3">
          <Van
            className="mx-auto rounded-xl h-16 w-16"
            size={30}
            color="green"
          />
          <CardTitle className="text-xl font-semibold mt-4">Entrega Rápida</CardTitle>
          <CardDescription className="text-gray-600 mt-2">
            Disfruta de entregas rápidas y confiables directamente a tu puerta.
          </CardDescription>
        </Card>
        <Card className="w-96 p-6 gap-3">
          <SmilePlus className="mx-auto rounded-xl h-16 w-16" size={30} color="green" />
          <CardTitle className="text-xl font-semibold mt-4">Atención al Cliente</CardTitle>
          <CardDescription className="text-gray-600 mt-2">
            Nuestro equipo de atención al cliente está siempre listo para
            ayudarte con cualquier consulta o problema.
          </CardDescription>
        </Card>
      </div>
    </div>
  );
}
