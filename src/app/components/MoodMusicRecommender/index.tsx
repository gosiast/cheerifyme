"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, FormEvent } from "react";

interface Track {
	trackId: number;
	trackName: string;
	artistName: string;
	artworkUrl100: string;
	previewUrl?: string;
	trackViewUrl?: string;
}

interface Quote {
	text: string;
	author: string;
}

const MoodMusicRecommender: React.FC = () => {
	const [mood, setMood] = useState("");
	const [quote, setQuote] = useState<Quote | null>(null);
	const [tracks, setTracks] = useState<Track[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		try {
			const quoteRes = await fetch(`/api/getQuote?mood=${mood}`);
			const quoteData = await quoteRes.json();
			setQuote({
				text: quoteData.quote || "Keep going — you're doing great!",
				author: quoteData.author || "Anonymous",
			});

			const songRes = await fetch(`/api/getSongs?mood=${mood}`);
			const songData = await songRes.json();

			if (!songData.results) throw new Error("No songs found.");
			setTracks(songData.results);
		} catch (err: any) {
			console.error("Error fetching data:", err);
			setError("Something went wrong. Try again later.");
			setTracks([]);
		} finally {
			setLoading(false);
		}
	};

	return (
<<<<<<< HEAD
		<div className="w-full max-w-2xl flex flex-col items-center justify-center text-center p-6 bg-white/20 rounded-2xl shadow-lg backdrop-blur-md">
=======
		<div className="w-full max-w-3xl flex flex-col items-center justify-center text-center p-6 bg-white/20 rounded-2xl shadow-lg backdrop-blur-md ">
>>>>>>> 18a30a5 (updated homepage and layout)
			<form
				onSubmit={handleSubmit}
				className=" flex flex-col items-center w-full"
			>
				<h2 className="text-2xl font-semibold mb-4 text-black/80">
					How do you feel today? 🎭
				</h2>

				<select
					value={mood}
					onChange={(e) => setMood(e.target.value)}
					className="p-2 border rounded-md mb-4 text-gray-700 w-64"
					required
				>
					<option value="">Select your mood</option>

					<optgroup label="😊 Positive">
						<option value="happy">Happy</option>
						<option value="excited">Excited</option>
						<option value="motivated">Motivated</option>
						<option value="confident">Confident</option>
					</optgroup>

					<optgroup label="😌 Calm / Neutral">
						<option value="calm">Calm</option>
						<option value="chill">Chill</option>
						<option value="reflective">Reflective</option>
					</optgroup>

					<optgroup label="😢 Emotional / Negative">
						<option value="sad">Sad</option>
						<option value="lonely">Lonely</option>
						<option value="angry">Angry</option>
						<option value="anxious">Anxious</option>
					</optgroup>

					<optgroup label="🎭 Other">
						<option value="other">Mixed Feelings</option>
					</optgroup>
				</select>

				<Button
					type="submit"
					disabled={loading}
					className={`${
						loading ? "bg-gray-400" : "bg-[#1A8299] hover:bg-[#16607A]"
					} text-white px-4 py-2 rounded-md transition duration-300`}
				>
<<<<<<< HEAD
					{loading ? "Loading..." : "Cheer Me Up"}
				</Button>
=======
					{loading ? "Loading..." : "Tune Me In"}
				</button>
>>>>>>> 18a30a5 (updated homepage and layout)
			</form>

			{error && <p className="text-red-400 mb-4">{error}</p>}
			{quote && (
				<div className="relative w-full max-w-2xl mb-3 p-2 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg shadow-xl backdrop-blur-sm border border-white/20">
					<div className="absolute top-4 left-4 text-indigo-300/40 text-6xl font-serif leading-none">
						{'"'}
					</div>
					<div className="relative z-10 pt-3">
						<p className="text-lg leading-relaxed text-gray-800 font-medium italic mb-4">
							{quote.text}
						</p>
						<div className="flex items-center justify-end">
							<div className="h-px w-12 bg-gradient-to-r from-transparent to-indigo-400 mr-3"></div>
							<p className="text-xs text-gray-700 font-semibold">
								{quote.author}
							</p>
						</div>
					</div>
				</div>
			)}
			{tracks.length > 0 && (
				<div className="relative w-full">
					{/* Horizontal scroll area */}
					<div
						className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
						style={{ scrollbarWidth: "none" }}
					>
						{tracks.map((track) => (
							<div
								key={track.trackId}
<<<<<<< HEAD
								className="flex-shrink-0 w-64 snap-center bg-gray-900/80 rounded-xl shadow-lg overflow-hidden"
							>
								{/* inner wrapper that scales */}
								<div className="p-4 flex flex-col items-center transition-transform duration-300 hover:scale-105">
=======
								className="flex-shrink-0 w-64 snap-center bg-gray-800/60 rounded-xl p-4 flex flex-col items-center shadow-lg"
							>
								<div className="hover:scale-105 transition-transform duration-300 ease-out">
>>>>>>> 18a30a5 (updated homepage and layout)
									<Image
										src={track.artworkUrl100}
										alt={track.trackName}
										width={100}
										height={100}
<<<<<<< HEAD
										className="rounded-lg my-1 h-auto"
									/>
									<p className="font-bold text-gray-100 text-center line-clamp-2">
										{track.trackName}
									</p>
									<p className="text-sm text-gray-400">{track.artistName}</p>

									{track.previewUrl && (
										<audio controls className="mt-3 w-full">
=======
										className="rounded-lg mb-3 h-auto mx-auto"
									/>
									<p className="font-bold text-gray-900 text-center line-clamp-2">
										{track.trackName}
									</p>
									<p className="text-sm text-gray-100">{track.artistName}</p>

									{track.previewUrl && (
										<audio controls className="mt-3 w-full ">
>>>>>>> 18a30a5 (updated homepage and layout)
											<source src={track.previewUrl} type="audio/mpeg" />
											Your browser does not support the audio element.
										</audio>
									)}

									{track.trackViewUrl && (
										<a
											href={track.trackViewUrl}
											target="_blank"
											rel="noopener noreferrer"
<<<<<<< HEAD
											className="text-blue-400 text-sm hover:underline mt-2"
=======
											className="text-blue-800 text-xs hover:bold mt-4"
>>>>>>> 18a30a5 (updated homepage and layout)
										>
											View on iTunes
										</a>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default MoodMusicRecommender;
