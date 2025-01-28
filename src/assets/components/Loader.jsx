import { useTranslation } from "react-i18next";

import styles from "../style/Loader.module.scss";

export default function Loader() {
	const { t } = useTranslation(); // Hook per la traduzione

	return (
		<>
			<div className="container">
				<div className="d-flex justify-content-center align-items-center">
					<div className={styles.terminalLoader}>
						<div className={styles.terminalHeader}>
							<div className={styles.terminalTitle}>{t("loader.status")}</div>
							<div className={styles.terminalControls}>
								<div className={`${styles.control} ${styles.close}`}></div>
								<div className={`${styles.control} ${styles.minimize}`}></div>
								<div className={`${styles.control} ${styles.maximize}`}></div>
							</div>
						</div>
						<div className={styles.content}>
							<div className={styles.text}>
								&lt;div&gt;{t("loader.loading")}&lt;/div&gt;
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
