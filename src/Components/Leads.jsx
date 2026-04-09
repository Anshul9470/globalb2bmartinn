import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./leads.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCalendarAlt, faCheckCircle, faTags, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";

const Leads = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    // GSAP background moving animation for header exclusively
    if (headerRef.current) {
      gsap.to(headerRef.current, {
        backgroundPosition: "400% 50%",
        duration: 12,
        ease: "linear",
        repeat: -1
      });
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      mobile: event.target.mobile.value,
      email: event.target.email.value,
      companyName: event.target.company.value,
      userType: event.target.userType.value,
    };

    try {
      await axios.post(
        `${process.env.REACT_APP_API_ENDPOINT}/submit-form`,
        formData
      );
      setFormSubmitted(true);
      event.target.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const leadsData = [
    {
      title: "Solar Energy Plant",
      country: "India",
      postDate: "29-10-2025",
      imagePath: "/assets/flag.svg",
      category: "Energy"
    },
    {
      country: "India",
      title: "Hydropower Station",
      postDate: "29-10-2025",
      imagePath: "/assets/flag.svg",
      category: "Energy"
    },
    {
      title: "Wind Turbines",
      country: "Romania",
      postDate: "29-10-2025",
      imagePath: "/assets/romania.jpeg",
      category: "Energy"
    },
    {
      title: "Fresh potato",
      country: "India",
      postDate: "29-10-2025",
      imagePath: "/assets/flag.svg",
      category: "Agriculture"
    },
    {
      title: "Computer Hardware Parts",
      country: "India",
      postDate: "29-10-2025",
      imagePath: "/assets/flag.svg",
      category: "Hardware"
    },
    {
      title: "Smart locks",
      country: "India",
      postDate: "29-10-2025",
      imagePath: "/assets/flag.svg",
      category: "Electronics"
    },
  ];

  // Chunk the leads data into groups of 4 for better layout
  const chunkSize = 4;
  const chunkedLeadsData = [];
  for (let i = 0; i < leadsData.length; i += chunkSize) {
    chunkedLeadsData.push(leadsData.slice(i, i + chunkSize));
  }

  return (
    <div className="leads-container-new">
      {/* Header Section */}
      <div className="leads-header" ref={headerRef}>
        <h1 className="main-title">Global Business Opportunities</h1>
      </div>

      <div className="leads-content">
        {/* Fresh Leads Section */}
        <div className="leads-section premium-glass-panel">
          <div className="section-header">
            <div className="title-section">
              <h2 className="section-title">Fresh Buying Leads</h2>
              <p className="section-description">
                Latest requirements from verified buyers across the globe
              </p>
            </div>
          </div>

          <div className="leads-carousel-container">
            <Swiper
              direction="vertical"
              spaceBetween={20}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="leads-swiper"
            >
              {chunkedLeadsData.map((chunk, index) => (
                <SwiperSlide key={index}>
                  <div className="leads-grid">  
                    {chunk.map((lead, leadIndex) => (
                      <div className="lead-card" key={leadIndex}>
                        <div className="card-header">
                          <div className="category-tag">
                            <FontAwesomeIcon icon={faTags} /> {lead.category}
                          </div>
                          <div className="urgency-badge">URGENT</div>
                        </div>
                        <div className="card-body">
                          <h3 className="lead-title">{lead.title}</h3>
                          <div className="lead-meta">
                            <div className="location-info">
                              <div className="country-flag">
                                <img
                                  src={lead.imagePath}
                                  alt={lead.country}
                                  width={24}
                                  height={18}
                                  loading="lazy"
                                />
                                <span className="country-name">{lead.country}</span>
                              </div>
                              <div className="post-date">
                                <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon" />
                                {lead.postDate}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer">
                          <Link to="/login" className="view-details-btn">
                            <span>View Details</span>
                            <FontAwesomeIcon icon={faArrowRight} className="moving-arrow" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Requirement Form Section */}
        <div className="leads-form-section">
          <div className="leads-form-container premium-glass-panel">
            <div className="leads-form-header">
              <h2 className="leads-form-title">Post Your Requirement</h2>
              <p className="leads-form-subtitle">
                Get quotes from verified suppliers worldwide
              </p>
            </div>

            {formSubmitted && (
              <div className="leads-success-message">
                <div className="success-icon">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <p>Form submitted successfully!</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="leads-requirement-form">
              <div className="leads-form-row">
                <div className="leads-form-group">
                  <label htmlFor="name" className="leads-form-label">
                    Full Name *
                  </label>
                  <div className="input-with-icon">
                    <input
                      className="leads-form-input"
                      type="text"
                      required
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
                <div className="leads-form-group">
                  <label htmlFor="mobile" className="leads-form-label">
                    Mobile Number *
                  </label>
                  <div className="input-with-icon">
                    <input
                      className="leads-form-input"
                      type="tel"
                      required
                      id="mobile"
                      name="mobile"
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>
              </div>

              <div className="leads-form-group">
                <label htmlFor="email" className="leads-form-label">
                  Email Address *
                </label>
                <div className="input-with-icon">
                  <input
                    className="leads-form-input"
                    type="email"
                    required
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="leads-form-group">
                <label htmlFor="company" className="leads-form-label">
                  Company Name *
                </label>
                <div className="input-with-icon">
                  <input
                    className="leads-form-input"
                    type="text"
                    required
                    id="company"
                    name="company"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="leads-form-group">
                <label htmlFor="userType" className="leads-form-label">
                  I am a *
                </label>
                <div className="leads-user-type-selector">
                  <label className="leads-radio-option">
                    <input
                      type="radio"
                      name="userType"
                      value="buyer"
                      required
                    />
                    <span className="leads-radio-label">Buyer</span>
                  </label>
                  <label className="leads-radio-option">
                    <input
                      type="radio"
                      name="userType"
                      value="seller"
                      required
                    />
                    <span className="leads-radio-label">Seller</span>
                  </label>
                </div>
              </div>

              <button type="submit" className="leads-submit-btn">
                Submit Requirement
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leads;