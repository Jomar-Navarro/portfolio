import Swiper from "./Swiper";
import SplitText from "./SplitText";
import selfImage from "../img/self.png";

import styles from "../style/Hero.module.scss";

export default function Hero() {
	return (
		<>
			<div className="vh-100 d-flex flex-column justify-content-center">
				<div
					className={`${styles.Hero} container container-md container-sm d-flex align-items-center`}
				>
					<div
						className={`${styles.wrapper} d-flex justify-content-center text-center text-white`}
					>
						<div className={styles.title}>
							<SplitText
								text="Junior Full Stack Web Developer"
								className={styles.mainTitle}
								delay={50}
								animationFrom={{
									opacity: 0,
									transform: "translate3d(0,50px,0)",
								}}
								animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
								easing="easeOutCubic"
								threshold={0.2}
								rootMargin="-50px"
							/>
							<p className={styles.subtitle}>
								Sono Jomar Navarro, Full Stack Web Developer. Specializzato
								nella creazione di applicazioni web moderne e intuitive. Esplora
								i miei progetti e scopri come posso dare vita alle tue idee!
							</p>
						</div>

						<div className={styles.image}>
							<img src={selfImage} alt="myself" />
						</div>
					</div>
				</div>

				<Swiper />
			</div>
		</>
	);
}
