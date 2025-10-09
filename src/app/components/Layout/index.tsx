"use client";
import { ReactNode } from "react";
export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="max-h-screen w-full flex flex-col items-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-800 transition-all duration-500">
			<header className="w-full py-8 text-center sticky top-0 bg-transparent z-50">
				{" "}
				<h1 className="text-4xl font-bold text-transparent bg-clip-text heading-gradient">
					{" "}
					Welcome to Cheerify.me{" "}
				</h1>{" "}
				<p className="text-gray-600 mt-2 text-base">
					{" "}
					Your mindful companion for music, positivity, and inspiration. <br />{" "}
					Discover songs and words that meet your mood.{" "}
				</p>{" "}
			</header>{" "}
			<main className="flex-1 flex flex-col justify-center items-center w-full max-w-3xl p-6">
				{" "}
				{children}{" "}
			</main>{" "}
		</div>
	);
}
