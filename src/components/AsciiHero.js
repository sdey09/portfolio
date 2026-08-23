import React from "react";
import * as THREE from "three";
import { AsciiEffect } from "three/examples/jsm/effects/AsciiEffect";
import "../App.css";

export default function AsciiHero() {
	const mountRef = React.useRef(null);

	React.useEffect(() => {
		const mount = mountRef.current;
		if (!mount) {
			return undefined;
		}

		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)"
		).matches;

		const width = mount.clientWidth;
		const height = mount.clientHeight;

		const scene = new THREE.Scene();
		scene.background = new THREE.Color(0x0a0a0a);

		const camera = new THREE.PerspectiveCamera(45, width / height, 1, 100);
		camera.position.set(0, 0, 4.4);

		scene.add(new THREE.AmbientLight(0xffffff, 0.55));
		const pointLight = new THREE.PointLight(0xffffff, 1.6);
		pointLight.position.set(4, 4, 5);
		scene.add(pointLight);

		const geometry = new THREE.IcosahedronGeometry(1.5, 1);
		const material = new THREE.MeshStandardMaterial({
			color: 0xf2f2f2,
			flatShading: true,
		});
		const mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);

		const renderer = new THREE.WebGLRenderer();
		renderer.setPixelRatio(1);
		renderer.setSize(width, height);

		const asciiFont = '"JetBrains Mono", "Courier New", monospace';

		const effect = new AsciiEffect(renderer, " .:-=+*#%@", {
			invert: true,
			resolution: 0.18,
		});
		const applyAsciiStyle = () => {
			const table = effect.domElement.querySelector("table");
			if (table) {
				table.style.fontFamily = asciiFont;
			}
		};
		effect.setSize(width, height);
		applyAsciiStyle();
		effect.domElement.style.color = "#f2f2f2";
		effect.domElement.style.backgroundColor = "transparent";

		mount.appendChild(effect.domElement);

		let frameId;
		let frameCount = 0;

		const renderFrame = () => {
			if (!prefersReducedMotion) {
				mesh.rotation.x += 0.006;
				mesh.rotation.y += 0.009;
			}
			effect.render(scene, camera);
		};

		const animate = () => {
			frameId = requestAnimationFrame(animate);
			// Throttle to ~30fps: the ascii effect rebuilds a DOM table every
			// render call, so halving frequency keeps it cheap.
			frameCount += 1;
			if (frameCount % 2 === 0) {
				renderFrame();
			}
		};

		renderFrame();
		if (!prefersReducedMotion) {
			animate();
		}

		const handleResize = () => {
			const w = mount.clientWidth;
			const h = mount.clientHeight;
			if (w === 0 || h === 0) {
				return;
			}
			camera.aspect = w / h;
			camera.updateProjectionMatrix();
			renderer.setSize(w, h);
			effect.setSize(w, h);
			applyAsciiStyle();
			renderFrame();
		};
		window.addEventListener("resize", handleResize);

		return () => {
			cancelAnimationFrame(frameId);
			window.removeEventListener("resize", handleResize);
			mount.removeChild(effect.domElement);
			geometry.dispose();
			material.dispose();
			renderer.dispose();
		};
	}, []);

	return (
		<section className="terminal-window ascii-window">
			<div className="terminal-window-header">
				<span className="dot red"></span>
				<span className="dot yellow"></span>
				<span className="dot green"></span>
				<p>scene.ascii</p>
			</div>
			<div className="ascii-mount" ref={mountRef} />
		</section>
	);
}
