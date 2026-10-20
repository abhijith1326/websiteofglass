import React from 'react';
import { Award, Calendar, Sparkles, ShieldCheck, HeartHandshake, CheckCircle2, UserCheck, TrendingUp, Lightbulb, Compass, Award as AwardIcon } from 'lucide-react';

export default function AboutUs() {
  return (
    <div style={{
      background: '#1A2463',
      minHeight: '100vh',
      color: '#FFFFFF',
      position: 'relative',
      padding: '4rem 1.5rem 6rem 1.5rem'
    }}>
      {/* Top Ambient Gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '340px',
        background: 'radial-gradient(ellipse at top, rgba(255, 255, 255, 0.12) 0%, rgba(26, 36, 99, 0) 75%)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

        {/* HERO HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#FFFFFF',
            fontSize: '0.8125rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            marginBottom: '1rem',
            background: 'rgba(255, 255, 255, 0.14)',
            padding: '0.4rem 1.15rem',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(8px)'
          }}>
            <Award size={16} color="#FFFFFF" /> ABOUT TRIVANDRUM GLASS & PLYWOODS
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
            fontWeight: 900,
            color: '#FFFFFF',
            lineHeight: 1.15,
            margin: '0 0 1rem 0',
            letterSpacing: '-0.02em'
          }}>
            Our History, Heritage & Leadership
          </h1>
          <p style={{ color: '#DBEAFE', fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', maxWidth: '760px', margin: '0 auto', lineHeight: 1.6, fontWeight: 500 }}>
            Preserving a legacy since 1963, embracing the future, and building trust for generations to come.
          </p>
        </div>


        {/* ========================================================================= */}
        {/* SECTION 1: THE FOUNDER'S VISION (IMAGE LEFT, CONTENT RIGHT)               */}
        {/* ========================================================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 'clamp(2.5rem, 5vw, 4.5rem)',
          alignItems: 'start',
          marginBottom: '6rem'
        }}>

          {/* LEFT SIDE: STICKY PICTURE */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.25)',
              border: '4px solid rgba(255, 255, 255, 0.35)',
              background: 'rgba(255, 255, 255, 0.1)',
              position: 'relative'
            }}>
              <img
                src="/assets/images/founder_vision.jpg"
                alt="A. M. Hassan - Founder's Vision"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>

            {/* Founder Badge directly under picture */}
            <div style={{
              marginTop: '1.25rem',
              background: 'linear-gradient(135deg, #0A2540 0%, #0F172A 100%)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#FFFFFF',
              padding: '1rem 1.35rem',
              borderRadius: '16px',
              boxShadow: '0 10px 25px rgba(29, 78, 216, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justify: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <UserCheck size={22} color="#93C5FD" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '0.04em' }}>A. M. HASSAN</span>
              </div>
              <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.35rem 0.85rem', borderRadius: '8px', fontSize: '0.8125rem', fontWeight: 900, letterSpacing: '0.06em', flexShrink: 0 }}>FOUNDER</span>
            </div>
          </div>


          {/* RIGHT SIDE: CONTENT FOR FOUNDER'S VISION */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

            {/* SUB-SECTION 1 */}
            <div>
              <div style={{ color: '#93C5FD', fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.4rem' }}>
                FOUNDER'S LEGACY —
              </div>
              <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: 900,
                color: '#FFFFFF',
                margin: '0 0 1.25rem 0',
                lineHeight: 1.15
              }}>
                The Founder’s Vision
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', color: '#E0E7FF', fontSize: '1.025rem', lineHeight: 1.75 }}>
                <p style={{ margin: 0, fontSize: '1.075rem', fontWeight: 600, color: '#FFFFFF' }}>
                  A. M. Hassan founded <strong style={{ color: '#FFFFFF' }}>S.N.B Mirror Mart in 1963</strong> with a simple yet meaningful vision: to turn honest craftsmanship into products that customers could trust.
                </p>

                <p style={{ margin: 0 }}>
                  At a time when businesses were built through personal relationships, skilled workmanship, and a strong sense of responsibility, he believed that quality was not simply a feature of a product — it was a reflection of the values behind the business.
                </p>

                <p style={{ margin: 0 }}>
                  From the <strong style={{ color: '#FFFFFF' }}>Pappanamcode Industrial Estate</strong>, he began his journey by transforming plain sheets of glass into carefully finished mirrors. With attention to detail, precision, and dedication to his craft, he established a standard of workmanship that became an important part of the company's identity.
                </p>
              </div>
            </div>


            {/* SUB-SECTION 2 */}
            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '2rem' }}>
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                margin: '0 0 1rem 0'
              }}>
                Building Through Trust and Craftsmanship
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', color: '#E0E7FF', fontSize: '1.025rem', lineHeight: 1.75 }}>
                <p style={{ margin: 0 }}>
                  For A. M. Hassan, the foundation of a successful business went beyond products and transactions. It was built through <strong style={{ color: '#FFFFFF' }}>dedication, fair dealings, consistency, and the confidence of customers</strong>.
                </p>

                <p style={{ margin: 0 }}>
                  Every mirror produced represented more than craftsmanship. It represented a commitment to doing work carefully and responsibly. Every customer interaction was an opportunity to establish a relationship based on mutual respect and trust.
                </p>

                <p style={{ margin: 0 }}>
                  Through this approach, S.N.B Mirror Mart gradually built a reputation that extended beyond the products it supplied. Customers came to associate the business with reliability, personal attention, and dependable workmanship.
                </p>
              </div>
            </div>


            {/* SUB-SECTION 3 */}
            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '2rem' }}>
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                margin: '0 0 1rem 0'
              }}>
                A Vision That Went Beyond Mirrors
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', color: '#E0E7FF', fontSize: '1.025rem', lineHeight: 1.75 }}>
                <p style={{ margin: 0 }}>
                  Although mirrors were at the heart of the early business, A. M. Hassan's vision was much broader.
                </p>

                <p style={{ margin: 0 }}>
                  He understood that a lasting business is not created simply by selling products. It is created by establishing a <strong style={{ color: '#FFFFFF' }}>name that people remember, trust, and confidently return to</strong>.
                </p>

                <p style={{ margin: 0 }}>
                  His focus on quality and customer satisfaction laid the groundwork for a business culture where commitments mattered, relationships mattered, and every piece of work carried the responsibility of representing the name behind it.
                </p>

                <p style={{ margin: 0 }}>
                  The values established during those early years became the foundation upon which future generations could build.
                </p>
              </div>
            </div>


            {/* SUB-SECTION 4 */}
            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '2rem' }}>
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                margin: '0 0 1rem 0'
              }}>
                A Legacy Passed Through Generations
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', color: '#E0E7FF', fontSize: '1.025rem', lineHeight: 1.75 }}>
                <p style={{ margin: 0 }}>
                  As the years passed, the business continued to evolve. Markets changed, customer expectations developed, and the applications of glass and other building materials expanded.
                </p>

                <p style={{ margin: 0 }}>
                  Yet the fundamental principles established by A. M. Hassan remained relevant.
                </p>

                <p style={{ margin: 0 }}>
                  His vision became a legacy that could be carried forward — not by simply repeating the past, but by preserving its values while adapting to the future.
                </p>

                <p style={{ margin: 0 }}>
                  That legacy continued through the next generation and eventually contributed to the establishment of <strong style={{ color: '#FFFFFF' }}>Trivandrum Glass and Plywoods in 2020</strong>, expanding the family's journey into glass, mirrors, plywood, and related interior and architectural solutions.
                </p>

                <p style={{ margin: 0 }}>
                  Today, the business combines decades of experience with modern products, evolving technologies, contemporary designs, and changing customer requirements.
                </p>
              </div>
            </div>


            {/* SUB-SECTION 5 */}
            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '2rem' }}>
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                margin: '0 0 1rem 0'
              }}>
                From 1963 to the Future
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', color: '#E0E7FF', fontSize: '1.025rem', lineHeight: 1.75 }}>
                <p style={{ margin: 0 }}>
                  More than six decades after S.N.B Mirror Mart began its journey, the principles that shaped its foundation continue to influence the way we work.
                </p>

                <p style={{ margin: 0 }}>
                  The tools and products may have changed. The industry may have evolved. But the importance of <strong style={{ color: '#FFFFFF' }}>quality, integrity, craftsmanship, and trust</strong> remains the same.
                </p>

                <p style={{ margin: 0 }}>
                  The journey from a mirror-focused business to a broader glass and plywood enterprise reflects the ability to evolve while remaining connected to one's roots.
                </p>

                <p style={{ margin: 0 }}>
                  For us, the legacy of A. M. Hassan is therefore not simply a chapter in our history. It is a continuing responsibility — to maintain the standards he established and carry them forward for the generations that follow.
                </p>
              </div>
            </div>


            {/* SUB-SECTION 6 */}
            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '2rem' }}>
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                margin: '0 0 1.25rem 0'
              }}>
                A Legacy That Lives On
              </h3>

              <p style={{ color: '#E0E7FF', fontSize: '1.025rem', lineHeight: 1.75, margin: '0 0 1.25rem 0' }}>
                The legacy of A. M. Hassan lives on in more than the history of S.N.B Mirror Mart:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
                {[
                  'It lives in the importance we place on quality.',
                  'It lives in the care given to every product.',
                  'It lives in the relationships built with customers and partners.',
                  'It lives in the commitment to honest service.',
                  'And it lives in the determination to keep moving forward without forgetting where the journey began.'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle2 size={20} color="#93C5FD" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 600, lineHeight: 1.6 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', color: '#E0E7FF', fontSize: '1.025rem', lineHeight: 1.75 }}>
                <p style={{ margin: 0 }}>
                  From the early days at <strong style={{ color: '#FFFFFF' }}>Pappanamcode Industrial Estate</strong> to the continuing journey of <strong style={{ color: '#FFFFFF' }}>Trivandrum Glass and Plywoods</strong>, the story remains one of craftsmanship, perseverance, family, and trust.
                </p>

                <p style={{ margin: 0 }}>
                  What began in <strong style={{ color: '#FFFFFF' }}>1963</strong> as a vision rooted in honest workmanship has grown into a legacy carried forward across generations.
                </p>
              </div>
            </div>


            {/* CLOSING HIGHLIGHT BLUE BANNER 1 */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(10, 37, 64, 0.88) 0%, rgba(15, 23, 42, 0.92) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(12px)',
              color: '#FFFFFF',
              borderRadius: '20px',
              padding: '2rem 2.25rem',
              boxShadow: '0 15px 35px rgba(29, 78, 216, 0.25)',
              marginTop: '1rem'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '1.15rem', fontWeight: 800, marginBottom: '1.25rem', color: '#FFFFFF' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Sparkles size={18} color="#93C5FD" />
                  <span>A legacy built on craftsmanship.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <ShieldCheck size={18} color="#93C5FD" />
                  <span>A reputation built on trust.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <HeartHandshake size={18} color="#93C5FD" />
                  <span>A vision carried forward through generations.</span>
                </div>
              </div>

              <p style={{ margin: 0, fontSize: '0.96875rem', color: '#DBEAFE', lineHeight: 1.6, borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1rem' }}>
                Today, we continue that journey with respect for the past, commitment to the present, and a clear vision for the future through <strong style={{ color: '#FFFFFF' }}>Trivandrum Glass and Plywoods</strong>.
              </p>
            </div>

          </div>

        </div>


        {/* ========================================================================= */}
        {/* SECTION 2: A MESSAGE FROM THE CHAIRMAN (CONTENT LEFT, IMAGE RIGHT)         */}
        {/* ========================================================================= */}
        <div style={{
          borderTop: '2px dashed rgba(255, 255, 255, 0.25)',
          paddingTop: '5rem',
          marginBottom: '6rem'
        }}>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 4.5rem)',
            alignItems: 'start'
          }}>

            {/* LEFT SIDE: CONTENT FOR CHAIRMAN'S MESSAGE */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

              {/* HEADER */}
              <div>
                <div style={{ color: '#93C5FD', fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.4rem' }}>
                  CHAIRMAN'S MESSAGE —
                </div>
                <h2 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  margin: '0 0 1.25rem 0',
                  lineHeight: 1.15
                }}>
                  A Message from the Chairman
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', color: '#E0E7FF', fontSize: '1.025rem', lineHeight: 1.75 }}>
                  <p style={{ margin: 0, fontSize: '1.075rem', fontWeight: 600, color: '#FFFFFF' }}>
                    At <strong style={{ color: '#FFFFFF' }}>Trivandrum Glass and Plywoods</strong>, our journey represents more than six decades of hard work, dedication, craftsmanship, and trust. It is a journey shaped by generations of our family, by the relationships we have built with our customers, and by a commitment to maintaining the values on which our business was founded.
                  </p>

                  <p style={{ margin: 0 }}>
                    Our story began in <strong style={{ color: '#FFFFFF' }}>1963</strong>, when my father-in-law, <strong style={{ color: '#FFFFFF' }}>A. M. Hassan</strong>, founded <strong style={{ color: '#FFFFFF' }}>S.N.B Mirror Mart</strong>. With his dedication to quality workmanship and honest service, he laid the foundation for what would become a lasting family legacy.
                  </p>

                  <p style={{ margin: 0 }}>
                    From those early beginnings, he established an approach to business centred around quality, reliability, fair dealings, and customer satisfaction. His belief in the importance of earning people's trust became one of the strongest foundations of our journey.
                  </p>
                </div>
              </div>


              {/* CONTINUING THE FAMILY LEGACY */}
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '2rem' }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  margin: '0 0 1rem 0'
                }}>
                  Continuing the Family Legacy
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', color: '#E0E7FF', fontSize: '1.025rem', lineHeight: 1.75 }}>
                  <p style={{ margin: 0 }}>
                    I had the privilege of carrying this legacy forward from <strong style={{ color: '#FFFFFF' }}>2000 onwards</strong>. Over the years, I witnessed the industry change, customer expectations evolve, and new opportunities emerge.
                  </p>

                  <p style={{ margin: 0 }}>
                    With the experience gained through those years, we took an important step in <strong style={{ color: '#FFFFFF' }}>2020</strong> by establishing <strong style={{ color: '#FFFFFF' }}>Trivandrum Glass and Plywoods</strong>.
                  </p>

                  <p style={{ margin: 0 }}>
                    The transition represented more than the growth of a business. It was an opportunity to build upon the foundation created by the previous generation while creating a broader vision for the future.
                  </p>

                  <p style={{ margin: 0 }}>
                    Our focus expanded beyond mirrors to include a wider range of <strong style={{ color: '#FFFFFF' }}>glass, mirrors, plywood, and interior and architectural solutions</strong>, enabling us to serve the changing needs of homes, businesses, designers, builders, architects, and other customers.
                  </p>

                  <p style={{ margin: 0, fontWeight: 700, color: '#FFFFFF' }}>
                    Throughout this journey, one principle has remained constant: quality and trust must always come first.
                  </p>
                </div>
              </div>


              {/* OUR COMMITMENT TO CUSTOMERS */}
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '2rem' }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  margin: '0 0 1rem 0'
                }}>
                  Our Commitment to Customers
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', color: '#E0E7FF', fontSize: '1.025rem', lineHeight: 1.75 }}>
                  <p style={{ margin: 0 }}>
                    We understand that the products we provide are often an important part of a larger project. Whether it is a home, office, commercial space, architectural development, or interior project, customers depend on us not only for products but also for reliable guidance and service.
                  </p>

                  <p style={{ margin: 0 }}>
                    Our responsibility is therefore to understand each customer's requirements, provide suitable solutions, maintain product quality, and deliver our services with professionalism and care.
                  </p>

                  <p style={{ margin: 0 }}>
                    We value every relationship we build. Many of our customers have been associated with us for years, and their continued confidence is one of the greatest acknowledgements of our journey.
                  </p>

                  <p style={{ margin: 0 }}>
                    For us, business is not simply about completing a transaction. It is about creating relationships that continue beyond a single purchase or project.
                  </p>
                </div>
              </div>


              {/* LOOKING TOWARDS THE NEXT GENERATION */}
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '2rem' }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  margin: '0 0 1rem 0'
                }}>
                  Looking Towards the Next Generation
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', color: '#E0E7FF', fontSize: '1.025rem', lineHeight: 1.75 }}>
                  <p style={{ margin: 0 }}>
                    Today, I am proud to see the <strong style={{ color: '#FFFFFF' }}>next generation becoming part of this journey</strong>.
                  </p>

                  <p style={{ margin: 0 }}>
                    Every generation brings new ideas, new perspectives, and new possibilities. Our responsibility is to combine those fresh ideas with the experience and values accumulated over the decades.
                  </p>

                  <p style={{ margin: 0 }}>
                    As the industry continues to develop, we remain open to modern technologies, innovative products, contemporary designs, and improved ways of serving our customers.
                  </p>

                  <p style={{ margin: 0 }}>
                    At the same time, we will continue to protect the principles that have guided our family since 1963 — <strong style={{ color: '#FFFFFF' }}>honesty, quality, commitment, respect, and trust</strong>.
                  </p>

                  <p style={{ margin: 0 }}>
                    We believe that progress is most meaningful when it is built on a strong foundation.
                  </p>
                </div>
              </div>


              {/* BUILDING THE FUTURE TOGETHER */}
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '2rem' }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  margin: '0 0 1rem 0'
                }}>
                  Building the Future Together
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', color: '#E0E7FF', fontSize: '1.025rem', lineHeight: 1.75 }}>
                  <p style={{ margin: 0 }}>
                    The journey from <strong style={{ color: '#FFFFFF' }}>S.N.B Mirror Mart in 1963</strong> to <strong style={{ color: '#FFFFFF' }}>Trivandrum Glass and Plywoods today</strong> has been shaped by the efforts of many people — our family, employees, customers, suppliers, craftsmen, business partners, and everyone who has supported us along the way.
                  </p>

                  <p style={{ margin: 0 }}>
                    I am deeply grateful to each person who has contributed to our journey.
                  </p>

                  <p style={{ margin: 0 }}>
                    As we look towards the future, our goal is not simply to become bigger, but to become <strong style={{ color: '#FFFFFF' }}>better</strong> — better in the products we offer, better in the service we provide, and better in the value we create for our customers.
                  </p>

                  <p style={{ margin: 0 }}>
                    We will continue to learn, adapt, innovate, and grow while remaining connected to the principles that brought us here.
                  </p>
                </div>
              </div>


              {/* A PROMISE FOR THE FUTURE */}
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '2rem' }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  margin: '0 0 1rem 0'
                }}>
                  A Promise for the Future
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', color: '#E0E7FF', fontSize: '1.025rem', lineHeight: 1.75 }}>
                  <p style={{ margin: 0 }}>
                    The business landscape may continue to change, but our commitment remains unchanged.
                  </p>

                  <p style={{ margin: 0 }}>
                    We will continue to provide <strong style={{ color: '#FFFFFF' }}>quality products, dependable service, honest guidance, and genuine value</strong> to every customer.
                  </p>

                  <p style={{ margin: 0 }}>
                    We will continue to respect the legacy established by my father-in-law while giving the next generation the opportunity to build upon it.
                  </p>

                  <p style={{ margin: 0 }}>
                    And above all, we will continue to work towards earning the trust of every customer we serve.
                  </p>

                  <p style={{ margin: 0 }}>
                    More than six decades have passed since our journey began in 1963. What started with one generation's dedication has now become a family legacy carried forward by the next.
                  </p>
                </div>
              </div>


              {/* CLOSING HIGHLIGHT BLUE BANNER FOR CHAIRMAN */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(10, 37, 64, 0.88) 0%, rgba(15, 23, 42, 0.92) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(12px)',
                color: '#FFFFFF',
                borderRadius: '20px',
                padding: '2rem 2.25rem',
                boxShadow: '0 15px 35px rgba(10, 37, 64, 0.25)',
                marginTop: '1rem'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '1.15rem', fontWeight: 800, marginBottom: '1.25rem', color: '#FFFFFF' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Sparkles size={18} color="#60A5FA" />
                    <span>We honour our past.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <UserCheck size={18} color="#60A5FA" />
                    <span>We value our present.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <TrendingUp size={18} color="#60A5FA" />
                    <span>And we look forward to building our future together.</span>
                  </div>
                </div>

                <p style={{ margin: '0 0 1.5rem 0', fontSize: '0.96875rem', color: '#CBD5E1', lineHeight: 1.6, borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1rem' }}>
                  With sincere gratitude to everyone who has been part of our journey, we remain committed to taking <strong style={{ color: '#FFFFFF' }}>Trivandrum Glass and Plywoods</strong> forward with confidence, integrity, and a continued passion for quality.
                </p>

                {/* SIGNATURE BLOCK */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#FFFFFF' }}>
                      S. Maheen
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: '#93C5FD', fontWeight: 700 }}>
                      Chairman, Trivandrum Glass and Plywoods
                    </div>
                  </div>
                </div>
              </div>

            </div>


            {/* RIGHT SIDE: STICKY PICTURE FOR CHAIRMAN */}
            <div style={{ position: 'sticky', top: '100px' }}>
              <div style={{
                background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.22) 0%, rgba(26, 36, 99, 0) 72%)',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0.5rem 0'
              }}>
                <img
                  src="/assets/images/chairman_message.png"
                  alt="S. Maheen - Chairman"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    filter: 'drop-shadow(0 20px 35px rgba(0, 0, 0, 0.45))'
                  }}
                />
              </div>

              {/* Badge directly under Chairman image */}
              <div style={{
                marginTop: '1.25rem',
                background: 'linear-gradient(135deg, #0A2540 0%, #0F172A 100%)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                padding: '1rem 1.35rem',
                borderRadius: '16px',
                boxShadow: '0 10px 25px rgba(29, 78, 216, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justify: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <UserCheck size={22} color="#93C5FD" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '0.04em' }}>S. MAHEEN</span>
                </div>
                <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.35rem 0.85rem', borderRadius: '8px', fontSize: '0.8125rem', fontWeight: 900, letterSpacing: '0.06em', flexShrink: 0 }}>CHAIRMAN</span>
              </div>
            </div>

          </div>

        </div>


        {/* ========================================================================= */}
        {/* SECTION 3: A NOTE FROM THE CEO (IMAGE LEFT, CONTENT RIGHT)                 */}
        {/* ========================================================================= */}
        <div style={{
          borderTop: '2px dashed rgba(255, 255, 255, 0.25)',
          paddingTop: '5rem'
        }}>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 4.5rem)',
            alignItems: 'start'
          }}>

            {/* LEFT SIDE: STICKY PICTURE FOR CEO */}
            <div style={{ position: 'sticky', top: '100px' }}>
              <div style={{
                background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.22) 0%, rgba(26, 36, 99, 0) 72%)',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0.5rem 0'
              }}>
                <img
                  src="/assets/images/ceo_message.png"
                  alt="Ashique Maheen - CEO"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    filter: 'drop-shadow(0 20px 35px rgba(0, 0, 0, 0.45))'
                  }}
                />
              </div>

              {/* Badge directly under CEO image */}
              <div style={{
                marginTop: '1.25rem',
                background: 'linear-gradient(135deg, #0A2540 0%, #0F172A 100%)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                padding: '1rem 1.35rem',
                borderRadius: '16px',
                boxShadow: '0 10px 25px rgba(29, 78, 216, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justify: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Compass size={22} color="#93C5FD" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '0.04em' }}>ASHIQUE MAHEEN</span>
                </div>
                <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.35rem 0.85rem', borderRadius: '8px', fontSize: '0.8125rem', fontWeight: 900, letterSpacing: '0.06em', flexShrink: 0 }}>CEO</span>
              </div>
            </div>


            {/* RIGHT SIDE: CONTENT FOR CEO'S NOTE */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

              {/* HEADER */}
              <div>
                <div style={{ color: '#93C5FD', fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.4rem' }}>
                  LEADERSHIP NOTE —
                </div>
                <h2 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  margin: '0 0 1.25rem 0',
                  lineHeight: 1.15
                }}>
                  A Note from the CEO
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', color: '#E0E7FF', fontSize: '1.025rem', lineHeight: 1.75 }}>
                  <p style={{ margin: 0, fontSize: '1.075rem', fontWeight: 600, color: '#FFFFFF' }}>
                    At <strong style={{ color: '#FFFFFF' }}>Trivandrum Glass and Plywoods</strong>, I have the privilege of being part of a family journey that began more than six decades ago. Since <strong style={{ color: '#FFFFFF' }}>1963</strong>, our story has been shaped by hard work, craftsmanship, trust, and an unwavering commitment to serving our customers with integrity.
                  </p>

                  <p style={{ margin: 0 }}>
                    For me, this journey is deeply personal. It is not simply the story of a business; it is the story of a family, a legacy, and a responsibility passed from one generation to the next.
                  </p>
                </div>
              </div>


              {/* A LEGACY THAT INSPIRES US */}
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '2rem' }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  margin: '0 0 1rem 0'
                }}>
                  A Legacy That Inspires Us
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', color: '#E0E7FF', fontSize: '1.025rem', lineHeight: 1.75 }}>
                  <p style={{ margin: 0 }}>
                    My grandfather, <strong style={{ color: '#FFFFFF' }}>A. M. Hassan</strong>, laid the foundation of our journey in 1963 through <strong style={{ color: '#FFFFFF' }}>S.N.B Mirror Mart</strong>. His dedication to craftsmanship, quality, and honest business practices established the values that continue to influence us today.
                  </p>

                  <p style={{ margin: 0 }}>
                    My father, <strong style={{ color: '#FFFFFF' }}>S. Maheen</strong>, carried that foundation forward from <strong style={{ color: '#FFFFFF' }}>2000 onwards</strong> and took the next major step by establishing <strong style={{ color: '#FFFFFF' }}>Trivandrum Glass and Plywoods in 2020</strong>.
                  </p>

                  <p style={{ margin: 0 }}>
                    His experience, commitment, and understanding of the industry created a strong platform for the next stage of our journey.
                  </p>

                  <p style={{ margin: 0 }}>
                    As the third generation, it is an honour for me to continue what they started while bringing my own perspective, ideas, and aspirations to the business.
                  </p>
                </div>
              </div>


              {/* COMBINING EXPERIENCE WITH A NEW PERSPECTIVE */}
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '2rem' }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  margin: '0 0 1rem 0'
                }}>
                  Combining Experience with a New Perspective
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', color: '#E0E7FF', fontSize: '1.025rem', lineHeight: 1.75 }}>
                  <p style={{ margin: 0 }}>
                    Every generation experiences a different business environment. Customer expectations change, technology develops, designs evolve, and new opportunities emerge.
                  </p>

                  <p style={{ margin: 0 }}>
                    As we look ahead, our goal is to combine the <strong style={{ color: '#FFFFFF' }}>experience and values of the past with the ideas and possibilities of the future</strong>.
                  </p>

                  <p style={{ margin: 0 }}>
                    We believe that respecting our heritage does not mean standing still. It means using the lessons of the past as a foundation for continuous improvement.
                  </p>

                  <p style={{ margin: 0 }}>
                    We are therefore focused on embracing modern approaches, exploring new products and applications, improving our processes, and creating a customer experience that reflects the expectations of today's market.
                  </p>
                </div>
              </div>


              {/* UNDERSTANDING THE NEEDS OF OUR CUSTOMERS */}
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '2rem' }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  margin: '0 0 1rem 0'
                }}>
                  Understanding the Needs of Our Customers
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', color: '#E0E7FF', fontSize: '1.025rem', lineHeight: 1.75 }}>
                  <p style={{ margin: 0 }}>
                    Our customers are at the centre of everything we do.
                  </p>

                  <p style={{ margin: 0 }}>
                    Whether it is a residential project, commercial space, office, architectural development, interior project, renovation, or a custom requirement, every project brings its own needs and challenges.
                  </p>

                  <p style={{ margin: 0 }}>
                    Our aim is to understand those requirements carefully and provide solutions that combine <strong style={{ color: '#FFFFFF' }}>quality, functionality, design, and value</strong>.
                  </p>

                  <p style={{ margin: 0 }}>
                    From glass and mirrors to plywood and interior-related solutions, we strive to provide dependable products supported by professional service and genuine guidance.
                  </p>

                  <p style={{ margin: 0 }}>
                    We believe customers should feel confident not only about what they purchase, but also about the people they choose to work with.
                  </p>
                </div>
              </div>


              {/* BUILDING RELATIONSHIPS, NOT JUST TRANSACTIONS */}
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '2rem' }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  margin: '0 0 1rem 0'
                }}>
                  Building Relationships, Not Just Transactions
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', color: '#E0E7FF', fontSize: '1.025rem', lineHeight: 1.75 }}>
                  <p style={{ margin: 0 }}>
                    One of the greatest strengths of our journey has been the relationships we have built over the years.
                  </p>

                  <p style={{ margin: 0, fontWeight: 700, color: '#FFFFFF' }}>
                    A product may complete a transaction, but trust builds a relationship.
                  </p>

                  <p style={{ margin: 0 }}>
                    We value every customer, supplier, architect, designer, contractor, builder, and business partner who becomes part of our journey. Their confidence encourages us to continuously improve and maintain the standards expected from our name.
                  </p>

                  <p style={{ margin: 0 }}>
                    Our approach is simple: listen carefully, understand requirements, provide honest guidance, deliver quality, and remain committed even after the sale.
                  </p>

                  <p style={{ margin: 0 }}>
                    For us, long-term relationships are one of the most meaningful measures of success.
                  </p>
                </div>
              </div>


              {/* LOOKING TOWARDS THE FUTURE */}
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '2rem' }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  margin: '0 0 1rem 0'
                }}>
                  Looking Towards the Future
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', color: '#E0E7FF', fontSize: '1.025rem', lineHeight: 1.75 }}>
                  <p style={{ margin: 0 }}>
                    As we move forward, we see significant opportunities to grow and evolve.
                  </p>

                  <p style={{ margin: 0 }}>
                    The world of architecture and interiors is changing rapidly, with new materials, technologies, designs, and applications continuously emerging. We want Trivandrum Glass and Plywoods to remain connected to these developments while continuing to provide the reliability our customers have come to expect.
                  </p>

                  <p style={{ margin: 0 }}>
                    Our vision is to build a company that is <strong style={{ color: '#FFFFFF' }}>modern in its approach, strong in its values, and dependable in its service</strong>.
                  </p>

                  <p style={{ margin: 0 }}>
                    We want to create an organisation that future generations can be proud to inherit and continue to develop.
                  </p>
                </div>
              </div>


              {/* CARRYING THE PROMISE FORWARD */}
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '2rem' }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  margin: '0 0 1.25rem 0'
                }}>
                  Carrying the Promise Forward
                </h3>

                <p style={{ color: '#E0E7FF', fontSize: '1.025rem', lineHeight: 1.75, margin: '0 0 1.25rem 0' }}>
                  Being part of the third generation comes with both pride and responsibility. Our role is not simply to preserve the legacy, but to <strong style={{ color: '#FFFFFF' }}>strengthen it, expand it, and prepare it for the future</strong>.
                </p>

                <p style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 700, margin: '0 0 1rem 0' }}>
                  The values established in 1963 remain our foundation:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
                  {[
                    'Quality in what we provide.',
                    'Honesty in how we work.',
                    'Respect in how we serve.',
                    'Innovation in how we grow.',
                    'Trust in every relationship.'
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <CheckCircle2 size={20} color="#93C5FD" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 600, lineHeight: 1.6 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <p style={{ color: '#E0E7FF', fontSize: '1.025rem', lineHeight: 1.75, margin: 0 }}>
                  As we continue this journey, our promise remains unchanged: to uphold the values of our founders while building a stronger, more modern, and more forward-looking <strong style={{ color: '#FFFFFF' }}>Trivandrum Glass and Plywoods</strong>.
                </p>
              </div>


              {/* THE JOURNEY CONTINUES */}
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '2rem' }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  margin: '0 0 1rem 0'
                }}>
                  The Journey Continues
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', color: '#E0E7FF', fontSize: '1.025rem', lineHeight: 1.75 }}>
                  <p style={{ margin: 0 }}>
                    From my grandfather's beginnings with <strong style={{ color: '#FFFFFF' }}>S.N.B Mirror Mart in 1963</strong>, to my father's leadership and the establishment of <strong style={{ color: '#FFFFFF' }}>Trivandrum Glass and Plywoods in 2020</strong>, our journey has always been about moving forward without forgetting our roots.
                  </p>

                  <p style={{ margin: 0 }}>
                    Today, I am honoured to be part of the next chapter.
                  </p>

                  <p style={{ margin: 0 }}>
                    With the support of our family, team, customers, and partners, we look forward to creating new milestones, embracing new opportunities, and continuing to earn the trust that has been built over generations.
                  </p>
                </div>
              </div>


              {/* CLOSING HIGHLIGHT BLUE BANNER FOR CEO */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(10, 37, 64, 0.88) 0%, rgba(15, 23, 42, 0.92) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(12px)',
                color: '#FFFFFF',
                borderRadius: '20px',
                padding: '2rem 2.25rem',
                boxShadow: '0 15px 35px rgba(29, 78, 216, 0.25)',
                marginTop: '1rem'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '1.15rem', fontWeight: 800, marginBottom: '1.25rem', color: '#FFFFFF' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Sparkles size={18} color="#93C5FD" />
                    <span>The legacy began in 1963.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Compass size={18} color="#93C5FD" />
                    <span>The journey continues today.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Lightbulb size={18} color="#93C5FD" />
                    <span>And the future is ours to build.</span>
                  </div>
                </div>

                {/* SIGNATURE BLOCK FOR CEO */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <div style={{ fontFamily: "'Caveat', 'Dancing Script', cursive", fontSize: '2.4rem', fontWeight: 700, color: '#93C5FD', lineHeight: 1, marginBottom: '0.25rem' }}>
                      Ashique Maheen
                    </div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#FFFFFF' }}>
                      Ashique Maheen
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: '#93C5FD', fontWeight: 700 }}>
                      CEO, Trivandrum Glass and Plywoods
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
