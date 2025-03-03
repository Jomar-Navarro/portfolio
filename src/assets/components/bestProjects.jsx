import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import ProjectsApi from "../../data/ProjectsAPI";
import { useTranslation } from "react-i18next";

import styles from "../style/BestProjects.module.scss";

export default function BestProjects() {
	const { t } = useTranslation(); // Hook per la traduzione
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);

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
			<div className="d-flex justify-content-center align-items-center">
				<div className="container-fluid my-5">
					<h1 className={styles.title}>{t("bestProjects.title")}</h1>
					<div className={`${styles.wrapper} row justify-content-center`}>
						{bestProjects.map((project, index) => (
							<div
								className="col-12 col-sm-6 col-md-4 col-lg-3 my-4 mx-sm-5 mx-md-4 d-flex justify-content-center"
								key={index}
							>
								<Card project={project} url={project.url} />
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
