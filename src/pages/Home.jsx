import React, { useEffect, useState } from "react";
import Hero from "../assets/components/Hero";
import About from "./About";
import Card from "../assets/components/Card";
import Paginator from "../assets/components/Paginator";
import ProjectsApi from "../data/ProjectsAPI";

import styles from "../assets/style/Home.module.scss";

export default function Home() {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [projectsPerPage] = useState(6);

	useEffect(() => {
		ProjectsApi()
			.then((data) => {
				setProjects(data);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Errore nel caricamento dei progetti:", error);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <p className={styles.loading}>Caricamento progetti...</p>;
	}

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
