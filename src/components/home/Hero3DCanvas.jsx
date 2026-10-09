import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useAudioFX } from '../../context/AudioFXContext';
import { useSampleCart } from '../../context/SampleCartContext';
import RotatingBadge from '../common/RotatingBadge';

const TOTAL_FRAMES = 192;

export default function Hero3DCanvas() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const { playTone } = useAudioFX();
  const { addItem } = useSampleCart();

  const [images, setImages] = useState([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [frameProgress, setFrameProgress] = useState(0);
  const [activeStage, setActiveStage] = useState(0);

  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const animFrameIdRef = useRef(null);
  const touchStartYRef = useRef(0);

  // Preload all 192 frames
  useEffect(() => {
    let isMounted = true;
    const loadedImages = [];
    let count = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(4, '0');
      img.src = `/frames/frame-${frameNum}.jpg`;

      img.onload = () => {
        if (!isMounted) return;
        count++;
        setLoadedCount(count);
        if (count === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        if (!isMounted) return;
        count++;
        setLoadedCount(count);
        if (count === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      loadedImages.push(img);
    }

    setImages(loadedImages);

    return () => {
      isMounted = false;
    };
  }, []);

  // Update frame progress state and left writings active stage
  const updateProgressState = (frameIdx) => {
    const prog = frameIdx / (TOTAL_FRAMES - 1);
    setFrameProgress(prog);

    if (prog < 0.35) {
      setActiveStage(0);
    } else if (prog < 0.7) {
      setActiveStage(1);
    } else {
      setActiveStage(2);
    }
  };

  // Wheel Scroll-Lock Engine: Keeps page at top while scrubbing 192 frames. Unlocks upon completion!
  useEffect(() => {
    const handleWheel = (e) => {
      const scrollY = window.scrollY || window.pageYOffset;

      // Check if user is at the top hero section
      if (scrollY <= 15) {
        const delta = e.deltaY;
        const currentT = targetFrameRef.current;

        // User scrolling DOWN and animation not finished
        if (delta > 0 && currentT < TOTAL_FRAMES - 1) {
          e.preventDefault();
          const step = Math.max(1, Math.round(Math.abs(delta) * 0.12));
          const nextFrame = Math.min(TOTAL_FRAMES - 1, currentT + step);
          targetFrameRef.current = nextFrame;
          updateProgressState(nextFrame);
        }
        // User scrolling UP at top of page and frame > 0
        else if (delta < 0 && currentT > 0) {
          e.preventDefault();
          const step = Math.max(1, Math.round(Math.abs(delta) * 0.12));
          const nextFrame = Math.max(0, currentT - step);
          targetFrameRef.current = nextFrame;
          updateProgressState(nextFrame);
        }
      }
    };

    // Mobile Touch Swipe Handler
    const handleTouchStart = (e) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY <= 15) {
        const touchY = e.touches[0].clientY;
        const diffY = touchStartYRef.current - touchY; // positive = swipe up / scroll down
        const currentT = targetFrameRef.current;

        if (diffY > 0 && currentT < TOTAL_FRAMES - 1) {
          e.preventDefault();
          const step = Math.max(1, Math.round(Math.abs(diffY) * 0.15));
          const nextFrame = Math.min(TOTAL_FRAMES - 1, currentT + step);
          targetFrameRef.current = nextFrame;
          updateProgressState(nextFrame);
          touchStartYRef.current = touchY;
        } else if (diffY < 0 && currentT > 0) {
          e.preventDefault();
          const step = Math.max(1, Math.round(Math.abs(diffY) * 0.15));
          const nextFrame = Math.max(0, currentT - step);
          targetFrameRef.current = nextFrame;
          updateProgressState(nextFrame);
          touchStartYRef.current = touchY;
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  // Render loop for full-size 3D video playback with 1st image -> 2nd image vertical transition
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
      }

      const w = rect.width;
      const h = rect.height;

      ctx.save();
      ctx.scale(dpr, dpr);

      // Lerp frame tracking for fluid motion
      const diff = targetFrameRef.current - currentFrameRef.current;
      currentFrameRef.current += diff * 0.18;

      let frameIdx = Math.round(currentFrameRef.current);
      frameIdx = ((frameIdx % TOTAL_FRAMES) + TOTAL_FRAMES) % TOTAL_FRAMES;

      ctx.clearRect(0, 0, w, h);

      const img = images[frameIdx];
      if (img && img.complete && img.naturalWidth > 0) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        const imgRatio = img.naturalWidth / img.naturalHeight;
        const canvasRatio = w / h;
        let drawW, drawH, offsetX, offsetY;

        // Full-Screen Cover Scaling: 3D video animation fills 100% of screen without blank black spaces
        if (canvasRatio > imgRatio) {
          drawW = w;
          drawH = w / imgRatio;
          offsetX = 0;
          offsetY = (h - drawH) / 2;
        } else {
          drawH = h;
          drawW = h * imgRatio;
          offsetX = (w - drawW) / 2;
          offsetY = 0;
        }

        // Initial vertical offset transition (1st image condition -> 2nd image condition)
        const startPhase = Math.min(1, Math.max(0, frameIdx / 18));
        const initialYShift = (1 - startPhase) * (-h * 0.085);
        offsetY += initialYShift;

        // Draw 3D image
        ctx.drawImage(img, offsetX, offsetY, drawW, drawH);

        if (w <= 768) {
          // Soft dark ambient vignette so full-screen 3D animation background is visible while text overlay stays ultra-legible
          const mobileFade = ctx.createLinearGradient(0, 0, 0, h);
          mobileFade.addColorStop(0, 'rgba(4, 7, 13, 0.45)');
          mobileFade.addColorStop(0.5, 'rgba(4, 7, 13, 0.65)');
          mobileFade.addColorStop(1, 'rgba(4, 7, 13, 0.94)');
          ctx.fillStyle = mobileFade;
          ctx.fillRect(0, 0, w, h);
        } else {
          // Soft gradient on the left side only for desktop text legibility
          const leftFade = ctx.createLinearGradient(0, 0, w * 0.55, 0);
          leftFade.addColorStop(0, 'rgba(4, 7, 13, 0.85)');
          leftFade.addColorStop(0.65, 'rgba(4, 7, 13, 0.35)');
          leftFade.addColorStop(1, 'rgba(4, 7, 13, 0)');
          ctx.fillStyle = leftFade;
          ctx.fillRect(0, 0, w * 0.55, h);
        }
      } else {
        ctx.fillStyle = '#04070D';
        ctx.fillRect(0, 0, w, h);
      }

      ctx.restore();
      animFrameIdRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [images]);

  const loadPercentage = Math.round((loadedCount / TOTAL_FRAMES) * 100);

  // Story stages for left-aligned writings
  const storyStages = [
    {
      id: 'glass',
      badge: 'TRIVANDRUM GLASS',
      badgeBg: 'rgba(29, 78, 216, 0.35)',
      badgeBorder: 'rgba(96, 165, 250, 0.5)',
      badgeColor: '#60A5FA',
      tagline: '',
      titleLine1: 'PREMIUM GLASS & ARCHITECTURAL',
      titleLine2: 'SOLUTIONS IN TRIVANDRUM',
      highlightColor: '#60A5FA',
      description1: '',
      description2: '',
      specs: [],
    },
    {
      id: 'custom-glazing',
      badge: 'ARCHITECTURAL GLAZING',
      badgeBg: 'rgba(217, 119, 6, 0.35)',
      badgeBorder: 'rgba(245, 158, 11, 0.5)',
      badgeColor: '#F59E0B',
      tagline: '',
      titleLine1: 'TOUGHENED GLASS &',
      titleLine2: 'TRIVANDRUM GLASS SOLUTIONS',
      highlightColor: '#F59E0B',
      description1: '',
      description2: '',
      specs: [],
    },
    {
      id: 'synergy',
      badge: 'PRECISION & ELEGANCE',
      badgeBg: 'rgba(16, 185, 129, 0.35)',
      badgeBorder: 'rgba(52, 211, 153, 0.5)',
      badgeColor: '#34D399',
      tagline: '',
      titleLine1: 'SAFE, ELEGANT &',
      titleLine2: 'FUNCTIONAL SPACES',
      highlightColor: '#34D399',
      description1: '',
      description2: '',
      specs: [],
    },
  ];

  const currentStageData = storyStages[activeStage];

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        background: '#04070D',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        margin: 0,
        padding: 0,
      }}
    >
      <style>{`
        @media (max-width: 900px) {
          .hero-3d-content-wrap {
            flex-direction: column !important;
            align-items: flex-start !important;
            justify-content: flex-start !important;
            padding-top: clamp(4.75rem, 11vh, 6rem) !important;
            padding-bottom: 2rem !important;
            gap: 0.5rem !important;
            height: 100vh !important;
          }
          .hero-3d-writings-block {
            max-width: 100% !important;
            margin-top: 0 !important;
            background: transparent !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            border: none !important;
            border-radius: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
          }
          .hero-3d-rotating-badge {
            right: 1.25rem !important;
            bottom: 2rem !important;
            transform: scale(0.82) !important;
            transform-origin: bottom right !important;
          }
        }
        @media (max-width: 600px) {
          .hero-3d-content-wrap {
            padding-top: clamp(4.25rem, 9vh, 5.25rem) !important;
            padding-bottom: 1.5rem !important;
            padding-inline: 1rem !important;
            justify-content: flex-start !important;
          }
          .hero-3d-writings-block {
            padding: 0 !important;
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
          }
          .hero-3d-headline {
            font-size: clamp(1.5rem, 6vw, 1.95rem) !important;
            margin-bottom: 0.5rem !important;
            line-height: 1.25 !important;
          }
          .hero-3d-desc {
            font-size: clamp(0.8rem, 3.2vw, 0.9rem) !important;
            margin-bottom: 0.65rem !important;
            line-height: 1.45 !important;
            color: #F1F5F9 !important;
          }
          .hero-3d-specs-strip {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 0.35rem !important;
            width: 100% !important;
            padding: 0.45rem 0.75rem !important;
            margin-bottom: 0.65rem !important;
            background: rgba(8, 12, 20, 0.65) !important;
            backdrop-filter: blur(12px) !important;
            border-radius: 12px !important;
          }
          .hero-3d-btn-group {
            display: flex !important;
            flex-direction: row !important;
            gap: 0.5rem !important;
            width: 100% !important;
            margin-bottom: 0.35rem !important;
          }
          .hero-3d-primary-btn {
            padding: 0.45rem 0.85rem !important;
            font-size: 0.75rem !important;
            flex: 1 1 auto !important;
            justify-content: center !important;
          }
          .hero-3d-sample-btn {
            padding: 0.45rem 0.75rem !important;
            font-size: 0.75rem !important;
            justify-content: center !important;
          }
          .hero-3d-rotating-badge {
            right: 0.75rem !important;
            bottom: 1.5rem !important;
            transform: scale(0.68) !important;
            transform-origin: bottom right !important;
          }
        }
      `}</style>

      {/* Big Full-Size 3D Canvas Background */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
          filter: 'contrast(1.04) brightness(0.96)',
        }}
      />

      {/* Loading Indicator */}
      {!isLoaded && (
        <div
          style={{
            position: 'absolute',
            top: '2rem',
            right: '2rem',
            zIndex: 30,
            background: 'rgba(8,12,20,0.85)',
            border: '1px solid rgba(255,255,255,0.15)',
            backdropFilter: 'blur(12px)',
            padding: '0.625rem 1.25rem',
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '0.75rem',
            fontWeight: 700,
            color: '#fff',
          }}
        >
          <Sparkles className="animate-spin" size={14} color="#60A5FA" />
          <span>BUFFERING 3D VIDEO {loadPercentage}%</span>
        </div>
      )}

      {/* Responsive Content Container */}
      <div
        className="hero-3d-content-wrap"
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1440px',
          width: '100%',
          marginInline: '0 auto',
          paddingLeft: 'clamp(1rem, 2.5vw, 2.5rem)',
          paddingRight: 'clamp(1rem, 3vw, 4rem)',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        {/* LEFT WRITINGS - Direct Floating Text without surrounding box */}
        <div className="hero-3d-writings-block" style={{ maxWidth: '560px', marginTop: '-5rem' }}>
          {/* Main Headline */}
          <h1
            className="hero-3d-headline"
            style={{
              fontSize: 'clamp(2.2rem, 4.2vw, 3.5rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '0.85rem',
            }}
          >
            <span style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #F1F5F9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'block'
            }}>
              Premium Glass
            </span>
            <span style={{
              background: 'linear-gradient(135deg, #BAE6FD 0%, #38BDF8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'block'
            }}>
              & Architectural
            </span>
            <span style={{
              background: 'linear-gradient(135deg, #FEF08A 0%, #FACC15 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              marginRight: '0.35em'
            }}>
              Solutions
            </span>
            <span style={{
              color: '#FFFFFF',
              display: 'inline-block'
            }}>
              in Trivandrum
            </span>
          </h1>

          {/* Tagline Sub-heading */}
          {Boolean(currentStageData.tagline) && (
            <div
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                fontWeight: 800,
                color: currentStageData.highlightColor,
                marginBottom: '1rem',
                letterSpacing: '0.02em',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.9)',
              }}
            >
              {currentStageData.tagline}
            </div>
          )}

          {/* Description Paragraph 1 */}
          {Boolean(currentStageData.description1) && (
            <p
              className="hero-3d-desc"
              style={{
                fontSize: '1rem',
                color: '#E2E8F0',
                lineHeight: 1.6,
                marginBottom: '0.625rem',
                fontWeight: 400,
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.9)',
              }}
            >
              {currentStageData.description1}
            </p>
          )}

          {/* Description Paragraph 2 */}
          {Boolean(currentStageData.description2) && (
            <p
              className="hero-3d-desc"
              style={{
                fontSize: '0.9375rem',
                color: '#CBD5E1',
                lineHeight: 1.55,
                marginBottom: '1.25rem',
                fontWeight: 400,
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.9)',
              }}
            >
              {currentStageData.description2}
            </p>
          )}

          {/* Specs Pills Strip */}
          {Boolean(currentStageData.specs && currentStageData.specs.length > 0) && (
            <div
              className="hero-3d-specs-strip"
              style={{
                display: 'inline-flex',
                gap: '1.25rem',
                padding: '0.65rem 1.25rem',
                background: 'rgba(8, 12, 20, 0.65)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(12px)',
                borderRadius: '16px',
                marginBottom: '1.25rem',
              }}
            >
              {currentStageData.specs.map((sp, idx) => (
                <div key={idx}>
                  <div style={{ fontSize: '0.625rem', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase' }}>
                    {sp.label}
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 900, color: '#F8FAFC', marginTop: '2px' }}>
                    {sp.val}
                  </div>
                </div>
              ))}
            </div>
          )}


        </div>
      </div>

      {/* Floating Rotating 65 Years Badge */}
      <div
        className="hero-3d-rotating-badge"
        style={{
          position: 'absolute',
          right: 'clamp(1.5rem, 4vw, 4rem)',
          bottom: 'clamp(5rem, 11vh, 7.5rem)',
          zIndex: 25,
        }}
      >
        <RotatingBadge size={155} number="65" subtext="YEARS" variant="light" text="TRIVANDRUM GLASS ★ 65 YEARS OF EXCELLENCE ★ " />
      </div>
    </section>
  );
}

