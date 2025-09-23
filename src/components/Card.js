import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Card = ({ title, items }) => (
  <CardWrapper>
    <CardTitle>{title}</CardTitle>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </CardWrapper>
);

export default Card;
