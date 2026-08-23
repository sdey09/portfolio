import React from "react";

export default function Intro({ intro }) {
	return (
		<section className="terminal-window hero-window">
			<div className="terminal-window-header">
				<span className="dot red"></span>
				<span className="dot yellow"></span>
				<span className="dot green"></span>
				<p>session: hero.sh</p>
			</div>
			<div className="terminal-window-body">
				<p className="prompt-line">$ whoami</p>
				<h1>Subhojit Dey</h1>
				<p className="prompt-line">$ cat profile.txt</p>
				<p className="hero-role">
					Senior Backend Software Engineer with 3+ years designing and scaling
					distributed systems, microservices, and event-driven architectures in
					Java, Spring Boot, and AWS.
				</p>
				<p className="prompt-line">$ ./open-projects.sh</p>
				<button
					type="button"
					className="terminal-button"
					onClick={() => {
						intro.current.scrollIntoView({ behavior: "smooth" });
					}}
				>
					cd projects
				</button>
			</div>
		</section>
	);
}
