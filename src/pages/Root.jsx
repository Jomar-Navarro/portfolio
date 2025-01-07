import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../assets/components/Header";
import Loader from "../assets/components/Loader";

export default function RootLayout() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Simula un caricamento di 3 secondi
		const timer = setTimeout(() => {
			setLoading(false);
		}, 3000);

		// Pulisce il timer quando il componente viene smontato
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{loading ? (
				<div className="d-flex justify-content-center align-items-center vh-100">
					<Loader />
				</div>
			) : (
				<>
					<Header />
					<Outlet />
				</>
			)}
		</>
	);
}
