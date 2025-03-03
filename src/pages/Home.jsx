import React, { useEffect, useState } from "react";
import Hero from "../assets/components/Hero";
import About from "../assets/components/AboutSection";
import BestProjects from "../assets/components/bestProjects";

export default function Home() {
	return (
		<>
			<section className="hero">
				<Hero />
			</section>

			<section>
				<About />
			</section>

			<section>
				<BestProjects />
			</section>
		</>
	);
}
