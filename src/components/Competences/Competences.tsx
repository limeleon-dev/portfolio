import competencesJsonData from "../../data/competences.json";
import CompetenceCard from "./CompetenceCard";
import {useTranslation} from "react-i18next";

const Competences = () => {
    const {t} = useTranslation()
    return (
        <section
            id="competences"
            className="bg-transparent py-2 min-h-screen"
        >
            <div className="w-full bg-navbar border-navbar shadow-navbar px-0 mb-12">
                <div className="mx-5 px-5 py-3 mt-2">
                    <h2 className="text-3xl font-bold text-navbar mb-2">• {t("competences.titre")}</h2>
                    <p className="text-lg text-navbar font-medium">{t("competences.sousTitre")}</p>
                </div>
            </div>
            <div className="container mx-auto px-8 lg:px-20">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                    {competencesJsonData.map((competence, index) => (
                        <CompetenceCard key={index} competence={competence} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Competences;