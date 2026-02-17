import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Playfair_Display } from "next/font/google";




const geist = Geist({
  subsets: ["latin"],
});


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Instituto Milla | Cuidado e Bem-Estar",
  description:
    "Instituto Milla oferece atendimento humanizado em fisioterapia, massoterapia, geriatria e terapias integrativas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.className} bg-[#f5f1ea] text-gray-800`}>
        {children}
      </body>
    </html>
  );
}
