import type { Metadata } from "next";
import { Poppins, Montserrat, Aldrich } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const aldrich = Aldrich({
  variable: "--font-aldrich",
  subsets: ["latin"],
  weight: ["400"],
});

const gilroy = localFont({
  src: "../public/fonts/Gilroy-ExtraBold.otf",
  variable: "--font-gilroy",
});

export const metadata: Metadata = {
  title: "Therm Water",
  description: "Take control of your pool's temperature with our smart automation system. Remote access, real-time monitoring, and energy-efficient heating.",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable} ${aldrich.variable} ${gilroy.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
