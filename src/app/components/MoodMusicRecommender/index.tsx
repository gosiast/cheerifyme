"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";

interface Track {
	id: string;
	name: string;
	artists: { name: string }[];
	album?: { images?: { url: string }[] };
	external_urls?: { spotify: string };
}

const MoodMusicRecommender: React.FC = () => {
	const [mood, setMood] = useState("");
	const [quote, setQuote] = useState<string | null>(null);
	const [tracks, setTracks] = useState<Track[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		try {
			// Fetch quote
			const quoteRes = await fetch(`/api/getQuote?mood=${mood}`);
			const quoteData = await quoteRes.json();
			setQuote(quoteData[0]?.quote || "No quote found.");

			// Fetch songs
			const songRes = await fetch(`/api/getSongs?mood=${mood}`);
			const songData = await songRes.json();

			if (!songData.tracks?.items) throw new Error("No tracks found.");
			setTracks(songData.tracks.items);
		} catch (err: any) {
			console.error("Error fetching data:", err);
			setError("Something went wrong while fetching data.");
			setTracks([]);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="w-full max-w-lg flex flex-col items-center justify-center text-center p-4 bg-white/10 rounded-2xl shadow-lg backdrop-blur-md">
			<form
				onSubmit={handleSubmit}
				className="mb-6 flex flex-col items-center w-full"
			>
				<h2 className="text-2xl font-semibold mb-4 text-gray-100">
					How do you feel today? 🎭
				</h2>

				<select
					value={mood}
					onChange={(e) => setMood(e.target.value)}
					className="p-2 border rounded-md mb-4 text-gray-700 w-64 focus:ring focus:ring-blue-400"
					required
				>
					<option value="">Select your mood</option>
					{["Happy", "Sad", "Motivated", "Chill", "Romantic"].map((m) => (
						<option key={m} value={m.toLowerCase()}>
							{m}
						</option>
					))}
				</select>

				<button
					type="submit"
					disabled={loading}
					className={`${
						loading ? "bg-gray-400" : "bg-[#1A8299] hover:bg-[#16607A]"
					} text-white px-4 py-2 rounded-md transition duration-300`}
				>
					{loading ? "Loading..." : "Cheer Me Up"}
				</button>
			</form>

			{/* Error message */}
			{error && <p className="text-red-400 mb-4">{error}</p>}

			{/* Quote */}
			{quote && <p className="text-lg italic mb-4 text-gray-200">{quote}</p>}

			{/* Song list */}
			{tracks.length > 0 && (
				<div className="grid gap-4 text-left w-full">
					{tracks.map((track) => (
						<div
							key={track.id}
							className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-lg"
						>
							{track.album?.images?.[0]?.url && (
								<Image
									src={track.album.images[0].url}
									alt={track.name}
									width={64}
									height={64}
									className="rounded-md"
								/>
							)}

							<div>
								<p className="font-bold text-gray-100">{track.name}</p>
								<p className="text-sm text-gray-400">
									{track.artists.map((a) => a.name).join(", ")}
								</p>
								{track.external_urls?.spotify && (
									<a
										href={track.external_urls.spotify}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-400 text-sm hover:underline"
									>
										Listen on Spotify
									</a>
								)}
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default MoodMusicRecommender;
