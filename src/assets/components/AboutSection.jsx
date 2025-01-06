import styles from "../style/AboutSection.module.scss";

export default function AboutPage() {
	return (
		<>
			<div className="d-flex justify-content-center align-items center mx-5 my-5">
				<div className={styles.description}>
					<p className="d-flex align-items-center flex-column justify-content-center h-100 text-white pe-5 mx-5">
						Ciao! Sono Jomar, uno sviluppatore web full-stack appassionato di
						tecnologia e design. Con esperienza in linguaggi come JavaScript,
						Vue.js e React, amo trasformare idee in soluzioni digitali eleganti
						e funzionali. Nel mio percorso, ho partecipato a progetti
						stimolanti, come lo sviluppo di un sito di delivery food e
						un'applicazione UI per un hackathon. Mi definiscono la mia
						curiosità, la capacità di risolvere problemi complessi e la
						determinazione a migliorarmi ogni giorno. Cerco costantemente nuove
						sfide per crescere professionalmente e contribuire a progetti
						innovativi. Quando non sono davanti al computer, mi alleno e sogno
						di costruire un'AI personale come Jarvis di Iron Man.
						<span className="pt-5 text-start w-100 fs-3">
							Ti va di lavorare insieme?
						</span>
					</p>
				</div>

				<div className={styles.image}>
					<h1 className="text-white text-end">
						About <br />
						me
					</h1>
					<img src="src/assets/img/about-section.png" alt="About Me" />
				</div>
			</div>
		</>
	);
}
