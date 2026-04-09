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
    { id: 1, name: 'Carrom Board', image: './assets/v1.jpg' },
    { id: 3, name: 'Roller Skates', image: './assets/v2.jpg' },
    { id: 5, name: 'Finger Gripper', image: './assets/v3.jpg' },
    { id: 6, name: 'Gym Rope', image: './assets/v4.jpg' },
    { id: 4, name: 'cricket Bat', image: './assets/v5.jpg' },
    { id: 8, name: 'Football & Basketball', image: './assets/v6.jpg' },
    { id: 2, name: 'Smiley Ball', image: './assets/v7.jpg' },
    { id: 9, name: 'Nunchuck', image: './assets/v8.jpg' }
];

const FifthCatalog = () => {
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
                                            src="./assets/v1.jpg"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Carrom Board</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Brand:</span> Vikas Sports</li>
                                                <li><span>Product:</span> Carrom Boards</li>
                                                <li><span>Material:</span> Made from top-grade plywood, ensuring durability and resistance to warping</li>
                                                <li><span>Surface:</span> Polished, smooth playing surface for optimal striker and coin movement</li>
                                                <li><span>Frame:</span> Sturdy solid wood frame providing robust support and preventing wobbling during intense matches</li>
                                                <li><span>Specifications:</span> Available in various sizes, including tournament standards, catering to all levels of players</li>
                                                <li><span>Design:</span> Intricate traditional and modern designs that enhance gameplay and add aesthetic appeal to your game room</li>
                                                <li><span>Benefits:</span> Enhanced gameplay with accurate strikes and rebounds, durability for extensive use, and easy maintenance to retain shine and smoothness over time</li>
                                                <li><span>Range:</span> Available in different sizes and designs to meet the preferences of casual players and professional Carrom enthusiasts alike</li>
                                            </ul>




                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/v5.jpg"  // Replace this with the appropriate image path for Iranian Saffron Threads
                                            title="Iranian Saffron Threads"
                                            alt="Iranian Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Cricket Bats</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Brand:</span> Vikas Sports</li>
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
                        <p><strong>Vikas Sports</strong>Welcome to Vikas Sports, the premier destination for high-quality sports equipment in Meerut, Uttar Pradesh. Located in the vibrant area of Arya Nagar on Suraj Kund Road, we are dedicated to providing athletes, fitness enthusiasts, and recreational players with top-notch gear to enhance their performance and enjoyment of sports.</p>

                        <h3>All Sports Products</h3>
                        <p>Football: Our footballs are crafted from high-quality synthetic leather, ensuring durability and consistent performance on different playing surfaces. Designed for both recreational and competitive play, they feature enhanced grip and balance.
                        </p>
                        <p> Basketball: Our basketballs are made from premium rubber or composite leather, providing excellent grip and bounce. Ideal for both indoor and outdoor courts, these balls are built to withstand the rigors of intense games and practices.
                        </p>
                        <p>Nunchucks: Perfect for martial arts practitioners, our nunchucks are constructed from durable materials such as hardwood or high-density plastic. They feature comfortable, non-slip grips and a balanced design for precise control and effective training.</p>



                        <div className="video-container">
                            <img src="./assets/ce-Vikas Sports.jpg" alt="" />
                        </div>

                    </div>
                </div >
                    ;
            case 'contact':
                return <div> <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p><strong>Address:</strong>Arya Nagar, Suraj Kund Road Meerut, Uttar Pradesh India</p>
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
                            <h1>Welcome to the  Vikas Sports Company</h1>
                            <p>
                                Welcome to Vikas Sports, the premier destination for high-quality sports equipment in Meerut, Uttar Pradesh. Located in the vibrant area of Arya Nagar on Suraj Kund Road, we are dedicated to providing athletes, fitness enthusiasts, and recreational players with top-notch gear to enhance their performance and enjoyment of sports.                          </p>
                            <h2>We Deals in All Sports Accessories</h2>
                            <p>
                                Football: Our footballs are crafted from high-quality synthetic leather, ensuring durability and consistent performance on different playing surfaces. Designed for both recreational and competitive play, they feature enhanced grip and balance.

                                Basketball: Our basketballs are made from premium rubber or composite leather, providing excellent grip and bounce. Ideal for both indoor and outdoor courts, these balls are built to withstand the rigors of intense games and practices.

                                Nunchucks: Perfect for martial arts practitioners, our nunchucks are constructed from durable materials such as hardwood or high-density plastic. They feature comfortable, non-slip grips and a balanced design for precise control and effective training.
                            </p>
                            <h2>Our Products :</h2>
                            <p>
                                At Vikas Sports, our mission is to deliver exceptional sports equipment that meets the needs of every player. We believe in the power of sports to inspire and bring people together, and we are committed to supporting this through our extensive range of products. Whether you’re a professional athlete or someone who enjoys sports for leisure, we aim to provide you with the best tools to achieve your goals.
                            </p>
                            <p>Smiley Ball: Designed for fun and active play, our Smiley Ball is made from durable materials with a cheerful smiley face design. It’s suitable for various recreational activities, providing enjoyment for players of all ages.

                                Exceptional Quality: We are committed to offering only the highest quality equipment. Our products undergo rigorous testing and are crafted from premium materials to ensure they meet our stringent standards.

                                Expert Craftsmanship: Our team of experts brings years of experience to the design and selection of our sports equipment. We understand the nuances of different sports and are dedicated to providing products that enhance performance and comfort.

                                Personalized Service: At Vikas Sports, we value our customers and strive to provide personalized service. Our knowledgeable staff is always available to offer advice, answer questions, and help you find the perfect equipment for your needs.</p>


                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/v2.jpg"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Roller Skates</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Brand:</span> Vikas Sports</li>
                                                <li><span>Location:</span> Meerut, Uttar Pradesh</li>
                                                <li><span>Product:</span> Premium Range of Skaters</li>
                                                <li><span>Durable Construction:</span> Built with high-grade materials to ensure long-lasting performance, even with rigorous use</li>
                                                <li><span>Wheels:</span> Robust, high-performance wheels offering excellent grip and a smooth ride on various surfaces</li>
                                                <li><span>Comfort:</span> Adjustable straps and cushioned interiors provide a snug, comfortable fit, reducing blisters and discomfort during extended use</li>
                                                <li><span>Precision Bearings:</span> High-quality bearings ensure smooth rolling, enhancing control and speed</li>
                                                <li><span>Design:</span> Stylish and trendy designs available in various colors, appealing to both young skaters and adults</li>
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
                                    Vikas Sports {" "}
                                    <div className="_oth_info">
                                        <a
                                            href="https://www.google.co.in/maps/dir//12.9715987,77.5945627"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>
                                                <b className="fa fa-map-marker" />
                                                Meerut, Uttar Pradesh  {" "}
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

export default FifthCatalog;

