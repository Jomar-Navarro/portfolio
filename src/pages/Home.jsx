import React, { useEffect, useState } from "react";
import Hero from "../assets/components/Hero";
import About from "../assets/components/AboutSection";
import Card from "../assets/components/Card";
import Paginator from "../assets/components/Paginator";
import ProjectsApi from "../data/ProjectsAPI";
import styles from "../assets/style/Home.module.scss";

export default function Home() {
	const [projects, setProjects] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [loading, setLoading] = useState(true);
	const [projectsPerPage] = useState(6);

	useEffect(() => {
		ProjectsApi()
			.then((data) => {
				const sortedProjects = data.sort(
					(a, b) => new Date(b.created_at) - new Date(a.created_at)
				);
				setProjects(sortedProjects);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Errore nel caricamento dei progetti:", error);
				setLoading(false);
			});
	}, []);

	// IDs dei progetti migliori
	const bestProjectIds = [
		815135478, 817218543, 777287078, 781472768, 830921587, 772014383,
	];

	// Filtra i progetti migliori
	const bestProjects = projects.filter((project) =>
		bestProjectIds.includes(project.id)
	);

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
					<div className="container my-5">
						<h1 className={styles.title}>
							Benvenuti ai miei progetti migliori!
						</h1>
						<div className={styles.wrapper}>
							{bestProjects.map((project, index) => (
								<Card key={index} project={project} />
							))}
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
