import Card from "./Card";

export default function ProjectsPage() {
	return (
		<>
			<div className="container text-center text-white">
				<h1>Welcome to My Projects</h1>
				<p>Here's all the projects that i've worked on.</p>

				<div className="d-flex justify-content-center align-items-center">
					<Card />
				</div>
			</div>
		</>
	);
}
