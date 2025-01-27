import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "../style/Footer.module.scss";

export default function Footer() {
	const { t } = useTranslation(); // Hook per la traduzione
	return (
		<>
			<section className={styles.footer}>
				<div className={`${styles.wrap} container py-5`}>
					<div className="row justify-content-center text-white ">
						<div className={`${styles.card} col-md-4 text-start`}>
							<h3>Jomar Navarro</h3>
							<ul className="list-unstyled d-flex align-items-center justify-content-start fs-1">
								<li>
									<a className={styles.icon} href="#">
										<i className="fa-brands fa-linkedin"></i>
									</a>
								</li>
								<li className="mx-4">
									<a className={styles.icon} href="#">
										<i className="fa-brands fa-square-github"></i>
									</a>
								</li>
								<li>
									<a
										className={styles.icon}
										href="/CV/JOMAR_NAVARRO_CV_IT.pdf"
										download="Jomar_Navarro_CV.pdf"
									>
										<i className="fa-solid fa-download"></i>
									</a>
								</li>
							</ul>
							<p className="fs-6">{t("footer.rightsReserved")}</p>
						</div>

						<div
							className={`${styles.card} col-md-3 d-flex flex-column align-items-start mx-3`}
						>
							<h3>{t("footer.contacts")}</h3>
							<ul className="list-unstyled w-100">
								<li className="w-100">
									<p className={styles.email}>Jomarnavarro201@gmail.com</p>
								</li>
							</ul>
						</div>

						<div
							className={`${styles.card} col-md-3 d-flex flex-column align-items-start`}
						>
							<h3>{t("footer.siteStructure")}</h3>
							<ul className="list-unstyled d-flex flex-column align-items-start w-25">
								<NavLink className={styles.NavLink} to="/">
									{t("header.home")}
								</NavLink>
								<NavLink className={styles.NavLink} to="/about">
									{t("header.about")}
								</NavLink>
								<NavLink className={styles.NavLink} to="/projects">
									{t("header.projects")}
								</NavLink>
							</ul>
						</div>
						<div className={styles.skewed}></div>
					</div>
				</div>
			</section>
		</>
	);
}
