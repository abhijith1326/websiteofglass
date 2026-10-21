import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FAQSection({ showQuickAnswer = true, background = '#04070D' }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'What glass solutions does TRIVANDRUM GLASS provide?',
      a: 'TRIVANDRUM GLASS provides architectural glass solutions including toughened glass, glass doors, glass partitions, glass railings, shower enclosures, glazing solutions, mirrors and customized glass applications.'
    },
    {
      q: 'Where does TRIVANDRUM GLASS distribute and provide services?',
      a: 'TRIVANDRUM GLASS distributes architectural glass and structural plywood all over South India — including Kerala, Tamil Nadu, Karnataka, Andhra Pradesh, and Telangana. In addition to our pan-South India distribution network, we provide direct site measurement, consultation, and turnkey installation across Trivandrum and surrounding areas of Kerala.'
    },
    {
      q: 'Do you distribute glass and plywood all over South India?',
      a: 'Yes! We distribute our complete range of architectural glass, toughened safety glass, acoustic laminated units, and IS 710 / BS 1088 marine plywood all over South India. We partner with 35+ authorized regional distributors and operate scheduled freight dispatches across Kerala, Tamil Nadu, Karnataka, Andhra Pradesh, and Telangana.'
    },
    {
      q: 'What is toughened glass?',
      a: 'Toughened glass is specially processed safety glass designed to provide greater strength and thermal resistance than ordinary annealed glass. When it breaks, it generally breaks into smaller granular pieces rather than large sharp shards.'
    },
    {
      q: 'Is toughened glass suitable for doors?',
      a: 'Yes. Toughened glass is commonly used for suitable door applications, including frameless and framed glass doors, when properly specified and installed.'
    },
    {
      q: 'Can glass partitions be customized?',
      a: 'Yes. Glass partitions can be customized based on dimensions, layout, glass type, framing requirements and the intended application.'
    },
    {
      q: 'Is glass suitable for office interiors?',
      a: 'Yes. Glass partitions are widely used in office environments to create separate functional spaces while maintaining visual openness and allowing natural light.'
    },
    {
      q: 'Do you provide glass installation?',
      a: 'Yes. TRIVANDRUM GLASS can provide professional installation as part of suitable glass projects.'
    },
    {
      q: 'How do I get a quotation for a glass project?',
      a: 'Contact TRIVANDRUM GLASS with your project requirements, dimensions, photographs or drawings where available. The team can assess the requirement and provide the appropriate quotation.'
    },
    {
      q: 'Which glass is best for balcony railings?',
      a: 'The appropriate glass depends on the railing design, structural system, location and safety requirements. A professional assessment should be made before selecting the glass specification.'
    },
    {
      q: 'What factors affect the cost of glass installation?',
      a: 'Glass installation costs depend on factors such as glass type, thickness, size, design, hardware, fabrication and installation requirements. Contact TRIVANDRUM GLASS for a project-specific quotation.'
    }
  ];

  const localAreas = [
    'Trivandrum', 'Thiruvananthapuram', 'Kazhakkoottam', 'Sreekaryam', 
    'Pattom', 'Kowdiar', 'Vellayambalam', 'Peroorkada', 
    'Ulloor', 'Kesavadasapuram', 'Vattiyoorkavu', 'Nemom', 'Kovalam', 'Neyyattinkara'
  ];

  // Generate JSON-LD Schema for FAQPage & LocalBusiness
  const faqSchemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((f) => ({
      '@type': 'Question',
      'name': f.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': f.a
      }
    }))
  };

  return (
    <section style={{ padding: '5rem 1.5rem', background, position: 'relative', borderTop: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden' }}>
      {/* Inject FAQ Schema dynamically */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }} />

      <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        
        {/* AEO Quick Answer Card */}
        {showQuickAnswer && (
          <div
            className="reveal-glass-3d glass-card-3d"
            style={{
              padding: '2rem 2.5rem',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.18) 0%, rgba(15, 23, 42, 0.85) 100%)',
              border: '1px solid rgba(96, 165, 250, 0.3)',
              marginBottom: '4rem',
              boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
            }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#60A5FA', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.875rem' }}>
              <Sparkles size={16} /> ABOUT TRIVANDRUM GLASS — QUICK ANSWER
            </div>
            <h3 style={{ fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)', fontWeight: 900, color: '#FFFFFF', marginBottom: '1rem', lineHeight: 1.3 }}>
              What is TRIVANDRUM GLASS?
            </h3>
            <p style={{ color: '#E2E8F0', fontSize: '1.0625rem', lineHeight: 1.7, margin: 0, fontWeight: 400 }}>
              TRIVANDRUM GLASS is a premier architectural glass and plywood company with comprehensive distribution all over South India (Kerala, Tamil Nadu, Karnataka, Andhra Pradesh, and Telangana) alongside localized precision manufacturing, custom fabrication, and turnkey installation across Trivandrum and Kerala.
            </p>
          </div>
        )}

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#60A5FA', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
            <HelpCircle size={16} /> ANSWER ENGINE & CUSTOMER FAQS
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#FFFFFF', margin: 0 }}>
            FREQUENTLY ASKED <span style={{ color: '#60A5FA' }}>QUESTIONS</span>
          </h2>
          <p style={{ color: '#94A3B8', marginTop: '1rem', maxWidth: '680px', marginInline: 'auto', fontSize: '1.0625rem', lineHeight: 1.6 }}>
            Everything you need to know about glass specifications, safety standards, installation requirements, and service areas in Trivandrum.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ maxWidth: '940px', margin: '0 auto 4rem auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((f, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card-3d"
                style={{
                  borderRadius: '16px',
                  background: isOpen ? 'rgba(15, 23, 42, 0.85)' : 'rgba(8, 12, 20, 0.65)',
                  border: isOpen ? '1px solid rgba(96, 165, 250, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    color: isOpen ? '#60A5FA' : '#F8FAFC',
                    fontWeight: 800,
                    fontSize: '1.0625rem',
                  }}
                >
                  <span>{f.q}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      flexShrink: 0,
                      color: isOpen ? '#60A5FA' : '#94A3B8',
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 1.5rem 1.25rem 1.5rem',
                      color: '#CBD5E1',
                      fontSize: '0.9625rem',
                      lineHeight: 1.65,
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                      paddingTop: '1rem',
                    }}
                  >
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Local SEO Serving Areas Section */}
        <div
          className="glass-card-3d"
          style={{
            padding: '2.5rem',
            borderRadius: '24px',
            background: 'rgba(8, 12, 20, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            textAlign: 'center',
          }}
        >
          {/* South India Distribution Banner */}
          <div style={{ marginBottom: '2.5rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#60A5FA', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
              <Sparkles size={16} /> PAN-SOUTH INDIA DISTRIBUTION NETWORK
            </div>
            <h3 style={{ fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.75rem' }}>
              Distributing All Over <span style={{ color: '#60A5FA' }}>South India</span>
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.9375rem', lineHeight: 1.6, maxWidth: '750px', margin: '0 auto 1.25rem auto' }}>
              We distribute commercial-grade architectural glass, safety glazing, and premium plywood across 5 southern states with dedicated logistics:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', justifyContent: 'center', maxWidth: '880px', margin: '0 auto' }}>
              {[
                { name: 'Kerala', desc: 'Statewide & HQ' },
                { name: 'Tamil Nadu', desc: 'Chennai, Coimbatore, Madurai' },
                { name: 'Karnataka', desc: 'Bangalore, Mysuru, Mangalore' },
                { name: 'Andhra Pradesh', desc: 'Visakhapatnam, Vijayawada' },
                { name: 'Telangana', desc: 'Hyderabad, Warangal' },
              ].map((st, i) => (
                <span
                  key={i}
                  style={{
                    background: 'rgba(37, 99, 235, 0.15)',
                    border: '1px solid rgba(96, 165, 250, 0.35)',
                    color: '#FFFFFF',
                    padding: '0.45rem 1rem',
                    borderRadius: '9999px',
                    fontSize: '0.8125rem',
                    fontWeight: 800,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#60A5FA' }} />
                  {st.name} <span style={{ color: '#93C5FD', fontSize: '0.6875rem', fontWeight: 600 }}>({st.desc})</span>
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#34D399', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.875rem' }}>
            <MapPin size={16} /> LOCAL FABRICATION & INSTALLATION SERVICES
          </div>
          <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.65rem' }}>
            Serving Trivandrum & Surrounding Districts
          </h4>
          <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.6, maxWidth: '750px', margin: '0 auto 1.5rem auto' }}>
            Direct site survey, consultation, and turnkey installation teams available across:
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', justifyContent: 'center', maxWidth: '880px', margin: '0 auto 2rem auto' }}>
            {localAreas.map((loc, i) => (
              <span
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#E2E8F0',
                  padding: '0.4rem 0.875rem',
                  borderRadius: '9999px',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                }}
              >
                {loc}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="tel:+916235666962"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.35rem',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '0.8125rem',
                textDecoration: 'none',
              }}
            >
              <Phone size={15} />
              <span>Call +91 62356 66962</span>
            </a>
            <a
              href="tel:+918075064109"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.35rem',
                borderRadius: '9999px',
                border: '1px solid rgba(255,255,255,0.25)',
                background: 'rgba(255,255,255,0.08)',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '0.8125rem',
                textDecoration: 'none',
              }}
            >
              <Phone size={15} />
              <span>Call +91 8075 064 109</span>
            </a>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                borderRadius: '9999px',
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.06)',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '0.8125rem',
                textDecoration: 'none',
              }}
            >
              <span>REQUEST PROJECT QUOTATION</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
