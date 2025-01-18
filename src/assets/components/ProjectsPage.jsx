import React, { useEffect, useState } from "react";
import ProjectsApi from "../../data/ProjectsAPI";
import Card from "./Card";
import Loader from "./Loader";
import Paginator from "./Paginator";

import styles from "../style/ProjectsPage.module.scss";

export default function ProjectsPage() {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const projectsPerPage = 6;

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

	const indexOfLastProject = currentPage * projectsPerPage;
	const indexOfFirstProject = indexOfLastProject - projectsPerPage;
	const currentProjects = projects.slice(
		indexOfFirstProject,
		indexOfLastProject
	);

	if (loading) {
		return <Loader />;
	}

	return (
		<>
			<div className="container text-center text-white mt-5">
				<h1>Benvenuti ai miei Progetti</h1>
				<p>Qui trovate tutti i progetti su cui ho lavorato.</p>

				<div className="row justify-content-center">
					{currentProjects.map((project, index) => (
						<div key={index} className="col-3 m-5">
							<Card project={project} url={project.url}>
								<h2>{project.title}</h2>
								<p>{project.description}</p>
								<span>{new Date(project.created_at).toLocaleDateString()}</span>
							</Card>
						</div>
					))}
				</div>

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
