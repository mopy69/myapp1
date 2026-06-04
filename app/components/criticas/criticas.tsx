import { Card, CardContent, CardDescription, CardTitle, CardHeader, CardFooter } from "@/components/ui/card";
import { criticasData } from "./criticas.data";
import { Star } from "lucide-react";

export default function Criticas() {
    return (
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 items-stretch justify-center h-auto py-16 md:py-24 gap-6 mx-auto px-4">
            {criticasData.map((critica) => (
                <Card className="ring-1 ring-white/10 shadow flex flex-col justify-between hover:shadow-lg transition-shadow duration-300" key={critica.id}>
                    <CardHeader className="pb-2">
                        <div className="flex gap-1" aria-label={`Calificación: ${critica.calification} de 5 estrellas`}>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    className={`h-5 w-5 ${
                                        i < critica.calification
                                            ? "text-amber-400 fill-amber-400"
                                            : "text-gray-200 dark:text-gray-700"
                                    }`}
                                />
                            ))}
                        </div>
                    </CardHeader>
                    <CardContent className="py-2">
                        <p className="text-gray-600 dark:text-gray-300 italic">"{critica.review}"</p>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start pt-4 border-t border-gray-100 dark:border-zinc-800">
                        <CardTitle className="text-lg font-semibold">{critica.name}</CardTitle>
                        <CardDescription className="text-sm">
                            {critica.verified ? "Cliente verificado" : "Cliente no verificado"}
                        </CardDescription>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}