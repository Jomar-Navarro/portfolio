import styles from "../style/Card.module.scss";

import { format } from "date-fns";
import { it } from "date-fns/locale";

export default function Card({ project, url }) {
	return (
		<>
			<div className={styles.card}>
				<a className={styles.link} href={url} target="_blank" rel="noreferrer">
					<p className={styles.heading}>{project.title}</p>
					<p>Made By</p>
					<p>Jomar Navarro</p>

					<div className={styles.descriptions}>
						<p>
							{project.created_at
								? format(new Date(project.created_at), "dd/MM/yyyy", {
										locale: it,
								  })
								: "No date available"}
						</p>
					</div>
				</a>
			</div>
		</>
	);
}
