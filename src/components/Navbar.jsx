import React, { useState, useEffect } from "react";

const sections = ["home", "about", "skills", "projects", "contact"];

const Navbar = () => {
    const [active, setActive] = useState("home");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            sections.forEach((id) => {
                const el = document.getElementById(id);
                if (!el) return;
                const offsetTop = el.offsetTop - 120;
                if (window.scrollY >= offsetTop) {
                    setActive(id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
        setOpen(false);
    };

    return (
        <header className="header">
            <div className="logo">
                Kavya<span>.</span>
            </div>

            <nav className={`nav ${open ? "open" : ""}`}>
                {sections.map((sec) => (
                    <button
                        key={sec}
                        className={`nav-link ${active === sec ? "active" : ""}`}
                        onClick={() => scrollToSection(sec)}
                    >
                        {sec.toUpperCase()}
                    </button>
                ))}
            </nav>

            <button className="menu-toggle" onClick={() => setOpen((p) => !p)}>
                ☰
            </button>
        </header>
    );
};

export default Navbar;
