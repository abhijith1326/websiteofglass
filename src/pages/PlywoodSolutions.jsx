import React from 'react';
import { Box, Anchor, Droplets, Home, Palette, RefreshCw, Wrench, ShieldCheck } from 'lucide-react';
import { useSampleCart } from '../context/SampleCartContext';

export default function PlywoodSolutions() {
  const { addItem } = useSampleCart();

  const plywoodGrades = [
    {
      id: 'marine-plywood',
      title: 'BWP / Marine Grade Plywood',
      icon: <Anchor size={24} color="#1D4ED8" />,
      image: '/assets/images/marine-plywood.png',
      desc: '100% Boiling Water Proof synthetic phenol-formaldehyde resin bonded hardwood core. Conforms to strict BS 1088 & IS 710 marine specifications.',
      specs: { Standard: 'IS 710 / BS 1088', Thickness: '4mm – 25mm', Core: '100% Gurjan / Hardwood', Glue: 'Unextended Phenolic Resin' }
    },
    {
      id: 'bwr-plywood',
      title: 'BWR Grade Exterior Plywood',
      icon: <Droplets size={24} color="#1D4ED8" />,
      image: '/assets/images/bwp-plywood.png',
      desc: 'Boiling Water Resistant exterior grade plywood engineered to resist moisture, humidity, and fungal decay in premium kitchen cabinets & bathrooms.',
      specs: { Standard: 'IS 303 BWR', Thickness: '4mm – 25mm', Moisture: '< 8% Equilibrium', Bonding: 'Cross-Laminated' }
    },
    {
      id: 'mr-plywood',
      title: 'MR Commercial Interior Plywood',
      icon: <Home size={24} color="#1D4ED8" />,
      image: '/assets/images/mr-plywood.png',
      desc: 'Moisture Resistant interior grade plywood bonded with melamine urea-formaldehyde. Ideal for wardrobes, office partitions, and joinery.',
      specs: { Standard: 'IS 303 MR', Thickness: '4mm – 25mm', Core: 'Selected Hardwood', Use: 'Furniture & Paneling' }
    },
    {
      id: 'decorative-veneer',
      title: 'Natural Decorative Wood Veneer',
      icon: <Palette size={24} color="#1D4ED8" />,
      image: '/assets/images/decorative-plywood.png',
      desc: 'Real wood face veneers (Teak, Walnut, Oak, Maple, Ash) precision sliced and cross-bonded onto marine core for luxury architectural interiors.',
      specs: { Species: '10+ Natural Hardwoods', Veneer: '0.5mm – 1.2mm', Matching: 'Book-Matched / Slip', Finish: 'Sanded Ready' }
    },
    {
      id: 'flexible-plywood',
      title: 'Flexible Molded Architectural Ply',
      icon: <RefreshCw size={24} color="#1D4ED8" />,
      image: '/assets/images/plywood.png',
      desc: 'Specially constructed plies that bend effortlessly down to a 50mm radius without cracking. Enables curved counters, columns, and wave ceilings.',
      specs: { MinRadius: '50 mm', Thickness: '3mm, 6mm, 9mm', Direction: 'Long-Grain / Cross', Grain: 'Flexible Core' }
    },
    {
      id: 'fire-retardant-ply',
      title: 'Fire-Retardant Hardwood Ply',
      icon: <ShieldCheck size={24} color="#1D4ED8" />,
      image: '/assets/images/decorative-plywood.png',
      desc: 'Vacuum pressure impregnated with nano-ceramic fire retarding compounds. Retards flame spread and smoke generation in public auditoriums & commercial towers.',
      specs: { Standard: 'IS 5509 Fire Rated', Rating: 'Class 1 Flame Retardant', Ignitability: '< 30 Min Delay', Smoke: 'Low Optical Density' }
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section style={{ background: '#0B192C', color: '#fff', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ color: '#60A5FA', fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase' }}>IS 710 & BS 1088 CERTIFIED TIMBER</div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, textTransform: 'uppercase', marginTop: '0.5rem', color: '#fff' }}>
            PREMIUM PLYWOOD <span style={{ color: '#1D4ED8' }}>SOLUTIONS</span>
          </h1>
          <p style={{ color: '#94A3B8', marginTop: '0.75rem', fontSize: '1.125rem', lineHeight: 1.6 }}>
            BWP Marine, BWR, Fire-Retardant, Flexible, and Decorative Veneer plywood for heavy construction, high-end furniture, and interior joinery.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(37, 99, 235, 0.15)', border: '1px solid rgba(96, 165, 250, 0.3)', padding: '0.4rem 1.25rem', borderRadius: '9999px', color: '#93C5FD', fontSize: '0.8125rem', fontWeight: 800, marginTop: '1.25rem' }}>
            <span>📦 Distributing All Over South India: Kerala • Tamil Nadu • Karnataka • Andhra Pradesh • Telangana</span>
          </div>
        </div>
      </section>

      {/* Main Plywood Cards Grid */}
      <section style={{ padding: '4rem 1.5rem', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {plywoodGrades.map((p) => (
            <div key={p.id} style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '200px', overflow: 'hidden', background: '#F1F5F9' }}>
                <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.5rem' }}>
                    {p.icon}
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>{p.title}</h3>
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>{p.desc}</p>

                  <div style={{ background: '#F8FAFC', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #E2E8F0', marginBottom: '1.5rem', fontSize: '0.75rem' }}>
                    {Object.entries(p.specs).map(([k, v]) => (
                      <div key={k} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBlock: '3px' }}>
                        <span style={{ color: '#64748B' }}>{k}</span>
                        <span style={{ fontWeight: 700, color: '#0F172A' }}>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => addItem({ id: p.id, name: p.title, type: 'PLYWOOD' })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: '#1D4ED8', color: '#fff', border: 'none', fontWeight: 800, fontSize: '0.8125rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                >
                  <Box size={16} />
                  <span>Request Physical Swatch Box</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section style={{ padding: '4rem 1.5rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="section-eyebrow">TECHNICAL MATRIX</div>
            <h2 className="section-title-center">PLYWOOD GRADE <span>SPECIFICATION MATRIX</span></h2>
          </div>

          <div style={{ overflowX: 'auto', background: '#F8FAFC', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '1rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #CBD5E1', color: '#1D4ED8', fontWeight: 900 }}>
                  <th style={{ padding: '0.75rem 1rem' }}>Property</th>
                  <th style={{ padding: '0.75rem 1rem' }}>BWP Marine (IS 710)</th>
                  <th style={{ padding: '0.75rem 1rem' }}>BWR Grade (IS 303)</th>
                  <th style={{ padding: '0.75rem 1rem' }}>MR Commercial (IS 303)</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Fire-Retardant (IS 5509)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ fontWeight: 800, padding: '0.75rem 1rem' }}>Water Resistance</td>
                  <td style={{ color: '#10B981', fontWeight: 800, padding: '0.75rem 1rem' }}>✓ 100% Boiling Proof</td>
                  <td style={{ color: '#10B981', fontWeight: 700, padding: '0.75rem 1rem' }}>✓ High Resistance</td>
                  <td style={{ color: '#F59E0B', padding: '0.75rem 1rem' }}>Moderate (Interior)</td>
                  <td style={{ color: '#10B981', fontWeight: 700, padding: '0.75rem 1rem' }}>✓ Water & Fire Proof</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ fontWeight: 800, padding: '0.75rem 1rem' }}>Primary Glue Resin</td>
                  <td style={{ padding: '0.75rem 1rem' }}>Phenol Formaldehyde (PF)</td>
                  <td style={{ padding: '0.75rem 1rem' }}>Fortified Phenolic Resin</td>
                  <td style={{ padding: '0.75rem 1rem' }}>Melamine Urea (MUF)</td>
                  <td style={{ padding: '0.75rem 1rem' }}>PF + Nano Chemical</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ fontWeight: 800, padding: '0.75rem 1rem' }}>Outdoor / Marine Use</td>
                  <td style={{ color: '#10B981', fontWeight: 800, padding: '0.75rem 1rem' }}>✓ Yes (Boats / Facades)</td>
                  <td style={{ color: '#10B981', fontWeight: 700, padding: '0.75rem 1rem' }}>✓ Yes (Kitchens)</td>
                  <td style={{ color: '#EF4444', padding: '0.75rem 1rem' }}>✗ No (Indoor Only)</td>
                  <td style={{ color: '#10B981', fontWeight: 700, padding: '0.75rem 1rem' }}>✓ Yes (Public Buildings)</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 800, padding: '0.75rem 1rem' }}>Warranty Coverage</td>
                  <td style={{ fontWeight: 800, color: '#1D4ED8', padding: '0.75rem 1rem' }}>25 Years Replacement</td>
                  <td style={{ padding: '0.75rem 1rem' }}>15 Years</td>
                  <td style={{ padding: '0.75rem 1rem' }}>10 Years</td>
                  <td style={{ padding: '0.75rem 1rem' }}>20 Years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
