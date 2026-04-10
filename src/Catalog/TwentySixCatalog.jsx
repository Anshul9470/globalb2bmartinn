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
  { id: 1, name: "Display Counter", image: "./assets/display1.jpeg" },
  {
    id: 3,
    name: "Cake Display  Counters",
    image: "./assets/display3.jpeg",
  },
  {
    id: 5,
    name: "Sweet Display counter",
    image: "./assets/display2.jpeg",
  },
  {
    id: 6,
    name: "Cake and Pastry Display Counter",
    image: "./assets/display4.jpeg",
  },
  { id: 1, name: "Display Counter", image: "./assets/display1.jpeg" },
  {
    id: 3,
    name: "Cake Display  Counters",
    image: "./assets/display3.jpeg",
  },
  {
    id: 5,
    name: "Sweet Display counter",
    image: "./assets/display2.jpeg",
  },
  {
    id: 6,
    name: "Cake and Pastry Display Counter",
    image: "./assets/display4.jpeg",
  },
];

const TwentySixcatalog = () => {
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
                      src="./assets/display2.jpeg"
                      title="Kashmiri Saffron Threads"
                      alt="Kashmiri Saffron Threads"
                      width="202"
                      height="299"
                      decoding="async"
                    />
                  </div>
                  <div className="products_info">
                    <div className="pro_title">
                      <h3>Sweet display Counter</h3>
                    </div>
                    <div className="pro_det_sec">
                      <li>
                        <span>Product:</span> Sweet Display Counter
                      </li>
                      <li>
                        <span>Company:</span> Devine Manufacture
                      </li>
                      <li>
                        <span>Description:</span> The Sweet Display Counter by
                        Devine Manufacture is expertly designed for the
                        confectionery and dessert industry, blending elegance
                        with functionality to showcase sweet treats beautifully.
                      </li>
                      <li>
                        <span>Key Benefits:</span>
                        <ul>
                          <li>
                            <span>Stunning Aesthetics:</span> Sleek and modern
                            design enhances any storefront, attracting customers
                            while beautifully highlighting your offerings.
                          </li>
                          <li>
                            <span>Durability:</span> Constructed to endure the
                            demands of a bustling retail environment, ensuring
                            long-lasting performance without sacrificing style.
                          </li>
                          <li>
                            <span>Customization Options:</span> Tailored to fit
                            your unique brand identity, with a variety of
                            customization options to align with your business
                            needs.
                          </li>
                          <li>
                            <span>Easy Maintenance:</span> Practical design
                            allows for easy cleaning and maintenance, letting
                            you focus more on customer service.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span>Usage:</span> Ideal for bakeries, candy shops, ice
                        cream parlors, and other dessert businesses, enhancing
                        product visibility and customer appeal.
                      </li>
                      <li>
                        <span>Contact Us:</span> Transform your space and
                        attract more customers with the Sweet Display Counter
                        from Devine Manufacture. Contact us today to explore our
                        offerings and elevate your business!
                      </li>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="pro_inner">
                  <div className="pro_img_sec">
                    <img
                      src="./assets/display1.jpeg" // Replace this with the appropriate image path for Iranian Saffron Threads
                      title="Iranian Saffron Threads"
                      alt="Iranian Saffron Threads"
                      width="202"
                      height="299"
                      decoding="async"
                    />
                  </div>
                  <div className="pro_det_sec">
                    <li>
                      <span>Product:</span> Cake Display Counter
                    </li>
                    <li>
                      <span>Company:</span> Devine Manufacture
                    </li>
                    <li>
                      <span>Description:</span> The Cake Display Counter by
                      Devine Manufacture is designed to showcase cakes with
                      elegance, making it an ideal addition to bakeries,
                      patisseries, and cafés. Its sleek design not only attracts
                      customers but also highlights the beauty of your
                      creations.
                    </li>
                    <li>
                      <span>Key Benefits:</span>
                      <ul>
                        <li>
                          <span>Modern Aesthetics:</span> Sleek and stylish
                          appearance enhances any display setting, drawing
                          customer attention to your cakes.
                        </li>
                        <li>
                          <span>High Durability:</span> Built from premium
                          materials, ensuring a long-lasting investment that
                          withstands daily use.
                        </li>
                        <li>
                          <span>Customization Options:</span> Available in
                          various designs and sizes to perfectly match your
                          brand identity and space requirements.
                        </li>
                        <li>
                          <span>Enhanced Visibility:</span> Clear glass panels
                          provide maximum product visibility, enticing customers
                          with a full view of your delightful offerings.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>Usage:</span> Ideal for bakeries, patisseries, and
                      cafés looking to attractively display cakes and entice
                      customers with a professional, modern setup.
                    </li>
                    <li>
                      <span>Contact Us:</span> Elevate your display with the
                      Cake Display Counter from Devine Manufacture. Contact us
                      today to learn more about customization options and how we
                      can help showcase your creations!
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
                At Devine Manufacture, we pride ourselves on being pioneers in
                the industry, renowned for crafting display counters that
                seamlessly blend impeccable quality with unmatched
                craftsmanship. Our journey has been marked by a steadfast
                commitment to innovation, reliability, and customer
                satisfaction, establishing us as a trusted name in the market.
              </p>
              <p>
                With years of experience under our belt, we understand the
                intricate balance between aesthetics and functionality. Our
                display counters are designed to meet the diverse needs of
                businesses across various sectors, from retail and hospitality
                to confectionery and beyond. We believe that every business is
                unique, which is why we offer a wide range of designs, sizes,
                and customization options tailored to reflect your brand’s
                identity and cater to your specific requirements.
              </p>

              {/* <h3>All Kind of  We Do</h3> */}
              <p>
                our mission is to transform your space with our display
                solutions. We believe that a well-designed display counter can
                significantly enhance customer engagement, drive sales, and
                leave a lasting impression. High-Quality Craftsmanship: Each
                display counter is crafted with precision, using the finest
                materials to ensure durability and aesthetic appeal.
              </p>
              <p>
                Versatile Design Options Available in various styles and sizes,
                our display counters can be tailored to meet the specific needs
                and branding of different businesses. Cost-Effective Solutions
                We believe in providing high-quality products at competitive
                prices, ensuring that businesses can elevate their display
                without exceeding their budget. Optimal Visibility: Featuring
                clear glass panels, our display counters provide maximum
                visibility of showcased products, enhancing customer engagement
                and encouraging sales.
              </p>
              <p>
                As pioneers in the industry, we have built a strong reputation
                for crafting display counters that seamlessly blend impeccable
                quality with exceptional craftsmanship—all at an affordable
                price. Our journey has been characterized by a steadfast
                commitment to innovation, reliability, and customer
                satisfaction. With years of experience, we have mastered the
                delicate balance between aesthetics and functionality, which is
                precisely reflected in our display counters.
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
                ARAZI NO 933, Nr. Namak Factory Chowrah, RAWAT PUR, Kanpur,
                Kanpur Nagar-208019, Uttar Pradesh, India
              </p>
              <p>Contact Person : Mr Amir ji ji </p>
              {/* <p><strong>Contact Person:</strong>Mr. Rohit Patel</p> */}
            </div>
            <div className="map-container">
              <h3>Our Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.354332368798!2d80.2751357754245!3d26.476533876909937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c39ab83be8753%3A0xc5b31365e0d1a7c5!2sRawat%20pur!5e0!3m2!1sen!2sin!4v1730810155905!5m2!1sen!2sin"
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
              <h1>Welcome to the Divine Manufacturer</h1>
              <p>
                Devine Manufacture Ready to take the leap towards elevating your
                display game? Explore our website to witness the fusion of
                innovation and craftsmanship. To get the best deal on the
                display counter that suits your needs, reach out to us today.
                Let’s embark on a journey to redefine how you showcase your
                products or services. Your perfect display counter solution is
                just a click away!
              </p>

              <p>
                Our display counters are crafted with precision, utilizing the
                finest materials to ensure durability and aesthetics go hand in
                hand.When you choose our display counters, you’re investing in a
                reliable solution that will consistently perform, leaving you
                worry-free.Your vision is our mission. We offer customization
                options that allow you to create a display counter that
                resonates with your business persona.
              </p>
              <h2 style={{ margin: "10px" }}>
                We Provide All Kind of Display Counters{" "}
              </h2>
              <p>
                High-Quality Craftsmanship: Each display counter is meticulously
                crafted with premium materials, ensuring durability and a
                polished, professional look. Cost-Effective: Our products
                provide exceptional quality at competitive prices, giving you
                great value without compromising on quality.
              </p>
              {/* <h2>High-Quality Fabrics: Premium Kalyani cotton and silk for comfort and durability.:</h2> */}

              <p>
                Design Variety: With a range of sleek, modern, and traditional
                designs, our counters seamlessly align with various brand
                aesthetics. Customization Options: We offer tailored solutions,
                enabling you to personalize your display counter to match your
                brand’s style and functional needs.
              </p>
              <li>
                <div className="pro_inner">
                  <div className="pro_img_sec">
                    <img
                      src="./assets/display1.jpeg"
                      title="Kashmiri Saffron Threads"
                      alt="Kashmiri Saffron Threads"
                      width="202"
                      height="299"
                      decoding="async"
                    />
                  </div>
                  <div className="products_info">
                    <div className="pro_title">
                      <h3>Display Counter</h3>
                    </div>
                    <div className="pro_det_sec">
                      <li>
                        <span>Product:</span> Display Counter
                      </li>
                      <li>
                        <span>Availability:</span> In Stock
                      </li>
                      <li>
                        <span>Description:</span> Devine Manufacture's display
                        counters are crafted to provide high-quality solutions
                        at competitive prices, ensuring exceptional value
                        without compromising on durability or design.
                      </li>
                      <li>
                        <span>Key Benefits:</span>
                        <ul>
                          <li>
                            <span>Quality Craftsmanship:</span> Built with
                            premium materials to withstand regular use while
                            maintaining an attractive appearance.
                          </li>
                          <li>
                            <span>Affordable Pricing:</span> Competitively
                            priced to offer outstanding value without
                            sacrificing quality.
                          </li>
                          <li>
                            <span>Enhanced Product Showcase:</span> Designed to
                            elevate your retail space and improve the visibility
                            of showcased products.
                          </li>
                          <li>
                            <span>Reliable and Durable:</span> Created with a
                            focus on durability to meet the demands of a busy
                            retail environment.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span>Usage:</span> Ideal for retail spaces, allowing
                        businesses to showcase products in an organized and
                        appealing manner.
                      </li>
                      <li>
                        <span>Contact Us:</span> Reach out to Devine Manufacture
                        today to learn more about our display counters and
                        discover how we can support your business goals.
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
              DM
            </span>

            <div className="company_info">
              <div className="company_name2">
                <h1>
                  Divine Manufacturer{" "}
                  <div className="_oth_info">
                    <a
                      href="https://www.google.co.in/maps/dir//12.9715987,77.5945627"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <b className="fa fa-map-marker" />
                        Kanpur Uttar Pradesh, India{" "}
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

export default TwentySixcatalog;
