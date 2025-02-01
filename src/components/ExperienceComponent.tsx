import { Experience } from "../data.ts";

interface ExperienceProps {
    experience: Experience[];
}

const ExperienceComponent = ({ experience }: ExperienceProps) => {
    return (
        <div className="mt-6">
            {experience.map((exp, index) => (
                <div key={index} className="mt-4">
                    <h3 className="text-lg font-semibold">{exp.role} at {exp.company}</h3>
                    <p className="text-gray-600">{exp.startDate} - {exp.endDate}</p>
                    <ul className="list-disc list-inside mt-2">
                        {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="text-gray-700">{resp}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ExperienceComponent;
