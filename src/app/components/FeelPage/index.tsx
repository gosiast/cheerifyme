import MoodMusicRecommender from "../MoodMusicRecommender";

export default function FeelPage() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0E2A47] to-[#174C61] text-white p-6">
			<h1 className="text-4xl font-bold mb-8">Your Mood, Your Music 🎶</h1>
			<MoodMusicRecommender />
		</main>
	);
}
