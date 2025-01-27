import { useTranslation } from "react-i18next";

import styles from "../assets/style/About.module.scss";

export default function About() {
	const { t } = useTranslation(); // Hook per la traduzione

	const birthDate = "2002-03-31";

	const calculateAge = (birthDate) => {
		const today = new Date();
		const birthDateObj = new Date(birthDate);
		let age = today.getFullYear() - birthDateObj.getFullYear();
		const monthDifference = today.getMonth() - birthDateObj.getMonth();

		if (
			monthDifference < 0 ||
			(monthDifference === 0 && today.getDate() < birthDateObj.getDate())
		) {
			age--;
		}

		return age;
	};

	const age = calculateAge(birthDate);
	return (
		<>
			<div className="container">
				<div className={`${styles.aboutContent} row justify-content-center`}>
					<div className="col-md-8">
						<h1 className="text-center my-4">{t("about.title")}</h1>

						{/* Introduzione Personale */}
						<div className="mb-5">
							<h2>{t("about.personalIntroduction")}</h2>
							<p
								dangerouslySetInnerHTML={{
									__html: t("about.introductionText"),
								}}
							/>
						</div>

						{/* Percorso Formativo e Lavorativo */}
						<div className="mb-5">
							<h2 className="h4">Percorso Formativo e Lavorativo</h2>
							<h2 className="h4">{t("about.educationAndWork")}</h2>
							<ul className="list-unstyled">
								<li>
									<strong>{t("about.diploma")}</strong>
								</li>
								<li>
									<strong>{t("about.master")}</strong>
								</li>
								<li>
									<strong>{t("about.experiences")}</strong>
									<ul>
										<li>{t("about.experienceDetail")}</li>
									</ul>
								</li>
							</ul>
						</div>

						{/* Competenze Principali */}
						<div className="mb-5">
							<h2 className="h4">{t("about.skills")}</h2>
							<ul className="list-inline">
								{t("about.skillsList", { returnObjects: true }).map(
									(skill, index) => (
										<li key={index} className="list-inline-item">
											{skill}
										</li>
									)
								)}
							</ul>
						</div>

						{/* Obiettivi e Aspirazioni */}
						<div className="mb-5">
							<h2 className="h4">{t("about.goals")}</h2>
							<p dangerouslySetInnerHTML={{ __html: t("about.goalsText") }} />
						</div>

						{/* Progetti e Successi */}
						<div className="mb-5">
							<h2 className="h4">{t("about.projects")}</h2>
							<ul className="list-unstyled">
								{t("about.projectsList", { returnObjects: true }).map(
									(project, index) => (
										<li key={index}>
											<strong>{project.split(":")[0]}:</strong>{" "}
											{project.split(":")[1]}
										</li>
									)
								)}
							</ul>
						</div>

						{/* Hobby e Interessi */}
						<div className="mb-5">
							<h2 className="h4">Hobby e Interessi</h2>
							<p>
								Oltre al coding, mi dedico a migliorare la mia forma fisica, con
								l'obiettivo di dimagrire e costruire muscoli. Mi appassiona
								esplorare nuove tecnologie e trovare soluzioni creative per
								problemi complessi.
							</p>
						</div>

						{/* Chiamata all'Azione */}
						<div className="text-center">
							<h2 className="h4">Contattami</h2>
							<p>
								Se desideri collaborare o conoscere meglio il mio lavoro, visita
								il mio{" "}
								<a
									href="http://www.linkedin.com/in/jomar-navarro"
									target="_blank"
									rel="noopener noreferrer"
								>
									LinkedIn
								</a>{" "}
								o il mio{" "}
								<a
									href="https://github.com/Jomar-Navarro"
									target="_blank"
									rel="noopener noreferrer"
								>
									GitHub
								</a>
								.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
