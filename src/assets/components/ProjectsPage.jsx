import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ProjectsApi from "../../data/ProjectsAPI";
import Card from "./Card";
import Loader from "./Loader";
import Paginator from "./Paginator";

import styles from "../style/ProjectsPage.module.scss";

export default function ProjectsPage() {
	const { t } = useTranslation(); // Hook per la traduzione
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
			<div className="container d-flex justify-content-center align-items-center flex-column text-center text-white mt-5">
				<h1>{t("projectsPage.title")}</h1>
				<p>{t("projectsPage.subtitle")}</p>

				<div className="row d-flex justify-content-center align-items-center">
					{currentProjects.map((project, index) => (
						<div
							key={index}
							className="col-12 col-sm-6 col-md-4 col-lg-3 m-4 mx-md-5 d-flex justify-content-center align-items-center"
						>
							<Card
								className="w-100 d-flex flex-wrap"
								project={project}
								url={project.url}
							>
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
