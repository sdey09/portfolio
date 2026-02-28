import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Web from "./components/Web";
import React from "react";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import TerminalPage from "./components/TerminalPage";

const sideCommands = ["whoami", "cat profile.txt", "./open-projects.sh"];

const isTerminalPath = (pathname) => pathname.endsWith("/terminal");

const toTerminalPath = (pathname) => {
	if (isTerminalPath(pathname)) {
		return pathname;
	}
	return pathname === "/" ? "/terminal" : `${pathname}/terminal`;
};

const toHomePath = (pathname) => {
	if (!isTerminalPath(pathname)) {
		return pathname;
	}
	const next = pathname.slice(0, -9);
	return next || "/";
};

function App() {
	const projects = React.useRef(null);
	const skills = React.useRef(null);
	const about = React.useRef(null);
	const home = React.useRef(null);
	const contact = React.useRef(null);
	const [pathname, setPathname] = React.useState(window.location.pathname);

	React.useEffect(() => {
		const handlePopState = () => setPathname(window.location.pathname);
		window.addEventListener("popstate", handlePopState);
		return () => window.removeEventListener("popstate", handlePopState);
	}, []);

	const navigate = (nextPath) => {
		window.history.pushState({}, "", nextPath);
		setPathname(nextPath);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const openTerminal = () => navigate(toTerminalPath(pathname));
	const backToPortfolio = () => navigate(toHomePath(pathname));

	if (isTerminalPath(pathname)) {
		return (
			<div className="app-shell">
				<TerminalPage onBack={backToPortfolio} />
			</div>
		);
	}

	return (
		<div className="app-shell">
			<NavBar
				home={home}
				skills={skills}
				about={about}
				projects={projects}
				contact={contact}
				onOpenTerminal={openTerminal}
			/>
			<aside className="command-dock">
				<p className="prompt-line">$ quick_commands</p>
				{sideCommands.map((command) => (
					<p key={command} className="command-chip">
						{command}
					</p>
				))}
				<button type="button" className="terminal-button" onClick={openTerminal}>
					open terminal
				</button>
			</aside>
			<main className="app-main">
				<section ref={home} className="app-section">
					<Home projects={projects} />
				</section>
				<section ref={about} className="app-section">
					<About />
				</section>
				<section ref={projects} className="app-section">
					<Web />
				</section>
				<section ref={skills} className="app-section">
					<Skills />
				</section>
				<section ref={contact} className="app-section">
					<Contact />
				</section>
			</main>
		</div>
	);
}

export default App;
