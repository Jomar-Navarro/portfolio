import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../style/Header.module.scss"; // Modifica l'importazione

export default function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};
	return (
		<header>
			<div className="container d-flex justify-content-center my-4">
				<nav
					className={`${styles.nav} ${
						scrolled ? styles.scrolled : ""
					} d-flex justify-content-between align-items-center border-2 ${
						scrolled ? "" : "rounded-4"
					}`}
				>
					<h3 className="text-white">Jomar Navarro</h3>
					<div>
						<ul className="nav">
							<li className="nav-item">
								<NavLink
									to="/"
									className={({ isActive }) =>
										isActive
											? `${styles["nav-link"]} ${styles.isActive} fs-4`
											: `${styles["nav-link"]} text-white fs-4`
									}
								>
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									to="/about"
									className={({ isActive }) =>
										isActive
											? `${styles["nav-link"]} ${styles.isActive} fs-4`
											: `${styles["nav-link"]} text-white fs-4`
									}
								>
									Chi sono
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									to="/projects"
									className={({ isActive }) =>
										isActive
											? `${styles["nav-link"]} ${styles.isActive} fs-4`
											: `${styles["nav-link"]} text-white fs-4`
									}
								>
									Progetti
								</NavLink>
							</li>
						</ul>
					</div>

					<div className="d-flex align-items-center gap-3">
						<a href="/about" className={styles.button}>
							Contact Me!
						</a>
					</div>
				</nav>
			</div>
		</header>
	);
}
