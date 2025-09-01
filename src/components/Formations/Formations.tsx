import formationsJsonData from "../../data/formations.json";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export interface Formation {
  id: number;
  titleFr: string;
  titleEn: string;
  periodeFr: string;
  periodeEn: string;
  schoolFr: string;
  schoolEn: string;
  descriptionFr: string;
  descriptionEn: string;
  schoolPlaceFr: string;
  schoolPlaceEn: string;
  levelFr: string;
  levelEn: string;
  skillsFr: string[];
  skillsEn: string[];
  schoolUrl: string;
}

const Formations = () => {
  const [formations, setFormations] = useState<Formation[]>([]);
  const [selectedFormation, setSelectedFormation] = useState<Formation | null>(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setFormations(formationsJsonData.slice().reverse());
  }, []);

  return (
      <section id="formations" className="bg-transparent py-2">
        <div className="w-full bg-navbar border-navbar shadow-navbar px-0 mb-10">
          <div className="mx-5 px-5 py-3 mt-2">
            <h2 className="text-3xl font-bold text-navbar mb-2">
              • {t("navbar.formations")}
            </h2>
            <p className="text-lg text-navbar font-medium">
              {t("formations.subtitle")}
            </p>
          </div>
        </div>

        <div className="w-full max-w-5xl mx-auto">
          <ul className="steps steps-vertical w-full flex flex-col items-center">
            {formations.map((formation) => (
                <li key={formation.id} className="step step-primary w-full" data-content="">
                  <div className="grid grid-cols-[auto,1fr] gap-6 w-full items-stretch">
                    <div className="bg-white border border-gray-300 rounded-xl p-6 my-5 flex items-center justify-between w-full">
                      <div className="flex flex-col text-left flex-1">
                        <h3 className="text-lg font-semibold mb-1">
                          {i18n.language === "fr" ? formation.titleFr : formation.titleEn}
                        </h3>
                        <span className="text-base text-primary-dark font-medium mb-1">
                      {i18n.language === "fr" ? formation.schoolFr : formation.schoolEn}
                    </span>
                        <span className="text-sm text-primary-light">
                      {i18n.language === "fr" ? formation.periodeFr : formation.periodeEn}
                    </span>
                      </div>
                      <div className="ml-4 px-4 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition">
                        {i18n.language === "fr" ? formation.levelFr : formation.levelEn}
                      </div>
                      <button
                          className="ml-4 px-4 py-2 rounded-xl bg-accent text-white font-semibold hover:bg-accent-700 transition cursor-pointer"
                          onClick={e => {
                            e.stopPropagation();
                            setSelectedFormation(formation);
                          }}
                      >
                        {t("formations.learnMoreBtn")}
                      </button>
                    </div>
                  </div>
                </li>
            ))}
          </ul>
        </div>

        {selectedFormation && (
            <>
              <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm backdrop-brightness-25 z-50"></div>
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl shadow-2xl p-8 w-[500px] max-w-[90vw] border border-white border-opacity-20 relative">
                  <h3 className="font-bold text-lg mb-2">
                    {i18n.language === "fr" ? selectedFormation.titleFr : selectedFormation.titleEn}
                  </h3>
                  <p className="text-sm text-primary mb-1">
                    {i18n.language === "fr"
                        ? `${selectedFormation.periodeFr} — ${selectedFormation.schoolFr} (${selectedFormation.schoolPlaceFr})`
                        : `${selectedFormation.periodeEn} — ${selectedFormation.schoolEn} (${selectedFormation.schoolPlaceEn})`}
                  </p>
                  <p className="text-sm text-primary-light mb-2">
                    {i18n.language === "fr"
                        ? `${t("formations.levelLabel")} : ${selectedFormation.levelFr}`
                        : `${t("formations.levelLabel")} : ${selectedFormation.levelEn}`}
                  </p>
                  <p className="text-base mt-1 mb-2">{i18n.language === "fr" ? selectedFormation.descriptionFr : selectedFormation.descriptionEn }</p>
                  {selectedFormation.skillsFr && selectedFormation.skillsEn && (
                      <div className="mb-4 flex flex-wrap gap-2">
                        {(i18n.language === "fr" ? selectedFormation.skillsFr : selectedFormation.skillsEn)?.map(
                            (skill, idx) => (
                                <span
                                    key={idx}
                                    className="badge badge-outline bg-primary-light text-primary-dark border-primary-light text-xs px-3 py-1 rounded-full"
                                >
                        {skill}
                      </span>
                            )
                        )}
                      </div>
                  )}
                  <div className="mb-6"></div>
                  <div className="flex gap-3 justify-end">
                    <a
                        href={selectedFormation.schoolUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition"
                    >
                      {t("formations.learnMoreBtn")}
                    </a>
                    <button
                        className="px-5 py-2 rounded-xl bg-gray-300 hover:bg-gray-400 text-black font-semibold transition"
                        onClick={() => setSelectedFormation(null)}
                    >
                      {t("formations.closeBtn")}
                    </button>
                  </div>
                </div>
              </div>
            </>
        )}
      </section>
  );
};

export default Formations;