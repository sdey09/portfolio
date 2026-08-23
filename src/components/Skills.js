import React from "react";
import "../App.css";

const skillGroups = [
	{
		title: "languages",
		items: ["Java", "Python", "SQL", "TypeScript", "Groovy"],
	},
	{
		title: "backend_and_architecture",
		items: [
			"Spring Boot",
			"Spring WebFlux",
			"Microservices",
			"REST APIs",
			"gRPC",
			"Protocol Buffers",
			"JPA/Hibernate",
			"R2DBC",
			"Apache Kafka",
			"Server-Sent Events (SSE)",
			"Event-Driven Architecture",
			"Distributed Systems",
			"System Design",
		],
	},
	{
		title: "data_and_cloud",
		items: [
			"Databricks (Autoloader, Delta Lake, PySpark)",
			"Amazon DynamoDB",
			"MySQL",
			"Redis",
			"Dragonfly",
			"AWS (EKS, S3, Lambda)",
			"Terraform",
			"Data Pipelines",
			"ETL",
		],
	},
	{
		title: "devops_and_observability",
		items: [
			"Kubernetes (Helm, HPA/KEDA, Istio, Flagger)",
			"Docker",
			"Jenkins",
			"CI/CD",
			"Prometheus",
			"Grafana",
			"OpenTelemetry",
			"Soda",
			"Performance Optimization",
		],
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
