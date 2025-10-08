export async function GET() {
	try {
		const clientId = process.env.SPOTIFY_CLIENT_ID;
		const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

		if (!clientId || !clientSecret) {
			throw new Error(
				"Spotify Client ID and Secret are not defined in environment variables."
			);
		}

		const authHeader = `Basic ${Buffer.from(
			`${clientId}:${clientSecret}`
		).toString("base64")}`;

		const response = await fetch("https://accounts.spotify.com/api/token", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: authHeader,
			},
			body: "grant_type=client_credentials",
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`Failed to fetch Spotify token: ${errorText}`);
		}

		const data = await response.json();

		return new Response(JSON.stringify(data), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error("Error in /api/getSpotifyToken:", error);
		return new Response(
			JSON.stringify({
				error: "Failed to fetch Spotify token. Please try again later.",
			}),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		);
	}
}
