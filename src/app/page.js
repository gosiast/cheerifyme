import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
	return (
		//here I style how the entire background looks like, and the background color
		<main className="flex min-h-screen items-center justify-between p-10 bg-backgroundCustomColor">
			<div>
				<Hero />
			</div>
		</main>
	);
}
