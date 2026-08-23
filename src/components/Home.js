import React from "react";
import Intro from "./Intro";
import AsciiHero from "./AsciiHero";
import "../App.css";

export default function Home({ projects }) {
	return (
		<div className="hero-shell">
			<Intro intro={projects} />
			<AsciiHero />
		</div>
	);
}
