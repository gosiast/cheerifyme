import Hero from "./components/Hero";
import Footer from "./components/Footer";

const Home: React.FC = () => {
	return (
		// Page background and layout styling
		<main className="flex flex-col min-h-screen items-center justify-between p-10 bg-backgroundCustomColor">
			<Hero />
			<Footer />
		</main>
	);
};

export default Home;
