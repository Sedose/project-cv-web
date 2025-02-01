import { Project } from "../data.ts";

interface ProjectsProps {
    projects: Project[];
}

const ProjectsComponent = ({ projects }: ProjectsProps) => {
    return (
        <div className="mt-6">
            {projects.map((project, index) => (
                <div key={index} className="mt-4">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-gray-700">{project.description}</p>
                    <p className="text-gray-600">Technologies: {project.technologies.join(", ")}</p>
                </div>
            ))}
        </div>
    );
};

export default ProjectsComponent;
