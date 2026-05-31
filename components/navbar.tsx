"use client"; //para usar hooks

import { Button } from "@/components/ui/button";
import { UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Tienda", href: "/tienda" },
  { label: "Sucursales", href: "/sucursales" },
  { label: "Envío", href: "/envio" },
  { label: "Novedades", href: "/novedades" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className=" w-full py-4 shadow-sm border-b  border-gray-300 sticky top-0 z-50 transparent backdrop-blur-3xl bg-white/90">
      <div className="max-w-6xl mx-auto grid grid-cols-3 items-center px-6">
        <div className="text-2xl font-bold hover:text-green-800 justify-self-start">LMC</div>
        <ul className="flex flex-row items-center justify-center gap-4 justify-self-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={`inline-block transition-all duration-150 text-sm ${
                    isActive
                      ? "text-green-800 -translate-y-0.5"
                      : "text-gray-700 hover:text-green-600"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
                {isActive ? (
                  <span className="absolute left-0 right-0 -bottom-1 h-[1.5px] rounded-full bg-green-600" />
                ) : null}
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-2 justify-self-end">
          <Button variant="default">
            <UserRound size={14} />
            Iniciar sesión
          </Button>
          <Button variant="outline" size="sm">
            Registrarse
          </Button>
        </div>
      </div>
    </nav>
  );
}
