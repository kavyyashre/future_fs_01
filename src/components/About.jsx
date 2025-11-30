import React from "react";

const About = () => {
    return (
        <section id="about" className="section">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Who I am</p>
            <div className="about-grid">
                <p>
                    I'm Kavya, an aspiring Frontend Developer who loves building clean,
                    user-friendly interfaces. I enjoy turning ideas into real projects on
                    the web.
                </p>
                <p>
                    I'm currently focused on <strong>Java</strong>,{" "}
                    <strong>Data Structures</strong>, and <strong>React</strong> while
                    building projects to strengthen my skills and confidence.
                </p>
            </div>
        </section>
    );
};

export default About;
