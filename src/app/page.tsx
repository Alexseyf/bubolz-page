'use client';

import { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaArrowRight, FaBars, FaTimes, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const menu = 'https://app.cardapioweb.com/pizzas_bubolz_';
const whatsapp = 'https://wa.me/5553992437474?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido.';
const instagram = 'https://www.instagram.com/pizzanapizzaria?dlrf=MnAxN2F6MjV0ZHFh&utm_source=qr';
const external = { target: '_blank', rel: 'noopener noreferrer' };

export default function Home() {
  const [open, setOpen] = useState(false);
  return <>
    <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
    <header className="header">
      <a href="#inicio" aria-label="Pizzana — início" className="brand"><img src="/images/pizzana-logo.png" alt="Pizzana Pizzaria" width="240" height="160" /></a>
      <button className="menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? <FaTimes /> : <FaBars />}</button>
      <nav id="navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Menu principal">
        <a href={menu} {...external}>Cardápio</a>
        <a href="#sobre" onClick={() => setOpen(false)}>Nossa história</a>
        <a href="#contato" onClick={() => setOpen(false)}>Contato</a>
        <a className="button" href={whatsapp} {...external}>Fazer pedido <FaWhatsapp /></a>
      </nav>
    </header>
    <main id="conteudo">
      <section id="inicio" className="hero">
        <div className="hero-copy"><h1>Boa pizza.<br />Boa<br className="desktop-break" /> companhia.<br /><span>Pronto.</span></h1>
          <p>O melhor da mesa é o que<br className="desktop-break" /> a gente compartilha.</p>
          <a className="button hero-button" href={menu} {...external}>Escolher minha pizza <FaArrowRight /></a>
        </div>
        <img className="hero-image" src="/images/pizzana-hero.png" alt="Fatia de pizza com queijo derretido, tomate e manjericão" width="1000" height="1100" fetchPriority="high" />
      </section>
      <section id="sobre" className="together"><div className="together-inner"><h2>Tem lugar<br />para mais um.</h2><p>Da nossa família para a sua mesa.</p><p>Pizzas artesanais feitas com ingredientes selecionados. Uma receita familiar que se transforma em sabor na sua mesa.</p></div></section>
      <section className="flavors">
        <div className="flavors-photo"><img src="/images/pizza_banner.jpg" alt="Pizza artesanal com queijo derretido e borda dourada" width="900" height="800" loading="lazy" /></div>
        <div className="flavors-copy"><p className="eyebrow">O SABOR DE ESTAR JUNTO</p><h2>Encontre seu<br />próximo sabor.</h2><p className="chef-signature">Cardápio assinado pelo chef <strong>Michel Bubolz</strong>.</p><a className="text-link" href={menu} {...external}>Explorar cardápio <FaArrowRight /></a></div>
      </section>
      <section className="story"><p>Cada massa aberta, cada molho preparado e cada fatia servida carrega o nosso propósito: <em>aproximar pessoas.</em></p><span>Quando a nossa pizza chega à sua mesa, nossas famílias se encontram.</span></section>
      <section id="contato" className="contact">
        <div><p className="eyebrow">VAMOS NOS ENCONTRAR?</p><h2>A sua mesa<br />está aqui.</h2><a className="button" href={whatsapp} {...external}><FaWhatsapp /> Pedir pelo WhatsApp</a></div>
        <div className="contact-details">
          <div><h3><FaMapMarkerAlt /> Onde estamos</h3><p>Rua Barão de Santa Tecla, 77 — Centro<br />Pelotas — RS</p><a className="text-link small" href="https://www.google.com/maps/search/?api=1&query=Rua+Bar%C3%A3o+de+Santa+Tecla+77+Pelotas+RS" {...external}>Como chegar <FaArrowRight /></a></div>
          <div><h3><FaClock /> Horário de atendimento</h3><p>Todos os dias, das 18h à 01h<br />Feriados: horário normal · Delivery disponível</p></div>
          <div><h3>Fale com a Pizzana</h3><a href={whatsapp} {...external}>(53) 99243-7474</a><a className="instagram-link" href={instagram} {...external}><FaInstagram /> @pizzanapizzaria</a></div>
        </div>
      </section>
    </main>
    <footer><a className="footer-brand" href="#inicio">PIZZANA<small>P I Z Z A R I A</small></a><p>Pizza para compartilhar.</p><span>© {new Date().getFullYear()} Pizzana</span><a href={instagram} {...external} aria-label="Instagram da Pizzana"><FaInstagram /></a><p className="footer-verse">Jesus é o caminho a verdade e a vida.</p></footer>
    <a className="whatsapp-float" href={whatsapp} {...external} aria-label="Fazer pedido pelo WhatsApp"><FaWhatsapp /></a>
  </>;
}
