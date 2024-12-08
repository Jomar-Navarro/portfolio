import Hero from "../assets/components/Hero";
import Projects from "./Projects";

export default function Home() {
	return (
		<>
			<main>
				<section>
					<Hero />
				</section>

				<section>
					<Projects />
				</section>
			</main>
		</>
	);
}
