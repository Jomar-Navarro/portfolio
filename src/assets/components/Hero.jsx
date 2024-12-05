import styles from "../style/Hero.module.scss";

export default function Hero() {
	return (
		<>
			<div className="container">
				<div className="d-flex justify-content-center">
					<div className={styles.title}>
						<h1 className="text-white text-center">
							Junior Full-Stack Web Developer
						</h1>
					</div>
					<div className={styles.image}>
						<img src="src/assets/img/self.PNG" alt="myself" />
					</div>
				</div>
			</div>
		</>
	);
}
