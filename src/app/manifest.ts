import type { MetadataRoute } from "next";
import { site } from "../lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.title,
    short_name: "Forzana",
    description: site.description,
    lang: "pt-BR",
    categories: ["food"],
    start_url: "/",
    display: "standalone",
    background_color: site.colors.cream,
    theme_color: site.colors.green,
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcuts: [
      { name: "Cardápio", url: "/#cardapio", description: "Veja nosso cardápio" },
      { name: "Contato", url: "/#contato", description: "Fale com a Forzana" },
    ],
  };
}

