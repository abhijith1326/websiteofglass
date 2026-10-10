import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare,
  Ruler,
  Compass,
  Wrench,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Award,
  Play,
  Layers,
  Check,
  Maximize2
} from 'lucide-react';
import FAQSection from '../components/home/FAQSection';
import TypingText from '../components/common/TypingText';

export default function ServicesProcess() {
  const [showEntrance, setShowEntrance] = useState(true);
  const [startTransition, setStartTransition] = useState(false);
  const [webpageRevealed, setWebpageRevealed] = useState(false);
  const videoRef = useRef(null);

  const VIDEO_SPEED = 1.7; // Sped up video playback

  const handleVideoCompleted = () => {
    if (startTransition) return;
    setStartTransition(true);

    // Trigger webpage reveal right as transition starts
    setTimeout(() => {
      setWebpageRevealed(true);
    }, 50);

    // Unmount video overlay after transition finishes
    setTimeout(() => {
      setShowEntrance(false);
    }, 650);
  };

  const handleVideoPlay = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = VIDEO_SPEED;
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = VIDEO_SPEED;
    }

    // Safety fallback timer (~2.6s for 1.7x video)
    const timer = setTimeout(() => {
      if (showEntrance && !startTransition) {
        handleVideoCompleted();
      }
    }, 2800);

    return () => clearTimeout(timer);
  }, [showEntrance, startTransition]);

  const handleReplayEntrance = () => {
    setShowEntrance(true);
    setStartTransition(false);
    setWebpageRevealed(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.playbackRate = VIDEO_SPEED;
      videoRef.current.play().catch(() => { });
    }
  };

  // 6 Primary Architectural Glass Services requested by user
  const featuredServices = [
    {
      id: 'glass-partition',
      title: 'Glass Partition',
      subtitle: 'Acoustic & Office Interior Partition Walls',
      image: '/assets/images/glass-partitions.png',
      badge: 'POPULAR SOLUTION',
      desc: 'Precision engineered acoustic glass partition walls designed for modern offices, conference rooms, and open-plan luxury interiors. Provides maximum natural light with superior acoustic insulation.',
      specs: ['10mm - 12mm Toughened / Laminated Glass', 'Acoustic Sound Rating up to 45dB', 'Minimalist Aluminum Perimeter Channels', 'Custom Frosted & Patterned Film Options']
    },
    {
      id: 'shower-partition',
      title: 'Shower Partition',
      subtitle: 'Luxury Frameless Bathroom Enclosures',
      image: '/assets/images/shower_partition.jpg',
      badge: 'WATERPROOF DESIGN',
      desc: 'Bespoke frameless glass shower partitions crafted from extra-clear safety glass with hydrophobic anti-limescale coating and marine-grade stainless steel hardware.',
      specs: ['8mm - 10mm Extra-Clear Low-Iron Glass', 'Easy-Clean Hydrophobic Coating', 'SS 304 Solid Brass Hinges & Clamps', 'Precision Water-Tight Magnetic Seals']
    },
    {
      id: 'glass-door',
      title: 'Glass Door',
      subtitle: 'Frameless Swing & Pivot Entry Systems',
      image: '/assets/images/glass_door.jpg',
      badge: 'PREMIUM ENTRANCE',
      desc: 'Elegant interior and exterior frameless glass doors featuring heavy-duty hydraulic floor springs, soft-closing patch fittings, and ergonomic stainless steel handles.',
      specs: ['12mm Heat-Tempered Safety Glass', 'Hydraulic Heavy-Duty Floor Springs', 'Soft-Closing Hold-Open Mechanism', 'Custom Stainless Steel Pull Handles']
    },
    {
      id: 'automatic-sliding-door',
      title: 'Automatic Sliding Door',
      subtitle: 'Commercial High-Traffic Entrance Systems',
      image: '/assets/images/automatic_sliding_door.jpg',
      badge: 'HIGH TECH AUTOMATION',
      desc: 'State-of-the-art automatic sliding double glass doors designed for corporate buildings, retail centers, and healthcare facilities with dual microwave radar motion detection.',
      specs: ['Infrared & Microwave Radar Motion Sensors', 'Quiet Heavy-Duty Brushless Motor Operator', 'Panic Emergency Breakaway Mechanism', 'UPS Battery Backup for Uninterrupted Operation']
    },
    {
      id: 'glass-staircase',
      title: 'Glass Staircase',
      subtitle: 'Structural Floating Tread & Railing Systems',
      image: '/assets/images/glass_staircase.jpg',
      badge: 'ARCHITECTURAL FEAT',
      desc: 'Breathtaking structural glass staircases with triple-laminated non-slip ceramic etched steps and full-height glass balustrades for a floating modern aesthetic.',
      specs: ['Triple Laminated SGP Interlayer Structural Treads', 'Anti-Slip Ceramic Acid-Etched Surface', 'Heavy-Duty Stainless Steel Standoff Pins', 'Engineered to 5.0 kN/m² Live Load Rating']
    },
    {
      id: 'balcony-handle',
      title: 'Balcony Handle & Railing',
      subtitle: 'Heavy-Duty Glass Balustrade & Fittings',
      image: '/assets/images/balcony_handle.jpg',
      badge: 'SAFETY CERTIFIED',
      desc: 'Frameless glass balcony railing systems equipped with marine-grade stainless steel top handrail brackets, spigot posts, and ergonomic glass grip handles.',
      specs: ['Wind Load Tested to 2.5 kPa', '15mm Toughened Laminated Safety Glass', 'SS 316 Marine Grade Hardware & Handrails', 'Unobstructed Panoramic Views']
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Step 1 – Consultation',
      icon: <MessageSquare size={26} color="#1D4ED8" />,
      desc: 'We understand your requirements, design preferences and project application to determine the ideal glass specification.'
    },
    {
      step: '02',
      title: 'Step 2 – Site Measurement',
      icon: <Ruler size={26} color="#1D4ED8" />,
      desc: 'Accurate measurements are taken by our technical team to ensure the glass solution fits the space correctly.'
    },
    {
      step: '03',
      title: 'Step 3 – Solution & Design',
      icon: <Compass size={26} color="#1D4ED8" />,
      desc: 'We recommend the appropriate glass type, thickness, finish and hardware based on structural and safety requirements.'
    },
    {
      step: '04',
      title: 'Step 4 – Fabrication',
      icon: <Wrench size={26} color="#1D4ED8" />,
      desc: 'The glass is processed, CNC cut, heat-tempered, and prepared according to the approved project requirements.'
    },
    {
      step: '05',
      title: 'Step 5 – Professional Installation',
      icon: <ShieldCheck size={26} color="#1D4ED8" />,
      desc: 'Our certified installation team installs the glass solution with meticulous attention to safety, alignment and finishing.'
    },
    {
      step: '06',
      title: 'Step 6 – Final Inspection',
      icon: <CheckCircle2 size={26} color="#1D4ED8" />,
      desc: 'The completed installation is thoroughly inspected to ensure total quality, structural stability, and client satisfaction.'
    }
  ];

  return (
    <div style={{ background: '#FFFFFF', color: '#0F172A', overflowX: 'hidden', position: 'relative', minHeight: '100vh' }}>

      {/* ========================================================================= */}
      {/* AUTOMATIC SLIDING DOORS VIDEO & LITE TRANSITION OVERLAY                    */}
      {/* ========================================================================= */}
      {showEntrance && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: '#04070D',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: startTransition ? 'none' : 'auto',
            overflow: 'hidden',
            opacity: startTransition ? 0 : 1,
            transform: startTransition ? 'scale(1.04)' : 'scale(1)',
            filter: startTransition ? 'blur(12px)' : 'none',
            transition: 'opacity 0.65s ease, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), filter 0.65s ease'
          }}
        >
          {/* Automatic Sliding Doors Video */}
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onPlay={handleVideoPlay}
            onLoadedMetadata={handleVideoPlay}
            onEnded={handleVideoCompleted}
            style={{
              width: '100vw',
              height: '100vh',
              objectFit: 'cover',
              position: 'absolute',
              inset: 0
            }}
          >
            <source src="/assets/videos/Automatic_sliding_doors_opening_20260929165712.mp4" type="video/mp4" />
            <source src="/assets/videos/sliding_doors_opening.mp4" type="video/mp4" />
          </video>

          {/* Light Glass Shine Transition Beam */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(110deg, transparent 20%, rgba(96, 165, 250, 0.25) 50%, transparent 80%)',
              opacity: startTransition ? 1 : 0,
              transform: startTransition ? 'translateX(100%)' : 'translateX(-100%)',
              transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
              pointerEvents: 'none'
            }}
          />

          {/* Original video color maintained - no dark overlay tint */}

          {/* Top Entrance Badge */}
          <div style={{
            position: 'absolute',
            top: '2.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            textAlign: 'center',
            opacity: startTransition ? 0 : 1,
            transition: 'opacity 0.3s ease'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'rgba(15, 23, 42, 0.85)',
              border: '1px solid rgba(96, 165, 250, 0.4)',
              color: '#60A5FA',
              padding: '0.5rem 1.25rem',
              borderRadius: '9999px',
              backdropFilter: 'blur(12px)',
              fontSize: '0.8125rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}>
              <Sparkles size={16} color="#60A5FA" />
              <span>AUTOMATIC ENTRANCE SYSTEMS • SERVICES PORTAL</span>
            </div>
          </div>

          {/* Bottom Action Button */}
          <div style={{
            position: 'absolute',
            bottom: '3rem',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            opacity: startTransition ? 0 : 1,
            transition: 'opacity 0.3s ease'
          }}>
            <button
              onClick={handleVideoCompleted}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.85rem 1.85rem',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '0.875rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(37, 99, 235, 0.5)',
                transition: 'all 0.2s ease'
              }}
            >
              <span>ENTER SERVICES</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* INSIDE WEBPAGE CONTENT (REVEALED WITH LITE ANIMATION AFTER VIDEO ENDS)     */}
      {/* ========================================================================= */}
      <div
        style={{
          transform: showEntrance && !webpageRevealed ? 'translateY(20px) scale(0.98)' : 'translateY(0) scale(1)',
          opacity: showEntrance && !webpageRevealed ? 0 : 1,
          filter: showEntrance && !webpageRevealed ? 'blur(8px)' : 'blur(0px)',
          transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.65s ease, filter 0.65s ease',
          willChange: 'transform, opacity, filter'
        }}
      >
        {/* Hero Banner */}
        <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 1.5rem clamp(3rem, 6vw, 4.5rem) 1.5rem', background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)', borderBottom: '1px solid #E2E8F0', textAlign: 'center', position: 'relative' }}>

          {/* Replay Entrance Animation Button */}
          <button
            onClick={handleReplayEntrance}
            title="Replay Entrance Video Animation"
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: '#EFF6FF',
              border: '1px solid #BFDBFE',
              color: '#1D4ED8',
              padding: '0.45rem 0.9rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(29, 78, 216, 0.1)'
            }}
          >
            <Play size={13} color="#1D4ED8" />
            <span>Door Opening Video</span>
          </button>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <TypingText
              as="div"
              text="TRIVANDRUM GLASS • ARCHITECTURAL GLASS CATALOG"
              speed={75}
              style={{ color: '#1D4ED8', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem' }}
            />
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#0F172A', lineHeight: 1.15, marginBottom: '1.25rem' }}>
              <TypingText text="OUR" speed={75} delay={250} showCursor={false} />{' '}
              <TypingText text="SERVICES & GLASS SOLUTIONS" speed={70} delay={600} style={{ color: '#1D4ED8' }} />
            </h1>
            <p style={{ color: '#475569', fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.7, maxWidth: '780px', margin: '0 auto' }}>
              From bespoke frameless partitions and automated door entrances to structural floating staircases — engineered for luxury, safety, and modern architecture.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FEATURED ARCHITECTURAL GLASS SERVICES & PICTURE SHOWCASE                  */}
        {/* ========================================================================= */}
        <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <TypingText
                as="div"
                text="FEATURED INSTALLATION PORTFOLIO"
                speed={75}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#1D4ED8', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}
              />
              <TypingText
                as="h2"
                text="ARCHITECTURAL GLASS SERVICES"
                speed={70}
                delay={400}
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 900, color: '#0F172A', display: 'block', margin: '0 auto' }}
              />
              <p style={{ color: '#475569', fontSize: '1rem', maxWidth: '640px', margin: '0.75rem auto 0 auto' }}>
                Explore our core specialized services tailored for commercial complexes, luxury villas, and modern workspaces.
              </p>
            </div>

            {/* 6 Services Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {featuredServices.map((svc) => (
                <div
                  key={svc.id}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '24px',
                    border: '1px solid #E2E8F0',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.35s ease',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 16px 36px rgba(29, 78, 216, 0.12)';
                    e.currentTarget.style.borderColor = '#BFDBFE';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.05)';
                    e.currentTarget.style.borderColor = '#E2E8F0';
                  }}
                >
                  {/* Image Header Container with Zoom */}
                  <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}>
                    <img
                      src={svc.image}
                      alt={svc.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />

                    {/* Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '1.25rem',
                      left: '1.25rem',
                      background: '#EFF6FF',
                      border: '1px solid #BFDBFE',
                      color: '#1D4ED8',
                      fontSize: '0.6875rem',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '9999px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                    }}>
                      {svc.badge}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1, background: '#FFFFFF' }}>
                    <div style={{ color: '#1D4ED8', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                      {svc.subtitle}
                    </div>

                    <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '0.75rem' }}>
                      {svc.title}
                    </h3>

                    <p style={{ color: '#475569', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                      {svc.desc}
                    </p>

                    <Link
                      to="/contact"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justify: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1.25rem',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                        color: '#FFFFFF',
                        fontWeight: 800,
                        fontSize: '0.875rem',
                        textDecoration: 'none',
                        boxShadow: '0 8px 20px rgba(37, 99, 235, 0.35)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <span>INQUIRE FOR {svc.title.toUpperCase()}</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 6 Steps Grid Section */}
        <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#FFFFFF' }}>
          <div style={{ maxWidth: '1240px', margin: '0 auto' }}>

            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <TypingText
                as="div"
                text="END-TO-END EXECUTION"
                speed={75}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#1D4ED8', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}
              />
              <TypingText
                as="h2"
                text="6-STEP ENGINEERING WORKFLOW"
                speed={70}
                delay={400}
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 900, color: '#0F172A', display: 'block', margin: '0 auto' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {steps.map((st, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '2.25rem 2rem',
                    borderRadius: '20px',
                    background: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    position: 'relative',
                    boxShadow: '0 6px 18px rgba(0,0,0,0.03)',
                    transition: 'transform 0.3s ease, border-color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = '#BFDBFE';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#E2E8F0';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <div style={{ padding: '0.625rem', borderRadius: '12px', background: '#EFF6FF', border: '1px solid #BFDBFE' }}>
                      {st.icon}
                    </div>
                    <span style={{ fontSize: '2rem', fontWeight: 900, color: '#93C5FD', lineHeight: 1 }}>
                      {st.step}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.75rem' }}>
                    {st.title}
                  </h3>

                  <p style={{ color: '#475569', fontSize: '0.9375rem', lineHeight: 1.65, margin: 0 }}>
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Box */}
            <div
              style={{
                marginTop: '4rem',
                padding: '3rem 2rem',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #0A2540 0%, #1D4ED8 100%)',
                boxShadow: '0 15px 35px rgba(29, 78, 216, 0.25)',
                textAlign: 'center',
                color: '#FFFFFF'
              }}
            >
              <h3 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '1rem' }}>
                Ready to Start Step 1 – Consultation?
              </h3>
              <p style={{ color: '#DBEAFE', fontSize: '1.0625rem', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto 2rem auto' }}>
                Contact TRIVANDRUM GLASS today with your project details or drawings. Our team will schedule site measurement and provide an accurate quotation.
              </p>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.875rem 2rem',
                  borderRadius: '9999px',
                  background: '#FFFFFF',
                  color: '#1D4ED8',
                  fontWeight: 900,
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                  transition: 'transform 0.2s ease'
                }}
              >
                <span>REQUEST PROJECT CONSULTATION</span>
                <ArrowRight size={16} color="#1D4ED8" />
              </Link>
            </div>

          </div>
        </section>

        <FAQSection showQuickAnswer={false} background="#FFFFFF" />
      </div>
    </div>
  );
}
