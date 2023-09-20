import { Data } from './types';

const data: Data = {
    personalInfo: {
        name: 'Kaining Chen',
        title: 'Software Engineer',
        image: 'https://via.placeholder.com/300',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros sed nisl scelerisque ultricies. Sed lacinia, massa eget finibus hendrerit, nulla augue tincidunt nisi, at maximus elit nisl vel nunc. Nullam sit amet lectus vitae tortor',
    },
    skills: [
        { id: 1, name: 'JavaScript' },
        { id: 2, name: 'TypeScript' },
        { id: 3, name: 'React' },
        { id: 4, name: 'Node.js' },
        { id: 5, name: 'MongoDB' },
        { id: 6, name: 'PostgreSQL' },
        { id: 7, name: 'Python' },
        { id: 8, name: 'Django' },
        { id: 9, name: 'FastAPI' },
        { id: 10, name: 'HTML' },
        { id: 11, name: 'CSS' },
        { id: 12, name: 'Git' },
        { id: 13, name: 'Docker' },
        { id: 14, name: 'Back-End Development' },
        { id: 15, name: 'Front-End Development' },
        { id: 16, name: 'Full-Stack Development' },
        { id: 17, name: 'Agile Environment' },
        { id: 18, name: 'RESTful API' },
        { id: 19, name: 'CI/CD' },
        { id: 20, name: 'SQL' },
        { id: 21, name: 'NoSQL' },
    ],
    projects: [
        {
            name: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros sed nisl scelerisque ultricies. Sed lacinia, massa eget finibus hendrerit, nulla augue tincidunt nisi, at maximus elit nisl vel nunc. Nullam sit amet lectus vitae tortor ',
            repoLink: 'https://github.com',
            demoLink: 'https://github.com',
            deployLink: 'https://github.com',
            image: 'https://via.placeholder.com/300',
            techStack: ['JavaScript', 'React', 'Node.js', 'MongoDB']
        },
        {
            name: 'Project 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros sed nisl scelerisque ultricies. Sed lacinia, massa eget finibus hendrerit, nulla augue tincidunt nisi, at maximus elit nisl vel nunc. Nullam sit amet lectus vitae tortor ',
            repoLink: 'https://github.com',
            demoLink: 'https://github.com',
            deployLink: 'https://github.com',
            image: 'https://via.placeholder.com/300',
            techStack: ['JavaScript', 'React', 'Node.js', 'MongoDB']
        },
        {
            name: 'Project 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros sed nisl scelerisque ultricies. Sed lacinia, massa eget finibus hendrerit, nulla augue tincidunt nisi, at maximus elit nisl vel nunc. Nullam sit amet lectus vitae tortor ',
            repoLink: 'https://github.com',
            demoLink: 'https://github.com',
            deployLink: 'https://github.com',
            image: 'https://via.placeholder.com/300',
            techStack: ['JavaScript', 'React', 'Node.js', 'MongoDB']
        }
    ],
    contact: {
        email: 'kaining.chen.dev@gmail.com',
        resume: 'https://via.placeholder.com/300',
    },
    social: {
        gitHub: 'https://github.com/kccc23',
        gitLab: 'https://gitlab.com/kccc23',
        linkenin: 'https://linkedin.com/in/kaining-chen',
    },
};

export default data;
