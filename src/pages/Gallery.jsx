import React from 'react';
import { useLocation } from 'react-router-dom';
import SandyResortGallery from '../components/home/SandyResortGallery';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Gallery() {
  useScrollReveal();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const requestedProject = searchParams.get('project') || 'sandy-resort';

  return (
    <div style={{ background: '#04070D', minHeight: '100vh', paddingTop: '3.5rem' }}>
      <SandyResortGallery initialProjectId={requestedProject} />
    </div>
  );
}
