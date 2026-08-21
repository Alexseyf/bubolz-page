"use client";

import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactContainer = styled.section`
  padding: 5rem 2rem;
  background-color: var(--foreground);
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--color-primary-dark);
  text-align: center;
  margin-bottom: 3rem;
`;

const ContactWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;



const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled.div`
  background-color: var(--foreground);
  // padding: 2rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--color-primary-dark);
  margin-bottom: 1.5rem;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InfoItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const IconWrapper = styled.div`
  color: var(--color-primary-dark);
  font-size: 1.2rem;
  margin-top: 0.2rem;
`;

const InfoText = styled.div`
  p {
    margin: 0;
    color: #333;
    line-height: 1.5;
  }
`;

const MapContainer = styled.div`
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const Contact = () => {
  return (
    <ContactContainer id="contato">
      <SectionTitle>Contato e Localização</SectionTitle>
      <ContactWrapper>
        <ContactInfo>
          <InfoCard>
            <InfoTitle>Informações de Contato</InfoTitle>
            <InfoList>
              <InfoItem>
                <IconWrapper>
                  <FaMapMarkerAlt />
                </IconWrapper>
                <InfoText>
                  <p>Rua Barão de Santa Tecla, 77 - Centro</p>
                  <p>Pelotas - RS, 96015-000</p>
                </InfoText>
              </InfoItem>
              <InfoItem>
                <IconWrapper>
                  <FaPhone />
                </IconWrapper>
                <InfoText>
                  <p>WhatsApp: (53) 99213-6666</p>
                </InfoText>
              </InfoItem>
              <InfoItem>
                <IconWrapper>
                  <FaEnvelope />
                </IconWrapper>
                <InfoText>
                  <p>pizzasbubolzoficial@gmail.com</p>
                </InfoText>
              </InfoItem>
              <InfoItem>
                <IconWrapper>
                  <FaClock />
                </IconWrapper>
                <InfoText>
                  <p>18h à 01h | Todos os dias</p>
                </InfoText>
              </InfoItem>
            </InfoList>
          </InfoCard>
          
          <MapContainer>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3386.066517983391!2d-52.344891023480825!3d-31.771449974284244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9511b5989271055b%3A0x935d4619c33b84ea!2sR.%20Bar%C3%A3o%20de%20Santa%20Tecla%2C%2077%20-%20Centro%2C%20Pelotas%20-%20RS%2C%2096010-140!5e0!3m2!1spt-BR!2sbr!4v1698519000000!5m2!1spt-BR!2sbr"
              title="Pizzaria Bubolz Localização"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </MapContainer>
        </ContactInfo>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
