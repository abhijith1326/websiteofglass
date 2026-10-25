import React from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  ShieldCheck,
  Leaf,
  Thermometer,
  Box,
  ArrowRight,
  Settings,
  Gem
} from 'lucide-react';
import { useSampleCart } from '../../context/SampleCartContext';

export default function EngineeredMaterialSection() {
  const { addItem } = useSampleCart();

  const materials = [
    {
      id: 'toughened-glass',
      type: 'GLASS',
      typeBg: '#1D70F5',
      badge: 'ISO Certified Safety',
      badgeIcon: <ShieldCheck size={14} color="#1D70F5" />,
      image: '/assets/images/toughened-glass.png',
      watermark: ['CLARITY', 'SAFETY', 'STRENGTH'],
      title: 'Toughened Safety Glass',
      desc: 'High mechanical strength & thermal shock resistance engineered up to 5x stronger than annealed glass.',
      btnColor: '#1D70F5',
      boxIconColor: '#1D70F5'
    },
    {
      id: 'heat-resistant-glass',
      type: 'GLASS',
      typeBg: '#1D70F5',
      badge: '700°C Thermal Rated',
      badgeIcon: <Thermometer size={14} color="#1D70F5" />,
      image: '/assets/images/heat-resistant-glass.png',
      watermark: ['HEAT RESISTANT', 'THERMAL SHIELD', 'MIRROR REFLECTION'],
      title: 'Heat-Resistant Glass & Mirrors',
      desc: 'High-temperature thermal shock resistant glass and premium zero-distortion mirrors engineered for fireplaces, kitchens, and architectural interiors.',
      btnColor: '#1D70F5',
      boxIconColor: '#1D70F5'
    },
    {
      id: 'glass-installation',
      type: 'INSTALLATION',
      typeBg: '#0EA5E9',
      badge: 'Turnkey Execution',
      badgeIcon: <ShieldCheck size={14} color="#0EA5E9" />,
      image: '/assets/images/glass-installation.png',
      watermark: ['PRECISION FIT', 'STRUCTURAL GLAZING', 'SAFETY COMPLIANT'],
      title: 'Architectural Glass Installation',
      desc: 'Turnkey structural glazing, curtain wall fitting, spider glass systems, and custom interior mirror mounting by certified structural engineers.',
      btnColor: '#0EA5E9',
      boxIconColor: '#0EA5E9'
    }
  ];

  return (
    <section
      style={{
        position: 'relative',
        padding: '5rem 1.5rem',
        background: 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)',
        color: '#0F172A',
        fontFamily: "'Inter', sans-serif",
        overflow: 'hidden'
      }}
    >
      {/* Background Architectural Subtle Pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(226, 232, 240, 0.6) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

        {/* Top Header Row with Left/Right Watermark Accents */}
        <div style={{ position: 'relative', textAlign: 'center', marginBottom: '3.5rem' }}>

          {/* Vertical Stacked Watermark Text (Left) */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '0.2rem',
              color: '#CBD5E1',
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.22em',
              lineHeight: 1.4,
              textAlign: 'left',
              userSelect: 'none'
            }}
            className="hidden md:flex"
          >
            <span>GLASS</span>
            <span>PLYWOOD</span>
            <span>SPACES</span>
            <span>BETTER</span>
          </div>



          {/* Sub-header text with horizontal lines */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.85rem',
              color: '#B45309',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem'
            }}
          >
            <span style={{ display: 'inline-block', width: '32px', height: '1px', background: '#D97706' }} />
            ARCHITECTURAL MATERIAL EXCELLENCE
            <span style={{ display: 'inline-block', width: '32px', height: '1px', background: '#D97706' }} />
          </div>

          {/* Main Title */}
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 3.25rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              color: '#0F172A',
              margin: '0 0 1rem 0',
              lineHeight: 1.15
            }}
          >
            ENGINEERED <span style={{ color: '#1D70F5' }}>GLASS SOLUTIONS</span>
          </h2>

          {/* Subtitle */}
          <p
            style={{
              color: '#475569',
              fontSize: '1.0625rem',
              lineHeight: 1.6,
              maxWidth: '680px',
              margin: '0 auto',
              fontWeight: 400
            }}
          >
            Explore high-performance glass solutions and marine-grade plywood crafted for modern architecture, with unmatched durability, safety and aesthetics.
          </p>
        </div>

        {/* 3 Material Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '3.5rem'
          }}
        >
          {materials.map((m) => (
            <div
              key={m.id}
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03)';
              }}
            >
              {/* Card Image Area */}
              <div style={{ position: 'relative', height: '230px', overflow: 'hidden', background: '#F1F5F9' }}>
                <img
                  src={m.image}
                  alt={m.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                />

                {/* Left Badge (GLASS / PLYWOOD) */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: m.typeBg,
                    color: '#FFFFFF',
                    padding: '0.35rem 0.9rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    letterSpacing: '0.06em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                  }}
                >
                  <Layers size={14} color="#FFFFFF" />
                  <span>{m.type}</span>
                </div>

                {/* Right Badge (Standard / Spec) */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(255, 255, 255, 0.95)',
                    color: '#0F172A',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    backdropFilter: 'blur(4px)'
                  }}
                >
                  {m.badgeIcon}
                  <span>{m.badge}</span>
                </div>

                {/* Image Overlay Watermark (Bottom Right Text) */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1.25rem',
                    textAlign: 'right',
                    color: '#FFFFFF',
                    textShadow: '0 2px 8px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.9)',
                    fontSize: '0.6875rem',
                    fontWeight: 900,
                    letterSpacing: '0.12em',
                    lineHeight: 1.35,
                    pointerEvents: 'none',
                    userSelect: 'none'
                  }}
                >
                  {m.watermark.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.75rem 1.75rem 1.5rem 1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.625rem', lineHeight: 1.25 }}>
                  {m.title}
                </h3>
                <p style={{ color: '#64748B', fontSize: '0.90625rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {m.desc}
                </p>

                {/* Action Buttons Row */}
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto' }}>
                  <Link
                    to="/products"
                    style={{
                      flex: 1,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1rem',
                      borderRadius: '9999px',
                      background: m.btnColor,
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: '0.8125rem',
                      textDecoration: 'none',
                      boxShadow: `0 4px 14px ${m.btnColor}40`,
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.92'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
                  >
                    <span>View Specifications</span>
                    <ArrowRight size={14} />
                  </Link>

                  <button
                    onClick={() => addItem({ id: m.id, name: m.title, type: m.type })}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      padding: '0.75rem 1.1rem',
                      borderRadius: '9999px',
                      border: '1px solid #E2E8F0',
                      background: '#FFFFFF',
                      color: '#0F172A',
                      fontWeight: 700,
                      fontSize: '0.8125rem',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#F8FAFC';
                      e.currentTarget.style.borderColor = '#CBD5E1';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#FFFFFF';
                      e.currentTarget.style.borderColor = '#E2E8F0';
                    }}
                  >
                    <Box size={14} color={m.boxIconColor} />
                    <span>Request Sample</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Bar */}
        <div
          style={{
            borderTop: '1px solid #E2E8F0',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem'
          }}
        >
          {/* Key Trust Signals Row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '1.25rem',
              color: '#475569',
              fontSize: '0.8125rem',
              fontWeight: 700
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Gem size={15} color="#64748B" />
              <span>Premium Quality</span>
            </div>
            <span style={{ color: '#CBD5E1' }}>|</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Leaf size={15} color="#64748B" />
              <span>Sustainable Materials</span>
            </div>
            <span style={{ color: '#CBD5E1' }}>|</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Settings size={15} color="#64748B" />
              <span>Architect Approved</span>
            </div>
            <span style={{ color: '#CBD5E1' }}>|</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={15} color="#64748B" />
              <span>Trusted & Certified</span>
            </div>
          </div>

          {/* Right Tagline */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: '#94A3B8',
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase'
            }}
          >
            <span style={{ display: 'inline-block', width: '32px', height: '1px', background: '#CBD5E1' }} />
            MATERIALS FOR A BETTER TOMORROW
          </div>
        </div>

      </div>
    </section>
  );
}
