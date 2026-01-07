import React, { useState, useEffect } from "react";

import slide1 from "../assets/hero1.png";
import slide2 from "../assets/hero2.png";
import slide3 from "../assets/hero3.png";
import slide4 from "../assets/hero4.png";
import slide5 from "../assets/hero5.png";

import storyImg from "../assets/earthmoving.png";
import visionImg from "../assets/mining.png";
import workImg from "../assets/plant-hiring.png";
import logo from "../assets/Logo.png";

const slides = [slide1, slide2, slide3, slide4, slide5];

const About = () => {
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
          font-family:"Poppins","Segoe UI",sans-serif;
        }

        body{
          background:#f6f5f2;
          color:#1f2937;
        }

        img{
          width:100%;
          display:block;
          border-radius:18px;
        }

        section{
          padding:110px 0;
          position:relative;
        }

        section::before{
          content:"";
          position:absolute;
          top:0;
          left:50%;
          transform:translateX(-50%);
          width:120px;
          height:2px;
          background:linear-gradient(to right,transparent,#c9a227,transparent);
        }
        section:first-of-type::before{display:none;}

        .container{
          max-width:1200px;
          margin:auto;
          padding:0 24px;
        }

        h1{font-size:3rem;margin-bottom:22px;}
        h2{font-size:2.4rem;margin-bottom:18px;}
        p{
          font-size:1.05rem;
          line-height:1.9;
          color:#4b5563;
          margin-bottom:14px;
        }

        ul{
          padding-left:20px;
          line-height:1.9;
          color:#374151;
        }

        .gold{color:#c9a227;}

        .grid{
          display:grid;
          grid-template-columns:1.1fr 1fr;
          gap:80px;
          align-items:center;
        }

        .light{background:#ffffff;}
        .soft{background:#f9f8f5;}

        .card{
          background:#ffffff;
          padding:40px;
          border-radius:22px;
          box-shadow:0 25px 70px rgba(0,0,0,.08);
        }

        .highlight{
          background:linear-gradient(135deg,#fdfcf9,#f1efe9);
          padding:40px;
          border-left:5px solid #c9a227;
          border-radius:18px;
          box-shadow:0 25px 70px rgba(0,0,0,.08);
        }

        /* ===== HERO SLIDER ===== */
        .hero{
          background:linear-gradient(135deg,#ffffff,#f1efe9);
        }

        .hero-grid{
          display:grid;
          grid-template-columns:1.1fr 1fr;
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

        .slide.active{
          opacity:1;
        }

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

        .dot.active{
          background:#c9a227;
        }

        /* LEADERSHIP */
        .leadership{
          background:linear-gradient(135deg,#fdfcf9,#f1efe9);
        }

        .leader-box{
          max-width:820px;
          margin:auto;
          text-align:center;
          padding:60px;
          border-radius:24px;
          background:#ffffff;
          box-shadow:0 35px 100px rgba(0,0,0,.12);
        }

        .leader-box img{
          width:90px;
          margin:0 auto 22px;
        }

        .leader-name{
          font-size:1.25rem;
          font-weight:600;
          margin-bottom:6px;
        }

        .leader-role{
          font-size:.95rem;
          color:#6b7280;
          margin-bottom:22px;
        }

        blockquote{
          font-style:italic;
          font-size:1.1rem;
          line-height:1.9;
          color:#374151;
        }

        @media(max-width:900px){
          .grid,.hero-grid{grid-template-columns:1fr;}
          h1{font-size:2.3rem;}
          .slider{height:260px;}
        }
      `}</style>

      {/* ===== HERO SLIDER ===== */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1>
              About <span className="gold">Vectura Earthmoving</span>
            </h1>
            <p>
              Vectura Earthmoving Private Limited is a professionally managed
              organization delivering dependable earthmoving and mining support
              services.
            </p>
            <p>
              Our strength lies in disciplined execution, safety leadership,
              and consistent project delivery across challenging environments.
            </p>
          </div>

          <div className="slider">
            {slides.map((img, i) => (
              <div key={i} className={`slide ${i === current ? "active" : ""}`}>
                <img src={img} alt={`Slide ${i+1}`} />
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

      {/* OUR STORY */}
      <section className="soft">
        <div className="container grid">
          <img src={storyImg} alt="Our Journey" />
          <div className="card">
            <h2>Our Story</h2>
            <p>
              Vectura was founded to support projects that demand reliability,
              coordination, and operational discipline.
            </p>
            <p>
              From early assignments to complex executions, we built strong
              systems, skilled teams, and preventive maintenance practices.
            </p>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="light">
        <div className="container grid">
          <div className="highlight">
            <h2>Our Vision</h2>
            <p>
              To be a trusted earthmoving and mining partner known for integrity,
              safety leadership, and execution excellence.
            </p>
            <ul>
              <li>Consistent execution quality</li>
              <li>Long-term partnerships</li>
              <li>Safety-led culture</li>
            </ul>
          </div>
          <img src={visionImg} alt="Vision" />
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="soft">
        <div className="container grid">
          <img src={workImg} alt="What We Do" />
          <div className="card">
            <h2>What We Do</h2>
            <p>
              We deliver end-to-end earthmoving and mining support including
              excavation, site development, material handling, and equipment hiring.
            </p>
            <p>
              Every project is executed with strict safety compliance and
              performance benchmarks.
            </p>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="leadership">
        <div className="container">
          <h2 style={{textAlign:"center"}}>Leadership Philosophy</h2>
          <div className="leader-box">
            <img src={logo} alt="Vectura Logo" />
            <div className="leader-name">Vectura Leadership Team</div>
            <div className="leader-role">Vectura Earthmoving Private Limited</div>
            <blockquote>
              “Strong systems, disciplined teams, and accountable leadership
              form the foundation of reliable execution.”
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
