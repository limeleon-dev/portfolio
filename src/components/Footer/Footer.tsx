import { useState } from "react";

const Footer = () => {
  const [openTooltip, setOpenTooltip] = useState<boolean>(false);

  return (
    <footer id="footer" className="bg-yellow-100 pt-4 pb-6">
      <div className="flex flex-col items-center mx-auto px-5">
        <div className="relative w-full flex items-center justify-center my-6">
          <div className="h-[4px] w-2/3 rounded-full bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-2">
            <p className="text-base font-bold mr-4">Guillaume Hostache</p>

            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/guillaume-hostache-a6b50b29a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>

              <a
                href="https://github.com/limeleon-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <div
                className="relative flex items-center"
                onMouseEnter={() => setOpenTooltip(true)}
                onMouseLeave={() => setOpenTooltip(false)}
              >
                <i className="fa-solid fa-circle-info cursor-pointer"></i>

                {openTooltip && (
                  <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 whitespace-nowrap shadow-lg z-10">
                    Fait à la main, avec React, TailwindCss, DaisyUI, EmailJS, etc.
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <p className="text-xs text-center font-semibold">Copyright © 2025 - Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
