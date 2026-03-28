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
    { id: 1, name: 'Asian Paint', image: './assets/oe1.webp' },
    { id: 3, name: 'Luxary Paint Matt', image: './assets/oe2.webp' },
    { id: 5, name: 'Premium Paint', image: './assets/oe3.webp' },
    { id: 6, name: 'Satin Paint', image: './assets/oe4.webp' },
    { id: 4, name: 'Duco Paint', image: './assets/oe5.webp' },
    { id: 8, name: 'Pu Glossy Spray', image: './assets/oe6.webp' },
    { id: 2, name: 'Melamine Glossy Spray', image: './assets/oe7.webp' },
    { id: 9, name: 'Zing And Hand Polish', image: './assets/oe8.webp' }
];

const SixteenCatalog = () => {
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
                                            src="./assets/oe2.webp"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Luxary Paint Matt</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Royale Matt Paint:</span></li>
                                                <li><span>Price:</span> ₹38.00/sqft (Original ₹19.00/sqft)</li>
                                                <li><span>Features:</span> Known for its elegant matt finish, Royale Matt Paint offers a smooth, velvety texture that enhances any room. It provides excellent coverage and durability, making it ideal for a variety of interior surfaces. Ensure your walls stay beautiful with this affordable yet luxurious option.</li>

                                                <li><span>Royale Luxury Paint:</span></li>
                                                <li><span>Price:</span> ₹36.00/sqft (Original ₹18.00/sqft)</li>
                                                <li><span>Features:</span> Experience the richness of Royale Luxury Paint, designed to deliver a luxurious finish with superior durability. This paint is crafted to withstand daily wear and tear while maintaining its aesthetic appeal. Perfect for those seeking a blend of elegance and resilience in their interiors.</li>
                                            </ul>



                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/oe3.webp"  // Replace this with the appropriate image path for Iranian Saffron Threads
                                            title="Iranian Saffron Threads"
                                            alt="Iranian Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Premium Paint</h3>
                                        </div>
                                        <div className="pro_det_sec">

                                            <ul className="attributes">
                                                <li><span>Premium Emulsion (Plastic) Paint:</span></li>
                                                <li><span>Price:</span> ₹30.00/sqft (Original ₹15.00/sqft)</li>
                                                <li><span>Features:</span> Ideal for bedrooms and living rooms, Premium Emulsion Paint offers a rich, smooth finish that enhances the aesthetic appeal of your walls. It provides long-lasting protection with reduced dirt pick-up, ensuring your walls remain pristine over time.</li>

                                                <li><span>Velvet Touch:</span></li>
                                                <li><span>Price:</span> ₹35.50/sqft (Original ₹18.00/sqft)</li>
                                                <li><span>Features:</span> Experience luxury with Velvet Touch paint, crafted to deliver a smooth velvet-like texture with a soft glow of pearls. Utilizing Tru Color (Dura Color Technology), it offers intense, rich colors and an ultra-smooth finish that transforms your walls into a masterpiece.</li>
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
                        <p><strong>Om Enterprises</strong>Established in 2017 in Mumbai, Maharashtra, India, OM Enterprises has emerged as a reliable and dedicated service provider in the field of painting, polishing, wall design, and roof waterproofing services. Our commitment to quality and customer satisfaction has positioned us as a trusted name in the industry.

                        </p>
                        <p>Our machines feature state-of-the-art technology that ensures precise and consistent results. Constructed from robust, corrosion-resistant materials, they are built to withstand rigorous use and provide long-lasting durability. With customizable settings, our equipment can be tailored to meet specific production requirements, offering versatility and flexibility. The user-friendly design simplifies operation and minimizes training time, making our machines accessible and easy to integrate into any workflow.</p>

                        <h3>All Kind of Paints We Do</h3>
                        <p>
                            Painting Services: Whether it’s residential or commercial, our expert painters deliver flawless finishes that enhance the aesthetic appeal of any space.
                        </p>
                        <p>Om Enterprises, led by Sant Jain, specializes in a diverse range of tires for various vehicles and machinery:
                        </p>
                        <p>Polishing Services: Our polishing solutions ensure that surfaces, whether floors or furniture, are restored to their original luster and shine.</p>
                        <p>Innovative Technology
                            Our elevators are equipped with the latest technology for smooth and efficient operation. Energy-efficient designs help reduce operational costs and environmental impact.</p>
                        <p>Wall Design Services: We provide innovative wall design solutions that transform ordinary walls into extraordinary works of art.
                            Roof Waterproofing Services: Our roof waterproofing services protect your property from water damage, ensuring longevity and durability.
                        </p>
                        <p>Our team comprises 20 to 30 skilled and dedicated employees who are committed to delivering high-quality services. The annual turnover of OM Enterprises is up to ₹50 lakh, reflecting our growth and success in the industry.

                            instrumental in driving our company forward.</p>

                        <div className="video-container">
                            <img src="./assets/ce-Om Enterprises.webp" alt="" />
                        </div>

                    </div>
                </div >
                    ;
            case 'contact':
                return <div> <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p><strong>Address:</strong>Shop No.6 Panvel Highway Road, Near Mankhurd Railway Station, Mankhurd (W.) Mumbai-400043</p>
                    {/* <p><strong>Contact Person:</strong>Mr. Rohit Patel</p> */}
                </div>
                    <div className="map-container">
                        <h3>Our Location</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.404068439463!2d72.90725657336762!3d19.04596395291839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6062535d671%3A0x44a9639ff12adcc!2s6%2C%20Sion%20-%20Panvel%20Hwy%2C%20MBPT%20Colony%2C%20Best%20Colony%2C%20Chembur%2C%20Mumbai%2C%20Maharashtra%20400088!5e0!3m2!1sen!2sin!4v1725362823031!5m2!1sen!2sin"
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
                            <h1>Welcome to the  Om Enterprises Company</h1>
                            <p>
                                Established in 2017 in Mumbai, Maharashtra, India, OM Enterprises has emerged as a reliable and dedicated service provider in the field of painting, polishing, wall design, and roof waterproofing services. Our commitment to quality and customer satisfaction has positioned us as a trusted name in the industry.            </p>
                            <p>At OM Enterprises, we pride ourselves on offering a comprehensive range of services tailored to meet the diverse needs of our clients. Our services include:

                                Painting Services: Whether it’s residential or commercial, our expert painters deliver flawless finishes that enhance the aesthetic appeal of any space.</p>



                            <p>Polishing Services: Our polishing solutions ensure that surfaces, whether floors or furniture, are restored to their original luster and shine.
                                Wall Design Services: We provide innovative wall design solutions that transform ordinary walls into extraordinary works of art.
                                Roof Waterproofing Services: Our roof waterproofing services protect your property from water damage, ensuring longevity and durability.</p>
                            <h2>We Deals in All Kind of Paints</h2>
                            <p>
                                Our team comprises 20 to 30 skilled and dedicated employees who are committed to delivering high-quality services. The annual turnover of OM Enterprises is up to ₹50 lakh, reflecting our growth and success in the industry.
                            </p>
                            {/* <h2>Our Machines Features Are :</h2> */}
                            <p>
                                Award-Winning Services: Our dedication to quality and customer satisfaction has earned us several accolades and awards.

                                High-Quality Services: We are committed to delivering services that meet the highest standards of quality and excellence.
                            </p>
                            <p>Timely Delivery: We understand the importance of time and ensure that all projects are completed within the stipulated time frame.

                                Professional Team: Our team of professionals is highly skilled and experienced, ensuring that every project is executed with precision and care.</p>


                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/oe1.webp"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Royal Aspira Paint</h3>
                                        </div>
                                        <div className="pro_det_sec">

                                            <ul className="attributes">
                                                <li><span>Royale Aspira Paint:</span></li>
                                                <li><span>Price:</span> ₹44.00/sqft (Original ₹22.00/sqft)</li>
                                                <li><span>Features:</span> Known as the international gold standard in paints, Royale Aspira boasts advanced technology that provides a high sheen finish. It offers exceptional washability, superior stain resistance, and a silky smooth finish with Teflon® Surface Protector for easy stain removal. This product also comes with a 5-year performance warranty, ensuring longevity and protection against flaking, peeling, and fungal attacks.</li>

                                                <li><span>Royale Health Shield Paint:</span></li>
                                                <li><span>Price:</span> ₹40.00/sqft (Original ₹20.00/sqft)</li>
                                                <li><span>Features:</span> Ideal for maintaining a healthy environment, Royale Health Shield Paint offers enhanced anti-microbial properties to prevent microbial growth on painted surfaces. It provides a durable finish with medium washability and is suitable for various interior applications.</li>
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
                            OE
                        </span>

                        <div className="company_info">
                            <div className="company_name2">
                                <h1>
                                    Om Enterprises {" "}
                                    <div className="_oth_info">
                                        <a
                                            href="https://www.google.co.in/maps/dir//12.9715987,77.5945627"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>
                                                <b className="fa fa-map-marker" />
                                                Near Mankhurd  Mumbai {" "}
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

export default SixteenCatalog;

