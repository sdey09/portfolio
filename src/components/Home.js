import React from "react";
import Intro from "./Intro";
import "../App.css";

export default function Home({ projects }) {
	return (
		<div className="hero-shell">
			<Intro intro={projects} />
		</div>
	);
}
