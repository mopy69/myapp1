import { Phone, Mail, MapPin, Store } from "lucide-react";
import Link from "next/link";
import { footerSections } from "./footer.data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-800 dark:bg-zinc-950 text-white dark:text-gray-400 border-t border-gray-200 dark:border-zinc-800 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Columna 1: Branding y Redes */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-2xl font-bold text-gray-800 dark:text-white hover:text-green-800 dark:hover:text-green-400 transition-colors">
            <Store className="h-6 w-6 text-green-600" />
            <span>LMC</span>
          </div>
          <p className="text-sm leading-relaxed text-white dark:text-gray-400">
            Tu minimarket moderno a un clic de distancia. Llevamos frescura, calidad y el mejor servicio directo a tu puerta.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors" aria-label="Facebook">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors" aria-label="Instagram">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors" aria-label="Twitter">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Columnas 2 y 3: Secciones dinámicas */}
        {footerSections.map((section, index) => (
          <div key={index} className="flex flex-col gap-4">
            <h3 className="font-semibold text-gray-800 dark:text-white uppercase tracking-wider text-sm">
              {section.title}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-sm hover:text-green-600 dark:hover:text-green-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Columna 4: Contacto */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-gray-800 dark:text-white uppercase tracking-wider text-sm">
            Contacto
          </h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3 text-sm">
              <Phone className="h-4 w-4 text-green-600 shrink-0" />
              <span>+56 9 1234 5678</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <Mail className="h-4 w-4 text-green-600 shrink-0" />
              <span>soporte@lmcFresh.cl</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <MapPin className="h-4 w-4 text-green-600 shrink-0" />
              <span>Av. Principal 1234, Santiago, Chile</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Barra Inferior */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-150 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white">
        <p>&copy; {currentYear} LMC FreshMart. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <Link href="#privacidad" className="hover:text-green-600 transition-colors">Política de Privacidad</Link>
          <Link href="#cookies" className="hover:text-green-600 transition-colors">Configuración de Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
