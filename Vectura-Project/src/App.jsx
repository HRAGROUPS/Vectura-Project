import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";


import Header from "./components/Header";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Fleet from "./pages/Fleet";
import Contact from "./pages/Contact";


function ScrollHandler({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });
  }, [location.pathname]);

  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollHandler>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </ScrollHandler>
    </BrowserRouter>
  );
}
