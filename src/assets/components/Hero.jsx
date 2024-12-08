import styles from "../style/Hero.module.scss";

export default function Hero() {
	return (
		<>
			<div className="container py-5">
				<div className="d-flex justify-content-center text-center text-white">
					<div className={styles.title}>
						<h1>Junior Full-Stack Web Developer</h1>

						<p>
							Sono Jomar Navarro, Full Stack Web Developer. Specializzato nella
							creazione di applicazioni web moderne e intuitive. Esplora i miei
							progetti e scopri come posso dare vita alle tue idee!
						</p>
					</div>

					<div className={styles.image}>
						<img src="src/assets/img/self.PNG" alt="myself" />
					</div>
				</div>
			</div>
		</>
	);
}
