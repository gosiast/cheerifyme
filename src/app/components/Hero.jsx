import React from "react";

const Hero = () => {
	return (
		<main className="m-0 p-0 bg-black">
			<div className="container text-white">
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
				<div className="p-2 flex items-center">
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
					<div className="">
						<button className="text-white border-4 p-4">ENTER</button>
					</div>
				</div>
			</div>
			<footer className="text-sm mt-2 text-center">
				<section className="italic bg-slate-700 underline decoration-sky-500/30 p-2 rounded-sm">
					If you need additional support and/or you’re struggling with mental
					health, it’s always best to contact a professional. <br /> Here you
					can find some useful links https://checkpointorg.com/global/ or check
					in your local community. You’re not alone,{" "}
					<strong>asking for help is a sign of strength.</strong>
				</section>
				<br />
				This is an{" "}
				<a href="https://github.com/gosiast/cheerifyme" target="_blank">
					open-source
				</a>{" "}
				project and was created by{" "}
				<a href="https://github.com/gosiast" target="_blank">
					Malgorzata Stano
				</a>
			</footer>
		</main>
	);
};

export default Hero;
