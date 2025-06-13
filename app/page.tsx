"use client";
import {
  Search,
  MapPin,
  CreditCard,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "./styles.css";
import Image from "next/image";

export default function LandingPage() {
  const pillars = [
    {
      title: "Nutrition",
      description:
        "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.",
      time: "121/80 mmHg",
      image: "nutrition.png",
    },
    {
      title: "Physical activity",
      description:
        "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
      time: "32 minutes",
      image: "physical_act.png",
    },
    {
      title: "Restorative sleep",
      description:
        "Consistent, quality sleep is essential for cognitive function and physical health.",
      time: "8 hours",
      image: "sleep.png",
    },
    {
      title: "Stress management",
      description:
        "Managing stress improves immunity and is essential for optimal health and mental health.",
      time: "90 days",
      image: "stress.png",
    },
    {
      title: "Social connection",
      description:
        "Strong social connections are associated with a lower risk of many chronic diseases and behavioral health issues.",
      time: "Feeling better",
      image: "social.png",
    },
    {
      title: "Substance abuse",
      description:
        "Avoiding risky substances like tobacco and limiting alcohol intake are key for long-term health.",
      time: "62 days",
      image: "substance.png",
    },
  ];

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <div className="logo-icon">
                <span>P</span>
              </div>
              <span className="logo-text">ProVital</span>
            </div>

            <nav className="nav">
              <a href="#" className="nav-link">
                List your practice
              </a>
              <a href="#" className="nav-link">
                For Employers
              </a>
              <a href="#" className="nav-link">
                Courses
              </a>
              <a href="#" className="nav-link">
                Books
              </a>
              <a href="#" className="nav-link">
                Speakers
              </a>
              <a href="#" className="nav-link">
                Doctors
              </a>
            </nav>

            <div className="header-actions">
              <div className="auth-buttons">
                <button className="login-button">Login</button>
                <button className="signup-button">Sign Up</button>
              </div>
              <button className="mobile-menu-btn">Menu</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            {/* Left Content */}
            <div className="hero-left">
              <div className="hero-text">
                <h1 className="hero-title">
                  Book an appointment with{" "}
                  <span className="highlight">lifestyle medicine</span> experts
                </h1>
                <p className="hero-subtitle">
                  Optimize your lifestyle and reverse chronic diseases.
                </p>
              </div>

              {/* Search Form */}
              <div className="search-form">
                <div className="search-inputs">
                  <div className="input-group">
                    <Search className="input-icon" size={20} />
                    <input
                      type="text"
                      placeholder="Condition..."
                      className="search-input"
                    />
                  </div>
                  <div className="input-group">
                    <MapPin className="input-icon" size={20} />
                    <input
                      type="text"
                      placeholder="Location"
                      className="search-input"
                    />
                  </div>
                  <div className="input-group">
                    <CreditCard className="input-icon" size={20} />
                    <input
                      type="text"
                      placeholder="Insurance"
                      className="search-input"
                    />
                  </div>
                </div>
                <button className="search-btn">
                  <Search size={20} />
                  Find now
                </button>
              </div>
            </div>

            {/* Right Images */}
            <div className="hero-right">
              <div className="image-grid">
                <div className="image-column">
                  <div className="image-card orange">
                    <img
                      src="/assets/homepage/image1.png"
                      alt="image1"
                      className="image-icon"
                    />
                  </div>
                  <div className="image-card blue">
                    <img
                      src="/assets/homepage/image2.png"
                      alt="image2"
                      className="image-icon"
                    />
                  </div>
                </div>
                <div className="image-column offset">
                  <div className="image-card green">
                    <img
                      src="/assets/homepage/image3.png"
                      alt="image3"
                      className="image-icon"
                    />
                  </div>
                  <div className="image-card purple">
                    <img
                      src="/assets/homepage/image4.png"
                      alt="image4"
                      className="image-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-gradient"></div>
      </section>

      {/* How It Works Section */}
      <section className="pillars-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">HOW IT WORKS</p>
            <div className="section-title-row">
              <h2 className="section-title">
                <span className="title-highlight">Lifestyle as medicine:</span>{" "}
                The six pillars
              </h2>
              <div className="navigation-buttons">
                <button className="nav-btn">
                  <ChevronLeft size={16} />
                </button>
                <button className="nav-btn">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Pillars Navigation */}
          <div className="pillars-nav">
            {pillars.map((pillar, index) => (
              <button
                key={pillar.title}
                className={`pillar-badge ${index === 0 ? "active" : ""}`}
              >
                {pillar.title}
              </button>
            ))}
          </div>

          {/* Pillars Grid */}
          <div className="pillars-grid">
            {pillars.map((pillar, index) => (
              <div key={pillar.title} className="pillar-card">
                <div className="pillar-image">
                  {pillar.image ? (
                    <Image
                      src={`/assets/icons/${pillar.image}`}
                      alt={pillar.title}
                      width={350}
                      height={310}
                      objectFit="cover"
                      className="pillar-image"
                    />
                  ) : (
                    <div style={{ width: 64, height: 64, background: "#ccc" }}>
                      No Image
                    </div>
                  )}
                  <div className="pillar-time">{pillar.time}</div>
                </div>
                <div className="pillar-content">
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-description">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-icon">
                  <span>P</span>
                </div>
                <span className="logo-text">ProVital</span>
              </div>
              <p className="footer-description">
                Empowering health through lifestyle medicine.
              </p>
            </div>
            <div className="footer-column">
              <h4 className="footer-title">For Patients</h4>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    Find a Doctor
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Book Appointment
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Health Resources
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-title">For Doctors</h4>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    List Practice
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Continuing Education
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Resources
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-title">Company</h4>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 ProVital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
