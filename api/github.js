import axios from "axios";

export default async function handler(req, res) {
	const token = process.env.GITHUB_TOKEN;
	const username = process.env.GITHUB_USERNAME;

	// Permettiamo CORS nel caso Vercel dev lanci su una porta diversa da Vite (se usato assieme)
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET");
	
	if (!token || !username) {
		return res.status(500).json({ error: "Server configuration missing (GITHUB_TOKEN or GITHUB_USERNAME is required)" });
	}

	const { page = 1, per_page = 100 } = req.query;
	const url = `https://api.github.com/users/${username}/repos`;

	try {
		const response = await axios.get(url, {
			params: {
				page,
				per_page,
			},
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: "application/vnd.github.v3+json",
			},
		});

		res.status(200).json(response.data);
	} catch (error) {
		console.error("Errore API GitHub:", error.response?.data || error.message);
		res.status(error.response?.status || 500).json({ error: "Failed to fetch from GitHub API" });
	}
}
