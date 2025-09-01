import experiencesJsonData from "../../data/experiences.json";
import ExperienceCard from "./ExperienceCard";
import { useTranslation } from "react-i18next";

const Experiences = () => {
    const { t } = useTranslation();

    return (
        <section id="experiences" className="bg-transparent py-2">
            <div className="w-full bg-navbar border-navbar shadow-navbar px-0 mb-10">
                <div className="mx-5 px-5 py-3 mt-2">
                    <h2 className="text-3xl font-bold text-navbar mb-2">• {t("experiences.title")}</h2>
                    <p className="text-lg text-navbar font-medium">{t("experiences.subtitle")}</p>
                </div>
            </div>

            <div className="flex flex-wrap justify-center items-start gap-4 container mx-auto px-8 lg:px-20">
                {experiencesJsonData.map((exp) => (
                    <ExperienceCard key={exp.id} exp={exp} />
                ))}
            </div>
        </section>
    );
};

export default Experiences;