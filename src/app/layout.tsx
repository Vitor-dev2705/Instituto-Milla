import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AOSInit } from "../components/AOSInit";
import FloatingButton from "../components/FloatingButton";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Instituto Milla | Cuidado e Bem-Estar",
  description: "O Instituto Milla oferece atendimento humanizado em fisioterapia e terapias integrativas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${geist.className} ${playfair.variable} bg-[#f5f1ea] text-gray-800 antialiased overflow-x-hidden`}>
        <AOSInit /> 
        {children}
        <FloatingButton />
      </body>
    </html>
  );
}