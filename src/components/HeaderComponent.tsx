import { Contact } from "../data.ts";

interface HeaderProps {
    contact: Contact;
}

const HeaderComponent = ({ contact: { name, email, github, leetcode, blog } }: HeaderProps) => {
    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold uppercase">{name}</h1>
            <div className="flex justify-center gap-4 mt-2">
                <a href="https://www.linkedin.com/in/edhar-avuzi" className="text-blue-500">LinkedIn</a>
                <p>|</p>
                <a href={`mailto:${email}`} className="text-blue-500">{email}</a>
                <p>|</p>
                <a href={github} className="text-blue-500">GitHub</a>
                <p>|</p>
                <a href={leetcode} className="text-blue-500">LeetCode</a>
                <p>|</p>
                <a href={blog} className="text-blue-500">Blog</a>
            </div>
        </div>
    );
};

export default HeaderComponent;
