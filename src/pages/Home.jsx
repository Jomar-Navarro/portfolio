import Hero from "../assets/components/Hero";
import Projects from "./Projects";
import About from "./About";

import styles from "../assets/style/Home.module.scss";

export default function Home() {
	return (
		<>
			<main>
				<section className="hero">
					<Hero />
				</section>

				<section>
					<About />
				</section>

				<section>
					<Projects />
				</section>
			</main>
		</>
	);
}
