import React, { useState } from 'react';
import './Catalog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGauge, faShieldHalved, faMessage } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const products = [
    { id: 1, name: 'Organic Rice', image: './assets/agri3.avif', clientId: 'CLI001' },
    { id: 2, name: 'Fresh Wheat', image: './assets/agro1.avif', clientId: 'CLI001' },
    { id: 3, name: 'Premium Spices', image: './assets/hand.avif', clientId: 'CLI001' },
    { id: 4, name: 'Handicraft Items', image: './assets/woodenchair1.jfif', clientId: 'CLI001' },
    { id: 5, name: 'Agricultural Tools', image: './assets/whe5.avif', clientId: 'CLI001' },
    { id: 6, name: 'Textile Fabrics', image: './assets/fab10', clientId: 'CLI001' },
    { id: 7, name: 'Electronic Goods', image: './assets/elc1.avif', clientId: 'CLI001' }
];

const ClientCatalog1 = () => {
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
                                        <small>Client ID: {product.clientId}</small>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                );
            case 'about':
                return <div className="about-us-container">
                    <div className="intro">
                        <h1>About Our Company</h1>
                        <p>Client ID: CLI001 - We are a leading supplier of agricultural and industrial products.</p>
                    </div>
                    <div className="company-info">
                        <h2>Our Mission</h2>
                        <p>To provide high-quality products to buyers worldwide with excellent service.</p>
                    </div>
                </div>;
            case 'contact':
                return <div>
                    <div className="contact-info">
                        <h2>Contact Us</h2>
                        <p><strong>Client ID:</strong> CLI001</p>
                        <p><strong>Address:</strong> Sample Address, City, State</p>
                        <p><strong>Contact Person:</strong> John Doe</p>
                        <p><strong>Email:</strong> contact@client001.com</p>
                        <p><strong>Phone:</strong> +1-234-567-8900</p>
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
                                            <small>Client ID: {product.clientId}</small>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className='welcome'>
                            <h1>Welcome to Client Catalog 1</h1>
                            <p>Client ID: CLI001 - Explore our wide range of products.</p>
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
                        <span className="logo_img2" style={{ background: "#4CAF50" }}>
                            C1
                        </span>
                        <div className="company_info">
                            <div className="company_name2">
                                <h1>
                                    Client Catalog 1{" "}
                                    <div className="_oth_info">
                                        <span>
                                            <b>Client ID: CLI001</b>
                                        </span>
                                    </div>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="company_right">
                        <Link to="tel:+12345678900" className="contact_link">
                            <FontAwesomeIcon icon={faGauge} /> Contact Supplier
                        </Link>
                    </div>
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
                            </li>
                            <li
                                className={activeSection === 'contact' ? 'active' : ''}
                                onClick={() => setActiveSection('contact')}
                            >
                                Contact Us <FontAwesomeIcon icon={faShieldHalved} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {renderContent()}
        </>
    );
};

export default ClientCatalog1;