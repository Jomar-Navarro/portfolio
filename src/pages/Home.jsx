import Hero from "../assets/components/Hero";
import Projects from "./Projects";

import styles from "../assets/style/Home.module.scss";

export default function Home() {
	return (
		<>
			<main>
				<section className={styles.section}>
					<Hero />
				</section>

				<section>
					<Projects />
				</section>
			</main>
		</>
	);
}
