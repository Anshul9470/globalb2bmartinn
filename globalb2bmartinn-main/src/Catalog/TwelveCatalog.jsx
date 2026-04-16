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
    { id: 1, name: 'Sunrise Nurture', image: './assets/tan1.webp' },
    { id: 3, name: 'Sunrise Icon Pots 100 Litres', image: './assets/tan2.webp' },
    { id: 5, name: 'Sunrise Nurture Square', image: './assets/tan3.webp' },
    { id: 6, name: 'Layer Water Tank', image: './assets/tan4.webp' },
    { id: 1, name: 'Sunrise 3 Layer Water Tank', image: './assets/tan5.webp' },

    { id: 5, name: 'Surya Layer Water Tank', image: './assets/tan7.webp' },
    { id: 6, name: 'LG 3 Layer Water Tank', image: './assets/tan8.webp' },
    { id: 3, name: 'Sunrise Icon Multipurpose', image: './assets/tan9.webp' },
    // { id: 4, name: 'tan Powder', image: './assets/tan.webp' },
    // { id: 8, name: 'tan Leaves', image: './assets/tan1.webp' },
    // { id: 2, name: 'tan Exracts', image: './assets/tan2.webp' },
    // { id: 9, name: 'tan Powder', image: './assets/tan3.webp' }
];

const TwelthCatalog = () => {
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
                                            src="./assets/tan2.webp"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Sunrise Icon Pots 100 Litres</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Material:</span> Premium LLDPE Plastic - Ensures durability and long-lasting use for both indoor and outdoor environments</li>
                                                <li><span>Colors:</span> Yellow and Black - Available in vibrant yellow and classic black to suit various aesthetic preferences</li>
                                                <li><span>Use Case:</span> Versatile Application - Ideal for growing plants in home gardens, nurseries, or decorative commercial spaces</li>
                                                <li><span>Design:</span> Seamless Fit - Designed to blend effortlessly into any setting, providing an optimal environment for plant growth</li>
                                                <li><span>Purpose:</span> Suitable for a Variety of Plants - Perfect for flowers, shrubs, and ornamental plants, offering flexibility in gardening needs</li>
                                            </ul>








                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/tan4.webp"  // Replace this with the appropriate image path for Iranian Saffron Threads
                                            title="Iranian Saffron Threads"
                                            alt="Iranian Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Sun Rise 3 Layer Water Tank</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Material:</span> High-Quality Plastic - Made from durable and long-lasting plastic, ensuring strength and durability</li>
                                                <li><span>Layers:</span> 3 Layer Construction - Designed with three layers for extra strength, insulation, and protection from UV rays</li>
                                                <li><span>Capacity:</span> Available in Various Sizes - Choose from multiple capacities to meet different water storage needs</li>
                                                <li><span>Use Case:</span> Suitable for Residential and Commercial Use - Ideal for storing water in homes, buildings, and industrial settings</li>
                                                <li><span>Color:</span> White and Black - Available in neutral colors that blend seamlessly with any environment</li>
                                                <li><span>Design:</span> Sleek and Functional - The design offers both aesthetic appeal and practical use for water storage solutions</li>
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
                        <p><strong>Sunrise</strong>We are a plastic manufacturing and fabrication company. We specialize in full water storage solutions. With our 15 years of trust, superior quality, and consumer-friendly designs, our plastic water storage tanks have a track record of excellence, making us the best water tank brand in the business. Our Manufacturing unit has a capacity to produce 1500000 Ltr of tanks per day to cater to the demand.</p>

                        <h3>All Kind of Tanks Available</h3>
                        <p>All Sunrise overhead water tanks have been designed keeping in view the needs of all kinds of applications – domestic, commercial, and industrial. Sunrise water tanks are made from high-grade LLDPE plastic which is safe and durable. Each sunrise water tank goes through strict quality control checks making each tank stronger and more rigid thus keeping its position as the best water tank brand.
                        </p>
                        <p>  Sunrise water tanks are available in different sizes starting from 200 Ltrs to 5000Ltrs. We also offer up to 10 years warranty on every water tank. Also Rajaram polymers have pioneered in designing and developing one of its first kinds of “open top multipurpose tanks” to cater to different applications.
                        </p>
                        <p>We are a plastic manufacturing and fabrication company. We specialize in full water storage solutions. With our 15 years of trust, superior quality, and consumer-friendly designs, our plastic water storage tanks have a track record of excellence, making us the best water tank brand in the business.</p>



                        <div className="video-container">
                            <img src="./assets/ce-Sunrise.webp" alt="" />
                        </div>

                    </div>
                </div >
                    ;
            case 'contact':
                return <div> <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p><strong>Address:</strong>Kundapura, Koteshwar, Udupi, Karnataka, India</p>
                    {/* <p><strong>Contact Person:</strong>Mr. Rohit Patel</p> */}
                </div>
                    <div className="map-container">
                        <h3>Our Location</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31024.409122868015!2d74.67509924255543!3d13.593687817959468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc918c7c338877%3A0x47f6de18e0b49606!2sKoteshwara%20Proper%2C%20Karnataka%20576222!5e0!3m2!1sen!2sin!4v1725022069445!5m2!1sen!2sin"
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
                            <h1>Welcome to the  Sunrise Company</h1>
                            <p>We are a plastic manufacturing and fabrication company. We specialize in full water storage solutions. With our 15 years of trust, superior quality, and consumer-friendly designs, our plastic water storage tanks have a track record of excellence, making us the best water tank brand in the business. </p>
                            <h2>We Deals in All kind of Tanks</h2>
                            <p>
                                Our Manufacturing unit has a capacity to produce 1500000 Ltr of tanks per day to cater to the demand.
                            </p>
                            <h2>Our Products :</h2>
                            <p>
                                Each sunrise water tank goes through strict quality control checks making each tank stronger and more rigid thus keeping its position as the best water tank brand. Sunrise water tanks are available in different sizes starting from 200 Ltrs to 5000Ltrs.
                            </p>
                            <p>We also offer up to 10 years warranty on every water tank. Also Rajaram polymers have pioneered in designing and developing one of its first kinds of “open top multipurpose tanks” to cater to different applications.</p>



                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/tan1.webp"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Sunrise Nuture</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Material:</span> Premium LLDPE Plastic - Durable and long-lasting, designed for outdoor and indoor use</li>
                                                <li><span>Colors:</span> Yellow and Black - Available in two versatile colors that complement various decor styles</li>
                                                <li><span>Design:</span> Roto-Moulded - Sturdy construction with a sleek, modern design that enhances any space</li>
                                                <li><span>Use Case:</span> Versatile Application - Perfect for home gardens, nurseries, or decorative use in commercial spaces</li>
                                                <li><span>Environment:</span> Ideal for Plant Growth - Provides an optimal environment for plants to thrive, with ample space and durability</li>
                                                <li><span>Size Options:</span> Multiple Sizes - Available in various sizes to fit different plants and arrangements</li>
                                                <li><span>Weather Resistant:</span> Suitable for All Climates - Built to withstand different weather conditions, from hot summers to rainy seasons</li>
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
                            ST
                        </span>

                        <div className="company_info">
                            <div className="company_name2">
                                <h1>
                                    Sunrise {" "}
                                    <div className="_oth_info">
                                        <a
                                            href="https://www.google.co.in/maps/dir//12.9715987,77.5945627"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>
                                                <b className="fa fa-map-marker" />
                                                Kundapura, Koteshwar, Udupi, Karnataka
                                                {" "}
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

export default TwelthCatalog;

