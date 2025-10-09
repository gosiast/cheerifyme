"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import FeelPage from "./FeelPage";
import Layout from "./Layout";
import Image from "next/image";

export default function Hero() {
	const [showFeelPage, setShowFeelPage] = useState(false);

	return (
		<Layout>
			<div className="text-center animate-fade-in">
				{!showFeelPage ? (
					<div className="flex flex-col items-center gap-6">
						<Image
							src="/cheerifyme_logo.png"
							alt="Cheerify.me logo"
							className="w-32 h-32 object-contain drop-shadow-xl"
							width={160}
							height={160}
							priority
						/>
						<Button
							onClick={() => setShowFeelPage(true)}
							className="bg-[#1A8299] hover:bg-[#16607A] text-white px-6 py-2 rounded-md transition-all duration-300"
						>
							Get Started
						</Button>
					</div>
				) : (
					<FeelPage onBack={() => setShowFeelPage(false)} />
				)}
			</div>
		</Layout>
	);
}
