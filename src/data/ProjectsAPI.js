import axios from "axios";

export default async function ProjectsApi() {
	// Usa import.meta.env per accedere alle variabili di ambiente in Vite
	const token = import.meta.env.VITE_GITHUB_TOKEN; // Assicurati che la variabile sia nel file .env
	const username = import.meta.env.VITE_GITHUB_USERNAME;

	const url = `https://api.github.com/users/${username}/repos`;

	try {
		// Richiesta con il token di autenticazione
		const response = await axios.get(url, {
			headers: {
				Authorization: `Bearer ${token}`, // Usa la variabile di ambiente per il token
			},
		});

		// Filtra i dati utili (titolo, descrizione, URL)
		return response.data.map((repo) => ({
			id: repo.id,
			title: repo.name,
			description: repo.description,
			url: repo.html_url,
		}));
	} catch (error) {
		console.error("Errore durante il recupero dei progetti:", error);
		return [];
	}
}
