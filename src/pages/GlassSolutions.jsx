import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Box,
  Layers,
  Sun,
  Maximize2,
  Award,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Shield,
  Eye
} from 'lucide-react';
import { useSampleCart } from '../context/SampleCartContext';
import FAQSection from '../components/home/FAQSection';

export default function GlassSolutions() {
  const { addItem } = useSampleCart();

  const services = [
    {
      id: 'toughened-glass',
      title: '1. Toughened Glass',
      tagline: 'Strong & Durable Safety Glass in Trivandrum',
      desc: 'Strong and durable safety glass suitable for residential, commercial and architectural applications. Engineered to withstand high mechanical impact and thermal stress.',
      apps: ['Doors', 'Partitions', 'Shower enclosures', 'Railings', 'Office spaces', 'Interior applications'],
      image: '/assets/images/toughened-glass.png',
      spec: 'IS 2553 & EN 12150 Certified'
    },
    {
      id: 'glass-doors',
      title: '2. Glass Doors',
      tagline: 'Modern Frameless & Toughened Glass Doors',
      desc: 'Modern glass doors designed to create an elegant entrance while allowing natural light and visual openness across interior and exterior transitions.',
      apps: ['Frameless glass doors', 'Toughened glass doors', 'Office glass doors', 'Commercial glass doors', 'Shower doors', 'Custom glass doors'],
      image: '/assets/images/glass-products.png',
      spec: 'Custom CNC Hinge & Lock Fittings'
    },
    {
      id: 'glass-partitions',
      title: '3. Glass Partitions',
      tagline: 'Office & Commercial Glass Partitions in Trivandrum',
      desc: 'Create modern and functional spaces with glass partitions for homes, offices and commercial environments, maximizing daylight and aesthetic flow.',
      apps: ['Corporate offices', 'Meeting rooms', 'Reception areas', 'Showrooms', 'Homes', 'Commercial interiors'],
      image: '/assets/images/laminated-glass.png',
      spec: 'Frameless & Sleek Aluminium Profiles'
    },
    {
      id: 'glass-railings',
      title: '4. Glass Railings',
      tagline: 'Balcony & Staircase Glass Railing Systems',
      desc: 'Modern glass railing systems that provide safety without blocking views. Precision-installed for structural durability and clean visual elegance.',
      apps: ['Staircases', 'Balconies', 'Terraces', 'Commercial buildings', 'Residential projects'],
      image: '/assets/images/curved-glass.png',
      spec: 'SGP & Heavy-Duty Base Shoe Systems'
    },
    {
      id: 'glass-facades',
      title: '5. Glass Facades & Glazing',
      tagline: 'Architectural Building Facades & Structural Glazing',
      desc: 'Architectural glazing solutions that enhance the appearance of modern buildings while creating bright and visually open spaces with solar and thermal control.',
      apps: ['Commercial building facades', 'Curtain walls', 'Structural glazing', 'Showroom fronts'],
      image: '/assets/images/glass-skyscraper.png',
      spec: 'High VLT & Low-E Solar Performance'
    },
    {
      id: 'shower-enclosures',
      title: '6. Shower Enclosures',
      tagline: 'Frameless & Sliding Glass Shower Enclosures',
      desc: 'Elegant glass shower enclosures designed for modern bathrooms, offering watertight seals and stain-resistant glass surface coatings.',
      apps: ['Frameless shower enclosures', 'Sliding glass showers', 'Hinged shower enclosures', 'Custom shower glass'],
      image: '/assets/images/toughened-glass.png',
      spec: '8-10mm Safety Toughened Glass'
    },
    {
      id: 'laminated-glass',
      title: '7. Laminated Glass',
      tagline: 'Acoustic & High-Security Laminated Glass',
      desc: 'Laminated glass solutions designed where enhanced safety, security and acoustic sound dampening performance are important.',
      apps: ['Acoustic partitions', 'Overhead glazing', 'Security storefronts', 'Soundproof office windows'],
      image: '/assets/images/laminated-glass.png',
      spec: 'Up to 44 dB Sound Reduction'
    },
    {
      id: 'double-glazing',
      title: '8. Double Glazing / Insulated Glass',
      tagline: 'Energy-Efficient Double & Triple Glazed Units',
      desc: 'Insulated glazing solutions designed to improve indoor comfort and energy performance while maintaining modern architectural aesthetics.',
      apps: ['HVAC energy reduction', 'Thermal barrier windows', 'Commercial curtain walls', 'Luxury residences'],
      image: '/assets/images/insulated-glass.png',
      spec: 'Argon Filled & Low-E Double Sealed'
    },
    {
      id: 'glass-canopies',
      title: '9. Glass Canopies',
      tagline: 'Contemporary Exterior Glass Canopies',
      desc: 'Contemporary overhead glass canopy solutions engineered for weather protection while preserving natural light over building entryways.',
      apps: ['Building entrances', 'Commercial spaces', 'Residential properties', 'Walkways'],
      image: '/assets/images/curved-glass.png',
      spec: 'Toughened Laminated Overhead Rated'
    },
    {
      id: 'mirrors-decorative',
      title: '10. Mirrors & Decorative Glass',
      tagline: 'Custom Interior Mirrors & Decorative Glass',
      desc: 'Custom glass and mirror solutions for residential and commercial interiors, adding depth, ambient reflection, and artistic sophistication.',
      apps: ['Bedrooms', 'Bathrooms', 'Living rooms', 'Showrooms', 'Hotels', 'Offices', 'Retail interiors'],
      image: '/assets/images/decorative-plywood.png',
      spec: 'Copper-Free High Definition Mirrors'
    }
  ];

  return (
    <div style={{ background: '#04070D', color: '#F8FAFC', overflowX: 'hidden' }}>

      {/* Hero Section */}
      <section style={{ padding: '6rem 1.5rem 4.5rem 1.5rem', background: '#080C14', borderBottom: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ color: '#60A5FA', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem' }}>
            TRIVANDRUM GLASS • TRIVANDRUM KERALA
          </div>
          <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#FFFFFF', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            OUR GLASS & <span style={{ color: '#60A5FA' }}>ARCHITECTURAL SOLUTIONS</span>
          </h1>
          <p style={{ color: '#94A3B8', fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.7, maxWidth: '820px', margin: '0 auto' }}>
            Explore our comprehensive architectural glass solutions for residential, commercial and infrastructure projects — manufactured and distributed all over South India (Kerala, Tamil Nadu, Karnataka, Andhra Pradesh, and Telangana).
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(37, 99, 235, 0.15)', border: '1px solid rgba(96, 165, 250, 0.3)', padding: '0.4rem 1.25rem', borderRadius: '9999px', color: '#93C5FD', fontSize: '0.8125rem', fontWeight: 800, marginTop: '1.25rem' }}>
            <span>📦 Distributing All Over South India: Kerala • Tamil Nadu • Karnataka • Andhra Pradesh • Telangana</span>
          </div>
        </div>
      </section>

      {/* 10 Services List */}
      <section style={{ padding: '5rem 1.5rem', background: '#04070D' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
            {services.map((s) => (
              <div
                key={s.id}
                className="glass-card-3d specular-sheen"
                style={{
                  borderRadius: '20px',
                  background: 'rgba(15, 23, 42, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between'
                }}
              >
                <div>
                  <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                    <img src={s.image} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '0.75rem',
                        left: '0.75rem',
                        background: 'rgba(8, 12, 20, 0.85)',
                        border: '1px solid rgba(96, 165, 250, 0.3)',
                        padding: '0.35rem 0.85rem',
                        borderRadius: '9999px',
                        fontSize: '0.6875rem',
                        fontWeight: 800,
                        color: '#60A5FA',
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      {s.spec}
                    </div>
                  </div>

                  <div style={{ padding: '1.75rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#34D399', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.375rem' }}>
                      {s.tagline}
                    </div>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#F8FAFC', marginBottom: '0.875rem', lineHeight: 1.25 }}>
                      {s.title}
                    </h2>
                    <p style={{ color: '#94A3B8', fontSize: '0.9375rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                      {s.desc}
                    </p>

                    <div style={{ marginBottom: '1.25rem' }}>
                      <div style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                        Ideal Applications:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                        {s.apps.map((app, idx) => (
                          <span
                            key={idx}
                            style={{
                              background: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              color: '#CBD5E1',
                              padding: '0.25rem 0.625rem',
                              borderRadius: '6px',
                              fontSize: '0.75rem',
                              fontWeight: 700
                            }}
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ padding: '0 1.75rem 1.75rem 1.75rem', display: 'flex', gap: '0.75rem' }}>
                  <Link
                    to="/contact"
                    style={{
                      flex: 1,
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                      color: '#FFFFFF',
                      fontWeight: 800,
                      fontSize: '0.75rem',
                      letterSpacing: '0.04em',
                      textDecoration: 'none',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.375rem'
                    }}
                  >
                    <span>REQUEST QUOTE</span>
                    <ArrowRight size={14} />
                  </Link>
                  <button
                    onClick={() => addItem({ id: s.id, name: s.title, type: 'GLASS' })}
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(255, 255, 255, 0.18)',
                      background: 'rgba(255, 255, 255, 0.06)',
                      color: '#F8FAFC',
                      fontWeight: 800,
                      fontSize: '0.75rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.375rem'
                    }}
                  >
                    <Box size={14} color="#60A5FA" />
                    <span>SAMPLE</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Local SEO Section */}
      <FAQSection showQuickAnswer={true} background="#080C14" />
    </div>
  );
}
