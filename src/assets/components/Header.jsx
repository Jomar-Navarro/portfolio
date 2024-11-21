import { NavLink } from "react-router-dom";

export default function Header() {
	return (
		<div className="d-flex justify-content-center my-5">
			<nav className="d-flex justify-content-between align-items-center w-100 px-4 py-3">
				<h3 className="text-white">Jomar Navarro</h3>
				<div>
					<ul className="nav">
						<li className="nav-item ">
							<NavLink
								to="/"
								className="nav-link text-white"
								activeClassName="active"
							>
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								to="/about"
								className="nav-link text-white"
								activeClassName="active"
							>
								About Me
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								to="/projects"
								className="nav-link text-white"
								activeClassName="active"
							>
								Projects
							</NavLink>
						</li>
					</ul>
				</div>

				<div>
					<button>Contact Me!</button>
				</div>
			</nav>
		</div>
	);
}
