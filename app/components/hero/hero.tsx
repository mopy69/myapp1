import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-80px)] py-12 md:py-0 gap-10 animate-fade-in px-4">
      <div className="flex flex-col items-start justify-center gap-4 rounded-xl w-full md:w-1/2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Tu minimarket moderno a un clic de distancia
        </h1>
        <p className="text-lg md:text-2xl text-gray-600">
          Productos frescos, entregas rápidas y rna experiencia de compra
          excepcional. Descubre la forma más conveniente de hacer tus compras.
        </p>
        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 mt-2">
          <Button variant="default" size="lg" className="w-full sm:w-56 px-6 py-4 md:px-10 md:py-6">
            Empezar a comprar
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-56 px-6 py-4 md:px-10 md:py-6 text-primary border-primary">
            Encontrar sucursales
          </Button>
        </div>
      </div>

      <div className="md:w-1/2 flex items-center justify-center w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop"
          alt="Imagen de la tienda"
          className="w-full max-w-md h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
