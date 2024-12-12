import styles from "../assets/style/Project.module.scss";
import Card from "../assets/components/Card";

export default function Projects() {
	return (
		<>
			<h1 className={styles.title}>Welcome to my Projects!</h1>

			<div className={styles.wrapper}>
				<div className={styles.right}>
					<Card />
					<div className={styles.descriptions}>
						<h2>Project name</h2>
						<p>Date</p>
					</div>
				</div>

				<div className={styles.deco}></div>
				<div className={styles.decoTwo}></div>
				<div className={styles.decoThree}></div>

				<div className={styles.left}>
					<Card />
					<div className={styles.descriptions}>
						<h2>Project name</h2>
						<p>Date</p>
					</div>
				</div>

				<div className={styles.right}>
					<Card />
					<div className={styles.descriptions}>
						<h2>Project name</h2>
						<p>Date</p>
					</div>
				</div>

				<div className={styles.decoTwo}></div>
				<div className={styles.deco}></div>

				<div className={styles.left}>
					<Card />
					<div className={styles.descriptions}>
						<h2>Project name</h2>
						<p>Date</p>
					</div>
				</div>
			</div>
		</>
	);
}
