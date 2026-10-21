import React, { useState } from 'react';
import { Building2, Layers, ArrowRight, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import TypingText from '../components/common/TypingText';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  // 9 Client Projects requested by user
  const projects = [
    {
      id: 'sandy-resort',
      name: 'SANDY RESORT',
      category: 'HOSPITALITY',
      location: 'Kovalam, Trivandrum',
      image: '/assets/images/sandy_resort.jpg'
    },
    {
      id: 'cdfc-hospital',
      name: 'CDFC HOSPITAL',
      category: 'HEALTHCARE',
      location: 'Medical College Zone, Trivandrum',
      image: '/assets/images/cdfc_hospital.jpg'
    },
    {
      id: 'm-loft',
      name: 'M LOFT',
      category: 'RESIDENTIAL',
      location: 'Kowdiar, Trivandrum',
      image: '/assets/images/m_loft.jpg'
    },
    {
      id: 'saint-gobain',
      name: 'SAINT GOBAIN',
      category: 'COMMERCIAL',
      location: 'Technopark Tech Zone, Trivandrum',
      image: '/assets/images/saint_gobain.jpg'
    },
    {
      id: 'cashify-store',
      name: 'CASHIFY STORE',
      category: 'RETAIL',
      location: 'Lulu Mall, Trivandrum',
      image: '/assets/images/cashify_store.jpg'
    },
    {
      id: 'bewakoof-store',
      name: 'BEWAKOOF STORE',
      category: 'RETAIL',
      location: 'Kazhakkoottam, Trivandrum',
      image: '/assets/images/bewakoof_store.jpg'
    },
    {
      id: 'the-indian-gauge',
      name: 'THE INDIAN GAUGE',
      category: 'COMMERCIAL',
      location: 'Vellayambalam, Trivandrum',
      image: '/assets/images/indian_gauge.jpg'
    },
    {
      id: 'bose',
      name: 'BOSE',
      category: 'RETAIL',
      location: 'Mall of Travancore, Trivandrum',
      image: '/assets/images/bose_store.jpg'
    },
    {
      id: 'gg-pharmacies',
      name: 'GG PHARMACIES',
      category: 'HEALTHCARE',
      location: 'Pattom, Trivandrum',
      image: '/assets/images/gg_pharmacies.jpg'
    }
  ];

  const categories = ['ALL', 'RETAIL', 'COMMERCIAL', 'HOSPITALITY', 'HEALTHCARE', 'RESIDENTIAL'];

  const filteredProjects = projects.filter((p) => {
    return selectedCategory === 'ALL' || p.category === selectedCategory;
  });

  return (
    <div style={{ background: '#FFFFFF', color: '#0F172A', overflowX: 'hidden', minHeight: '100vh' }}>
      
      {/* Hero Section */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 1.5rem clamp(3rem, 6vw, 4.5rem) 1.5rem', background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)', borderBottom: '1px solid #E2E8F0', textAlign: 'center', position: 'relative' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <TypingText
            as="div"
            text="TRIVANDRUM GLASS • FEATURED CLIENT PORTFOLIO"
            speed={75}
            style={{ color: '#1D4ED8', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem' }}
          />
          <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#0F172A', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            <TypingText text="OUR" speed={75} delay={250} showCursor={false} />{' '}
            <TypingText text="COMPLETED PROJECTS" speed={70} delay={600} style={{ color: '#1D4ED8' }} />
          </h1>
          <p style={{ color: '#475569', fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.7, maxWidth: '780px', margin: '0 auto' }}>
            Explore our architectural glass installations executed for prestigious corporate headquarters, retail brands, resorts, hospitals, and luxury residences.
          </p>
        </div>
      </section>

      {/* Filter Bar Section */}
      <section style={{ padding: '2rem 1.5rem', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            {/* Category Filter Pills */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: '0.55rem 1.25rem',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      letterSpacing: '0.05em',
                      border: isActive ? '1px solid #1D4ED8' : '1px solid #E2E8F0',
                      background: isActive ? 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)' : '#FFFFFF',
                      color: isActive ? '#FFFFFF' : '#475569',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      boxShadow: isActive ? '0 4px 14px rgba(29, 78, 216, 0.35)' : '0 2px 6px rgba(0, 0, 0, 0.03)'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = '#EFF6FF';
                        e.currentTarget.style.color = '#1D4ED8';
                        e.currentTarget.style.borderColor = '#BFDBFE';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = '#FFFFFF';
                        e.currentTarget.style.color = '#475569';
                        e.currentTarget.style.borderColor = '#E2E8F0';
                      }
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 9 Projects Grid Section */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem 6rem 1.5rem', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                style={{
                  borderRadius: '20px',
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(29, 78, 216, 0.12)';
                  e.currentTarget.style.borderColor = '#BFDBFE';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                }}
              >
                {/* Image Header with Zoom Hover */}
                <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}>
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }} 
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>

                {/* Card Content */}
                <div style={{ padding: '1.35rem 1.5rem', display: 'flex', flexDirection: 'column', background: '#FFFFFF', gap: '0.35rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#1D4ED8', margin: 0, lineHeight: 1.25, textTransform: 'uppercase' }}>
                      {p.name}
                    </h2>
                    {p.id === 'sandy-resort' && (
                      <Link 
                        to="/gallery?project=sandy-resort" 
                        style={{ 
                          fontSize: '0.75rem', 
                          fontWeight: 800, 
                          color: '#2563EB', 
                          background: '#EFF6FF', 
                          border: '1px solid #BFDBFE',
                          padding: '0.25rem 0.65rem', 
                          borderRadius: '9999px',
                          textDecoration: 'none' 
                        }}
                      >
                        VIEW GALLERY (38) →
                      </Link>
                    )}
                    {p.id === 'cdfc-hospital' && (
                      <Link 
                        to="/gallery?project=cdfc-hospital" 
                        style={{ 
                          fontSize: '0.75rem', 
                          fontWeight: 800, 
                          color: '#2563EB', 
                          background: '#EFF6FF', 
                          border: '1px solid #BFDBFE',
                          padding: '0.25rem 0.65rem', 
                          borderRadius: '9999px',
                          textDecoration: 'none' 
                        }}
                      >
                        VIEW GALLERY (8) →
                      </Link>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

