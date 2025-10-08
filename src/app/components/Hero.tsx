"use client";
import { useState } from "react";
import Image from "next/image";
import Footer from "./Footer";
import FeelPage from "./FeelPage";
import { Button } from "@/components/ui/button";

export default function Hero() {
	const [showFeelPage, setShowFeelPage] = useState(false);

	return (
		<main className="flex flex-col justify-center items-center max-h-screen p-6 text-gray-100">
			<div className="card max-w-2xl">
				<div className="flex flex-col items-center gap-6">
					<Image
						src="/cheerifyme_logo.png"
						alt="Cheerify.me logo"
						width={160}
						height={160}
						className="object-contain drop-shadow-xl"
						priority
					/>
					<h1 className="text-4xl heading-gradient">Welcome to Cheerify.me</h1>
					<p className="text-base text-gray-300 leading-relaxed text-balance">
						Your mindful companion for music, positivity, and inspiration.
						Discover songs and words that meet your mood.
					</p>

					{!showFeelPage ? (
						<Button
							onClick={() => setShowFeelPage(true)}
							className="btn-primary mt-4"
						>
							Get Started
						</Button>
					) : (
						<FeelPage />
					)}
				</div>
			</div>
		</main>
	);
}
