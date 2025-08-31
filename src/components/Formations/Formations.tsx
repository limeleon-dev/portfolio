import { useEffect, useState } from "react";
import formationsJsonData from "../../data/formations.json";

interface Formation {
  id: number;
  title: string;
  periode: string;
  school: string;
  level: string;
  description: string;
  details: string;
}
const Formations = () => {
  const [formations, setFormations] = useState<Formation[]>([]);
  const [selectedFormation, setSelectedFormation] = useState<Formation | null>(null);

  useEffect(() => {
    setFormations(formationsJsonData.slice().reverse());
  }, []);

  return (
    <section id="formations" className="bg-green-300 mx-auto py-12 px-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">• Formations</h2>
        <p className="text-xl font-semibold">Mes diplômes et formations académiques</p>
      </div>

      <div className="mx-5">
        <ul className="steps steps-vertical w-full">
          {formations.map((formation) => (
            <li key={formation.id} className="step step-primary" data-content="">
              <div className="flex items-center ml-8 cursor-pointer group">
                <div className="bg-teal-600 text-white text-sm font-bold px-3 py-2 rounded-lg mr-6 min-w-[4vw] text-center">
                  {formation.level}
                </div>

                <div
                  className="bg-white border border-gray-300 rounded-xl p-6 flex-1 w-[85vw] my-5"
                  onClick={() => setSelectedFormation(formation)}
                >
                  <h4 className="font-normal text-lg mb-2">{formation.school}</h4>
                  <h3 className="text-base">
                    <span className="text-teal-600 font-medium">{formation.periode}</span> - {formation.title}
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {selectedFormation && (
        <div className="modal modal-open">
          <div className="modal-box max-w-2xl">
            <h3 className="font-bold text-lg mb-2">{selectedFormation.title}</h3>
            <p className="text-sm text-teal-600 mb-4">
              {selectedFormation.periode} - {selectedFormation.school}
            </p>
            <p className="text-justify leading-relaxed">{selectedFormation.details}</p>
            <div className="modal-action">
              <button className="btn btn-primary" onClick={() => setSelectedFormation(null)}>
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Formations;
