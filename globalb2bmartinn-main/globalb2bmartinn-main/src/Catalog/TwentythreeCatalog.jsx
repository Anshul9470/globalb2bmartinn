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
  { id: 1, name: "Housekeeping Uniforms", image: "./assets/cle1.jpg" },
  {
    id: 3,
    name: "Industrial Uniforms",
    image: "./assets/cle2.jpg",
  },
  {
    id: 5,
    name: "Hotel Uniform",
    image: "./assets/cle3.jpg",
  },
  { id: 6, name: "School Dress", image: "./assets/cle4.jpg" },
  { id: 4, name: "fire safety dress", image: "./assets/cle5.jpg" },
  { id: 8, name: "Aviation Uniform", image: "./assets/cle6.jpg" },
  { id: 2, name: "Corporate Uniform", image: "./assets/cle7.jpg" },
  { id: 9, name: "Nurse uniform", image: "./assets/cle8.jpg" },
];

const TwentythreeCatalog = () => {
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
                      src="./assets/cle4.jpg"
                      title="Kashmiri Saffron Threads"
                      alt="Kashmiri Saffron Threads"
                      width="202"
                      height="299"
                      decoding="async"
                    />
                  </div>
                  <div className="products_info">
                    <div className="pro_title">
                      <h3>School Uniform</h3>
                    </div>
                    <div className="pro_det_sec">
                      <li>
                        <span>Company:</span> Cleef Empire School Uniforms
                      </li>
                      <li>
                        <span>Specialization:</span> High-quality school
                        uniforms that combine style, comfort, and durability
                      </li>
                      <li>
                        <span>Description:</span> Cleef Empire provides school
                        uniforms crafted from premium fabrics that offer both
                        comfort and resilience, ensuring students feel confident
                        and at ease throughout their school day.
                      </li>
                      <li>
                        <span>Product Range:</span>
                        <ul>
                          <li>
                            Blazers: Modern and sleek design, fostering unity
                            and pride
                          </li>
                          <li>
                            Shirts: Soft and durable, tailored for a perfect fit
                          </li>
                          <li>
                            Skirts: Comfortable and stylish, allowing freedom of
                            movement
                          </li>
                          <li>
                            Trousers: Built to endure daily wear while
                            maintaining a polished look
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span>Features:</span>
                        <ul>
                          <li>
                            <span>Premium Fabrics:</span> Crafted from top-tier
                            materials for a soft touch and wear resistance.
                          </li>
                          <li>
                            <span>Long-lasting Durability:</span> Built to
                            withstand daily use, enabling students to focus on
                            academics.
                          </li>
                          <li>
                            <span>Sleek Design:</span> Modern aesthetics that
                            promote unity and student pride.
                          </li>
                          <li>
                            <span>Perfect Fit:</span> Tailored to boost
                            confidence and comfort all day.
                          </li>
                          <li>
                            <span>Comfort-driven Construction:</span> Allows
                            easy movement for classroom activities and sports.
                          </li>
                          <li>
                            <span>Attention to Detail:</span> Includes precise
                            stitching and reinforced seams for a polished,
                            durable finish.
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
                      src="./assets/cle3.jpg" // Replace this with the appropriate image path for Iranian Saffron Threads
                      title="Iranian Saffron Threads"
                      alt="Iranian Saffron Threads"
                      width="202"
                      height="299"
                      decoding="async"
                    />
                  </div>
                  <div className="pro_det_sec">
                    <div className="pro_title">
                      <h3>Hotel Uniform</h3>
                    </div>
                    <li>
                      <span>Company:</span> Cleef Empire
                    </li>
                    <li>
                      <span>Specialization:</span> High-quality hotel uniforms
                      designed to enhance the professional image of hospitality
                      staff
                    </li>
                    <li>
                      <span>Target Staff:</span> Front desk personnel,
                      housekeeping, and restaurant staff
                    </li>
                    <li>
                      <span>Description:</span> Cleef Empire provides uniforms
                      crafted from comfortable, durable fabrics that allow for
                      ease of movement during long shifts while maintaining a
                      polished appearance.
                    </li>
                    <li>
                      <span>Focus:</span> Style and sophistication with a range
                      of colors, cuts, and styles to reflect your hotel’s unique
                      identity.
                    </li>
                    <li>
                      <span>Features:</span>
                      <ul>
                        <li>
                          <span>Comfortable Fabrics:</span> Designed for ease of
                          movement to accommodate long shifts.
                        </li>
                        <li>
                          <span>Functional Pockets:</span> Practical additions
                          that enhance staff efficiency.
                        </li>
                        <li>
                          <span>Moisture-Wicking Materials:</span> Ensures
                          comfort during busy work hours.
                        </li>
                        <li>
                          <span>Customization Options:</span> Includes
                          embroidery and logo placement for effective branding.
                        </li>
                        <span>Flattering Fit:</span> Tailored to provide a
                        sophisticated and professional look.
                        <li>
                          <span>Durability:</span> Built to withstand the
                          demands of the hospitality industry.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>Why Choose Us:</span> Cleef Empire combines
                      elegance, functionality, and quality, helping your
                      establishment make a lasting impression on guests.
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
                Welcome to Cleef Empire, where we specialize in creating
                high-quality uniforms tailored to meet the unique needs of
                various industries. Our mission is to establish a professional
                brand image for our clients across sectors such as finance,
                retail, technology, hospitality, and aviation. With a strong
                emphasis on comfort, style, and functionality, our uniforms
                empower employees to perform their best while reflecting the
                values of their organizations.
              </p>
              <p>
                At Cleef Empire, we take pride in our attention to detail. Our
                uniforms are crafted from breathable and durable fabrics,
                ensuring that they are comfortable for long hours of wear. We
                offer a wide range of stylish options, including blazers,
                shirts, skirts, trousers, and specialized attire for specific
                roles, all designed with a sophisticated fit.
              </p>

              {/* <h3>All Kind of  We Do</h3> */}
              <p>
                Customization is at the heart of what we do. We understand that
                every brand has its unique identity, which is why we offer
                embroidery and logo placement options to help showcase your
                branding effectively. Our commitment to inclusivity ensures that
                we provide uniforms that accommodate diverse body types,
                allowing every employee to feel confident and comfortable.
              </p>
              <p>
                Cleef Empire, we possess extensive experience and expertise in
                the uniform manufacturing industry. Our dedicated team of
                designers and craftsmen works tirelessly to create unique and
                extraordinary uniform designs that blend the right concepts,
                colors, methods, and fabrics. This meticulous approach results
                in uniforms that are not only stylish but also durable and
                practical for everyday wear.
              </p>
              <p>
                Comfort and Fit We prioritize comfort by offering a range of
                sizes and styles tailored to fit the diverse body types of
                aviation personnel. Our uniforms are designed for unrestricted
                movement, ensuring that staff can perform their duties
                efficiently. Safety Standards Our aviation uniforms adhere to
                safety regulations, incorporating features such as
                fire-resistant materials and reflective elements where
                necessary, ensuring that personnel remain visible and safe in
                all conditions.
              </p>
              <p>
                {" "}
                Premium Quality Fabrics Our uniforms are crafted from
                high-quality, breathable fabrics that provide comfort during
                long hours of wear. The materials are lightweight yet durable,
                allowing for ease of movement and maintaining a polished
                appearance throughout the day. Elegant and Professional Design
                We emphasize elegance and professionalism in our designs,
                ensuring that airline personnel represent their brand
                effectively. Our uniforms feature sophisticated cuts, tailored
                fits, and stylish detailing that reflect the prestige of the
                aviation industry.
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
                Maujpur,Vijay Mohalla, Crescent School-Maujpur, Delhi, 110053,
                Delhi
              </p>
              {/* <p>Contact Person : Mrs Ghena ji </p> */}
              {/* <p><strong>Contact Person:</strong>Mr. Rohit Patel</p> */}
            </div>
            <div className="map-container">
              <h3>Our Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.135111006536!2d77.27313517457497!3d28.685604681670352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc7aa5f3520b%3A0xcd44d83d93b590ce!2sCrescent%20School!5e0!3m2!1sen!2sin!4v1730791274605!5m2!1sen!2sin"
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
              <h1>Welcome to the Cleef Empire</h1>
              <p>
                We Cleef Empire, situated at Crescent School-Maujpur, Delhi, are
                a leading manufacturer and supplier of complete uniform packages
                for different domains. We have great experience & expertise in
                manufacturing unique and extraordinary uniforms for different
                streams. We make extraordinary designs by blending the right
                concepts, colour, methods and fabrics which are later
                metamorphosed to extraordinary uniforms.
              </p>

              <p>
                We have a range of products waiting to be used by our valuable
                customers. We are specialized in different areas like school,
                corporates, hospitals, hotel, aviation industry etc.. Feel free
                to contact us for any type of uniform requirement. Our team is
                committed towards giving the best service with best result hence
                our qualified team ensures timely delivery of products to our
                customers.
              </p>
              <h2>We Deals in All Kind of Uniforms </h2>
              <p>
                Cleef Empire, based at Crescent School-Maujpur, Delhi, is a
                prominent manufacturer and supplier of comprehensive uniform
                solutions for various sectors. With extensive experience and
                expertise, we craft distinctive and exceptional uniforms
                tailored to diverse industries.
              </p>
              {/* <h2>High-Quality Fabrics: Premium Kalyani cotton and silk for comfort and durability.:</h2> */}
              <p>
                Cleef Empire offers innovative designs, blending creativity with
                functionality for unique uniforms. Our diverse industry
                expertise allows us to cater to schools, corporates, and more.
              </p>
              <p>
                We ensure reliable service with timely delivery, meeting
                customer needs with precision and quality. We pride ourselves on
                reliable service with timely delivery, ensuring excellence every
                time.
              </p>

              <p>
                Best Quality Dress is all about exceptional craftsmanship,
                attention to detail, and premium fabrics. Whether it’s for
                formal events, work uniforms, or everyday wear, the focus is on
                delivering durability, comfort, and style. Each piece is
                designed to offer a perfect fit, ensuring you feel confident and
                look your best. With a commitment to excellence, Best Quality
                Dress ensures that every garment meets the highest standards,
                blending aesthetics with functionality for a truly superior
                wardrobe experience.
              </p>
              <li>
                <div className="pro_inner">
                  <div className="pro_img_sec">
                    <img
                      src="./assets/cle7.jpg"
                      title="Kashmiri Saffron Threads"
                      alt="Kashmiri Saffron Threads"
                      width="202"
                      height="299"
                      decoding="async"
                    />
                  </div>
                  <div className="products_info">
                    <div className="pro_title">
                      <h3>Corporate Uniform</h3>
                    </div>
                    <div className="pro_det_sec">
                      <li>
                        <span>Company:</span> Cleef Empire
                      </li>
                      <li>
                        <span>Specialization:</span> High-quality corporate
                        uniforms designed to establish a professional brand
                        image
                      </li>
                      <li>
                        <span>Sectors Served:</span> Finance, Retail,
                        Technology, and other corporate sectors
                      </li>
                      <li>
                        <span>Description:</span> Cleef Empire provides
                        corporate uniforms crafted from breathable, durable
                        fabrics that offer comfort throughout the workday,
                        allowing employees to maintain focus on their tasks.
                      </li>
                      <li>
                        <span>Product Range:</span>
                        <ul>
                          <li>
                            Blazers: Tailored for a sophisticated, professional
                            look
                          </li>
                          <li>
                            Shirts: Available in styles to suit different
                            corporate environments
                          </li>
                          <li>
                            Skirts: Designed for a comfortable and elegant fit
                          </li>
                          <li>
                            Trousers: Created with a focus on both style and
                            mobility
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span>Features:</span>
                        <ul>
                          <li>
                            <span>Breathable Fabrics:</span> Ensures all-day
                            comfort in a variety of work settings.
                          </li>
                          <li>
                            <span>Durable Materials:</span> Built to withstand
                            regular wear while maintaining a fresh look.
                          </li>
                          <li>
                            <span>Hidden Pockets:</span> Practical addition for
                            convenience without compromising on style.
                          </li>
                          <li>
                            <span>Easy-Care Materials:</span> Minimal
                            maintenance required, allowing for a polished
                            appearance with ease.
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
              CE
            </span>

            <div className="company_info">
              <div className="company_name2">
                <h1>
                  Cleef Empire{" "}
                  <div className="_oth_info">
                    <a
                      href="https://www.google.co.in/maps/dir//12.9715987,77.5945627"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <b className="fa fa-map-marker" />
                        Maujpur, Delhi, 110053,{" "}
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

export default TwentythreeCatalog;
