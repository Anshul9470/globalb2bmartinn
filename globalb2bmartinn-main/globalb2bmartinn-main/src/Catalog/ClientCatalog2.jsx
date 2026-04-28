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
    { id: 1, name: 'Industrial Chemicals', image: './assets/eqip5.avif', clientId: 'CLI002' },
    { id: 2, name: 'Machinery Parts', image: './assets/indus3.avif', clientId: 'CLI002' },
    { id: 3, name: 'Construction Materials', image: './assets/tile.avif', clientId: 'CLI002' },
    { id: 4, name: 'Power Tools', image: './assets/pil2.avif', clientId: 'CLI002' },
    { id: 5, name: 'Safety Equipment', image: './assets/eqip7.avif', clientId: 'CLI002' },
    { id: 6, name: 'Electrical Components', image: './assets/bulb2.jfif', clientId: 'CLI002' },
    { id: 7, name: 'Hardware Supplies', image: './assets/flagall.avif', clientId: 'CLI002' }
];

const ClientCatalog2 = () => {
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
                        <p>Client ID: CLI002 - We specialize in industrial and construction supplies.</p>
                    </div>
                    <div className="company-info">
                        <h2>Our Expertise</h2>
                        <p>Providing reliable industrial solutions and construction materials to businesses globally.</p>
                    </div>
                </div>;
            case 'contact':
                return <div>
                    <div className="contact-info">
                        <h2>Contact Us</h2>
                        <p><strong>Client ID:</strong> CLI002</p>
                        <p><strong>Address:</strong> Industrial Zone, City, State</p>
                        <p><strong>Contact Person:</strong> Jane Smith</p>
                        <p><strong>Email:</strong> contact@client002.com</p>
                        <p><strong>Phone:</strong> +1-234-567-8901</p>
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
                            <h1>Welcome to Client Catalog 2</h1>
                            <p>Client ID: CLI002 - Discover our industrial and construction products.</p>
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
                        <span className="logo_img2" style={{ background: "#2196F3" }}>
                            C2
                        </span>
                        <div className="company_info">
                            <div className="company_name2">
                                <h1>
                                    Client Catalog 2{" "}
                                    <div className="_oth_info">
                                        <span>
                                            <b>Client ID: CLI002</b>
                                        </span>
                                    </div>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="company_right">
                        <Link to="tel:+12345678901" className="contact_link">
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

export default ClientCatalog2;