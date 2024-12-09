import styles from "../style/Card.module.scss";

export default function Card() {
	return (
		<>
			<div className={styles.card}>
				<a href="#">
					<img src="src/assets/img/logo/html-logo.svg" alt="" />
				</a>
			</div>
		</>
	);
}
