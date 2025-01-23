import { NavLink } from "react-router-dom";

import styles from "../style/Footer.module.scss";

export default function Footer() {
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
										href="public\CV\JOMAR_NAVARRO_CV_IT.pdf"
										download="Jomar_Navarro_CV.pdf"
									>
										<i className="fa-solid fa-download"></i>
									</a>
								</li>
							</ul>
							<p className="fs-6">© 2025 Jomar Navarro. All rights reserved</p>
						</div>

						<div
							className={`${styles.card} col-md-3 d-flex flex-column align-items-start mx-3`}
						>
							<h3>Contatti</h3>
							<ul className="list-unstyled w-100">
								<li className="w-100">
									<p className={styles.email}>Jomarnavarro201@gmail.com</p>
								</li>
							</ul>
						</div>

						<div
							className={`${styles.card} col-md-3 d-flex flex-column align-items-start`}
						>
							<h3>Struttura sito</h3>
							<ul className="list-unstyled d-flex flex-column align-items-start w-25">
								<NavLink className={styles.NavLink} to="/">
									Home
								</NavLink>
								<NavLink className={styles.NavLink} to="/about">
									About
								</NavLink>
								<NavLink className={styles.NavLink} to="/projects">
									Projects
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
