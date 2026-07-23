import Image2 from "../../assets/svg/souris.svg";
import { Button } from "../ui/buttom";
import { useTranslation } from "react-i18next";

const PROJECTS_DATA = [
  {
    id: 1,
    keyName: "planify",
    tags: ["HTML/CSS", "Node.js", "Mysql"],
    link: "https://github.com/jramaritokifalisoa/L2_P.git",
  },
  {
    id: 2,
    keyName: "travel",
    tags: ["React-Native Expo", "Reactjs"],
    link: "https://github.com/jramaritokifalisoa/Miketrika_projet.git",
  },
  {
    id: 3,
    keyName: "api",
    tags: ["Nodejs", "PostgreSQL", "Swagger"],
    link: "https://github.com/jramaritokifalisoa/Apprentissage.git",
  },
];

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full px-6 md:px-16 lg:px-32 bg-white">
      <img
        src={Image2}
        alt={t("projects.scrollDownAlt")}
        className="w-9 h-9 animate-bounce mx-auto mb-4"
      />

      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent my-4"></div>

      <div className="w-full mt-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-950 text-center lg:text-left">
          {t("projects.sectionTitle")}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
            >
              <div className="h-48 w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center border-b border-gray-100 group-hover:from-blue-50/50 group-hover:to-teal-50/50 transition-colors">
                <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider group-hover:text-blue-500 transition-colors">
                  {t("projects.projectPreview")}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow space-y-3">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {t(`projects.data.${project.keyName}.title`)}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {t(`projects.data.${project.keyName}.description`)}
                </p>

                <div className="flex flex-wrap gap-2 pt-2 mt-auto">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 text-xs font-medium bg-gray-50 text-gray-600 border border-gray-200/60 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8"></div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>{t("projects.visit")}</Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
