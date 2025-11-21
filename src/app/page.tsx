"use client";

import React, { useEffect, useLayoutEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function Home() {
  // useLayoutEffect executa antes da pintura, prevenindo o flash
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, []);

  // Garantir que a página sempre comece no topo
  useEffect(() => {
    // Executar imediatamente e também após um pequeno delay
    const scrollToTop = () => {
      if (typeof window !== 'undefined') {
        if ('scrollRestoration' in history) {
          history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    };

    scrollToTop();
    
    // Também executar após o DOM estar completamente carregado
    const timer = setTimeout(scrollToTop, 100);
    
    return () => clearTimeout(timer);
  }, []);

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
