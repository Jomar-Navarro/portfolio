// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import styles from "../style/Swiper.module.scss";

import logos from "../../data/logos";

export default function App() {
	return (
		<>
			<Swiper
				slidesPerView={5}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				className={styles.mySwiper}
			>
				{logos.map((logo, index) => (
					<SwiperSlide key={index}>
						<div className={styles.logo}>
							<img className={styles} src={logo.src} alt={logo.alt} />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
