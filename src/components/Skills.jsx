import React from "react";

const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Core Java",
    "Git & GitHub",
];

const Skills = () => {
    return (
        <section id="skills" className="section section-alt">
            <h2 className="section-title">Skills</h2>
            <p className="section-subtitle">Technologies I work with</p>
            <div className="skills-grid">
                {skills.map((skill) => (
                    <div key={skill} className="skill-card">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
