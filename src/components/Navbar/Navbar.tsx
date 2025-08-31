import React from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const navbar = document.querySelector(".navbar");
    if (element && navbar) {
      const navbarHeight = navbar.getBoundingClientRect().height;
      const y = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const changeLanguage = (lang: "fr" | "en") => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div className="w-full flex justify-center sticky top-0 left-0 right-0 z-50 shadow-md">
        <div className="navbar bg-orange-100 ps-5 pe-5">
          <div className="navbar-start">
            <a
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xl font-bold cursor-pointer"
            >
              {t("brand")}
            </a>
          </div>

          <div className="navbar-center m-auto">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a onClick={() => scrollToSection("competences")} className="cursor-pointer">
                  {t("navbar.competences")}
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection("formations")} className="cursor-pointer">
                  {t("navbar.formations")}
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection("experiences")} className="cursor-pointer">
                  {t("navbar.experiences")}
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection("realisations")} className="cursor-pointer">
                  {t("navbar.realisations")}
                </a>
              </li>
            </ul>
          </div>

          <div className="navbar-end">
            <button
              className="btn bg-white text-black border-[#e5e5e5] me-2"
              popoverTarget="langage-dropdown-popover"
              style={{ anchorName: "langage-dropdown-anchor" } as React.CSSProperties}
            >
              <i className="fa-solid fa-earth-europe"></i>
              {t("navbar.langue")}
            </button>

            <ul
              className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
              popover="auto"
              id="langage-dropdown-popover"
              style={{ positionAnchor: "langage-dropdown-anchor" } as React.CSSProperties}
            >
              <li>
                <a onClick={() => changeLanguage("fr")}>Français</a>
              </li>
              <li>
                <a onClick={() => changeLanguage("en")}>English</a>
              </li>
            </ul>

            <button
              className="btn bg-white text-black border-[#e5e5e5] ms-2"
              onClick={() => scrollToSection("contact")}
            >
              <i className="fa-solid fa-paper-plane"></i>
              {t("navbar.contact")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
