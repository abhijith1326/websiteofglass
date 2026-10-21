import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Play, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Film, 
  Image as ImageIcon,
  Building2
} from 'lucide-react';
import { galleryProjects } from '../../data/projectsGalleryData';

export default function SandyResortGallery({ initialProjectId = 'sandy-resort' }) {
  const [activeProjectId, setActiveProjectId] = useState(initialProjectId);
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'photo' | 'video'
  const [activeItem, setActiveItem] = useState(null);

  const activeProject = galleryProjects.find((p) => p.id === activeProjectId) || galleryProjects[0];

  // Filter media based on active tab
  const filteredMedia = activeProject.media.filter((item) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'video') return item.type === 'video';
    if (activeTab === 'photo') return item.type === 'image';
    return true;
  });

  // Handle keyboard navigation for modal lightbox
  useEffect(() => {
    if (!activeItem) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveItem(null);
      } else if (e.key === 'ArrowRight') {
        navigateModal(1);
      } else if (e.key === 'ArrowLeft') {
        navigateModal(-1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [activeItem, filteredMedia]);

  const navigateModal = (direction) => {
    if (!activeItem) return;
    const currentIndex = filteredMedia.findIndex((item) => item.id === activeItem.id);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + direction + filteredMedia.length) % filteredMedia.length;
    setActiveItem(filteredMedia[nextIndex]);
  };

  const photoCount = activeProject.media.filter((m) => m.type === 'image').length;
  const videoCount = activeProject.media.filter((m) => m.type === 'video').length;

  return (
    <section 
      id="project-gallery" 
      style={{ 
        position: 'relative', 
        padding: '5.5rem 1.5rem', 
        background: '#04070D', 
        color: '#FFFFFF',
        overflow: 'hidden'
      }}
    >
      {/* Background Ambient Glows */}
      <div 
        style={{
          position: 'absolute',
          top: '10%',
          left: '-8%',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-5%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1360px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div className="reveal-glass-3d" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              color: '#38BDF8', 
              fontSize: '0.78rem', 
              fontWeight: 800, 
              textTransform: 'uppercase', 
              letterSpacing: '0.12em', 
              padding: '0.4rem 1.15rem',
              borderRadius: '9999px',
              background: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.28)',
              marginBottom: '1rem',
              backdropFilter: 'blur(10px)'
            }}
          >
            <Sparkles size={14} />
            <span>REAL ARCHITECTURAL ARCHIVE</span>
          </div>

          <h2 
            style={{ 
              fontSize: 'clamp(2.3rem, 4.8vw, 3.6rem)', 
              fontWeight: 900, 
              letterSpacing: '-0.02em', 
              margin: '0 0 1.5rem 0',
              lineHeight: 1.15
            }}
          >
            PROJECT <span style={{ color: '#38BDF8' }}>GALLERY</span>
          </h2>

          {/* Project Selection Tabs */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '0.85rem', 
              marginBottom: '2rem', 
              flexWrap: 'wrap' 
            }}
          >
            {galleryProjects.map((proj) => {
              const isSelected = activeProject.id === proj.id;
              return (
                <button
                  key={proj.id}
                  onClick={() => { setActiveProjectId(proj.id); setActiveTab('all'); }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.7rem 1.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    cursor: 'pointer',
                    border: isSelected ? '2px solid #38BDF8' : '1px solid rgba(255, 255, 255, 0.15)',
                    background: isSelected 
                      ? 'linear-gradient(135deg, rgba(14, 165, 233, 0.3) 0%, rgba(37, 99, 235, 0.4) 100%)' 
                      : 'rgba(15, 23, 42, 0.7)',
                    color: isSelected ? '#FFFFFF' : '#94A3B8',
                    boxShadow: isSelected ? '0 0 25px rgba(56, 189, 248, 0.4)' : 'none',
                    backdropFilter: 'blur(12px)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
                      e.currentTarget.style.color = '#FFFFFF';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                      e.currentTarget.style.color = '#94A3B8';
                    }
                  }}
                >
                  <Building2 size={16} color={isSelected ? '#38BDF8' : '#64748B'} />
                  <span>{proj.name}</span>
                  <span 
                    style={{
                      fontSize: '0.72rem',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '9999px',
                      background: isSelected ? 'rgba(56, 189, 248, 0.35)' : 'rgba(255, 255, 255, 0.08)',
                      color: isSelected ? '#FFFFFF' : '#64748B',
                      fontWeight: 900
                    }}
                  >
                    {proj.media.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Project Title */}
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.85rem 2.5rem',
              borderRadius: '16px',
              background: 'rgba(15, 23, 42, 0.75)',
              border: '1.5px solid rgba(56, 189, 248, 0.28)',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.5), 0 0 25px rgba(56, 189, 248, 0.1)',
              backdropFilter: 'blur(12px)',
              marginInline: 'auto',
              marginBottom: '1.75rem',
            }}
          >
            <h3 style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 900, color: '#FFFFFF', margin: 0, letterSpacing: '-0.01em' }}>
              {activeProject.name}
            </h3>
          </div>
        </div>

        {/* Clean Media Filter Tabs (All / Photos / Videos) */}
        <div 
          className="reveal-glass-3d"
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            gap: '0.65rem', 
            marginBottom: '2.5rem' 
          }}
        >
          {[
            { id: 'all', label: 'ALL MEDIA', count: activeProject.media.length },
            { id: 'photo', label: 'PHOTOS', count: photoCount, icon: <ImageIcon size={14} /> },
            ...(videoCount > 0 ? [{ id: 'video', label: 'VIDEOS', count: videoCount, icon: <Film size={14} /> }] : []),
          ].map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.55rem 1.35rem',
                  borderRadius: '9999px',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  border: isActive 
                    ? '1.5px solid #38BDF8' 
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  background: isActive 
                    ? 'linear-gradient(135deg, rgba(14, 165, 233, 0.25) 0%, rgba(2, 132, 199, 0.35) 100%)' 
                    : 'rgba(15, 23, 42, 0.65)',
                  color: isActive ? '#FFFFFF' : '#94A3B8',
                  boxShadow: isActive ? '0 0 20px rgba(56, 189, 248, 0.35)' : 'none',
                  backdropFilter: 'blur(12px)',
                  transition: 'all 0.25s ease',
                }}
              >
                {tab.icon}
                <span>{tab.label}</span>
                <span 
                  style={{
                    fontSize: '0.6875rem',
                    padding: '0.12rem 0.45rem',
                    borderRadius: '9999px',
                    background: isActive ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                    color: isActive ? '#FFFFFF' : '#64748B',
                    fontWeight: 800,
                  }}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid of Active Project's Photos and Videos */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
            gap: '1.25rem',
          }}
        >
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                background: '#0B132B',
                border: item.type === 'video' ? '1.5px solid rgba(56, 189, 248, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)',
                cursor: 'pointer',
                aspectRatio: '4 / 3',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.6)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.65), 0 0 22px rgba(56, 189, 248, 0.25)';
                const mediaEl = e.currentTarget.querySelector('.project-gallery-media');
                if (mediaEl) mediaEl.style.transform = 'scale(1.08)';
                const overlay = e.currentTarget.querySelector('.project-gallery-overlay');
                if (overlay) overlay.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = item.type === 'video' ? '1.5px solid rgba(56, 189, 248, 0.4)' : 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
                const mediaEl = e.currentTarget.querySelector('.project-gallery-media');
                if (mediaEl) mediaEl.style.transform = 'scale(1)';
                const overlay = e.currentTarget.querySelector('.project-gallery-overlay');
                if (overlay) overlay.style.opacity = '0';
              }}
            >
              {/* Media Element: Image or Video Poster */}
              {item.type === 'video' ? (
                <div style={{ width: '100%', height: '100%', position: 'relative', background: '#000000' }}>
                  <img
                    src={item.poster}
                    alt={item.title}
                    loading="lazy"
                    className="project-gallery-media"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  />
                  {/* Distinct Video Play Badge */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '0.85rem',
                      left: '0.85rem',
                      zIndex: 3,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '9999px',
                      background: 'rgba(8, 12, 20, 0.85)',
                      border: '1px solid rgba(56, 189, 248, 0.4)',
                      backdropFilter: 'blur(8px)',
                      color: '#38BDF8',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    <Film size={12} />
                    <span>VIDEO</span>
                  </div>

                  {/* Centered Play Button */}
                  <div 
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 2,
                    }}
                  >
                    <div 
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.9) 0%, rgba(37, 99, 235, 0.9) 100%)',
                        border: '2px solid rgba(255, 255, 255, 0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6), 0 0 20px rgba(56, 189, 248, 0.5)',
                        color: '#FFFFFF',
                      }}
                    >
                      <Play size={22} style={{ marginLeft: '3px' }} />
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="project-gallery-media"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />
              )}

              {/* Minimalist Hover Overlay */}
              <div 
                className="project-gallery-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(4, 7, 13, 0.45)',
                  backdropFilter: 'blur(2px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.25s ease',
                  pointerEvents: 'none',
                  zIndex: 4,
                }}
              >
                <div 
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'rgba(15, 23, 42, 0.85)',
                    border: '1.5px solid rgba(56, 189, 248, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38BDF8',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  {item.type === 'video' ? <Play size={20} style={{ marginLeft: '2px' }} /> : <Maximize2 size={18} />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Lightbox Modal for Photo / Video */}
      {activeItem && (
        <div 
          onClick={() => setActiveItem(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(4, 7, 13, 0.95)',
            backdropFilter: 'blur(24px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(1rem, 3vw, 2.5rem)',
          }}
        >
          {/* Top Bar with Counter & Close */}
          <div 
            style={{
              position: 'absolute',
              top: '1.25rem',
              left: '1.5rem',
              right: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              zIndex: 10,
              pointerEvents: 'none',
            }}
          >
            <div 
              style={{
                color: '#BAE6FD',
                fontSize: '0.875rem',
                fontWeight: 700,
                background: 'rgba(15, 23, 42, 0.75)',
                padding: '0.4rem 1.1rem',
                borderRadius: '9999px',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span>PROJECT GALLERY • {activeProject.name} • {filteredMedia.findIndex(i => i.id === activeItem.id) + 1} / {filteredMedia.length}</span>
              {activeItem.type === 'video' && (
                <span style={{ color: '#F59E0B', fontWeight: 800 }}>[VIDEO]</span>
              )}
            </div>

            <button
              onClick={() => setActiveItem(null)}
              aria-label="Close Lightbox"
              style={{
                pointerEvents: 'auto',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(15, 23, 42, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#EF4444';
                e.currentTarget.style.borderColor = '#EF4444';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(15, 23, 42, 0.85)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Container */}
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '92vw',
              maxHeight: '88vh',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9), 0 0 50px rgba(56, 189, 248, 0.25)',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#04070D',
            }}
          >
            {activeItem.type === 'video' ? (
              <video
                key={activeItem.src}
                controls
                autoPlay
                playsInline
                preload="auto"
                style={{
                  maxWidth: '90vw',
                  maxHeight: '85vh',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '16px',
                  background: '#000000',
                }}
              >
                <source src={activeItem.src} type="video/mp4" />
                <source src={activeItem.src} type="video/quicktime" />
                Your browser does not support playing this video format.
              </video>
            ) : (
              <img
                src={activeItem.src}
                alt={activeItem.title}
                style={{
                  maxWidth: '90vw',
                  maxHeight: '85vh',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            )}

            {/* Previous Button */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateModal(-1); }}
              aria-label="Previous Media"
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: 'rgba(15, 23, 42, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0284C7';
                e.currentTarget.style.borderColor = '#38BDF8';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(15, 23, 42, 0.85)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              }}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateModal(1); }}
              aria-label="Next Media"
              style={{
                position: 'absolute',
                right: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: 'rgba(15, 23, 42, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0284C7';
                e.currentTarget.style.borderColor = '#38BDF8';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(15, 23, 42, 0.85)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              }}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
