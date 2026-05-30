"use client";

import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart, Star, Heart, Flame, Sparkles, Leaf, Search } from "lucide-react";

// Estructura de los productos
interface Producto {
  id: number;
  titulo: string;
  descripcion: string;
  imagenUrl: string;
  precio: string;
  badge?: string;
  calificacion: number;
}

// Categorías con sus respectivos productos
const CATEGORIAS = [
  {
    id: "destacados",
    titulo: "Los más vendidos de la semana",
    icono: <Flame className="w-5 h-5 text-orange-500 fill-orange-500 animate-pulse" />,
    productos: [
      {
        id: 101,
        titulo: "Paltas Hass Premium",
        descripcion: "Paltas Hass maduras, cremosas y seleccionadas a mano. Perfectas para tus ensaladas o guacamole.",
        imagenUrl: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=400&auto=format&fit=crop",
        precio: "$3.490 / kg",
        badge: "Más Vendido",
        calificacion: 4.9,
      },
      {
        id: 102,
        titulo: "Frutillas Orgánicas",
        descripcion: "Frutillas dulces, jugosas y cosechadas de manera sustentable en huertos locales.",
        imagenUrl: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=400&auto=format&fit=crop",
        precio: "$2.990 / kg",
        badge: "Oferta -15%",
        calificacion: 4.8,
      },
      {
        id: 103,
        titulo: "Arándanos Frescos",
        descripcion: "Pack de arándanos frescos, antioxidantes y listos para disfrutar con yogurt o cereales.",
        imagenUrl: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=400&auto=format&fit=crop",
        precio: "$1.890 / 250g",
        calificacion: 4.7,
      },
      {
        id: 104,
        titulo: "Naranjas de Jugo",
        descripcion: "Naranjas ultra jugosas, altas en vitamina C, ideales para el desayuno diario.",
        imagenUrl: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=400&auto=format&fit=crop",
        precio: "$1.500 / kg",
        calificacion: 4.6,
      },
      {
        id: 105,
        titulo: "Manzanas Gala Orgánicas",
        descripcion: "Manzanas crujientes y dulces, libres de pesticidas químicos. Directas del campo.",
        imagenUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=400&auto=format&fit=crop",
        precio: "$2.100 / kg",
        badge: "Orgánico",
        calificacion: 4.9,
      },
      {
        id: 106,
        titulo: "Plátanos Cavendish",
        descripcion: "Plátanos en su punto perfecto de maduración. El snack natural más energético.",
        imagenUrl: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=400&auto=format&fit=crop",
        precio: "$1.200 / kg",
        calificacion: 4.7,
      },
    ],
  },
  {
    id: "panaderia",
    titulo: "Panadería & Pastelería Artesanal",
    icono: <Sparkles className="w-5 h-5 text-amber-600 fill-amber-300" />,
    productos: [
      {
        id: 201,
        titulo: "Pan de Masa Madre",
        descripcion: "Elaborado con harina integral de molienda propia y fermentación lenta de 24 horas.",
        imagenUrl: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=400&auto=format&fit=crop",
        precio: "$3.900 / ud",
        badge: "Masa Madre",
        calificacion: 5.0,
      },
      {
        id: 202,
        titulo: "Croissant de Chocolate",
        descripcion: "Hojaldre crujiente hecho con mantequilla pura y relleno de chocolate belga semi-amargo.",
        imagenUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400&auto=format&fit=crop",
        precio: "$1.600 / ud",
        calificacion: 4.8,
      },
      {
        id: 203,
        titulo: "Baguette Tradicional",
        descripcion: "Baguette de estilo francés clásica, crujiente por fuera y esponjosa por dentro.",
        imagenUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400&auto=format&fit=crop",
        precio: "$1.100 / ud",
        calificacion: 4.6,
      },
      {
        id: 204,
        titulo: "Muffin de Arándanos",
        descripcion: "Muffin suave, esponjoso, cargado de arándanos enteros y un toque sutil de vainilla.",
        imagenUrl: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=400&auto=format&fit=crop",
        precio: "$1.400 / ud",
        badge: "Recomendado",
        calificacion: 4.7,
      },
      {
        id: 205,
        titulo: "Rollos de Canela Glaseados",
        descripcion: "Rollos recién horneados con canela de Ceilán y un delicioso glaseado de queso crema.",
        imagenUrl: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=400&auto=format&fit=crop",
        precio: "$1.800 / ud",
        calificacion: 4.9,
      },
    ],
  },
  {
    id: "lacteos",
    titulo: "Lácteos, Quesos & Fiambrería",
    icono: <Leaf className="w-5 h-5 text-green-700 fill-green-100" />,
    productos: [
      {
        id: 301,
        titulo: "Queso Mantecoso Fundido",
        descripcion: "Queso madurado de textura suave y cremosa, ideal para sándwiches o derretir.",
        imagenUrl: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=400&auto=format&fit=crop",
        precio: "$4.990 / 500g",
        badge: "Fresco",
        calificacion: 4.8,
      },
      {
        id: 302,
        titulo: "Yogurt Griego Natural",
        descripcion: "Yogurt colado estilo griego de alta cremosidad, sin azúcar añadida y alto en proteínas.",
        imagenUrl: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=400&auto=format&fit=crop",
        precio: "$1.200 / ud",
        calificacion: 4.7,
      },
      {
        id: 303,
        titulo: "Mantequilla con Sal de Mar",
        descripcion: "Mantequilla artesanal elaborada con crema de leche fresca de libre pastoreo y escamas de sal.",
        imagenUrl: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=400&auto=format&fit=crop",
        precio: "$2.500 / 250g",
        calificacion: 4.9,
      },
      {
        id: 304,
        titulo: "Leche Fresca Entera",
        descripcion: "Leche fluida pasteurizada, directo de predios certificados en bienestar animal.",
        imagenUrl: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=400&auto=format&fit=crop",
        precio: "$1.300 / Litro",
        calificacion: 4.6,
      },
      {
        id: 305,
        titulo: "Jamón Serrano Reserva",
        descripcion: "Jamón curado con mínimo 12 meses de maduración. Textura tierna y aroma inigualable.",
        imagenUrl: "https://images.unsplash.com/photo-1524438418049-ab2acb7aa48f?q=80&w=400&auto=format&fit=crop",
        precio: "$3.990 / 100g",
        badge: "Importado",
        calificacion: 4.9,
      },
    ],
  },
];

export default function Tienda() {
  const [favoritos, setFavoritos] = useState<number[]>([]);

  const toggleFavorito = (id: number) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pb-20">
      {/* Banner / Hero de la Tienda */}
      <section className="w-full bg-green-900 text-white py-14 px-4 md:px-8 relative overflow-hidden mb-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="bg-green-800 text-green-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Minimarket LMC
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 leading-tight tracking-tight">
              Nuestra Tienda Online
            </h1>
            <p className="text-green-100 mt-2 text-base md:text-lg">
              Los productos más frescos y artesanales elegidos con cuidado para ti, listos para tu despacho express.
            </p>
          </div>
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-green-300 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar frutas, panadería, lácteos..."
              className="w-full bg-green-850 hover:bg-green-800/80 focus:bg-white focus:text-gray-900 placeholder-green-300 focus:placeholder-gray-400 text-white rounded-xl py-3 pl-10 pr-4 transition-all duration-300 border border-green-800 focus:border-white focus:ring-0 focus:outline-none shadow-inner"
            />
          </div>
        </div>
      </section>

      {/* Contenedor de las Categorías con Slider Netflix Style */}
      <div className="w-full flex flex-col gap-10">
        {CATEGORIAS.map((categoria) => (
          <NetflixRow
            key={categoria.id}
            categoria={categoria}
            favoritos={favoritos}
            toggleFavorito={toggleFavorito}
          />
        ))}
      </div>
    </main>
  );
}

interface NetflixRowProps {
  categoria: {
    titulo: string;
    icono: React.ReactNode;
    productos: Producto[];
  };
  favoritos: number[];
  toggleFavorito: (id: number) => void;
}

function NetflixRow({ categoria, favoritos, toggleFavorito }: NetflixRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);

  // Controlar visibilidad de botones en base al scroll actual
  const updateButtonsVisibility = () => {
    if (rowRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
      setShowLeftBtn(scrollLeft > 10);
      setShowRightBtn(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  // Función de scroll smooth al hacer click
  const handleScroll = (direccion: "izq" | "der") => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollAmount = clientWidth * 0.75; // Se desplaza el 75% del ancho visible

      rowRef.current.scrollTo({
        left: direccion === "izq" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="relative group w-full py-2"
      onMouseEnter={updateButtonsVisibility}
    >
      {/* Título de la fila con su icono */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {categoria.icono}
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
            {categoria.titulo}
          </h2>
        </div>
        <span className="text-xs text-green-700 font-semibold cursor-pointer hover:underline">
          Ver todos ({categoria.productos.length})
        </span>
      </div>

      {/* Contenedor relativo para el Slider y Botones */}
      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Botón de navegación IZQUIERDO */}
        {showLeftBtn && (
          <button
            onClick={() => handleScroll("izq")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-lg border border-gray-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm -ml-4 hover:scale-110 active:scale-95 focus:outline-none"
            aria-label="Desplazar a la izquierda"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>
        )}

        {/* Fila Horizontal Scrollable (Netflix Style Core) */}
        <div
          ref={rowRef}
          onScroll={updateButtonsVisibility}
          className="flex overflow-x-auto gap-6 scroll-smooth snap-x snap-mandatory py-4 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {categoria.productos.map((producto) => {
            const isFav = favoritos.includes(producto.id);
            return (
              <div
                key={producto.id}
                className="w-72 shrink-0 snap-start bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-150/70 overflow-hidden transition-all duration-350 hover:-translate-y-2 hover:scale-[1.03] flex flex-col justify-between"
              >
                {/* Imagen del Producto + Badge + Botón Favorito */}
                <div className="relative w-full h-44 overflow-hidden bg-gray-100">
                  {producto.badge && (
                    <span className="absolute top-3 left-3 z-10 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                      {producto.badge}
                    </span>
                  )}
                  
                  {/* Botón Favorito */}
                  <button
                    onClick={() => toggleFavorito(producto.id)}
                    className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 transition-all duration-200 shadow-sm"
                    aria-label="Guardar en favoritos"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        isFav ? "fill-red-500 text-red-500" : "text-gray-600"
                      }`}
                    />
                  </button>

                  <img
                    src={producto.imagenUrl}
                    alt={producto.titulo}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Detalles del Producto */}
                <div className="p-5 flex-1 flex flex-col justify-between gap-3">
                  <div>
                    {/* Calificación */}
                    <div className="flex items-center gap-1 mb-1.5">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="text-xs font-bold text-gray-700">
                        {producto.calificacion.toFixed(1)}
                      </span>
                    </div>

                    <h3 className="font-bold text-gray-800 text-lg mb-1 leading-snug tracking-tight">
                      {producto.titulo}
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm line-clamp-2 leading-relaxed">
                      {producto.descripcion}
                    </p>
                  </div>

                  {/* Precio y Botón de Compra */}
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400 font-medium">Precio</span>
                      <span className="text-lg font-extrabold text-green-700 tracking-tight">
                        {producto.precio}
                      </span>
                    </div>
                    
                    <button className="flex items-center gap-1.5 bg-green-750 hover:bg-green-600 active:bg-green-800 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none transform active:scale-95">
                      <ShoppingCart className="w-4 h-4" />
                      <span>Agregar</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Botón de navegación DERECHO */}
        {showRightBtn && (
          <button
            onClick={() => handleScroll("der")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-lg border border-gray-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm -mr-4 hover:scale-110 active:scale-95 focus:outline-none"
            aria-label="Desplazar a la derecha"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>
        )}

      </div>
    </section>
  );
}
