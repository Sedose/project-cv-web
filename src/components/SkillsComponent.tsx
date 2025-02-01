interface SkillsProps {
    skills: string[];
}

const SkillsComponent = ({ skills }: SkillsProps) => {
    return (
        <div className="mt-6">
            <p className="mt-2 text-gray-700">{skills.join(", ")}</p>
        </div>
    );
};

export default SkillsComponent;
