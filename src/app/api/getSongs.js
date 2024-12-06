// pages/api/getSongs.js
export default async function handler(req, res) {
	const { mood } = req.query;
	// First get token from Spotify (or store globally for reuse within certain timeframe)
	const tokenResponse = await fetch(
		"http://localhost:3000/api/getSpotifyToken"
	);
	const tokenData = await tokenResponse.json();
	const token = tokenData.access_token;

	// Now use the token to search tracks by a mood keyword
	const response = await fetch(
		`https://api.spotify.com/v1/search?q=${mood}&type=track&limit=5`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);
	const data = await response.json();
	res.status(200).json(data);
}
