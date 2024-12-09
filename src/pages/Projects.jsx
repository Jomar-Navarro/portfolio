import styles from "../assets/style/Project.module.scss";

export default function Projects() {
	return (
		<>
			<h1 className="text-center text-white">Welcome to my Projects!</h1>

			<div className="d-flex">
				<div className={styles.card}>
					<img src="src/assets/img/logo/html-logo.svg" alt="" />
				</div>

				<div className={styles.card}>
					<img src="src/assets/img/logo/" alt="" />
				</div>
			</div>
		</>
	);
}
