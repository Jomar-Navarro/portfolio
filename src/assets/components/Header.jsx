import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { FaGlobe } from "react-icons/fa"; // Icona del globo
import { FiFlag } from "react-icons/fi";

import styles from "../style/Header.module.scss";

export default function Header() {
	const { t, i18n } = useTranslation(); // Hook per la traduzione
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

	// Funzione per cambiare lingua
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};
	return (
		<header>
			<div className="container d-flex justify-content-center my-4">
				<nav
					className={`${styles.nav} ${
						scrolled ? styles.scrolled : ""
					} d-flex justify-content-between align-items-center`}
				>
					<h3 className={styles.title}>Jomar Navarro</h3>
					<label className={`${styles.hamburger}`}>
						<input type="checkbox" checked={menuOpen} onChange={toggleMenu} />
						<svg viewBox="0 0 32 32">
							<path
								className={`${styles.line} ${styles.lineTopBottom}`}
								d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
							></path>
							<path className={styles.line} d="M7 16 27 16"></path>
						</svg>
					</label>

					<div
						className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}
					>
						<ul className="nav">
							<li className="nav-item">
								<NavLink
									to="/"
									className={({ isActive }) =>
										isActive
											? `${styles["nav-link"]} ${styles.isActive}`
											: `${styles["nav-link"]}`
									}
								>
									{t("header.home")}
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									to="/about"
									className={({ isActive }) =>
										isActive
											? `${styles["nav-link"]} ${styles.isActive}`
											: `${styles["nav-link"]}`
									}
								>
									{t("header.about")}
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									to="/projects"
									className={({ isActive }) =>
										isActive
											? `${styles["nav-link"]} ${styles.isActive}`
											: `${styles["nav-link"]}`
									}
								>
									{t("header.projects")}
								</NavLink>
							</li>
						</ul>
					</div>

					{/* Dropdown delle lingue con le icone */}
					<Dropdown className={styles.languageSwitcher}>
						<Dropdown.Toggle variant="" id="language-dropdown">
							<FaGlobe /> {/* Icona del globo */}
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item onClick={() => changeLanguage("en")}>
								<span className="fi fi-sh"></span>
							</Dropdown.Item>
							<Dropdown.Item onClick={() => changeLanguage("it")}>
								<span className="fi fi-it"></span>
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</nav>
			</div>
		</header>
	);
}
