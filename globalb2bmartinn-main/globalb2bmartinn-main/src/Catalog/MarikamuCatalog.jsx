import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Catalog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGauge, faShieldHalved, faMessage, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const products = [
    { id: 1, name: 'Premium Kanchi Cotton Saree', image: '/assets/saree_cotton.png' },
    { id: 2, name: 'Chettinad Trendy Cotton Saree', image: '/assets/saree2.jpg' },
    { id: 3, name: 'Traditional Kanchi Cotton Saree', image: '/assets/saree6.jpeg' },
    { id: 4, name: 'Handcrafted Cotton Saree', image: '/assets/saree.jpeg' },
    { id: 5, name: '100 Count Kanchi Saree', image: '/assets/saree15.jpeg' },
    { id: 6, name: 'Designer South Cotton Saree', image: '/assets/premium_saree.png' }
];

const MarikamuCatalog = () => {
    const [activeSection, setActiveSection] = useState('home');
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
                                        <img src="/assets/saree_cotton.png" title="Kanchi Cotton Saree" alt="Kanchi Cotton Saree" width="202" height="299" />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Handcrafted Premium Kanchi Cotton Saree (100 Count)</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Product Name:</span> Handcrafted Premium Kanchi Cotton Saree</li>
                                                <li><span>Count:</span> 100 Count Pure Cotton</li>
                                                <li><span>Artistry:</span> Authentic South Indian Artistry</li>
                                                <li><span>Description:</span> Indulge in the timeless charm of authentic South Indian artistry. Meticulously handcrafted by skilled artisans.</li>
                                                <li><span>Fabric:</span> Finest quality cotton ensuring maximum comfort and breathability.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img src="/assets/saree2.jpg" title="Chettinad Saree" alt="Chettinad Saree" width="202" height="299" />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Chettinad Trendy Cotton Saree</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Product Name:</span> Chettinad Trendy Cotton Saree</li>
                                                <li><span>Style:</span> Contemporary patterns with traditional roots</li>
                                                <li><span>Usage:</span> Perfect for both formal and casual ethnic wear</li>
                                                <li><span>Special Feature:</span> Lightweight and durable texture with vibrant color combinations.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                    </div>
                );
            case 'about':
                return (
                    <div className="about-us-container">
                        <div className="intro">
                            <h1>Welcome to Marikamu Textiles</h1>
                        </div>
                        <div className="company-info">
                            <h2>About Us</h2>
                            <p><strong>Marikamu Textiles</strong> is a premier manufacturer and supplier of authentic South Indian cotton sarees. Based in Andipatti Jakkampatti, Tamil Nadu, we specialize in 100-count Kanchi Cotton sarees and Chettinad trendy collections.</p>
                            <p>Our mission is to preserve the rich heritage of South Indian textile artistry while meeting the style needs of the modern woman. Every saree in our collection is a masterpiece of handcrafted excellence, representing decades of weaving tradition.</p>
                            <h3>Our Expertise</h3>
                            <p>With a focus on purity and craftsmanship, we ensure that our 100-count cotton sarees provide unparalleled comfort and elegance. From traditional motifs to trendy contemporary designs, Marikamu Textiles is your destination for premium ethnic wear.</p>
                        </div>
                    </div>
                );
            case 'contact':
                return (
                    <div>
                        <div className="contact-info">
                            <h2>Contact Us</h2>
                            <p><strong>Address:</strong> Building No/Flat No.: D.No.1/618 WARD 1, J.J Nagar, Jakkampatti, Andipatti, Theni, Tamil Nadu - 62551, India</p>
                            <p><strong>Featured By:</strong> Globalb2bmart.com</p>
                        </div>
                        <div className="map-container">
                            <h3>Our Location</h3>
                            <div style={{ width: '100%', height: '450px', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <p>Map View for Andipatti Jakkampatti, Theni, Tamil Nadu</p>
                            </div>
                        </div>
                    </div>
                );
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
                            <h1>Welcome to Marikamu Textiles</h1>
                            <p>Indulge in the timeless charm of authentic South Indian artistry. Marikamu Textiles brings you the finest selection of handcrafted premium Kanchi Cotton sarees and Chettinad trendy collections directly from the weavers of Tamil Nadu.</p>
                            <h2>Premium 100 Count Cotton</h2>
                            <p>Our specialty lies in the meticulous weaving of 100-count cotton, providing a fabric that is as light as air yet exceptionally durable. Perfect for all seasons and occasions.</p>
                            <h2>Our Collections:</h2>
                            <p><strong>Kanchi Cotton:</strong> Traditional designs that reflect cultural heritage.</p>
                            <p><strong>Chettinad Trendy:</strong> Modern aesthetics blended with traditional weaving techniques.</p>
                            <p><strong>Traditional Handloom:</strong> Handcrafted excellence by skilled artisans.</p>
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
                        <span className="logo_img2" style={{ background: "#8b4513" }}>MT</span>
                        <div className="company_info">
                            <div className="company_name2">
                                <h1>
                                    Marikamu Textiles
                                    <div className="_oth_info">
                                        <span>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '5px' }} />
                                            Theni, Tamil Nadu, India
                                        </span>
                                    </div>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom_head">
                    <div className="Premium-Header">
                        <ul className="menu_sec">
                            <li className={activeSection === 'home' ? 'active' : ''} onClick={() => setActiveSection('home')}>
                                Home <FontAwesomeIcon icon={faGauge} />
                            </li>
                            <li className={activeSection === 'products' ? 'active' : ''} onClick={() => setActiveSection('products')}>
                                Products <FontAwesomeIcon icon={faShieldHalved} />
                            </li>
                            <li className={activeSection === 'about' ? 'active' : ''} onClick={() => setActiveSection('about')}>
                                About Us <FontAwesomeIcon icon={faMessage} />
                            </li>
                            <li className={activeSection === 'contact' ? 'active' : ''} onClick={() => setActiveSection('contact')}>
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

export default MarikamuCatalog;
