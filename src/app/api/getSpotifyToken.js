// pages/api/getSpotifyToken.js
export default async function handler(req, res) {
	const authOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization:
				"Basic " +
				Buffer.from(
					process.env.SPOTIFY_CLIENT_ID +
						":" +
						process.env.SPOTIFY_CLIENT_SECRET
				).toString("base64"),
		},
		body: "grant_type=client_credentials",
	};

	const response = await fetch(
		"https://accounts.spotify.com/api/token",
		authOptions
	);
	const data = await response.json();
	res.status(200).json(data);
}
