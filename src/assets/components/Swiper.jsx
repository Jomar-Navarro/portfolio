import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"; // Importa i CSS generali di Swiper
import styles from "../style/Swiper.module.scss";

import logos from "../../data/logos";

export default function App() {
	return (
		<Swiper
			centeredSlides={true}
			slidesPerView={5}
			loop={true}
			speed={1500}
			autoplay={{
				delay: 0, // Imposta il tempo in millisecondi per ogni slide
				disableOnInteraction: true, // Continua l'autoplay anche dopo l'interazione
			}}
			modules={[Autoplay]}
			className={styles.swiper}
		>
			{logos.map((logo, index) => (
				<SwiperSlide key={index}>
					<div className={styles.logo}>
						<img src={logo.src} alt={logo.alt} />
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
