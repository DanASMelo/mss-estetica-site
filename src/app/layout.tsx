import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-WL101P06PB";
const GOOGLE_ADS_ID = "AW-16757775206";

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
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = function(){window.dataLayer.push(arguments);};
            window.gtag('js', new Date());
            window.gtag('config', '${GA_MEASUREMENT_ID}');
            window.gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
