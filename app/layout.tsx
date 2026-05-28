import type { Metadata } from "next";
import "./global.css";
import Navbar from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen w-full flex flex-col items-center">
        <Navbar />
        {children}
      </body>
    </html>
  );
}