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
    { id: 1, name: 'Bias Tow Tier', image: './assets/k1.webp' },
    { id: 3, name: 'Grader Loader tier', image: './assets/k2.webp' },
    { id: 5, name: 'Industrila Tier', image: './assets/k3.webp' },
    { id: 6, name: 'Tractor Front', image: './assets/k4.webp' },
    { id: 4, name: 'MRL Tyres', image: './assets/k5.webp' },
    { id: 8, name: 'Radhu Tyres', image: './assets/k6.webp' },
    { id: 2, name: 'RPL Tyres', image: './assets/k7.webp' },
    { id: 9, name: 'TOT Tyres', image: './assets/k8.webp' }
];

const FourteenCatalog = () => {
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
                                            src="./assets/k2.webp"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>grader Loader Tyre</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Brand:</span> Kalptaru Tractors and Agro</li>
                                                <li><span>Product:</span> AT 2368 Industrial Tire</li>
                                                <li><span>Application:</span> Grader/Loader and Off-Road Equipment</li>
                                                <li><span>Design:</span> Rugged and sturdy, specifically engineered for drive wheels</li>
                                                <li><span>Tread and Carcass Compounds:</span> Tough and reinforced with all-nylon cord construction for exceptional strength and resistance to cuts, snags, and bruises</li>
                                                <li><span>Weather and Ozone Resistance:</span> Enhances longevity and reliability, ensuring consistent performance in severe service conditions</li>
                                                <li><span>Usage:</span> Ideal for demanding industrial and off-road applications</li>
                                                <li><span>Commitment:</span> Exemplifies Kalptaru Tractors and Agro’s commitment to high-quality solutions for the construction and industrial sectors</li>
                                            </ul>



                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/k3.webp"  // Replace this with the appropriate image path for Iranian Saffron Threads
                                            title="Iranian Saffron Threads"
                                            alt="Iranian Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Industrial Tractor Tyre</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Brand:</span> Kalptaru Tractors and Agro</li>
                                                <li><span>Product:</span> AT 1324 Industrial Tractor Tire</li>
                                                <li><span>Application:</span> Industrial and Construction Environments</li>
                                                <li><span>Tread Design:</span> Specially designed with a tough compound and strong carcass structure for exceptional durability</li>
                                                <li><span>Classification:</span> F3 Truck Tire, versatile for off-the-road and agricultural use</li>
                                                <li><span>Performance:</span> Provides maximum flexibility for traction in diverse weather conditions and optimal driveability</li>
                                                <li><span>Commitment:</span> Exemplifies Kalptaru Tractors and Agro’s commitment to delivering high-quality solutions for industrial and agricultural sectors</li>
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
                        <p><strong>Kalptaru Tractors and Agro</strong> owned by Sant Jain, is a premier provider of high-quality tires, catering to the diverse requirements of the agriculture, commercial, and industrial sectors. Our commitment to excellence drives us to deliver top-tier tire solutions that guarantee superior performance and reliability across various applications. We pride ourselves on our extensive range of products, each designed to meet the specific demands of different vehicles and machinery. Our Comprehensive Range of Tires Includes: Tractors: Our tractor tires are engineered to support agricultural and farming operations, providing excellent traction, stability, and durability in the field. These tires are designed to enhance productivity and ensure efficient soil management.</p>

                        <h3>All Tyres</h3>
                        <p>
                            JCBs and Construction Equipment: We offer specialized tires for JCBs and other heavy-duty construction equipment.
                        </p>
                        <p>Kalptaru Tractors and Agro, led by Sant Jain, specializes in a diverse range of tires for various vehicles and machinery:
                        </p>
                        <p>Tractors: for agricultural and farming operations
                            JCBs: optimized for heavy-duty construction and earthmoving
                            Trucks: ensuring reliability and durability in transportation and logistics</p>
                        <p>Bikes: providing stability and performance across terrains</p>
                        <p>Loading Rickshaws: tailored for small commercial vehicles
                        </p>
                        <p>Buses: engineered for passenger safety and comfort
                            Tempos: balancing efficiency and durability</p>

                        <div className="video-container">
                            <img src="./assets/ce-Kalptaru Tractors and Agro.webp" alt="" />
                        </div>

                    </div>
                </div >
                    ;
            case 'contact':
                return <div> <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p><strong>Address:</strong>33/112 PRATAPPURA M. G. ROAD AGRA  Pincode: 282001, Uttar Pradesh.</p>
                    {/* <p><strong>Contact Person:</strong>Mr. Rohit Patel</p> */}
                </div>
                    <div className="map-container">
                        <h3>Our Location</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14198.966559396767!2d77.99050968776048!3d27.1644179842744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397476d064efb7dd%3A0x786470630097dafd!2s33%2C%20Pratappura%20Crossing%2C%20Sadar%20Bazar%2C%20Pratap%20Pura%2C%20Rakabganj%2C%20Agra%2C%20Uttar%20Pradesh%20282001!5e0!3m2!1sen!2sin!4v1725357858322!5m2!1sen!2sin"
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
                            <h1>Welcome to the  Kalptaru Tractors and Agro Company</h1>
                            <p>
                                At Kalptaru Tractors and Agro, we are dedicated to delivering tire solutions that stand the test of time and performance. Our expertise in the tire industry, coupled with our partnerships with leading brands, allows us to provide products                </p>
                            <h2>We Deals in All Kind of Tyres</h2>
                            <p>
                                Kalptaru Tractors and Agro, owned by Sant Jain, is a premier provider of high-quality tires, catering to the diverse requirements of the agriculture, commercial, and industrial sectors. Our commitment to excellence drives us to deliver top-tier tire solutions that guarantee superior performance and reliability across various applications. We pride ourselves on our extensive range of products, each designed to meet the specific demands of different vehicles and machinery

                                Our Comprehensive Range of Tires Includes: Tractors: Our tractor tires are engineered to support agricultural and farming operations, providing excellent traction, stability, and durability in the field. These tires are designed to enhance productivity and ensure efficient soil management.
                                JCBs and Construction Equipment: We offer specialized tires for JCBs and other heavy-duty construction equipment.
                            </p>
                            <h2>Our Tyres Are :</h2>
                            <p>
                                Kalptaru Tractors and Agro is renowned for its comprehensive selection of agricultural tires, catering to diverse farming needs. Among its offerings is the AT 1900 tire, specifically engineered for irrigation applications. This tire is crafted to safeguard crops and minimize soil compaction, featuring a tread design that excels in traction across various soil types while effectively self-cleaning to prevent mud accumulation. It enhances operational efficiency and sustains peak performance in challenging agricultural environments, making it an ideal choice for R-1 tractor rear drive wheel setups. Backed by Kalptaru Tractors and Agro’s commitment to quality and reliability, the AT 1900 tire supports efficient irrigation practices, trusted by agricultural professionals for its durability and consistent performance in crop care.
                            </p>
                            <p>Kalptaru Tractors and Agro introduces the AT 2368 industrial tire, tailored for demanding grader/loader applications where reliability and durability are paramount. This tire is engineered with a rugged and sturdy design specifically for drive wheels and off-road equipment, offering robust performance in challenging environments. The tough tread and carcass compounds, reinforced by all-nylon cord construction, provide exceptional strength and resistance to cuts, snags, and bruises. Additionally, its weather and ozone-resistant properties enhance longevity and reliability, ensuring consistent performance even in severe service conditions. Ideal for industrial and off-road use, the AT 2368 tire exemplifies Kalptaru Tractors and Agro’s commitment to delivering high-quality solutions that meet the rigorous demands of the construction and industrial sectors.

                                Related products.</p>


                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/k1.webp"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Bias Row Crop Tires</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Brand:</span> Kalptaru Tractors and Agro</li>
                                                <li><span>Product:</span> AT 1900 Tire</li>
                                                <li><span>Application:</span> Irrigation</li>
                                                <li><span>Construction:</span> Designed to safeguard crops and minimize soil compaction</li>
                                                <li><span>Tread Design:</span> Enhances traction across various soil types and effectively self-cleans to prevent mud accumulation</li>
                                                <li><span>Performance:</span> Supports efficient irrigation practices with peak performance in challenging agricultural environments</li>
                                                <li><span>Usage:</span> Ideal for R-1 tractor rear drive wheel setups</li>
                                                <li><span>Commitment:</span> Backed by Kalptaru Tractors and Agro’s commitment to quality and reliability</li>
                                                <li><span>Durability:</span> Trusted by agricultural professionals for its durability and consistent performance in crop care</li>
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
                            KT
                        </span>

                        <div className="company_info">
                            <div className="company_name2">
                                <h1>
                                    Kalptaru Tractors and Agro {" "}
                                    <div className="_oth_info">
                                        <a
                                            href="https://www.google.co.in/maps/dir//12.9715987,77.5945627"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>
                                                <b className="fa fa-map-marker" />
                                                PRATAPPURA M. G. ROAD AGRA    {" "}
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

export default FourteenCatalog;

