import { MOOD_GENRE_MAP } from "@/utils/mood_genre";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url);
		const mood = searchParams.get("mood")?.toLowerCase() || "happy";

		const moodData = MOOD_GENRE_MAP[mood] || MOOD_GENRE_MAP["other"];
		const randomQuery =
			moodData.keywords[Math.floor(Math.random() * moodData.keywords.length)];
		const limit = 12;

		const res = await fetch(
			`https://itunes.apple.com/search?term=${encodeURIComponent(
				randomQuery
			)}&media=music&limit=${limit}&entity=song`
		);

		if (!res.ok) throw new Error(`iTunes API failed with status ${res.status}`);

		const data = await res.json();
		return NextResponse.json(data);
	} catch (err: any) {
		console.error("Error in /api/getSongs:", err);
		return NextResponse.json({ error: err.message }, { status: 500 });
	}
}
