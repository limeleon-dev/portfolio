import competencesJsonData from "../../data/competences.json";
import CompetenceCard from "./CompetenceCard";

const Competences = () => {
  return (
    <section id="competences" className="bg-red-300 mx-auto py-12 px-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">• Compétences</h2>
        <p className="text-xl font-semibold">Stack technique et technologies</p>
      </div>

      <div className="grid grid-cols-6 mx-5 gap-3">
        {competencesJsonData.map((competence, index) => (
          <CompetenceCard key={index} competence={competence} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Competences;
