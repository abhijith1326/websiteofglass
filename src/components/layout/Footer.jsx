import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import Logo from '../common/Logo';

export default function Footer() {
  const { addToast } = useToast();

  const handleSubscribe = (e) => {
    e.preventDefault();
    addToast('Subscribed to Trivandrum Glass & Plywood Architectural Journal!');
    e.target.reset();
  };

  return (
    <footer style={{ background: '#0B192C', color: '#FFFFFF', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div style={{ maxWidth: '1340px', margin: '0 auto', paddingInline: 'clamp(1rem, 4vw, 3rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <Logo size="medium" />
            </div>
            <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Pioneering high-performance architectural glass and structural plywood solutions across commercial landmarks, luxury residences, and institutional developments. Distributing all over South India — Kerala, Tamil Nadu, Karnataka, Andhra Pradesh & Telangana.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#60A5FA', fontSize: '0.8125rem', fontWeight: 800 }}>
              <ShieldCheck size={18} />
              <span>ISO 9001:2015 & ASTM Certified</span>
            </div>
          </div>

          {/* Col 2: Glass & Plywood Solutions */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', marginBottom: '1.25rem' }}>
              Product Solutions
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.875rem', color: '#CBD5E1' }}>
              <li><Link to="/glass-solutions" style={{ color: 'inherit' }}>Toughened Safety Glass</Link></li>
              <li><Link to="/glass-solutions" style={{ color: 'inherit' }}>Acoustic Laminated Glass</Link></li>
              <li><Link to="/glass-solutions" style={{ color: 'inherit' }}>Double/Triple Insulated Units</Link></li>
              <li><Link to="/plywood-solutions" style={{ color: 'inherit' }}>BS 1088 Marine Grade Plywood</Link></li>
              <li><Link to="/plywood-solutions" style={{ color: 'inherit' }}>Fire-Retardant Architectural Ply</Link></li>
              <li><Link to="/products" style={{ color: 'inherit' }}>Decorative & Specialty Veneers</Link></li>
            </ul>
          </div>

          {/* Col 3: Company & Tools */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', marginBottom: '1.25rem' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.875rem', color: '#CBD5E1' }}>
              <li><Link to="/about" style={{ color: 'inherit' }}>About Us</Link></li>
              <li><Link to="/gallery" style={{ color: 'inherit' }}>Project Gallery</Link></li>
              <li><Link to="/process" style={{ color: 'inherit' }}>Engineering & Manufacturing Process</Link></li>
              <li><Link to="/projects" style={{ color: 'inherit' }}>Featured Project Portfolio</Link></li>
              <li><Link to="/quality" style={{ color: 'inherit' }}>Quality Testing & Certifications</Link></li>
              <li><Link to="/sustainability" style={{ color: 'inherit' }}>Carbon Neutral Directives</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Newsletter */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', marginBottom: '1.25rem' }}>
              Architectural Advisory
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem', color: '#CBD5E1', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <MapPin size={16} color="#60A5FA" style={{ flexShrink: 0 }} />
                <span>HQ & Works, Trivandrum • Distribution Across South India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                <Phone size={16} color="#60A5FA" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  <a href="tel:+916235666962" style={{ color: 'inherit', textDecoration: 'none' }}>+91 62356 66962</a>
                  <span style={{ color: '#64748B' }}>/</span>
                  <a href="tel:+918075064109" style={{ color: 'inherit', textDecoration: 'none' }}>+91 8075 064 109</a>
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                <Mail size={16} color="#60A5FA" style={{ flexShrink: 0, marginTop: '2px' }} />
                <a href="mailto:trivandrumglassplywoods@gmail.com" style={{ color: 'inherit', textDecoration: 'none', wordBreak: 'break-all' }}>
                  trivandrumglassplywoods@gmail.com
                </a>
              </div>
            </div>

            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="email"
                placeholder="Architect email address"
                required
                style={{ flex: 1, padding: '0.625rem 0.875rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)', color: '#fff', fontSize: '0.8125rem', outline: 'none' }}
              />
              <button
                type="submit"
                style={{ padding: '0.625rem 1rem', borderRadius: '6px', background: '#1D4ED8', border: 'none', color: '#fff', cursor: 'pointer' }}
              >
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.75rem', color: '#94A3B8' }}>
          <div>© {new Date().getFullYear()} TRAVANCORE GLASS & PLYWOOD. All Rights Reserved.</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/quality" style={{ color: 'inherit' }}>Privacy Policy</Link>
            <Link to="/quality" style={{ color: 'inherit' }}>Terms of Specification</Link>
            <Link to="/quality" style={{ color: 'inherit' }}>ISO Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

