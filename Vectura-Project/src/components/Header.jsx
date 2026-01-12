import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/Logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header style={styles.header}>
        <div style={styles.container}>

          {/* BRAND */}
          <div style={styles.brand}>
            <div style={styles.logoBox}>
              <img
                src={logo}
                alt="Vectura Earthmoving Logo"
                style={styles.logo}
              />
            </div>

            {/* COMPANY TEXT (HIDDEN ON MOBILE) */}
            <span className="company-text" style={styles.company}>
              Vectura Earthmoving
            </span>
          </div>

          {/* DESKTOP NAV */}
          <nav className="desktop-nav">
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/about" style={styles.link}>About</Link>
            <Link to="/fleet" style={styles.link}>Fleet</Link>
            <Link to="/services" style={styles.link}>Services</Link>
            <Link to="/contact" style={styles.link}>Contact</Link>
          </nav>

          {/* MOBILE HAMBURGER */}
          <div
            className="hamburger"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* MOBILE NAV */}
        <nav className={`mobile-nav ${open ? "open" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/fleet" onClick={() => setOpen(false)}>Fleet</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      </header>

      {/* CSS */}
      <style>{`
        /* DESKTOP NAV */
        .desktop-nav {
          display: flex;
          gap: 34px;
          margin-left: auto; /* ✅ PUSH LINKS TO RIGHT */
        }

        /* HIDE MOBILE ITEMS ON DESKTOP */
        .hamburger,
        .mobile-nav {
          display: none;
        }

        /* MOBILE */
        @media (max-width: 768px) {

          .company-text {
            display: none;
          }

          .desktop-nav {
            display: none;
          }

          .hamburger {
            display: flex;
            flex-direction: column;
            gap: 5px;
            cursor: pointer;
            margin-left: auto;
          }

          .hamburger span {
            width: 26px;
            height: 3px;
            background: #e5e7eb;
          }

          .mobile-nav {
            display: none;
            flex-direction: column;
            background: #111827;
            padding: 22px;
            gap: 18px;
          }

          .mobile-nav.open {
            display: flex;
          }

          .mobile-nav a {
            color: #e5e7eb;
            text-decoration: none;
            font-size: 1rem;
            font-weight: 500;
          }
        }
      `}</style>
    </>
  );
}

const styles = {
  header: {
    background: "#1f2937",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "16px 40px",
    display: "flex",
    alignItems: "center",
  },

  brand: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    flexShrink: 0,
  },

  logoBox: {
    background: "#ffffff",
    padding: "10px 16px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.18)",
    border: "1px solid #e5e7eb",
  },

  logo: {
    height: "60px",
    width: "auto",
    display: "block",
  },

  company: {
    fontSize: "1.25rem",
    fontWeight: 600,
    color: "#facc15",
    whiteSpace: "nowrap",
  },

  link: {
    textDecoration: "none",
    color: "#e5e7eb",
    fontSize: "1rem",
    fontWeight: 500,
  },
};
