"use client";

import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 30px;
  left: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #25d366;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 100;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.4);
  }
  
  &:focus {
    outline: none;
  }
`;

const WhatsAppFloat = () => {
  return (
    <WhatsAppButton 
      href="https://wa.me/5553992136666?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fazer pedido via WhatsApp"
    >
      <FaWhatsapp />
    </WhatsAppButton>
  );
};

export default WhatsAppFloat;
