import axios from "axios";

export default async function ProjectsApi() {
	const url = `/api/github`;

	try {
		let allRepos = [];
		let page = 1;
		const perPage = 100; // Numero di progetti per pagina (max 100)

		// Recupera tutte le pagine
		while (true) {
			const response = await axios.get(url, {
				params: {
					page: page, // Pagina corrente
					per_page: perPage, // Numero di progetti per pagina
				},
			});

			if (response.data.length === 0) {
				break; // Se non ci sono più progetti, fermati
			}

			allRepos = [...allRepos, ...response.data]; // Aggiungi i progetti ottenuti alla lista
			page++; // Passa alla pagina successiva
		}

		// Log dei progetti ricevuti
		console.log("Tutti i progetti:", allRepos);

		// Filtra i dati utili (titolo, descrizione, URL)
		return allRepos.map((repo) => ({
			id: repo.id,
			title: repo.name,
			description: repo.description || "No description available",
			url: repo.html_url,
			created_at: repo.created_at,
		}));
	} catch (error) {
		console.error("Errore durante il recupero dei progetti:", error);
		return [];
	}
}
