import React from "react";

const Hero = () => {
    return (
        <section id="home" className="section hero">
            <div className="hero-content">
                <p className="hero-tag">Frontend Developer</p>
                <h1>
                    Hi, I'm <span>Kavya</span>
                </h1>
                <p className="hero-subtitle">
                    I build clean, modern and responsive web applications using HTML, CSS,
                    JavaScript and React.
                </p>

                <div className="hero-buttons">
                    <a href="#projects" className="btn primary">
                        View Projects
                    </a>
                    <a href="#contact" className="btn outline">
                        Contact Me
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1JpraUVwVjsrs07M3x_kEdi_WOen2LStM/view?usp=sharing"
                        className="btn outline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View Resume
                    </a>
                </div>
            </div>

            <div className="hero-right-card">
                <p className="hero-small-title">Currently</p>
                <h3>Learning Full Stack Development</h3>
                <p className="hero-small-text">
                    Focused on Java, React, and strong fundamentals to become a solid
                    developer.
                </p>
            </div>
        </section>
    );
};

export default Hero;
