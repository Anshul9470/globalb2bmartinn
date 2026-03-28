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
  { id: 1, name: "Cinnamon Powder", image: "./assets/gk1.jpeg" },
  {
    id: 3,
    name: "Ginger Powder",
    image: "./assets/gk2.jpeg",
  },
  {
    id: 5,
    name: "Red onion powder",
    image: "./assets/gk3.jpeg",
  },
  { id: 6, name: "Cheese Powder", image: "./assets/gk4.jpeg" },
  { id: 4, name: "Garlic powder", image: "./assets/gk5.jpeg" },
  { id: 8, name: "Mint powder", image: "./assets/gk6.jpeg" },
  { id: 2, name: "Palak Powder", image: "./assets/gk7.jpeg" },
  { id: 9, name: "Elaichi powder", image: "./assets/gk8.jpeg" },
];

const TwentytwoCatalogs = () => {
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
                      src="./assets/gk2.jpeg"
                      title="Kashmiri Saffron Threads"
                      alt="Kashmiri Saffron Threads"
                      width="202"
                      height="299"
                      decoding="async"
                    />
                  </div>
                  <div className="products_info">
                    <div className="pro_title">
                      <h3>Ginger Powder</h3>
                    </div>
                    <div className="pro_det_sec">
                      <li>
                        <span>Product:</span> Ginger Powder
                      </li>
                      <li>
                        <span>Source:</span> Derived from the ginger root
                      </li>
                      <li>
                        <span>Description:</span> A versatile spice known for
                        its warm, peppery flavor and used for centuries in
                        culinary and medicinal applications.
                      </li>
                      <li>
                        <span>Uses:</span>
                        <ul>
                          <li>
                            <span>Preservative:</span> Contains natural
                            antimicrobial properties, helping to preserve food.
                          </li>
                          <li>
                            <span>Flavoring:</span> Adds a warm, peppery flavor
                            to various dishes, enhancing the taste of:
                            <ul>
                              <li>
                                Soups and Stews: Provides depth and warmth to
                                broths and gravies.
                              </li>
                              <li>
                                Baked Goods: Commonly used in cookies, cakes,
                                and gingerbread.
                              </li>
                              <li>
                                Marinades: Adds a unique kick to marinades for
                                meats and vegetables.
                              </li>
                              <li>
                                Beverages: Enhances teas, smoothies, and even
                                cocktails with a zesty touch.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span>Health Benefits:</span> Known for its
                        anti-inflammatory and antioxidant properties, and may
                        aid in digestion and immune support.
                      </li>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="pro_inner">
                  <div className="pro_img_sec">
                    <img
                      src="./assets/gk5.jpeg" // Replace this with the appropriate image path for Iranian Saffron Threads
                      title="Iranian Saffron Threads"
                      alt="Iranian Saffron Threads"
                      width="202"
                      height="299"
                      decoding="async"
                    />
                  </div>
                  <div className="pro_det_sec">
                    <li>
                      <span>Product:</span> Garlic Powder
                    </li>
                    <li>
                      <span>Source:</span> Made from dehydrated garlic cloves
                      ground into fine particles
                    </li>
                    <li>
                      <span>Description:</span> A seasoning derived from
                      dehydrated garlic, offering a garlicky flavor that is
                      sweeter and less assertive than fresh garlic. Lacks the
                      caramelly undertones of roasted garlic but is ideal for
                      flavor enhancement.
                    </li>
                    <li>
                      <span>Processing:</span> Garlic cloves are dried and
                      dehydrated, then ground into powder through machinery or
                      home-based appliances, depending on the scale of
                      production.
                    </li>
                    <li>
                      <span>Uses:</span>
                      <ul>
                        <li>
                          <span>Seasoning:</span> A common ingredient in spice
                          mixes and seasoned salt, enhancing flavors in various
                          dishes.
                        </li>
                        <li>
                          <span>Flavor Enhancer:</span> Ideal for adding garlic
                          flavor without the sharpness of fresh garlic in soups,
                          sauces, marinades, and dry rubs.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>Product Details:</span>
                      <ul>
                        <li>
                          <span>Product Type:</span> Single Herbs & Spices
                        </li>
                        <li>
                          <span>Variety:</span> Garlic Powder
                        </li>
                        <li>
                          <span>Style:</span> Fresh
                        </li>
                        <li>
                          <span>Processing Type:</span> Raw
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
                Gehena’s Kitchen, we take pride in offering high-quality
                ingredients that elevate your culinary creations. One such
                ingredient is mint powder, derived from meticulously dried mint
                leaves, known for its refreshing flavor and invigorating aroma.
                Mint powder is not just a spice; it’s a versatile element that
                has a wide range of culinary and medicinal applications, making
                it a cherished ingredient in kitchens around the world.
              </p>
              <p>
                Flavoring: Mint powder is renowned for its ability to enhance
                the taste of various dishes and beverages. Its distinct flavor
                profile makes it an essential ingredient for those looking to
                add a refreshing twist to their culinary creations. Whether
                you’re preparing savory dishes or sweet delights, mint powder
                can infuse your recipes with a delightful zest.
              </p>

              {/* <h3>All Kind of  We Do</h3> */}
              <p>
                Cocktails: In the realm of mixology, mint powder shines as a key
                ingredient in classic cocktails. It is a popular choice for
                beverages like mojitos and mint juleps, where its cooling
                properties perfectly balance the sweetness of the drinks. When
                mint powder is mixed into cocktails, it releases its aromatic
                oils, creating a fragrant and refreshing experience that
                captivates the senses. At Gehena’s Kitchen, we encourage you to
                experiment with mint powder in your cocktail creations to
                elevate your gatherings and celebrations.
              </p>
              <p>
                At Gehena’s Kitchen, we take pride in offering high-quality
                ingredients that elevate your culinary creations. One such
                ingredient is mint powder, derived from meticulously dried mint
                leaves, known for its refreshing flavor and invigorating aroma.
              </p>
              <p>
                Refreshing Flavor and Aroma Mint powder is renowned for its
                distinctive refreshing flavor and invigorating aroma. Its cool,
                slightly sweet taste enhances a wide range of dishes.
                Versatility in Culinary Applications: Mint powder can be used in
                various culinary applications, from cocktails and teas to
                sauces, dressings, and baked goods.
              </p>
              <p>
                {" "}
                Natural Health Benefits: Mint powder is known for its potential
                health benefits, including aiding digestion, alleviating
                headaches, and providing a soothing effect on the stomach. Easy
                to Use and Store One of the significant advantages of mint
                powder is its convenience. It is easy to use and can be readily
                incorporated into recipes without the need for extensive
                preparation.
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
                41/A GURUNANAK NAGAR , OFF SHANKAR SETH ROAD, SHANTI NAGAR LANE
                NO.2 , PUNE - 411042.
              </p>
              <p>Contact Person : Mrs Ghena ji </p>
              {/* <p><strong>Contact Person:</strong>Mr. Rohit Patel</p> */}
            </div>
            <div className="map-container">
              <h3>Our Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.555628946283!2d73.86809857141479!3d18.503777031225383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c039403dd4f1%3A0x30ef1c725c3c26!2s2%2C%2041A%2C%20Guru%20Nanak%20Nagar%2C%20Mahatma%20Phule%20Peth%2C%20Katad%20Khana%2C%20Pune%2C%20Maharashtra%20411042!5e0!3m2!1sen!2sin!4v1730720415079!5m2!1sen!2sin"
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
              <h1>Welcome to the Gehena's Kitchen</h1>
              <p>
                Gehena’s Kitchen, we bring you an array of high-quality, natural
                ingredients designed to elevate your culinary creations, whether
                you’re whipping up snacks, meals, or special dishes. Our
                selection is curated to meet diverse dietary preferences,
                offering everything from cheese seasonings to traditional spice
                powders—all crafted to infuse your food with flavor, nutrition,
                and creativity.
              </p>

              <p>
                Gehena’s Kitchen, we pride ourselves on offering high-quality,
                versatile ingredients that inspire culinary creativity. Our
                mission is to provide you with the finest products that enhance
                not only the taste of your food but also its nutritional value.
              </p>
              <h2>We Deals in All Kind of Kitchen Spices </h2>
              <p>
                Our Cheddar Cheese Powder, made from premium American cheddar,
                is a must-have for snack lovers. It’s perfect for popcorn,
                nachos, and French fries, as well as a savory addition to pasta,
                sauces, and pizzas. With its 100% plant-based formula,
                gluten-free and dairy-free, you can indulge in cheesy goodness
                guilt-free.
              </p>
              {/* <h2>High-Quality Fabrics: Premium Kalyani cotton and silk for comfort and durability.:</h2> */}
              <p>
                we bring you an array of high-quality, natural ingredients
                designed to elevate your culinary creations, whether you’re
                whipping up snacks, meals, or special dishes. 100% Natural
                Ingredients: We are committed to using only natural,
                high-quality ingredients,
              </p>
              <p>
                Nutrient-Rich: Our ingredients, like Palak Powder and Ginger
                Powder, enhance flavor and support your health. Efficient
                Production: Seamless process ensures consistent quality.
              </p>

              <p>
                Cultural Connection: Reflects India’s rich beverage traditions.
              </p>
              <li>
                <div className="pro_inner">
                  <div className="pro_img_sec">
                    <img
                      src="./assets/gk1.jpeg"
                      title="Kashmiri Saffron Threads"
                      alt="Kashmiri Saffron Threads"
                      width="202"
                      height="299"
                      decoding="async"
                    />
                  </div>
                  <div className="products_info">
                    <div className="pro_title">
                      <h3>Cinnamon Powder</h3>
                    </div>
                    <div className="pro_det_sec">
                      <li>
                        <span>Product:</span> Cinnamon Powder
                      </li>
                      <li>
                        <span>Source:</span> Derived from the inner bark of
                        cinnamon trees
                      </li>
                      <li>
                        <span>Description:</span> A popular spice known for its
                        distinctive aroma and warm flavor, used for centuries in
                        culinary and medicinal applications.
                      </li>
                      <li>
                        <span>Uses:</span>
                        <ul>
                          <li>
                            <span>Baking:</span> Adds a sweet and spicy flavor
                            to baked goods like cookies, cakes, and pies.
                          </li>
                          <li>
                            <span>Breakfast:</span> Enhances the taste of
                            oatmeal, porridge, and yogurt.
                          </li>
                          <li>
                            <span>Beverages:</span> Used to flavor coffee, tea,
                            and hot cocoa.
                          </li>
                          <li>
                            <span>Savory Dishes:</span> Adds depth of flavor to
                            meat dishes, curries, and stews.
                          </li>
                          <li>
                            <span>Pickles and Preserves:</span> Used as a
                            flavoring agent in pickles, jams, and jellies.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span>Health Benefits:</span> Rich in antioxidants,
                        known for anti-inflammatory properties, and may help
                        regulate blood sugar.
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
              GK
            </span>

            <div className="company_info">
              <div className="company_name2">
                <h1>
                  Gehena's Kitchen{" "}
                  <div className="_oth_info">
                    <a
                      href="https://www.google.co.in/maps/dir//12.9715987,77.5945627"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <b className="fa fa-map-marker" />
                        PUNE - 411042{" "}
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

export default TwentytwoCatalogs;
