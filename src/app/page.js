import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
	return (
		//here I style how the entire background looks like, and the background color
		<main className="flex min-h-screen items-center justify-between p-24 bg-backgroundCustomColor">
			<div>
				<Hero />
			</div>
		</main>
	);
}
