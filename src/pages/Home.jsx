import React, { useEffect, useState } from "react";
import Hero from "../assets/components/Hero";
import About from "./About";
import Card from "../assets/components/Card";
import axios from "axios"; // Assicurati di avere axios installato
import Paginator from "../assets/components/Paginator";
import ProjectsApi from "../data/ProjectsAPI";
import Projects from "../pages/Projects";

import styles from "../assets/style/Home.module.scss";

export default function Home() {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const projectsPerPage = 6; // Numero di progetti per pagina

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
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	// Calcola i progetti da visualizzare nella pagina corrente
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
					<Projects />
				</section>
			</main>
		</>
	);
}
