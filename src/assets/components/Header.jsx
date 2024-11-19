import { NavLink } from "react-router-dom";

export default function Header() {
	console.log("Header component is rendering");

	return (
		<div className="d-flex justify-content-center">
			<nav>
				<ul className="nav">
					<li className="nav-item">
						<NavLink to="/" className="nav-link" activeClassName="active">
							Home
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/about" className="nav-link" activeClassName="active">
							About Me
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							to="/projects"
							className="nav-link"
							activeClassName="active"
						>
							Projects
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
}
