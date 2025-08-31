import { useState } from "react";
import experiencesJsonData from "../../data/experiences.json";

const ExperienceCard = ({ exp }: { exp: (typeof experiencesJsonData)[0] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-white border rounded-2xl shadow-md p-6 transition-all duration-300 w-full sm:w-[48%] mb-6
        ${exp.id === 4 ? "invisible pointer-events-none" : ""}`}
    >
      <div className="flex items-start justify-between cursor-pointer" onClick={() => setOpen(!open)}>
        <div className="flex items-center gap-4">
          {exp.logo && <img src={exp.logo} alt={exp.company ?? ""} className="w-16 h-16 object-contain" />}
          <div>
            <h3 className="text-xl font-bold text-gray-800">{exp.title ?? ""}</h3>
            <p className="text-sm font-medium text-indigo-600">{exp.type ?? ""}</p>
            <p className="text-sm text-gray-500 mt-1">{exp.company ?? ""}</p>
            <p className="text-xs text-gray-400">
              {exp.date ?? ""} • {exp.location ?? ""}
            </p>
          </div>
        </div>
        <i
          className={`fa-solid ${
            open ? "fa-chevron-up" : "fa-chevron-down"
          } text-gray-600 text-lg transition-transform duration-300`}
        ></i>
      </div>

      <p className="mt-4 text-sm text-gray-600">{exp.context ?? ""}</p>

      <div className={`overflow-hidden transition-all duration-500 ${open ? "max-h-96 mt-3" : "max-h-0"}`}>
        <div className="text-gray-600 text-sm leading-relaxed space-y-3">
          <p className="whitespace-pre-line">{exp.details ?? ""}</p>
          <div className="flex flex-wrap gap-2">
            {exp.skills?.map((skill, idx) => (
              <span key={idx} className="badge badge-outline badge-primary text-xs">
                {skill ?? ""}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
