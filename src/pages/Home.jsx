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

	// Calcolo dei progetti da visualizzare
	const indexOfLastProject = currentPage * projectsPerPage;
	const indexOfFirstProject = indexOfLastProject - projectsPerPage;
	const currentProjects = projects.slice(
		indexOfFirstProject,
		indexOfLastProject
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
					<div className="container">
						<h1 className={styles.title}>Welcome to my Projects!</h1>
						<div className={styles.wrapper}>
							{currentProjects.map((project, index) => (
								<Card key={index} project={project} />
							))}
						</div>
					</div>

					<Paginator
						currentPage={currentPage}
						totalItems={projects.length}
						itemsPerPage={projectsPerPage}
						onPageChange={(page) => setCurrentPage(page)}
					/>
				</section>
			</main>
		</>
	);
}
