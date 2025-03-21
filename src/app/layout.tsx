import { ReactElement } from "react";
import type { Metadata } from "next";
import * as Fonts from "@/assets/fonts";
import "./globals.css";

export const metadata: Metadata = {
	title: "botsforge.com",
	description: "Develop next gen-zBots.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>): ReactElement {
	return (
		<html lang="en" className="scroll-smooth bg-base-200">
			<body
				className={`${Fonts.Borel.variable}
                    ${Fonts.LeagueSpartan.variable}
                    ${Fonts.Poppins.variable}
                    ${Fonts.Quicksand.variable}
                    antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
