import React from "react";
import "../App.css";

const socials = [
	{ label: "github", link: "https://github.com/Subhojit-Dey1234" },
	{ label: "linkedin", link: "https://www.linkedin.com/in/subhojit-dey-09/" },
	{ label: "email", link: "mailto:subhojitdey@gmail.com" },
];

const highlights = [
	"Software Developer at (May 2023 - Present)",
	"Built high-throughput ingestion pipelines processing 200K+ records/sec",
	"Improved p90 latency from 45 ms to 5 ms for high-RPS services",
	"Led zero-downtime MySQL schema and service migrations with Spring Boot",
];

export default function About() {
	return (
		<section className="section-shell">
			<div className="terminal-window">
				<div className="terminal-window-header">
					<span className="dot red"></span>
					<span className="dot yellow"></span>
					<span className="dot green"></span>
					<p>about.md</p>
				</div>
				<div className="terminal-window-body">
					<h2 className="section-title">about_me</h2>
					<p>
						Backend-focused software engineer with experience in Java, Spring Boot,
						distributed systems, and production service ownership.
					</p>
					<p className="prompt-line">$ cat impact.log</p>
					<ul className="about-list">
						{highlights.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
					<p>
						Education: B.Tech, IIT Kharagpur (2019 - 2023)
					</p>
					<div className="social-row">
						{socials.map((item) => (
							<a
								key={item.label}
								href={item.link}
								target={item.label === "email" ? undefined : "_blank"}
								rel={item.label === "email" ? undefined : "noreferrer"}
								className="terminal-anchor"
							>
								{item.label}
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
