export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const mood = searchParams.get("mood") || "inspirational";

	try {
		// Fetch quotes (ZenQuotes uses tags, not strict categories)
		const response = await fetch(`https://zenquotes.io/api/quotes`);

		if (!response.ok) {
			throw new Error(`Failed to fetch quote: ${response.statusText}`);
		}

		const data = await response.json();

		// Filter loosely by mood keyword
		const filtered = data.filter((quote: any) =>
			quote.q.toLowerCase().includes(mood.toLowerCase())
		);

		const selected = filtered.length > 0 ? filtered[0] : data[0];

		return new Response(JSON.stringify(selected), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error("Error fetching quote:", error);
		return new Response(JSON.stringify({ error: "Failed to fetch quote" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}
