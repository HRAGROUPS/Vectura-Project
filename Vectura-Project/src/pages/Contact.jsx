import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Auto reset (optional)
    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

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

        /* ↓ Reduced padding */
        section{
          padding:65px 0;
        }

        .container{
          max-width:1100px;
          margin:auto;
          padding:0 22px;
        }

        h1{
          font-size:2.8rem;
          margin-bottom:16px;
          color:#111827;
        }

        h2{
          font-size:2.2rem;
          margin-bottom:14px;
          color:#111827;
        }

        h3{
          font-size:1.3rem;
          margin-bottom:12px;
          color:#111827;
        }

        p{
          font-size:1.02rem;
          line-height:1.8;
          color:#4b5563;
          margin-bottom:12px;
        }

        .gold{color:#c9a227;}

        /* THEMES */
        .hero{
          background:linear-gradient(135deg,#ffffff,#f1efe9);
        }

        .light{
          background:#f9f8f5;
        }

        /* GRID */
        .split-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:55px;
          align-items:flex-start;
        }

        /* CONTACT BOX */
        .contact-box{
          background:#ffffff;
          border-radius:22px;
          padding:36px;
          box-shadow:0 18px 45px rgba(0,0,0,.08);
          border-top:4px solid #c9a227;
        }

        /* FORM */
        form{
          display:grid;
          gap:14px;
          margin-top:12px;
        }

        input, textarea{
          width:100%;
          padding:13px 15px;
          border-radius:12px;
          border:1px solid #d1d5db;
          background:#ffffff;
          font-size:.98rem;
          color:#111827;
        }

        textarea{
          resize:none;
          height:120px;
        }

        button{
          background:linear-gradient(135deg,#f3e3a1,#c9a227);
          padding:13px;
          border:none;
          border-radius:12px;
          font-weight:600;
          cursor:pointer;
          transition:.3s ease;
        }

        button:hover{
          transform:translateY(-2px);
          box-shadow:0 15px 40px rgba(201,162,39,.45);
        }

        /* THANK YOU */
        .thankyou{
          text-align:center;
          padding:50px 30px;
          border-radius:22px;
          background:linear-gradient(135deg,#ffffff,#fdf8e9);
          box-shadow:0 25px 70px rgba(0,0,0,.1);
          animation:fadeUp .6s ease;
        }

        .thankyou h2{
          color:#c9a227;
          margin-bottom:12px;
        }

        @keyframes fadeUp{
          from{opacity:0;transform:translateY(20px);}
          to{opacity:1;transform:translateY(0);}
        }

        /* MAP */
        iframe{
          width:100%;
          height:320px;
          border-radius:22px;
          border:none;
          margin-top:28px;
          box-shadow:0 20px 55px rgba(0,0,0,.12);
        }

        @media(max-width:900px){
          .split-grid{
            grid-template-columns:1fr;
          }
          h1{
            font-size:2.3rem;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <h1>
            Contact <span className="gold">Vectura</span>
          </h1>
          <p>
            Reach out to Vectura Earthmoving for project discussions,
            service enquiries, or long-term collaboration.
          </p>
        </div>
      </section>

      {/* FORM & INFO */}
      <section className="light">
        <div className="container split-grid">

          {/* FORM / THANK YOU */}
          <div className="contact-box">
            {!submitted ? (
              <>
                <h3>Send Us a Message</h3>
                <p>
                  Share your requirements and our team will respond shortly.
                </p>

                <form onSubmit={handleSubmit}>
                  <input type="text" placeholder="Your Name" required />
                  <input type="email" placeholder="Your Email" required />
                  <input type="text" placeholder="Contact Number" required />
                  <textarea placeholder="Describe your requirement"></textarea>
                  <button type="submit">Submit Enquiry</button>
                </form>
              </>
            ) : (
              <div className="thankyou">
                <h2>Thank You!</h2>
                <p>
                  Your enquiry has been successfully submitted.
                </p>
                <p>
                  Our team will contact you shortly.
                </p>
              </div>
            )}
          </div>

          {/* OFFICE INFO */}
          <div className="contact-box">
            <h3>Office Information</h3>
            <p><strong>Company:</strong> Vectura Earthmoving Private Limited</p>
            <p><strong>Address:</strong> 5451, 168 Street, Warren Park, Harare</p>
            <p><strong>Phone:</strong> +263-77-286-2607</p>
            <p><strong>Email:</strong> info@vecturaearthmoving.com</p>
            <p><strong>Working Hours:</strong> Mon – Sat | 9:00 AM – 6:00 PM</p>
          </div>

        </div>
      </section>

      {/* MAP */}
      <section>
        <div className="container">
          <h2>Our Location</h2>
          <p>
            Strategically positioned to support infrastructure and
            industrial projects efficiently.
          </p>

          <iframe
            src="https://www.google.com/maps?q=Harare%20Zimbabwe&output=embed"
            loading="lazy"
            title="Vectura Location"
          />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="light">
        <div className="container">
          <h2>Let’s Work Together</h2>
          <p>
            Reliable execution begins with the right partner.
            Contact Vectura Earthmoving today.
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
