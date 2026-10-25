import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Play, Pause } from 'lucide-react';
import { useAudioFX } from '../../context/AudioFXContext';
import { useSampleCart } from '../../context/SampleCartContext';
import RotatingBadge from '../common/RotatingBadge';

const DESKTOP_FRAMES = 192;
const MOBILE_FRAMES = 105;

export default function Hero3DCanvas() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const { playTone } = useAudioFX();
  const { addItem } = useSampleCart();

  const [isMobile, setIsMobile] = useState(() => (typeof window !== 'undefined' ? window.innerWidth <= 768 : false));
  const [desktopImages, setDesktopImages] = useState([]);
  const [mobileImages, setMobileImages] = useState([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [frameProgress, setFrameProgress] = useState(0);
  const [activeStage, setActiveStage] = useState(0);
  const [isPlayingAuto, setIsPlayingAuto] = useState(false);

  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const animFrameIdRef = useRef(null);
  const autoPlayTimerRef = useRef(null);
  const touchStartYRef = useRef(0);
  const hasTriggeredImpactSound = useRef(false);

  // Synchronize screen size
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile((prev) => {
        if (prev !== mobile) {
          const maxFrames = mobile ? MOBILE_FRAMES : DESKTOP_FRAMES;
          targetFrameRef.current = Math.min(targetFrameRef.current, maxFrames - 1);
          currentFrameRef.current = Math.min(currentFrameRef.current, maxFrames - 1);
          return mobile;
        }
        return prev;
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Instant Progressive Frame Loading Engine
  useEffect(() => {
    let isMounted = true;
    const activeIsMobile = window.innerWidth <= 768;
    const activeFolder = activeIsMobile ? '/mobile-frames' : '/frames';
    const totalFrames = activeIsMobile ? MOBILE_FRAMES : DESKTOP_FRAMES;

    const targetArr = new Array(totalFrames);

    // 1. Instantly load Frame 1 so 3D Canvas renders immediately (< 50ms) without waiting
    const firstImg = new Image();
    firstImg.src = `${activeFolder}/frame-0001.jpg`;
    firstImg.onload = () => {
      if (!isMounted) return;
      targetArr[0] = firstImg;
      if (activeIsMobile) setMobileImages([...targetArr]);
      else setDesktopImages([...targetArr]);
      setIsLoaded(true);
    };

    // 2. Preload remaining frames for active device in background
    let loadedCounter = 0;
    for (let i = 1; i <= totalFrames; i++) {
      const frameNum = String(i).padStart(4, '0');
      const img = new Image();
      img.src = `${activeFolder}/frame-${frameNum}.jpg`;

      img.onload = () => {
        if (!isMounted) return;
        targetArr[i - 1] = img;
        loadedCounter++;
        setLoadedCount(loadedCounter);
        if (loadedCounter === totalFrames) {
          if (activeIsMobile) setMobileImages([...targetArr]);
          else setDesktopImages([...targetArr]);
        }
      };

      img.onerror = () => {
        if (!isMounted) return;
        loadedCounter++;
        setLoadedCount(loadedCounter);
      };
    }

    if (activeIsMobile) setMobileImages(targetArr);
    else setDesktopImages(targetArr);

    return () => {
      isMounted = false;
    };
  }, [isMobile]);

  // Update frame progress state and active stage
  const updateProgressState = (frameIdx, maxFrames) => {
    const total = maxFrames || (window.innerWidth <= 768 ? MOBILE_FRAMES : DESKTOP_FRAMES);
    const prog = Math.min(1, Math.max(0, frameIdx / (total - 1)));
    setFrameProgress(prog);

    if (prog < 0.35) {
      setActiveStage(0);
    } else if (prog < 0.7) {
      setActiveStage(1);
    } else {
      setActiveStage(2);
    }

    // Trigger subtle impact tone when hammer strikes (frame ~68 on mobile)
    const activeIsMobile = window.innerWidth <= 768;
    if (activeIsMobile && frameIdx >= 67 && frameIdx <= 72) {
      if (!hasTriggeredImpactSound.current) {
        hasTriggeredImpactSound.current = true;
        try {
          playTone?.(160, 0.09);
        } catch (_) { }
      }
    } else if (frameIdx < 60 || frameIdx > 80) {
      hasTriggeredImpactSound.current = false;
    }
  };

  // Toggle Auto Play animation on mobile
  const toggleAutoPlay = () => {
    if (isPlayingAuto) {
      setIsPlayingAuto(false);
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    } else {
      setIsPlayingAuto(true);
      const total = isMobile ? MOBILE_FRAMES : DESKTOP_FRAMES;
      if (targetFrameRef.current >= total - 1) {
        targetFrameRef.current = 0;
        currentFrameRef.current = 0;
      }
      autoPlayTimerRef.current = setInterval(() => {
        targetFrameRef.current = (targetFrameRef.current + 1) % total;
        updateProgressState(targetFrameRef.current, total);
      }, 35);
    }
  };

  useEffect(() => {
    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, []);

  // Wheel Scroll-Lock Engine & Mobile Touch Swipe
  useEffect(() => {
    const handleWheel = (e) => {
      const scrollY = window.scrollY || window.pageYOffset;
      const currentIsMobile = window.innerWidth <= 768;
      const totalFrames = currentIsMobile ? MOBILE_FRAMES : DESKTOP_FRAMES;

      if (scrollY <= 15) {
        const delta = e.deltaY;
        const currentT = targetFrameRef.current;

        // User scrolling DOWN and animation not finished
        if (delta > 0 && currentT < totalFrames - 1) {
          e.preventDefault();
          if (autoPlayTimerRef.current) {
            clearInterval(autoPlayTimerRef.current);
            setIsPlayingAuto(false);
          }
          const step = Math.max(1, Math.round(Math.abs(delta) * 0.12));
          const nextFrame = Math.min(totalFrames - 1, currentT + step);
          targetFrameRef.current = nextFrame;
          updateProgressState(nextFrame, totalFrames);
        }
        // User scrolling UP at top of page and frame > 0
        else if (delta < 0 && currentT > 0) {
          e.preventDefault();
          if (autoPlayTimerRef.current) {
            clearInterval(autoPlayTimerRef.current);
            setIsPlayingAuto(false);
          }
          const step = Math.max(1, Math.round(Math.abs(delta) * 0.12));
          const nextFrame = Math.max(0, currentT - step);
          targetFrameRef.current = nextFrame;
          updateProgressState(nextFrame, totalFrames);
        }
      }
    };

    // Mobile Touch Swipe Handler
    const handleTouchStart = (e) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const scrollY = window.scrollY || window.pageYOffset;
      const currentIsMobile = window.innerWidth <= 768;
      const totalFrames = currentIsMobile ? MOBILE_FRAMES : DESKTOP_FRAMES;

      if (scrollY <= 15) {
        const touchY = e.touches[0].clientY;
        const diffY = touchStartYRef.current - touchY; // positive = swipe up / scroll down
        const currentT = targetFrameRef.current;

        if (diffY > 0 && currentT < totalFrames - 1) {
          e.preventDefault();
          if (autoPlayTimerRef.current) {
            clearInterval(autoPlayTimerRef.current);
            setIsPlayingAuto(false);
          }
          const step = Math.max(1, Math.round(Math.abs(diffY) * 0.18));
          const nextFrame = Math.min(totalFrames - 1, currentT + step);
          targetFrameRef.current = nextFrame;
          updateProgressState(nextFrame, totalFrames);
          touchStartYRef.current = touchY;
        } else if (diffY < 0 && currentT > 0) {
          e.preventDefault();
          if (autoPlayTimerRef.current) {
            clearInterval(autoPlayTimerRef.current);
            setIsPlayingAuto(false);
          }
          const step = Math.max(1, Math.round(Math.abs(diffY) * 0.18));
          const nextFrame = Math.max(0, currentT - step);
          targetFrameRef.current = nextFrame;
          updateProgressState(nextFrame, totalFrames);
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
  }, [isMobile]);

  // Render loop for full-size 3D video playback
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
      const isMobileView = w <= 768;
      const totalFrames = isMobileView ? MOBILE_FRAMES : DESKTOP_FRAMES;

      ctx.save();
      ctx.scale(dpr, dpr);

      // Lerp frame tracking for fluid motion
      const diff = targetFrameRef.current - currentFrameRef.current;
      currentFrameRef.current += diff * 0.18;

      let frameIdx = Math.round(currentFrameRef.current);
      frameIdx = Math.max(0, Math.min(totalFrames - 1, frameIdx));

      // Clear & fill background
      ctx.clearRect(0, 0, w, h);
      if (isMobileView) {
        // Deep pure black background to seamlessly match the hammer strike frames
        ctx.fillStyle = '#000000';
      } else {
        // Desktop View background
        const bgGrad = ctx.createRadialGradient(w * 0.5, h * 0.5, 10, w * 0.5, h * 0.5, Math.max(w, h) * 0.7);
        bgGrad.addColorStop(0, '#152136');
        bgGrad.addColorStop(0.5, '#090e17');
        bgGrad.addColorStop(1, '#04070d');
        ctx.fillStyle = bgGrad;
      }
      ctx.fillRect(0, 0, w, h);

      const targetImages = isMobileView ? mobileImages : desktopImages;
      const img = targetImages[frameIdx] || targetImages[0] || (desktopImages[frameIdx] || desktopImages[0]);

      if (img && img.complete && img.naturalWidth > 0) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        const imgRatio = img.naturalWidth / img.naturalHeight;
        const canvasRatio = w / h;
        let drawW, drawH, offsetX, offsetY;

        if (isMobileView) {
          // Mobile View: Cover 100% of mobile viewport height & width using dedicated 9:16 hammer strike frames
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
        } else if (canvasRatio > imgRatio) {
          // Desktop Wide View
          drawW = w;
          drawH = w / imgRatio;
          offsetX = 0;
          offsetY = (h - drawH) / 2;
          const startPhase = Math.min(1, Math.max(0, frameIdx / 18));
          const initialYShift = (1 - startPhase) * (-h * 0.085);
          offsetY += initialYShift;
        } else {
          // Desktop Standard View
          drawH = h;
          drawW = h * imgRatio;
          offsetX = (w - drawW) / 2;
          offsetY = 0;
          const startPhase = Math.min(1, Math.max(0, frameIdx / 18));
          const initialYShift = (1 - startPhase) * (-h * 0.085);
          offsetY += initialYShift;
        }

        // Draw bright 3D image
        ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
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
  }, [desktopImages, mobileImages]);

  // Story stages tailored for desktop & mobile
  const desktopStages = [
    {
      id: 'quality-glass',
      stageNum: '01',
      badge: 'ARCHITECTURAL GLASS',
      badgeBg: 'rgba(29, 78, 216, 0.35)',
      badgeBorder: 'rgba(96, 165, 250, 0.5)',
      badgeColor: '#60A5FA',
      title: 'Quality Glass',
      description: 'High-performance toughened, laminated & acoustic glazing tailored for modern aesthetics.',
      highlightColor: '#60A5FA',
    },
    {
      id: 'precision-engineering',
      stageNum: '02',
      badge: 'PRECISION CNC & SAFETY',
      badgeBg: 'rgba(217, 119, 6, 0.35)',
      badgeBorder: 'rgba(245, 158, 11, 0.5)',
      badgeColor: '#F59E0B',
      title: 'Precision Engineering',
      description: 'State-of-the-art CNC processing, exact tolerances and rigorous safety testing standards.',
      highlightColor: '#F59E0B',
    },
    {
      id: 'professional-installation',
      stageNum: '03',
      badge: 'CERTIFIED EXECUTION',
      badgeBg: 'rgba(16, 185, 129, 0.35)',
      badgeBorder: 'rgba(52, 211, 153, 0.5)',
      badgeColor: '#34D399',
      title: 'Professional Installation',
      description: 'Certified installation engineering guaranteeing structural safety and flawless finishing.',
      highlightColor: '#34D399',
    },
  ];

  const mobileStages = [
    {
      id: 'toughened-safety',
      stageNum: '01',
      badge: 'TOUGHENED SAFETY GLASS',
      badgeBg: 'rgba(29, 78, 216, 0.35)',
      badgeBorder: 'rgba(96, 165, 250, 0.5)',
      badgeColor: '#60A5FA',
      title: 'Impact Resistant Glass',
      description: 'Engineered up to 5x stronger than standard annealed glass with high mechanical resilience.',
      highlightColor: '#60A5FA',
    },
    {
      id: 'hammer-test',
      stageNum: '02',
      badge: 'HAMMER STRIKE TESTED',
      badgeBg: 'rgba(239, 68, 68, 0.35)',
      badgeBorder: 'rgba(248, 113, 113, 0.5)',
      badgeColor: '#F87171',
      title: 'Withstands Direct Impact',
      description: 'Proven structural toughness absorbing high-velocity mechanical shocks without cracking.',
      highlightColor: '#F87171',
    },
    {
      id: 'certified-security',
      stageNum: '03',
      badge: 'ZERO FAILURE INTEGRITY',
      badgeBg: 'rgba(16, 185, 129, 0.35)',
      badgeBorder: 'rgba(52, 211, 153, 0.5)',
      badgeColor: '#34D399',
      title: 'Certified Architectural Safety',
      description: 'ISO-compliant safety glazing delivering flawless protection for residential & commercial builds.',
      highlightColor: '#34D399',
    },
  ];

  const storyStages = isMobile ? mobileStages : desktopStages;
  const currentStageData = storyStages[activeStage] || storyStages[0];

  return (
    <section
      ref={containerRef}
      className="hero-3d-section-wrap"
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
        @media (max-width: 768px) {
          .hero-3d-section-wrap {
            background: #000000 !important;
            height: 100vh !important;
            height: 100dvh !important;
            min-height: 100dvh !important;
          }
        }
        @media (max-width: 900px) {
          .hero-3d-content-wrap {
            flex-direction: column !important;
            align-items: flex-start !important;
            justify-content: flex-start !important;
            padding-top: clamp(4.75rem, 11vh, 6rem) !important;
            padding-bottom: 2rem !important;
            gap: 0.5rem !important;
            height: 100vh !important;
            height: 100dvh !important;
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
            right: 1.5rem !important;
            bottom: clamp(3.75rem, 8vh, 5.5rem) !important;
            transform: none !important;
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
          .hero-3d-rotating-badge {
            right: 1.25rem !important;
            bottom: calc(clamp(3.75rem, 8vh, 5.5rem) + env(safe-area-inset-bottom, 0px)) !important;
            transform: none !important;
          }
        }
        @media (max-width: 420px) {
          .hero-3d-rotating-badge {
            right: 0.85rem !important;
            bottom: calc(clamp(3.5rem, 7.5vh, 5rem) + env(safe-area-inset-bottom, 0px)) !important;
            transform: none !important;
          }
        }
        @keyframes heroStageFadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-stage-content {
          animation: heroStageFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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
        }}
      />

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
        {/* LEFT WRITINGS - Dynamic Content Updating on Scroll */}
        <div className="hero-3d-writings-block" style={{ maxWidth: '580px', marginTop: '-4rem' }}>
          <div key={currentStageData.id} className="hero-stage-content">
            {/* Stage Indicator Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.42rem 1.1rem',
                borderRadius: '9999px',
                background: currentStageData.badgeBg,
                border: `1px solid ${currentStageData.badgeBorder}`,
                color: currentStageData.badgeColor,
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                marginBottom: '1.25rem',
                backdropFilter: 'blur(10px)',
                boxShadow: `0 4px 18px ${currentStageData.badgeBg}`,
              }}
            >
              <Sparkles size={14} />
              <span>STAGE {currentStageData.stageNum} / 03 • {currentStageData.badge}</span>
            </div>

            {/* Dynamic Headline */}
            <h1
              className="hero-3d-headline"
              style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.85rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
                textShadow: '0 4px 25px rgba(0, 0, 0, 0.85)',
              }}
            >
              <span
                style={{
                  background: `linear-gradient(135deg, #FFFFFF 40%, ${currentStageData.highlightColor} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'block',
                }}
              >
                {currentStageData.title}
              </span>
            </h1>

            {/* Dynamic Description */}
            <p
              className="hero-3d-desc"
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.18rem)',
                color: '#E2E8F0',
                lineHeight: 1.65,
                maxWidth: '540px',
                fontWeight: 500,
                textShadow: '0 2px 14px rgba(0, 0, 0, 0.95)',
                margin: 0,
              }}
            >
              {currentStageData.description}
            </p>
          </div>

          {/* Stage Progress Indicators */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '1.75rem' }}>
            {storyStages.map((stg, i) => (
              <div
                key={stg.id}
                style={{
                  height: '4px',
                  width: activeStage === i ? '42px' : '14px',
                  borderRadius: '9999px',
                  background: activeStage === i ? stg.highlightColor : 'rgba(255, 255, 255, 0.25)',
                  boxShadow: activeStage === i ? `0 0 12px ${stg.highlightColor}` : 'none',
                  transition: 'all 0.35s ease',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Interactive Playback Pill & Swipe Prompt */}
      {isMobile && (
        <div
          style={{
            position: 'absolute',
            left: '1rem',
            bottom: 'calc(clamp(3.75rem, 8vh, 5.5rem) + env(safe-area-inset-bottom, 0px))',
            zIndex: 25,
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            background: 'rgba(8, 12, 20, 0.82)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '9999px',
            padding: '0.35rem 0.85rem',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.7)',
          }}
        >
          <button
            onClick={toggleAutoPlay}
            aria-label={isPlayingAuto ? 'Pause impact test' : 'Play hammer impact test'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              background: isPlayingAuto ? '#EF4444' : '#2563EB',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '9999px',
              padding: '0.3rem 0.75rem',
              fontSize: '0.74rem',
              fontWeight: 800,
              cursor: 'pointer',
              boxShadow: isPlayingAuto ? '0 0 14px rgba(239, 68, 68, 0.6)' : '0 0 14px rgba(37, 99, 235, 0.6)',
              transition: 'all 0.2s ease',
            }}
          >
            {isPlayingAuto ? <Pause size={12} /> : <Play size={12} />}
            <span>{isPlayingAuto ? 'Pause' : 'Play Strike'}</span>
          </button>
          <span style={{ fontSize: '0.72rem', color: '#94A3B8', fontWeight: 700, letterSpacing: '0.02em' }}>
            {Math.round(frameProgress * 100)}%
          </span>
        </div>
      )}

      {/* Floating Rotating 65 Years Badge */}
      <div
        className="hero-3d-rotating-badge"
        style={{
          position: 'absolute',
          right: 'clamp(1.5rem, 4vw, 4rem)',
          bottom: 'clamp(4rem, 8.5vh, 6rem)',
          zIndex: 25,
        }}
      >
        <RotatingBadge size={185} number="65" subtext="YEARS" variant="light" text="TRAVANCORE GLASS ★ 65 YEARS OF EXCELLENCE ★ " />
      </div>
    </section>
  );
}

