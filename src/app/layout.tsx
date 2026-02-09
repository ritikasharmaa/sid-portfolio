import "./globals.css";
import Navbar from "@/components/Navbar";
import { Playfair_Display, Inter } from "next/font/google";
import FloatingResume from "@/components/FloatingResume";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Content Creator Portfolio",
  description: "Content Creator | Video Editor | Social Media Manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} bg-[#0f172a] text-white`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <FloatingResume />
      </body>
    </html>
  );
}
