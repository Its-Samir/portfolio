import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const firaSans = Fira_Sans({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
	title: "Samir",
	description: "Portfolio project created with next.js",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${firaSans.className} bg-black`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
