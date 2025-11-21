"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaPizzaSlice, FaWhatsapp } from "react-icons/fa";
import localFont from "next/font/local";

const playlistScript = localFont({
  src: "../fonts/display/Playlist Script.otf",
  variable: "--font-playlist-script",
});

const libreFranklin = localFont({
  src: "../fonts/display/LibreFranklin-Black.ttf",
  variable: "--font-libre-franklin",
});

const useScroll = () => {
  const [scrollDir, setScrollDir] = useState("up");
  const [prevScroll, setPrevScroll] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollingDown = currentScroll > prevScroll;
      const scrollDelta = Math.abs(currentScroll - prevScroll);
      const headerHeight = 80;

      if (currentScroll < headerHeight) {
        setVisible(true);
      } else if (scrollDelta > 5) {
        setVisible(!scrollingDown);
        setScrollDir(scrollingDown ? "down" : "up");
      }

      setPrevScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  return visible;
};

const HeaderContainer = styled.header<{ $visible: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--color-primary-dark);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 50;
  transform: translateY(${(props) => (props.$visible ? "0" : "-100%")});
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    position: relative;
  }
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--color-white);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    margin-bottom: 0;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 100px;
    height: auto;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-white);

  @media (max-width: 768px) {
    display: block;
  }
`;

const Nav = styled.nav<{ $isOpen?: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-height: ${(props) => (props.$isOpen ? "500px" : "0")};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    opacity: ${(props) => (props.$isOpen ? "1" : "0")};
    visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
    margin-top: ${(props) => (props.$isOpen ? "1rem" : "0")};
  }
`;

const NavLink = styled.a`
  color: var(--color-white);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: var(--color-secondary-soft);
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 0.5rem 0;
    justify-content: center;
  }
`;

const CTAButton = styled.a`
  background-color: #25d366;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #22c15e;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const LogoText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BubolzText = styled.span`
  font-family: var(--font-playlist-script), cursive;
  font-size: 2.8rem;
  font-weight: normal;
`;

const PizzasText = styled.span`
  font-family: var(--font-libre-franklin);
  font-size: 1.8rem;
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isVisible = useScroll();

  return (
    <HeaderContainer
      className={`${playlistScript.variable} ${libreFranklin.variable}`}
      $visible={isVisible}
    >
      <Logo>
        <LogoContainer>
          <LogoText>
            <PizzasText className={libreFranklin.className}>Pizzas</PizzasText>
            <BubolzText>Bubolz</BubolzText>
          </LogoText>
        </LogoContainer>
        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "✕" : "☰"}
        </MenuButton>
      </Logo>
      <Nav $isOpen={isMenuOpen}>
        <NavLink
          href="https://app.cardapioweb.com/pizzas_bubolz_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPizzaSlice />
          Cardápio
        </NavLink>
        <NavLink href="#sobre">Sobre Nós</NavLink>
        <NavLink href="#contato">Localização</NavLink>
        <CTAButton
          href="https://wa.me/5553991319632?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido."
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
          Peça Agora
        </CTAButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
