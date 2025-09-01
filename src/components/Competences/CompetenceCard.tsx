import { useState } from "react";
import competencesJsonData from "../../data/competences.json";
import {useTranslation} from "react-i18next";

const CompetenceCard = ({ competence }: { competence: (typeof competencesJsonData)[0]; index: number }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hovered, setHovered] = useState(false);
  const {i18n} = useTranslation();

  const lightenHex = (hex: string, amount: number) => {
    const num = parseInt(hex.replace("#", ""), 16);
    let r = (num >> 16) + amount;
    let g = ((num >> 8) & 0x00ff) + amount;
    let b = (num & 0x0000ff) + amount;

    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));

    return `rgb(${r}, ${g}, ${b}, 0.9)`;
  };

  const colorHex = competence.firstIconColor || "#000";
  const secondColorHex = competence.secondIconColor || colorHex;
  const paleHover = lightenHex(competence.hoverColor || colorHex, 60);
  const tooltipPosition = "left-1/2 -translate-x-1/2";

  return (
      <div className="relative">
        <div
            className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg border-2 border-gray-200 bg-white transition-all duration-300 cursor-pointer hover:border-transparent hover:shadow-lg hover:scale-105`}
            style={{
              backgroundColor: hovered ? paleHover : "white",
            }}
            onMouseEnter={() => {
              setShowTooltip(true);
              setHovered(true);
            }}
            onMouseLeave={() => {
              setShowTooltip(false);
              setHovered(false);
            }}
        >
          <div className="flex items-center gap-1 mb-1">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className={`${competence.firstIcon} text-2xl`} style={{ color: colorHex }}></i>
            </div>
            {competence.secondIcon && (
                <>
                  <span className="">|</span>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className={`${competence.secondIcon} text-2xl`} style={{ color: secondColorHex }}></i>
                  </div>
                </>
            )}
          </div>
          <span className="text-sm font-medium text-center whitespace-nowrap">{competence.label}</span>
        </div>

        {showTooltip && (
            <div className={`absolute bottom-full ${tooltipPosition} mb-2 z-10`}>
              <div
                  className="relative px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg text-white"
                  style={{ backgroundColor: colorHex }}
              >
                {i18n.language === "fr" ? competence.descFr : competence.descEn}
                <div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent"
                    style={{ borderTopColor: colorHex }}
                ></div>
              </div>
            </div>
        )}
      </div>
  );
};
export default CompetenceCard;