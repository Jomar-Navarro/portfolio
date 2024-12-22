import Projects from "../../pages/Projects";
import styles from "../style/Card.module.scss";

export default function Card({ title, url }) {
	return (
		<>
			<div class={styles.card}>
				<p class={styles.heading}>{title}</p>
				<p>Made By</p>
				<p>Jomar Navarro</p>
			</div>
		</>
	);
}
