// src/app/api/quotes/route.js
export async function GET(request) {
	console.log("QUOTES_API_KEY:", process.env.QUOTES_API_KEY); // Verify the API key is loaded

	const { searchParams } = new URL(request.url);
	const mood = searchParams.get("mood") || "inspirational";

	try {
		const response = await fetch(
			`https://api.api-ninjas.com/v1/quotes?category=${mood}`,
			{
				headers: {
					"X-Api-Key": process.env.QUOTES_API_KEY,
					"Content-Type": "application/json",
				},
			}
		);

		console.log("Response status:", response.status);

		if (!response.ok) {
			const errorData = await response.json();
			console.error(
				"Failed API response:",
				response.status,
				response.statusText,
				errorData
			);
			return new Response(JSON.stringify({ error: "Failed to fetch quotes" }), {
				status: 500,
				headers: { "Content-Type": "application/json" },
			});
		}

		const data = await response.json();
		console.log("Data returned:", data);

		return new Response(JSON.stringify(data[0]), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error("Error fetching quotes:", error);
		return new Response(JSON.stringify({ error: "Internal server error" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}
