import { Certification } from "../data.ts";

interface CertificationsProps {
    certifications: Certification[];
}

const CertificationsComponent = ({ certifications }: CertificationsProps) => {
    return (
        <div className="mt-6">
            {certifications.map((cert, index) => (
                <div key={index} className="mt-4">
                    <h3 className="text-lg font-semibold">{cert.title}</h3>
                    <p className="text-gray-600">{cert.organization}, {cert.date}</p>
                </div>
            ))}
        </div>
    );
};

export default CertificationsComponent;
