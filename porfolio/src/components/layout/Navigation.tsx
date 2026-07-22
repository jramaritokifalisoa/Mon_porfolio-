import { useState } from "react";
import { Button } from "../ui/buttom";
import { Name } from "../ui/name";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // 'w-full' combiné avec l'absence de max-width permet d'occuper tout l'écran
    <nav className="fixed top-0 left-0 w-full p-4 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 font-medium text-sm text-gray-700">
      {/* Remplacement de max-w-6xl mx-auto par des paddings horizontaux fluides */}
      <div className="w-full px-6 md:px-22 h-16 flex items-center justify-between">
        {/* LOGO / NOM (À l'extrême gauche) */}
        <div className="flex flex-col justify-center">
          <div className="font-bold text-gray-950 text-base tracking-tight">
            <Name />
          </div>
          <span className="text-xl text-blue-600 font-semibold tracking-wider uppercase hidden sm:block">
            Full-Stack Developer
          </span>
        </div>

        {/* LIENS DE NAVIGATION - DESKTOP (À l'extrême droite) */}
        <div className="hidden md:flex items-center space-x-8 text-xl">
          <a href="/" className="hover:text-blue-600 transition-colors">
            Accueil
          </a>
          <a href="/about" className="hover:text-blue-600 transition-colors">
            À propos
          </a>
          <a href="/skills" className="hover:text-blue-600 transition-colors">
            Compétences
          </a>
          <a href="/projects" className="hover:text-blue-600 transition-colors">
            Projets
          </a>

          <Button variant="default" className="shadow-sm">
            Me contacter
          </Button>
        </div>

        {/* BOUTON MENU BURGER - MOBILE */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-gray-950 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MENU DÉROULANT - MOBILE (Prend aussi tout l'écran) */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 pt-2 pb-4 space-y-3 shadow-lg">
          <a
            href="/"
            className="block py-2 hover:text-blue-600 transition-colors"
          >
            Accueil
          </a>
          <a
            href="/about"
            className="block py-2 hover:text-blue-600 transition-colors"
          >
            À propos
          </a>
          <a
            href="/skills"
            className="block py-2 hover:text-blue-600 transition-colors"
          >
            Compétences
          </a>
          <a
            href="/projects"
            className="block py-2 hover:text-blue-600 transition-colors"
          >
            Projets
          </a>
          <div className="pt-2">
            <Button variant="default" className="w-full text-xl">
              Me contacter
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
