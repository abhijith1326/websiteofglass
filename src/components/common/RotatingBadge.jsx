import React, { useId } from 'react';

export default function RotatingBadge({ 
  size = 145, 
  text = "★ TRAVANCORE GLASS ★ 65 YEARS OF EXCELLENCE ★ ", 
  number = "65", 
  subtext = "YEARS", 
  variant = "light" 
}) {
  const isDark = variant === 'dark';
  const pathId = useId().replace(/:/g, '');

  return (
    <div
      style={{
        position: 'relative',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        background: isDark 
          ? 'radial-gradient(circle at 30% 30%, rgba(15, 23, 42, 0.95), rgba(8, 12, 20, 0.98))'
          : 'radial-gradient(circle at 30% 30%, #FFFFFF, #F8FAFC)',
        border: isDark 
          ? '1.5px solid rgba(255, 255, 255, 0.2)' 
          : '1.5px solid rgba(29, 78, 216, 0.15)',
        boxShadow: isDark
          ? '0 15px 35px rgba(0, 0, 0, 0.6), 0 0 20px rgba(96, 165, 250, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.3)'
          : '0 16px 40px rgba(29, 78, 216, 0.12), 0 4px 12px rgba(0, 0, 0, 0.06), inset 0 1px 2px rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(16px)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
        overflow: 'visible',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, width 0.3s ease, height 0.3s ease',
      }}
      className="interactive-rotating-badge"
    >
      <style>{`
        @keyframes spinOuterRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes badgePulseGlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .rotating-badge-ring {
          animation: spinOuterRing 18s linear infinite;
          transform-origin: center center;
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
        }
        .interactive-rotating-badge:hover .rotating-badge-ring {
          animation-duration: 8s;
        }
        .interactive-rotating-badge:hover {
          transform: scale(1.04);
          box-shadow: ${isDark 
            ? '0 20px 45px rgba(0, 0, 0, 0.7), 0 0 30px rgba(96, 165, 250, 0.4)' 
            : '0 20px 45px rgba(29, 78, 216, 0.2), 0 6px 18px rgba(0, 0, 0, 0.18)'};
        }

        /* Responsive Mobile Scaling */
        @media (max-width: 768px) {
          .interactive-rotating-badge {
            width: clamp(90px, 22vw, 115px) !important;
            height: clamp(90px, 22vw, 115px) !important;
          }
          .interactive-rotating-badge-number {
            font-size: clamp(26px, 7vw, 36px) !important;
          }
          .interactive-rotating-badge-subtext {
            font-size: clamp(6.5px, 1.8vw, 9px) !important;
          }
        }
        @media (max-width: 480px) {
          .interactive-rotating-badge {
            width: 85px !important;
            height: 85px !important;
          }
          .interactive-rotating-badge-number {
            font-size: 25px !important;
          }
          .interactive-rotating-badge-subtext {
            font-size: 6.5px !important;
          }
        }
      `}</style>

      {/* Outer Subtle Aura Glow Circle */}
      <div 
        style={{
          position: 'absolute',
          inset: '-6px',
          borderRadius: '50%',
          background: isDark
            ? 'conic-gradient(from 0deg, rgba(56, 189, 248, 0.3), rgba(37, 99, 235, 0.1), rgba(56, 189, 248, 0.3))'
            : 'conic-gradient(from 0deg, rgba(29, 78, 216, 0.25), rgba(217, 119, 6, 0.15), rgba(29, 78, 216, 0.25))',
          zIndex: -1,
          filter: 'blur(8px)',
          animation: 'badgePulseGlow 4s ease-in-out infinite'
        }}
      />

      {/* Decorative Inner Ring */}
      <div 
        style={{
          position: 'absolute',
          inset: '8px',
          borderRadius: '50%',
          border: isDark ? '1px dashed rgba(255, 255, 255, 0.15)' : '1px dashed rgba(29, 78, 216, 0.2)',
          pointerEvents: 'none',
        }}
      />

      {/* Rotating SVG Text Ring with Stars Framing Both Front & Back */}
      <div className="rotating-badge-ring">
        <svg
          viewBox="0 0 160 160"
          style={{
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
          }}
        >
          <path
            id={pathId}
            d="M 80, 80 m -58, 0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0"
            fill="none"
          />
          <text
            fill={isDark ? '#93C5FD' : '#1D4ED8'}
            fontSize="10.5"
            fontWeight="800"
            letterSpacing="2.2px"
            style={{ textTransform: 'uppercase' }}
          >
            <textPath href={`#${pathId}`} startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center Fixed Number 65 & Subtext */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
          textAlign: 'center',
          pointerEvents: 'none',
        }}
      >
        <span
          className="interactive-rotating-badge-number"
          style={{
            fontSize: `${size * 0.35}px`,
            fontWeight: 900,
            lineHeight: 0.95,
            background: isDark 
              ? 'linear-gradient(135deg, #FFFFFF 0%, #93C5FD 100%)' 
              : 'linear-gradient(135deg, #0F172A 0%, #1D4ED8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.04em',
            fontFamily: "'Inter', sans-serif",
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
          }}
        >
          {number}
        </span>
        {subtext && (
          <span
            className="interactive-rotating-badge-subtext"
            style={{
              fontSize: `${size * 0.085}px`,
              fontWeight: 800,
              color: isDark ? '#60A5FA' : '#D97706',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginTop: '3px',
            }}
          >
            {subtext}
          </span>
        )}
      </div>
    </div>
  );
}
