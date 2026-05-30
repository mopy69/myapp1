import { BPrimario, BSecundario } from "@/components/ui/buttom";
import Card from "@/components/ui/card";
import Link from "next/link"; // Importamos Link para los artículos de la revista

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col items-center bg-gray-100">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center h-[90vh] gap-10">
          <div className="flex flex-col items-start justify-center gap-4 rounded-xl">
            <h1 className="text-3xl font-bold text-gray-800">
              Tu minimarket moderno a un clic de distancia
            </h1>
            <p className="text-gray-600">
              Productos frescos, entregas rápidas y rna experiencia de compra
              excepcional. Descubre la forma más conveniente de hacer tus
              compras.
            </p>
            <div className="flex gap-6">
              <BPrimario texto="Empezar a comprar ->" />
              <BSecundario texto="Encontrar sucursales" />
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

        <div>
          <div className="w-full max-w-6xl mx-auto py-10">
            <h2 className="text-2xl font-bold mb-6">Novedades de la revista</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> </div>
          </div>
          <div className="flex flex-row w-full max-w-6xl mx-auto py-10">
          <Card titulo="Título de la tarjeta" imagenUrl="https://via.placeholder.com/400x200" descripcion="Este es un ejemplo de una tarjeta simple con Tailwind CSS." botonTexto="Acción" />
<Card titulo="Título de la tarjeta" imagenUrl="https://via.placeholder.com/400x200" descripcion="Este es un ejemplo de una tarjeta simple con Tailwind CSS." botonTexto="Acción" />
<Card titulo="Título de la tarjeta" imagenUrl="https://via.placeholder.com/400x200" descripcion="Este es un ejemplo de una tarjeta simple con Tailwind CSS." botonTexto="Acción" />
<Card titulo="Título de la tarjeta" imagenUrl="https://via.placeholder.com/400x200" descripcion="Este es un ejemplo de una tarjeta simple con Tailwind CSS." botonTexto="Acción" />
<Card titulo="Título de la tarjeta" imagenUrl="https://via.placeholder.com/400x200" descripcion="Este es un ejemplo de una tarjeta simple con Tailwind CSS." botonTexto="Acción" />

</div>          
        </div>
      </div>
    </>
  );
}
