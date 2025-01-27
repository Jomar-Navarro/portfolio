import styles from "../style/Card.module.scss";
import dayjs from "dayjs";
import "dayjs/locale/it"; // Importa la localizzazione italiana
import { useTranslation } from "react-i18next";

dayjs.locale("it"); // Imposta la localizzazione italiana

export default function Card({ project, url }) {
	const { t } = useTranslation(); // Hook per la traduzione

	return (
		<div className={`${styles.wrapper}`}>
			<div className={`${styles.card}`}>
				<a className={styles.link} href={url} target="_blank" rel="noreferrer">
					<p className={styles.heading}>{project.title}</p>
					<p>{t("card.madeBy")}</p>
					<p>Jomar Navarro</p>

					<div className={styles.descriptions}>
						<p>
							{project.created_at
								? dayjs(project.created_at).format("DD/MM/YYYY")
								: t("card.noDateAvailable")}
						</p>
					</div>
				</a>
			</div>
		</div>
	);
}
