import { useEffect, useState } from "react";
import formationsJsonData from "../../data/formations.json";
import "./formation.css";

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
    <>
      <section id="formations" className="bg-green-300 mx-auto py-12 px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">• Formations</h2>
          <p className="text-xl font-semibold">Mes diplômes et formations académiques</p>
        </div>

        <div className="timeline">
          {formations.map((formation, index) => (
            <div className="timeline-item" key={index} onClick={() => setSelectedFormation(formation)}>
              <div className="timeline-point"></div>
              <div className="timeline-info">
                <p>{formation.level}</p>
              </div>

              <div className="timeline-content">
                <h4>{formation.school}</h4>
                <h3 className="diplome">
                  <span>{formation.periode} </span> - {formation.school}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {selectedFormation && (
          <div className="modal modal-open">
            <div className="modal-box">
              <h3 className="font-bold text-lg">{selectedFormation.title}</h3>
              <p className="text-sm mb-2">
                {selectedFormation.periode} - {selectedFormation.school}
              </p>
              <p>{selectedFormation.details}</p>
              <div className="modal-action">
                <button className="btn" onClick={() => setSelectedFormation(null)}>
                  Fermer
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Formations;
