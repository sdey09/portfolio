import React from "react";
import "../App.css";
import Projects from "./Projects";

const projectList = [
	{
		name: "Redis-Compatible In-Memory Data Store",
		details:
			"Engineered a Redis-compatible key-value store from scratch over raw TCP (RESP protocol) with thread-safe concurrent connections, core commands (SET, GET, DEL, INCR, Streams with blocking XREAD), and TTL-based expiration.",
		stack: "Java, TCP sockets, concurrency, Redis protocol",
		link: "https://github.com/sdey09/codecrafters-redis-java",
	},
	{
		name: "TSG Website Hackathon",
		details:
			"Developed a real-time notification system delivering live updates across concurrent users at IIT Kharagpur; awarded Best Feature among all participating teams.",
		stack: "MongoDB, Express, React, Node.js, Socket.io",
		link: "https://github.com/sdey09/TSG-HackathonNetlify",
	},
	{
		name: "Music Upload Spring",
		details:
			"Designed backend APIs with JWT auth, role-based access, S3 uploads with deduplication, and low-latency HTTP range-based streaming.",
		stack: "Java, Spring Boot, AWS S3, JWT",
		link: "https://github.com/sdey09/music_upload_spring",
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
