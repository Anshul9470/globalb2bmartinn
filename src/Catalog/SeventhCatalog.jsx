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
    { id: 1, name: 'Dry Stevia Leaves', image: './assets/stevia.jpg' },
    { id: 3, name: 'Stevia Blends', image: './assets/stevia1.jpg' },
    { id: 5, name: 'Stevia Extracts', image: './assets/stevia2.jpg' },
    { id: 6, name: 'Commercial Elevators', image: './assets/stevia3.jpg' },
    { id: 4, name: 'Stevia Powder', image: './assets/stevia.jpg' },
    { id: 8, name: 'Stevia Leaves', image: './assets/stevia1.jpg' },
    { id: 2, name: 'Stevia Exracts', image: './assets/stevia2.jpg' },
    { id: 9, name: 'Stevia Powder', image: './assets/stevia3.jpg' }
];

const SeventhCatalog = () => {
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
                                            src="./assets/stevia2.jpg"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Stevia Blends</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Brand:</span> Daksh and Company</li>
                                                <li><span>Product:</span> Stevia Blends</li>
                                                <li><span>Categories:</span> Stevia, Stevia-Extracts</li>
                                                <li><span>Description:</span> Daksh and Company’s Stevia Blends combine natural stevia with other sweeteners to create a balanced, zero-calorie alternative to sugar. Perfect for all culinary uses, they offer a deliciously sweet taste without the guilt.</li>
                                                <li><span>Benefits:</span> Zero-calorie, guilt-free sweetness for all your recipes.</li>
                                                <li><span>Reviews:</span> (0)</li>
                                            </ul>





                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/stevia1.jpg"  // Replace this with the appropriate image path for Iranian Saffron Threads
                                            title="Iranian Saffron Threads"
                                            alt="Iranian Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Stevia Powder</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Brand:</span> Daksh and Company</li>
                                                <li><span>Product:</span> Stevia Powder</li>
                                                <li><span>Categories:</span> Stevia, Stevia-Extracts</li>
                                                <li><span>Description:</span> Daksh and Company’s Stevia Powder is a versatile, zero-calorie sweetener that is up to 200 times sweeter than sugar. Ideal for baking, cooking, and beverages, it provides a healthy, natural alternative to traditional sweeteners.</li>
                                                <li><span>Benefits:</span> Zero-calorie sweetness, perfect for various culinary uses.</li>

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
                        <p><strong>Daksh and Company</strong>Founded in the heart of Gautam Budh Nagar, Uttar Pradesh, Daksh and Company is a leading manufacturer and supplier of premium stevia products. With a steadfast commitment to quality and innovation, we harness the natural sweetness of stevia to revolutionize the food and beverage industry</p>

                        <h3>All Kind of Stevia</h3>
                        <p>Our state-of-the-art facilities ensure that every product bearing our name meets the highest standards of purity and taste. Driven by a passion for health and sustainability, Daksh and Company strives to offer consumers a natural alternative to traditional sweeteners, promoting wellness without compromising on flavor.
                        </p>
                        <p>  We collaborate closely with farmers and industry experts to ensure a responsible supply chain that supports local communities and preserves the environment. As we continue to grow, our dedication to excellence remains unwavering. Daksh and Company invites you to discover the pure, natural sweetness of stevia—a taste that’s not just better for you, but better for the planet.
                        </p>
                        {/* <p>Nunchucks: Perfect for martial arts practitioners, our nunchucks are constructed from durable materials such as hardwood or high-density plastic. They feature comfortable, non-slip grips and a balanced design for precise control and effective training.</p> */}



                        <div className="video-container">
                            <img src="./assets/ce-Daksh and Company.jpg" alt="" />
                        </div>

                    </div>
                </div >
                    ;
            case 'contact':
                return <div> <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p><strong>Address:</strong>H.no 18, Gama – 2, Gautam Budha Nagar, Uttar Pradesh, Pincode – 201310</p>
                    {/* <p><strong>Contact Person:</strong>Mr. Rohit Patel</p> */}
                </div>
                    <div className="map-container">
                        <h3>Our Location</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224356.85922746034!2d77.23700751999431!3d28.52240403862468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1724916242038!5m2!1sen!2sin"
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
                            <h1>Welcome to the  Daksh and Company Company</h1>
                            <p>
                                Founded in the heart of Gautam Budh Nagar, Uttar Pradesh, Daksh and Company is a leading manufacturer and supplier of premium stevia products. With a steadfast commitment to quality and innovation, we harness the natural sweetness of stevia to revolutionize the food and beverage industry
                                Daksh and Company, based in Gautam Budh Nagar, Uttar Pradesh, is a leading manufacturer specializing in premium stevia products. Committed to quality and sustainability, we offer natural sweetness without compromise, transforming the way sweetness is enjoyed worldwide. </p>
                            <h2>We Deals in All kind of Stevia Products</h2>
                            <p>
                                Daksh and Company., based in Ghaziabad, excels in installing and maintaining all types of lifts and elevators, ensuring safety, reliability, and affordability for residential, commercial, and industrial applications.
                            </p>
                            {/* <h2>Our Products :</h2> */}
                            <p>
                                Rebaudioside A (Reb A): Highly sweet stevia glycoside, known for its pure sweetness without bitterness, common in commercial products.

                                Stevia Blends: Mixes of stevia extracts with other sweeteners for balanced sweetness.
                            </p>
                            <p>Liquid Stevia: Convenient liquid form for easy use in beverages and cooking.

                                Organic Stevia: Grown without synthetic chemicals, ensuring purity and sustainability.</p>
                            {/* <p>Unmatched Expertise
                                With years of experience in the elevator industry, our skilled team brings unparalleled knowledge and proficiency to every project.</p> */}


                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/stevia.jpg"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Commercial Lifts </h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Brand:</span> Daksh and Company</li>
                                                <li><span>Product:</span> Dry Stevia Leaves</li>
                                                <li><span>Benefits:</span> Natural, zero-calorie sweetener with exceptional sweetness</li>
                                                <li><span>Ideal Uses:</span> Perfect for teas, infusions, and culinary applications</li>
                                                <li><span>Health Advantages:</span> A wholesome alternative to sugar, offering sweetness without calories</li>
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
                            DC
                        </span>

                        <div className="company_info">
                            <div className="company_name2">
                                <h1>
                                    Daksh and Company {" "}
                                    <div className="_oth_info">
                                        <a
                                            href="https://www.google.co.in/maps/dir//12.9715987,77.5945627"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>
                                                <b className="fa fa-map-marker" />
                                                Gautam Budha Nagar, Uttar Pradesh,  {" "}
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

export default SeventhCatalog;

