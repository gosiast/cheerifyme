// pages/api/getSpotifyToken.ts
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		// Ensure the environment variables are set
		const clientId = process.env.SPOTIFY_CLIENT_ID;
		const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

		if (!clientId || !clientSecret) {
			throw new Error(
				"Spotify Client ID and Secret are not defined in environment variables."
			);
		}

		// Spotify API authentication options
		const authOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: `Basic ${Buffer.from(
					`${clientId}:${clientSecret}`
				).toString("base64")}`,
			},
			body: "grant_type=client_credentials",
		};

		// Fetch the access token from Spotify
		const response = await fetch(
			"https://accounts.spotify.com/api/token",
			authOptions
		);

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`Failed to fetch Spotify token: ${errorText}`);
		}

		const data = await response.json();
		res.status(200).json(data);
	} catch (error) {
		console.error("Error in /api/getSpotifyToken:", error);
		res.status(500).json({
			error: "Failed to fetch Spotify token. Please try again later.",
		});
	}
}
