import "./global.css";
import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn("font-sans", inter.variable)}>
      <body className="min-h-screen w-full flex flex-col bg-gray-100">
        <Navbar />
        <main className="w-full flex flex-col items-center justify-center flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}