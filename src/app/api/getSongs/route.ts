export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const mood = searchParams.get("mood") || "happy";

	try {
		// 1. Get a Spotify access token
		const tokenResponse = await fetch(
			"http://localhost:3000/api/getSpotifyToken"
		);
		const tokenData = await tokenResponse.json();
		const token = tokenData.access_token;
		if (!token) throw new Error("Missing Spotify token");

		// 2. Pick some seed genres (you can map moods to genres)
		const moodToGenres: Record<string, string[]> = {
			happy: ["pop", "dance", "funk"],
			sad: ["acoustic", "piano", "blues"],
			motivated: ["rock", "hip-hop", "workout"],
			chill: ["chill", "ambient", "lofi"],
			romantic: ["soul", "rnb", "pop"],
		};

		const seed_genres = moodToGenres[mood] || ["pop"];

		// 3. Call Spotify recommendations endpoint
		const recRes = await fetch(
			`https://api.spotify.com/v1/recommendations?limit=5&seed_genres=${seed_genres.join(
				","
			)}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);

		if (!recRes.ok) {
			const errorBody = await recRes.text();
			console.error("❌ Spotify API error:", recRes.status, errorBody);
			throw new Error(`Spotify recommendations failed (${recRes.status})`);
		}

		const recData = await recRes.json();

		return new Response(JSON.stringify(recData), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error("Error in /api/getSongs:", error);
		return new Response(JSON.stringify({ error: "Failed to fetch songs" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}
