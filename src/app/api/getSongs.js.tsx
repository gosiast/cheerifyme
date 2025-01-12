// pages/api/getSongs.ts
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const { mood } = req.query;

		if (!mood || typeof mood !== "string") {
			return res
				.status(400)
				.json({ error: "Mood parameter is required and must be a string." });
		}

		// Fetch Spotify token
		const tokenResponse = await fetch(
			"http://localhost:3000/api/getSpotifyToken"
		);
		if (!tokenResponse.ok) {
			const errorDetails = await tokenResponse.text();
			throw new Error(`Failed to fetch Spotify token: ${errorDetails}`);
		}

		const tokenData = await tokenResponse.json();
		const token = tokenData.access_token;

		if (!token) {
			throw new Error("Spotify access token is missing from the response.");
		}

		// Fetch tracks based on mood
		const trackResponse = await fetch(
			`https://api.spotify.com/v1/search?q=${encodeURIComponent(
				mood
			)}&type=track&limit=5`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);

		if (!trackResponse.ok) {
			const errorDetails = await trackResponse.text();
			throw new Error(`Failed to fetch tracks from Spotify: ${errorDetails}`);
		}

		const trackData = await trackResponse.json();
		res.status(200).json(trackData);
	} catch (error) {
		console.error("Error in /api/getSongs:", error);
		res
			.status(500)
			.json({ error: "Internal server error. Please try again later." });
	}
}
