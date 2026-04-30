"use client";

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const BannerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 4rem 0;
  align-items: center;
  position: relative;
`;

const ContentBox = styled.div`
  padding: 3rem;
  background: var(--surface-container-low);
  border-radius: var(--radius-xl);
  z-index: 1;
`;

const Headline = styled.h2`
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
  line-height: 1.1;
`;

const Subline = styled.p`
  font-size: 1.125rem;
  color: var(--on-surface-variant);
  margin-bottom: 2rem;
  max-width: 400px;
`;

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  /* Intentional Asymmetry: Overlapping the container */
  margin-left: -10%;
  box-shadow: 20px 20px 60px rgba(0, 0, 0, 0.1);
  z-index: 2;
`;

export default function ProductBanner({ title, description, imageSrc, reverse }) {
  return (
    <BannerWrapper style={{ direction: reverse ? 'rtl' : 'ltr' }}>
      <ContentBox style={{ direction: 'ltr' }}>
        <Headline>{title}</Headline>
        <Subline>{description}</Subline>
        <button className="btn-primary">Explore Now</button>
      </ContentBox>
      <ImageBox>
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          style={{ objectFit: 'cover' }}
        />
      </ImageBox>
    </BannerWrapper>
  );
}
