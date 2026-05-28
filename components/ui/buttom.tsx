// Definimos las propiedades que acepta nuestro botón (TypeScript)
interface BotonProps {
  texto: string; // El texto es obligatorio y debe ser un String
}

export function BPrimario({ texto }: BotonProps) {
  return (
    <button className="bg-green-700 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors">
      {texto}
    </button>
  );
}

export function BSecundario({ texto }: BotonProps) {
  return (
    <button className="py-3 px-4 rounded-lg text-green-700 transition-colors border-2 border-green-700 hover:bg-gray-100 bg-white">
      {texto}
    </button>
  );
}