import React, { useEffect, useState } from "react";

import Paginator from "../assets/components/Paginator";
import ProjectsPage from "../assets/components/ProjectsPage";
import ProjectsApi from "../data/ProjectsAPI";
import Loader from "../assets/components/Loader";

export default function Projects() {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
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

	if (loading) {
		return <Loader />;
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
				<Paginator
					currentPage={currentPage}
					totalItems={projects.length}
					itemsPerPage={projectsPerPage}
					onPageChange={(page) => setCurrentPage(page)}
				/>
			</div>
		</>
	);
}
