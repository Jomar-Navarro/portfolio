import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "../style/AboutSection.module.scss";
import Button from "./Button";

export default function AboutPage() {
	const { t } = useTranslation(); // Hook per la traduzione

	return (
		<>
			<div className="container-fluid container-lg d-flex justify-content-center align-items-center px-5">
				<div className={`${styles.wrapper}`}>
					<div className={`${styles.description}`}>
						<div className="d-flex flex-column h-100 text-white justify-content-center">
							<p className="p-0 m-0">{t("aboutSection.greeting")}</p>
							<p className="p-0 m-0">
								<NavLink to="/about" className="text-white text-end">
									{t("aboutSection.learnMore")}
								</NavLink>
							</p>

							<div className="pt-4 d-flex flex-column align-items-start w-75">
								<span className="w-100 fs-3 fw-bolder text-center">
									{t("aboutSection.workTogether")}
								</span>
								<div className={styles.download}>
									<p className="pe-3">{t("aboutSection.downloadCV")}</p>
									<Button
										href="/CV/JOMAR_NAVARRO_CV_IT.pdf"
										download="Jomar_Navarro_CV.pdf"
									/>
								</div>
							</div>
						</div>
					</div>

					<div className={styles.image}>
						<h3 className="text-white text-end lh-1">
							{t("aboutSection.about")} <br />
							{t("aboutSection.me")}
						</h3>
						<img src="src/assets/img/about-section.png" alt="About Me" />
					</div>
				</div>
			</div>
		</>
	);
}
