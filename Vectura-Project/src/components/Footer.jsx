import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

export default function Footer() {

  const goTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-container">

          {/* BRAND */}
          <div className="footer-column brand">
            <div className="logoBox">
              <img src={logo} alt="Vectura Earthmoving Logo" />
            </div>
            <h3 className="company">Vectura Earthmoving</h3>
            <p className="quote">
              “Strong foundations build strong futures.”
            </p>
          </div>

          {/* LINKS */}
          <div className="footer-column">
            <h4 className="heading">Quick Links</h4>
            <Link to="/" onClick={goTop}>Home</Link>
            <Link to="/about" onClick={goTop}>About</Link>
            <Link to="/fleet" onClick={goTop}>Fleet</Link>
            <Link to="/services" onClick={goTop}>Services</Link>
            <Link to="/contact" onClick={goTop}>Contact</Link>
          </div>

          {/* CONTACT */}
          <div className="footer-column">
            <h4 className="heading">Contact Info</h4>
            <p>5451, 168 Street, Warren Park</p>
            <p>Harare, Zimbabwe</p>
            <p>Contact: +263-77 286 2607</p>
          </div>

        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Vectura Earthmoving | Designed and Managed by{" "}
          <a
            href="https://hragroups.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            HRA Groups Private Limited
          </a>
        </div>
      </footer>

      {/* CLEAN CSS */}
      <style>{`
        .footer {
          background: #1f2937;
          color: #e5e7eb;
          padding: 60px 40px 22px;
        }

        .footer-container {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.2fr;
          gap: 60px;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .brand {
          gap: 12px;
        }

        .logoBox {
          background: #ffffff;
          padding: 10px 14px;
          border-radius: 6px;
          width: fit-content;
        }

        .logoBox img {
          height: 90px;
          display: block;
        }

        .company {
          font-size: 1.2rem;
          font-weight: 600;
          color: #f9fafb;
        }

        .quote {
          font-size: 0.95rem;
          color: #cbd5e1;
          font-style: italic;
          line-height: 1.5;
          margin: 0;
        }

        .heading {
          font-size: 1.05rem;
          font-weight: 600;
          margin-bottom: 6px;
          color: #facc15;
        }

        .footer-column a {
          text-decoration: none;
          color: #e5e7eb;
          font-size: 0.95rem;
        }

        .footer-column p {
          font-size: 0.95rem;
          color: #d1d5db;
          line-height: 1.4;
          margin: 0;
        }

        .footer-bottom {
          margin-top: 32px;
          padding-top: 14px;
          border-top: 1px solid rgba(255,255,255,0.08);
          font-size: 0.8rem;
          text-align: center;
          color: #9ca3af;
        }

        .footer-bottom a {
          color: #facc15;
          text-decoration: none;
          font-weight: 500;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .footer {
            padding: 40px 16px 20px;
          }

          .footer-container {
            grid-template-columns: 1fr;
            gap: 28px;
            text-align: center;
          }

          .logoBox {
            margin: 0 auto;
          }

          .logoBox img {
            height: 70px;
          }

          .footer-column {
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}
