import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GOOGLE_TAG_ID = "GT-WV8QQXX9";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600", "700"],
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
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${barlow.variable} antialiased`} suppressHydrationWarning>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = function(){window.dataLayer.push(arguments);};
            window.gtag('js', new Date());
            window.gtag('config', '${GOOGLE_TAG_ID}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
