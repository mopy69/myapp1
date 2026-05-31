import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center h-screen gap-10">
      <div className="flex flex-col items-start justify-center gap-4 rounded-xl">
        <h1 className="text-3xl font-bold text-gray-800">
          Tu minimarket moderno a un clic de distancia
        </h1>
        <p className="text-gray-600">
          Productos frescos, entregas rápidas y rna experiencia de compra
          excepcional. Descubre la forma más conveniente de hacer tus compras.
        </p>
        <div className="flex gap-6">
          <Button variant="default">Empezar a comprar</Button>
          <Button variant="outline">Encontrar sucursales</Button>
        </div>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop"
          alt="Imagen de la tienda"
          className="w-255 h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
