import React, { useEffect, useState } from "react";
import Hero from "../assets/components/Hero";
import About from "../assets/components/AboutSection";
import BestProjects from "../assets/components/bestProjects";
import Footer from "../assets/components/Footer";

export default function Home() {
	return (
		<>
			<main>
				<section className="hero">
					<Hero />
				</section>

				<section>
					<About />
				</section>

				<section>
					<BestProjects />
				</section>
			</main>
		</>
	);
}
