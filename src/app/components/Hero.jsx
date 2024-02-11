import React from "react";

const Hero = () => {
	return (
		<main className="m-2">
			<div className="container text-white">
				<section className="col-span-5 place-self-center mt-4 lg:mt-0">
					<h1 className="text-4xl">
						Welcome to <strong>Cheerify.me</strong>
					</h1>
					<div className="w-[250px] h-[250px] lg:w-[350px] lg:h-[400px] relative">
						<img
							className=""
							src="/cheerifyme_logo.png"
							alt=" logo with cartoon of a smiley face and headphones"
						/>
					</div>
				</section>
				<div>
					<p>your go-to place, to make your day a little brighter ☀️</p>
					<p>
						Imagine this: you&apos;re feeling a little down, in need of a
						pick-me-up. Or maybe you're bursting with energy and just need the
						perfect song to get your booty moving. Well, guess what? Cheerify.me
						has got you covered! 🎶
					</p>
					<p>
						Let me share something about myself. When I find myself experiencing
						any emotion, from sadness to overjoy, I often turn on music and
						start dancing (FYI – I&apos;m a big fan of bachata 💃). My room is
						filled with motivational quotes that never fail to lift my spirits.
						They've helped me through both breakdowns and breakthroughs in life
						✨ It got me thinking – why not create a place where everyone can
						find that same kind of joy and inspiration? 💡
					</p>{" "}
					<p>See for yourself what&apos;s waiting for you here! 🤩</p>
					<div className="flex items-center justify-center">
						<button className="text-white border-4 p-4">ENTER</button>
					</div>
				</div>
			</div>
			<section>
				Remember, if you need additional support and/or you’re struggling with
				mental health, it’s always best to contact a professional. Here you can
				find some useful links https://checkpointorg.com/global/ or check in
				your local community. You’re not alone, asking for help is a sign of
				strength.
			</section>
			<footer>
				This is an{" "}
				<a href="https://github.com/gosiast/cheerifyme">open-source</a> project
				and was created by{" "}
				<a href="https://github.com/gosiast">Malgorzata Stano</a>
			</footer>
		</main>
	);
};

export default Hero;
