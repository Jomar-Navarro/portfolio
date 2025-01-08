import React, { useEffect, useState } from "react";
import ProjectsApi from "../../data/ProjectsAPI";
import Card from "./Card";
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
		return <p className={styles.loading}>Caricamento progetti...</p>;
	}

	return (
		<>
			<div className="container text-center text-white mt-5">
				<h1>Welcome to My Projects</h1>
				<p>Here's all the projects that I've worked on.</p>

				<div className="row justify-content-center">
					{currentProjects.map((project, index) => (
						<div key={index} className="col-3 m-5">
							<Card project={project}>
								<h2>{project.title}</h2>
								<p>{project.description}</p>
								<span>{new Date(project.created_at).toLocaleDateString()}</span>
							</Card>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
