"use client";

import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function Home() {
  return (
    <main>
      {/* Componente de cabeçalho com navegação */}
      <Header />
      
      {/* Seção principal com imagem de fundo e chamada para ação */}
      <Hero />
      
      {/* Seção sobre a escola e sua proposta */}
      <AboutUs />
      
      {/* Formulário de contato e localização */}
      <Contact />
      
      {/* Rodapé com informações adicionais */}
      <Footer />
      
      {/* Componentes flutuantes */}
      <BackToTop />
      <WhatsAppFloat />
    </main>
  );
}
