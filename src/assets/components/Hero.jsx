import Swiper from "./Swiper";
import SplitText from "./SplitText";
import selfImage from "../img/self.png";
import { useTranslation } from "react-i18next";

import styles from "../style/Hero.module.scss";

export default function Hero() {
	const { t } = useTranslation(); // Hook per la traduzione
	return (
		<>
			<div className={`vh-100 d-flex flex-column justify-content-center`}>
				<div
					className={`${styles.Hero} container container-md container-sm d-flex align-items-center`}
				>
					<div
						className={`${styles.wrapper} d-flex justify-content-center text-center text-white`}
					>
						<div className={styles.title}>
							<SplitText
								text={t("hero.title")}
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
							<p className={styles.subtitle}>{t("hero.subtitle")}</p>
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
