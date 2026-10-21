import React, { useState } from 'react';
import { Phone, Mail, Globe, MapPin, Send, MessageSquare, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import FAQSection from '../components/home/FAQSection';

export default function ContactUs() {
  const { addToast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    addToast('Your Glass Quote Request has been submitted! Our Trivandrum team will contact you shortly.');
  };

  const localAreas = [
    'Thiruvananthapuram', 'Trivandrum', 'Kazhakkoottam', 'Sreekaryam',
    'Pattom', 'Kowdiar', 'Vellayambalam', 'Peroorkada',
    'Ulloor', 'Kesavadasapuram', 'Vattiyoorkavu', 'Nemom', 'Kovalam', 'Neyyattinkara'
  ];

  return (
    <div style={{ background: '#04070D', color: '#F8FAFC', overflowX: 'hidden' }}>

      {/* Hero Banner */}
      <section style={{ padding: '6rem 1.5rem 4.5rem 1.5rem', background: '#080C14', borderBottom: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ color: '#60A5FA', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem' }}>
            GET IN TOUCH WITH TRIVANDRUM GLASS
          </div>
          <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#FFFFFF', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            LET'S BUILD SOMETHING <span style={{ color: '#60A5FA' }}>BEAUTIFUL WITH GLASS</span>
          </h1>
          <p style={{ color: '#94A3B8', fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.7, maxWidth: '780px', margin: '0 auto' }}>
            Have a residential, commercial, architectural, or wholesale distribution requirement? We distribute all over South India (Kerala, Tamil Nadu, Karnataka, Andhra Pradesh, Telangana) and provide turnkey glass installations in Trivandrum. Talk to our team for accurate recommendations and freight estimates.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section style={{ padding: '5rem 1.5rem', background: '#04070D' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>

            {/* Left Contact Info Cards */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#34D399', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
                <ShieldCheck size={16} /> OFFICIAL CONTACT DETAILS
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '1.5rem' }}>
                Get in Touch
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>

                {/* Phone */}
                <div className="glass-card-3d" style={{ padding: '1.5rem', borderRadius: '16px', background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', borderRadius: '12px', background: 'rgba(96, 165, 250, 0.15)', color: '#60A5FA' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>Phone Numbers</div>
                    <div style={{ fontSize: '1.125rem', fontWeight: 800, color: '#F8FAFC', marginTop: '4px', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                      <a href="tel:+916235666962" style={{ color: 'inherit', textDecoration: 'none' }}>+91 62356 66962</a>
                      <span style={{ color: '#64748B' }}>/</span>
                      <a href="tel:+918075064109" style={{ color: 'inherit', textDecoration: 'none' }}>+91 8075 064 109</a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="glass-card-3d" style={{ padding: '1.5rem', borderRadius: '16px', background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', borderRadius: '12px', background: 'rgba(52, 211, 153, 0.15)', color: '#34D399' }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>Email Address</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#F8FAFC', marginTop: '4px', wordBreak: 'break-all' }}>
                      <a href="mailto:trivandrumglassplywoods@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>trivandrumglassplywoods@gmail.com</a>
                    </div>
                  </div>
                </div>

                {/* Website */}
                <div className="glass-card-3d" style={{ padding: '1.5rem', borderRadius: '16px', background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.15)', color: '#F59E0B' }}>
                    <Globe size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>Official Website</div>
                    <div style={{ fontSize: '1.125rem', fontWeight: 800, color: '#F8FAFC', marginTop: '4px' }}>
                      <a href="https://trivandrumglass.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>trivandrumglass.com</a>
                    </div>
                  </div>
                </div>

                {/* South India Distribution Reach */}
                <div className="glass-card-3d" style={{ padding: '1.5rem', borderRadius: '16px', background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(56, 189, 248, 0.3)', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.15)', color: '#38BDF8' }}>
                    <Globe size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Distribution Footprint</div>
                    <div style={{ fontSize: '1.125rem', fontWeight: 800, color: '#F8FAFC', marginTop: '4px' }}>
                      All Over South India
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: '#94A3B8', marginTop: '4px', lineHeight: 1.5 }}>
                      Kerala • Tamil Nadu • Karnataka • Andhra Pradesh • Telangana
                    </div>
                  </div>
                </div>

                {/* Local Office & Service Location */}
                <div className="glass-card-3d" style={{ padding: '1.5rem', borderRadius: '16px', background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', borderRadius: '12px', background: 'rgba(167, 139, 250, 0.15)', color: '#A78BFA' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>HQ & Turnkey Installation</div>
                    <div style={{ fontSize: '1.125rem', fontWeight: 800, color: '#F8FAFC', marginTop: '4px' }}>
                      Trivandrum & Surrounding Areas, Kerala
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: '#94A3B8', marginTop: '4px', lineHeight: 1.5 }}>
                      Precision site measurements, custom fabrication & expert structural mounting.
                    </div>
                  </div>
                </div>

              </div>

              {/* Pan-South India Coverage & Local SEO Serving Areas */}
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '1.5rem', borderRadius: '16px' }}>
                <div style={{ fontSize: '0.8125rem', fontWeight: 800, color: '#38BDF8', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
                  Distributing All Over South India:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1.25rem' }}>
                  {[
                    'Kerala (HQ & Statewide)',
                    'Tamil Nadu (Chennai, Coimbatore, Madurai)',
                    'Karnataka (Bangalore, Mysuru, Mangalore)',
                    'Andhra Pradesh (Visakhapatnam, Vijayawada)',
                    'Telangana (Hyderabad, Warangal)'
                  ].map((st, idx) => (
                    <span key={idx} style={{ background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.25)', color: '#BAE6FD', padding: '0.3rem 0.65rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700 }}>
                      {st}
                    </span>
                  ))}
                </div>

                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#60A5FA', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Trivandrum Local Installation Coverage:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                  {localAreas.map((area, idx) => (
                    <span key={idx} style={{ background: 'rgba(255,255,255,0.05)', color: '#94A3B8', padding: '0.25rem 0.625rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700 }}>
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Quote Request Form */}
            <div
              className="glass-card-3d"
              style={{
                padding: '2.5rem',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(8, 12, 20, 0.95) 100%)',
                border: '1px solid rgba(96, 165, 250, 0.25)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#60A5FA', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.5rem' }}>
                <Sparkles size={16} /> REQUEST A GLASS QUOTE
              </div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.75rem' }}>
                Tell Us What You Need
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                Tell us what you need, and our team will help you find the right glass solution for your project.
              </p>

              {submitted ? (
                <div style={{ background: 'rgba(52, 211, 153, 0.15)', border: '1px solid #34D399', padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
                  <CheckCircle size={48} color="#34D399" style={{ margin: '0 auto 1rem auto' }} />
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem' }}>Quote Request Received!</h4>
                  <p style={{ color: '#CBD5E1', fontSize: '0.9375rem', margin: 0 }}>
                    Thank you for reaching out to TRIVANDRUM GLASS. Our Trivandrum glass specialists will review your requirements and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 800, color: '#CBD5E1', marginBottom: '0.375rem' }}>YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anish Kumar"
                      style={{ width: '100%', padding: '0.875rem 1rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)', color: '#fff', fontSize: '0.9375rem', outline: 'none' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 800, color: '#CBD5E1', marginBottom: '0.375rem' }}>PHONE NUMBER *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 62356 66962"
                        style={{ width: '100%', padding: '0.875rem 1rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)', color: '#fff', fontSize: '0.9375rem', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 800, color: '#CBD5E1', marginBottom: '0.375rem' }}>EMAIL ADDRESS</label>
                      <input
                        type="email"
                        placeholder="e.g. anish@example.com"
                        style={{ width: '100%', padding: '0.875rem 1rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)', color: '#fff', fontSize: '0.9375rem', outline: 'none' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 800, color: '#CBD5E1', marginBottom: '0.375rem' }}>GLASS SERVICE TYPE</label>
                    <select
                      style={{ width: '100%', padding: '0.875rem 1rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.15)', background: '#0B132B', color: '#fff', fontSize: '0.9375rem', outline: 'none' }}
                    >
                      <option value="toughened">Toughened Safety Glass</option>
                      <option value="doors">Glass Doors (Frameless / Toughened)</option>
                      <option value="partitions">Glass Partitions (Office / Home)</option>
                      <option value="railings">Glass Railings (Balcony / Staircase)</option>
                      <option value="facades">Glass Facades & Glazing</option>
                      <option value="showers">Shower Enclosures</option>
                      <option value="laminated">Laminated Acoustic Glass</option>
                      <option value="insulated">Double Glazing / Insulated Glass</option>
                      <option value="canopies">Glass Canopies</option>
                      <option value="mirrors">Mirrors & Decorative Glass</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 800, color: '#CBD5E1', marginBottom: '0.375rem' }}>PROJECT LOCATION & DETAILS</label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Describe your project, required glass/plywood specs, or site/delivery location (anywhere in South India: Kerala, TN, KA, AP, Telangana, or Trivandrum)..."
                      style={{ width: '100%', padding: '0.875rem 1rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)', color: '#fff', fontSize: '0.9375rem', outline: 'none', resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '1rem 1.5rem',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                      color: '#FFFFFF',
                      fontWeight: 800,
                      fontSize: '0.9375rem',
                      letterSpacing: '0.04em',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 8px 25px rgba(37, 99, 235, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span>SUBMIT QUOTE REQUEST</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* FAQ & AEO Section */}
      <FAQSection showQuickAnswer={true} background="#080C14" />
    </div>
  );
}
