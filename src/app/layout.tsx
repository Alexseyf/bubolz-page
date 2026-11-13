import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "../lib/site";

const display = localFont({ src: "../fonts/display/DMSerifDisplay-Regular.woff2", variable: "--font-display", display: "swap" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: site.colors.green,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: "food",
  formatDetection: { email: false, address: true, telephone: true },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Forzana Pizzaria | Pizza Artesanal com Delivery em Pelotas",
    description: "Pizza artesanal com massa fresca e ingredientes selecionados. Delivery em Pelotas todos os dias, das 18h à 01h.",
    url: "/",
    siteName: site.name,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/images/forzana-og.jpg", width: 1200, height: 630, alt: "Pizza artesanal da Forzana Pizzaria, com queijo derretido e borda dourada" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forzana Pizzaria | Pizza Artesanal com Delivery em Pelotas",
    description: "Pizza artesanal com massa fresca e ingredientes selecionados. Delivery em Pelotas todos os dias, das 18h à 01h.",
    images: ["/images/forzana-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "pt-BR",
      publisher: { "@id": `${site.url}/#restaurant` },
    },
    {
      "@type": "Restaurant",
      "@id": `${site.url}/#restaurant`,
      name: site.name,
      description: site.description,
      url: site.url,
      logo: `${site.url}/icon-512.png`,
      image: [`${site.url}/images/forzana-og.jpg`, `${site.url}/images/forzana-hero.webp`],
      telephone: site.phoneE164,
      servesCuisine: ["Pizza", "Italiana"],
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        postalCode: site.address.postalCode,
        addressCountry: site.address.country,
      },
      areaServed: { "@type": "City", name: "Pelotas" },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: site.hours.opens,
          closes: site.hours.closes,
        },
      ],
      hasMenu: site.menu,
      acceptsReservations: false,
      paymentAccepted: "Dinheiro, Cartão de crédito, Cartão de débito, Pix",
      currenciesAccepted: "BRL",
      potentialAction: {
        "@type": "OrderAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: site.menu,
          inLanguage: "pt-BR",
          actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
        },
        deliveryMethod: "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet",
      },
      sameAs: [site.instagram],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "if('scrollRestoration' in history){history.scrollRestoration='manual'}",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className={`${display.variable} antialiased`}>{children}</body>
    </html>
  );
}
