import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../style/Swiper.module.scss";

import logos from "../../data/logos";

export default function App({ sliderSettings = {} }) {
	const defaultSettings = {
		centerMode: true,
		slidesToShow: 5,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 2500,
		cssEase: "linear",
		infinite: true,
		pauseOnHover: false,
		arrows: false,
		rtl: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	};

	const settings = { ...defaultSettings, ...sliderSettings };

	return (
		<div className={styles.mySwiper}>
			<Slider {...settings} className={styles.swiper}>
				{logos.map((logos, index) => (
					<div key={index} className={styles.logo}>
						<img src={logos.src} alt={logos.alt} />
					</div>
				))}
			</Slider>
		</div>
	);
}
