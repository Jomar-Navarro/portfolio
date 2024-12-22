import styles from "../style/Card.module.scss";

import { format } from "date-fns";
import { it } from "date-fns/locale";

export default function Card({ project, url }) {
	return (
		<>
			<div class={styles.card}>
				<a className={styles.link} href={url} target="_blank" rel="noreferrer">
					<p class={styles.heading}>{project.title}</p>
					<p className="p-0 m-0">Made By</p>

					<div className={styles.descriptions}>
						<p>
							{project.created_at
								? format(new Date(project.created_at), "dd/MM/yyyy", {
										locale: it,
								  })
								: "No date available"}
						</p>
						<p>Jomar Navarro</p>
					</div>
				</a>
			</div>
		</>
	);
}
