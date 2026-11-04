import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StyledComponentsRegistry from "../lib/registry";
const display = localFont({ src: '../fonts/display/DMSerifDisplay-Regular.ttf', variable: '--font-display', display: 'swap' });

export const metadata: Metadata = {
  title: "Pizzana Pizzaria | Pizzas Artesanais em Pelotas",
  description: "Pizzaria artesanal em Pelotas. Massas frescas, ingredientes selecionados e sabor incomparável. Delivery disponível.",
  keywords: ["pizzaria", "pizza artesanal", "pizzana", "pelotas", "delivery", "pizza", "restaurante", "italiana", "pizzaria pelotas", "melhor pizza"],
  authors: [{ name: "Pizzana Pizzaria" }],
  creator: "Pizzana Pizzaria",
  publisher: "Pizzana Pizzaria",
  icons: {
    icon: '/images/pizzana-logo.png',
    apple: '/images/pizzana-logo.png',
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
    title: "Pizzana Pizzaria | A Melhor Pizza Artesanal de Pelotas",
    description: "Pizzas artesanais com ingredientes selecionados e massa fresca.",
    url: "https://www.pizzasbubolzoficial.com.br",
    siteName: "Pizzana Pizzaria",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/pizzana-logo.png",
        width: 800,
        height: 600,
        alt: "Logo Pizzana Pizzaria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pizzana Pizzaria | A Melhor Pizza Artesanal de Pelotas",
    description: "Pizzas artesanais com ingredientes selecionados e massa fresca.",
    images: ["/images/pizzana-logo.png"],
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
        <link rel="icon" href="/images/pizzana-logo.png" />
        <link rel="apple-touch-icon" href="/images/pizzana-logo.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Pizzana Pizzaria",
            "description": "Pizzaria artesanal em Pelotas. Massas frescas, ingredientes selecionados e sabor incomparável.",
            "url": "https://www.pizzasbubolzoficial.com.br",
            "logo": "https://www.pizzasbubolzoficial.com.br/images/pizzana-logo.png",
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
            "telephone": "+55 53 99243-7474",
            "hasMenu": "https://app.cardapioweb.com/pizzas_bubolz_",
            "acceptsReservations": true,
            "deliveryArea": "Pelotas",
            "openingHours": [
              "Mo-Su 18:00-01:00"
            ],
            "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Pix"],
            "sameAs": [
              "https://www.instagram.com/pizzanapizzaria?dlrf=MnAxN2F6MjV0ZHFh&utm_source=qr",
            ]
          })}
        </script>
      </head>
      <body
        className={`${display.variable} antialiased`}
      >
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
