import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export const portfolioData = {
    personalInfo: {
        name: "Niv Amos",
        title: "AI Engineer | Algorithms Developer",
        email: "nivamos704@gmail.com",
        phone: "0526552704",
        socials: [
            {
                name: "LinkedIn",
                url: "https://il.linkedin.com/in/niv-amos-a25990142",
                icon: Linkedin
            },
            {
                name: "GitHub",
                url: "https://github.com/NivAm12",
                icon: Github
            },
            {
                name: "Email",
                url: "mailto:nivamos704@gmail.com",
                icon: Mail
            }
        ]
    },
    skills: [
        "Generative AI", "Machine Learning", "Computer Vision", "Deep Learning",
        "Data Science", "PyTorch", "AWS", "Azure", "GCP",
        "Numpy", "Scikit-Learn", "pandas", "Clinical Research",
        "LangGraph", "LangChain", "PostgreSQL"
    ],
    experience: [
        {
            title: "Artificial Intelligence Engineer",
            company: "Elad Software Systems",
            period: "March 2025 - Present",
            description: [
                "Build autonomous AI agents with LangGraph/LangChain, custom tool routing, memory, and multi-step reasoning.",
                "Develop production-grade RAG pipelines using vector + graph databases, advanced chunking/embedding strategies.",
                "Deploy end-to-end AI/ML systems on AWS & Azure using microservice-based architectures.",
                "Work directly with clients across various sectors to design and integrate tailored AI solutions."
            ]
        },
        {
            title: "Algorithms Developer",
            company: "SAMPL Lab",
            period: "January 2023 - March 2024",
            description: [
                "Developed and optimized deep learning models for medical image classification, segmentation, and object detection.",
                "Designed advanced computer vision architectures using Visual Transformers, GNNs, and CNNs.",
                "Integrated self-supervised learning, transfer learning, and time series analysis."
            ]
        },
        {
            title: "Software Engineer",
            company: "GistMD",
            period: "June 2021 - January 2023",
            description: [
                "Built and deployed web apps with Node.js, React, and Express.",
                "Optimized PostgreSQL databases for performance and scalability.",
                "Deployed and automated workflows on Google Cloud (GCP)."
            ]
        }
    ],
    education: [
        {
            degree: "MSc in Computer Science",
            institution: "The Hebrew University of Jerusalem",
            period: "March 2022 - November 2024",
            details: "magna cum laude - 93 GPA",
            thesis: "Analyzed MRI data to detect age-related brain connectivity changes using machine learning and statistical methods.",
            publication: "https://www.biorxiv.org/content/10.1101/2025.09.18.677158v1"
        },
        {
            degree: "BSc in Computer Science",
            institution: "Holon Institute of Technology (HIT)",
            period: "Oct 2018 - July 2021",
            details: "magna cum laude - 93 GPA"
        }
    ]
};
