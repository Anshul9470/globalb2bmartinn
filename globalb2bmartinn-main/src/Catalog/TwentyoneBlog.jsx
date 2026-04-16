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
  { id: 1, name: "Corrugated box", image: "./assets/krishbox1.jpg" },
  {
    id: 3,
    name: "Top bottom corrugated box",
    image: "./assets/krishbox2.jpg",
  },
  {
    id: 5,
    name: "Corrugated shipping cartons",
    image: "./assets/krishbox3.jpg",
  },
  { id: 6, name: "Cake & pastry boxes", image: "./assets/krishbox4.jpg" },
  { id: 4, name: "corrugated box", image: "./assets/krishbox1.jpg" },
  { id: 8, name: "ice creame box", image: "./assets/krishbox5.jpg" },
  { id: 2, name: "cake box", image: "./assets/krishbox6.jpg" },
  { id: 9, name: "Paper Packing Tape", image: "./assets/krishbox2.jpg" },
];

const TwentyoneCatalogs = () => {
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
                      src="./assets/krishbox1.jpg"
                      title="Kashmiri Saffron Threads"
                      alt="Kashmiri Saffron Threads"
                      width="202"
                      height="299"
                      decoding="async"
                    />
                  </div>
                  <div className="products_info">
                    <div className="pro_title">
                      <h3>Corrugated Cardboard Boxes</h3>
                    </div>
                    <div className="pro_det_sec">
                      <li>
                        <span>Product:</span> Corrugated Cardboard Boxes
                      </li>
                      <li>
                        <span>Brand:</span> Krishna Packaging
                      </li>
                      <li>
                        <span>Features:</span>
                        <ul>
                          <li>
                            <span>Heavy-Duty Packaging:</span> Designed for
                            strength and durability, perfect for safely storing
                            and transporting both fragile and heavy items.
                          </li>
                          <li>
                            <span>Customizable Options:</span> Available in
                            various designs and sizes, with the ability to
                            customize boxes to meet specific business needs.
                          </li>
                          <li>
                            <span>High-Quality Materials:</span> Constructed
                            from premium materials that ensure superior
                            protection during transport and storage, minimizing
                            damage risks.
                          </li>
                          <li>
                            <span>Eco-Friendly:</span> Made from sustainable and
                            recyclable materials, supporting eco-friendly
                            practices.
                          </li>
                          <li>
                            <span>Reliable Performance:</span> Ideal for
                            shipping and storage solutions across various
                            industries, offering dependable protection for your
                            goods.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span>Usage:</span> Perfect for businesses looking for
                        reliable and customizable packaging solutions that
                        ensure safe transport and storage of products.
                      </li>
                      <li>
                        <span>Contact:</span> Reach out to Krishna Packaging
                        today to explore our full range of packaging solutions!
                      </li>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="pro_inner">
                  <div className="pro_img_sec">
                    <img
                      src="./assets/krishbox2.jpg" // Replace this with the appropriate image path for Iranian Saffron Threads
                      title="Iranian Saffron Threads"
                      alt="Iranian Saffron Threads"
                      width="202"
                      height="299"
                      decoding="async"
                    />
                  </div>
                  <div className="products_info">
                    <div className="pro_title">
                      <h3>Top Bottom Corrugated Box</h3>
                    </div>
                    <div className="pro_det_sec">
                      <li>
                        <span>Product:</span> Custom Tuck Top Bottom Box
                      </li>
                      <li>
                        <span>Brand:</span> Krishna Packaging
                      </li>
                      <li>
                        <span>Features:</span>
                        <ul>
                          <li>
                            <span>Efficient Design:</span> Features a tuck-in
                            top for secure closure and a bottom that pops into
                            place for fast and easy assembly.
                          </li>
                          <li>
                            <span>Labor & Cost Efficient:</span> Quick setup on
                            the production line reduces labor costs and saves
                            time during packaging operations.
                          </li>
                          <li>
                            <span>Durable Material:</span> Made from sturdy
                            chipboard, providing protection during shipping and
                            handling to ensure the contents remain safe.
                          </li>
                          <li>
                            <span>Customizable Printing:</span> Allows for
                            high-quality custom printing to showcase your brand
                            and product information effectively.
                          </li>
                          <li>
                            <span>Versatile Application:</span> Ideal for use in
                            the food and retail sectors, offering both
                            functionality and an appealing presentation.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span>Usage:</span> Suitable for businesses needing
                        quick assembly packaging solutions, particularly in the
                        food and retail industries.
                      </li>
                      <li>
                        <span>Contact:</span> Reach out to Krishna Packaging for
                        tailor-made packaging solutions that enhance your brand
                        and product presentation.
                      </li>
                    </div>
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
                Krishana Packaing:Our success stems from our dedicated and
                skilled workforce, combined with state-of-the-art production
                facilities that allow us to meet diverse and complex packaging
                requirements.
              </p>
              <p>
                We pride ourselves on our commitment to quality and innovation,
                ensuring that our products not only meet but exceed industry
                standards.
              </p>

              {/* <h3>All Kind of  We Do</h3> */}
              <p>
                Krishna Packaging is a trusted manufacturer and supplier of
                high-quality packaging solutions, specializing in corrugated
                boxes, cake boxes, and pastry boxes. Based in Bhiwadi,
                Rajasthan, we cater to the diverse needs of clients across
                various industries, ensuring safe and reliable packaging for
                products ranging from baked goods to heavy-duty shipments.
              </p>
              <p>
                Our corrugated boxes are designed for strength and durability,
                offering superior protection for both fragile and heavy items
                during transport. We provide customizable options to meet
                specific dimensions and printing requirements, ensuring your
                products are not only well-protected but also presented with
                your unique branding.
              </p>
              <p>
                krishbox is a premium brand specializing in the manufacture and
                export of top-quality tea and coffee premixes, complemented by
                advanced vending machines. Established by krishbox Mahila Laghu
                Udyog, we prioritize authentic flavors by sourcing the finest
                ingredients and maintaining a streamlined production process.
              </p>
              <p>
                {" "}
                Krishna Packaging is a leading name in the packaging industry,
                renowned for delivering high-quality and innovative packaging
                solutions. Based in Bhiwadi, Rajasthan, we have established a
                strong reputation for manufacturing and supplying a wide range
                of corrugated boxes and custom packaging products. With a
                commitment to quality, sustainability, and customer
                satisfaction, Krishna Packaging is dedicated to meeting the
                diverse packaging needs of businesses across various industries.
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
                <strong>Address:</strong>Plot no. -H868, khuskhera Bhiwadi
                Rajasthan - 301707
              </p>
              <p>Contact Person : Mr. Manoj Chauhan ji </p>
              {/* <p><strong>Contact Person:</strong>Mr. Rohit Patel</p> */}
            </div>
            <div className="map-container">
              <h3>Our Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28151.330458758777!2d76.76817586867048!3d28.118580933709577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d4b083ff15d3d%3A0xd3311f2cf524edeb!2sM%20Safe%20India%20-%20KhushKhera!5e0!3m2!1sen!2sin!4v1728386412507!5m2!1sen!2sin"
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
              <h1>Welcome to the Krishana Packaing</h1>
              <p>
                Krishna Packaging is a trusted manufacturer and supplier of
                high-quality packaging solutions, specializing in corrugated
                boxes, cake boxes, and pastry boxes. Based in Bhiwadi,
                Rajasthan, we cater to the diverse needs of clients across
                various industries, ensuring safe and reliable packaging for
                products ranging from baked goods to heavy-duty shipments.
              </p>

              <p>
                Our corrugated boxes are designed for strength and durability,
                offering superior protection for both fragile and heavy items
                during transport. We provide customizable options to meet
                specific dimensions and printing requirements, ensuring your
                products are not only well-protected but also presented with
                your unique branding.
              </p>
              <h2>We Deals in All Kind of Corrugated and Packing Boxes </h2>
              <p>
                Krishna Packaging is a leading name in the packaging industry,
                renowned for delivering high-quality and innovative packaging
                solutions. Based in Bhiwadi, Rajasthan, we have established a
                strong reputation for manufacturing and supplying a wide range
                of corrugated boxes and custom packaging products.
              </p>
              {/* <h2>High-Quality Fabrics: Premium Kalyani cotton and silk for comfort and durability.:</h2> */}
              <p>
                With a commitment to quality, sustainability, and customer
                satisfaction, Krishna Packaging is dedicated to meeting the
                diverse packaging needs of businesses across various industries.
              </p>
              <p>
                Our corrugated box range is comprehensive and designed to cater
                to multiple purposes. Whether you need boxes for shipping,
                retail, or specialized packaging, we offer a variety of options.
                Our Regular Slotted Containers (RSC) are the most popular for
                general use, offering reliability and durability for a wide
                range of products.
              </p>

              <p>
                Krishana Packaging, we have quickly established ourselves as a
                leading manufacturer and supplier of high-quality corrugated
                boxes in Mumbai and its surrounding areas.
              </p>
              <li>
                <div className="pro_inner">
                  <div className="pro_img_sec">
                    <img
                      src="./assets/krishbox3.jpg"
                      title="Kashmiri Saffron Threads"
                      alt="Kashmiri Saffron Threads"
                      width="202"
                      height="299"
                      decoding="async"
                    />
                  </div>
                  <div className="products_info">
                    <div className="pro_title">
                      <h3>Corrugated Shipping Cartons</h3>
                    </div>
                    <div className="pro_det_sec">
                      <li>
                        <span>Product:</span> Corrugated Shipping Cartons
                      </li>
                      <li>
                        <span>Brand:</span> Generic or Custom Brand
                      </li>
                      <li>
                        <span>Features:</span>
                        <ul>
                          <li>
                            <span>Exceptional Strength:</span> Constructed from
                            multiple layers of sturdy paperboard, providing
                            superior durability for transporting heavy and
                            fragile goods.
                          </li>
                          <li>
                            <span>Cushioning Properties:</span> Designed to
                            minimize impact damage during transit, making them
                            ideal for protecting delicate items.
                          </li>
                          <li>
                            <span>Customizable Design:</span> Available in
                            various sizes and styles, with customizable designs
                            that include high-quality printing for branding and
                            product information.
                          </li>
                          <li>
                            <span>Versatile Usage:</span> Suitable for shipping
                            across different industries, ensuring safe and
                            efficient transport of goods.
                          </li>
                          <li>
                            <span>Eco-Friendly Materials:</span> Made from
                            recyclable paperboard, offering a sustainable
                            packaging option.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span>Usage:</span> Ideal for industries needing
                        reliable packaging solutions for safe shipping, from
                        e-commerce to industrial sectors.
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
              KP
            </span>

            <div className="company_info">
              <div className="company_name2">
                <h1>
                  Krishana Packaing{" "}
                  <div className="_oth_info">
                    <a
                      href="https://www.google.co.in/maps/dir//12.9715987,77.5945627"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <b className="fa fa-map-marker" />
                        Bhiwadi Rajasthan,{" "}
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

export default TwentyoneCatalogs;
