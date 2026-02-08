import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mss Estética | Clínica de Estética e Bem-Estar",
  description:
    "Mss Estética - Clínica especializada em massagens, tratamentos estéticos, drenagem linfática, limpeza de pele, lipocavitação e depilação. Agende seu horário!",
  keywords: [
    "estética",
    "massagem modeladora",
    "drenagem linfática",
    "limpeza de pele",
    "lipocavitação",
    "depilação",
    "radiofrequência",
    "ultrassom",
    "biomédica estética",
    "esteticista",
    "Ipiranga",
    "São Paulo",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
