import styles from "../style/Loader.module.scss";

export default function Loader() {
	return (
		<>
			<div className="container">
				<div className="d-flex justify-content-center align-items-center">
					<div className={styles.terminalLoader}>
						<div className={styles.terminalHeader}>
							<div className={styles.terminalTitle}>Status</div>
							<div className={styles.terminalControls}>
								<div className={`${styles.control} ${styles.close}`}></div>
								<div className={`${styles.control} ${styles.minimize}`}></div>
								<div className={`${styles.control} ${styles.maximize}`}></div>
							</div>
						</div>
						<div className={styles.content}>
							<pre>
								<code>
									<div className={styles.text}>
										&lt;div&gt;Loading...&lt;/div&gt;
									</div>
								</code>
							</pre>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
