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
  { id: 1, name: "Aloe Shine Gel", image: "./assets/agp6.webp" },
  {
    id: 3,
    name: "Aloe Vera Cucumber gel",
    image: "./assets/agp2.webp",
  },
  {
    id: 5,
    name: "Aloe vera gel with turmeric",
    image: "./assets/agp3.webp",
  },
  { id: 6, name: "Aloe Vera Cucumber gel", image: "./assets/agp4.webp" },
  { id: 4, name: "Aloe Vera Juice", image: "./assets/agp5.webp" },
  { id: 8, name: "Aloe Vera Juice", image: "./assets/agp7.webp" },
  { id: 1, name: "Aloe Shine Gel", image: "./assets/agp6.webp" },
  //   { id: 2, name: "Civil Law", image: "./assets/samc1.jpg" },
  //   { id: 9, name: "Court case", image: "./assets/samc2.jpg" },
];

const Twentyfivecatalog = () => {
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
                      src="./assets/agp2.webp"
                      title="Kashmiri Saffron Threads"
                      alt="Kashmiri Saffron Threads"
                      width="202"
                      height="299"
                      decoding="async"
                    />
                  </div>
                  <div className="products_info">
                    <div className="pro_title">
                      <h3>Aloe Vera Cucumber gel</h3>
                    </div>
                    <div className="pro_det_sec">
                      <li>
                        <span>Product:</span> Aloe Vera Cucumber Gel
                      </li>
                      <li>
                        <span>Description:</span> A multi-functional product
                        providing benefits for skin, hair, and overall body
                        care, combining Aloe Vera’s healing powers with
                        cucumber’s cooling and brightening properties.
                      </li>
                      <li>
                        <span>Key Benefits:</span>
                        <ul>
                          <li>
                            <span>Hydration & Nourishment:</span> Deeply
                            hydrates and nourishes the skin, helping maintain a
                            refreshed, supple appearance.
                          </li>
                          <li>
                            <span>Acne Treatment:</span> Helps to reduce acne
                            and prevent breakouts with its soothing, natural
                            ingredients.
                          </li>
                          <li>
                            <span>Anti-Aging Properties:</span> Supports
                            youthful skin by reducing fine lines and promoting a
                            smooth complexion.
                          </li>
                          <li>
                            <span>Sunburn Relief:</span> Provides cooling relief
                            from sunburn, soothing the skin and reducing
                            redness.
                          </li>
                          <li>
                            <span>Soothing Irritation:</span> Calms irritated or
                            sensitive skin, making it ideal for daily use.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span>Suitable For:</span> All skin types, especially
                        beneficial for those seeking natural skincare solutions.
                      </li>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="pro_inner">
                  <div className="pro_img_sec">
                    <img
                      src="./assets/agp3.webp" // Replace this with the appropriate image path for Iranian Saffron Threads
                      title="Iranian Saffron Threads"
                      alt="Iranian Saffron Threads"
                      width="202"
                      height="299"
                      decoding="async"
                    />
                  </div>
                  <div className="pro_det_sec">
                    <li>
                      <span>Product:</span> Aloe Vera Turmeric Gel
                    </li>
                    <li>
                      <span>Description:</span> A multifunctional skincare
                      product combining Aloe Vera’s hydrating and healing
                      properties with turmeric’s anti-inflammatory and
                      antioxidant benefits, designed to promote healthy, radiant
                      skin.
                    </li>
                    <li>
                      <span>Key Benefits:</span>
                      <ul>
                        <li>
                          <span>Hydration & Healing:</span> Provides deep
                          moisture while supporting the skin’s natural healing
                          processes.
                        </li>
                        <li>
                          <span>Acne Treatment:</span> Reduces acne and prevents
                          future breakouts with its soothing and antibacterial
                          properties.
                        </li>
                        <li>
                          <span>Anti-Aging Effects:</span> Helps reduce signs of
                          aging by minimizing fine lines and wrinkles, promoting
                          youthful skin.
                        </li>
                        <li>
                          <span>Brightening Complexion:</span> Improves skin
                          tone and radiance, enhancing the overall complexion.
                        </li>
                        <li>
                          <span>Anti-Inflammatory Benefits:</span> Calms
                          irritated skin, making it ideal for sensitive or
                          problem-prone areas.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>Suitable For:</span> All skin types, especially
                      beneficial for those seeking natural and effective
                      skincare solutions.
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
                We, Pooja Agri Products, established in 2017, have quickly
                become a leading name in the manufacturing and trading of
                high-quality Aloe Vera products, including Aloe Vera Gel, Aloe
                Vera Juice, and Aloe Vera Pulp. Our firm is strategically
                located in Surat, Gujarat, India, where we have developed a
                robust and efficient infrastructural unit equipped with modern
                technology and machinery. This facility enables us to produce a
                diverse range of Aloe Vera products that meet and exceed
                industry standards, ensuring the highest level of quality and
                purity.
              </p>
              <p>
                As a partnership firm led by our esteemed partner, Mr. Anurag
                Shrivastav, we are committed to maintaining excellence in every
                aspect of our operations. Our team comprises skilled
                professionals who bring expertise and dedication to the table,
                allowing us to consistently innovate and improve our product
                offerings. We take pride in sourcing our raw materials from
                trusted suppliers to ensure that our products retain their
                natural properties and benefits.
              </p>

              {/* <h3>All Kind of  We Do</h3> */}
              <p>
                At Pooja Agri Products, we understand the importance of customer
                satisfaction and strive to build long-lasting relationships with
                our clients. Quality Assurance Pooja Agri Products is committed
                to delivering the highest quality Aloe Vera products.
              </p>
              <p>
                Sustainable Practices Our firm prioritizes sustainability by
                sourcing raw materials responsibly and implementing eco-friendly
                practices in production. Customer-Centric Approach At Pooja Agri
                Products, customer satisfaction is paramount. We actively our
                products. Innovative Solutions We continually invest in research
                and development to innovate and improve our product range. By
                incorporating the latest advancements in technology and trends.
              </p>
              <p>
                At Pooja Agri Products, we understand the importance of customer
                satisfaction and strive to build long-lasting relationships with
                our clients.
              </p>
              <p>
                {" "}
                We “Pooja Agri Products” founded in the year 2017 are a renowned
                firm that is engaged in manufacturing and trading a wide
                assortment of Aloe Vera Gel, Aloe Vera Juice, Aloe Vera Pulp,
                etc. We have a wide and well functional infrastructural unit
                that is situated at Surat (Gujarat, India) and helps us in
                making a remarkable collection of products as per the set
                industry standards. We are a Partnership firm that is managed
                under the headship of “Mr. Anurag Shrivastav” (Partner), and
                have achieved a significant position in this sector.
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
                Near Kim Char Rasta, Taluka Mangrol, Chharodi, Surat-395004,
                Gujarat, India
              </p>
              <p>Contact Person : Mr shalok shrivastav ji </p>
              {/* <p><strong>Contact Person:</strong>Mr. Rohit Patel</p> */}
            </div>
            <div className="map-container">
              <h3>Our Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951077.1348008189!2d72.29940231250004!3d21.38419230000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be038efc478e597%3A0xd581754f87794782!2sJ%20D!5e0!3m2!1sen!2sin!4v1730803612654!5m2!1sen!2sin"
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
              <h1>Welcome to the Pooja Agri Products</h1>
              <p>
                Pooja Agri Products is a prominent manufacturer and trader of
                Aloe Vera-based products, established in 2017. Located in Surat,
                Gujarat, our company specializes in producing high-quality Aloe
                Vera Gel, Juice, and Pulp. With a well-equipped infrastructure
                and a commitment to adhering to industry standards, we ensure
                exceptional product quality.
              </p>

              <p>
                we manufacture a diverse range of products, including Aloe Vera
                Gel, Juice, and Pulp, tailored to meet the evolving needs of our
                customers. Our state-of-the-art facility in Surat, Gujarat, is
                equipped with advanced technology, allowing us to maintain
                stringent quality control throughout the production process.
              </p>
              <h2>We Provide All Kind of Aloe Vera Juice </h2>
              <p>
                With a strong focus on quality and sustainability, we
                manufacture a diverse range of products, including Aloe Vera
                Gel, Juice, and Pulp, tailored to meet the evolving needs of our
                customers.
              </p>
              {/* <h2>High-Quality Fabrics: Premium Kalyani cotton and silk for comfort and durability.:</h2> */}
              <p>
                Innovative – Constantly developing new Aloe Vera products.
                Reliable – Delivering consistent quality in every batch.
              </p>
              <p>
                Sustainable – Focused on eco-friendly manufacturing processes.
                Ethical – Upholding integrity and transparency in all
                operations.
              </p>

              <p>
                Aloe Vera Gel is a versatile, natural skincare product prized
                for its hydrating, soothing, and healing properties. Extracted
                from the Aloe Vera plant, this gel is rich in vitamins,
                minerals, and antioxidants that nourish the skin. It’s widely
                used to treat sunburn, minor cuts, and wounds due to its
                anti-inflammatory and cooling effects. Beyond healing, Aloe Vera
                Gel also deeply moisturizes the skin, making it smoother and
                more supple. Its lightweight, non-greasy texture absorbs
                quickly, making it perfect for everyday use. Suitable for all
                skin types, it leaves the skin feeling refreshed, rejuvenated,
                and healthier.
              </p>
              <li>
                <div className="pro_inner">
                  <div className="pro_img_sec">
                    <img
                      src="./assets/agp1.webp"
                      title="Kashmiri Saffron Threads"
                      alt="Kashmiri Saffron Threads"
                      width="202"
                      height="299"
                      decoding="async"
                    />
                  </div>
                  <div className="products_info">
                    <div className="pro_title">
                      <h3>Aloe Shine Gel</h3>
                    </div>
                    <div className="pro_det_sec">
                      <li>
                        <span>Product:</span> Aloe Shine Gel
                      </li>
                      <li>
                        <span>Description:</span> A premium skincare product
                        designed for versatile use, offering the natural
                        benefits of Aloe Vera to enhance skin health.
                      </li>
                      <li>
                        <span>Key Benefits:</span>
                        <ul>
                          <li>
                            <span>Face Cleansing:</span> Effectively removes
                            dirt, oil, and impurities, leaving the skin
                            refreshed and rejuvenated.
                          </li>
                          <li>
                            <span>Acne Treatment:</span> Helps reduce
                            inflammation, redness, and breakouts, making it
                            ideal for acne-prone skin.
                          </li>
                          <li>
                            <span>Hydration & Soothing:</span> Provides deep
                            hydration and soothes irritated skin, suitable for
                            sensitive skin types.
                          </li>
                          <li>
                            <span>Daily Moisturizer:</span> Can be applied daily
                            to promote smooth, soft skin and enhance natural
                            glow.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span>Available Sizes:</span> 150 gm, 500 gm, and 1 kg
                      </li>
                      <li>
                        <span>Packaging:</span> Elegant glass bottles that
                        preserve the freshness and quality of the product.
                      </li>
                      <li>
                        <span>Color:</span> Rich green, signifying purity and
                        natural ingredients.
                      </li>
                      <li>
                        <span>Suitable For:</span> All skin types, providing
                        gentle, natural skincare solutions.
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
              PA
            </span>

            <div className="company_info">
              <div className="company_name2">
                <h1>
                  Pooja Agri Products{" "}
                  <div className="_oth_info">
                    <a
                      href="https://www.google.co.in/maps/dir//12.9715987,77.5945627"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <b className="fa fa-map-marker" />
                        Surat-395004, Gujarat, India{" "}
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

export default Twentyfivecatalog;
