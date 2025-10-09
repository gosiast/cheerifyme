import { NextResponse } from "next/server";

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url);
		const mood = searchParams.get("mood") || "inspirational";

		const response = await fetch(
			`https://api.quotable.io/random?tags=${encodeURIComponent(mood)}`
		);

		if (!response.ok) throw new Error(`Failed with ${response.status}`);
		const data = await response.json();

		return NextResponse.json({
			quote: data.content,
			author: data.author,
		});
	} catch (error) {
		console.error("Quote fetch failed:", error);
		return NextResponse.json({ quote: "Keep going — you’re doing great!" });
	}
}
