import { useState } from "react";
import { Button } from "../ui/buttom"; // Vérifie si ce n'est pas "../ui/button" sans le 'm'
import { Name } from "../ui/name";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "FR", label: "Français" },
  { code: "EN", label: "English" },
];

export const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  // Synchronisation avec l'état i18n en lettres majuscules
  const currentLang =
    LANGUAGES.find((l) => l.code === i18n.language.toUpperCase()) ||
    LANGUAGES[0];

  const handleLangChange = (langCode: string) => {
    i18n.changeLanguage(langCode.toLowerCase());
    setIsLangOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full p-4 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 font-medium text-sm text-gray-700">
      <div className="w-full px-6 md:px-22 h-16 flex items-center justify-between">
        <div className="flex flex-col justify-center">
          <div className="font-bold text-gray-950 text-base tracking-tight">
            <Name />
          </div>
          <span className="text-xl text-blue-600 font-bold tracking-wider uppercase hidden sm:block">
            Full-Stack Developer
          </span>
        </div>

        {/* LIENS DE NAVIGATION & OPTIONS - DESKTOP */}
        <div className="hidden md:flex items-center space-x-8 text-xl">
          {/* Correction : Ajout de la fonction t() sur tous les liens avec des clés en minuscules */}
          <a href="#" className="hover:text-blue-600 transition-colors">
            {t("Navigation.Acceuil")}
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            {t("Navigation.À propos")}
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            {t("Navigation.Compétences")}
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            {t("Navigation.Projets")}
          </a>

          {/* BOUTON LANGUE ANIMÉ - DESKTOP */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm hover:border-blue-400 hover:text-blue-600 transition-all active:scale-95 text-base"
            >
              <span className="font-semibold text-sm">{currentLang.code}</span>
              <svg
                className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isLangOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* LISTE DÉROULANTE ANIMÉE */}
            {isLangOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsLangOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-100 rounded-2xl shadow-xl z-20 overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-top-right p-1">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangChange(lang.code)} // Correction : lang.code au lieu de lang
                      className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl transition-colors text-left ${
                        currentLang.code === lang.code
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <Button variant="default" className="shadow-sm">
            Contact
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

      {/* MENU DÉROULANT - MOBILE */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 pt-2 pb-6 space-y-4 shadow-lg flex flex-col">
          {/* Correction : Traduction également appliquée sur la partie Mobile */}
          <a
            href="#"
            className="block py-1 hover:text-blue-600 transition-colors text-xl"
          >
            {t("accueil")}
          </a>
          <a
            href="#"
            className="block py-1 hover:text-blue-600 transition-colors text-xl"
          >
            {t("about")}
          </a>
          <a
            href="#"
            className="block py-1 hover:text-blue-600 transition-colors text-xl"
          >
            {t("skills")}
          </a>
          <a
            href="#"
            className="block py-1 hover:text-blue-600 transition-colors text-xl"
          >
            {t("projects")}
          </a>

          <div className="w-full h-[1px] bg-gray-100 my-2" />
          <div className="pt-2">
            <Button variant="default" className="w-full text-xl py-6">
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
