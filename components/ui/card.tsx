export default function Card(){
    return(
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Título de la tarjeta</h2>
            <p className="text-gray-700 mb-4">Este es un ejemplo de una tarjeta simple con Tailwind CSS.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Acción</button>
        </div>  
    );
}