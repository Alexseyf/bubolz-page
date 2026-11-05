import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StyledComponentsRegistry from "../lib/registry";
const display = localFont({ src: '../fonts/display/DMSerifDisplay-Regular.ttf', variable: '--font-display', display: 'swap' });

export const metadata: Metadata = {
  title: "Forzana Pizzaria | Pizzas Artesanais em Pelotas",
  description: "Pizzaria artesanal em Pelotas. Massas frescas, ingredientes selecionados e sabor incomparável. Delivery disponível.",
  keywords: ["pizzaria", "pizza artesanal", "forzana", "pelotas", "delivery", "pizza", "restaurante", "italiana", "pizzaria pelotas", "melhor pizza"],
  authors: [{ name: "Forzana Pizzaria" }],
  creator: "Forzana Pizzaria",
  publisher: "Forzana Pizzaria",
  icons: {
    icon: '/images/forzana-logo.png',
    apple: '/images/forzana-logo.png',
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://pizzariaforzana.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Forzana Pizzaria | A Melhor Pizza Artesanal de Pelotas",
    description: "Pizzas artesanais com ingredientes selecionados e massa fresca.",
    url: "https://pizzariaforzana.com.br",
    siteName: "Forzana Pizzaria",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/forzana-logo.png",
        width: 1536,
        height: 1024,
        alt: "Logo Forzana Pizzaria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forzana Pizzaria | A Melhor Pizza Artesanal de Pelotas",
    description: "Pizzas artesanais com ingredientes selecionados e massa fresca.",
    images: ["/images/forzana-logo.png"],
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
        <link rel="icon" href="/images/forzana-logo.png" />
        <link rel="apple-touch-icon" href="/images/forzana-logo.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Forzana Pizzaria",
            "description": "Pizzaria artesanal em Pelotas. Massas frescas, ingredientes selecionados e sabor incomparável.",
            "url": "https://pizzariaforzana.com.br",
            "logo": "https://pizzariaforzana.com.br/images/forzana-logo.png",
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
            "hasMenu": "https://app.cardapioweb.com/forzana_pizzaria",
            "acceptsReservations": true,
            "deliveryArea": "Pelotas",
            "openingHours": [
              "Mo-Su 18:00-01:00"
            ],
            "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Pix"],
            "sameAs": [
              "https://www.instagram.com/forzanapizzaria/",
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
