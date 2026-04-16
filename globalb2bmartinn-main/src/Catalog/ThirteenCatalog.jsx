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
    { id: 1, name: 'Candle Handler', image: './assets/mm1.webp' },
    { id: 3, name: 'Jewellery Box', image: './assets/mm2.webp' },
    { id: 5, name: 'Belan With Stand', image: './assets/mm3.webp' },
    { id: 6, name: 'Wooden Table', image: './assets/mm4.webp' },
    { id: 4, name: 'Iron Wall Art', image: './assets/mm5.webp' },
    { id: 8, name: 'Metal Wall Mirror', image: './assets/mm6.webp' },
    { id: 2, name: 'Wall Clock', image: './assets/mm7.webp' },
    { id: 9, name: 'Award Trophy', image: './assets/mm8.webp' }
];

const ThirteenCatalog = () => {
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
                                        <p>{product.name}</p>
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
                                            src="./assets/mm2.webp"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Jewellery Box</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Brand:</span> M M Overseas</li>
                                                <li><span>Product:</span> Elegant Jewelry Box</li>
                                                <li><span>Material:</span> Premium velvet and wood</li>
                                                <li><span>Dimensions:</span> 8×6×4 inches</li>
                                                <li><span>Features:</span> Multiple compartments, ring holders, and a mirror</li>
                                                <li><span>Finish:</span> Luxurious velvet lining with a polished exterior</li>
                                                <li><span>Design:</span> Classic and sophisticated design, perfect for organizing and displaying your jewelry</li>
                                            </ul>




                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/mm4.webp"  // Replace this with the appropriate image path for Iranian Saffron Threads
                                            title="Iranian Saffron Threads"
                                            alt="Iranian Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Wooden Table</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Brand:</span> mm-overseas</li>
                                                <li><span>Location:</span> Meerut, Uttar Pradesh</li>
                                                <li><span>Product:</span> Cricket Bats</li>
                                                <li><span>Material:</span> Made from top-grade English willow or Kashmir willow for excellent performance and durability</li>
                                                <li><span>Weight:</span> Balanced design for optimal control and powerful strokes</li>
                                                <li><span>Grip:</span> Comfortable, textured handle ensuring a secure grip and reducing vibration</li>
                                                <li><span>Construction:</span> Reinforced edges and sturdy blade enhancing durability and resistance to wear and tear</li>
                                                <li><span>Sizes:</span> Available in various sizes and shapes to suit different playing styles and age groups</li>
                                                <li><span>Benefits:</span> Superior performance with excellent power and control, comfortable play with reduced strain, and built to withstand rigorous use</li>
                                                <li><span>Versatility:</span> Suitable for T20, ODI, and Test cricket, accommodating different playing styles</li>
                                                <li><span>Design:</span> Stylish finish adding visual appeal to your cricket gear</li>
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
                        <h1>Welcome to the About Our Company</h1>

                    </div>
                    <div className="company-info">
                        <h2>About Us</h2>
                        <p><strong>mm-overseas</strong>Welcome to M M Overseas, a pioneering brand based in Moradabad, Uttar Pradesh. Since our inception, we have specialized in providing high-quality decorative products and homeware solutions that enhance and transform your living spaces. Our commitment to excellence ensures that we offer superior products at competitive prices, backed by exceptional customer service.</p>

                        <p> At M M Overseas, we understand the importance of aesthetics and functionality in home decor. Our extensive range of products is designed to cater to diverse tastes and preferences, ensuring that every piece resonates with quality and craftsmanship. From elegant wall art to stylish kitchenware, our collections are curated to bring a touch of sophistication and charm to your home.

                        </p>
                        <p>We take pride in our ability to blend tradition with innovation, creating products that are not only beautiful but also durable and practical. Our dedicated team works tirelessly to uphold the highest standards of quality, ensuring that every product that bears the M M Overseas name is a testament to our commitment to excellence.

                            Thank you for choosing M M Overseas. We look forward to being a part of your home decor journey and helping you create spaces that reflect your unique style and personality.</p>
                        <div className="video-container">
                            <img src="./assets/ce-mm-overseas.webp" alt="" />
                        </div>

                    </div>
                </div >
                    ;
            case 'contact':
                return <div> <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p><strong>Address:</strong>H.O90E/12 Nadra Manzil
                        Gokul Das College, Moradabad-244001
                        Uttar Pradesh, India</p>
                    {/* <p><strong>Contact Person:</strong>Mr. Rohit Patel</p> */}
                </div>
                    <div className="map-container">
                        <h3>Our Location</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.3470923172335!2d77.71288007376941!3d28.97708406835404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c64ef21465407%3A0xfbe1b861a15cb237!2sSuraj%20Kund%20Rd%20%26%20Arya%20Nagar%2C%20Suraj%20Kund%2C%20Gandhi%20Nagar%2C%20Meerut%2C%20Uttar%20Pradesh%20250002!5e0!3m2!1sen!2sin!4v1724840927982!5m2!1sen!2sin"
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
                                            <p>{product.name}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className='welcome'>
                            <h1>Welcome to the  mm-overseas Company</h1>
                            <p>
                                Welcome to M M Overseas, a pioneering brand based in Moradabad, Uttar Pradesh. Since our inception, we have specialized in providing high-quality decorative products and homeware solutions that enhance and transform your living spaces. Our commitment to excellence ensures that we offer superior products at competitive prices, backed by exceptional customer service. At M M Overseas, we understand the importance of aesthetics and functionality in home decor.                 </p>
                            <h2>We Deals in All Decorative Items</h2>
                            <p>
                                We take pride in our ability to blend tradition with innovation, creating products that are not only beautiful but also durable and practical. Our dedicated team works tirelessly to uphold the highest standards of quality, ensuring that every product that bears the M M Overseas name is a testament to our commitment to excellence.

                                "M M Overseas" is a pioneering brand based in Moradabad, Uttar Pradesh, specializing in high-quality decorative products and homeware solutions. We're dedicated to transforming spaces with superior products at competitive prices, backed by exceptional customer service.

                                Nunchucks: Perfect for martial arts practitioners, our nunchucks are constructed from durable materials such as hardwood or high-density plastic. They feature comfortable, non-slip grips and a balanced design for precise control and effective training.
                            </p>
                            <h2>Our Products :</h2>
                            <p>
                                At mm-overseas, our mission is to deliver exceptional sports equipment that meets the needs of every player. We believe in the power of sports to inspire and bring people together, and we are committed to supporting this through our extensive range of products. Whether you’re a professional athlete or someone who enjoys sports for leisure, we aim to provide you with the best tools to achieve your goals.
                            </p>
                            <p>Enhance your living space with the Decorative Aluminium Candle Holder from M M Overseas. This elegant piece features a sleek silver finish and accommodates five candles, making it ideal for creating a warm and inviting ambiance in any room. Crafted from high-quality aluminium, it measures 5×12 inches, combining functionality with contemporary design.

                                Introducing our handcrafted Wooden Coffee Table, meticulously crafted from premium Mango Wood and Iron. This round, modern-designed table is an elegant addition to any home or restaurant setting. The polished brown finish enhances its natural beauty, while the sturdy construction ensures durability and longevity. With a height of 3 feet, it’s perfect for everyday use or special occasions, offering a stylish and functional centerpiece for your living space. Elevate your decor with this exquisite piece from M.M. OVERSEAS, where quality meets craftsmanship.

                                The Wooden Chakla Belan with Stand from M.M. Overseas combines traditional utility with modern aesthetics. This kitchen essential features a sturdy wooden chakla (rolling board) measuring 10×10 inches and a belan (rolling pin) of 12 inches, accompanied by a durable iron stand. Adorned with high-quality enamel printing in white, it enhances kitchen decor while offering practical use.

                                Thank you for choosing M M Overseas. We look forward to being a part of your home decor journey and helping you create spaces that reflect your unique style and personality.</p>


                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/mm1.webp"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Candle Holder</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Brand:</span> M M Overseas</li>
                                                <li><span>Product:</span> Decorative Aluminium Candle Holder</li>
                                                <li><span>Finish:</span> Sleek silver finish</li>
                                                <li><span>Candle Capacity:</span> Accommodates five candles</li>
                                                <li><span>Dimensions:</span> 5×12 inches</li>
                                                <li><span>Material:</span> High-quality aluminium</li>
                                                <li><span>Design:</span> Contemporary design, ideal for creating a warm and inviting ambiance</li>
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
                            MM
                        </span>

                        <div className="company_info">
                            <div className="company_name2">
                                <h1>
                                    mm-overseas {" "}
                                    <div className="_oth_info">
                                        <a
                                            href="https://www.google.co.in/maps/dir//12.9715987,77.5945627"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>
                                                <b className="fa fa-map-marker" />
                                                Moradabad Uttar Pradesh, India  {" "}
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

export default ThirteenCatalog;

