// Dados centrais do negócio. Mantenha-os idênticos ao Perfil da Empresa no Google
// (nome, endereço e telefone precisam ser iguais em todos os canais).
export const site = {
  url: 'https://www.pizzariaforzana.com.br',
  name: 'Forzana Pizzaria',
  title: 'Forzana Pizzaria | Pizza Artesanal com Delivery em Pelotas',
  description:
    'Pizzaria artesanal em Pelotas com delivery todos os dias, das 18h à 01h. Massa fresca, ingredientes selecionados e cardápio assinado pelo chef Michel Bubolz. Peça pelo WhatsApp.',
  phoneDisplay: '(53) 99243-7474',
  phoneE164: '+5553992437474',
  address: {
    street: 'Rua Barão de Santa Tecla, 77',
    district: 'Centro',
    city: 'Pelotas',
    region: 'RS',
    postalCode: '96010-140',
    country: 'BR',
  },
  hours: { opens: '18:00', closes: '01:00', label: 'Todos os dias, das 18h à 01h' },
  menu: 'https://app.cardapioweb.com/forzana_pizzaria',
  whatsapp: 'https://wa.me/5553992437474?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido.',
  instagram: 'https://www.instagram.com/forzanapizzaria/',
  colors: { cream: '#fff6e8', green: '#084522' },
} as const;

