import {BPrimario} from "@/components/ui/buttom";
interface CardProps {
    titulo: string;
    imagenUrl: string;
    descripcion: string;
    botonTexto: string;
}
export default function Card({ titulo, imagenUrl, descripcion, botonTexto }: CardProps) {
    return(
        <div className="w-full max-w-sm bg-white rounded-lg shadow-2xl p-6">
            <h2 className="text-xl font-bold mb-2">{titulo}</h2>
            <img src={imagenUrl} alt="Imagen de ejemplo" className="w-full h-48 object-cover mb-4 rounded">
            </img>
            <p className="text-gray-700 mb-4">{descripcion}</p>
            <BPrimario texto={botonTexto} />
        </div>  
    );
}