import Hero from "../assets/components/Hero";
import Projects from "./Projects";
import About from "./About";

import styles from "../assets/style/Home.module.scss";
import Card from "../assets/components/Card";

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
					<Card project={project} />
				</section>
			</main>
		</>
	);
}
