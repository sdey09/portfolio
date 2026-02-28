import React from "react";
import "../App.css";

const commandMap = {
	help: [
		"Available commands:",
		"- whoami",
		"- cat profile.txt",
		"- ./open-projects.sh",
		"- cd projects",
		"- ls",
		"- clear",
	],
	whoami: ["Subhojit Dey"],
	"cat profile.txt": [
		"Backend Software Engineer with 2+ years of experience in Java, Spring, distributed systems, and cloud services.",
	],
	"./open-projects.sh": [
		"1) codecrafters-redis-java",
		"2) TSG-HackathonNetlify",
		"3) music_upload_spring",
	],
	"cd projects": ["Switched to /projects", "Run 'ls' to list projects."],
	ls: ["codecrafters-redis-java  TSG-HackathonNetlify  music_upload_spring"],
};

export default function TerminalPage({ onBack }) {
	const [history, setHistory] = React.useState([
		"Terminal ready. Type 'help' to see commands.",
	]);
	const [input, setInput] = React.useState("");
	const outputRef = React.useRef(null);

	React.useEffect(() => {
		if (outputRef.current) {
			outputRef.current.scrollTop = outputRef.current.scrollHeight;
		}
	}, [history]);

	const runCommand = (raw) => {
		const command = raw.trim();
		if (!command) {
			return;
		}

		if (command === "clear") {
			setHistory([]);
			return;
		}

		const result = commandMap[command] || [
			`Command not found: ${command}`,
			"Type 'help' to see supported commands.",
		];

		setHistory((prev) => [...prev, `$ ${command}`, ...result]);
	};

	return (
		<div className="terminal-page-shell">
			<div className="terminal-page-head">
				<button type="button" className="terminal-button" onClick={onBack}>
					cd ..
				</button>
				<p className="terminal-brand">interactive-terminal</p>
			</div>

			<section className="terminal-window terminal-screen-window">
				<div className="terminal-window-header">
					<span className="dot red"></span>
					<span className="dot yellow"></span>
					<span className="dot green"></span>
					<p>session: commands.sh</p>
				</div>
				<div className="terminal-screen" ref={outputRef}>
					{history.map((line, index) => (
						<p
							key={`${line}-${index}`}
							className={`terminal-line ${line.startsWith("$ ") ? "command" : "output"}`}
						>
							{line}
						</p>
					))}
				</div>
				<form
					className="terminal-input-row"
					onSubmit={(event) => {
						event.preventDefault();
						runCommand(input);
						setInput("");
					}}
				>
					<span>$</span>
					<input
						value={input}
						onChange={(event) => setInput(event.target.value)}
						className="terminal-input"
						autoFocus
						placeholder="type a command"
					/>
				</form>
			</section>
		</div>
	);
}
