export const resumeData: ResumeData = {
    contact: {
        name: "Edhar Avuzi",
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
        "MockK",
        "Git",
        "Spring Framework",
        "Spring Core",
        "Spring Web MVC",
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
        "Object Oriented Programming (OOP)",
        "Java Core",
        "Postman",
        "Gradle",
        "GitLab",
        "Jenkins",
        "commercetools",
        "Backend Development",
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
            role: "Developer, Engineer",
            company: "EPAM Systems",
            startDate: "Nov 2024",
            endDate: "Till Now (4 months)",
            responsibilities: [
                "Reviewed and standardized unit tests to improve maintainability for several app features.",
                "Optimized log ingestion volume and reduced number of logs to reduce costs of maintanence.",
                "Proposed a style guide change to improve version-control diffs and editing efficiency.",
                "Refactored code to reduce technical debt, accelerating development and feature integration.",
                "Advocated for using Spring-managed beans over static functions/ static-scoped singletons to enhance maintainability, testability, and development speed.",
                "Refactored code to enable rapid addition of user-focused features, improving user experience.",
                "Recommended battle-tested tools to accelerate development.",
                "Proposed a simplified, unified approach for passing data in a standardized structural format.",
                "Optimized Kotlin coroutines usage, reducing production flow disruptions, leading to smoother user interactions and improved retention.",
                "Standardized code quality checks for merge request branches and the main development branch, ensuring consistent quality control and boosting developer productivity.",
                "Migrated a CI/CD pipeline from Jenkins to GitLab CI for a Kotlin/Java-based project, streamlining pipeline execution, improving version control integration, and reducing maintenance overhead.",
            ],
        }, {
            role: "Developer, Cloud Application Developer",
            company: "EPAM Systems",
            startDate: "Nov 2023",
            endDate: "Oct 2024 (1 year)",
            responsibilities: [
                "Reduced technical debt in various Java-based projects by organizing and refactoring project structure.",
                "Conducted an in-depth analysis of a large codebase to map data flow between the application, a relational SQL database, and a document-based NoSQL database. Delivered comprehensive mapping documentation in Google Sheets, streamlining cross-database data handling and establishing a foundation for efficient data lookup.",
                "Communicated with SRE/DevOps teams by creating tickets for templates and Jenkins jobs to extend infrastructure, including Kubernetes objects crucial for application functionality.",
                "Implemented a solution to bridge data consistency between a legacy SQL-based database and a cloud-native document-oriented NoSQL database by eliminating ID generation discrepancies. Ensured seamless profile creation and updates, improving agent performance and data integrity.",
                "Refactored a Java-based application to eliminate code duplication across five key endpoints, significantly reducing codebase size, improving maintainability, and enhancing readability for faster feature implementation.",
                "Performed a comprehensive analysis of a large, poorly written legacy Java codebase with redundancies and inefficiencies. Created detailed Confluence documentation outlining SQL database interactions and business logic to aid in the transition to a cloud-based application using a document-oriented NoSQL database.",
                "Refactored and optimized a cloud-based application by aligning it with documented legacy logic, removing duplicated code, and ensuring a smoother migration while maintaining business continuity.",
                "Fixed multiple small bugs, including ensuring consistent field population across XML and JSON formats, resolving date-time formatting issues, eliminating duplicated data in response payloads, fixing request validation logic, and aligning cloud system responses with legacy behavior for seamless integration."
            ],
        }, {
            role: "Key Developer",
            company: "EPAM Systems",
            startDate: "Jul 2023",
            endDate: "Nov 2023 (5 months)",
            responsibilities: [
                "Implemented Apigee proxies for multiple domains including Client, Broker, and Company to create a unified API for SDK consumers. Integrated rate limiting to efficiently manage varying levels of traffic.",
                "Provided OpenAPI documentation using Stoplight, ensuring comprehensive coverage of all endpoints, parameters, payloads, and response schemas. Maintained clear language and consistent formatting for improved readability and understanding. Included detailed and interactive examples to demonstrate endpoint usage and scenario handling."
            ],
        }, {
            role: "Order Management System (OMS) researcher",
            company: "EPAM Systems",
            startDate: "Feb 2023",
            endDate: "Jul 2023 (6 months)",
            responsibilities: [
                "Investigated and devised methods to implement external tax calculation and special bonuses calculation for customers based on their purchase history.",
                "Participated in the analysis to determine if Kibo OMS aligns with MACH architecture.",
                "Scaffolded an API extension application to house the action files for custom functionality.",
                "Developed an action function that runs prior to an order's status change to 'Completed,' leveraging JavaScript to implement custom logic in action files.",
                "Designed an action function to fetch order history using page requests and create a predicate. If the predicate evaluates to true, the function calls a REST API to increase the 'bonus account' attribute for the customer.",
                "Built a mechanism that categorizes customers into specific segments when their 'bonus account' reaches a predefined threshold by invoking a designated API.",
                "Developed a dedicated backend that returns essential tax-related information based on order details. Created a skeleton function to calculate taxes before an actual API call is made.",
                "Used Postman to examine and test JSON requests and responses of the OMS platform API.",
                "Utilized Grunt.js to run build and asset upload commands efficiently."
            ]
        }, {
            role: "Backend Developer",
            company: "EPAM Systems",
            startDate: "Feb 2022",
            endDate: "Jul 2022 (7 months)",
            responsibilities: [
                "Implemented a feature that enables users to search for digital asset IDs based on a provided .xls file containing asset links using Java and Spring. Developed both backend and UI functionality to enhance the speed and ease of finding required digital assets.",
                "Migrated SOAP endpoints to REST to streamline the system's API and improve efficiency. Analyzed XML requests and responses using SoapUI, then examined JSON requests and responses with Postman to generate documentation for the new REST endpoints.",
                "Wrote unit tests to ensure code quality and maintainability, covering most of the newly introduced code.",
                "Implemented minor enhancements, including disabling endpoints for development debugging in the production environment to improve system performance and security.",
                "Conducted a comprehensive analysis of the existing .NET C# codebase to understand the implementation and functionality of hubs-related REST endpoints.",
                "Designed a scalable, high-performance, and maintainable Java-based architecture for system migration.",
                "Translated .NET C# code into Java while ensuring logic and functionality remained consistent. Adapted C#-specific constructs and libraries to Java equivalents, including migrating from a .NET-specific spider chart library to an open-source Java alternative.",
                "Performed thorough unit testing of the migrated endpoints using the Spock Framework, debugging and resolving issues to ensure correctness.",
                "Utilized JavaScript to scrape hubs' websites for key information such as locales and country lists. Simplified data storage by replacing complex databases and third-party systems with structured JSON files for more efficient data handling.",
                "Developed comprehensive Postman API tests for both C# and Java endpoints to ensure functional equivalence post-migration.",
                "Created detailed documentation of the migration process, including C# to Java mappings, challenges encountered, and solutions applied, to assist in future migrations.",
                "Collaborated closely with the team to coordinate migration efforts and resolve compatibility issues.",
                "Reviewed and optimized the new Java code for performance improvements, reducing time complexities of algorithms.",
                "Participated in code reviews to maintain high-quality standards and ensure consistency with the team's coding practices.",
            ],
        }, {
            role: "Backend Developer",
            company: "EPAM Systems",
            startDate: "Jan 2021",
            endDate: "Jul 2021 (7 months)",
            responsibilities: [
                "Worked extensively on system integration, understanding application code written in Java and Kotlin. Facilitated communication between upstream and downstream systems using XML and JSON for order and payment data exchange.",
                "Developed unit and functional tests to assess interactions between the front-end and back-end application, ensuring early bug detection and system integrity. Adopted a Test-Driven Development (TDD) approach to clarify feature requirements and confirm correct implementation.",
                "Ran all existing tests after introducing new features to prevent regression bugs and maintain application stability.",
                "Developed new features, including the Point of Sale credit (payment method) and credit eligibility application journeys, implementing rules and validations to prevent incompatible item additions to customer baskets.",
                "Refactored poorly written code to enhance system performance, reduce bugs, and improve maintainability.",
                "Fixed and maintained Pact tests to ensure correct integration with third-party systems by verifying request and response schema consistency.",
                "Assisted the front-end team by contributing to product information page sections using React and JavaScript.",
                "Participated in code reviews, identifying issues and providing solutions to improve code quality.",
                "Enhanced CI/CD pipelines by integrating Pact tests, ensuring robust automated testing before deployment.",
                "Effectively communicated with business analysts and QA engineers to align feature development with customer expectations and satisfaction.",
                "Collaborated closely with QA engineers to ensure thorough feature testing and quality assurance.",
                "Refactored and migrated Java classes to Kotlin, improving code readability and maintainability."
            ]
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
