import { useEffect, useState } from "react";
import styles from "../assets/style/Project.module.scss";
import Card from "../assets/components/Card";
import ProjectsApi from "../data/ProjectsAPI"; // Funzione API
import Paginator from "../assets/components/Paginator";
import ProjectsPage from "../assets/components/ProjectsPage";

export default function Projects() {
	return (
		<>
			<div className="container">
				<ProjectsPage />
			</div>
		</>
	);
}
