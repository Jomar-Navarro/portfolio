import { NavLink } from "react-router-dom";

export default function Footer() {
	return (
		<>
			<div className="container py-5">
				<div className="row justify-content-center">
					<div className="col-md-8">
						<div className="row text-white">
							<div className="col-md-6">
								<h3>Titolo</h3>
								<ul className="list-unstyled d-flex align-items-center justify-content-start fs-1">
									<li>
										<a href="#">
											<i class="fa-brands fa-linkedin"></i>
										</a>
									</li>
									<li className="mx-4">
										<a href="#">
											<i class="fa-brands fa-square-github"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i class="fa-solid fa-download"></i>
										</a>
									</li>
								</ul>
								<p>© 2025 Jomar Navarro. All rights reserved</p>
							</div>

							<div className="col-md-3">
								<h3>Contatti</h3>
								<ul className="list-unstyled">
									<li>Indirizzo</li>
									<li>Telefono</li>
									<li>Email</li>
								</ul>
							</div>

							<div className="col-md-3">
								<h3>RoadMap</h3>
								<ul className="list-unstyled d-flex flex-column">
									<NavLink to="/">Home</NavLink>
									<NavLink to="/about">About</NavLink>
									<NavLink to="/projects">Projects</NavLink>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
