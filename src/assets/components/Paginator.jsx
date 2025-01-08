import { useState, useEffect } from "react";
import styles from "../style/Paginator.module.scss";

export default function Paginator({
	currentPage,
	totalItems,
	itemsPerPage,
	onPageChange,
}) {
	const [animationClass, setAnimationClass] = useState("");
	const totalPages = Math.ceil(totalItems / itemsPerPage);

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
		<div className={styles.wrapper}>
			<section className={`${styles.pagination} ${styles[animationClass]}`}>
				<button
					className={currentPage === 1 ? styles.disabled : ""}
					onClick={() => handlePaginate("prev")}
					disabled={currentPage === 1}
				>
					Prev
				</button>
				<div className={styles.paginationState}>
					<span className={styles.counterCurrent}>{currentPage}</span>
					<span className={styles.paginationSeparator}>/</span>
					<span className={styles.counterTotal}>{totalPages}</span>
				</div>
				<button
					className={currentPage === totalPages ? styles.disabled : ""}
					onClick={() => handlePaginate("next")}
					disabled={currentPage === totalPages}
				>
					Next
				</button>
			</section>
		</div>
	);
}
