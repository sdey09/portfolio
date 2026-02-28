import React from "react";
import "../App.css";

export default function Projects({ name, details, stack, link }) {
	return (
		<article className="project-card">
			<p className="prompt-line">$ open {name.toLowerCase().replace(/\s+/g, "-")}</p>
			<h3>{name}</h3>
			<p>{details}</p>
			<p>
				<span className="label">stack:</span> {stack}
			</p>
			<a href={link} target="_blank" rel="noreferrer" className="terminal-anchor">
				{link}
			</a>
		</article>
	);
}
