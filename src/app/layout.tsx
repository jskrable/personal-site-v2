import { Theme, ThemePanel } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./_components/Navbar/Navbar";
import { userAgent } from "./_utils/userAgent";
import "./globals.css";

const geistSans = localFont({
	src: "./_fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./_fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "jackskrable.com",
	description: "Jack Skrable's Personal Website",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { isMobile } = await userAgent();
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<Theme
					accentColor="brown"
					grayColor="sage"
					radius="small"
					scaling="100%"
				>
					<Navbar isMobile={isMobile()} />
					{children}
				</Theme>
			</body>
		</html>
	);
}
