import React from 'react';
import { Award, ShieldCheck, Wrench, Truck, Headphones } from 'lucide-react';

export default function FeatureStrip() {
  const features = [
    { icon: <Award size={22} color="#60A5FA" />, title: 'PREMIUM QUALITY', desc: 'Superior finish & ISO standards' },
    { icon: <ShieldCheck size={22} color="#F59E0B" />, title: 'DURABLE & RELIABLE', desc: '100% BWP & toughened safety' },
    { icon: <Wrench size={22} color="#34D399" />, title: 'EXPERT FITTING', desc: 'Professional installation team' },
    { icon: <Truck size={22} color="#A78BFA" />, title: 'ALL SOUTH INDIA DELIVERY', desc: 'Direct supply across 5 southern states' },
    { icon: <Headphones size={22} color="#F43F5E" />, title: 'DEDICATED SUPPORT', desc: '24/7 technical consultation' },
  ];

  return (
    <div
      className="feature-strip-wrap"
      style={{
        position: 'relative',
        zIndex: 30,
        marginTop: '3.5rem', // Separated from hero animation (NO OVERLAP)
        marginBottom: '3rem',
        paddingInline: 'clamp(1rem, 4vw, 3.5rem)',
      }}
    >
      <style>{`
        .feature-strip-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0;
        }
        @media (max-width: 1100px) {
          .feature-strip-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }
          .feature-cell {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.08) !important;
            padding-bottom: 1rem !important;
          }
        }
        @media (max-width: 640px) {
          .feature-strip-grid {
            grid-template-columns: 1fr;
            gap: 0.875rem;
          }
        }
      `}</style>

      <div
        style={{
          maxWidth: '1380px',
          marginInline: 'auto',
          background: 'rgba(8, 12, 20, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.14)',
          boxShadow: '0 20px 45px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
          padding: '1.25rem 1.5rem',
        }}
      >
        <div className="feature-strip-grid">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="feature-cell"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.875rem',
                paddingInline: '1rem',
                borderRight: idx < features.length - 1 ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.75rem', color: '#F8FAFC', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
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
    </div>
  );
}
