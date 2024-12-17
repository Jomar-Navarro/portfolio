import { useEffect, useState } from "react";
import styles from "../assets/style/Project.module.scss";
import Card from "../assets/components/Card";
import ProjectsApi from "../data/ProjectsAPI"; // Importa la funzione API

export default function Projects() {
	const [projects, setProjects] = useState([]); // Stato per i progetti
	const [loading, setLoading] = useState(true); // Stato di caricamento
	const username = "Jomar-Navarro"; // Inserisci il tuo username GitHub
	const token = "tuo-token"; // Inserisci il tuo token personale

	useEffect(() => {
		// Recupera i progetti dall'API quando il componente è montato
		ProjectsApi(username, token)
			.then((data) => {
				setProjects(data); // Salva i dati nello stato
				setLoading(false); // Fine caricamento
			})
			.catch((error) => {
				console.error("Errore nel caricamento dei progetti:", error);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <p className={styles.loading}>Caricamento progetti...</p>;
	}

	return (
		<>
			<h1 className={styles.title}>Welcome to my Projects!</h1>

			<div className={styles.wrapper}>
				{projects.map((project, index) => (
					<div
						className={index % 2 === 0 ? styles.right : styles.left} // Alterna destra/sinistra
						key={project.title}
					>
						<Card title={project.title} url={project.url} />{" "}
						{/* Puoi passare dati aggiuntivi a Card, se necessario */}
						<div className={styles.descriptions}>
							<h2>{project.title}</h2>
							<p>{project.description || "No description available"}</p>
						</div>
					</div>
				))}

				{/* Elementi decorativi */}
				<div className={styles.deco}></div>
				<div className={styles.decoTwo}></div>
				<div className={styles.decoThree}></div>
			</div>
		</>
	);
}
