import { useState, FormEvent } from "react";

interface Track {
	id: string;
	name: string;
	artists: { name: string }[];
}

const FeelPage: React.FC = () => {
	const [mood, setMood] = useState<string>("");
	const [quote, setQuote] = useState<string | null>(null);
	const [tracks, setTracks] = useState<Track[]>([]);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		try {
			// Fetch quote
			const quoteRes = await fetch(`/api/getQuote?mood=${mood}`);
			const quoteData = await quoteRes.json();
			setQuote(quoteData[0]?.quote || "No quote found.");

			// Fetch songs
			const songRes = await fetch(`/api/getSongs?mood=${mood}`);
			const songData = await songRes.json();
			setTracks(songData.tracks?.items || []);
		} catch (error) {
			console.error("Error fetching data:", error);
			setQuote("Failed to fetch quote.");
			setTracks([]);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center p-4">
			<form onSubmit={handleSubmit} className="mb-6">
				<input
					type="text"
					placeholder="Enter your mood"
					value={mood}
					onChange={(e) => setMood(e.target.value)}
					className="p-2 border rounded-md mb-4"
				/>
				<button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
					Cheer Me Up
				</button>
			</form>

			{quote && <p className="text-lg italic mb-4">Your Quote: {quote}</p>}

			{tracks.length > 0 && (
				<ul className="list-disc">
					{tracks.map((track) => (
						<li key={track.id} className="mb-2">
							<strong>{track.name}</strong> by{" "}
							{track.artists[0]?.name || "Unknown Artist"}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default FeelPage;
