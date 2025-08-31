import "./Navbar.css";
import React from "react";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const navbar = document.querySelector(".navbar-block");
    if (element && navbar) {
      const navbarHeight = navbar.getBoundingClientRect().height;
      const y = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="navbar-block fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="navbar bg-orange-100 ps-5 pe-5">
          <div className="navbar-start">
            <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-xl font-bold">
              Guillaume Hostache
            </a>
          </div>

          <div className="navbar-center m-auto">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a onClick={() => scrollToSection("competences")}>Compétences</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("formations")}>Formations</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("experiences")}>Expériences</a>
              </li>
              <li>
                <a className="pointer-events-none" onClick={() => scrollToSection("realisations")}>
                  Réalisations
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
              Langue
            </button>

            <ul
              className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
              popover="auto"
              id="langage-dropdown-popover"
              style={{ positionAnchor: "langage-dropdown-anchor" } as React.CSSProperties}
            >
              <li>
                <a>Français</a>
              </li>
              <li>
                <a>English</a>
              </li>
            </ul>

            <button
              className="btn bg-white text-black border-[#e5e5e5] ms-2"
              onClick={() => scrollToSection("contact")}
            >
              <i className="fa-solid fa-paper-plane"></i>
              Contactez moi
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
