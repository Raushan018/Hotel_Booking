import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section>
          <h3>StayEase</h3>
          <p>
            Premium hotel booking experience with curated stays, transparent pricing, and easy
            booking.
          </p>
        </section>

        <section>
          <h4>Quick Links</h4>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/">Top Hotels</Link>
          </div>
        </section>

        <section>
          <h4>Contact</h4>
          <p>Email: support@stayease.com</p>
          <p>Phone: +91 90000 12345</p>
          <p>Address: MG Road, Bengaluru, India</p>
        </section>
      </div>

      <div className="footer-bottom">
        <p>© {year} StayEase. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
