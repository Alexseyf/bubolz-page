'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import { site } from '../lib/site';

const external = { target: '_blank', rel: 'noopener noreferrer' };

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <a href="#inicio" aria-label="Forzana Pizzaria — início" className="brand">
        <Image src="/images/forzana-logo.png" alt="Forzana Pizzaria" width={720} height={480} sizes="(max-width: 680px) 145px, (max-width: 1000px) 180px, 230px" loading="eager" />
      </a>
      <button className="menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </button>
      <nav id="navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Menu principal">
        <a href={site.menu} {...external}>Cardápio</a>
        <a href="#sobre" onClick={close}>Nossa história</a>
        <a href="#contato" onClick={close}>Contato</a>
        <a className="button" href={site.whatsapp} {...external}>Fazer pedido <FaWhatsapp /></a>
      </nav>
    </header>
  );
}
