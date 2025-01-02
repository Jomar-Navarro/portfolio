import { useEffect, useState } from "react";
import styles from "../assets/style/Project.module.scss";
import Card from "../assets/components/Card";
import ProjectsApi from "../data/ProjectsAPI"; // Funzione API
import Paginator from "../assets/components/Paginator";
import ProjectsPage from "../assets/components/ProjectsPage";

export default function Projects() {
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
			<div className="container">
				<ProjectsPage />
			</div>
		</>
	);
}
