import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Check, ShieldCheck, Zap, Layers, Sparkles, Award, Sliders } from 'lucide-react';
import Hero3DCanvas from '../components/home/Hero3DCanvas';
import FeatureStrip from '../components/home/FeatureStrip';
import TrustedSolutionsShowcase from '../components/home/TrustedSolutionsShowcase';
import GlassVisualizerCanvas from '../components/tools/GlassVisualizerCanvas';
import AcousticSimulatorCanvas from '../components/tools/AcousticSimulatorCanvas';
import SpecCalculator from '../components/tools/SpecCalculator';
import WhyChooseUs from '../components/home/WhyChooseUs';
import EngineeredMaterialSection from '../components/home/EngineeredMaterialSection';
import { useSampleCart } from '../context/SampleCartContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Home() {
  const { addItem } = useSampleCart();

  // Initialize smooth viewport scroll reveals
  useScrollReveal();

  const productCards = [
    {
      id: 'toughened-glass',
      name: 'Toughened Safety Glass',
      category: 'GLASS',
      image: '/assets/images/toughened-glass.png',
      desc: 'High mechanical strength & thermal shock resistance engineered up to 5x stronger than annealed glass.',
      tag: 'ISO Certified Safety',
      uVal: '1.2 W/m²K',
      stc: '34 dB',
      type: 'glass'
    },
    {
      id: 'heat-resistant-glass',
      name: 'Heat-Resistant Glass & Mirrors',
      category: 'GLASS',
      image: '/assets/images/heat-resistant-glass.png',
      desc: 'High-temperature thermal shock resistant glass and premium zero-distortion mirrors engineered for fireplaces, kitchens, and architectural interiors.',
      tag: '700°C Thermal Rated',
      uVal: '700°C Temp',
      stc: 'Class A Fire',
      type: 'glass'
    },
    {
      id: 'glass-installation',
      name: 'Architectural Glass Installation',
      category: 'INSTALLATION',
      image: '/assets/images/glass-installation.png',
      desc: 'Turnkey structural glazing, curtain wall fitting, spider glass systems, and custom interior mirror mounting by certified structural engineers.',
      tag: 'Turnkey Execution',
      uVal: 'Precision Fit',
      stc: 'ISO 9001',
      type: 'glass'
    },
    {
      id: 'laminated-glass',
      name: 'Acoustic PVB Laminated Glass',
      category: 'GLASS',
      image: '/assets/images/laminated-glass.png',
      desc: 'Interlayer sound dampening technology reducing city noise up to 44dB with shatter-proof retention.',
      tag: '44dB Noise Drop',
      uVal: '1.8 W/m²K',
      stc: '44 dB',
      type: 'glass'
    },
    {
      id: 'decorative-plywood',
      name: 'Fire-Retardant Architectural Ply',
      category: 'PLYWOOD',
      image: '/assets/images/decorative-plywood.png',
      desc: 'Treated with nano-ceramic fire barrier compounds to retard flame spread in interior spaces.',
      tag: 'Flame Barrier',
      uVal: 'Class 1 Fire',
      stc: 'Nano Core',
      type: 'plywood'
    },
    {
      id: 'curved-glass',
      name: 'Electrochromic Dynamic Glass',
      category: 'GLASS',
      image: '/assets/images/curved-glass.png',
      desc: 'Switchable electronic tinting for real-time solar heat gain control and instant privacy.',
      tag: 'Smart Glazing',
      uVal: '0.80 W/m²K',
      stc: '38 dB',
      type: 'glass'
    }
  ];

  return (
    <div className="home-page-wrap" style={{ background: '#04070D', color: '#F8FAFC', overflowX: 'hidden' }}>
      {/* 3D Glass & Plywood Full-Screen Hero Canvas Scrubber */}
      <Hero3DCanvas />

      {/* Trusted Architectural Solutions Showcase */}
      <div className="reveal-glass-3d">
        <TrustedSolutionsShowcase />
      </div>

      {/* Featured Products Section with 3D Glass & Plywood Cards */}
      <EngineeredMaterialSection />

      {/* WHY CHOOSE TRIVANDRUM GLASS SECTION */}
      <WhyChooseUs background="#04070D" />

      {/* Interactive 3D Canvas Optics & Light Visualizer */}
      <div className="reveal-depth">
        <GlassVisualizerCanvas />
      </div>

      {/* Web Audio API Sound Attenuation Simulator */}
      <div className="reveal-glass-3d">
        <AcousticSimulatorCanvas />
      </div>

      {/* Spec & Load Calculator */}
      <div className="reveal-depth">
        <SpecCalculator />
      </div>

      {/* Stats Counter Section with Ultra-Glass Glow Cards */}
      <section style={{ padding: '6rem 1.5rem', background: '#04070D', position: 'relative' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            className="reveal-glass-3d"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {[
              { num: '1,500+', label: 'Landmark Projects', detail: 'Commercial Facades & Interiors', color: '#60A5FA' },
              { num: '99.8%', label: 'Quality Pass Rate', detail: 'Automated Laser Scanning', color: '#34D399' },
              { num: '25+ Yrs', label: 'Manufacturing Legacy', detail: 'State-of-the-art Tempering Furnaces', color: '#FBBF24' },
              { num: 'ISO 9001', label: 'Certified Standards', detail: 'BS 1088 & IS 710 Compliant', color: '#A78BFA' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="glass-card-3d"
                style={{
                  padding: '2rem 1.5rem',
                  textAlign: 'center',
                  transitionDelay: `${idx * 100}ms`,
                }}
              >
                <div style={{ fontSize: '3.25rem', fontWeight: 900, color: stat.color, lineHeight: 1, marginBottom: '0.75rem' }}>
                  {stat.num}
                </div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 800, color: '#F8FAFC', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.375rem' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
