import React from "react";
import "../App.css";

export default function Contact() {
	return (
		<section className="section-shell">
			<div className="terminal-window">
				<div className="terminal-window-header">
					<span className="dot red"></span>
					<span className="dot yellow"></span>
					<span className="dot green"></span>
					<p>contact.txt</p>
				</div>
				<div className="terminal-window-body">
					<h2 className="section-title">contact</h2>
					<p className="prompt-line">$ echo "let's build"</p>
					<div className="contact-links">
						<a
							href="https://forms.gle/ZT344svAz2AQ9s4n7"
							target="_blank"
							rel="noreferrer"
							className="terminal-anchor"
						>
							Google Form
						</a>
						<a
							href="https://github.com/Subhojit-Dey1234"
							target="_blank"
							rel="noreferrer"
							className="terminal-anchor"
						>
							GitHub
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
