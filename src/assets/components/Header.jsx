import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { FaGlobe } from "react-icons/fa"; // Icona del globo

import styles from "../style/Header.module.scss";

export default function Header() {
	const { t, i18n } = useTranslation(); // Hook per la traduzione
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

	useEffect(() => {
		// Listener per lo scroll
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		// Listener per il cambio di lingua
		const handleLanguageChange = (lng) => {
			setCurrentLanguage(lng); // Aggiorna lo stato con la nuova lingua
		};

		i18n.on("languageChanged", handleLanguageChange); // Aggiungi il listener

		// Pulizia degli event listener
		return () => {
			window.removeEventListener("scroll", handleScroll);
			i18n.off("languageChanged", handleLanguageChange); // Rimuovi il listener
		};
	}, [i18n]); // Aggiungi i18n come dipendenza

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	// Funzione per cambiare lingua
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	const getFlagIcon = (language) => {
		switch (language) {
			case "en":
				return <span className="fi fi-gb"></span>;
			case "it":
				return <span className="fi fi-it"></span>;
			default:
				return <FaGlobe />;
		}
	};
	return (
		<header>
			<div className="container d-flex justify-content-center my-4">
				<div
					className={`${styles.nav} ${
						scrolled ? styles.scrolled : ""
					} d-flex justify-content-between align-items-center ${styles.header}`}
				>
					<nav className="w-100 d-flex">
						<div className="d-flex align-items-center justify-content-between w-100">
							<h3 className={styles.title}>Jomar Navarro</h3>
							<label className={`${styles.hamburger}`}>
								<input
									type="checkbox"
									checked={menuOpen}
									onChange={toggleMenu}
								/>
								<svg viewBox="0 0 32 32">
									<path
										className={`${styles.line} ${styles.lineTopBottom}`}
										d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
									></path>
									<path className={styles.line} d="M7 16 27 16"></path>
								</svg>
							</label>
						</div>

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
							<Dropdown.Toggle variant="" id={styles.languageDropdown}>
								{getFlagIcon(currentLanguage)}
							</Dropdown.Toggle>

							<Dropdown.Menu className={styles.dropdownMenu}>
								<Dropdown.Item
									className={styles.dropdownItem}
									onClick={() => changeLanguage("en")}
								>
									<span className="fi fi-sh"></span>
								</Dropdown.Item>
								<Dropdown.Item
									className={styles.dropdownItem}
									onClick={() => changeLanguage("it")}
								>
									<span className="fi fi-it"></span>
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</nav>
				</div>
			</div>
		</header>
	);
}
