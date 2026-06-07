"use client";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { beneficiosData } from "./beneficios.data";

export default function Beneficios() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center py-16 md:py-24 px-4">
      <div className="w-full max-w-6xl mx-auto text-center mb-12 animate-reveal timeline-view">
        <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          ¿Por qué elegir FreshMart?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Ofrecemos la mejor experiencia de compra con productos de calidad garantizada.
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-6 justify-center mx-auto items-stretch">
        {beneficiosData.map((beneficio, index) => (
          <Card 
            className="flex-1 p-6 flex flex-col gap-3 hover:scale-105 transform transition-all duration-300 ring-1 ring-white/10 shadow animate-reveal timeline-view" 
            key={index}
          >
            <beneficio.icon className="mx-auto rounded-xl h-16 w-16 text-green-600 dark:text-green-400" size={30} />
            <CardTitle className="text-xl font-semibold mt-4 text-center">
              {beneficio.title}
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400 mt-2 text-center">
              {beneficio.description}
            </CardDescription>
          </Card>
        ))}
      </div>
    </div>
  );
}
