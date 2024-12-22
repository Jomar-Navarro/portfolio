import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./assets/components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import RootLayout from "./pages/Root";

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
	return (
		<>
			<RouterProvider router={router}>
				<Header />
			</RouterProvider>
		</>
	);
}

export default App;
