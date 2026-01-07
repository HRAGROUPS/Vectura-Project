import React, { useState, useEffect } from "react";

/* ===== HERO SLIDES ===== */
import slide1 from "../assets/hero1.png";
import slide2 from "../assets/hero2.png";
import slide3 from "../assets/hero3.png";
import slide4 from "../assets/hero4.png";
import slide5 from "../assets/hero5.png";

/* ===== SERVICE IMAGES ===== */
import plantHiringImg from "../assets/plant-hiring.png";
import earthmovingImg from "../assets/earthmoving.png";
import miningImg from "../assets/mining.png";
import fleetImg from "../assets/fleet.png";

const slides = [slide1, slide2, slide3, slide4, slide5];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () =>
    setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Poppins,Segoe UI,sans-serif;
        }

        body{
          background:#f6f5f2;
          color:#1f2937;
        }

        section{
          padding:110px 0;
        }

        .container{
          max-width:1200px;
          margin:auto;
          padding:0 22px;
        }

        h1{font-size:3rem;line-height:1.15;color:#111827;}
        h2{font-size:2.5rem;color:#111827;margin-bottom:22px;}
        h3{font-size:1.3rem;color:#111827;margin-bottom:10px;}

        p{
          font-size:1.05rem;
          line-height:1.9;
          color:#4b5563;
          margin-bottom:16px;
        }

        img{
          width:100%;
          border-radius:18px;
        }

        .gold{color:#c9a227;}

        .btn{
          display:inline-block;
          padding:15px 42px;
          background:linear-gradient(135deg,#f3e3a1,#c9a227);
          color:#1f2937;
          border-radius:50px;
          font-weight:600;
          margin-top:34px;
          text-decoration:none;
          transition:.3s ease;
        }

        .btn:hover{
          transform:translateY(-3px);
          box-shadow:0 15px 40px rgba(201,162,39,.45);
        }

        /* ================= HERO ================= */
        .hero{
          background:linear-gradient(135deg,#ffffff,#f1efe9);
        }

        .hero-grid{
          display:grid;
          grid-template-columns:1.15fr 1fr;
          gap:80px;
          align-items:center;
        }

        .slider{
          position:relative;
          height:380px;
          overflow:hidden;
        }

        .slide{
          position:absolute;
          inset:0;
          opacity:0;
          transition:opacity .8s ease;
        }

        .slide.active{opacity:1;}

        .slide img{
          height:100%;
          object-fit:cover;
        }

        .arrow{
          position:absolute;
          top:50%;
          transform:translateY(-50%);
          width:42px;
          height:42px;
          border-radius:50%;
          background:#fff;
          border:none;
          font-size:22px;
          cursor:pointer;
          box-shadow:0 10px 25px rgba(0,0,0,.15);
        }

        .arrow.left{left:14px;}
        .arrow.right{right:14px;}

        .dots{
          position:absolute;
          bottom:14px;
          left:50%;
          transform:translateX(-50%);
          display:flex;
          gap:10px;
        }

        .dot{
          width:11px;
          height:11px;
          border-radius:50%;
          background:#d1d5db;
          cursor:pointer;
        }

        .dot.active{background:#c9a227;}

        /* ================= ABOUT ================= */
        .about{background:#ffffff;}

        .about-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:80px;
          align-items:center;
        }

        /* ================= SERVICES ================= */
        .services{background:#f7f6f2;}

        .service-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
          gap:40px;
          margin-top:70px;
        }

        .service-card{
          background:#ffffff;
          padding:36px;
          border-radius:22px;
          box-shadow:0 25px 70px rgba(0,0,0,.08);
          border-top:4px solid #c9a227;
        }

        /* ================= PREMIUM ================= */
        .premium{
          background:linear-gradient(135deg,#fdfcf9,#f1efe9);
        }

        .premium-grid{
          display:grid;
          grid-template-columns:1.2fr 1fr;
          gap:90px;
        }

        .stats{
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:28px;
          margin-top:42px;
        }

        .stat{
          background:#ffffff;
          padding:34px;
          border-radius:22px;
          box-shadow:0 25px 70px rgba(0,0,0,.08);
          text-align:center;
        }

        .stat h3{
          font-size:2.2rem;
          color:#c9a227;
        }

        .exec-card{
          background:#ffffff;
          padding:30px 34px;
          border-left:5px solid #c9a227;
          border-radius:18px;
          margin-bottom:24px;
          box-shadow:0 25px 70px rgba(0,0,0,.08);
        }

        /* ================= INDUSTRIES ================= */
        .industries{background:#ffffff;}

        .industry-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:28px;
          margin-top:42px;
        }

        .industry-box{
          background:#f9f8f5;
          padding:32px;
          border-radius:22px;
          box-shadow:0 20px 60px rgba(0,0,0,.08);
          text-align:center;
          font-weight:600;
        }

        @media(max-width:900px){
          .hero-grid,
          .about-grid,
          .premium-grid{
            grid-template-columns:1fr;
          }
          h1{font-size:2.3rem;}
          .slider{height:260px;}
        }
      `}</style>

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1>
              Reliable <span className="gold">Earthmoving</span><br />
              & Mining Solutions
            </h1>

            <p>
              Vectura Earthmoving Private Limited delivers dependable,
              safety-driven solutions for infrastructure, mining,
              and industrial development projects.
            </p>

            <p>
              Our execution strength lies in disciplined systems,
              modern equipment, and experienced professionals
              ensuring predictable project outcomes.
            </p>

            <a href="/contact" className="btn">Request a Quote</a>
          </div>

          <div className="slider">
            {slides.map((img, i) => (
              <div key={i} className={`slide ${i === current ? "active" : ""}`}>
                <img src={img} alt={`Slide ${i + 1}`} />
              </div>
            ))}

            <button className="arrow left" onClick={prev}>‹</button>
            <button className="arrow right" onClick={next}>›</button>

            <div className="dots">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={`dot ${i === current ? "active" : ""}`}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about">
        <div className="container about-grid">
          <img src={fleetImg} alt="Vectura Fleet" />
          <div>
            <h2>About Vectura</h2>
            <p>
              Vectura Earthmoving Private Limited is a professionally managed
              organization specializing in earthmoving, plant hiring,
              and mining support services.
            </p>
            <p>
              We partner with infrastructure developers, EPC contractors,
              and industrial clients to deliver projects with safety,
              precision, and execution excellence.
            </p>
            <p>
              Our operations are supported by preventive maintenance,
              experienced supervision, and strict quality compliance.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="services">
        <div className="container">
          <h2>Our Services</h2>

          <div className="service-grid">
            <div className="service-card">
              <img src={plantHiringImg} alt="Plant Hiring" />
              <h3>Plant & Equipment Hiring</h3>
              <p>
                Short and long-term hiring of excavators, loaders,
                rollers, and tippers with trained operators and
                maintenance-backed availability.
              </p>
            </div>

            <div className="service-card">
              <img src={earthmovingImg} alt="Earthmoving" />
              <h3>Earthmoving & Excavation</h3>
              <p>
                Bulk excavation, site grading, leveling, foundations,
                and controlled backfilling aligned with project scope.
              </p>
            </div>

            <div className="service-card">
              <img src={miningImg} alt="Mining Support" />
              <h3>Mining Support Services</h3>
              <p>
                Overburden removal, haul road formation, material handling,
                and safe transportation with disciplined site execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PREMIUM ================= */}
      <section className="premium">
        <div className="container premium-grid">
          <div>
            <h2>
              Engineering Excellence.<br />
              <span className="gold">Operational Confidence.</span>
            </h2>

            <div className="stats">
              <div className="stat"><h3>10+</h3>Years Experience</div>
              <div className="stat"><h3>100%</h3>Safety Focus</div>
              <div className="stat"><h3>24×7</h3>Fleet Ready</div>
              <div className="stat"><h3>Pan-India</h3>Capability</div>
            </div>
          </div>

          <div>
            <div className="exec-card">✔ Safety-first execution</div>
            <div className="exec-card">✔ Preventive maintenance</div>
            <div className="exec-card">✔ Skilled professionals</div>
            <div className="exec-card">✔ Scalable project support</div>
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="industries">
        <div className="container">
          <h2>Industries We Serve</h2>

          <div className="industry-grid">
            <div className="industry-box">Infrastructure & Roads</div>
            <div className="industry-box">Mining & Quarrying</div>
            <div className="industry-box">Industrial Projects</div>
            <div className="industry-box">Energy & Utilities</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
