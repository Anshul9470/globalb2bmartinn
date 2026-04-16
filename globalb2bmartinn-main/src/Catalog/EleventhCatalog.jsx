import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Catalog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGauge, faShieldHalved, faMessage } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const products = [
    { id: 1, name: 'Glass Set', image: './assets/buckle1.png' },
    { id: 3, name: 'Plate Set', image: './assets/buckle2.png' },
    { id: 5, name: 'Bowl Set', image: './assets/buckle3.png' },
    { id: 6, name: 'Decorative Glass Set', image: './assets/buckle1.png' },
    { id: 1, name: 'Decorative Plate Set', image: './assets/buckle2.png' },
    { id: 3, name: 'Decorative Glass set', image: './assets/buckle3.png' },
    { id: 5, name: 'Designer Crystal Glass set', image: './assets/buckle4.png' },
    // { id: 6, name: '6 pcs Glass Set', image: './assets/ashi4.png' },
    // { id: 4, name: 'ashi Powder', image: './assets/ashi.png' },
    // { id: 8, name: 'ashi Leaves', image: './assets/ashi.png' },
    // { id: 2, name: 'ashi Exracts', image: './assets/ashi2.png' },
    // { id: 9, name: 'ashi Powder', image: './assets/ashi3.png' }
];

const EleventhCatalog = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [highlight, setHighlight] = useState(false);
    const [swiperInstance, setSwiperInstance] = useState(null);

    const handleReachEnd = () => {
        if (swiperInstance) {
            const isEnd = swiperInstance.isEnd;
            const navigationButton = document.querySelector('.swiper-button-next');
            if (navigationButton) {
                navigationButton.style.display = isEnd ? 'none' : 'block';
            }
        }
    };

    const handleReachStart = () => {
        if (swiperInstance) {
            const isBeginning = swiperInstance.isBeginning;
            const navigationButton = document.querySelector('.swiper-button-prev');
            if (navigationButton) {
                navigationButton.style.display = isBeginning ? 'none' : 'block';
            }
        }
    };

    const handleProductClick = () => {
        setActiveSection('products');
    };

    const renderContent = () => {
        switch (activeSection) {
            case 'products':
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
                            {products.map(product => (
                                <SwiperSlide key={`product-${product.id}`}>
                                    <div className="card" onClick={handleProductClick}>
                                        <img src={product.image} alt={product.name} />

                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>



                        <div className='welcome'>


                            <h1>Our Products</h1>

                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/buckle2.png"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Bag Buckles</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Material:</span> Premium Metal - Strong and durable, designed to withstand frequent use and ensure long-lasting performance</li>
                                                <li><span>Design:</span> Functional and Stylish - Features a secure locking mechanism with an aesthetically pleasing design that enhances the look of bags</li>
                                                <li><span>Finish:</span> Glossy or Matte - Available in various finishes to match different bag styles and preferences</li>
                                                <li><span>Sizes:</span> Multiple Sizes Available - Different dimensions to fit a range of bag straps and styles</li>
                                                <li><span>Mounting Type:</span> Easy Attachment - Designed for straightforward installation on bag straps, belts, or other accessories</li>
                                                <li><span>Color:</span> Available in Various Colors - Options include classic hues like silver, gold, and black to complement different bag designs</li>
                                                <li><span>Application:</span> Versatile Use - Ideal for handbags, backpacks, luggage, and other types of bags</li>
                                                <li><span>Minimum Order Quantity:</span> Flexible Ordering - Suitable for both small and bulk orders to accommodate various project sizes</li>
                                            </ul>









                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/buckle3.png"  // Replace this with the appropriate image path for Iranian Saffron Threads
                                            title="Iranian Saffron Threads"
                                            alt="Iranian Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Ring Buckles</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Material:</span> High-Quality Metal - Durable and strong, designed to endure daily wear and provide reliable performance</li>
                                                <li><span>Design:</span> Elegant and Functional - Features a classic ring shape with a secure locking mechanism for added convenience</li>
                                                <li><span>Finish:</span> Polished or Matte - Available in different finishes to match various design preferences and styles</li>
                                                <li><span>Sizes:</span> Various Sizes Available - Multiple dimensions to accommodate different applications and strap widths</li>
                                                <li><span>Mounting Type:</span> Easy Attachment - Designed for simple integration with belts, straps, and other accessories</li>
                                                <li><span>Color:</span> Wide Range of Colors - Options including silver, gold, bronze, and custom colors to fit diverse styles</li>
                                                <li><span>Application:</span> Versatile Use - Ideal for belts, bag straps, and decorative accessories</li>
                                                <li><span>Minimum Order Quantity:</span> Flexible Ordering - Suitable for both small and large orders to meet different needs</li>
                                            </ul>






                                        </div>
                                    </div>

                                </div>
                            </li>


                        </div>
                    </div>



                );
            case 'about':
                return <div className="about-us-container">
                    <div className="intro">
                        <h1>Welcome to the  Our Company</h1>

                    </div>
                    <div className="company-info">
                        <h2>About Us</h2>
                        <p><strong>Hv Enterprises</strong> Explore unparalleled B2B solutions with HV ENTERPRISES your premier supplier of plastic and metal buckles in India. Specializing in precision-engineered products, we cater to diverse industries with a commitment to quality and innovation. Our plastic buckles offer lightweight durability ideal for [highlighting plastic buckle applications], while our metal buckles provide robust strength for [highlighting metal buckle applications]. Partner with us to elevate your supply chain with superior products and exceptional service, ensuring reliability and success in the competitive Indian market..</p>

                        <h3>All Kind of Buckles Availale</h3>
                        <p>Discover a trusted partner in HV ENTERPRISES a leading B2B supplier of plastic and metal buckles in India. Our extensive range of plastic buckles caters to diverse industries such as BUCKLLES SUPPLIER IN INDIA offering lightweight yet durable solutions that enhance product functionality and aesthetics. Meanwhile, our metal buckles are crafted for industries like PLASTIC BUCKLLES SUPPLIER IN INDIA  delivering superior strength and durability to withstand rigorous applications.
                        </p>
                        <p>  Diverse Selection
                            We offer a wide range of plants, from vibrant flowers and indoor plants to fruit-bearing trees and vegetable plants, catering to all your gardening needs.
                        </p>
                        <p>At [HV ENTERPRISES], we pride ourselves on quality craftsmanship and innovative design, ensuring each buckle meets stringent standards for performance and reliability. Partner with us to streamline your supply chain with premium buckle solutions, backed by personalized service and a commitment to excellence.”</p>
                        {/* 
                        <p>Eco-Friendly Practices
                            We prioritize sustainability by using organic fertilizers and promoting natural, eco-friendly gardening techniques.</p>
                        <p>Customer Satisfaction
                            We are committed to helping our customers succeed in their gardening journeys with ongoing support and expert tips for long-term plant health.</p> */}
                        <div className="video-container">
                            <img src="./assets/ce-Hv Enterprises.png" alt="" />
                        </div>

                    </div>
                </div >
                    ;
            case 'contact':
                return <div> <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p><strong>Address:</strong>Subhash Nagar New Delhi</p>
                    {/* <p><strong>Contact Person:</strong>Mr. Rohit Patel</p> */}
                </div>
                    <div className="map-container">
                        <h3>Our Location</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28013.97745623829!2d77.08130322366627!3d28.63733836700313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0367d0193b05%3A0x90a9554cf6306fa!2sSubhash%20Nagar%2C%20Delhi%2C%20110027!5e0!3m2!1sen!2sin!4v1725017562857!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                    </div>
                </div>;
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
                                {products.map(product => (
                                    <SwiperSlide key={`product-${product.id}`}>
                                        <div className="card" onClick={handleProductClick}>
                                            <img src={product.image} alt={product.name} />
                                            {/* <p>{product.name}</p> */}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className='welcome'>
                            <h1>Welcome to the  Hv Enterprises Company</h1>
                            <p>Explore unparalleled B2B solutions with HV ENTERPRISES your premier supplier of plastic and metal buckles in India. Specializing in precision-engineered products, we cater to diverse industries with a commitment to quality and innovation. Our plastic buckles offer lightweight durability ideal for [highlighting plastic buckle applications], while our metal buckles provide robust strength for [highlighting metal buckle applications]. Partner with us to elevate your supply chain with superior products and exceptional service, ensuring reliability and success in the competitive Indian market.</p>
                            <h2>We Deals in All kind of Buckles</h2>
                            <p>
                                Discover a trusted partner in HV ENTERPRISES a leading B2B supplier of plastic and metal buckles in India. Our extensive range of plastic buckles caters to diverse industries such as BUCKLLES SUPPLIER IN INDIA offering lightweight yet durable solutions that enhance product functionality and aesthetics. Meanwhile, our metal buckles are crafted for industries like PLASTIC BUCKLLES SUPPLIER IN INDIA  delivering superior strength and durability to withstand rigorous applications.
                            </p>
                            <p>At [HV ENTERPRISES], we pride ourselves on quality craftsmanship and innovative design, ensuring each buckle meets stringent standards for performance and reliability. Partner with us to streamline your supply chain with premium buckle solutions, backed by personalized service and a commitment to excellence.”
                            </p>
                            <h2>Deals In All Kind Of Buckles :</h2>
                            <p>
                                PLAIN BUCKLES SUPPLIER
                            </p>
                            <p>BAG BUCKLES SUPPLIER.</p>
                            <p>RING BUCKLES SUPPLIER</p>
                            <p>ALL BUCKLES SUPPLIER</p>


                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/buckle1.png"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>PLAIN BUCKLES  </h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Material:</span> High-Quality Metal - Durable and sturdy, designed to withstand daily use and maintain its form</li>
                                                <li><span>Design:</span> Plain and Simple - Classic, minimalist design that complements a wide range of styles</li>
                                                <li><span>Finish:</span> Smooth Surface - Polished or matte finish, providing a clean and refined appearance</li>
                                                <li><span>Sizes:</span> Available in Various Sizes - Different dimensions to fit a range of applications and preferences</li>
                                                <li><span>Mounting Type:</span> Easy to Install - Designed for straightforward attachment to belts, straps, or other accessories</li>
                                                <li><span>Color:</span> Silver or Black - Neutral colors that blend seamlessly with various accessories</li>
                                                <li><span>Application:</span> Versatile Use - Suitable for belts, bags, straps, and other fashion or functional accessories</li>
                                                <li><span>Minimum Order Quantity:</span> Customizable Orders - Options for both small quantities and bulk purchases to meet different needs</li>
                                            </ul>








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
                            HE
                        </span>

                        <div className="company_info">
                            <div className="company_name2">
                                <h1>
                                    Hv Enterprises {" "}
                                    <div className="_oth_info">
                                        <a
                                            href="https://www.google.co.in/maps/dir//12.9715987,77.5945627"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>
                                                <b className="fa fa-map-marker" />
                                                Subhash Nagar, Delhi {" "}
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
                    <div className={`Premium-Header ${highlight ? 'highlight' : ''}`}>
                        <ul className="menu_sec">
                            <li
                                className={activeSection === 'home' ? 'active' : ''}
                                onClick={() => setActiveSection('home')}
                            >
                                Home <FontAwesomeIcon icon={faGauge} />
                            </li>
                            <li
                                className={activeSection === 'products' ? 'active' : ''}
                                onClick={() => setActiveSection('products')}
                            >
                                Products <FontAwesomeIcon icon={faShieldHalved} />
                            </li>
                            <li
                                className={activeSection === 'about' ? 'active' : ''}
                                onClick={() => setActiveSection('about')}
                            >
                                About Us <FontAwesomeIcon icon={faMessage} />
                                <ul className="dropdown"></ul>
                            </li>
                            <li
                                className={activeSection === 'contact' ? 'active' : ''}
                                onClick={() => setActiveSection('contact')}
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

export default EleventhCatalog;

