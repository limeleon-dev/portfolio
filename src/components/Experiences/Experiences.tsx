import experiencesJsonData from "../../data/experiences.json";
import ExperienceCard from "./ExperienceCard";

const Experiences = () => {
  return (
    <section id="experiences" className="bg-yellow-200 mx-auto py-12 px-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">• Expériences</h2>
        <p className="text-xl font-semibold">Mes Expériences Professionnelles</p>
      </div>

      <div className="flex flex-wrap justify-center items-start gap-4">
        {experiencesJsonData.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
