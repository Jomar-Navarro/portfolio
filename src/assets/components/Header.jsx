export default function Header() {
	return (
		<div className="d-flex justify-content-center">
			<nav class="navbar navbar-expand-lg">
				<div class="container-fluid">
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarNav">
						<ul class="navbar-nav">
							<li class="nav-item">
								<a class="nav-link text-white" aria-current="page" href="#">
									About Me
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link text-white" href="#">
									Projects
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link text-white" href="#">
									Contacts
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
