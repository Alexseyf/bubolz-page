import Image from 'next/image';
import { FaWhatsapp, FaInstagram, FaArrowRight, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import SiteHeader from '../components/SiteHeader';
import { site } from '../lib/site';

const external = { target: '_blank', rel: 'noopener noreferrer' };

const faq = [
  {
    q: 'A Forzana faz entrega em Pelotas?',
    a: 'Sim. A Forzana trabalha somente com delivery e leva a pizza até a sua casa em Pelotas.',
  },
  {
    q: 'Qual é o horário de atendimento?',
    a: 'Atendemos todos os dias, das 18h à 01h, inclusive feriados.',
  },
  {
    q: 'Como faço meu pedido?',
    a: `Escolha sua pizza no nosso cardápio online ou peça direto pelo WhatsApp ${site.phoneDisplay}.`,
  },
  {
    q: 'O que faz a pizza da Forzana ser artesanal?',
    a: 'Massa fresca e ingredientes selecionados, a partir de uma receita de família. O cardápio é assinado pelo chef Michel Bubolz.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export default function Home() {
  return <>
    <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
    <SiteHeader />
    <main id="conteudo">
      <section id="inicio" className="hero">
        <div className="hero-copy">
          <h1 className="hero-kicker">Pizzaria artesanal com delivery em Pelotas</h1>
          <div className="hero-title">Boa pizza.<br />Boa<br className="desktop-break" /> companhia.<br /><span>Pronto.</span></div>
          <p>O melhor da mesa é o que<br className="desktop-break" /> a gente compartilha.</p>
          <a className="button hero-button" href={site.menu} {...external}>Escolher minha pizza <FaArrowRight /></a>
        </div>
        <Image className="hero-image" src="/images/forzana-hero.webp" alt="Fatia de pizza artesanal da Forzana com queijo derretido, tomate e manjericão" width={1197} height={1315} sizes="(max-width: 680px) 380px, 65vw" preload fetchPriority="high" />
      </section>
      <section id="sobre" className="together">
        <div className="together-inner">
          <h2>Tem lugar<br />para mais um.</h2>
          <p>Da nossa família para a sua mesa.</p>
          <p>Pizzas artesanais feitas com massa fresca e ingredientes selecionados. Uma receita familiar que sai do nosso forno e chega quentinha à sua casa, em Pelotas.</p>
        </div>
      </section>
      <section id="cardapio" className="flavors">
        <div className="flavors-photo">
          <Image src="/images/forzana-pizza.jpg" alt="Pizza artesanal da Forzana com queijo derretido e borda dourada" width={1800} height={1200} sizes="(max-width: 680px) 100vw, 50vw" />
        </div>
        <div className="flavors-copy">
          <p className="eyebrow">O SABOR DE ESTAR JUNTO</p>
          <h2>Encontre seu<br />próximo sabor.</h2>
          <p className="chef-signature">Cardápio assinado pelo chef <strong>Michel Bubolz</strong>.</p>
          <a className="button flavors-button" href={site.menu} {...external}>Explorar cardápio <FaArrowRight /></a>
        </div>
      </section>
      <section className="story">
        <p>Cada massa aberta, cada molho preparado e cada fatia servida carrega o nosso propósito: <em>aproximar pessoas.</em></p>
        <span>Quando a nossa pizza chega à sua mesa, nossas famílias se encontram.</span>
      </section>
      <section id="perguntas" className="faq" aria-labelledby="faq-title">
        <p className="eyebrow">PERGUNTAS FREQUENTES</p>
        <h2 id="faq-title">Antes de pedir.</h2>
        <div className="faq-list">
          {faq.map(({ q, a }) => (
            <details key={q}>
              <summary><h3>{q}</h3></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }} />
      </section>
      <section id="contato" className="contact">
        <div>
          <p className="eyebrow">VAMOS NOS ENCONTRAR?</p>
          <h2>A sua mesa<br />está aqui.</h2>
          <a className="button" href={site.whatsapp} {...external}><FaWhatsapp /> Pedir pelo WhatsApp</a>
        </div>
        <div className="contact-details">
          <div>
            <h3><FaMapMarkerAlt /> Endereço</h3>
            <address>{site.address.street} — {site.address.district}<br />{site.address.city} — {site.address.region}, {site.address.postalCode}</address>
          </div>
          <div>
            <h3><FaClock /> Horário de atendimento</h3>
            <p>{site.hours.label}<br />Feriados: horário normal · Somente delivery</p>
          </div>
          <div>
            <h3>Fale com a Forzana</h3>
            <a href={site.whatsapp} {...external}>WhatsApp {site.phoneDisplay}</a>
            <a className="instagram-link" href={site.instagram} {...external}><FaInstagram /> @forzanapizzaria</a>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <a className="footer-brand" href="#inicio">FORZANA<small>P I Z Z A R I A</small></a>
      <p className="footer-tagline">Pizza para compartilhar.</p>
      <span className="footer-copyright">© {new Date().getFullYear()} Forzana Pizzaria · Pelotas — RS</span>
      <a href={site.instagram} {...external} className="footer-instagram" aria-label="Instagram da Forzana"><FaInstagram /></a>
      <p className="footer-verse">Jesus é o caminho a verdade e a vida.</p>
    </footer>
    <a className="whatsapp-float" href={site.whatsapp} {...external} aria-label="Fazer pedido pelo WhatsApp"><FaWhatsapp /></a>
  </>;
}
