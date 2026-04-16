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
    { id: 1, name: 'Black Nylon Cable Tie', image: './assets/c1.jpg' },
    { id: 3, name: 'Plastic Cable Tie', image: './assets/c2.jpg' },
    { id: 5, name: 'Zinc Security Seal', image: './assets/c3.jpg' },
    { id: 6, name: 'Milk Tanker Wire Cable Seal', image: './assets/c4.jpg' },
    { id: 4, name: 'cable Clip', image: './assets/c6.jpg' },
    { id: 8, name: 'Nylon Cable Tie', image: './assets/c5.jpeg' },
    { id: 2, name: 'Black Nylon Cable Tie', image: './assets/c1.jpg' },
    { id: 9, name: 'Milk Tanker Wire Cable Seal', image: './assets/c2.jpg' }
];

const SecondCatalog = () => {
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
                                            src="./assets/c1.jpg"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Black Cable Tie</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Brand Name:</span> NRP Plasts</li>
                                                <li><span>Origin:</span> Ahmedabad, India</li>
                                                <li><span>Type:</span> Nylon Cable Tie</li>
                                                <li><span>Style:</span> UV-resistant</li>
                                                <li><span>Usage:</span> Cable, Wire, and Component Tying</li>
                                                <li><span>Application:</span> Residential, Industrial</li>
                                                <li><span>Properties:</span> Strength, Flexibility, High Impact-Proof Capacity</li>
                                                <li><span>Environment:</span> Indoor, Outdoor</li>

                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/c2.jpg"  // Replace this with the appropriate image path for Iranian Saffron Threads
                                            title="Iranian Saffron Threads"
                                            alt="Iranian Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Nylon Cable Tie</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Brand Name:</span> NRP Plasts</li>
                                                <li><span>Origin:</span> Ahmedabad, India</li>
                                                <li><span>Type:</span> Nylon Cable Tie</li>
                                                <li><span>Style:</span> UV-resistant</li>
                                                <li><span>Usage:</span> Cable, Wire, and Component Tying</li>
                                                <li><span>Application:</span> Residential, Industrial</li>
                                                <li><span>Properties:</span> Strength, Flexibility, High Impact-Proof Capacity</li>
                                                <li><span>Environment:</span> Indoor, Outdoor</li>

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
                        <p><strong>Azoliya</strong>, Founded in 2011, NRP Plast Manufacturing & Marketing specializes in high-quality Cable Ties and Security Seals. Based in Ahmedabad, Gujarat, our state-of-the-art infrastructure ensures efficient production and timely delivery.</p>

                        <h3>All cable Tie Products</h3>
                        <p> Under the leadership of CEO Mr. Rohit Patel, we have built a strong national clientele. Our dedicated and skilled workforce is committed to achieving high customer satisfaction, making NRP Plast a trusted name in the industry.</p>

                        <h3>Certificates</h3>
                        <p>At NRP Plast, we pride ourselves on adhering to the highest standards of quality and safety. Our products are certified and compliant with various prestigious standards, ensuring excellence and reliability in every fastener we manufacture. Our certifications include:</p>

                        <div className="video-container">
                            <img src="./assets/ce-azoliya.jpg" alt="" />
                        </div>

                    </div>
                </div>
                    ;
            case 'contact':
                return <div> <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p><strong>Address:</strong>J-7 Sanskrit Apartments Behind Alkapuri Society Ghatlodiya Ahmedabad Gujarat 380061 – India.</p>
                    <p><strong>Contact Person:</strong>Mr. Rohit Patel</p>
                </div>
                    <div className="map-container">
                        <h3>Our Location</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14682.660390396884!2d72.52632037397976!3d23.072736607624137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e835b833c2487%3A0xfc823948c1c2b91c!2sSanskrut%20Flats!5e0!3m2!1sen!2sin!4v1724655599861!5m2!1sen!2sin" referrerpolicy="no-referrer-when-downgrade"
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
                            <h1>Welcome to the  Azoliya Company</h1>
                            <p>
                                Founded in 2011, NRP Plast Manufacturing & Marketing specializes in high-quality Cable Ties and Security Seals. Based in Ahmedabad, Gujarat, our state-of-the-art infrastructure ensures efficient production and timely delivery.
                            </p>
                            <h2>We Deals in All cable Tie Products</h2>
                            <p>
                                Under the leadership of CEO Mr. Rohit Patel, we have built a strong national clientele. Our dedicated and skilled workforce is committed to achieving high customer satisfaction, making NRP Plast a trusted name in the industry.
                            </p>
                            <h2>Certifications at Azoliya</h2>
                            <p>
                                At NRP Plast, we pride ourselves on adhering to the highest standards of quality and safety. Our products are certified and compliant with various prestigious standards, ensuring excellence and reliability in every fastener we manufacture.
                            </p>



                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/c1.jpg"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Black Cable Tie</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Brand Name:</span> NRP Plasts</li>
                                                <li><span>Origin:</span> Ahmedabad, India</li>
                                                <li><span>Type:</span> Nylon Cable Tie</li>
                                                <li><span>Style:</span> UV-resistant</li>
                                                <li><span>Usage:</span> Cable, Wire, and Component Tying</li>
                                                <li><span>Application:</span> Residential, Industrial</li>
                                                <li><span>Properties:</span> Strength, Flexibility, High Impact-Proof Capacity</li>
                                                <li><span>Environment:</span> Indoor, Outdoor</li>
                                                <li><span>Special Feature:</span> Free Shipping</li>
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
                            SS
                        </span>
                        <div className="company_info">
                            <div className="company_name2">
                                <h1>
                                    Azoliya {" "}
                                    <div className="_oth_info">
                                        <a
                                            href="https://www.google.co.in/maps/dir//12.9715987,77.5945627"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>
                                                <b className="fa fa-map-marker" />
                                                Ahmedabad Gujarat  {" "}
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

export default SecondCatalog;
