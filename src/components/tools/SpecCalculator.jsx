import React from 'react';
import {
  Building2,
  Landmark,
  Cpu,
  Layers,
  Compass,
  Briefcase,
  Gem,
  Sofa,
  Stethoscope,
  Wrench,
  Sparkles,
  Award,
  Package,
  Lightbulb,
  Factory,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function SpecCalculator() {
  const row1Distributors = [
    { name: 'Alakapuri Convention Centre Pvt Ltd', code: 'ACC', icon: <Landmark size={22} />, color: '#60A5FA', category: 'Convention & Commercial' },
    { name: 'Alpha Minerals & Chemicals', logo: '/images/partners/image12.png', code: 'AMC', icon: <Cpu size={22} />, color: '#34D399', category: 'Chemicals & Processing' },
    { name: 'Alpha Minerals', logo: '/images/partners/image13.png', code: 'AM', icon: <Layers size={22} />, color: '#FBBF24', category: 'Mineral Products' },
    { name: 'Amish Interior Consultants Pvt Ltd', logo: '/images/partners/image14.png', code: 'AIC', icon: <Compass size={22} />, color: '#A78BFA', category: 'Interior Design' },
    { name: 'Annai Infra Developers Ltd', logo: '/images/partners/image15.png', code: 'AID', icon: <Building2 size={22} />, color: '#F472B6', category: 'Infrastructure' },
    { name: 'Arcotech', code: 'ARC', icon: <Briefcase size={22} />, color: '#38BDF8', category: 'Architecture & Construction' },
    { name: 'Benoy Marbles', logo: '/images/partners/image17.png', code: 'BM', icon: <Gem size={22} />, color: '#E879F9', category: 'Marbles & Natural Stone' },
    { name: 'Bharath Furniture', logo: '/images/partners/image18.png', code: 'BF', icon: <Sofa size={22} />, color: '#F97316', category: 'Architectural Furniture' },
    { name: 'Chothys', logo: '/images/partners/image19.png', code: 'CHO', icon: <Landmark size={22} />, color: '#60A5FA', category: 'Real Estate Development' },
    { name: 'Cordial Properties India Pvt Ltd', logo: '/images/partners/image20.png', code: 'CPI', icon: <Building2 size={22} />, color: '#34D399', category: 'Commercial Properties' },
    { name: 'CDFC Hospital', logo: '/images/partners/image21.png', code: 'CDFC', icon: <Stethoscope size={22} />, color: '#EF4444', category: 'Healthcare Facility' },
    { name: 'Cosmopolitan Hospital', logo: '/images/partners/image22.png', code: 'CH', icon: <Stethoscope size={22} />, color: '#F43F5E', category: 'Healthcare Facility' },
    { name: 'GG Hospital', logo: '/images/partners/image23.png', code: 'GGH', icon: <Stethoscope size={22} />, color: '#EC4899', category: 'Super Specialty Hospital' },
    { name: 'Sree Dhanya Construction', logo: '/images/partners/image24.png', code: 'SDC', icon: <Wrench size={22} />, color: '#F59E0B', category: 'Civil Contracting' },
    { name: 'MLOFT', logo: '/images/partners/image25.png', code: 'ML', icon: <Sparkles size={22} />, color: '#8B5CF6', category: 'Modern Architecture' },
    { name: 'Lions Gym', code: 'LG', icon: <Award size={22} />, color: '#10B981', category: 'Commercial Fitness' },
    { name: 'SKP Traders', code: 'SKP', icon: <Package size={22} />, color: '#06B6D4', category: 'Material Distribution' },
    { name: 'Sky Light Homes', code: 'SLH', icon: <Lightbulb size={22} />, color: '#FBBF24', category: 'Premium Housing' },
  ];

  const row2Distributors = [
    { name: 'City Traders Prompt UPVC', logo: '/images/partners/image1.png', code: 'CTP', icon: <Layers size={22} />, color: '#60A5FA', category: 'UPVC Glazing Systems' },
    { name: 'Mass Aluminium', logo: '/images/partners/image2.png', code: 'MA', icon: <Factory size={22} />, color: '#94A3B8', category: 'Aluminium Fabrication' },
    { name: 'Heather Construction', logo: '/images/partners/image3.png', code: 'HC', icon: <Building2 size={22} />, color: '#38BDF8', category: 'Turnkey Construction' },
    { name: 'Heather Homes', logo: '/images/partners/image4.png', code: 'HH', icon: <Landmark size={22} />, color: '#34D399', category: 'Luxury Residences' },
    { name: 'Heather Infrastructure', code: 'HI', icon: <Wrench size={22} />, color: '#F59E0B', category: 'Heavy Infrastructure' },
    { name: 'Thomson Furniture', logo: '/images/partners/image5.png', code: 'TF', icon: <Sofa size={22} />, color: '#F97316', category: 'Interior Fitouts' },
    { name: 'Ind Royals', logo: '/images/partners/image6.png', code: 'IR', icon: <Sofa size={22} />, color: '#A78BFA', category: 'Custom Furniture' },
    { name: 'Barunga Industry', code: 'BI', icon: <Factory size={22} />, color: '#EF4444', category: 'Industrial Supplies' },
    { name: 'Flytech Industries', logo: '/images/partners/image7.png', code: 'FI', icon: <Cpu size={22} />, color: '#06B6D4', category: 'Precision Engineering' },
    { name: 'Hitech Aluminium', logo: '/images/partners/image8.png', code: 'HA', icon: <Factory size={22} />, color: '#E879F9', category: 'Facade Systems' },
    { name: 'Popular Aluminium', code: 'PA', icon: <Factory size={22} />, color: '#60A5FA', category: 'Extrusion & Windows' },
    { name: 'Instyle Decorators', code: 'ID', icon: <Sparkles size={22} />, color: '#F472B6', category: 'Interior Aesthetics' },
    { name: 'A.S Care Homes Pvt Ltd', logo: '/images/partners/image9.png', code: 'ASC', icon: <Stethoscope size={22} />, color: '#10B981', category: 'Healthcare Infra' },
    { name: 'Arjan Groups', code: 'AG', icon: <Compass size={22} />, color: '#8B5CF6', category: 'Architectural Studio' },
    { name: 'Lakshmi Electricals', code: 'LE', icon: <Lightbulb size={22} />, color: '#FBBF24', category: 'Architectural Lighting' },
    { name: 'Perfect Interior', code: 'PI', icon: <Compass size={22} />, color: '#38BDF8', category: 'Interior Contracting' },
    { name: 'Adrak Engineering and Construction India Pvt Ltd', logo: '/images/partners/image11.png', code: 'AEC', icon: <Wrench size={22} />, color: '#F59E0B', category: 'EPC Construction' },
  ];

  // Tripled arrays for infinite smooth 100% seamless marquee scroll loop
  const row1Triple = [...row1Distributors, ...row1Distributors, ...row1Distributors];
  const row2Triple = [...row2Distributors, ...row2Distributors, ...row2Distributors];

  return (
    <section
      id="distributors-marquee"
      style={{
        background: '#FFFFFF',
        padding: '5.5rem 0',
        position: 'relative',
        overflow: 'hidden',
        color: '#0F172A',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
        fontFamily: "'Inter', sans-serif"
      }}
    >
      <style>{`
        @keyframes marqueeScrollLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.3333%); }
        }

        @keyframes marqueeScrollRight {
          0% { transform: translateX(-33.3333%); }
          100% { transform: translateX(0%); }
        }

        .marquee-track-left {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: marqueeScrollLeft 120s linear infinite;
          will-change: transform;
        }

        .marquee-track-right {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: marqueeScrollRight 120s linear infinite;
          will-change: transform;
        }

        .distributor-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 1.15rem 1.6rem;
          display: flex;
          align-items: center;
          gap: 1.1rem;
          min-width: 310px;
          max-width: 380px;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .distributor-card:hover {
          background: #F8FAFC;
          border-color: #3B82F6;
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 12px 28px rgba(29, 78, 216, 0.12);
        }

        .edge-fade-left {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 140px;
          background: linear-gradient(to right, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
          z-index: 10;
          pointer-events: none;
        }

        .edge-fade-right {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 140px;
          background: linear-gradient(to left, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
          z-index: 10;
          pointer-events: none;
        }
      `}</style>

      {/* Edge Gradient Shadows */}
      <div className="edge-fade-left" />
      <div className="edge-fade-right" />

      {/* Section Header */}
      <div style={{ maxWidth: '1240px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            background: '#EFF6FF',
            border: '1px solid #BFDBFE',
            padding: '0.45rem 1.25rem',
            borderRadius: '9999px',
            color: '#1D4ED8',
            fontSize: '0.78125rem',
            fontWeight: 800,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}
        >
          <ShieldCheck size={16} color="#1D4ED8" />
          <span>PAN-SOUTH INDIA DISTRIBUTION NETWORK</span>
        </div>

        <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 900, textTransform: 'uppercase', color: '#0F172A', letterSpacing: '-0.02em', margin: '0.25rem 0 0.75rem 0' }}>
          Distributing All Over <span style={{ color: '#1D4ED8' }}>South India</span>
        </h2>
        <p style={{ color: '#475569', fontSize: '1rem', maxWidth: '760px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
          We distribute high-performance architectural glass and structural plywood all over South India — partnering with 35+ authorized regional distributors, commercial developers, and engineering powerhouses.
        </p>

        {/* 5 South Indian States Coverage Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem', maxWidth: '820px', margin: '0 auto' }}>
          {[
            { state: 'Kerala', detail: 'HQ & Direct Works' },
            { state: 'Tamil Nadu', detail: 'Regional Supply' },
            { state: 'Karnataka', detail: 'Commercial Hub' },
            { state: 'Andhra Pradesh', detail: 'Coastal & Interior' },
            { state: 'Telangana', detail: 'Metro Distribution' },
          ].map((item, idx) => (
            <span
              key={idx}
              style={{
                background: '#F1F5F9',
                border: '1px solid #E2E8F0',
                color: '#1E293B',
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                letterSpacing: '0.02em'
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563EB' }} />
              <strong>{item.state}</strong>
              <span style={{ color: '#64748B', fontSize: '0.6875rem' }}>({item.detail})</span>
            </span>
          ))}
        </div>
      </div>

      {/* CONTINUOUS MARQUEE CAROUSEL CONTAINER */}
      <div className="marquee-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>

        {/* ROW 1: Scrolling Left */}
        <div style={{ overflow: 'hidden', width: '100%' }}>
          <div className="marquee-track-left">
            {row1Triple.map((item, idx) => (
              <div key={`row1-${idx}`} className="distributor-card">
                {/* Logo / Badge Emblem */}
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: '#FFFFFF',
                    border: `1.5px solid ${item.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: item.color,
                    boxShadow: `0 4px 12px ${item.color}15`,
                    overflow: 'hidden',
                    padding: item.logo ? '6px' : '0'
                  }}
                >
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={item.name}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  ) : (
                    item.icon
                  )}
                </div>

                {/* Info Text */}
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3px' }}>
                    <span
                      style={{
                        fontSize: '0.625rem',
                        fontWeight: 900,
                        background: `${item.color}15`,
                        color: item.color,
                        padding: '2px 6px',
                        borderRadius: '4px',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {item.code}
                    </span>
                    <span style={{ fontSize: '0.6875rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {item.category}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 800,
                      color: '#0F172A',
                      lineHeight: 1.3,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {item.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Scrolling Right */}
        <div style={{ overflow: 'hidden', width: '100%' }}>
          <div className="marquee-track-right">
            {row2Triple.map((item, idx) => (
              <div key={`row2-${idx}`} className="distributor-card">
                {/* Logo / Badge Emblem */}
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: '#FFFFFF',
                    border: `1.5px solid ${item.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: item.color,
                    boxShadow: `0 4px 12px ${item.color}15`,
                    overflow: 'hidden',
                    padding: item.logo ? '6px' : '0'
                  }}
                >
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={item.name}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  ) : (
                    item.icon
                  )}
                </div>

                {/* Info Text */}
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3px' }}>
                    <span
                      style={{
                        fontSize: '0.625rem',
                        fontWeight: 900,
                        background: `${item.color}15`,
                        color: item.color,
                        padding: '2px 6px',
                        borderRadius: '4px',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {item.code}
                    </span>
                    <span style={{ fontSize: '0.6875rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {item.category}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 800,
                      color: '#0F172A',
                      lineHeight: 1.3,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {item.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Counter Bar */}
      <div
        style={{
          marginTop: '3.5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2.5rem',
          flexWrap: 'wrap',
          padding: '0 1.5rem',
          position: 'relative',
          zIndex: 2
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#475569', fontSize: '0.875rem', fontWeight: 600 }}>
          <CheckCircle2 size={18} color="#059669" />
          <span><strong style={{ color: '#0F172A', fontWeight: 800 }}>35+ Authorized</strong> Distributors Across South India</span>
        </div>
        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#CBD5E1' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#475569', fontSize: '0.875rem', fontWeight: 600 }}>
          <CheckCircle2 size={18} color="#2563EB" />
          <span><strong style={{ color: '#0F172A', fontWeight: 800 }}>Pan-South India</strong> Scheduled Freight & Logistics</span>
        </div>
        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#CBD5E1' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#475569', fontSize: '0.875rem', fontWeight: 600 }}>
          <CheckCircle2 size={18} color="#1D4ED8" />
          <span><strong style={{ color: '#0F172A', fontWeight: 800 }}>100% Certified</strong> Architectural Glass & Plywood Supply</span>
        </div>
      </div>
    </section>
  );
}



