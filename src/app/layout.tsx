import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "../lib/registry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pizzaria Bubolz | Pizzas Artesanais em Pelotas",
  description: "Pizzaria artesanal em Pelotas. Massas frescas, ingredientes selecionados e sabor incomparável. Delivery disponível.",
  keywords: ["pizzaria", "pizza artesanal", "bubolz", "pelotas", "delivery", "pizza", "restaurante", "italiana", "pizzaria pelotas", "melhor pizza"],
  authors: [{ name: "Pizzaria Bubolz" }],
  creator: "Pizzaria Bubolz",
  publisher: "Pizzaria Bubolz",
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://www.pizzasbubolzoficial.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pizzaria Bubolz | A Melhor Pizza Artesanal de Pelotas",
    description: "Pizzas artesanais com ingredientes selecionados e massa fresca.",
    url: "https://www.pizzasbubolzoficial.com.br",
    siteName: "Pizzaria Bubolz",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Logo Pizzaria Bubolz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pizzaria Bubolz | A Melhor Pizza Artesanal de Pelotas",
    description: "Pizzas artesanais com ingredientes selecionados e massa fresca.",
    images: ["/images/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <script dangerouslySetInnerHTML={{
          __html: `
            if (typeof history !== 'undefined' && 'scrollRestoration' in history) {
              history.scrollRestoration = 'manual';
            }
          `
        }} />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/images/logo-header.png" />
        <link rel="apple-touch-icon" href="/images/logo-header.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Pizzaria Bubolz",
            "description": "Pizzaria artesanal em Pelotas. Massas frescas, ingredientes selecionados e sabor incomparável.",
            "url": "https://www.pizzasbubolzoficial.com.br",
            "logo": "https://www.pizzasbubolzoficial.com.br/images/logo.jpeg",
            "servesCuisine": ["Pizza", "Italiana"],
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua Barão de Santa Tecla, 77",
              "addressLocality": "Pelotas",
              "addressRegion": "RS",
              "postalCode": "96015-000",
              "addressCountry": "BR"
            },
            "telephone": "+55 53 99131-9632",
            "email": "pizzasbubolzoficial@gmail.com",
            "hasMenu": "https://www.pizzasbubolzoficial.com.br/cardapio",
            "acceptsReservations": true,
            "deliveryArea": "Pelotas",
            "openingHours": [
              "Tu-Su 18:00-23:00"
            ],
            "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Pix"],
            "sameAs": [
              "https://www.instagram.com/pizzasbubolzoficial/",
            ]
          })}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
