import { NavLink } from "react-router-dom";

import styles from "../style/AboutSection.module.scss";

export default function AboutPage() {
	return (
		<>
			<div className="d-flex justify-content-center align-items-center mx-5 my-5">
				<div className={styles.description}>
					<p className="d-flex flex-column justify-content-center h-100 text-white pe-5 mx-5 text-end">
						Ciao! Sono Jomar, uno sviluppatore web full-stack appassionato di
						tecnologia e gadget elettronici con esperienza in diversi linguaggi
						tecnologici. Mi definiscono la mia curiosità e la mia competitività.
						Cerco costantemente nuove sfide per crescere professionalmente e
						contribuire a progetti innovativi.
						<span>
							<NavLink to="/about" className="text-white text-end">
								Scopri di più su di me...
							</NavLink>
						</span>
						<span className="pt-5 text-start w-100 fs-3 text-end fw-bolder">
							Ti va di lavorare insieme?
						</span>
					</p>
				</div>

				<div className={styles.image}>
					<h3 className="text-white text-end">
						Su di
						<br />
						me
					</h3>
					<img src="src/assets/img/about-section.png" alt="About Me" />
				</div>
			</div>
		</>
	);
}
