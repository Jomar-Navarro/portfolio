import { NavLink } from "react-router-dom";

export default function Header() {
	return (
		<div className="d-flex justify-content-center my-5">
			<nav className="d-flex justify-content-between align-items-center w-100 px-4 py-3 rounded-5 border-2">
				<h3 className="text-white">Jomar Navarro</h3>
				<div>
					<ul className="nav">
						<li className="nav-item ">
							<NavLink
								to="/"
								className="nav-link text-white fs-5"
								activeClassName="active"
							>
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								to="/about"
								className="nav-link text-white fs-5"
								activeClassName="active"
							>
								About Me
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								to="/projects"
								className="nav-link text-white fs-5"
								activeClassName="active"
							>
								Projects
							</NavLink>
						</li>
					</ul>
				</div>

				<div className="d-flex align-items-center gap-3">
					{/* Bottone per Dark Mode */}
					<div>
						<input type="checkbox" className="checkbox" id="checkbox" />
						<label htmlFor="checkbox" className="checkbox-label">
							<i className="fas fa-moon"></i>
							<i className="fas fa-sun"></i>
							<span className="ball"></span>
						</label>
					</div>
					<button className="btn btn-success rounded-4 p-3">Contact Me!</button>
				</div>
			</nav>
		</div>
	);
}
