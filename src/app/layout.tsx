import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Theme, ThemePanel } from "@radix-ui/themes";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "jackskrable.com",
	description: "Jack Skrable's Personal Website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<Theme
					accentColor="brown"
					grayColor="sage"
					radius="small"
					scaling="100%"
				>
					<Navbar />
					{children}
					<ThemePanel />
				</Theme>
			</body>
		</html>
	);
}
