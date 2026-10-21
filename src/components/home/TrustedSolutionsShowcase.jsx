import React from 'react';
import { Link } from 'react-router-dom';
import {
  Gem,
  ShieldCheck,
  Wrench,
  Truck,
  Headphones,
  Layers,
  Settings,
  ArrowRight,
  Home as HomeIcon,
  Building2,
  Factory,
  Landmark
} from 'lucide-react';


export default function TrustedSolutionsShowcase() {
  const topFeatures = [
    {
      icon: <Gem size={20} color="#38BDF8" />,
      title: 'PREMIUM QUALITY',
      desc: 'Superior finish & ISO standards'
    },
    {
      icon: <ShieldCheck size={20} color="#38BDF8" />,
      title: 'DURABLE & RELIABLE',
      desc: '100% BWP & toughened safety'
    },
    {
      icon: <Wrench size={20} color="#38BDF8" />,
      title: 'EXPERT FITTING',
      desc: 'Professional installation team'
    },
    {
      icon: <Truck size={20} color="#38BDF8" />,
      title: 'SOUTH INDIA DISTRIBUTION',
      desc: 'Direct supply across 5 southern states'
    },
    {
      icon: <Headphones size={20} color="#38BDF8" />,
      title: 'DEDICATED SUPPORT',
      desc: '24/7 technical consultation'
    }
  ];

  const pillarCards = [
    {
      icon: <Layers size={18} color="#38BDF8" />,
      title: 'Quality Glass',
      desc: 'High-performance toughened, laminated & acoustic glazing tailored for modern aesthetics.'
    },
    {
      icon: <Settings size={18} color="#38BDF8" />,
      title: 'Precision Engineering',
      desc: 'State-of-the-art CNC processing, exact tolerances and rigorous safety testing standards.'
    },
    {
      icon: <ShieldCheck size={18} color="#38BDF8" />,
      title: 'Professional Installation',
      desc: 'Certified installation engineering guaranteeing structural safety and flawless finishing.'
    }
  ];

  const categories = [
    { icon: <HomeIcon size={16} color="#38BDF8" />, label: 'RESIDENTIAL' },
    { icon: <Building2 size={16} color="#38BDF8" />, label: 'COMMERCIAL' },
    { icon: <Factory size={16} color="#38BDF8" />, label: 'INDUSTRIAL' },
    { icon: <Landmark size={16} color="#38BDF8" />, label: 'INSTITUTIONAL' }
  ];

  const stats = [
    { val: '10+', label: 'YEARS OF TRUST' },
    { val: '500+', label: 'PROJECTS COMPLETED' },
    { val: '100%', label: 'CLIENT SATISFACTION' }
  ];

  return (
    <section
      style={{
        padding: '3rem 1.5rem 4rem 1.5rem',
        background: '#04070D',
        position: 'relative',
        color: '#F8FAFC',
        fontFamily: "'Inter', sans-serif"
      }}
    >
      <style>{`
        .top-trust-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
        }
        @media (max-width: 1024px) {
          .top-trust-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .top-trust-cell {
            border-bottom: 1px solid rgba(255,255,255,0.08);
            padding: 0.85rem !important;
          }
        }
        @media (max-width: 640px) {
          .top-trust-grid {
            grid-template-columns: 1fr;
          }
        }
        
        .main-showcase-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
        }
        @media (max-width: 1024px) {
          .main-showcase-grid {
            grid-template-columns: 1fr;
          }
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        @media (max-width: 768px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div style={{ maxWidth: '1380px', margin: '0 auto' }}>

        {/* TOP FEATURE / TRUST BAR (5 Items) */}
        <div
          style={{
            background: 'rgba(6, 12, 24, 0.85)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(16px)',
            marginBottom: '2rem',
            overflow: 'hidden'
          }}
        >
          <div className="top-trust-grid">
            {topFeatures.map((item, idx) => (
              <div
                key={idx}
                className="top-trust-cell"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '1.15rem 1.25rem',
                  borderRight: idx < topFeatures.length - 1 ? '1px solid rgba(255, 255, 255, 0.08)' : 'none'
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(14, 165, 233, 0.12)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: '0.75rem',
                      color: '#F8FAFC',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase'
                    }}
                  >
                    {item.title}
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: '#94A3B8', marginTop: '2px', lineHeight: 1.3 }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MAIN SHOWCASE CONTAINER */}
        <div
          style={{
            background: 'linear-gradient(135deg, #050B16 0%, #0A1326 60%, #060D1D 100%)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            borderRadius: '26px',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 50px rgba(14, 165, 233, 0.08)',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <div className="main-showcase-grid">

            {/* LEFT CONTENT COLUMN */}
            <div style={{ padding: '3rem 2.5rem 2.5rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                {/* Sub-header */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    color: '#38BDF8',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    marginBottom: '1rem'
                  }}
                >
                  <span style={{ display: 'inline-block', width: '28px', height: '2px', background: '#38BDF8' }} />
                  TRUSTED ARCHITECTURAL SOLUTIONS
                </div>

                {/* Main Heading */}
                <h2
                  style={{
                    fontSize: 'clamp(2rem, 3.5vw, 3.25rem)',
                    fontWeight: 900,
                    color: '#FFFFFF',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.15,
                    marginBottom: '1.25rem'
                  }}
                >
                  Premium Glass Solutions <br />
                  for <span style={{ color: '#38BDF8' }}>Modern Spaces</span>
                </h2>

                {/* Description */}
                <p
                  style={{
                    color: '#94A3B8',
                    fontSize: '0.95rem',
                    lineHeight: 1.65,
                    maxWidth: '560px',
                    marginBottom: '2rem',
                    fontWeight: 400
                  }}
                >
                  Delivering certified safety glass, custom architectural glazing, and structural plywood all over South India for residential and commercial projects.
                </p>

                {/* 3 Pillar Cards Row */}
                <div className="pillars-grid" style={{ marginBottom: '2rem' }}>
                  {pillarCards.map((p, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: 'rgba(15, 23, 42, 0.65)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '16px',
                        padding: '1.15rem 1rem',
                        backdropFilter: 'blur(10px)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
                        e.currentTarget.style.background = 'rgba(15, 23, 42, 0.85)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                        e.currentTarget.style.background = 'rgba(15, 23, 42, 0.65)';
                      }}
                    >
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '10px',
                          background: 'rgba(14, 165, 233, 0.15)',
                          border: '1px solid rgba(56, 189, 248, 0.25)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '0.75rem'
                        }}
                      >
                        {p.icon}
                      </div>
                      <h3 style={{ fontSize: '0.9375rem', fontWeight: 800, color: '#F8FAFC', margin: '0 0 0.35rem 0' }}>
                        {p.title}
                      </h3>
                      <p style={{ fontSize: '0.75rem', color: '#94A3B8', lineHeight: 1.45, margin: 0 }}>
                        {p.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons Row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                <Link
                  to="/services-process"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.8rem 1.75rem',
                    borderRadius: '9999px',
                    background: 'linear-gradient(135deg, #0066FF 0%, #38BDF8 100%)',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 20px rgba(14, 165, 233, 0.4)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <span>Our Process</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/about"
                  style={{
                    color: '#F8FAFC',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    borderBottom: '2px solid #38BDF8',
                    paddingBottom: '2px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#38BDF8'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#F8FAFC'; }}
                >
                  Learn More About Us
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE & STATS COLUMN */}
            <div style={{ position: 'relative', minHeight: '380px', display: 'flex', flexDirection: 'column' }}>

              {/* Background Architectural Glass Villa Image */}
              <div style={{ position: 'relative', flex: 1, width: '100%', overflow: 'hidden' }}>
                <img
                  src="/assets/images/trusted-solutions-villa.jpg"
                  alt="Modern Glass Architectural Villa"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />






                {/* FAR RIGHT STATS COLUMN (Positioned over the right edge) */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: '130px',
                    background: 'rgba(5, 11, 22, 0.75)',
                    backdropFilter: 'blur(12px)',
                    borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justify: 'space-around',
                    alignItems: 'center',
                    padding: '1.5rem 0.75rem',
                    textAlign: 'center'
                  }}
                >
                  {stats.map((s, idx) => (
                    <div
                      key={idx}
                      style={{
                        width: '100%',
                        borderBottom: idx < stats.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                        paddingBottom: idx < stats.length - 1 ? '1rem' : '0'
                      }}
                    >
                      <div
                        style={{
                          fontSize: '1.75rem',
                          fontWeight: 900,
                          color: '#38BDF8',
                          lineHeight: 1,
                          marginBottom: '0.35rem'
                        }}
                      >
                        {s.val}
                      </div>
                      <div
                        style={{
                          fontSize: '0.625rem',
                          color: '#CBD5E1',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          lineHeight: 1.3
                        }}
                      >
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* BOTTOM CATEGORY & TAGLINE BAR */}
              <div
                style={{
                  background: 'rgba(5, 11, 22, 0.95)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '0.85rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}
              >
                {/* Categories */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                  {categories.map((c, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.6875rem',
                        fontWeight: 800,
                        color: '#F8FAFC',
                        letterSpacing: '0.06em'
                      }}
                    >
                      {c.icon}
                      <span>{c.label}</span>
                    </div>
                  ))}
                </div>

                {/* Right Tagline */}
                <div
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 800,
                    color: '#38BDF8',
                    letterSpacing: '0.12em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <span style={{ width: '20px', height: '1px', background: '#38BDF8', display: 'inline-block' }} />
                  CLEAR SOLUTIONS BRIGHTER TOMORROWS
                  <span style={{ width: '20px', height: '1px', background: '#38BDF8', display: 'inline-block' }} />
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
