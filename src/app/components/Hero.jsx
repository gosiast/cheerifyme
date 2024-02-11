import React from "react";

const Hero = () => {
	return (
		<div>
			<div className="container bg-blue">
				<h1 className="text-4xl ">
					Welcome to <strong>Cheerify.me</strong>
				</h1>
				<img
					src="./src/app/cheerifyme_logo.png"
					alt=" logo with cartoon of a smiley face and headphones"
				/>
				<div>
					<p>
						your go-to place, to make your day a little brighter ☀️ Imagine
						this: you're feeling a little down, in need of a pick-me-up. Or
						maybe you're bursting with energy and just need the perfect song to
						get your booty moving. Well, guess what? Cheerify.me has got you
						covered! 🎶 Let me share something about myself. When I find myself
						experiencing any emotion, from sadness to overjoy, I often turn on
						music and start dancing (FYI – I'm a big fan of bachata 💃). My room
						is filled with motivational quotes that never fail to lift my
						spirits. They've helped me through both breakdowns and breakthroughs
						in life ✨ It got me thinking – why not create a place where
						everyone can find that same kind of joy and inspiration? 💡 See for
						yourself what’s waiting for you here! 🤩  
					</p>
					<div className="flex items-center justify-center">
						<button className="text-white border-4 p-4">ENTER</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
