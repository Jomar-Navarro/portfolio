import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./assets/components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import RootLayout from "./pages/Root";
import Loader from "./assets/components/Loader";

import "./App.scss";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "/about", element: <About /> },
			{ path: "/projects", element: <Projects /> },
		],
	},
]);

function App() {
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
				<RouterProvider router={router}>
					<Header />
				</RouterProvider>
			)}
		</>
	);
}

export default App;
