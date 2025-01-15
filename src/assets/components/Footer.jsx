export default function Footer() {
	return (
		<footer className="footer mt-auto py-3 bg-dark text-white">
			<div className="container text-center">
				<span className="text-muted">
					© {new Date().getFullYear()} Jomar Navarro. All rights reserved.
				</span>
			</div>
		</footer>
	);
}
