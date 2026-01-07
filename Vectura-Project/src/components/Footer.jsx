import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

export default function Footer() {

  // 🔽 FORCE PAGE TO OPEN FROM TOP
  const goTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // change to "smooth" if needed
    });
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* LEFT : LOGO + NAME + QUOTE */}
        <div style={styles.column}>
          <div style={styles.logoBox}>
            <img
              src={logo}
              alt="Vectura Earthmoving Logo"
              style={styles.logo}
            />
          </div>
          <h3 style={styles.company}>Vectura Earthmoving</h3>
          <p style={styles.quote}>
            “Strong foundations build strong futures.”
          </p>
        </div>

        {/* MIDDLE : QUICK LINKS */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Quick Links</h4>

          <Link to="/" style={styles.link} onClick={goTop}>Home</Link>
          <Link to="/about" style={styles.link} onClick={goTop}>About</Link>
          <Link to="/services" style={styles.link} onClick={goTop}>Services</Link>
          <Link to="/fleet" style={styles.link} onClick={goTop}>Fleet</Link>
          <Link to="/contact" style={styles.link} onClick={goTop}>Contact</Link>
        </div>

        {/* RIGHT : CONTACT INFO */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Contact Info</h4>
          <p style={styles.contactText}>5451, 168 Street, Warren Park</p>
          <p style={styles.contactText}>Harare, Zimbabwe</p>
          <p style={styles.contactText}>Contact: +263-77 286 2607</p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div style={styles.bottom}>
        © {new Date().getFullYear()} Vectura Earthmoving | Managed by{" "}
        <a
          href="https://hragroups.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.hra}
        >
          HRA Groups Private Limited
        </a>
      </div>
    </footer>
  );
}

const gold = "#facc15";

const styles = {
  footer: {
    background: "#1f2937",
    color: "#e5e7eb",
    padding: "60px 40px 22px",
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.5fr 1fr 1.2fr",
    gap: "60px",
    alignItems: "flex-start",
  },

  column: {
    display: "flex",
    flexDirection: "column",
  },

  logoBox: {
    background: "#ffffff",
    padding: "10px 14px",
    borderRadius: "6px",
    width: "fit-content",
    marginBottom: "14px",
  },

  logo: {
    height: "95px",
    width: "auto",
    display: "block",
  },

  company: {
    fontSize: "1.2rem",
    fontWeight: 600,
    marginBottom: "6px",
    color: "#f9fafb",
  },

  quote: {
    fontSize: "0.95rem",
    color: "#cbd5e1",
    fontStyle: "italic",
    lineHeight: "1.5",
    margin: 0,
  },

  heading: {
    fontSize: "1.05rem",
    fontWeight: 600,
    marginBottom: "10px",
    color: gold,
  },

  link: {
    textDecoration: "none",
    color: "#e5e7eb",
    fontSize: "0.95rem",
    marginBottom: "8px",
    cursor: "pointer",
  },

  contactText: {
    fontSize: "0.95rem",
    color: "#d1d5db",
    lineHeight: "1.4",
    margin: "0 0 4px 0",
  },

  bottom: {
    marginTop: "45px",
    paddingTop: "14px",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    fontSize: "0.85rem",
    textAlign: "center",
    color: "#9ca3af",
  },

  hra: {
    color: gold,
    textDecoration: "none",
    fontWeight: 500,
  },
};
