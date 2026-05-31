import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from "@/components/ui/card";

export default function Destacados() {
  return (
    <div className="h-screen">
      {/*
                { icon: '🥛', label: 'Lácteos' },
              { icon: '🥤', label: 'Bebidas' },
              { icon: '🍎', label: 'Frutas' },
              { icon: '🥕', label: 'Verduras' },
              { icon: '🥖', label: 'Panadería' },
              { icon: '🥫', label: 'Despensa' },
               */}


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
        <Card className="w-72 h-40 flex flex-col items-center justify-center text-2xl font-bold hover:scale-105 transform transition-all duration-300 ring-1 ring-white/20">
          <CardHeader className="flex items-center justify-center text-4xl">
            🥛
          </CardHeader>
          <CardTitle className="text-center text-lg text-gray-800">Lácteos</CardTitle>
        </Card>
        <Card className="w-72 h-40 flex flex-col items-center justify-center text-2xl font-bold hover:scale-105 transform transition-all duration-300 ring-1 ring-white/20">
          <CardHeader className="flex items-center justify-center text-4xl">
            🥤
          </CardHeader>
          <CardTitle className="text-center text-lg text-gray-800">Bebidas</CardTitle>
        </Card>
        <Card className="w-72 h-40 flex flex-col items-center justify-center text-2xl font-bold hover:scale-105 transform transition-all duration-300 ring-1 ring-white/20">
          <CardHeader className="flex items-center justify-center text-4xl">
            🍎
          </CardHeader>
          <CardTitle className="text-center text-lg text-gray-800">Frutas</CardTitle>
        </Card>
        <Card className="w-72 h-40 flex flex-col items-center justify-center text-2xl font-bold hover:scale-105 transform transition-all duration-300 ring-1 ring-white/20">
          <CardHeader className="flex items-center justify-center text-4xl">
            🥒
          </CardHeader>
          <CardTitle className="text-center text-lg text-gray-800">Verduras</CardTitle>
        </Card>
        <Card className="w-72 h-40 flex flex-col items-center justify-center text-2xl font-bold hover:scale-105 transform transition-all duration-300 ring-1 ring-white/20">
          <CardHeader className="flex items-center justify-center text-4xl">
            🥐
          </CardHeader>
          <CardTitle className="text-center text-lg text-gray-800 ">Panadería</CardTitle>
        </Card>
        <Card className="w-72 h-40 flex flex-col items-center justify-center text-2xl font-bold hover:scale-105 transform transition-all duration-300 ring-1 ring-white/20">
          <CardHeader className="flex items-center justify-center text-4xl">
            🥫
          </CardHeader>
          <CardTitle className="text-center text-lg text-gray-800 ">Despensa</CardTitle>
        </Card>
      </div>
   </div>
  );
}
