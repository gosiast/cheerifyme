// src/utils/moodGenreMap.ts

export interface MoodGenre {
	label: string;
	keywords: string[];
}

export const MOOD_GENRE_MAP: Record<string, MoodGenre> = {
	happy: {
		label: "Happy",
		keywords: ["feel good pop", "upbeat dance", "smile acoustic", "good vibes"],
	},
	sad: {
		label: "Sad",
		keywords: [
			"emotional piano",
			"soft ballad",
			"heartfelt acoustic",
			"indie melancholy",
		],
	},
	motivated: {
		label: "Motivated",
		keywords: [
			"workout beats",
			"energetic pop",
			"power pop",
			"determined vibe",
		],
	},
	confident: {
		label: "Confident",
		keywords: [
			"female empowerment",
			"victory anthem",
			"hip hop confidence",
			"boss energy",
		],
	},
	chill: {
		label: "Chill",
		keywords: ["lofi chill", "smooth jazz", "relaxing beats", "evening vibes"],
	},
	romantic: {
		label: "Romantic",
		keywords: ["love songs", "soul r&b", "soft pop", "slow dance"],
	},
	calm: {
		label: "Calm",
		keywords: ["ambient peace", "meditation", "soothing acoustic", "spa music"],
	},
	angry: {
		label: "Angry",
		keywords: ["rock", "metal", "punk", "hardcore"],
	},
	anxious: {
		label: "Anxious",
		keywords: [
			"instrumental calm",
			"nature sounds",
			"acoustic comfort",
			"soft lofi",
		],
	},
	reflective: {
		label: "Reflective",
		keywords: [
			"storytelling folk",
			"indie introspective",
			"soft guitar",
			"calm voice",
		],
	},
	other: {
		label: "Other",
		keywords: ["soundtrack", "alternative", "indie mix", "cinematic chill"],
	},
};
