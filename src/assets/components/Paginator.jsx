import { useState } from "react";
import styles from "../style/Paginator.module.scss";

export default function Paginator({
	currentPage,
	totalItems,
	itemsPerPage,
	onPageChange,
}) {
	const [animationClass, setAnimationClass] = useState(""); // Stato per l'animazione
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	// Cambia pagina con animazione
	const handlePaginate = (direction) => {
		if (direction === "next" && currentPage < totalPages) {
			setAnimationClass("transition-next");
			setTimeout(() => {
				onPageChange(currentPage + 1); // Aggiorna la pagina
				setAnimationClass("");
			}, 300);
		}
		if (direction === "prev" && currentPage > 1) {
			setAnimationClass("transition-prev");
			setTimeout(() => {
				onPageChange(currentPage - 1); // Aggiorna la pagina
				setAnimationClass("");
			}, 300);
		}
	};

	return (
		<>
			<div className={`${styles.paginationWrapper} ${animationClass}`}>
				<svg
					className={`${styles.btn} ${styles["btn--prev"]}`}
					onClick={() => handlePaginate("prev")}
					height="96"
					viewBox="0 0 24 24"
					width="96"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
					<path d="M0-.5h24v24H0z" fill="none" />
				</svg>

				<div className={styles["pagination-container"]}>
					<div
						className={`${styles["little-dot"]} ${
							currentPage === 1 ? styles["active"] : ""
						}`}
					></div>
					<div className={styles["little-dot"]}>
						<div className={styles["big-dot-container"]}>
							<div className={styles["big-dot"]}>{currentPage}</div>
						</div>
					</div>
					<div
						className={`${styles["little-dot"]} ${
							currentPage === totalPages ? styles["active"] : ""
						}`}
					></div>
				</div>

				<svg
					className={`${styles.btn} ${styles["btn--next"]}`}
					onClick={() => handlePaginate("next")}
					height="96"
					viewBox="0 0 24 24"
					width="96"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
					<path d="M0-.25h24v24H0z" fill="none" />
				</svg>
			</div>
		</>
	);
}
