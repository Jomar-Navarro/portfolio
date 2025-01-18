import { Outlet } from "react-router-dom";
import Header from "../assets/components/Header";
import Footer from "../assets/components/Footer";

export default function RootLayout() {
	return (
		<>
			<div className="mt-5 pt-5">
				<Header />
				<main className="mt-3 pt-3">
					<Outlet />
				</main>
				<Footer />
			</div>
		</>
	);
}
