import React, { useState } from 'react';
import { 
  Layers, 
  Sun, 
  Zap, 
  Sparkles, 
  DoorOpen, 
  Wrench, 
  Leaf, 
  ShieldCheck, 
  Building2, 
  Cpu, 
  Image as ImageIcon,
  ArrowRight,
  CheckCircle2,
  Box
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSampleCart } from '../context/SampleCartContext';
import { useToast } from '../context/ToastContext';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { addItem } = useSampleCart();
  const { addToast } = useToast();

  const productCategories = [
    {
      id: '01',
      code: 'cat-01',
      title: '01. Architectural Glass',
      icon: <Layers size={20} color="#1D4ED8" />,
      description: 'Premium structural and architectural float glass solutions for building envelopes and interiors.',
      items: [
        { name: 'Clear Glass', spec: 'High transparency float glass with exceptional optical clarity.', img: '/assets/images/clear-glass.png' },
        { name: 'Tinted Glass', spec: 'Body-tinted solar glare reduction glass in grey, bronze & green.', img: '/assets/images/tinted-glass.png' },
        { name: 'High-Definition Glass', spec: 'Ultra-clear low-iron glass offering maximum daylight transmission.', img: '/assets/images/high-definition-glass.jpg' },
        { name: 'Low-Carbon Glass', spec: 'Eco-friendly manufactured glass with reduced embodied carbon footprint.', img: '/assets/images/low-carbon-glass.jpg' },
        { name: 'Coated Glass', spec: 'Advanced pyrolytic & magnetron coated solar control glass.', img: '/assets/images/coated-glass.jpg' },
        { name: 'Laminated Glass', spec: 'Multi-layer safety glass with tough PVB / SGP interlayers.', img: '/assets/images/laminated-architectural-glass.jpg' },
        { name: 'Fire-Rated Glass', spec: 'Class EW & EI integrity & insulation glass rated up to 120 mins.', img: '/assets/images/fire-rated-glass.jpg' },
      ]
    },
    {
      id: '02',
      code: 'cat-02',
      title: '02. Sun Ban Glass',
      icon: <Sun size={20} color="#1D4ED8" />,
      description: 'High-performance solar control glass series engineered for harsh tropical climate protection.',
      items: [
        { name: 'SGG Sapphire Blue', spec: 'Deep royal blue solar control glass with high light reflection.', img: '/assets/images/sgg-sapphire-blue.png' },
        { name: 'SGG Imperial Blue', spec: 'Rich imperial blue aesthetic with optimized SHGC factor.', img: '/assets/images/sgg-imperial-blue.png' },
        { name: 'SGG Sparkling Ice', spec: 'Crisp neutral-cyan solar shielding with brilliant clarity.', img: '/assets/images/sgg-sparkling-ice.png' },
        { name: 'SGG Topaz Brown', spec: 'Warm earthy topaz brown solar control glazing for facades.', img: '/assets/images/sgg-topaz-brown.png' },
        { name: 'SGG Midas Gold', spec: 'Prestige gold reflective glass with superior thermal protection.', img: '/assets/images/sgg-midas-gold.png' },
        { name: 'SGG Black Diamond', spec: 'Sleek dark obsidian solar glass for modern corporate facades.', img: '/assets/images/sgg-black-diamond.png' },
        { name: 'SGG Forest Green', spec: 'Natural forest green solar control glass for seamless landscapes.', img: '/assets/images/sgg-forest-green.png' },
        { name: 'SGG TruVision', spec: 'High light transmission low-reflection solar control glass.', img: '/assets/images/sgg-truvision.png' },
      ]
    },
    {
      id: '03',
      code: 'cat-03',
      title: '03. Architectural & Decorative Glass',
      icon: <Sparkles size={20} color="#1D4ED8" />,
      description: 'Custom textured, tinted, and feature glass for interior partitions and facades.',
      items: [
        { name: 'SGG Brown Star', spec: 'Signature brown tinted architectural feature glass.', img: '/assets/images/sgg-topaz-brown.png' },
        { name: 'Tinted Architectural Glass', spec: 'Custom shade tinted glass for curtain walls & acoustic panels.', img: '/assets/images/tinted-glass.png' },
        { name: 'Decorative Glass Solutions', spec: 'Acid-etched, ceramic printed, and fluted textured glass.', img: '/assets/images/decorative-glass-solutions.jpg' },
        { name: 'Feature Glass', spec: 'Custom laminated fabric, mesh, and mirror feature panels.', img: '/assets/images/feature-glass.jpg' },
      ]
    },
    {
      id: '04',
      code: 'cat-04',
      title: '04. Entrance Solutions',
      icon: <DoorOpen size={20} color="#1D4ED8" />,
      description: 'Automated glass sliding doors, swing entrances, and smart access systems.',
      items: [
        { name: 'Automatic Sliding Doors', spec: 'Heavy-duty sensor-driven motion glass sliding door systems.', img: '/assets/images/automatic_sliding_door.jpg' },
        { name: 'Access Lite', spec: 'Compact frameless glass entrance system for boutique retail.', img: '/assets/images/access-lite.jpg' },
        { name: 'Access Pro', spec: 'Commercial grade high-traffic automatic glass entrance system.', img: '/assets/images/glass_door.jpg' },
        { name: 'Automatic Entrance Systems', spec: 'Integrated revolving and telescopic automatic glass doors.', img: '/assets/images/automatic-entrance-systems.jpg' },
      ]
    },
    {
      id: '05',
      code: 'cat-05',
      title: '05. Glass Hardware & Fittings',
      icon: <Wrench size={20} color="#1D4ED8" />,
      description: 'Architectural stainless steel spider fittings, hinges, patch fittings & door handles.',
      items: [
        { name: 'Glass Door Hardware', spec: 'SS 316 heavy-duty glass door handles, locks & floor springs.', img: '/assets/images/balcony_handle.jpg' },
        { name: 'Glass Fittings', spec: 'Precision spider fittings, glass clamps & point-supported hardware.', img: '/assets/images/glass-fittings.jpg' },
        { name: 'Architectural Hardware', spec: 'Structural glazing channels, aluminium tracks & canopy fittings.', img: '/assets/images/architectural-hardware.jpg' },
        { name: 'Door Accessories', spec: 'Soft-close hydraulic hinges, corner patches & panic bars.', img: '/assets/images/door-accessories.jpg' },
        { name: 'Glass Installation Accessories', spec: 'Structural silicones, gaskets, setting blocks & spacer tapes.', img: '/assets/images/glass-installation-accessories.jpg' },
      ]
    },
    {
      id: '06',
      code: 'cat-06',
      title: '06. Energy-Efficient Glass',
      icon: <Leaf size={20} color="#1D4ED8" />,
      description: 'Low-emissivity (Low-E) and thermally insulated glass for green building certification.',
      items: [
        { name: 'Solar Control Glass', spec: 'Blocks solar heat radiation while allowing optimum daylighting.', img: '/assets/images/heat-resistant-glass.png' },
        { name: 'Thermal Insulation Glass', spec: 'Low-E coated double glazing reducing AC cooling loads.', img: '/assets/images/insulated-glass.png' },
        { name: 'Energy-Efficient Glazing', spec: 'High-performance solar and thermal insulation double glazing.', img: '/assets/images/energy-efficient-glazing.jpg' },
        { name: 'Sustainable Glazing Solutions', spec: 'GRIHA & LEED compliant green building glass products.', img: '/assets/images/low-carbon-glass.jpg' },
      ]
    },
    {
      id: '07',
      code: 'cat-07',
      title: '07. Solar Control Glass',
      icon: <ShieldCheck size={20} color="#1D4ED8" />,
      description: 'Curated color spectrum solar control glass for architectural facade design.',
      items: [
        { name: 'Blue Glass', spec: 'Vibrant oceanic blue solar heat blocking facade glass.', img: '/assets/images/sgg-sapphire-blue.png' },
        { name: 'Green Glass', spec: 'Emerald green high light transmission solar control glass.', img: '/assets/images/sgg-forest-green.png' },
        { name: 'Brown Glass', spec: 'Bronze-tinted solar glass for warm building aesthetics.', img: '/assets/images/sgg-topaz-brown.png' },
        { name: 'Gold Glass', spec: 'Metallic gold reflective solar control architectural glass.', img: '/assets/images/sgg-midas-gold.png' },
        { name: 'Black Glass', spec: 'Dark obsidian privacy solar control spandrel glass.', img: '/assets/images/sgg-black-diamond.png' },
        { name: 'Neutral Glass', spec: 'High-clarity neutral solar control low-reflection glass.', img: '/assets/images/sgg-truvision.png' },
      ]
    },
    {
      id: '08',
      code: 'cat-08',
      title: '08. Glazing Solutions',
      icon: <Building2 size={20} color="#1D4ED8" />,
      description: 'Turnkey structural glazing, unitised curtain walls, skylights & double-glazed units.',
      items: [
        { name: 'Single Glazing', spec: 'Standard single pane tempered & monolithic glass installations.', img: '/assets/images/clear-glass.png' },
        { name: 'Double Glazing', spec: 'Hermetically sealed dual pane glass for sound & thermal insulation.', img: '/assets/images/insulated-glass.jpg' },
        { name: 'IGU Solutions', spec: 'Insulated Glass Units with Argon gas fill & warm-edge spacers.', img: '/assets/images/energy-efficient-glazing.jpg' },
        { name: 'Structural Glazing', spec: 'Frameless silicone bonded glass facade systems.', img: '/assets/images/glass-skyscraper.png' },
        { name: 'Façade Glazing', spec: 'Stick and unitised aluminum curtain wall facade installations.', img: '/assets/images/glass-partitions.png' },
        { name: 'Skylight Glazing', spec: 'Overhead laminated safety glass skylights & glass roofs.', img: '/assets/images/skylight-glazing.jpg' },
      ]
    },
    {
      id: '09',
      code: 'cat-09',
      title: '09. Glass Processing & Applications',
      icon: <Cpu size={20} color="#1D4ED8" />,
      description: 'Precision glass processing including tempering, bending, laminating & custom IGU.',
      items: [
        { name: 'Tempered Glass', spec: 'Thermal toughened safety glass 5x stronger than regular glass.', img: '/assets/images/toughened-glass.png' },
        { name: 'Heat-Strengthened Glass', spec: 'Heat-treated glass engineered for spandrel & facade resistance.', img: '/assets/images/fire-rated-glass.jpg' },
        { name: 'Laminated Glass', spec: 'Acoustic PVB & SGP structural laminated safety glass.', img: '/assets/images/laminated-glass.png' },
        { name: 'Bent Glass', spec: 'Custom curved toughened & laminated glass for corners & domes.', img: '/assets/images/curved-glass.png' },
        { name: 'Insulated Glass Units', spec: 'Custom double & triple insulated glass assembly for project specs.', img: '/assets/images/insulated-glass.png' },
        { name: 'Custom Glass Solutions', spec: 'Bespoke glass processing, CNC cutout, beveling & frosting.', img: '/assets/images/decorative-glass-solutions.jpg' },
      ]
    }
  ];

  const handleAddSample = (item, catTitle) => {
    addItem({
      id: `${item.name.toLowerCase().replace(/\s+/g, '-')}`,
      name: item.name,
      category: catTitle,
      type: 'Glass Sample'
    });
    addToast(`Added "${item.name}" to your Sample Box!`);
  };

  const filteredCategories = activeCategory === 'all' 
    ? productCategories 
    : productCategories.filter(cat => cat.id === activeCategory);

  return (
    <div style={{ 
      background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 30%, #F1F5F9 100%)', 
      minHeight: '100vh',
      color: '#0F172A',
      paddingBottom: '6rem'
    }}>
      
      {/* HERO HEADER */}
      <div style={{ 
        background: 'linear-gradient(135deg, #0A2540 0%, #1D4ED8 100%)', 
        color: '#FFFFFF',
        padding: '4.5rem 1.5rem 4rem 1.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle Ambient Glow */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(96, 165, 250, 0.15) 0%, rgba(0,0,0,0) 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            color: '#93C5FD', 
            fontSize: '0.8125rem', 
            fontWeight: 800, 
            textTransform: 'uppercase', 
            letterSpacing: '0.15em', 
            marginBottom: '1rem', 
            background: 'rgba(255,255,255,0.1)', 
            padding: '0.4rem 1.15rem', 
            borderRadius: '9999px', 
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.2)' 
          }}>
            <Layers size={16} color="#93C5FD" /> ARCHITECTURAL PRODUCT CATALOGUE
          </div>

          <h1 style={{ 
            fontFamily: "'Playfair Display', Georgia, serif", 
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', 
            fontWeight: 900, 
            color: '#FFFFFF', 
            lineHeight: 1.15, 
            margin: '0 0 1.25rem 0',
            letterSpacing: '-0.02em'
          }}>
            Product Catalogue & Solutions
          </h1>

          <p style={{ color: '#DBEAFE', fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', maxWidth: '780px', margin: '0 auto 2.5rem auto', lineHeight: 1.6, fontWeight: 500 }}>
            Explore our complete 9-category architectural glass range — distributed all over South India (Kerala, Tamil Nadu, Karnataka, Andhra Pradesh, Telangana) with certified safety specifications and wholesale supply.
          </p>

          {/* Quick Filter Pills Bar */}
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '0.625rem',
            maxWidth: '1100px',
            margin: '0 auto'
          }}>
            <button
              onClick={() => setActiveCategory('all')}
              style={{
                padding: '0.5rem 1.1rem',
                borderRadius: '9999px',
                border: activeCategory === 'all' ? '2px solid #FFFFFF' : '1px solid rgba(255,255,255,0.2)',
                background: activeCategory === 'all' ? '#FFFFFF' : 'rgba(255,255,255,0.1)',
                color: activeCategory === 'all' ? '#1D4ED8' : '#FFFFFF',
                fontWeight: 800,
                fontSize: '0.8125rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              All Categories ({productCategories.length})
            </button>

            {productCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  border: activeCategory === cat.id ? '2px solid #FFFFFF' : '1px solid rgba(255,255,255,0.15)',
                  background: activeCategory === cat.id ? '#FFFFFF' : 'rgba(255,255,255,0.08)',
                  color: activeCategory === cat.id ? '#1D4ED8' : '#F1F5F9',
                  fontWeight: 700,
                  fontSize: '0.8125rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat.id}. {cat.title.replace(/^\d+\.\s*/, '')}
              </button>
            ))}
          </div>

        </div>
      </div>


      {/* SOUTH INDIA DISTRIBUTION & WHOLESALE BANNER */}
      <div style={{ maxWidth: '1280px', margin: '2.5rem auto 0 auto', padding: '0 1.5rem' }}>
        <div style={{
          background: 'linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 100%)',
          border: '1px solid #BFDBFE',
          borderRadius: '20px',
          padding: '1.5rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.25rem',
          boxShadow: '0 10px 30px rgba(37, 99, 235, 0.06)'
        }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#1D4ED8', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.35rem' }}>
              <ShieldCheck size={16} /> PAN-SOUTH INDIA DISTRIBUTION & WHOLESALE SUPPLY
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', margin: '0 0 0.35rem 0' }}>
              We Distribute All Over South India
            </h3>
            <p style={{ color: '#475569', fontSize: '0.875rem', margin: 0, maxWidth: '680px', lineHeight: 1.5 }}>
              Direct factory supplies, project-scale quantities, and dealer distribution across <strong>Kerala, Tamil Nadu, Karnataka, Andhra Pradesh, and Telangana</strong> with secure A-frame freight delivery.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {['Kerala', 'Tamil Nadu', 'Karnataka', 'Andhra Pradesh', 'Telangana'].map((st, i) => (
              <span key={i} style={{ background: '#DBEAFE', color: '#1E40AF', padding: '0.35rem 0.85rem', borderRadius: '9999px', fontSize: '0.78125rem', fontWeight: 800 }}>
                ✓ {st}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN PRODUCTS CONTAINER */}
      <div style={{ maxWidth: '1280px', margin: '3.5rem auto 0 auto', padding: '0 1.5rem' }}>
        
        {filteredCategories.map((category) => (
          <div 
            key={category.id} 
            id={`category-${category.id}`}
            style={{ 
              marginBottom: '4.5rem',
              scrollMarginTop: '120px'
            }}
          >
            {/* Category Header Bar */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              flexWrap: 'wrap', 
              gap: '1rem',
              borderBottom: '2px solid #DBEAFE', 
              paddingBottom: '1rem',
              marginBottom: '2rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <div style={{ 
                  width: '44px', 
                  height: '44px', 
                  borderRadius: '12px', 
                  background: '#EFF6FF', 
                  border: '1px solid #BFDBFE',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  {category.icon}
                </div>
                <div>
                  <h2 style={{ 
                    fontFamily: "'Playfair Display', Georgia, serif", 
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
                    fontWeight: 900, 
                    color: '#0A2540', 
                    margin: 0,
                    lineHeight: 1.2
                  }}>
                    {category.title}
                  </h2>
                  <p style={{ margin: '0.25rem 0 0 0', color: '#64748B', fontSize: '0.90625rem', fontWeight: 500 }}>
                    {category.description}
                  </p>
                </div>
              </div>

              <span style={{ 
                background: '#EFF6FF', 
                color: '#1D4ED8', 
                fontWeight: 800, 
                fontSize: '0.8125rem', 
                padding: '0.35rem 0.875rem', 
                borderRadius: '9999px',
                border: '1px solid #BFDBFE'
              }}>
                {category.items.length} Products
              </span>
            </div>

            {/* Product Cards Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
              gap: '1.75rem' 
            }}>
              {category.items.map((item, idx) => (
                <div 
                  key={idx}
                  style={{ 
                    background: '#FFFFFF', 
                    borderRadius: '20px', 
                    border: '1px solid #E2E8F0', 
                    boxShadow: '0 8px 24px rgba(15, 23, 42, 0.04)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div>
                    {/* DEDICATED IMAGE CONTAINER SPACE (PLACEHOLDER FOR PRODUCT PHOTO) */}
                    <div style={{ 
                      height: '210px', 
                      background: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)', 
                      borderBottom: '1px solid #E2E8F0',
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justify: 'center',
                      padding: '1rem',
                      overflow: 'hidden'
                    }}>
                      {item.img ? (
                        <img 
                          src={item.img} 
                          alt={item.name} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        />
                      ) : (
                        <div style={{ 
                          textAlign: 'center', 
                          border: '2px dashed #BFDBFE', 
                          borderRadius: '16px', 
                          padding: '1.25rem 1rem', 
                          width: '85%', 
                          background: 'rgba(255,255,255,0.7)',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>
                          <ImageIcon size={32} color="#3B82F6" opacity={0.7} />
                          <div style={{ color: '#1D4ED8', fontSize: '0.78125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                            IMAGE UPLOAD SPACE
                          </div>
                          <div style={{ color: '#94A3B8', fontSize: '0.71875rem', fontWeight: 500 }}>
                            Replace with product photo
                          </div>
                        </div>
                      )}

                      {/* Category Tag Badge inside image header */}
                      <span style={{ 
                        position: 'absolute', 
                        top: '12px', 
                        left: '12px', 
                        background: '#0A2540', 
                        color: '#FFFFFF', 
                        fontSize: '0.7rem', 
                        fontWeight: 800, 
                        padding: '0.25rem 0.65rem', 
                        borderRadius: '6px',
                        letterSpacing: '0.05em'
                      }}>
                        {category.id}
                      </span>
                    </div>

                    {/* Card Content Details */}
                    <div style={{ padding: '1.5rem' }}>
                      <h3 style={{ 
                        fontSize: '1.15rem', 
                        fontWeight: 800, 
                        color: '#0A2540', 
                        margin: '0 0 0.625rem 0',
                        lineHeight: 1.3
                      }}>
                        {item.name}
                      </h3>

                      <p style={{ 
                        color: '#475569', 
                        fontSize: '0.875rem', 
                        lineHeight: 1.6, 
                        margin: 0
                      }}>
                        {item.spec}
                      </p>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}
