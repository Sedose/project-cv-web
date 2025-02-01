import { Education } from "../data.ts";

interface EducationProps {
    education: Education[];
}

const EducationComponent = ({ education }: EducationProps) => {
    return (
        <div className="mt-6">
            {education.map((edu, index) => (
                <div key={index} className="mt-4">
                    <h3 className="text-lg font-semibold">{edu.degree} - {edu.university}</h3>
                    <p className="text-gray-600">{edu.startDate} - {edu.endDate}</p>
                </div>
            ))}
        </div>
    );
};

export default EducationComponent;
