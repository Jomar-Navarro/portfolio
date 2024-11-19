import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./assets/components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

const router = createBrowserRouter([
	{ path: "/", element: <Home /> },
	{ path: "/about", element: <About /> },
	{ path: "/projects", element: <Projects /> },
]);

function App() {
	return (
		<div className="container">
			<RouterProvider router={router}>
				<Header />
			</RouterProvider>
		</div>
	);
}

export default App;
