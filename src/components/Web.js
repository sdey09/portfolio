import React from "react";
import "../App.css";
import Projects from "./Projects";

const projectList = [
	{
		name: "Codecrafters Redis Java",
		details:
			"Implemented a Redis-compatible in-memory key-value store in Java with RESP parsing, concurrent client handling, TTL expiration, and stream operations.",
		stack: "Java, TCP sockets, concurrency, Redis protocol",
		link: "https://github.com/Subhojit-Dey1234/codecrafters-redis-java",
	},
	{
		name: "TSG Hackathon Netlify",
		details:
			"Built a hackathon platform with real-time notifications and event-driven flows for concurrent users.",
		stack: "MERN stack, Socket.io, Netlify",
		link: "https://github.com/Subhojit-Dey1234/TSG-HackathonNetlify",
	},
	{
		name: "Music Upload Spring",
		details:
			"Designed backend APIs with JWT auth, role-based access, S3 uploads with deduplication, and low-latency HTTP range-based streaming.",
		stack: "Java, Spring Boot, AWS S3, JWT",
		link: "https://github.com/Subhojit-Dey1234/music_upload_spring",
	},
];

export default function Web() {
	return (
		<section className="section-shell">
			<div className="terminal-window">
				<div className="terminal-window-header">
					<span className="dot red"></span>
					<span className="dot yellow"></span>
					<span className="dot green"></span>
					<p>projects.log</p>
				</div>
				<div className="terminal-window-body">
					<h2 className="section-title">projects</h2>
					<div className="project-grid">
						{projectList.map((project) => (
							<Projects key={project.name} {...project} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
