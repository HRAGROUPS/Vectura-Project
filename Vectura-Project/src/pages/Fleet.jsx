import React, { useState, useEffect } from "react";

/* HERO SLIDES */
import slide1 from "../assets/hero1.png";
import slide2 from "../assets/hero2.png";
import slide3 from "../assets/hero3.png";
import slide4 from "../assets/hero4.png";
import slide5 from "../assets/hero5.png";

/* FLEET IMAGES */
import excavatorImg from "../assets/earthmoving.png";
import loaderImg from "../assets/plant-hiring.png";
import miningImg from "../assets/mining.png";
import fleetImg from "../assets/fleet.png";

const slides = [slide1, slide2, slide3, slide4, slide5];

const Fleet = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((p) => (p + 1) % slides.length),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () =>
    setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <>
      <style>{`
        *{margin:0;padding:0;box-sizing:border-box;font-family:Poppins,Segoe UI,sans-serif;}
        body{background:#f6f5f2;color:#1f2937;}
        section{padding:100px 0;}
        .container{max-width:1200px;margin:auto;padding:0 24px;}

        h1{font-size:3rem;margin-bottom:18px;}
        h2{font-size:2.4rem;margin-bottom:18px;}
        h3{font-size:1.3rem;margin-bottom:12px;}

        p{font-size:1.05rem;line-height:1.9;color:#4b5563;margin-bottom:16px;}
        ul{padding-left:18px;margin-top:14px;}
        li{margin-bottom:10px;color:#374151;}

        .gold{color:#c9a227;}

        /* HERO */
        .hero{background:linear-gradient(135deg,#ffffff,#f1efe9);}
        .hero-grid{
          display:grid;
          grid-template-columns:1.2fr 1fr;
          gap:80px;
          align-items:center;
        }

        /* SLIDER */
        .slider{position:relative;height:380px;overflow:hidden;border-radius:22px;}
        .slide{position:absolute;inset:0;opacity:0;transition:.8s;}
        .slide.active{opacity:1;}
        .slide img{width:100%;height:100%;object-fit:cover;}

        .arrow{
          position:absolute;top:50%;transform:translateY(-50%);
          width:42px;height:42px;border-radius:50%;
          background:#fff;border:none;font-size:22px;
          cursor:pointer;box-shadow:0 10px 25px rgba(0,0,0,.15);
        }
        .arrow.left{left:14px;}
        .arrow.right{right:14px;}

        .dots{
          position:absolute;bottom:14px;left:50%;
          transform:translateX(-50%);
          display:flex;gap:10px;
        }
        .dot{width:11px;height:11px;border-radius:50%;background:#d1d5db;}
        .dot.active{background:#c9a227;}

        /* OVERVIEW */
        .light{background:#ffffff;}

        /* IMAGE STRIP – PERFECT ALIGNMENT */
        .gallery-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:32px;
          margin-top:50px;
        }
        .gallery-grid img{
          width:100%;
          height:260px;
          object-fit:cover;
          border-radius:20px;
        }

        /* POINTS */
        .points{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:18px;
          margin-top:40px;
        }
        .points li{
          list-style:none;
          padding-left:22px;
          position:relative;
        }
        .points li::before{
          content:"✔";
          position:absolute;
          left:0;
          color:#c9a227;
          font-size:.9rem;
        }

        /* CAPABILITIES */
        .soft{background:#f7f6f2;}
        .capability-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
          gap:36px;
          margin-top:50px;
        }
        .capability-card{
          background:#fff;
          padding:36px;
          border-radius:22px;
          box-shadow:0 25px 70px rgba(0,0,0,.08);
          border-top:4px solid #c9a227;
        }

        @media(max-width:900px){
          .hero-grid{grid-template-columns:1fr;}
          h1{font-size:2.3rem;}
          .slider{height:260px;}
          .gallery-grid{grid-template-columns:1fr;}
        }
      `}</style>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1>Our <span className="gold">Fleet</span></h1>
            <p>
             Vectura Earthmoving’s fleet represents the strength, discipline,
              and reliability behind every project we execute. Built to perform 
              in demanding environments, our equipment forms the operational foundation
               that enables safe, consistent, and high-productivity execution across
                infrastructure, mining, and industrial works.
            </p>
            <p>
              Every machine is selected, deployed, and maintained to ensure
              safety, productivity, and consistent on-site performance.
            </p>
          </div>

          <div className="slider">
            {slides.map((img, i) => (
              <div key={i} className={`slide ${i === current ? "active" : ""}`}>
                <img src={img} alt={`Fleet Slide ${i + 1}`} />
              </div>
            ))}
            <button className="arrow left" onClick={prev}>‹</button>
            <button className="arrow right" onClick={next}>›</button>
            <div className="dots">
              {slides.map((_, i) => (
                <div key={i} className={`dot ${i === current ? "active" : ""}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="light">
        <div className="container">
          <h2>Fleet Overview</h2>
          <p>
              Vectura Earthmoving operates a diversified and well-structured fleet 
              designed to support infrastructure, mining, and industrial projects across
               varied site conditions. Our equipment portfolio is built to handle
                high-volume earthworks, precision excavation, material handling, and continuous 
                operational demands with consistency and control.
          </p>

          <div className="gallery-grid">
            <img src={excavatorImg} alt="Excavators" />
            <img src={loaderImg} alt="Wheel Loaders" />
            <img src={miningImg} alt="Mining Fleet" />
          </div>

          <ul className="points">
            <li>Modern, well-maintained equipment</li>
            <li>High availability and operational uptime</li>
            <li>Certified and experienced operators</li>
            <li>Safety-led deployment practices</li>
          </ul>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="soft">
        <div className="container">
          <h2>Fleet Capabilities</h2>

          <div className="capability-grid">
            <div className="capability-card">
              <h3>Excavators</h3>
              <ul>
                <li>Bulk excavation & trenching</li>
                <li>Foundation & drainage works</li>
                <li>High-efficiency material loading</li>
              </ul>
            </div>

            <div className="capability-card">
              <h3>Wheel Loaders</h3>
              <ul>
                <li>Stockpile handling</li>
                <li>Material transfer</li>
                <li>Internal site logistics</li>
              </ul>
            </div>

            <div className="capability-card">
              <h3>Mining Support</h3>
              <ul>
                <li>Overburden removal</li>
                <li>Haul road development</li>
                <li>Material transportation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fleet;
