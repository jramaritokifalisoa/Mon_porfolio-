import { useTranslation } from "react-i18next";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export const Parcours = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full ml-7 px-6 md:px-16 lg:px-24 py-24 bg-white flex flex-col justify-center">
      <div className="w-full mx-auto flex-grow flex flex-col justify-center">
        {/* En-tête de la section */}
        <div className="text-center lg:text-left mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-gray-950 uppercase">
            {t("parcours.title", "Mon Parcours")}
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl text-lg sm:text-xl leading-relaxed">
            {t(
              "parcours.subtitle",
              "Mon évolution académique et mes certifications dans le domaine du développement logiciel.",
            )}
          </p>
        </div>

        {/* Grille de cartes épurées */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Étape 1 : Licence en cours */}
          <div className="bg-gray-50 border border-gray-100/80 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 bg-white rounded-2xl border border-gray-100 shadow-sm text-blue-600">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-sm font-bold px-3 py-1 bg-blue-50 text-blue-700 rounded-xl">
                  {t("parcours.status.current", "En cours")}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-950 mb-3">
                {t("parcours.licence.title", "Cursus Licence")}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t(
                  "parcours.licence.desc",
                  "Formation universitaire actuelle axée sur l'informatique, le développement logiciel et les architectures des systèmes d'information.",
                )}
              </p>
            </div>
            <div className="w-full h-[3px] bg-gradient-to-r from-gray-200 via-blue-500/20 to-gray-200 rounded-full mt-6" />
          </div>

          {/* Étape 2 : Certificat Udemy Node.js */}
          <div className="bg-gray-50 border border-gray-100/80 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 bg-white rounded-2xl border border-gray-100 shadow-sm text-teal-600">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-sm font-bold px-3 py-1 bg-teal-50 text-teal-700 rounded-xl">
                  {t("parcours.status.certified", "Certifié")}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-950 mb-3">
                {t("parcours.udemy.title", "Certificat Udemy - API REST")}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t(
                  "parcours.udemy.desc",
                  "Formation spécialisée réussie sur la création d'API REST robustes et sécurisées avec Node.js, incluant la gestion des bases de données et des architectures back-end.",
                )}
              </p>
            </div>
            <div className="w-full h-[3px] bg-gradient-to-r from-gray-200 via-teal-500/20 to-gray-200 rounded-full mt-6" />
          </div>

          {/* Étape 3 : Baccalauréat */}
          <div className="bg-gray-50 border border-gray-100/80 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 bg-white rounded-2xl border border-gray-100 shadow-sm text-indigo-600">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-sm font-bold px-3 py-1 bg-indigo-50 text-indigo-700 rounded-xl">
                  {t("parcours.status.obtained", "Obtenu")}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-950 mb-3">
                {t("parcours.bac.title", "Baccalauréat")}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t(
                  "parcours.bac.desc",
                  "Diplôme du Baccalauréat obtenu au Lycée Jacques Rabemananjara à Tamatave, marquant le point de départ de mon orientation scientifique et technique.",
                )}
              </p>
            </div>
            <div className="w-full h-[3px] bg-gradient-to-r from-gray-200 via-indigo-500/20 to-gray-200 rounded-full mt-6" />
          </div>
        </div>
      </div>
    </div>
  );
};
