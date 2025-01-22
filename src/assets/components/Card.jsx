import styles from "../style/Card.module.scss";
import dayjs from "dayjs";
import "dayjs/locale/it"; // Importa la localizzazione italiana

dayjs.locale("it"); // Imposta la localizzazione italiana

export default function Card({ project, url }) {
	return (
		<div>
			<div className={`${styles.card}`}>
				<a className={styles.link} href={url} target="_blank" rel="noreferrer">
					<p className={styles.heading}>{project.title}</p>
					<p>Made By</p>
					<p>Jomar Navarro</p>

					<div className={styles.descriptions}>
						<p>
							{project.created_at
								? dayjs(project.created_at).format("DD/MM/YYYY")
								: "No date available"}
						</p>
					</div>
				</a>
			</div>
		</div>
	);
}
