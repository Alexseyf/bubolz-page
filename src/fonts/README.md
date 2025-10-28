# Fontes do Projeto Pizzaria Bubolz

Este diretório contém as fontes utilizadas no projeto.

## Estrutura do Diretório

```
fonts/
├── display/     # Fontes para títulos e elementos de destaque
└── text/        # Fontes para texto corrido e elementos de interface
```

## Fontes Utilizadas

### Display (Títulos e Destaques)
- Playfair Display
  - Utilizada para: Logo, títulos principais e elementos de destaque
  - Pesos: 400 (regular), 600 (semibold)

### Text (Corpo e Interface)
- Montserrat
  - Utilizada para: Textos, menus, botões e interface geral
  - Pesos: 400 (regular), 500 (medium), 600 (semibold)

## Como Usar

Para usar as fontes no projeto:

```typescript
// Em componentes styled-components
const Title = styled.h1`
  font-family: var(--font-heading);
  font-weight: 600;
`;

const Text = styled.p`
  font-family: var(--font-body);
  font-weight: 400;
`;
```

## Observações

- As fontes são carregadas através do Google Fonts usando o módulo `next/font/google`
- As variáveis CSS estão definidas em `src/app/globals.css`
- Os pesos das fontes foram escolhidos para otimizar o carregamento da página
