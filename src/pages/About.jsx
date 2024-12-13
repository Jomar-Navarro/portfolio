import styles from "../assets/style/About.module.scss";

export default function About() {
	return (
		<>
			<div className="container d-flex justify-content-center align-items center mx-5">
				<div className={styles.image}>
					<h1>About Me!</h1>
					<img src="src/assets/img/about-img.jpg" alt="About Me" />
				</div>

				<div className={styles.description}>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
						nihil laudantium voluptatum inventore reiciendis ab dolorem porro
						aliquid! Sed a nobis non sequi modi, amet alias omnis! Vitae
						blanditiis numquam voluptas recusandae cumque neque illo culpa,
						necessitatibus dolores minima odio pariatur impedit optio id.
						Ducimus asperiores iure atque quae distinctio?
					</p>
				</div>
			</div>
		</>
	);
}
