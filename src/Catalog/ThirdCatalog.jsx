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
    { id: 1, name: '2 in 1 Dumpling Maker', image: './assets/new1.jpg' },
    { id: 3, name: '2 in 1 shop Dispense', image: './assets/new2.jpg' },
    { id: 5, name: 'Liquid Dispenser', image: './assets/new3.jpg' },
    { id: 6, name: 'Real Push Chopper', image: './assets/new4.jpg' },
    { id: 4, name: 'Lock & Lock Container', image: './assets/new5.jpg' },
    { id: 8, name: 'Dry Fruit Box', image: './assets/new6.jpg' },
    { id: 2, name: 'Candy Water Bottle', image: './assets/new7.jpg' },
    { id: 9, name: 'Ice Cube Tray', image: './assets/new8.jpg' }
];

const ThirdCatalog = () => {
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
                                            src="./assets/new2.jpg"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Liquid Dispenser</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Dimensions:</span> 15 x 16 x 17 cm</li>
                                                <li><span>Color Options:</span> Available in various colors</li>
                                                <li><span>Key Features:</span></li>
                                                <li><span>2 In 1 Design:</span> Integrates a soap dispenser and a sponge holder into one compact unit, preventing messy drips and keeping your sink area tidy.</li>
                                                <li><span>Save Money:</span> Dispense the perfect amount of dish soap or lotion with a simple press. No batteries or electricity required, reducing waste and household expenses.</li>
                                                <li><span>Large Bowl Capacity:</span> 1000ml capacity, minimizing the need for frequent refills.</li>
                                                <li><span>Solid Quality:</span> Made from durable PE material, resists deformation, and provides reliable performance over long-term use.</li>
                                            </ul>


                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/new5.jpg"  // Replace this with the appropriate image path for Iranian Saffron Threads
                                            title="Iranian Saffron Threads"
                                            alt="Iranian Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Lock Container</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Product Name:</span> NewEra Air Tight Containers for Kitchen Storage Set</li>
                                                <li><span>Quantity:</span> Pack of 8 (4 x 700ml, 4 x 1100ml)</li>
                                                <li><span>Material:</span> BPA-free certified food-grade plastic</li>
                                                <li><span>Design:</span> Sleek, transparent with wide mouth and silicone gasket lids</li>
                                                <li><span>Features:</span> Stackable, space-saving, airtight</li>
                                                <li><span>Usage:</span> Ideal for storing various kitchen items</li>
                                                <li><span>Benefits:</span> Keeps food fresh and dry, adds practicality and color to your kitchen</li>
                                                <li><span>Special Feature:</span> Free Shipping</li>
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
                        <p><strong>New Era Appliances</strong>, "Neweraappliances" stands as a premier brand based in Rajkot, Gujarat, India, specializing in the manufacture of top-tier kitchenware and home appliances since its establishment in 2020. Committed to excellence, we meticulously select the finest raw materials and implement rigorous quality control measures to ensure unparalleled product quality.</p>

                        <h3>All Products</h3>
                        <p> Committed to excellence, we meticulously select the finest raw materials and implement rigorous quality control measures to ensure unparalleled product quality. Our mission is centered on delivering superior products at competitive prices while offering exceptional customer service. </p>

                        <h3></h3>
                        <p>At the heart of our operations lies our dedication to customer satisfaction and product excellence. Utilizing advanced systems and cutting-edge technologies, we uphold the highest standards of craftsmanship to consistently produce top-quality items.</p>

                        <div className="video-container">
                            <img src="./assets/ce-New Era Appliances.jpg" alt="" />
                        </div>

                    </div>
                </div>
                    ;
            case 'contact':
                return <div> <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p><strong>Address:</strong>Plot no-1, Shad no-D, opp Falcon pump, Vavdi Rajkot – 360004</p>
                    {/* <p><strong>Contact Person:</strong>Mr. Rohit Patel</p> */}
                </div>
                    <div className="map-container">
                        <h3>Our Location</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.042254048136!2d70.79317097347769!3d22.238475545136975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca96bbd2d7a7%3A0xc772decb13e886ea!2sFalcon%20Pumps%20Private%20Limited!5e0!3m2!1sen!2sin!4v1724834108010!5m2!1sen!2sin" referrerpolicy="no-referrer-when-downgrade"
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
                            <h1>Welcome to the  New Era Appliances Company</h1>
                            <p>
                                "Neweraappliances" stands as a premier brand based in Rajkot, Gujarat, India, specializing in the manufacture of top-tier kitchenware and home appliances since its establishment in 2020. Committed to excellence, we meticulously select the finest raw materials and implement rigorous quality control measures to ensure unparalleled product quality.
                            </p>
                            <h2>We Deals In Houseware Products</h2>
                            <p>
                                Our mission is centered on delivering superior products at competitive prices while offering exceptional customer service. At the heart of our operations lies our dedication to customer satisfaction and product excellence. Utilizing advanced systems and cutting-edge technologies, we uphold the highest standards of craftsmanship to consistently produce top-quality items.
                            </p>
                            <h2>Founded on five core values, our business ethos emphasizes:</h2>
                            <p>
                                Honesty: Providing straightforward advice and ensuring the highest product standards.
                                Friendliness: Fostering customer happiness without unnecessary complexity.
                                Expertise: Leveraging years of industry experience to meet diverse appliance needs.
                                Affordability: Offering cost-effective solutions for domestic, commercial, and industrial kitchens.
                                Reliability: Establishing trust and standing by our customers through every circumstance.
                            </p>



                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/new1.jpg"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>2 in 1 Dumpling Maker</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Product Name:</span> 2 in 1 Momo Maker</li>
                                                <li><span>Material:</span> High-quality PP</li>
                                                <li><span>Features:</span> Safe, Durable, Easy to Clean</li>
                                                <li><span>Function:</span> Creates Round Dumpling Wrappers</li>
                                                <li><span>Usage:</span> Making Dumplings, Pies, Wontons, and More</li>
                                                <li><span>Design:</span> Wavy-shaped Dumplings</li>
                                                <li><span>Perfect For:</span> DIY Cooking with Family and Friends</li>
                                                <li><span>Benefits:</span> Saves Time, Brings Joy to Cooking</li>
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
                        {/* <span className="logo_img2" style={{ background: "#d1d786" }}>
                            NE
                        </span> */}
                        <img width={120} height={80} src="./assets/footerimgnew.png" alt="" />
                        <div className="company_info">
                            <div className="company_name2">
                                <h1>
                                    New Era Appliances {" "}
                                    <div className="_oth_info">
                                        <a
                                            href="https://www.google.co.in/maps/dir//12.9715987,77.5945627"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>
                                                <b className="fa fa-map-marker" />
                                                Rajkot Gujarat  {" "}
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

export default ThirdCatalog;
