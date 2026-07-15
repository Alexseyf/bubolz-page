"use client";

import React from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: var(--color-primary-dark);
  color: white;
  padding: 3rem 2rem 1rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterColumn = styled.div`
  h3 {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -0.5rem;
      width: 50px;
      height: 2px;
      background-color: #ffd700;
    }
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 0.8rem;
  }

  a {
    color: #e0e0e0;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #ffd700;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: white;
    font-size: 1.2rem;
    transition: all 0.3s;

    &:hover {
      background-color: var(--color-primary);
      transform: translateY(-3px);
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  color: #e0e0e0;

  p {
    margin: 0;
  }

  a {
    color: #ffd700;
    text-decoration: none;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <h3>Pizzas Bubolz</h3>
          <p>
            A melhor e mais tradicional pizzaria artesanal de Pelotas, trazendo
            sabor, autenticidade e qualidade desde sempre.
          </p>
          <SocialLinks>
            <a
              href="https://www.instagram.com/pizzasbubolzoficial"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </SocialLinks>
        </FooterColumn>

        <FooterColumn>
          <h3>Links Rápidos</h3>
          <FooterLinks>
            <li>
              <a href="#sobre">Sobre Nós</a>
            </li>
            <li>
              <a
                href="https://app.cardapioweb.com/pizzas_bubolz_"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cardápio
              </a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </FooterLinks>
        </FooterColumn>

        <FooterColumn>
          <h3>Horário de Funcionamento</h3>
          <FooterLinks>
            <li>18h às 02h | Todos os dias</li>
            <li>Fechados na QUINTA</li>
            <li>Delivery disponível</li>
            <li>Feriados: Horário normal</li>
          </FooterLinks>
        </FooterColumn>

        <FooterColumn>
          <h3>Contato</h3>
          <FooterLinks>
            <li>Rua Barão de Santa Tecla, 77 - Centro</li>
            <li>Pelotas - RS, 96010-140</li>
            <li>WhatsApp: (53) 99213-6666</li>
            <li>pizzasbubolzoficial@gmail.com</li>
          </FooterLinks>
        </FooterColumn>
      </FooterContent>

      <FooterBottom>
        <p>
          © {currentYear} Pizzas Bubolz.
          <br />
          Todos os direitos reservados.
          <br />
          Jesus é o caminho, a verdade e a vida.
          <br />
        </p>
        <p>
          <a href="/privacidade" target="_blank" rel="noopener noreferrer">
            Política de Privacidade
          </a>{" "}
          |{" "}
          <a href="/termos" target="_blank" rel="noopener noreferrer">
            Termos de Uso
          </a>
        </p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
