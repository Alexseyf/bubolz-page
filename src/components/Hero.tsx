import React from 'react';
import styled from 'styled-components';
import localFont from 'next/font/local';
import { FaPizzaSlice } from 'react-icons/fa';

const playlistScript = localFont({
  src: '../fonts/display/Playlist Script.otf',
  variable: '--font-playlist-script'
});

const libreFranklin = localFont({
  src: '../fonts/display/LibreFranklin-Black.ttf',
  variable: '--font-libre-franklin'
});

const StyledTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 0.5rem;
  font-family: var(--font-playlist-script);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const StyledDescription = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const HeroContainer = styled.section`
  position: relative;
  height: 85vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
              url('/images/pizza_banner.jpg');
  background-size: cover;
  background-position: center;
  // background-attachment: fixed;
  color: white;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    height: auto;
    min-height: 85vh;
    padding: 2rem;
    background-attachment: scroll;
  }
`;

const TwoColumnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const LogoColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 800px;
    height: auto;
    filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.1));
  }

  @media (max-width: 768px) {
    img {
      max-width: 350px;
    }
  }
`;

const HeroContent = styled.div`
  flex: 1;
  text-align: left;
  max-width: 600px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const CTAButton = styled.a`
  background-color: var(--color-secondary);
  color: black;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1.2rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    transform: translateY(-3px);
    background-color: var(--color-secondary-soft);
  }

  svg {
    font-size: 1.4rem;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    letter-spacing: 0.5px;

    svg {
      font-size: 1.2rem;
    }
  }
`;

const Hero = () => {
  return (
    <HeroContainer className={`${playlistScript.variable} ${libreFranklin.variable}`}>
      <TwoColumnWrapper>
        <LogoColumn>
          <img src="/images/logo.png" alt="Pizzaria Bubolz Logo" />
        </LogoColumn>
        <HeroContent>
          <StyledTitle>Pizzas Bubolz</StyledTitle>
          <StyledDescription>
            Pizzas artesanais feitas com ingredientes selecionados.
            Uma receita familiar que se transforma em sabor na sua mesa.
          </StyledDescription>
          <CTAButton 
            href="#cardapio" 
          >
            <FaPizzaSlice />
            Cardápio
          </CTAButton>
        </HeroContent>
      </TwoColumnWrapper>
    </HeroContainer>
  );
};

export default Hero;
