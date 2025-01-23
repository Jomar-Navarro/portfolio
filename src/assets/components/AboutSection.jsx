import { NavLink } from "react-router-dom";

import styles from "../style/AboutSection.module.scss";
import Button from "./Button";

export default function AboutPage() {
	return (
		<>
			<div className="container-fluid container d-flex justify-content-center align-items-center px-5">
				<div className={`${styles.wrapper}`}>
					<div className={`${styles.description}`}>
						<div className="d-flex flex-column h-100 text-white  justify-content-center">
							<p className="p-0 m-0">
								Ciao! Sono Jomar, uno sviluppatore web full-stack appassionato
								di tecnologia e gadget elettronici con esperienza in diversi
								linguaggi tecnologici. Mi definiscono la mia curiosità e la mia
								competitività. Cerco costantemente nuove sfide per crescere
								professionalmente e contribuire a progetti innovativi.
							</p>
							<p className="p-0 m-0">
								<NavLink to="/about" className="text-white text-end">
									Scopri di più su di me...
								</NavLink>
							</p>

							<div className="pt-4 d-flex flex-column align-items-start">
								<span className="w-100 fs-3 fw-bolder">
									Ti va di lavorare insieme?
								</span>
								<div className={styles.download}>
									<p className="pe-3">Scarica il mio CV</p>
									<Button
										href="public\CV\JOMAR_NAVARRO_CV_IT.pdf"
										download="Jomar_Navarro_CV.pdf"
									/>
								</div>
							</div>
						</div>
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
			</div>
		</>
	);
}
