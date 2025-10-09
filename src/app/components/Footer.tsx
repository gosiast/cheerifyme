export default function Footer() {
	return (
		<footer className="text-center text-sm my-3 text-gray-700">
			<p className=" mx-auto bg-white/60 backdrop-blur p-4 rounded-xl">
				If you’re struggling with mental health, please reach out to a
				professional. You’re not alone —{" "}
				<strong>asking for help is strength 💪</strong>
				<br />
				<a
					href="https://www.thecalmzone.net/international-mental-health-charities"
					target="_blank"
					rel="noopener noreferrer"
					className="underline text-cheerifyTeal hover:text-cheerifyPink"
				>
					Mental Health Charities
				</a>
			</p>
			<p className="mt-4">
				Built with ❤️ by{" "}
				<a
					href="https://github.com/gosiast"
					className="underline text-cheerifyPink"
					target="_blank"
				>
					Malgorzata Stano
				</a>
			</p>
		</footer>
	);
}
