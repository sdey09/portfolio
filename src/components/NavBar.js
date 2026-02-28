import React from "react";
import "../App.css";

const navItems = [
	{ label: "home", key: "home" },
	{ label: "about", key: "about" },
	{ label: "projects", key: "projects" },
	{ label: "skills", key: "skills" },
	{ label: "contact", key: "contact" },
];

export default function NavBar({ home, skills, about, projects, contact, onOpenTerminal }) {
	const targets = { home, skills, about, projects, contact };

	return (
		<header className="terminal-nav-wrap">
			<nav className="terminal-nav">
				<p className="terminal-brand">subhojit@portfolio:~$</p>
				<div className="terminal-nav-links">
					{navItems.map((item) => (
						<button
							key={item.key}
							type="button"
							className="terminal-link"
							onClick={() => {
								targets[item.key].current.scrollIntoView({
									behavior: "smooth",
								});
							}}
						>
							{item.label}
						</button>
					))}
					<button type="button" className="terminal-link" onClick={onOpenTerminal}>
						terminal
					</button>
				</div>
			</nav>
		</header>
	);
}
