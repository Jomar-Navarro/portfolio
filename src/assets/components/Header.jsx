import { NavLink } from "react-router-dom";

import styles from "../style/Header.module.scss";

export default function Header() {
	return (
		<div className="d-flex justify-content-center my-4">
			<nav className="d-flex justify-content-between align-items-center w-100 px-4 py-3 rounded-5 border-2">
				<h3 className="text-white">Jomar Navarro</h3>
				<div>
					<ul className="nav">
						<li className="nav-item ">
							<NavLink to="/" className="nav-link text-white fs-5">
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/about" className="nav-link text-white fs-5">
								About Me
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/projects" className="nav-link text-white fs-5">
								Projects
							</NavLink>
						</li>
					</ul>
				</div>

				<div className="d-flex align-items-center gap-3">
					<button className="btn btn-success rounded-4 p-3">Contact Me!</button>
				</div>
			</nav>
		</div>
	);
}
