import { Experience } from "../data.ts";

interface ExperienceProps {
    experience: Experience[];
}

const ExperienceComponent = ({ experience }: ExperienceProps) => {
    return (
        <div className="mt-6">
            {experience.map((exp, index) => (
                <div key={index} className="mt-6">
                    {/* Header Section */}
                    <div className="flex justify-between items-center">
                        {/* Role */}
                        <div className="flex-1">
                            <h3 className="text-lg font-bold">{exp.role}</h3>
                        </div>

                        {/* Company */}
                        <div className="flex-1 text-center">
                            <p className="text-sm text-gray-500">{exp.company}</p>
                        </div>

                        {/* Location and Dates */}
                        <div className="flex-1 text-right">
                            <p className="text-sm text-gray-500">Ukraine | {exp.startDate} - {exp.endDate}</p>
                        </div>
                    </div>


                    {/* Responsibilities Section */}
                    <ul className="list-disc list-outside ml-6 mt-3 text-gray-700 space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ExperienceComponent;
