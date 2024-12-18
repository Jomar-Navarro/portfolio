import { useEffect, useState } from "react";
import styles from "../assets/style/Project.module.scss";
import Card from "../assets/components/Card";
import ProjectsApi from "../data/ProjectsAPI"; // Funzione API
import Paginator from "../assets/components/Paginator";

import { format } from "date-fns";
import { it } from "date-fns/locale";

export default function Projects() {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [projectsPerPage] = useState(4);
	const username = "Jomar-Navarro";
	const token = "tuo-token";

	useEffect(() => {
		ProjectsApi(username, token)
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
			<h1 className={styles.title}>Welcome to my Projects!</h1>
			<div className={styles.wrapper}>
				{/* Elementi decorativi */}
				<div className={styles.deco}></div>
				<div className={styles.decoTwo}></div>
				<div className={styles.decoThree}></div>
				{/* Elementi decorativi */}
				{currentProjects.map((project, index) => (
					<div
						className={index % 2 === 0 ? styles.right : styles.left}
						key={project.title}
					>
						<Card title={project.title} url={project.url} />
						<div className={styles.descriptions}>
							<h2>{project.title}</h2>
							<p>
								{project.created_at
									? format(new Date(project.created_at), "dd/MM/yyyy", {
											locale: it,
									  })
									: "No description available"}
							</p>
						</div>
					</div>
				))}
			</div>

			<Paginator
				currentPage={currentPage}
				totalItems={projects.length}
				itemsPerPage={projectsPerPage}
				onPageChange={(page) => setCurrentPage(page)}
			/>
		</>
	);
}
