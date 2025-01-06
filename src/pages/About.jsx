import styles from "../assets/style/About.module.scss";

export default function About() {
	return (
		<>
			<div className={`${styles.container} container`}>
				<div
					className={`${styles.aboutContent} text-white d-flex justify-content-center align-items-center flex-column mx-5 my-5`}
				>
					<h1 className="mb-4">About Me</h1>
					<p className={`${styles.intro} text-center`}>
						Ciao! Mi chiamo Jomar e sono uno sviluppatore web full-stack con una
						forte passione per la tecnologia e l'innovazione. A 22 anni, ho già
						avuto la possibilità di lavorare su progetti entusiasmanti che mi
						hanno permesso di crescere sia a livello tecnico che personale.
					</p>
					<h2 className="mt-5">Il Mio Percorso</h2>
					<p>
						Il mio viaggio nel mondo del web development è iniziato con la
						scoperta di HTML e CSS, ma presto ho ampliato le mie conoscenze a
						linguaggi e framework come JavaScript, Vue.js, React, PHP, Laravel e
						MySQL.
					</p>
					<p>Tra i progetti più significativi che ho realizzato, ricordo:</p>
					<ul>
						<li>
							<strong>Sito di Delivery Food:</strong> Collaborando con un team,
							ho contribuito a sviluppare un sito per il food delivery,
							integrando pagamenti sicuri tramite Braintree e gestendo la
							comunicazione con il backend tramite Axios.
						</li>
						<li>
							<strong>Hackathon UI per un Totem:</strong> Durante un hackathon,
							ho progettato e sviluppato un'app UI in React e Directus, che
							consentiva la scansione della patente per l'estrazione e il
							trattamento dei dati.
						</li>
					</ul>
					<h2 className="mt-5">Valori e Filosofia di Lavoro</h2>
					<p>
						Sono una persona che crede nel potere del lavoro di squadra e della
						comunicazione. Mi piace affrontare le sfide con un approccio
						analitico e creativo, trovando soluzioni che non solo risolvano il
						problema, ma migliorino l'esperienza utente.
					</p>
					<p>
						<strong>I miei valori principali:</strong>
					</p>
					<ul>
						<li>
							<strong>Crescita continua:</strong> Ogni giorno è un'opportunità
							per imparare.
						</li>
						<li>
							<strong>Problem-solving:</strong> Affronto i problemi con
							determinazione e creatività.
						</li>
						<li>
							<strong>Impatto positivo:</strong> Voglio costruire soluzioni che
							abbiano un valore reale per gli utenti.
						</li>
					</ul>
					<h2 className="mt-5">Interessi Extra</h2>
					<p>
						Al di fuori del lavoro, mi piace allenarmi con manubri ed elastici
						per raggiungere i miei obiettivi di fitness. Sono affascinato dalla
						fantascienza e dal mondo dell'AI, e sogno un giorno di costruire una
						soluzione simile a Jarvis di Iron Man.
					</p>
					<p className="mt-4">
						<strong>Ti va di lavorare insieme?</strong> Sentiti libero di
						contattarmi!
					</p>
				</div>
			</div>
		</>
	);
}
