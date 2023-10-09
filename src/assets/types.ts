export interface PersonalInfo {
    firstName: string;
    lastName: string;
    title: string;
    image: string;
    description: string;
}

export interface Skill {
    id: number;
    name: string;
}

export interface Project {
    name: string;
    description: string;
    repoLink: string;
    demoLink?: string;
    deployLink?: string;
    image: string;
    techStack: string[];
}

export interface Contact {
    email: string;
    resume: string;
}

export interface Social {
    gitHub: string;
    gitLab: string;
    linkenin: string;
}

export interface Data {
    personalInfo: PersonalInfo;
    skills: Skill[];
    projects: Project[];
    contact: Contact;
    social: Social;
}