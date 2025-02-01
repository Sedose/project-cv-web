export const resumeData: ResumeData = {
    contact: {
        name: "Edhar Avuzi",
        phone: "+380956859021",
        email: "avuzia@gmail.com",
        github: "https://github.com/Sedose",
        leetcode: "https://leetcode.com/u/avuzi",
        blog: "https://medium.com/@avuzia",
    },
    profile: `
        Software developer with 4 years of experience, specializing primarily in back-end development. 
        I have extensive hands-on experience with multiple languages, with a firm understanding of data structures, 
        algorithms, and software design principles. I hold a bachelor's and master's degree in computer science 
        and programming engineering. 
        
        I am committed to continuous learning and adapting to new technologies, which, combined with my 
        problem-solving skills and attention to detail, enable me to develop optimized and robust software solutions. 
        In my past roles, I have proven my ability to work in team environments, always ensuring the software I develop 
        aligns with business needs and user requirements. 
        
        My favourite principle is "Prefer composition over inheritance".
    `,
    skills: [
        "English",
        "Java",
        "Kotlin",
        "JavaScript",
        "Unit Testing",
        "Junit",
        "Mockito",
        "Kotest",
        "mockk",
        "Git",
        "Spring Framework",
        "Spring Core",
        "Spring Boot",
        "Apigee",
        "Telerik Fiddler Classic",
        "REST API",
        "SOAP",
        "Google Cloud Platform",
        "Firestore",
        "MySQL",
        "SOLID",
        "Dependency injection",
        "Clean Code",
        "Design patterns",
        "Microservices",
        "Algorithms & Data structures",
        "Problem-solving",
        "Functional Programming",
        "Object-oriented Programming (OOP)",
        "Java Core",
        "Postman",
        "Gradle",
        "Gitlab",
        "Jenkins",
        "Commercetools",
        "Backend",
        "React",
        "Datadog",
        "HTML",
        "JSON",
        "Jira",
        "OAuth2",
        "Scala",
    ],
    experience: [
        {
            role: "Software Engineer",
            company: "EPAM Systems",
            startDate: "2023-08-01",
            endDate: "Present",
            responsibilities: [
                "Implemented Apigee proxies...",
                "Provided OpenAPI documentation...",
            ],
        },
    ],
    education: [
        {
            degree: "Master of Science",
            field: "Computer Science",
            university: "NTU 'KhPI'",
            startDate: "2021-09-01",
            endDate: "2022-12",
        },
    ],
    certifications: [
        {
            title: "Google Cloud Platform: Professional Cloud Developer",
            organization: "Google",
            date: "2022-05-01",
        },
    ],
    projects: [
        {
            title: "I-EAT",
            description:
                "A microservices-based application designed for food ordering and delivery.",
            technologies: [
                "Java 8",
                "TypeScript",
                "React",
                "Redux",
                "Spring Boot",
            ],
        },
    ],
};

export interface Contact {
    name: string;
    phone: string;
    email: string;
    github: string;
    leetcode: string;
    blog: string;
}

export interface Experience {
    role: string;
    company: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];
}

export interface Education {
    degree: string;
    field: string;
    university: string;
    startDate: string;
    endDate: string;
}

export interface Certification {
    title: string;
    organization: string;
    date: string;
}

export interface Project {
    title: string;
    description: string;
    technologies: string[];
}

export interface ResumeData {
    contact: Contact;
    profile: string;
    skills: string[];
    experience: Experience[];
    education: Education[];
    certifications: Certification[];
    projects: Project[];
}
