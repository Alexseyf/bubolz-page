# 🍕 Forzana Pizzaria - Landing Page

Landing page da Forzana Pizzaria (Pelotas/RS), feita com Next.js 16 (App Router), React 19, TypeScript e Tailwind/CSS global. A página é estática (pré-renderizada) e publicada na Vercel em https://www.pizzariaforzana.com.br.

## 🚀 Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # typecheck + build de produção
```

## 🎨 Estrutura

```
src/
  app/
    layout.tsx     # metadados (title, description, Open Graph) e JSON-LD Restaurant
    page.tsx       # conteúdo da página (Server Component) + FAQ com JSON-LD FAQPage
    robots.ts      # /robots.txt
    sitemap.ts     # /sitemap.xml
    manifest.ts    # /manifest.webmanifest
    icon.png, apple-icon.png
  components/
    SiteHeader.tsx # header e menu mobile (único componente client)
  lib/site.ts      # dados do negócio: nome, endereço, telefone, horário, links
  fonts/display/   # DM Serif Display (woff2)
public/
  images/          # imagens otimizadas (servidas via next/image)
  icon-192.png, icon-512.png
```

## 🔍 SEO

- **Dados do negócio centralizados em `src/lib/site.ts`.** Nome, endereço e telefone devem ser idênticos aos do Perfil da Empresa no Google, Instagram e Cardápio Web.
- Domínio canônico: `https://www.pizzariaforzana.com.br` (a versão sem www redireciona para ele).
- Dados estruturados: `Restaurant` (endereço, horário, delivery, pagamento) e `FAQPage`.
- Imagens via `next/image` (AVIF/WebP e tamanhos responsivos). Ao trocar uma imagem, use um nome de arquivo novo.
- Depois de publicar, envie `https://www.pizzariaforzana.com.br/sitemap.xml` no Google Search Console.
