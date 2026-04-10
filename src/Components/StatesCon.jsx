import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./allcat.css";

// // import required modules
// import "./allcat.css";

// const countrylist = [
//   { id: 1, name: "United Kingdom", image: "/assets/ukss.jpeg", link: "/uk" },

//   { id: 3, name: "USA", image: "/assets/usasr.jpeg", link: "/usa" },

//   {
//     id: 5,
//     name: "Australia",
//     image: "./assets/ausp1.jpeg",
//     link: "/australia",
//   },
//   { id: 6, name: "Canada", image: "/assets/candass1.avif", link: "/canada" },
//   { id: 4, name: "Germany", image: "/assets/grr.jpeg", link: "/germany" },

//   { id: 8, name: "Oman", image: "/assets/omans.jpeg", link: "/oman" },
//   { id: 2, name: "China", image: "/assets/chians.jpeg", link: "/china" },
//   {
//     id: 9,
//     name: "Netherland",
//     image: "/assets/neithers.jpeg",
//     link: "/netherland",
//   },
//   // Add more countrylist as needed
// ];

// export default function StateCon() {
//   const [swiperInstance, setSwiperInstance] = useState(null);

//   const handleReachEnd = () => {
//     if (swiperInstance) {
//       const isEnd = swiperInstance.isEnd;
//       const navigationButton = document.querySelector(".swiper-button-next");
//       if (navigationButton) {
//         navigationButton.style.display = isEnd ? "none" : "block";
//       }
//     }
//   };

//   const handleReachStart = () => {
//     if (swiperInstance) {
//       const isBeginning = swiperInstance.isBeginning;
//       const navigationButton = document.querySelector(".swiper-button-prev");
//       if (navigationButton) {
//         navigationButton.style.display = isBeginning ? "none" : "block";
//       }
//     }
//   };

//   return (
//     <>
//       <Link to={"/all/country"}>
//         <button
//           id="view-all"
//           style={{
//             float: "right",
//             backgroundColor: "transparent",
//             color: "black",
//             border: "none",
//             marginRight: "29px",
//             marginTop: "30px",
//             cursor: "pointer",
//           }}
//         >
//           View All <FontAwesomeIcon icon={faArrowRight} />
//         </button>
//       </Link>

//       <div style={{ padding: "5px 10px" }}>
//         <h2 style={{ padding: "10px 20px" }}>
//           Find suppliers by <span style={{ color: "orange" }}> Country</span>{" "}
//         </h2>
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={10}
//           pagination={{ clickable: true }}
//           onSwiper={setSwiperInstance}
//           onReachEnd={handleReachEnd}
//           onReachBeginning={handleReachStart}
//           breakpoints={{
//             640: { slidesPerView: 2, spaceBetween: 20 },
//             768: { slidesPerView: 4, spaceBetween: 40 },
//             1024: { slidesPerView: 7, spaceBetween: 30 },
//           }}
//           className="mySwiper"
//         >
//           {countrylist.map((countries) => (
//             <SwiperSlide key={`countries-${countries.id}`}>
//               <Link to={countries.link}>
//                 <div className="card">
//                   <img src={countries.image} alt={countries.name} />
//                   <p>{countries.name}</p>
//                 </div>
//               </Link>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="market">
//           <h1 className="market-heading">
//             Welcome to GlobalB2BMart: Best B2B Portal in India
//           </h1>

//           <section className="intro">
//             <p>
//               GlobalB2BMart is India's leading B2B portal. We make a smooth path
//               between a buyer and a supplier. We mainly focus on expanding the
//               business of our clients and increasing their sales in the Indian
//               as well as global markets. GlobalB2BMart provides services that
//               would specifically tackle the requirements of Indian businesses.
//               Thus, if you are a supplier aiming to increase your reach or a
//               buyer looking for trusted products, we do offer the perfect
//               platform to connect. Our easy-to-use portal, GlobalB2BMart.com,
//               makes this process easy, giving businesses the tools needed to
//               succeed.
//             </p>
//           </section>

//           <section className="b2b-definition">
//             <h2 className="sub-heading">What is B2B Business?</h2>
//             <p>
//               B2B is direct or indirect trade between two organizations: for
//               goods, services, or information, but not between an organization
//               and a customer. Businesses are reliant on one another for most
//               essential supplies, services, or solutions necessary to run and
//               grow. B2B, in general, is high volume with long-term partnerships
//               and often related to special needs such as raw materials,
//               machinery, and professional services.
//             </p>
//             <p style={{ paddingTop: "30px" }}>
//               GlobalB2BMart fills this model by allowing businesses to find
//               verified suppliers and buyers on a safe, online platform. Thus, it
//               helps companies connected with the business-to-business market
//               find one another easily. Using this, companies of various
//               industries can exchange their products conveniently with others
//               and let their operations achieve higher profitability effectively.
//             </p>
//           </section>

//           <section className="features">
//             <h2 className="sub-heading">Best B2B Portal in India</h2>
//             <p>
//               GlobalB2BMart is the<b> best B2B portal in India</b>, offering
//               businesses a safe and reliable platform. Our portal will assist
//               companies in identifying verified & certified buyers and suppliers
//               that will always make it easier to do trade with those companies.
//               We established a system that offers services such as the
//               development of business catalogs, websites, and lead generation so
//               that businesses of any size can grow. Because of its capability to
//               connect companies from the agriculture, fashion, and technology
//               sectors, among others, GlobalB2BMart has become the dream platform
//               for many companies looking to expand their growth.
//             </p>
//           </section>
//           <section className="features">
//             <h2 className="sub-heading">Best B2B Website in India</h2>
//             <p>
//               About the ease of use and the functionalities, GlobalB2BMart
//               stands as one of the <b> best B2B websites in India</b>. The
//               platform has easy navigation for businesses to try their luck
//               through browsing in multiple categories with industry-wise
//               solutions. Professional templates, live chat support, and SEO
//               services are just some of the powerful tools that we provide to
//               ensure businesses connect and grow. Our focus on providing an easy
//               user experience has always been our strength in being the largest
//               B2B company in India.
//             </p>
//           </section>

//           <section className="features">
//             <h2 className="sub-heading">Best B2B Company in India</h2>
//             <p>
//               GlobalB2BMart has only managed to reach the top in becoming the{" "}
//               <b>best B2B company in India</b> because of its continuous
//               provision of efficiently valuable services that help in business
//               progress. The strength of our company lies in satisfying its
//               customers by making sure that all, big or small, businesses are
//               able to acquire and use all the tools and resources they may need
//               to succeed. Our commitment to quality services such as SSL
//               security, payment gateways, and social media marketing gives
//               assurances to businesses using our portal that their needs will be
//               met.
//             </p>
//           </section>
//           <section className="features">
//             <h2 className="sub-heading">
//               Business-to-Business portal in india
//             </h2>
//             <p>
//               GlobalB2BMart is a digital marketplace bringing buyers and
//               suppliers of products and services together, offering the services
//               of a <b>business-to-business portal in India</b>. Our platform
//               contains more than 300 diverse categories of products, ranging
//               from agriculture supplies to home goods. We provide a facility to
//               the business by offering verified, contactable buyers and
//               suppliers who guarantee unproblematic and secure transactions.
//               Moreover, our focus on industry-specific needs means that
//               businesses can customize their experience to get value from their
//               B2B interactions.
//             </p>
//           </section>

//           <section className="features">
//             <h2 className="sub-heading">Best B2B Platform in India</h2>
//             <p>
//               GlobalB2BMart comes in the upright position among the
//               <b> best B2B platforms in India</b>. We provide an ecosystem where
//               business relationships can grow and where companies find support
//               through their growth track. In addition to enabling transactions,
//               we now help businesses build their brand through the use of tools
//               such as Google My Business listing, professional logo design, and
//               brochure creation. Our advanced membership plans allow businesses
//               to access higher levels of services that can make a difference for
//               them to serve customers better and stand out in the market.
//             </p>
//           </section>

//           <section className="benefits">
//             <h2 className="sub-heading">Best B2B Services in India</h2>
//             <p>
//               Here at GlobalB2BMart, we serve the{" "}
//               <b>best B2B services in India </b>that are specifically meant to
//               help businesses grow and shine. For this, we do provide great
//               features that range from live chat on websites, customer support
//               assistance, verified buyer access, and professional website
//               creation. Our team works closely with businesses to make sure that
//               they receive specific, business-designated support and solutions
//               to meet the unique needs of each business. We deliver to startups
//               as well as large enterprises, thus providing scalable solutions to
//               ensure that every business has everything it needs to be a
//               success.
//             </p>
//           </section>

//           <section className="why-choose">
//             <h2 className="sub-heading">Why GlobalB2BMart?</h2>
//             <p>
//               The right platform for your business is important for growth, and
//               we understand this fact at GlobalB2BMart. Our portal has easy
//               interface design, all-encompassing services, and is devoted to the
//               success of any business joining us. That's why GlobalB2BMart must
//               be your favorite B2B partner because of the following reasons:.
//             </p>
//             <ul className="reasons-list">
//               <li style={{ paddingTop: "10px" }}>
//                 <b>Trust and Reliability</b>: The buyer and supplier
//                 verifications mean doing business with guaranteed security.
//               </li>
//               <li style={{ paddingTop: "10px" }}>
//                 <b>customized services</b>: We can create services for you—from
//                 websites to digital marketing.
//               </li>
//               <li style={{ paddingTop: "10px" }}>
//                 <b>Customer support:</b> The customer support department is
//                 always ready to assist you.
//               </li>
//               <li style={{ paddingTop: "10px" }}>
//                 <b>Scalability</b>: Your business may be small or rather big.
//                 Membership plans are designed to grow with your business.
//               </li>
//             </ul>
//           </section>

//           <footer className="footer">
//             <p>
//               At GlobalB2BMart, our mission is simple: to help businesses with
//               all they need to succeed. Sign up today and take that next step
//               towards business growth and success!
//             </p>
//           </footer>
//         </div>
//       </div>
//     </>
//   );
// }



const countrylist = [
  { id: 1, name: "United Kingdom", image: "/assets/ukss.jpeg", link: "/uk" },

  { id: 3, name: "USA", image: "/assets/usasr.jpeg", link: "/usa" },

  {
    id: 5,
    name: "Australia",
    image: "./assets/ausp1.jpeg",
    link: "/australia",
  },
  { id: 6, name: "Canada", image: "/assets/candass1.avif", link: "/canada" },
  { id: 4, name: "Germany", image: "/assets/grr.jpeg", link: "/germany" },

  { id: 8, name: "Oman", image: "/assets/omans.jpeg", link: "/oman" },
  { id: 2, name: "China", image: "/assets/chians.jpeg", link: "/china" },
  {
    id: 9,
    name: "Netherland",
    image: "/assets/neithers.jpeg",
    link: "/netherland",
  },
  // Add more countrylist as needed
];

export default function StateCon() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      title: "What is B2B Business?",
      content: (
        <>
          <p>
            B2B is direct or indirect trade between two organizations: for
            goods, services, or information, but not between an organization
            and a customer. Businesses are reliant on one another for most
            essential supplies, services, or solutions necessary to run and
            grow. B2B, in general, is high volume with long-term partnerships
            and often related to special needs such as raw materials,
            machinery, and professional services.
          </p>
          <p style={{ paddingTop: "15px" }}>
            GlobalB2BMart fills this model by allowing businesses to find
            verified suppliers and buyers on a safe, online platform. Thus, it
            helps companies connected with the business-to-business market
            find one another easily. Using this, companies of various
            industries can exchange their products conveniently with others
            and let their operations achieve higher profitability effectively.
          </p>
        </>
      ),
    },
    {
      title: "Best B2B Portal in India",
      content: (
        <p>
          GlobalB2BMart is the <b>best B2B portal in India</b>, offering
          businesses a safe and reliable platform. Our portal will assist
          companies in identifying verified & certified buyers and suppliers
          that will always make it easier to do trade with those companies.
          We established a system that offers services such as the
          development of business catalogs, websites, and lead generation so
          that businesses of any size can grow. Because of its capability to
          connect companies from the agriculture, fashion, and technology
          sectors, among others, GlobalB2BMart has become the dream platform
          for many companies looking to expand their growth.
        </p>
      ),
    },
    {
      title: "Best B2B Website in India",
      content: (
        <p>
          About the ease of use and the functionalities, GlobalB2BMart
          stands as one of the <b>best B2B websites in India</b>. The
          platform has easy navigation for businesses to try their luck
          through browsing in multiple categories with industry-wise
          solutions. Professional templates, live chat support, and SEO
          services are just some of the powerful tools that we provide to
          ensure businesses connect and grow. Our focus on providing an easy
          user experience has always been our strength in being the largest
          B2B company in India.
        </p>
      ),
    },
    {
      title: "Best B2B Company in India",
      content: (
        <p>
          GlobalB2BMart has only managed to reach the top in becoming the{" "}
          <b>best B2B company in India</b> because of its continuous
          provision of efficiently valuable services that help in business
          progress. The strength of our company lies in satisfying its
          customers by making sure that all, big or small, businesses are
          able to acquire and use all the tools and resources they may need
          to succeed. Our commitment to quality services such as SSL
          security, payment gateways, and social media marketing gives
          assurances to businesses using our portal that their needs will be
          met.
        </p>
      ),
    },
    {
      title: "Business-to-Business portal in india",
      content: (
        <p>
          GlobalB2BMart is a digital marketplace bringing buyers and
          suppliers of products and services together, offering the services
          of a <b>business-to-business portal in India</b>. Our platform
          contains more than 300 diverse categories of products, ranging
          from agriculture supplies to home goods. We provide a facility to
          the business by offering verified, contactable buyers and
          suppliers who guarantee unproblematic and secure transactions.
          Moreover, our focus on industry-specific needs means that
          businesses can customize their experience to get value from their
          B2B interactions.
        </p>
      ),
    },
    {
      title: "Best B2B Platform in India",
      content: (
        <p>
          GlobalB2BMart comes in the upright position among the
          <b> best B2B platforms in India</b>. We provide an ecosystem where
          business relationships can grow and where companies find support
          through their growth track. In addition to enabling transactions,
          we now help businesses build their brand through the use of tools
          such as Google My Business listing, professional logo design, and
          brochure creation. Our advanced membership plans allow businesses
          to access higher levels of services that can make a difference for
          them to serve customers better and stand out in the market.
        </p>
      ),
    },
    {
      title: "Best B2B Services in India",
      content: (
        <p>
          Here at GlobalB2BMart, we serve the{" "}
          <b>best B2B services in India </b>that are specifically meant to
          help businesses grow and shine. For this, we do provide great
          features that range from live chat on websites, customer support
          assistance, verified buyer access, and professional website
          creation. Our team works closely with businesses to make sure that
          they receive specific, business-designated support and solutions
          to meet the unique needs of each business. We deliver to startups
          as well as large enterprises, thus providing scalable solutions to
          ensure that every business has everything it needs to be a
          success.
        </p>
      ),
    },
    {
      title: "Why GlobalB2BMart?",
      content: (
        <>
          <p>
            The right platform for your business is important for growth, and
            we understand this fact at GlobalB2BMart. Our portal has easy
            interface design, all-encompassing services, and is devoted to the
            success of any business joining us.
          </p>
          <ul className="reasons-list">
            <li style={{ paddingTop: "10px" }}>
              <b>Trust and Reliability</b>: The buyer and supplier
              verifications mean doing business with guaranteed security.
            </li>
            <li style={{ paddingTop: "10px" }}>
              <b>customized services</b>: We can create services for you—from
              websites to digital marketing.
            </li>
            <li style={{ paddingTop: "10px" }}>
              <b>Customer support:</b> The customer support department is
              always ready to assist you.
            </li>
            <li style={{ paddingTop: "10px" }}>
              <b>Scalability</b>: Your business may be small or rather big.
              Membership plans are designed to grow with your business.
            </li>
          </ul>
        </>
      ),
    },
  ];

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

  const [parallaxY, setParallaxY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      animationFrameId = requestAnimationFrame(() => {
        const rect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Check if section is visible in viewport
        if (rect.top <= viewportHeight && rect.bottom >= 0) {
          // Calculate scroll progress from 0 (entered bottom) to 1 (leaving top)
          const scrollProgress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
          
          // Map to a pixel offset range (-100 to +100)
          const maxMovement = 200; 
          const offset = (scrollProgress - 0.5) * maxMovement * -1;
          
          setParallaxY(offset);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger initial state
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="country-section" ref={sectionRef}>
        <div 
          className="parallax-bg" 
          style={{ transform: `translate3d(0, ${parallaxY}px, 0)` }}
        ></div>
        <div className="section-overlay"></div>
        <div className="country-content">
          <h1 className="country-title">Find Suppliers By Countries</h1>
          <p className="country-subtitle">
            The perfect way to Choose your Countries Business Directory
          </p>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true }}
            onSwiper={setSwiperInstance}
            onReachEnd={handleReachEnd}
            onReachBeginning={handleReachStart}
            navigation={true}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 20 },
              640: { slidesPerView: 3, spaceBetween: 30 },
              768: { slidesPerView: 5, spaceBetween: 40 },
              1024: { slidesPerView: 6, spaceBetween: 30 },
            }}
            className="country-swiper"
          >
            {countrylist.map((countries) => (
              <SwiperSlide key={`countries-${countries.id}`}>
                <Link to={countries.link} className="country-card">
                  <div className="country-flag-wrapper">
                    <img src={countries.image} alt={countries.name} />
                  </div>
                  <span className="country-name">{countries.name}</span>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="view-all-btn-wrapper">
            <Link to="/all/country" className="view-all-countries-btn">
              View All Countries
            </Link>
          </div>
        </div>
      </div>
      <div className="market-container">
        <div className="market-header">
          <h1 className="market-main-title">
            Welcome to GlobalB2BMart: Best B2B Portal in India
          </h1>
          <p className="market-subtitle">
            GlobalB2BMart is India's leading B2B portal. We make a smooth path
            between a buyer and a supplier. We mainly focus on expanding the
            business of our clients and increasing their sales in the Indian
            as well as global markets. Designed for manufacturers, suppliers,
            and exporters, these features ensure you stay ahead in a
            competitive global marketplace.
          </p>
        </div>

        <div className="faq-grid">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <div
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.title}</span>
                <FontAwesomeIcon
                  icon={activeIndex === index ? faChevronUp : faChevronDown}
                  className="faq-icon"
                />
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{item.content}</div>
              )}
            </div>
          ))}
        </div>

        <div className="market-footer">
          <p>
            At GlobalB2BMart, our mission is simple: to help businesses with
            all they need to succeed. Sign up today and take that next step
            towards business growth and success!
          </p>
        </div>
      </div>
    </>
  );
}
