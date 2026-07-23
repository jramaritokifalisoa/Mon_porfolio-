import { useTranslation } from "react-i18next";
import { Code2, Server, Smartphone, Wrench } from "lucide-react";
import { Heart, Users, Compass } from "lucide-react";
const SKILLS_CATEGORIES = [
  {
    id: "frontend",
    icon: <Code2 className="w-6 h-6 text-blue-600" />,
    skills: [
      {
        name: "HTML5 / CSS3",
        color: "border-orange-200 bg-orange-50/30 text-orange-700",
      },
      {
        name: "TypeScript",
        color: "border-blue-200 bg-blue-50/30 text-blue-700",
      },
      { name: "React", color: "border-sky-200 bg-sky-50/30 text-sky-700" },
      {
        name: "Tailwind CSS",
        color: "border-teal-200 bg-teal-50/30 text-teal-700",
      },
    ],
  },
  {
    id: "backend",
    icon: <Server className="w-6 h-6 text-emerald-600" />,
    skills: [
      {
        name: "Node.js",
        color: "border-emerald-200 bg-emerald-50/30 text-emerald-700",
      },
      {
        name: "PHP",
        color: "border-indigo-200 bg-indigo-50/30 text-indigo-700",
      },
      { name: "Python", color: "border-blue-300 bg-blue-50/30 text-blue-800" },
      {
        name: "PostgreSQL",
        color: "border-cyan-200 bg-cyan-50/30 text-cyan-700",
      },
      { name: "MySQL", color: "border-blue-200 bg-blue-50/30 text-slate-700" },
    ],
  },
  {
    id: "mobile",
    icon: <Smartphone className="w-6 h-6 text-indigo-600" />,
    skills: [
      {
        name: "React Native Expo",
        color: "border-indigo-200 bg-indigo-50/30 text-indigo-700",
      },
    ],
  },
  {
    id: "tools",
    icon: <Wrench className="w-6 h-6 text-rose-600" />,
    skills: [
      {
        name: "Git",
        color: "border-orange-300 bg-orange-50/30 text-orange-600",
      },
      {
        name: "GitHub",
        color: "border-neutral-300 bg-neutral-50/40 text-neutral-800",
      },
      {
        name: "Postman",
        color: "border-orange-300 bg-orange-50/20 text-orange-700",
      },
      { name: "Swagger", color: "border-lime-300 bg-lime-50/20 text-lime-700" },
    ],
  },
];

export const Competence = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full  px-6 md:px-16 lg:px-24 py-24 bg-gray-50/50 flex flex-col justify-center">
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8"></div>

      <div className="w-full ml-6 mx-auto flex-grow flex flex-col justify-center">
        {/* En-tête de section */}
        <div className="text-center lg:text-left mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-950 uppercase">
            {t("skills.title")}
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl text-lg sm:text-xl leading-relaxed">
            {t("skills.subtitle")}
          </p>
        </div>

        {/* Grille Plein Écran adaptative */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {SKILLS_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Haut de la carte */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-100 shadow-inner">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 tracking-tight capitalize">
                    {t(`skills.categories.${category.id}`, category.id)}
                  </h3>
                </div>

                {/* Grille interne des compétences épurées sans niveaux */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className={`px-4 py-2.5 text-sm font-semibold rounded-2xl border transition-all duration-200 hover:scale-105 cursor-default ${skill.color}`}
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Ligne décorative discrète en bas */}
              <div className="w-full h-[3px] bg-gradient-to-r from-gray-100 via-blue-500/20 to-gray-100 rounded-full mt-8" />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mt-20 mx-auto flex-grow flex flex-col justify-center">
        {/* Grille des valeurs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pilier 1 : Sérieux & Investi */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="p-3.5 bg-rose-50 text-rose-600 rounded-2xl w-fit mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-950 mb-3">
                {t("motivation.cards.commitment.title", "Sérieux & Investi")}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t(
                  "motivation.cards.commitment.desc",
                  "Quand je me lance dans un projet, je m'y consacre pleinement. Rigoureux et motivé, je mets un point d'honneur à livrer un travail propre et à respecter mes engagements.",
                )}
              </p>
            </div>
          </div>

          {/* Pilier 2 : Travail en équipe */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="p-3.5 bg-blue-50 text-blue-600 rounded-2xl w-fit mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-950 mb-3">
                {t("motivation.cards.teamwork.title", "Esprit d'équipe")}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t(
                  "motivation.cards.teamwork.desc",
                  "Le développement ne se fait pas seul. J'aime partager, échanger des idées et collaborer pour avancer ensemble. Je sais écouter et m'adapter pour la réussite collective.",
                )}
              </p>
            </div>
          </div>

          {/* Pilier 3 : Soif d'apprendre */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="p-3.5 bg-amber-50 text-amber-600 rounded-2xl w-fit mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-950 mb-3">
                {t("motivation.cards.learning.title", "Toujours apprendre")}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t(
                  "motivation.cards.learning.desc",
                  "La tech évolue vite, et c'est ce qui me passionne. Curieux de nature, je cherche constamment à découvrir de nouvelles technologies, à relever des défis et à parfaire mes compétences.",
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
