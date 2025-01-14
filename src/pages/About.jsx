import styles from "../assets/style/About.module.scss";

export default function About() {
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
						<h1 className="text-center my-4">About Me</h1>

						{/* Introduzione Personale */}
						<div className="mb-5">
							<h2>Introduzione Personale</h2>
							<p>
								Mi chiamo <strong>Jomar Navarro</strong> e sono una persona
								curiosa, competitiva e appassionata di tecnologia. Adoro
								mettermi in gioco e trovare modi innovativi per risolvere
								problemi complessi, creando esperienze digitali che uniscono
								creatività e funzionalità. Il mio lavoro come{" "}
								<strong>Full Stack Web Developer</strong> mi permette di dare
								forma alle idee, rendendole strumenti utili e accessibili per
								tutti.
							</p>
						</div>

						{/* Percorso Formativo e Lavorativo */}
						<div className="mb-5">
							<h2 className="h4">Percorso Formativo e Lavorativo</h2>
							<ul className="list-unstyled">
								<li>
									<strong>Diploma:</strong> Meccanica e Meccatronica, I.I.S A.
									Avogadro.
								</li>
								<li>
									<strong>Master Full Stack Web Development:</strong> Boolean
									(700 ore, live e pratiche).
								</li>
								<li>
									<strong>Esperienze:</strong>
									<ul>
										<li>
											Jr. Full Stack Developer Trainee: Sviluppo di un'app per
											la ricerca di film e serie TV ispirata a Netflix.
										</li>
										<li>
											Sviluppatore per piattaforma di food delivery:
											Implementazione sistemi di pagamento e gestione ordini con
											Laravel.
										</li>
										<li>
											Collaudatore nel settore manifatturiero: Controllo qualità
											e verifica tolleranze.
										</li>
									</ul>
								</li>
							</ul>
						</div>

						{/* Competenze Principali */}
						<div className="mb-5">
							<h2 className="h4">Competenze Principali</h2>
							<ul className="list-inline">
								<li className="list-inline-item">HTML</li>
								<li className="list-inline-item">CSS</li>
								<li className="list-inline-item">SASS</li>
								<li className="list-inline-item">JavaScript</li>
								<li className="list-inline-item">Vue.js</li>
								<li className="list-inline-item">React</li>
								<li className="list-inline-item">PHP</li>
								<li className="list-inline-item">Laravel</li>
								<li className="list-inline-item">MySQL</li>
								<li className="list-inline-item">Bootstrap</li>
								<li className="list-inline-item">Tailwind</li>
							</ul>
						</div>

						{/* Obiettivi e Aspirazioni */}
						<div className="mb-5">
							<h2 className="h4">Obiettivi e Aspirazioni</h2>
							<p>
								Il mio obiettivo è continuare a crescere professionalmente,
								perfezionando le mie competenze su framework come{" "}
								<strong>React</strong> e <strong>Angular</strong> e sviluppando
								progetti innovativi. Il sogno? Creare un'AI come Jarvis di Iron
								Man, che possa semplificare la vita quotidiana.
							</p>
						</div>

						{/* Progetti e Successi */}
						<div className="mb-5">
							<h2 className="h4">Progetti e Successi</h2>
							<ul className="list-unstyled">
								<li>
									<strong>Hackathon 2024:</strong> Progettato e sviluppato una
									UI per un totem utilizzando React e Directus.
								</li>
								<li>
									<strong>Food Delivery App:</strong> Sviluppata con Laravel,
									includendo sistemi di pagamento sicuri e gestione ordini
									scalabile.
								</li>
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
