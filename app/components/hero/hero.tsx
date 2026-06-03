import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center h-auto pt-50 gap-10 animate-fade-in">
      <div className="flex flex-col items-start justify-center gap-4 rounded-xl w-1/2">
        <h1 className="text-5xl font-bold text-gray-800">
          Tu minimarket moderno a un clic de distancia
        </h1>
        <p className="text-2xl text-gray-600">
          Productos frescos, entregas rápidas y rna experiencia de compra
          excepcional. Descubre la forma más conveniente de hacer tus compras.
        </p>
        <div className="flex gap-6">
          <Button variant="default" size="lg" className="px-10 py-6">
            Empezar a comprar
          </Button>
          <Button variant="outline" size="lg" className="px-10 py-6 text-primary border-primary">
            Encontrar sucursales
          </Button>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop"
          alt="Imagen de la tienda"
          className="w-255 h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
