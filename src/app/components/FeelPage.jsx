import { useState } from "react";

export default function FeelPage() {
	const [mood, setMood] = useState("");
	const [quote, setQuote] = useState(null);
	const [tracks, setTracks] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Fetch quote
		const quoteRes = await fetch(`/api/getQuote?mood=${mood}`);
		const quoteData = await quoteRes.json();
		setQuote(quoteData[0]?.quote);

		// Fetch songs
		const songRes = await fetch(`/api/getSongs?mood=${mood}`);
		const songData = await songRes.json();
		setTracks(songData.tracks?.items || []);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Enter your mood"
					value={mood}
					onChange={(e) => setMood(e.target.value)}
				/>
				<button type="submit">Cheer Me Up</button>
			</form>

			{quote && <p>Your Quote: {quote}</p>}

			<ul>
				{tracks.map((track) => (
					<li key={track.id}>
						{track.name} by {track.artists[0].name}
					</li>
				))}
			</ul>
		</div>
	);
}
