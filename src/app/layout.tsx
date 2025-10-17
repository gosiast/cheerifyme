import "./styles/globals.css";
import type { Metadata } from "next";
import Footer from "./components/Footer";

export const metadata: Metadata = {
	title: "Cheerify.me",
	description: "Your mindful companion for music, positivity, and inspiration.",
	icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="flex flex-col min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-800">
				{/* Main content area */}
				<main className="flex-1 flex flex-col items-center justify-center p-6">
					{children}
				</main>

				{/* Footer sticks to bottom */}
				<Footer />
			</body>
		</html>
	);
}
