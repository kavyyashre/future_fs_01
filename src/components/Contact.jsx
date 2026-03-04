import React, { useState } from "react";

const Contact = () => {
    const [status, setStatus] = useState("");
    const [submitting, setSubmitting] = useState(false);

    // 👇 IKKADA NEE FORMSPREE ID PETTA
    const FORMSPREE_URL = "https://formspree.io/f/mdkqkezz"; // abcdxyz1 ni mee id tho replace chey

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("");
        setSubmitting(true);

        const form = e.target;
        const data = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value,
        };

        try {
            const res = await fetch(FORMSPREE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (res.ok) {
                setStatus("Thank you! Your message has been sent.");
                form.reset();
            } else {
                setStatus(
                    result.error || "Something went wrong. Please try again later."
                );
            }
        } catch (err) {
            setStatus("Network error. Please check your connection and try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section section-alt">
            <h2 className="section-title">Contact</h2>
            <p className="section-subtitle">Let&apos;s connect</p>

            <div className="contact-wrapper">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name*</label>
                        <input id="name" name="name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email*</label>
                        <input id="email" name="email" type="email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message*</label>
                        <textarea id="message" name="message" rows="4" required />
                    </div>

                    <button className="btn primary" type="submit" disabled={submitting}>
                        {submitting ? "Sending..." : "Send Message"}
                    </button>

                    {status && <p className="form-status">{status}</p>}
                </form>

                <div className="contact-info">
                    <p>
                        <strong>Email:</strong>{" "}
                        <a href="mailto:yarraguntlakavyyashre@gmail.com">
                            yarraguntlakavyyashre@gmail.com
                        </a>
                    </p>
                    <p>
                        <strong>GitHub:</strong>{" "}
                        <a
                            href="https://github.com/kavyyashre"
                            target="_blank"
                            rel="noreferrer"
                        >
                            github.com/kavyyashre
                        </a>
                    </p>
                    <p>
                        <strong>LinkedIn:</strong>{" "}
                        <a
                            href="https://www.linkedin.com/in/yarraguntla-kavyyashre-50a588305"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Yarraguntla Kavyyashre
                        </a>
                    </p>
                    <p>
                        <strong>Resume:</strong>{" "}
                        <a
                            href="https://drive.google.com/file/d/1JpraUVwVjsrs07M3x_kEdi_WOen2LStM/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                        >
                            View Resume (PDF)
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
