import { scrollToSection } from "../../utils/scrollToSection.utils";
import {useTranslation} from "react-i18next";

const Presentation = () => {
  const {t} = useTranslation();
  return (
      <section
          id="presentations"
          className="bg-transparent pt-28 pb-12 min-h-screen"
      >
        <div className="container mx-auto flex flex-col items-center gap-10 px-4">
          <h1 className="px-8 py-4 text-lg font-semibold bg-primary text-white rounded-lg shadow-md border-2 border-white flex items-center gap-3">
            <i className="fa-solid fa-laptop-code text-white text-2xl"></i>
            {t("presentations.titre")}
          </h1>
          <div className="max-w-2xl text-center space-y-5">
            <p className="text-lg text-gray-800 text-justify">
              {t("presentations.presentationText")}
            </p>
            <p className="text-lg text-gray-800 text-justify">
              {t("presentations.objectifText")}
            </p>
          </div>
          <div className="flex w-full max-w-2xl justify-between flex-wrap gap-4">
            <div className="flex gap-4">
              <a
                  href="https://www.linkedin.com/in/guillaume-hostache-a6b50b29a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-lg bg-btn hover:bg-btn-hover hover:border-blue-600 hover:text-blue-700 transition-navbar focus-navbar"
              >
                <i className="fa-brands fa-linkedin text-lg"></i> LinkedIn
              </a>
              <a
                  href="https://github.com/limeleon-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border-2 border-gray-600 text-gray-700 rounded-lg bg-btn hover:bg-btn-hover hover:border-gray-800 hover:text-gray-900 transition-navbar focus-navbar"
              >
                <i className="fa-brands fa-github text-lg"></i> GitHub
              </a>
            </div>
            <a
                href="CV - Guillaume Hostache.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-600 transition-navbar shadow font-semibold focus-navbar"
            >
              <i className="fa-solid fa-download"></i> {t("presentations.cvButtonLabel")}
            </a>
          </div>
        </div>

        <div className="mt-24 animate-bounce">
          <div className="flex flex-col items-center text-hero-secondary"
          onClick={() => scrollToSection("competences")}>
            <i className="fa-solid fa-chevron-down text-2xl text-primary-500"></i>
          </div>
        </div>
      </section>
  );
};

export default Presentation;