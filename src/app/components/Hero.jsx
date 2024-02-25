import React from "react";
import Footer from "./Footer";

const Hero = () => {
	return (
		<main className="m-2 p-10">
			<div className="container relative text-center text-black">
				<section className="flex items-center justify-center">
					<h1 className="text-4xl">
						Welcome to <strong>Cheerify.me</strong>
					</h1>
					<div className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] relative">
						<img
							src="/cheerifyme_logo.png"
							alt=" logo with cartoon of a smiley face and headphones"
						/>
					</div>
				</section>
				<div className="mt-4 p-2 leading-8 flex items-center">
					<p>
						your go-to place, to make your day a little brighter ☀️
						<br />
						Imagine this: you&apos;re feeling a little down, in need of a
						pick-me-up. Or maybe you're bursting with energy and just need the
						perfect song to get your booty moving. Well, guess what? Cheerify.me
						has got you covered! 🎶
						<br />
						Let me share something about myself. When I find myself experiencing
						any emotion, from sadness to overjoy, I often turn on music and
						start dancing (FYI – I&apos;m a big fan of bachata 💃). My room is
						filled with motivational quotes that never fail to lift my spirits.
						They've helped me through both breakdowns and breakthroughs in life
						✨ It got me thinking – why not create a place where everyone can
						find that same kind of joy and inspiration? 💡
						<br />
						See for yourself what&apos;s waiting for you here! 🤩
					</p>
				</div>
				<div className="">
					<button className="bg-[#1A8299] text-white border-2 p-4 rounded-md">
						ENTER
					</button>
				</div>
			</div>
			<Footer />
		</main>
	);
};

export default Hero;
