"use client";

import React from 'react';
import styled from 'styled-components';

const CinemaWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  margin: 4rem 0;
  background: #000;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    background: rgba(255, 255, 255, 0.3);
  }

  &::after {
    content: '';
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    border-left: 20px solid white;
    margin-left: 6px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 4rem 2rem 2rem;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
  color: white;
`;

const VideoTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export default function CinemaSection({ title, subtitle, bgImage }) {
  return (
    <CinemaWrapper style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <PlayButton />
      <Overlay>
        <VideoTitle>{title}</VideoTitle>
        <p>{subtitle}</p>
      </Overlay>
    </CinemaWrapper>
  );
}
