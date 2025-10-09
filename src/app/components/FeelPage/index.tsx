"use client";
import MoodMusicRecommender from "../MoodMusicRecommender";
import { Button } from "@/components/ui/button";

interface FeelPageProps {
	onBack: () => void;
}

export default function FeelPage({ onBack }: FeelPageProps) {
	return (
		<div className="flex flex-col items-center w-full animate-fade-in">
			<MoodMusicRecommender />

			<Button
				onClick={onBack}
				className="mt-8 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-all duration-300"
			>
				← Back to Home
			</Button>
		</div>
	);
}
