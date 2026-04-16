import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Catalog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faShieldHalved,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const products = [
  { id: 1, name: "Civil Law", image: "./assets/samc1.jpg" },
  {
    id: 3,
    name: "Court case",
    image: "./assets/samc2.jpg",
  },
  {
    id: 5,
    name: "Criminal Law Cases",
    image: "./assets/samc3.jpg",
  },
  { id: 6, name: "Housing society cases", image: "./assets/samc4.jpg" },
  { id: 4, name: "Recovery Cases", image: "./assets/samc5.jpg" },
  { id: 8, name: "supreme court case", image: "./assets/samc6.jpg" },
  { id: 2, name: "Civil Law", image: "./assets/samc1.jpg" },
  { id: 9, name: "Court case", image: "./assets/samc2.jpg" },
];

const TwentyfoutCatalog = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [highlight, setHighlight] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleReachEnd = () => {
    if (swiperInstance) {
      const isEnd = swiperInstance.isEnd;
      const navigationButton = document.querySelector(".swiper-button-next");
      if (navigationButton) {
        navigationButton.style.display = isEnd ? "none" : "block";
      }
    }
  };

  const handleReachStart = () => {
    if (swiperInstance) {
      const isBeginning = swiperInstance.isBeginning;
      const navigationButton = document.querySelector(".swiper-button-prev");
      if (navigationButton) {
        navigationButton.style.display = isBeginning ? "none" : "block";
      }
    }
  };

  const handleProductClick = () => {
    setActiveSection("products");
  };

  const renderContent = () => {
    switch (activeSection) {
      case "products":
        return (
          <div className="swiper-container">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              slidesPerView={1}
              spaceBetween={10}
              pagination={{ clickable: true }}
              navigation={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              onSwiper={setSwiperInstance}
              onReachEnd={handleReachEnd}
              onReachBeginning={handleReachStart}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 4, spaceBetween: 40 },
                1024: { slidesPerView: 7, spaceBetween: 30 },
              }}
              className="mySwiper"
            >
              {products.map((product) => (
                <SwiperSlide key={`product-${product.id}`}>
                  <div className="card" onClick={handleProductClick}>
                    <img src={product.image} alt={product.name} />
                    <p>{product.name}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="welcome">
              <h1>Our Products</h1>

              <li>
                <div className="pro_inner">
                  <div className="pro_img_sec">
                    <img
                      src="./assets/samc2.jpg"
                      title="Kashmiri Saffron Threads"
                      alt="Kashmiri Saffron Threads"
                      width="202"
                      height="299"
                      decoding="async"
                    />
                  </div>
                  <div className="products_info">
                    <div className="pro_title">
                      <h3>Court Cases</h3>
                    </div>
                    <div className="pro_det_sec">
                      <li>
                        <span>Role:</span> Court Cases
                      </li>
                      <li>
                        <span>Importance:</span> Integral to the rule of law,
                        providing a structured avenue for resolving disputes,
                        enforcing rights, and ensuring accountability.
                      </li>
                      <li>
                        <span>Functions:</span>
                        <ul>
                          <li>
                            <span>Upholding Social Order:</span> Interpreting
                            laws, setting precedents, and providing remedies for
                            harm.
                          </li>
                          <li>
                            <span>Influencing Society:</span> High-profile court
                            cases can shape public opinion, influence
                            legislation, and define social norms.
                          </li>
                          <li>
                            <span>Commitment to Justice:</span> Offers
                            individuals and organizations a formal platform to
                            seek redress and resolve conflicts within a legally
                            recognized framework.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span>Benefits:</span>
                        <ul>
                          <li>
                            Ensures justice through fair proceedings and
                            comprehensive judgments.
                          </li>
                          <li>
                            Allows for appellate review to maintain the
                            integrity of legal decisions.
                          </li>
                          <li>
                            Fosters trust in the legal system and upholds
                            democratic values.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span>Significance:</span>
                        <ul>
                          <li>
                            Each case serves as a testament to the legal
                            system’s dedication to equity and accountability.
                          </li>
                          <li>
                            Affirms the court’s role as an essential pillar of
                            justice in society.
                          </li>
                        </ul>
                      </li>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="pro_inner">
                  <div className="pro_img_sec">
                    <img
                      src="./assets/samc3.jpg" // Replace this with the appropriate image path for Iranian Saffron Threads
                      title="Iranian Saffron Threads"
                      alt="Iranian Saffron Threads"
                      width="202"
                      height="299"
                      decoding="async"
                    />
                  </div>
                  <div className="pro_det_sec">
                    <li>
                      <span>Field:</span> Criminal Law
                    </li>
                    <li>
                      <span>Purpose:</span> To maintain public order, deter
                      criminal behavior, rehabilitate offenders, and protect
                      society from harmful actions.
                    </li>
                    <li>
                      <span>Functions:</span>
                      <ul>
                        <li>
                          <span>Upholding Community Values:</span> Through
                          rigorous legal procedures and trials, criminal law
                          safeguards the security of the community.
                        </li>
                        <li>
                          <span>Handling Criminal Cases:</span> Requires not
                          only legal expertise but also emotional resilience and
                          empathy.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>Roles of Legal Professionals:</span>
                      <ul>
                        <li>
                          Work with the accused, victims, or their families.
                        </li>
                        <li>
                          Play a critical role in balancing the scales of
                          justice.
                        </li>
                        <li>
                          Ensure fairness, accountability, and societal safety.
                        </li>
                      </ul>
                    </li>
                  </div>
                </div>
              </li>
            </div>
          </div>
        );
      case "about":
        return (
          <div className="about-us-container">
            <div className="intro"></div>
            <div className="company-info">
              <h1>Welcome to in Our Company</h1>
              <h2>About Us</h2>
              <p>
                Samriddh Construction, we are dedicated to providing premier
                legal services across a diverse range of practice areas. Our
                expertise spans Criminal Law, Civil Law, Recovery Cases,
                Matrimonial Disputes, Arbitration, Co-operative Group Housing
                Society Cases, Service Matters, Injunctions, and Commercial
                Suits. With years of experience and a team of skilled legal
                professionals, we prioritize our clients’ rights, working
                diligently to deliver effective, efficient solutions that uphold
                the law and achieve favorable outcomes.
              </p>
              <p>
                We are committed to safeguarding the interests of our clients
                through comprehensive case preparation, strategic legal advice,
                and representation that stands strong in court. At Samriddh
                Construction, we believe in the principles of justice,
                transparency, and integrity. Our mission is to provide
                dependable legal services, empowering clients with sound
                solutions to complex legal challenges, and ensuring their rights
                are protected throughout every stage of their legal journey.
              </p>

              {/* <h3>All Kind of  We Do</h3> */}
              <p>
                We are more than a law firm; we are a trusted partner committed
                to delivering excellence in legal representation and advocating
                passionately for justice in every case. Client-Centered Approach
                Prioritizes clients' needs and rights with personalized legal
                strategies for each case. Expert Legal Team Comprises
                experienced professionals skilled across diverse legal areas for
                comprehensive support.
              </p>
              <p>
                Commitment to Justice Dedicated to upholding justice through
                ethical, fair, and determined representation. Transparent
                Communication Ensures clear, timely updates and guidance
                throughout every stage of the legal process.
              </p>
              <p>
                We are more than a law firm; we are a trusted partner committed
                to delivering excellence in legal representation and advocating
                passionately for justice in every case.
              </p>
              <p>
                {" "}
                We are committed to safeguarding the interests of our clients
                through comprehensive case preparation, strategic legal advice,
                and representation that stands strong in court. At Samriddh
                Construction, we believe in the principles of justice,
                transparency, and integrity. Our mission is to provide
                dependable legal services, empowering clients with sound
                solutions to complex legal challenges, and ensuring their rights
                are protected throughout every stage of their legal journey.
              </p>

              <div className="video-container">
                <img src="./assets/ce-krishboxaraa Fashion.jpg" alt="" />
              </div>
            </div>
          </div>
        );
      case "contact":
        return (
          <div>
            {" "}
            <div className="contact-info">
              <h2>Contact Us</h2>
              <p>
                <strong>Address:</strong>
                rohini sector 22 Delhi, 110053,
              </p>
              <p>Contact Person : Mrs Shikha ji </p>
              {/* <p><strong>Contact Person:</strong>Mr. Rohit Patel</p> */}
            </div>
            <div className="map-container">
              <h3>Our Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13996.086761712419!2d77.05186544105963!3d28.718897778133087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d068b8a984435%3A0x98c864949f7975ad!2sRohini%20Sector-22%2C%20Pocket%205%2C%20Sector%2022%2C%20Begum%20Pur%2C%20Delhi%2C%20110086!5e0!3m2!1sen!2sin!4v1730798555082!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        );
      default:
        return (
          <div>
            <div className="swiper-container">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                slidesPerView={1}
                spaceBetween={10}
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                onSwiper={setSwiperInstance}
                onReachEnd={handleReachEnd}
                onReachBeginning={handleReachStart}
                breakpoints={{
                  640: { slidesPerView: 2, spaceBetween: 20 },
                  768: { slidesPerView: 4, spaceBetween: 40 },
                  1024: { slidesPerView: 7, spaceBetween: 30 },
                }}
                className="mySwiper"
              >
                {products.map((product) => (
                  <SwiperSlide key={`product-${product.id}`}>
                    <div className="card" onClick={handleProductClick}>
                      <img src={product.image} alt={product.name} />
                      <p>{product.name}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="welcome">
              <h1>Welcome to the Samriddh Construction</h1>
              <p>
                Samriddh Construction provides a comprehensive suite of legal
                services across diverse fields, each tailored to the unique
                requirements of clients in various sectors. With a team of
                dedicated experts specializing in criminal, civil, and
                commercial law, we are equipped to deliver thorough legal
                assistance to ensure justice, protection of rights, and
                successful resolution of disputes.
              </p>

              <p>
                Samriddh Construction is dedicated to providing specialized
                legal counsel for clients in the construction industry, handling
                cases that involve contract disputes, land acquisition, labor
                issues, and regulatory compliance. We understand the unique
                challenges faced in construction and bring tailored expertise to
                protect client interests and promote smooth project execution.
              </p>
              <h2>
                We Provide All Kind of legal counsel for clients and Servises{" "}
              </h2>
              <p>
                We provide legal support for service matters, including cases
                related to employment, wrongful termination, workplace
                discrimination, and other employment issues. Our goal is to
                safeguard the rights of employees while ensuring that employers
                comply with legal standards.
              </p>
              {/* <h2>High-Quality Fabrics: Premium Kalyani cotton and silk for comfort and durability.:</h2> */}
              <p>
                Expertise Across Sectors: Specialized in criminal, civil, and
                commercial law, tailored to diverse client needs.
                Client-Centered Approach: Personalized, compassionate service
                for effective resolutions.
              </p>
              <p>
                Construction Law Focus: Skilled in construction-related disputes
                and regulatory compliance. Integrity: Committed to ethical,
                transparent practices.
              </p>

              <p>
                We are committed to safeguarding the interests of our clients
                through comprehensive case preparation, strategic legal advice,
                and representation that stands strong in court. At Samriddh
                Construction, we believe in the principles of justice,
                transparency, and integrity. Our mission is to provide
                dependable legal services, empowering clients with sound
                solutions to complex legal challenges, and ensuring their rights
                are protected throughout every stage of their legal journey.
              </p>
              <li>
                <div className="pro_inner">
                  <div className="pro_img_sec">
                    <img
                      src="./assets/samc1.jpg"
                      title="Kashmiri Saffron Threads"
                      alt="Kashmiri Saffron Threads"
                      width="202"
                      height="299"
                      decoding="async"
                    />
                  </div>
                  <div className="products_info">
                    <div className="pro_title">
                      <h3>Civil Law</h3>
                    </div>
                    <div className="pro_det_sec">
                      <li>
                        <span>Field:</span> Civil Law
                      </li>
                      <li>
                        <span>Purpose:</span> To uphold social order by
                        providing a structured system for resolving disputes,
                        enforcing contracts, and protecting individuals and
                        organizations from harm or financial loss.
                      </li>
                      <li>
                        <span>Significance:</span> Civil law is instrumental in
                        securing justice, deterring misconduct, and fostering
                        accountability, fairness, and respect for the rights of
                        all individuals.
                      </li>
                      <li>
                        <span>Branches:</span>
                        <ul>
                          <li>
                            <span>Personal Relationships:</span> Ensures the
                            protection of individual rights and personal
                            interests.
                          </li>
                          <li>
                            <span>Professional Relationships:</span> Regulates
                            interactions and agreements in various professions.
                          </li>
                          <li>
                            <span>Business Relationships:</span> Provides a
                            legal framework for transactions and corporate
                            dealings.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span>Benefits:</span>
                        <ul>
                          <li>
                            Minimizes conflicts through established legal
                            guidelines.
                          </li>
                          <li>Promotes peaceful resolutions to disputes.</li>
                          <li>
                            Encourages respect for legal rights and obligations.
                          </li>
                        </ul>
                      </li>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <div className="company_header">
        <div className="top_head">
          <div className="company_left zdasds">
            <span className="logo_img2" style={{ background: "#d1d786" }}>
              SC
            </span>

            <div className="company_info">
              <div className="company_name2">
                <h1>
                  Samriddh Construction{" "}
                  <div className="_oth_info">
                    <a
                      href="https://www.google.co.in/maps/dir//12.9715987,77.5945627"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <b className="fa fa-map-marker" />
                        rohini sector 22 delhi{" "}
                      </span>
                    </a>
                  </div>
                </h1>
              </div>
            </div>
          </div>
          {/* <div className="company_right">
                        <Link to="tel:9327973636" className="contact_link">
                            <FontAwesomeIcon icon={faGauge} /> Contact Supplier
                        </Link>
                    </div> */}
        </div>
        <div className="bottom_head">
          <div className={`Premium-Header ${highlight ? "highlight" : ""}`}>
            <ul className="menu_sec">
              <li
                className={activeSection === "home" ? "active" : ""}
                onClick={() => setActiveSection("home")}
              >
                Home <FontAwesomeIcon icon={faGauge} />
              </li>
              <li
                className={activeSection === "products" ? "active" : ""}
                onClick={() => setActiveSection("products")}
              >
                Products <FontAwesomeIcon icon={faShieldHalved} />
              </li>
              <li
                className={activeSection === "about" ? "active" : ""}
                onClick={() => setActiveSection("about")}
              >
                About Us <FontAwesomeIcon icon={faMessage} />
                <ul className="dropdown"></ul>
              </li>
              <li
                className={activeSection === "contact" ? "active" : ""}
                onClick={() => setActiveSection("contact")}
              >
                Contact Us <FontAwesomeIcon icon={faShieldHalved} />
                <ul className="dropdown"></ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {renderContent()}
    </>
  );
};

export default TwentyfoutCatalog;
