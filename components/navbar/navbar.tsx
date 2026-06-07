"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarLinks } from "./navbar.data";

import {
  UserRound,
  Menu,
  ShoppingBag,
  Store,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className=" w-full py-4 shadow-sm border-b  border-gray-300 sticky top-0 z-50 transparent backdrop-blur-3xl bg-white/90">
      <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-3 flex flex-row justify-between items-center px-6">
        <div className="text-2xl font-bold hover:text-green-800 justify-self-start">
          LMC
        </div>

        <ul className="hidden lg:flex flex-row items-center justify-center gap-4 justify-self-center">
          {navbarLinks.map((item) => {
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
                  {item.name}
                </Link>
                {isActive ? (
                  <span className="absolute left-0 right-0 -bottom-1 h-[1.5px] rounded-full bg-green-600" />
                ) : null}
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-2 justify-self-end">
          <Link href="/login">
            <Button variant="default">
              <UserRound size={14} />
              Iniciar sesión
            </Button>
          </Link>
          <Link href="/register">
            <Button variant="outline" size="sm">
              Registrarse
            </Button>
          </Link>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger render={
              <Button variant="ghost" size="icon" className="text-gray-700 hover:text-green-800 focus-visible:ring-0" />
            }>
              <Menu size={24} />
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[350px] p-6 flex flex-col justify-between">
              <div>
                <SheetHeader className="text-left border-b border-gray-100 dark:border-zinc-800 pb-5 mb-5">
                  <div className="flex items-center gap-2.5 text-2xl font-bold text-green-800 dark:text-green-400">
                    <Store className="h-6 w-6 text-green-600" />
                    <span>LMC</span>
                  </div>
                  <SheetDescription className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Tu minimarket moderno a un clic de distancia.
                  </SheetDescription>
                </SheetHeader>

                <nav className="flex flex-col gap-1.5">
                  {navbarLinks.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${
                          isActive
                            ? "bg-green-50 text-green-800 font-semibold dark:bg-green-950/20 dark:text-green-400"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-zinc-900/50"
                        }`}
                      >
                        <span
                          className={`transition-colors duration-200 ${isActive ? "text-green-700 dark:text-green-400" : "text-gray-400 dark:text-gray-500"}`}
                        >
                          {item.icon && <item.icon size={16} />}
                        </span>
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <SheetFooter className="mt-auto border-t border-gray-100 dark:border-zinc-800 pt-6 flex flex-col gap-3">
                <div className="flex flex-col gap-2 w-full">
                  <Link href="/login" className="w-full block">
                    <Button
                      variant="default"
                      className="w-full justify-center gap-2 py-5 rounded-xl text-sm"
                    >
                      <UserRound size={15} />
                      Iniciar sesión
                    </Button>
                  </Link>
                  <Link href="/register" className="w-full block">
                    <Button
                      variant="outline"
                      className="w-full justify-center py-5 rounded-xl border-gray-200 dark:border-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-950 text-sm"
                    >
                      Registrarse
                    </Button>
                  </Link>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
