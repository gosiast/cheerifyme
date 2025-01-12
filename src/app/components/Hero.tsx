import React, { useState } from "react";
import Image from "next/image";
import Footer from "./Footer";
import FeelPage from "./FeelPage";

// Define the Props interface (even if empty for now, it prepares for future props)
interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
	const [showFeelPage, setShowFeelPage] = useState(false);

	const handleClick = () => {
		setShowFeelPage(true);
	};

	return (
		<main className="m-2 p-10">
			<div className="container relative text-center text-black">
				<section className="flex flex-col items-center justify-center">
					<h1 className="text-4xl font-semibold">
						Welcome to <strong>Cheerify.me</strong>
					</h1>
					<div className="w-24 h-24 lg:w-36 lg:h-36 relative mb-10">
						<Image
							src="/cheerifyme_logo.png"
							alt="Cheerify.me logo with a cartoon smiley face and headphones"
							layout="fill"
							objectFit="contain"
							priority
						/>
					</div>
				</section>
				<div className="text-lg mt-4 p-2 leading-8 flex items-center justify-center">
					<p>
						Your go-to place to make your day a little brighter ☀️
						<br />
						Imagine this: you&apos;re feeling a little down, in need of a
						pick-me-up. Or maybe you&apos;re bursting with energy and just need
						the perfect song to get your booty moving. Well, guess what?{" "}
						<strong>Cheerify.me</strong> has got you covered! 🎶
						<br />
						See for yourself what&apos;s waiting for you here! 🤩
					</p>
				</div>
				{showFeelPage ? (
					<FeelPage />
				) : (
					<button
						className="bg-[#1A8299] text-white border-2 p-4 rounded-md hover:bg-[#16607A] transition-colors duration-300"
						onClick={handleClick}
						aria-label="Enter Cheerify.me"
					>
						ENTER
					</button>
				)}
			</div>
			<Footer />
		</main>
	);
};

export default Hero;
