import styles from "../assets/style/Project.module.scss";
import Card from "../assets/components/Card";

export default function Projects() {
	return (
		<>
			<h1 className="text-center text-white">Welcome to my Projects!</h1>

			<div className="justify-content-center">
				<div className="right d-flex">
					<Card />
				</div>

				<div className="left d-flex flex-row-reverse">
					<Card />
				</div>

				<div className="right d-flex">
					<Card />
				</div>

				<div className="left d-flex flex-row-reverse">
					<Card />
				</div>
			</div>
		</>
	);
}
