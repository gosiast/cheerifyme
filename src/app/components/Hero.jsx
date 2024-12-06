"use client";
import React, { useState } from "react";
import Footer from "./Footer";
import FeelPage from "./FeelPage";
import Image from "next/image";

const Hero = () => {
	const [showFeelPage, setShowFeelPage] = useState(false);

	// Function to handle button click
	const handleClick = () => {
		setShowFeelPage(true); // Set showFeelPage state to true when button is clicked
	};
	return (
		<main className="m-2 p-10">
			<div className="container relative text-center text-black">
				<section className="flex items-center justify-center">
					<h1 className="text-4xl">
						Welcome to <strong>Cheerify.me</strong>
					</h1>
					<div className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] relative mb-10">
						<Image
							src="/cheerifyme_logo.png"
							alt=" logo with cartoon of a smiley face and headphones"
							width={150}
							height={150}
						/>
					</div>
				</section>
				<div className="text-lg mt-4 p-2 leading-8 flex items-center">
					<p className="">
						your go-to place, to make your day a little brighter ☀️
						<br />
						Imagine this: you&apos;re feeling a little down, in need of a //
						eslint-disable-next-line react/no-unescaped-entities pick-me-up. Or
						maybe you&apos;re bursting with energy and just need the perfect
						song to get your booty moving. Well, guess what?{" "}
						<strong>Cheerify.me </strong>
						has got you covered! 🎶
						<br />
						Let me share something about myself. When I find myself experiencing
						any emotion, from sadness to overjoy, I often turn on music and
						start dancing (FYI – I&apos;m a big fan of bachata 💃). My room is
						filled with motivational quotes that never fail to lift my spirits.
						They&apos;ve helped me through both breakdowns and breakthroughs in
						life ✨ It got me thinking – why not create a place where everyone
						can find that same kind of joy and inspiration? 💡
						<br />
						See for yourself what&apos;s waiting for you here! 🤩
					</p>
				</div>
				{showFeelPage ? (
					<FeelPage /> // Display FeelPage component if showFeelPage is true
				) : (
					<button
						className="bg-[#1A8299] text-white border-2 p-4 rounded-md"
						onClick={handleClick} // Call handleClick function when button is clicked
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
