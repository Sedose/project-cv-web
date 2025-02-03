import HeaderComponent from "./components/HeaderComponent.tsx";
import SkillsComponent from "./components/SkillsComponent.tsx";
import ExperienceComponent from "./components/ExperienceComponent.tsx";
import EducationComponent from "./components/EducationComponent.tsx";
import CertificationsComponent from "./components/CertificationsComponent.tsx";
import {resumeData} from "./data.ts";

const {contact, skills, experience, education, certifications} = resumeData;

// Reusable SectionHeader Component
const SectionHeader = ({title}: { title: string }) => (
    <div className="flex items-center mb-4">
        <h2 className="text-xl font-semibold text-blue-500">{title}</h2>
        <div className="flex-grow h-[1px] bg-gray-300 ml-4"></div>
    </div>
);

const App = () => (
    <div className="bg-gray-100 p-6">
        {/* Increased max width */}
        <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
            <HeaderComponent contact={contact} />

            <div className="mt-6">
                <SectionHeader title="Skills" />
                <SkillsComponent skills={skills} />
            </div>

            {/* Experience Section */}
            <div className="mt-6">
                <SectionHeader title="Experience" />
                <ExperienceComponent experience={experience} />
            </div>

            {/* Education Section */}
            <div className="mt-6">
                <SectionHeader title="Education" />
                <EducationComponent education={education} />
            </div>

            {/* Certifications Section */}
            <div className="mt-6">
                <SectionHeader title="Certifications" />
                <CertificationsComponent certifications={certifications} />
            </div>
        </div>
    </div>
);


export default App;
