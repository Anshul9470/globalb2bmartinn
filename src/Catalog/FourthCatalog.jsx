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
    { id: 1, name: 'Cotton Saree', image: './assets/sh1.jpg' },
    { id: 3, name: 'Dyed Saree', image: './assets/sh2.jpg' },
    { id: 5, name: 'Cotton- Blue Saree', image: './assets/sh3.jpg' },
    { id: 6, name: 'Wine red Saree', image: './assets/sh4.jpg' },
    { id: 4, name: 'Bandhini Saree', image: './assets/sh5.jpg' },
    { id: 8, name: 'Checks Saree', image: './assets/sh6.jpg' },
    { id: 2, name: 'Printed Saree', image: './assets/sh7.jpg' },
    { id: 9, name: 'Jari Border Saree', image: './assets/sh8.jpg' }
];

const FourthCatalog = () => {
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
                                            src="./assets/sh3.jpg"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Cotton Sarees</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Product Name:</span> Manual Screen Printed and Dyed Saree</li>
                                                <li><span>Brand:</span> Sakthi Tex Deals (Nithilam Sarees)</li>
                                                <li><span>Design:</span> Intricate manual screen printing on the body with Batik prints on the border, enhanced through manual dyeing techniques</li>
                                                <li><span>Fabric:</span> Finest 100*100 count material ensuring comfort, quality, and style</li>
                                                <li><span>Special Feature:</span> Comes without a blouse piece, allowing personalization of your ensemble</li>
                                                <li><span>Usage:</span> Perfect for elevating ethnic fashion with a blend of tradition and contemporary flair</li>
                                                <li><span>Style:</span> A statement of art, tradition, and individual expression</li>
                                            </ul>



                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/sh5.jpg"  // Replace this with the appropriate image path for Iranian Saffron Threads
                                            title="Iranian Saffron Threads"
                                            alt="Iranian Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Bandhni Saree</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Product Name:</span> Pure Cotton Saree</li>
                                                <li><span>Brand:</span> Sakthi Tex</li>
                                                <li><span>Design:</span> Classic Bandhini type tie and dye method, resulting in mesmerizing patterns</li>
                                                <li><span>Material:</span> 100% pure cotton with a 100*100s count for comfort and durability</li>
                                                <li><span>Weave:</span> Meticulously woven on a powerloom for a seamless and fine texture</li>
                                                <li><span>Color Palette:</span> Deep Brown body with a vibrant Onion Pink border and pallu</li>
                                                <li><span>Dimensions:</span> 5.50*1.2 meters for a graceful drape</li>
                                                <li><span>Weight:</span> Light as a feather at only 500gms, ensuring ease of wear</li>
                                                <li><span>Special Feature:</span> Comes without a blouse piece, allowing for a customizable ensemble</li>
                                                <li><span>Wash Care Instructions:</span> Hand wash recommended to preserve the fabric and colors</li>
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
                        <p><strong>Sakthi-tex</strong>,Sakthi Tex is a distinguished manufacturer specializing in Handloom, Sungudi, and Silk Cotton Sarees. Located in the heart of Tamil Nadu, at Jeeva Nagar Church Street, Dindigul District, our operations are dedicated to preserving and promoting traditional Indian craftsmanship. Our handloom sarees are a testament to the artisans' skill and dedication, meticulously woven to reflect the rich heritage and timeless beauty of Indian textiles. Our Sungudi sarees celebrate vibrant tradition with age-old tie and dye techniques, offering lightweight, breathable fabric with intricate designs. Our silk cotton sarees combine the luxury of silk with the comfort of cotton, perfect for any occasion, blending elegance and ease. Committed to high quality, Sakthi Tex ensures each saree is a masterpiece of artisanal excellence.</p>

                        <h3>All Sarees</h3>
                        <p> Silk Cotton Sarees: Combining the luxury of silk with the comfort of cotton, our silk cotton sarees are perfect for any occasion. They offer the perfect blend of elegance and ease, making them a versatile addition to any wardrobe. </p>

                        <h3></h3>
                        <p>Handloom Sarees: Our handloom sarees are a testament to the skill and dedication of our artisans. Each piece is meticulously woven, reflecting the rich heritage and timeless beauty of Indian textiles.

                            Sungudi Sarees: Celebrating the vibrant tradition of Sungudi sarees, we use the age-old tie and dye technique to create stunning patterns. Our Sungudi sarees are known for their lightweight, breathable fabric and intricate designs</p>

                        <div className="video-container">
                            <img src="./assets/ce-Sakthi-tex.jpg" alt="" />
                        </div>

                    </div>
                </div>
                    ;
            case 'contact':
                return <div> <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p><strong>Address:</strong>5-1-6/11c, Jeeva nagar, Church Street, Chinnalapatti -624301 Dindigul (Dist) Tamil Nadu, India</p>
                    {/* <p><strong>Contact Person:</strong>Mr. Rohit Patel</p> */}
                </div>
                    <div className="map-container">
                        <h3>Our Location</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15702.955356032075!2d77.89969408538956!3d10.282614191717453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b075348f5795cb3%3A0x5cda1fc66faee46b!2sJeeva%20Nagar%2C%20Poonjolai%2C%20Chinnalapatti%2C%20Tamil%20Nadu%20624301!5e0!3m2!1sen!2sin!4v1724838092129!5m2!1sen!2sin"
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
                            <h1>Welcome to the  Sakthi-tex Company</h1>
                            <p>
                                Sakthi Tex is a distinguished manufacturer specializing in Handloom, Sungudi, and Silk Cotton Sarees. Located in the heart of Tamil Nadu, our operations at Jeeva Nagar Church Street, Dindigul District, are dedicated to preserving and promoting traditional Indian craftsmanship.                            </p>
                            <h2>We Deals in All Cotton Saree</h2>
                            <p>
                                Sakthi Tex is a distinguished manufacturer specializing in Handloom, Sungudi, and Silk Cotton Sarees. Located in the heart of Tamil Nadu, at Jeeva Nagar Church Street, Dindigul District, our operations are dedicated to preserving and promoting traditional Indian craftsmanship. Our handloom sarees are a testament to the artisans' skill and dedication, meticulously woven to reflect the rich heritage and timeless beauty of Indian textiles.
                            </p>
                            <h2>Our Sungudi sarees :</h2>
                            <p>
                                celebrate vibrant tradition with age-old tie and dye techniques, offering lightweight, breathable fabric with intricate designs. Our silk cotton sarees combine the luxury of silk with the comfort of cotton, perfect for any occasion, blending elegance and ease. Committed to high quality, Sakthi Tex ensures each saree is a masterpiece of artisanal excellence, inviting you to embrace rich cultural heritage through our exquisite collection.
                            </p>
                            <p>Handloom Sarees: Our handloom sarees are a testament to the skill and dedication of our artisans. Each piece is meticulously woven, reflecting the rich heritage and timeless beauty of Indian textiles.

                                Sungudi Sarees: Celebrating the vibrant tradition of Sungudi sarees, we use the age-old tie and dye technique to create stunning patterns. Our Sungudi sarees are known for their lightweight, breathable fabric and intricate designs.

                                Silk Cotton Sarees: Combining the luxury of silk with the comfort of cotton, our silk cotton sarees are perfect for any occasion. They offer the perfect blend of elegance and ease, making them a versatile addition to any wardrobe.</p>


                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/sh1.jpg"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Cotton Saree</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Product Name:</span> Bathik Printed Cotton Saree in Ink Blue</li>
                                                <li><span>Brand:</span> Sakthi Tex Deals</li>
                                                <li><span>Design:</span> Intricate Bathik prints showcasing traditional Indian craftsmanship</li>
                                                <li><span>Fabric:</span> High-quality cotton for comfort, breathability, and a luxurious feel</li>
                                                <li><span>Color:</span> Rich Ink Blue hue adding sophistication and elegance</li>
                                                <li><span>Special Feature:</span> Comes without a blouse piece, allowing for personalization</li>
                                                <li><span>Usage:</span> Perfect for elevating ethnic ensembles with timeless tradition and contemporary elegance</li>
                                                <li><span>Style:</span> A canvas for expressing individual style and celebrating cultural heritage</li>
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
                                    Sakthi-tex {" "}
                                    <div className="_oth_info">
                                        <a
                                            href="https://www.google.co.in/maps/dir//12.9715987,77.5945627"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>
                                                <b className="fa fa-map-marker" />
                                                Tamil Nadu India  {" "}
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

export default FourthCatalog;
