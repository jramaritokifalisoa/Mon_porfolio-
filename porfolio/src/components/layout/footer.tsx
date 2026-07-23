import linkdin from "../../assets/svg/linkdin.svg";
import github from "../../assets/svg/github.svg";
import { Name } from "../ui/name";
import { useTranslation } from "react-i18next";
export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="w-full py-8 bg-white border-t border-gray-100 flex flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-6">
        <a
          href="https://github.com/jramaritokifalisoa?tab=overview&from=2026-07-01&to=2026-07-22"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-black transition-colors duration-200"
          aria-label="GitHub"
        >
          <img src={github} alt="GitHub" className="w-10 h-10" />
        </a>

        <a
          href="https://www.linkedin.com/in/jocyl-nardo-ramaritokifalisoa-563b982b2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-[#0077B5] transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <img src={linkdin} alt="LinkedIn" className="w-12 h-12" />
        </a>
      </div>

      <p className="text-xl text-gray-400 font-medium tracking-wide">
        &copy; {new Date().getFullYear()} — <Name />. {t("footer.copyright")}
      </p>
    </footer>
  );
};
