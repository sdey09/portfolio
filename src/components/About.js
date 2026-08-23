import React from "react";
import "../App.css";

const socials = [
	{ label: "github", link: "https://github.com/sdey09" },
	{ label: "linkedin", link: "https://www.linkedin.com/in/subhojit-dey-09/" },
	{ label: "email", link: "mailto:subhojitsdey@gmail.com" },
];

const highlights = [
	"Senior Software Engineer, Integral Ad Science (IAS) — Apr 2026 - Present",
	"Software Engineer, Integral Ad Science (IAS) — May 2023 - Mar 2026",
	"Architected a multi-tenant alerting platform on Databricks, DynamoDB & MySQL across 4 channels",
	"Improved p99 latency by 88% (45 ms to 5 ms) at 500K requests/sec on a gRPC microservice",
	"Migrated the in-memory datastore to Dragonfly, cutting pod memory footprint by 90% across 5 AWS regions",
	"Designed a real-time ingestion pipeline processing 50B+ events/day on Databricks Autoloader, Kafka & Delta Lake",
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
						Senior Backend Software Engineer with 3+ years designing and scaling
						distributed systems, microservices, and event-driven architectures in
						Java, Spring Boot, and AWS. Expert in performance optimization,
						large-scale data engineering, and cloud-native infrastructure on
						Kubernetes.
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
