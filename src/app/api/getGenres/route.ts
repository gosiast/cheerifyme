export async function GET() {
	try {
		console.log("🟢 /api/getGenres route hit");

		// 1️⃣ Get Spotify token
		const tokenResponse = await fetch(
			"http://localhost:3000/api/getSpotifyToken"
		);
		const tokenData = await tokenResponse.json();

		console.log("🔑 Token data:", tokenData);

		if (!tokenData.access_token) {
			console.error("❌ No Spotify token returned");
			return new Response(JSON.stringify({ error: "Missing Spotify token" }), {
				status: 500,
				headers: { "Content-Type": "application/json" },
			});
		}

		const token = tokenData.access_token;

		// 2️⃣ Fetch available genres
		const spotifyRes = await fetch(
			"https://api.spotify.com/v1/recommendations/available-genre-seeds",
			{
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
			}
		);

		if (!spotifyRes.ok) {
			const text = await spotifyRes.text();
			console.error("❌ Spotify genre fetch failed:", spotifyRes.status, text);
			return new Response(
				JSON.stringify({
					error: "Failed to fetch available genres",
					status: spotifyRes.status,
					details: text,
				}),
				{
					status: spotifyRes.status,
					headers: { "Content-Type": "application/json" },
				}
			);
		}

		const data = await spotifyRes.json();
		console.log("✅ Spotify genres received:", data);

		return new Response(JSON.stringify(data), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error("💥 Error in /api/getGenres:", error);
		return new Response(
			JSON.stringify({
				error: "Internal Server Error",
				details: String(error),
			}),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		);
	}
}
