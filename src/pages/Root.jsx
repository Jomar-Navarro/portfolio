import { Outlet } from "react-router-dom";

import Header from "../assets/components/Header";

export default function RootLayout() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}
