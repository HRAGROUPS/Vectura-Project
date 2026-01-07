import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>

        {/* BRAND */}
        <div style={styles.brand}>
          <div style={styles.logoBox}>
            <img src={logo} alt="Vectura Earthmoving Logo" style={styles.logo} />
          </div>
          <span style={styles.company}>Vectura Earthmoving</span>
        </div>

        {/* NAV */}
        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/fleet" style={styles.link}>Fleet</Link>
          <Link to="/services" style={styles.link}>Services</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </nav>

      </div>
    </header>
  );
}

const gold = "#facc15";

const styles = {
  header: {
    background: "#1f2937",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "16px 40px", // slightly taller
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  brand: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },

  logoBox: {
    background: "#ffffff",
    padding: "8px 12px",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
  },

  logo: {
    height: "52px", // slightly bigger
    width: "auto",
    display: "block",
  },

  company: {
    fontSize: "1.25rem", // ⬆️ increased
    fontWeight: 600,
    color: gold,
    letterSpacing: "0.4px",
    whiteSpace: "nowrap",
  },

  nav: {
    display: "flex",
    gap: "30px",
  },

  link: {
    textDecoration: "none",
    color: "#e5e7eb",
    fontSize: "1rem", // ⬆️ increased
    fontWeight: 500,
  },
};
