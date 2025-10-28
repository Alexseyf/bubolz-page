"use client";

import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 5rem 2rem;
  background-color: #f9f9f9;
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutImage = styled.div`
  flex: 1;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const AboutText = styled.div`
  flex: 1;
  
  h2 {
    font-size: 2.5rem;
    color: var(--color-primary-dark);
    margin-bottom: 1.5rem;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 1rem;
  }
`;

const AboutUs = () => {
  return (
    <AboutContainer id="sobre">
      <AboutContent>
        <AboutText>
          <h2>Sobre Nós</h2>
          <p>
            Na Pizzaria Bubolz, acreditamos que cada pizza é única e merece um ambiente 
            que respeite seu sabor e qualidade.
          </p>
          <p>
            Nossa filosofia culinária baseia-se na tradição, na qualidade dos ingredientes e no 
            amor pela gastronomia, combinando receitas clássicas com toques contemporâneos.
          </p>
          <p>
            Contamos com uma equipe de chefs qualificados e apaixonados, 
            comprometidos em proporcionar experiências gastronômicas que estimulam 
            o paladar e a satisfação de cada cliente.
          </p>
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutUs;
