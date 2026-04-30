"use client";

import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  background: var(--surface-container-highest);
  border-radius: var(--radius-full);
  padding: 0.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

const CategoryPicker = styled.div`
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  color: var(--primary);
  cursor: pointer;
  border-right: 24px solid transparent; /* Whitespace gap as per designMd */
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    color: var(--primary-container);
  }
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  padding: 0.75rem;
  font-size: 1rem;
  font-family: inherit;
  color: var(--on-surface);
  
  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  background: var(--primary-gradient);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: var(--radius-full);
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export default function SearchCenter() {
  return (
    <SearchContainer>
      <CategoryPicker>
        Categories
        <span>▾</span>
      </CategoryPicker>
      <SearchInput placeholder="Search for products, suppliers, or services..." />
      <SearchButton>Search</SearchButton>
    </SearchContainer>
  );
}
