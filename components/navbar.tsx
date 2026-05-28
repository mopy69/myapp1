"use client"; //para usar hooks

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
    <nav className=" w-full py-4 shadow-sm border-b border-gray-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
      <div className="text-2xl font-bold hover:text-green-800">LMC</div>
      <ul className="flex flex-row items-center justify-center gap-4">
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
      <button className="flex items-center gap-2 bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">
        <UserRound size={12} />
        <span className="text-sm">Ingresar</span>
      </button>
      </div>
    </nav>
  );
}
