import React from "react";

const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<div className="container p-10 flex justify-center text-sm mt-2 text-center text-black">
				<div className="flex flex-col items-center">
					<section className="italic bg-slate-500 underline decoration-sky-200/30 p-2 rounded-md">
						If you need additional support and/or you’re struggling with mental
						health, it’s always best to contact a professional. <br /> Here you
						can find some useful links to
						<a
							href="https://www.thecalmzone.net/international-mental-health-charities"
							className="text-bold"
						>
							Mental Health Charities
						</a>{" "}
						around the world or check in your local community. You’re not alone,{" "}
						<strong>asking for help is a sign of strength.</strong>
					</section>
					<section>
						<br />
						This is an{" "}
						<a
							href="https://github.com/gosiast/cheerifyme"
							target="_blank"
							rel="noopener noreferrer"
							className=""
						>
							open-source
						</a>{" "}
						project and was created by{" "}
						<a
							href="https://github.com/gosiast"
							target="_blank"
							rel="noopener noreferrer"
						>
							Malgorzata Stano
						</a>
					</section>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
