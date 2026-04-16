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
    { id: 1, name: 'Glass Set', image: './assets/kris1.webp' },
    { id: 3, name: 'Plate Set', image: './assets/kris2.webp' },
    { id: 5, name: 'Bowl Set', image: './assets/kris3.webp' },
    { id: 6, name: 'Decorative Glass Set', image: './assets/kris4.webp' },
    { id: 1, name: 'Decorative Plate Set', image: './assets/kris5.webp' },
    { id: 3, name: 'Decorative Glass set', image: './assets/kri6.webp' },
    { id: 5, name: 'Designer Crystal Glass set', image: './assets/kris8.webp' },
    { id: 6, name: '6 pcs Glass Set', image: './assets/kris4.webp' },
    // { id: 4, name: 'kris Powder', image: './assets/kris.webp' },
    // { id: 8, name: 'kris Leaves', image: './assets/kris1.webp' },
    // { id: 2, name: 'kris Exracts', image: './assets/kris2.webp' },
    // { id: 9, name: 'kris Powder', image: './assets/kris3.webp' }
];

const NineCatalog = () => {
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
                                            src="./assets/kris2.webp"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Decorative Plate set</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Material:</span> High-Quality Glass - Durable and beautifully transparent, perfect for any table setting</li>
                                                <li><span>Design:</span> Decorative and Elegant - Intricate patterns that enhance both aesthetics and functionality</li>
                                                <li><span>Shape:</span> Round and Square Options - Versatile designs that suit various dining and decorative purposes</li>
                                                <li><span>Finishing:</span> Smooth and Polished - Sleek surface that is easy to clean and maintain, offering a sophisticated shine</li>
                                                <li><span>Color:</span> Available in Clear, Frosted, or Colored Glass - Variety of finishes to complement any decor style</li>
                                                <li><span>Size:</span> Available in Multiple Sizes - From small dessert plates to large dinner plates for versatile use</li>
                                                <li><span>Dishwasher Safe:</span> Yes - Easy to clean, making them ideal for both everyday use and special occasions</li>
                                                <li><span>Minimum Order Quantity:</span> 100 Sets - Perfect for retail, large events, or hospitality industries</li>
                                            </ul>







                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/kris3.webp"  // Replace this with the appropriate image path for Iranian Saffron Threads
                                            title="Iranian Saffron Threads"
                                            alt="Iranian Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Decorative Crystal Bowl set</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Material:</span> Premium Glass - Sturdy and elegant, designed to withstand regular use</li>
                                                <li><span>Design:</span> Stylish and Functional - Beautiful patterns and shapes to enhance the presentation of food</li>
                                                <li><span>Shape:</span> Round and Oval Options - Versatile designs perfect for serving soups, salads, desserts, and more</li>
                                                <li><span>Finishing:</span> Smooth and Glossy - Polished surface for an elegant look and easy cleaning</li>
                                                <li><span>Color:</span> Clear, Frosted, or Colored Glass - Available in various finishes to suit any table setting</li>
                                                <li><span>Size:</span> Available in Multiple Sizes - From small dessert bowls to large serving bowls</li>
                                                <li><span>Dishwasher Safe:</span> Yes - Convenient cleaning, perfect for both everyday use and special occasions</li>
                                                <li><span>Minimum Order Quantity:</span> 100 Sets - Ideal for retail, large-scale events, or hospitality services</li>
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
                        <p><strong>New Jai Shri Krishna Glass Decorators</strong>New Jai Shri Krishna Glass Decorators (G.P.), established in 2021, is a leading wholesaler of premium glassware, including sets for lemon, bowls, glasses, and bottles. Renowned for our high-quality, durable products offered at competitive prices, we cater to diverse needs from home use to upscale events. </p>

                        <h3>All Kind of Glass Items Available</h3>
                        <p>Our commitment to excellence is reflected in our client-focused approach and strong, long-term relationships. Under the guidance of our experienced team, we ensure a seamless process from procurement to delivery, maintaining rigorous quality standards. Dedicated to combining style with functionality, we enhance every dining and drinking experience with our sophisticated glassware.
                        </p>
                        <p>  presents our elegant Crystal Glass, crafted from high-quality crystal for exceptional clarity and brilliance. Perfect for serving fine wines, cocktails, and more, it combines luxurious design with durability, enhancing any occasion.
                        </p>
                        <p>New Jai Shri Krishna Glass Decorators  is a leading wholesaler of a diverse range of glassware, including lemon sets, bowl sets, glasses, and bottles. We are renowned for our sturdy, high-quality products at competitive prices, and our long-term client relationships speak to our commitment to satisfaction.</p>



                        <div className="video-container">
                            <img src="./assets/ce-New Jai Shri Krishna Glass Decorators.webp" alt="" />
                        </div>

                    </div>
                </div >
                    ;
            case 'contact':
                return <div> <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p><strong>Address:</strong>2/51, Suhag Nagar, Firozabad, Uttar Pradesh - 283203, India</p>
                    {/* <p><strong>Contact Person:</strong>Mr. Rohit Patel</p> */}
                </div>
                    <div className="map-container">
                        <h3>Our Location</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.9360241596332!2d78.37792587368288!3d27.15830304949656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397441558ee0184b%3A0x40d352a0d061b13!2s2%2F51%2C%20251%2C%20Opposite%20CIC%20Building%2C%20Suhag%20Nagar%2C%20Firozabad%2C%20Uttar%20Pradesh%20283203!5e0!3m2!1sen!2sin!4v1725004370602!5m2!1sen!2sin"
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
                            <h1>Welcome to the  New Jai Shri Krishna Glass Decorators Company</h1>
                            <p>We are known for our durable and high-quality products offered at competitive prices. Our dedicated team ensures a seamless process from procurement to dispatch, backed by rigorous quality control. We prioritize client satisfaction and have built lasting relationships through our commitment to excellence</p>
                            <h2>We Deals in All kind of Decorative Glass Items</h2>
                            <p>
                                We offer a wide selection of elegant and durable glass products, including lemon sets, bowl sets, glasses, and bottles, all at affordable prices. Our dedicated team ensures high standards of quality and smooth service from order to delivery.
                            </p>
                            <h2>Our Products :</h2>
                            <p>


                                High Quality: We offer glassware that stands out for its durability and craftsmanship.
                            </p>
                            <p>Smooth Service: Efficient and reliable order-to-delivery process.</p>
                            <p>Customer Focus: Strong emphasis on client satisfaction and long-term relationships</p>


                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/kris1.webp"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Stainless Steel Triangle Shelf </h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Material:</span> Stainless Steel - High-grade, rust-resistant, and durable for wet environments</li>
                                                <li><span>Design:</span> Ergonomic and Safe - Smooth surface with round edges for a comfortable, secure grip</li>
                                                <li><span>Mounting Type:</span> Wall Mounted - Secure installation with all necessary hardware included</li>
                                                <li><span>Finishing:</span> Chrome Plated - Polished, reflective finish with added protection against rust and scratches</li>
                                                <li><span>Color:</span> Silver - Timeless, neutral tone that integrates seamlessly into any bathroom decor</li>
                                                <li><span>Size:</span> Available in Various Lengths - Options to fit different needs and spaces</li>
                                                <li><span>Load Capacity:</span> High Weight Tolerance - Sturdy and reliable, meeting rigorous safety standards</li>
                                                <li><span>Minimum Order Quantity:</span> 50 Pieces - Suitable for bulk purchases for large-scale projects, hotels, or retail</li>
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
                            KD
                        </span>

                        <div className="company_info">
                            <div className="company_name2">
                                <h1>
                                    New Jai Shri Krishna Glass Decorators {" "}
                                    <div className="_oth_info">
                                        <a
                                            href="https://www.google.co.in/maps/dir//12.9715987,77.5945627"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>
                                                <b className="fa fa-map-marker" />
                                                Firozabad, Uttar Pradesh  {" "}
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

export default NineCatalog;

