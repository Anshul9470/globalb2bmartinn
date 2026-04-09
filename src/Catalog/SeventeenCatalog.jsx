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
    { id: 1, name: 'Glass Door', image: './assets/sita1.webp' },
    { id: 3, name: 'Curtain Bracket Support', image: './assets/sita2.webp' },
    { id: 5, name: 'Cabinet Handle', image: './assets/sita3.webp' },
    { id: 6, name: 'Almunium Kuti Hook', image: './assets/sita4.webp' },
    { id: 4, name: 'Door Handle', image: './assets/sita1.webp' },
    { id: 8, name: 'Heavy Curtains Bracket', image: './assets/sita6.webp' },
    { id: 2, name: 'Cabinet Handle', image: './assets/sita7.webp' },
    { id: 9, name: 'Curtain Bracket Support', image: './assets/sita2.webp' }
];

const SeventeenCatalog = () => {
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
                                            src="./assets/sita2.webp"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Curtains Bracket Support</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Step Curtain Window Support:</span></li>
                                                <li><span>Material:</span> Aluminium</li>
                                                <li><span>Design:</span> Double pipe design for enhanced support</li>
                                                <li><span>Color:</span> Silver</li>
                                                <li><span>Finish:</span> Polished</li>
                                                <li><span>Usage/Application:</span> Curtain fitting</li>
                                                <li><span>Brand:</span> AESAAR</li>
                                                <li><span>Country of Origin:</span> Made in India</li>
                                                <li><span>Minimum Order Quantity:</span> 100 pairs</li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/sita3.webp"  // Replace this with the appropriate image path for Iranian Saffron Threads
                                            title="Iranian Saffron Threads"
                                            alt="Iranian Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Cabinet Handle</h3>
                                        </div>
                                        <div className="pro_det_sec">

                                            <ul className="attributes">
                                                <li><span>Pull Handles:</span></li>
                                                <li><span>Material:</span> Stainless Steel</li>
                                                <li><span>Available Sizes:</span> 96mm, 128mm, 160mm, 192mm, 228mm, 256mm (4 inches, 6 inches, 8 inches, 10 inches, 12 inches)</li>
                                                <li><span>Color:</span> Silver</li>
                                                <li><span>Handle Type:</span> Pull Handle</li>
                                                <li><span>Usage/Application:</span> Cabinet fitting</li>
                                                <li><span>Country of Origin:</span> Made in India</li>
                                                <li><span>Minimum Order Quantity:</span> 500 pieces</li>
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
                        <p><strong>Sitaram Enterprise</strong>At Sitaram Enterprise, based in Rajkot, Gujarat, we specialize in delivering top-tier stainless steel products designed for durability and style. Our diverse range includes high-quality door handles, stylish curtain brackets, sophisticated cabinet handles, and sturdy cloth hangers. With a commitment to excellence, we employ advanced technology and stringent quality control to ensure that every product meets the highest standards. Our goal is to provide our clients with superior products that enhance both functionality and aesthetics.

                        </p>
                        <p>Our sophisticated cabinet handles are designed to add a touch of refinement to your cabinetry, and our sturdy cloth hangers are built to withstand daily wear and tear. Each product is manufactured using advanced technology and stringent quality control measures to ensure they meet the highest standards of performance and longevity.

                            For reliable, high-quality solutions tailored to your needs, contact us at Virani Aghat Shed No.- 4 Dhebar Road South.</p>

                        {/* <h3>All Kind of  We Do</h3> */}
                        <p>
                            At Sitaram Enterprise, we prioritize customer satisfaction by delivering products that not only meet but exceed expectations.

                            High-Quality:
                            At Sitaram Enterprise, every product undergoes meticulous craftsmanship to meet the highest standards of quality.
                        </p>
                        <p>SInnovative
                            Our commitment to innovation means we continuously adopt advanced manufacturing techniques.
                        </p>
                        <p>Polishing Services: Our polishing solutions ensure that surfaces, whether floors or furniture, are restored to their original luster and shine.</p>
                        <p>Innovative Technology
                            Our elevators are equipped with the latest technology for smooth and efficient operation. Energy-efficient designs help reduce operational costs and environmental impact.</p>
                        <p>Sustainable
                            We incorporate environmentally responsible practices in our production processes, reducing waste and using materials that promote sustainability.
                        </p>
                        <p>Versatile
                            With a wide range of stainless steel products, Sitaram Enterprise caters to diverse applications.</p>

                        <div className="video-container">
                            <img src="./assets/ce-Sitaram Enterprise.webp" alt="" />
                        </div>

                    </div>
                </div >
                    ;
            case 'contact':
                return <div> <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p><strong>Address:</strong>Vrundavan Society, Rajkot, Gujarat </p>
                    <p>Contact Person : Raman Ji</p>
                    {/* <p><strong>Contact Person:</strong>Mr. Rohit Patel</p> */}
                </div>
                    <div className="map-container">
                        <h3>Our Location</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14764.009432350855!2d70.81568577351626!3d22.315750575591597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b60fc27b1be1%3A0x2812ce0888b0c607!2sVrundavan%20Society%2C%20Rohidaspra%2C%20Rajkot%2C%20Gujarat%20360003!5e0!3m2!1sen!2sin!4v1725962458463!5m2!1sen!2sin"
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
                            <h1>Welcome to the  Sitaram Enterprise Company</h1>
                            <p>
                                Sitaram Enterprise, based in Rajkot, Gujarat, offers top-quality stainless steel products, including durable door handles, stylish curtain brackets, sophisticated cabinet handles, and sturdy cloth hangers. Committed to excellence, they use advanced technology to ensure high standards. Contact them at Virani Aghat Shed No.- 4 Dhebar Road South for more details.  </p>
                            <p>At Sitaram Enterprise, offers durable stainless steel door handles, elegant curtain brackets, stylish cabinet handles, and sturdy cloth hangers.Sitaram Enterprise prides itself on delivering products that meet the highest standards of quality and craftsmanship.  meet the expectations of their clients.

                            </p>



                            <p>. They offer a wide range, including durable door handles, elegant curtain brackets, sophisticated cabinet handles, and sturdy cloth hangers. Committed to exceptional quality, their products combine advanced technology and rigorous quality control.</p>
                            <h2>We Deals in All Kind of Curtain Items</h2>
                            <p>
                                Premium Quality: Made from top-grade materials for enhanced reliability.
                            </p>
                            {/* <h2>Our Machines Features Are :</h2> */}
                            <p>
                                Versatile Functionality: Suitable for various applications and settings.
                                Advanced Craftsmanship: Crafted using modern technology and strict quality standards.
                            </p>
                            <p>Elegant Design: Adds a touch of sophistication to any space.</p>


                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/sita1.webp"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Door Handles</h3>
                                        </div>
                                        <div className="pro_det_sec">

                                            <ul className="attributes">
                                                <li><span>Premium Round Door Handles:</span></li>
                                                <li><span>Material:</span> Stainless Steel (S.S 202)</li>
                                                <li><span>Length:</span> 8 inches (200mm hole to hole)</li>
                                                <li><span>Thickness:</span> 25mm</li>
                                                <li><span>Finish:</span> Nickel, Chrome</li>
                                                <li><span>Available Finishes:</span> Black CP, Black Gold, Black Rose Gold, Satin CP, Brass Antique, Copper Antique, Fully Black, Fully Gold, Fully Rose Gold, Grey Rose Gold, Wooden Gold, Wooden CP</li>
                                                <li><span>Handle Type:</span> Pull Handle</li>
                                                <li><span>Ideal For:</span> Exterior doors</li>
                                                <li><span>Accessories:</span> Fitting accessories included</li>
                                                <li><span>Minimum Order Quantity:</span> 100 pieces</li>
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
                            SE
                        </span>

                        <div className="company_info">
                            <div className="company_name2">
                                <h1>
                                    Sitaram Enterprise {" "}
                                    <div className="_oth_info">
                                        <a
                                            href="https://www.google.co.in/maps/dir//12.9715987,77.5945627"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>
                                                <b className="fa fa-map-marker" />
                                                Vrundavan Society, Rajkot, Gujarat {" "}
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

export default SeventeenCatalog;

