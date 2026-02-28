import React from "react";
import "../App.css";

const skillGroups = [
	{
		title: "languages",
		items: ["Java", "Python", "SQL"],
	},
	{
		title: "backend_and_systems",
		items: ["Spring Boot", "JPA/Hibernate", "gRPC", "REST APIs"],
	},
	{
		title: "distributed_and_data",
		items: ["Databricks", "PySpark", "Delta Lake", "Redis"],
	},
	{
		title: "cloud_and_infra",
		items: ["AWS (S3, EC2, Lambda)", "Docker", "Kubernetes (EKS)"],
	},
	{
		title: "observability",
		items: ["Prometheus", "Grafana", "JUnit", "Mockito"],
	},
	];

export default function Skills() {
	return (
		<section className="section-shell">
			<div className="terminal-window">
				<div className="terminal-window-header">
					<span className="dot red"></span>
					<span className="dot yellow"></span>
					<span className="dot green"></span>
					<p>skills.json</p>
				</div>
				<div className="terminal-window-body">
					<h2 className="section-title">skills</h2>
					<div className="skills-grid">
						{skillGroups.map((group) => (
							<div className="skill-card" key={group.title}>
								<p className="prompt-line">$ ls {group.title}</p>
								<ul>
									{group.items.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
