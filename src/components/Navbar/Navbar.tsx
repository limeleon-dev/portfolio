import { useTranslation } from "react-i18next";
import { scrollToSection } from "../../utils/scrollToSection.utils";

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: "fr" | "en") => {
    i18n.changeLanguage(lang);
  };

  return (
      <div className="fixed top-0 left-0 right-0 z-50 justify-items-center bg-navbar shadow-navbar transition-navbar">
        <div className="navbar container mx-5 py-2">
          <div className="navbar-start">
            <a
                onClick={() => scrollToSection("presentations")}
                className="text-xl font-bold cursor-pointer text-navbar hover:text-navbar-hover transition-navbar focus-navbar rounded-md px-2 py-1"
            >
              {t("brand")}
            </a>
          </div>

          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal gap-2 text-base font-medium">
              <li>
                <a
                    onClick={() => scrollToSection("competences")}
                    className="text-navbar hover:text-navbar-hover transition-navbar cursor-pointer px-4 py-2 rounded-lg hover:bg-btn-hover focus-navbar"
                >
                  {t("navbar.competences")}
                </a>
              </li>
              <li>
                <a
                    onClick={() => scrollToSection("formations")}
                    className="text-navbar hover:text-navbar-hover transition-navbar cursor-pointer px-4 py-2 rounded-lg hover:bg-btn-hover focus-navbar"
                >
                  {t("navbar.formations")}
                </a>
              </li>
              <li>
                <a
                    onClick={() => scrollToSection("experiences")}
                    className="text-navbar hover:text-navbar-hover transition-navbar cursor-pointer px-4 py-2 rounded-lg hover:bg-btn-hover focus-navbar"
                >
                  {t("navbar.experiences")}
                </a>
              </li>
              <li>
                <a
                    onClick={() => scrollToSection("realisations")}
                    className="text-navbar hover:text-navbar-hover transition-navbar cursor-pointer px-4 py-2 rounded-lg hover:bg-btn-hover focus-navbar"
                >
                  {t("navbar.realisations")}
                </a>
              </li>
            </ul>
          </div>

          <div className="navbar-end flex items-center gap-3">
            <div className="dropdown dropdown-end">
              <label
                  tabIndex={0}
                  className="btn btn-sm bg-btn border-btn text-btn hover:bg-btn-hover hover:border-btn-hover hover:text-btn-hover transition-navbar focus-navbar rounded-lg"
              >
                <i className="fa-solid fa-earth-europe mr-2 text-sm"></i>
                <span className="hidden sm:inline">{t("navbar.langue")}</span>
                <i className="fa-solid fa-chevron-down ml-1 text-xs"></i>
              </label>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow-dropdown bg-dropdown rounded-xl w-40 mt-2 border border-primary-light">
                <li>
                  <a
                      onClick={() => changeLanguage("fr")}
                      className="hover:bg-dropdown-item transition-navbar px-3 py-2 rounded-lg cursor-pointer text-sm"
                  >
                    Français
                  </a>
                </li>
                <li>
                  <a
                      onClick={() => changeLanguage("en")}
                      className="hover:bg-dropdown-item transition-navbar px-3 py-2 rounded-lg cursor-pointer text-sm"
                  >
                    English
                  </a>
                </li>
              </ul>
            </div>

            <button
                onClick={() => scrollToSection("contact")}
                className="btn btn-sm bg-primary text-white hover:bg-primary-dark transition-navbar focus-navbar rounded-lg shadow-md hover:shadow-lg"
            >
              <i className="fa-solid fa-paper-plane mr-2 text-sm"></i>
              <span className="hidden sm:inline">{t("navbar.contact")}</span>
            </button>
          </div>
        </div>
      </div>
  );
};

export default Navbar;