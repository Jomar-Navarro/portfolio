import styles from "../assets/style/Project.module.scss";

export default function Projects() {
	return (
		<>
			<h1 className="text-center text-white">Welcome to my Projects!</h1>

			<div className="justify-content-center">
				<div className="right d-flex">
					<div className={styles.card}>
						<img src="src/assets/img/logo/html-logo.svg" alt="" />
					</div>
				</div>

				<div className="left d-flex flex-row-reverse">
					<div className={styles.card}>
						<img src="src/assets/img/logo/css-logo.svg" alt="" />
					</div>
				</div>
			</div>
		</>
	);
}
