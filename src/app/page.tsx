import Hero from "./components/Hero";
import Footer from "./components/Footer";

const Home: React.FC = () => {
	return (
		// Page background and layout styling
		<main className="min-h-screen bg-gradient-to-br from-cyan-200 via-pink-200 to-yellow-100 flex flex-col items-center justify-center p-6 text-gray-800">
			<Hero />
			<Footer />
		</main>
	);
};

export default Home;
