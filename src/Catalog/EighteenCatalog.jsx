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
    { id: 1, name: 'Glass Door', image: './assets/nobr1.webp' },
    { id: 3, name: 'Curtain Bracket Support', image: './assets/nob2.webp' },
    { id: 5, name: 'Cabinet Handle', image: './assets/nob3.webp' },
    { id: 6, name: 'Almunium Kuti Hook', image: './assets/nob4.webp' },
    { id: 4, name: 'Door Handle', image: './assets/nobr1.webp' },
    { id: 8, name: 'Heavy Curtains Bracket', image: './assets/nob6.webp' },
    { id: 2, name: 'Cabinet Handle', image: './assets/nob7.webp' },
    { id: 9, name: 'Curtain Bracket Support', image: './assets/nob2.webp' }
];

const EighteenCatalogs = () => {
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
                                        {/* <p>{product.name}</p> */}
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
                                            src="./assets/nob2.webp"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Premium Quality Kalyani cotton tample border saree</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Premium Quality Kalyani Cotton Temple Border Saree / Lata Gadwal Paithani:</span></li>
                                                <li><span>Material:</span> 100% Original Cotton</li>
                                                <li><span>Thread:</span> High-quality acrylic 2/100 thread</li>
                                                <li><span>Length:</span> 6.30 meters</li>
                                                <li><span>Design:</span> Striking temple border, intricate thread puttas, grand thread pallu</li>
                                                <li><span>Blouse:</span> Comes with contrast blouse</li>
                                                <li><span>Price:</span> ₹780 plus shipping</li>
                                                <li><span>Special Offer:</span> Attractive discounts on bulk orders</li>
                                                <li><span>Usage:</span> Suitable for daily wear and special occasions</li>
                                                <li><span>Brand:</span> Nobaara Fashion</li>
                                            </ul>


                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/nob3.webp"  // Replace this with the appropriate image path for Iranian Saffron Threads
                                            title="Iranian Saffron Threads"
                                            alt="Iranian Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>SILK PATTERN WITH RICH BUTTA Semi Handloom WEDDING SAREES</h3>
                                        </div>
                                        <div className="pro_det_sec">

                                            <ul className="attributes">
                                                <li><span>Premium Quality Kalyani Cotton Plain Border Saree / Lata Gadwal Paithani:</span></li>
                                                <li><span>Material:</span> 100% Original Cotton</li>
                                                <li><span>Thread:</span> High-quality acrylic 2/100 thread</li>
                                                <li><span>Length:</span> 6.30 meters</li>
                                                <li><span>Design:</span> Plain border with intricate all-over thread putta, grand thread pallu</li>
                                                <li><span>Blouse:</span> Comes with contrast blouse</li>
                                                <li><span>Price:</span> ₹680 plus shipping</li>
                                                <li><span>Special Offer:</span> Attractive discounts on bulk orders</li>
                                                <li><span>Usage:</span> Perfect for everyday wear and special occasions</li>
                                                <li><span>Brand:</span> Nobaara Fashion</li>
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
                        <h1>Welcome to in Our Company</h1>

                    </div>
                    <div className="company-info">
                        <h2>About Us</h2>
                        <p><strong>Nobaraa Fashion</strong>At Nobaraafashion, we are dedicated to preserving the timeless beauty of traditional Indian craftsmanship while blending it with modern elegance. Based in the heart of Tamil Nadu, our company operates from 38/F-2, Santhi Lal Garden, Neinnampatti Road, Idappadi Post, Sankari, Salem, Tamil Nadu – 637101. With a deep passion for sarees, we bring to life a stunning collection that captures the essence of Indian heritage, yet appeals to contemporary tastes.

                        </p>
                        <p>OuFounded by Nasreen, Nobaraafashion is committed to delivering premium quality sarees that exude grace and sophistication. Our offerings include Checked Kalyani Cotton, Lata Gadwal Paithani, Kalyani Silk Pattern sarees, and more. Each saree in our collection is crafted from 100% original cotton and high-quality threads, ensuring a soft, luxurious feel and exceptional durability. Whether you’re preparing for a wedding, festive celebration, or everyday wear, our sarees are designed to make you feel elegant and comfortable.</p>

                        {/* <h3>All Kind of  We Do</h3> */}
                        <p>
                            We take pride in our attention to detail, from intricate thread work to grand pallus and contrast blouses. At Nobaraafashion, we aim to offer affordable luxury, with options for both regular wear and special occasions. Welcome to a world of tradition and style with Nobaraafashion.
                        </p>
                        <p>Nobaraafashion combines tradition and modern elegance with sarees like Checked Kalyani Cotton, Lata Gadwal Paithani, and Kalyani Silk Pattern, ideal for weddings and special occasions.
                        </p>
                        <p>Polishing Services: Our polishing solutions ensure that surfaces, whether floors or furniture, are restored to their original luster and shine.</p>
                        <p>Premium Quality Fabrics
                            Utilizes 100% original cotton and high-quality threads for durability and comfort.</p>
                        <p>Traditional Craftsmanship
                            Features intricate thread work and traditional designs, including Checked Kalyani Cotton and Lata Gadwal Paithani sarees.

                            Elegant Designs
                            Offers grand pallus and contrast blouses, enhancing the aesthetic appeal and sophistication of each saree.
                        </p>
                        <p>Affordable Luxury
                            Combines high-quality materials and craftsmanship with competitive pricing, making luxury accessible and affordable.</p>
                        <p>Nobaraa Fashion offers sarees that blend traditional craftsmanship with modern elegance. Our collection includes Checked Kalyani Cotton, Lata Gadwal Paithani, and Kalyani Silk Pattern sarees, making them ideal for weddings and special occasions.</p>

                        <div className="video-container">
                            <img src="./assets/ce-Nobaraa Fashion.webp" alt="" />
                        </div>

                    </div>
                </div >
                    ;
            case 'contact':
                return <div> <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p><strong>Address:</strong>38/F-2, Santhi Lal Garden Neinnampatti Road Idappadi Post, Sankari, Salem, Tamil Nadu, India - 637101</p>
                    <p>Contact Person : Nasreen Ji</p>
                    {/* <p><strong>Contact Person:</strong>Mr. Rohit Patel</p> */}
                </div>
                    <div className="map-container">
                        <h3>Our Location</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62561.201372679105!2d77.79701271127858!3d11.47450610358823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba95e3912e6c8e7%3A0x48974d5c0936ee65!2sSangagiri%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1725968213565!5m2!1sen!2sin"
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
                            <h1>Welcome to the  Nobaraa Fashion Company</h1>
                            <p>
                                Nobaara Fashion offers elegant sarees, including Kalyani Cotton, Lata Gadwal Paithani, and Silk with butta work. Blending tradition and style, their sarees suit both special occasions and everyday wear.. With a focus on luxurious fabrics, intricate details, and vibrant colors, Nobaara Fashion’s sarees are ideal for anyone looking to embrace both heritage and contemporary style. </p>
                            <p>Nobaara Fashion offers exquisite sarees including Checked Kalyani Cotton, Lata Gadwal Paithani, premium Kalyani Cotton Temple Border, Kalyani Silk with rich butta wedding sarees, and plain border designs. Combining tradition and modern style, Nobaara’s collection is perfect for special occasions and everyday elegance.

                            </p>



                            <p>We are leading brand specializing in a diverse and elegant collection of sarees that capture the essence of traditional Indian craftsmanship while catering to contemporary tastes.  Cotton Temple Border Sarees.</p>
                            <h2>We Deals in All  Kind of Sarees</h2>
                            <p>
                                Premium Quality: Made from top-grade materials for enhanced reliability.
                            </p>
                            <h2>High-Quality Fabrics: Premium Kalyani cotton and silk for comfort and durability.:</h2>
                            <p>
                                Unique Patterns: Checked, temple border, and butta designs.
                            </p>
                            <p>Vibrant Colors: Rich, bold hues that enhance elegance.
                                Versatile Designs: Suitable for both special occasions and casual wear.</p>

                            <p>Our collection includes Checked Kalyani Cotton, Lata Gadwal Paithani, and Kalyani Silk Pattern sarees, making them ideal for weddings and special occasions.</p>
                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/nobr1.webp"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Checked Kalyani cotton</h3>
                                        </div>
                                        <div className="pro_det_sec">

                                            <ul className="attributes">
                                                <li><span>Checked Kalyani Cotton Saree / Lata Gadwal Paithani:</span></li>
                                                <li><span>Material:</span> 100% Original Cotton</li>
                                                <li><span>Thread:</span> First-quality acrylic 2/100 thread</li>
                                                <li><span>Length:</span> 6.30 meters</li>
                                                <li><span>Design:</span> Grand jari pallu, intricate thread puttas</li>
                                                <li><span>Blouse:</span> Comes with contrasting blouse</li>
                                                <li><span>Price:</span> ₹880 plus shipping</li>
                                                <li><span>Usage:</span> Suitable for both formal and casual occasions</li>
                                                <li><span>Brand:</span> Nobaara Fashion</li>
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
                            NF
                        </span>

                        <div className="company_info">
                            <div className="company_name2">
                                <h1>
                                    Nobaraa Fashion {" "}
                                    <div className="_oth_info">
                                        <a
                                            href="https://www.google.co.in/maps/dir//12.9715987,77.5945627"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>
                                                <b className="fa fa-map-marker" />
                                                Salem, Tamil Nadu, India{" "}
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

export default EighteenCatalogs;

