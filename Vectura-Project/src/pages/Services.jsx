import React, { useState, useEffect } from "react";

/* HERO SLIDES */
import slide1 from "../assets/hero1.png";
import slide2 from "../assets/hero2.png";
import slide3 from "../assets/hero3.png";
import slide4 from "../assets/hero4.png";
import slide5 from "../assets/hero5.png";

/* SERVICE IMAGES */
import earthmovingImg from "../assets/earthmoving.png";
import plantHiringImg from "../assets/plant-hiring.png";
import miningImg from "../assets/mining.png";
import haulageImg from "../assets/fleet.png";

const slides = [slide1, slide2, slide3, slide4, slide5];

const Services = () => {
  const [current, setCurrent] = useState(0);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (activeService) {
      document
        .getElementById("service-details")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeService]);

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () =>
    setCurrent(current === 0 ? slides.length - 1 : current - 1);

  const serviceMap = {
    earthmoving: {
      title: "Earthmoving Services",
      img: earthmovingImg,
    },
    plant: {
      title: "Plant & Equipment Hiring",
      img: plantHiringImg,
    },
    mining: {
      title: "Mining Support Services",
      img: miningImg,
    },
    haulage: {
      title: "Material Handling & Haulage",
      img: haulageImg,
    },
  };

  return (
    <>
      <style>{`
        /* ===== RESET ===== */
        *,*::before,*::after{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Poppins,Segoe UI,sans-serif;
        }

        body{
          background:#f6f5f2;
          color:#1f2937;
          overflow-x:hidden;
        }

        section{
          padding:clamp(60px,8vw,100px) 0;
        }

        .container{
          max-width:1200px;
          margin:auto;
          padding:0 18px;
        }

        h1{font-size:clamp(2.2rem,5vw,3rem);margin-bottom:18px;}
        h2{font-size:clamp(1.8rem,4vw,2.3rem);margin-bottom:18px;}
        h3{font-size:1.35rem;margin-bottom:10px;}

        p{
          font-size:1.05rem;
          line-height:1.9;
          color:#4b5563;
          margin-bottom:16px;
          text-align:left;
        }

        ul{padding-left:18px;margin-top:14px;}
        li{margin-bottom:10px;color:#374151;}

        img{width:100%;border-radius:18px;display:block;}

        .gold{color:#c9a227;}

        .btn{
          padding:14px 36px;
          background:linear-gradient(135deg,#f3e3a1,#c9a227);
          border:none;
          border-radius:50px;
          font-weight:600;
          cursor:pointer;
        }

        /* ===== HERO ===== */
        .hero{
          background:linear-gradient(135deg,#ffffff,#f1efe9);
        }

        .hero-grid{
          display:grid;
          grid-template-columns:1.2fr 1fr;
          gap:clamp(40px,6vw,80px);
          align-items:center;
        }

        /* ===== SLIDER ===== */
        .slider{
          position:relative;
          height:clamp(240px,35vw,380px);
          overflow:hidden;
        }

        .slide{
          position:absolute;
          inset:0;
          opacity:0;
          transition:.8s;
        }

        .slide.active{opacity:1;}
        .slide img{height:100%;object-fit:cover;}

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

        /* ===== SERVICE CARDS ===== */
        .service-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
          gap:36px;
          margin-top:60px;
        }

        .service-card{
          background:#fff;
          padding:32px;
          border-radius:22px;
          box-shadow:0 25px 70px rgba(0,0,0,.08);
          border-top:4px solid #c9a227;
          transition:.3s ease;
          text-align:left;
        }

        .service-card:hover{transform:translateY(-6px);}

        .service-card img{
          height:180px;
          object-fit:cover;
          margin-bottom:14px;
        }

        /* ===== DETAILS ===== */
        .details{
          background:#fff;
          margin-top:clamp(50px,8vw,90px);
          padding:clamp(36px,6vw,70px);
          border-radius:30px;
          box-shadow:0 35px 90px rgba(0,0,0,.12);
          position:relative;
        }

        .close{
          position:absolute;
          top:22px;
          right:22px;
          width:42px;
          height:42px;
          border-radius:50%;
          background:#f3e3a1;
          border:none;
          font-size:22px;
          font-weight:700;
          cursor:pointer;
        }

        .detail-image{
          text-align:center;
          margin-bottom:36px;
        }

        .detail-image img{
          max-width:460px;
          width:100%;
          box-shadow:0 25px 70px rgba(0,0,0,.15);
          border-radius:22px;
        }

        .detail-content{
          max-width:900px;
          margin:auto;
        }

        .info-box{
          background:#f9f8f5;
          padding:28px 32px;
          border-radius:20px;
          margin-bottom:26px;
        }

        .info-box h3{margin-bottom:10px;}

        .info-box li::before{
          content:"✔";
          color:#c9a227;
          margin-right:8px;
        }

        .highlight{
          background:linear-gradient(135deg,#fdfcf9,#f1efe9);
          border-left:4px solid #c9a227;
        }

        /* ===== MOBILE FIX ===== */
        @media(max-width:900px){

          .hero-grid{
            grid-template-columns:1fr;
          }

          h1,h2{
            text-align:center;
          }

          p{
            text-align:left;
          }

          .btn{
            display:block;
            margin:24px auto 0;
          }

          .details{
            padding:32px 22px;
          }
        }
      `}</style>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1>Our <span className="gold">Services</span></h1>
            <p>
              Vectura Earthmoving delivers professionally managed services
              designed to support infrastructure, mining, and industrial
              projects of varying scale and complexity. Our approach combines
              disciplined planning, modern equipment, and experienced teams to
              ensure every operation is executed with precision and accountability.
            </p>
            <p>
              Every operation is planned with clarity and executed
              with discipline to ensure predictable outcomes.
            </p>
          </div>

          <div className="slider">
            {slides.map((img, i) => (
              <div key={i} className={`slide ${i === current ? "active" : ""}`}>
                <img src={img} alt={`Service highlight ${i + 1}`} />
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

      {/* ===== SERVICE CARDS ===== */}
      <section>
        <div className="container">
          <h2>Explore Our Capabilities</h2>

          <div className="service-grid">
            {Object.entries(serviceMap).map(([key, val]) => (
              <div className="service-card" key={key}>
                <img src={val.img} alt={val.title} />
                <h3>{val.title}</h3>
                <p>Professional, safety-driven execution.</p>
                <button className="btn" onClick={() => setActiveService(key)}>
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* ===== DETAILS ===== */}
          {activeService && (
            <div className="details" id="service-details">
              <button className="close" onClick={() => setActiveService(null)}>×</button>

              <div className="detail-image">
                <img src={serviceMap[activeService].img} alt={serviceMap[activeService].title} />
              </div>

              <div className="detail-content">
                <h2>{serviceMap[activeService].title}</h2>

                <p>
                  Our service execution begins with a detailed understanding
                  of project scope, site conditions, timelines and operational
                  constraints. Each assignment is planned for efficiency,
                  safety and reliability.
                </p>

                <div className="info-box">
                  <h3>Execution Highlights</h3>
                  <ul>
                    <li>Pre-mobilization planning & site assessment</li>
                    <li>Task-specific equipment deployment</li>
                    <li>Certified operators & supervisors</li>
                    <li>Preventive maintenance programs</li>
                    <li>Daily monitoring & reporting</li>
                  </ul>
                </div>

                <div className="info-box">
                  <h3>Operational Discipline</h3>
                  <p>
                    Defined workflows, safety protocols and disciplined
                    supervision ensure consistent progress and minimized
                    downtime across all projects.
                  </p>
                </div>

                <div className="info-box highlight">
                  <h3>Client Value</h3>
                  <p>
                    Transparent coordination, predictable execution and
                    accountable delivery enable us to build long-term,
                    trusted partnerships.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Services;
