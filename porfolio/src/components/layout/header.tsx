import Image from "../../assets/images/moi.jpeg";
import { Name } from "../ui/name";
import { Button } from "../ui/buttom";

export const Header = () => {
  return (
    <div className="relative min-h-[90vh] w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex flex-col justify-center items-center bg-white px-6 md:px-16 lg:px-32 overflow-hidden">
      {/* 1. Éléments de Design en Arrière-plan */}
      <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] rounded-full bg-blue-50/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full bg-teal-50/40 blur-3xl pointer-events-none" />

      {/* 2. Grille Principale étirée */}
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center justify-between z-10 py-12">
        {/* BLOC IMAGE - Écrit en second (Reste en dessous sur mobile, se cale à gauche sur PC via col-start-1) */}
        <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1 flex justify-center lg:justify-start">
          <div className="relative group w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[650px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-teal-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative p-3 bg-white border border-gray-100 rounded-3xl shadow-2xl">
              <img
                src={Image}
                alt="Portrait professionnel"
                className="w-full h-auto aspect-square rounded-2xl object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* BLOC TEXTE - Écrit en premier (Reste en haut sur mobile, se place à droite sur PC via col-start) */}
        <div className="lg:col-span-6 lg:col-start-6 flex flex-col text-center lg:text-left items-center lg:items-start space-y-7 lg:ml-auto lg:max-w-[620px]">
          <span className="inline-flex items-center gap-2 px-5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Disponible pour un stage
          </span>

          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-gray-950 font-extrabold">
            <Name />
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Développeur Full-Stack — Stage 2026
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Passionné par la création d'applications web et mobiles
            performantes. Je suis à la recherche d'un stage pour approfondir mes
            compétences et contribuer à des projets innovants.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
            <Button
              variant="default"
              className="w-full sm:w-auto px-8 py-6 shadow-md shadow-blue-500/10 hover:shadow-lg transition-all"
            >
              Découvrir mes projets
            </Button>
            <a
              href="/cv-developpeur.pdf"
              download="CV_TonNom_Dev.pdf"
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                className="w-full px-8 py-6 border-gray-200 hover:bg-gray-50 text-gray-700"
              >
                Télécharger mon CV
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
