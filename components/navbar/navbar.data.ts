import {
  Home,
  MapPin,
  Truck,
  Briefcase,
  Store,
} from "lucide-react";

export const navbarLinks = [
  { 
    icon: Home,
    name: "Inicio",
    href: "/" 
  },
  {
    icon: Store, 
    name: "Tienda", 
    href: "/tienda" 
  },
  { 
    icon: MapPin,
    name: "Sucursales", 
    href: "/sucursales" 
  },
  { 
    icon: Truck,
    name: "Envio", 
    href: "/envio"
  },
  {
    icon: Briefcase,
    name: "Trabajos",
    href: "/trabajos"
  }
];