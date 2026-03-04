import React from "react";

const projects = [
    {
        title: "Portfolio Website",
        description:
            "Responsive personal portfolio built with React, HTML and CSS.",
        live: "#",
        github: "#",
    },
    {
        title: "Cloud computing architecture for human resource management system(java)",
        description:
            "“It uses cloud infrastructure to securely manage and access HR data anytime and from anywhere.",
        live: "",
        github: "#",
    },
    {
        title: "Future Projects",
        description:
            "More React and full stack applications coming soon as I keep learning.",
        live: "",
        github: "",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="section">
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">A few things I've worked on</p>
            <div className="projects-grid">
                {projects.map((p) => (
                    <div key={p.title} className="project-card">
                        <h3>{p.title}</h3>
                        <p>{p.description}</p>
                        <div className="project-links">
                            {p.live && (
                                <a href={p.live} target="_blank" rel="noreferrer">
                                    Live Demo
                                </a>
                            )}
                            {p.github && (
                                <a href={p.github} target="_blank" rel="noreferrer">
                                    GitHub
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
