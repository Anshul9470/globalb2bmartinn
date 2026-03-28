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
    { id: 1, name: 'Steel Triangle Shelf', image: './assets/mahir1.webp' },
    { id: 3, name: 'Toilet Paper Holder', image: './assets/mahir2.webp' },
    { id: 5, name: 'Bathroom Grab Bar', image: './assets/mahir3.webp' },
    { id: 6, name: 'Shower Head With Arm', image: './assets/mahir4.webp' },
    { id: 1, name: 'Steel Triangle Shelf', image: './assets/mahir1.webp' },
    { id: 3, name: 'Toilet Paper Holder', image: './assets/mahir2.webp' },
    { id: 5, name: 'Bathroom Grab Bar', image: './assets/mahir3.webp' },
    { id: 6, name: 'Shower Head With Arm', image: './assets/mahir4.webp' },
    // { id: 4, name: 'mahir Powder', image: './assets/mahir.webp' },
    // { id: 8, name: 'mahir Leaves', image: './assets/mahir1.webp' },
    // { id: 2, name: 'mahir Exracts', image: './assets/mahir2.webp' },
    // { id: 9, name: 'mahir Powder', image: './assets/mahir3.webp' }
];

const EightCatalog = () => {
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
                                            src="./assets/mahir2.webp"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Bathroom Toilet Paper Holder</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Brand:</span> Mahir Sanitations</li>
                                                <li><span>Product:</span> Stainless Steel Toilet Paper Holder</li>
                                                <li><span>Material:</span> Premium-grade stainless steel - Resistant to rust, corrosion, and tarnish</li>
                                                <li><span>Shape:</span> Sleek and minimalistic design - Clean lines that suit both contemporary and traditional bathrooms</li>
                                                <li><span>Mounting Type:</span> Wall-mounted - Saves space and keeps toilet paper within easy reach</li>
                                                <li><span>Finishing:</span> Chrome-plated - Mirror-like shine with protection against rust and scratches</li>
                                                <li><span>Color:</span> Silver - Timeless and complements any bathroom color scheme</li>
                                                <li><span>Size:</span> Compact - Fits standard toilet paper rolls and allows for easy replacement</li>
                                                <li><span>Minimum Order Quantity:</span> 50 Pieces - Ideal for bulk purchases for large-scale projects, hotels, or retail</li>
                                            </ul>






                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/mahir3.webp"  // Replace this with the appropriate image path for Iranian Saffron Threads
                                            title="Iranian Saffron Threads"
                                            alt="Iranian Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Bathroom Grab Bar</h3>
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
            case 'about':
                return <div className="about-us-container">
                    <div className="intro">
                        <h1>Welcome to the About Our Company</h1>

                    </div>
                    <div className="company-info">
                        <h2>About Us</h2>
                        <p><strong>Mahir Sanitation</strong>Mahir Sanitations is a leading name in the bathroom solutions industry, known for delivering exceptional quality and innovative design. With years of experience, we have established ourselves as a trusted manufacturer of high-grade stainless steel bathroom fixtures, including shower heads, grab bars, and other essential accessories. Our products are crafted with precision and finished with elegant chrome plating, ensuring both durability and style.</p>

                        <h3>All Kind of Bathware Products Available</h3>
                        <p>At Mahir Sanitations, we are committed to enhancing everyday living by providing functional and aesthetically pleasing solutions for modern bathrooms. We cater to a diverse clientele, from residential homeowners to large commercial projects, offering versatile and customizable products that meet the highest standards of quality. Our focus on customer satisfaction drives us to continually innovate and expand our product offerings, ensuring that we remain at the forefront of the industry.
                        </p>
                        <p>  Mahir Sanitations specializes in high-quality bathroom solutions that emphasize durability, contemporary design, and practical functionality. Their products, crafted from premium stainless steel and finished with chrome, offer both style and resilience. Catering to both residential and commercial needs, Mahir Sanitations provides versatile and customizable options, supported by efficient bulk ordering capabilities to meet large-scale project requirements.
                        </p>
                        {/* <p>Nunchucks: Perfect for martial arts practitioners, our nunchucks are constructed from durable materials such as hardwood or high-density plastic. They feature comfortable, non-slip grips and a balanced design for precise control and effective training.</p> */}



                        <div className="video-container">
                            <img src="./assets/ce-Mahir Sanitation.webp" alt="" />
                        </div>

                    </div>
                </div >
                    ;
            case 'contact':
                return <div> <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p><strong>Address:</strong>Bhupendra puri, Ambedkar Park, Gali Number 3, Modi Nagar, Ghaziabad</p>
                    {/* <p><strong>Contact Person:</strong>Mr. Rohit Patel</p> */}
                </div>
                    <div className="map-container">
                        <h3>Our Location</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13979.683297859297!2d77.55812019549629!3d28.84121714080564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c601d838c1aab%3A0x77fa00be39a56c69!2sStreet%20Number%203%2C%20Modinagar%2C%20Uttar%20Pradesh%20201204!5e0!3m2!1sen!2sin!4v1724921826556!5m2!1sen!2sin"
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
                            <h1>Welcome to the  Mahir Sanitation Company</h1>
                            <p>Mahir Sanitations is a leading name in the bathroom solutions industry, known for delivering exceptional quality and innovative design. With years of experience, we have established ourselves as a trusted manufacturer of high-grade stainless steel bathroom fixtures, including shower heads, grab bars, and other essential accessories. Our products are crafted with precision and finished with elegant chrome plating, ensuring both durability and style. </p>
                            <h2>We Deals in All kind of Bathware Products</h2>
                            <p>
                                At Mahir Sanitations, we are committed to enhancing everyday living by providing functional and aesthetically pleasing solutions for modern bathrooms. We cater to a diverse clientele, from residential homeowners to large commercial projects, offering versatile and customizable products that meet the highest standards of quality.
                            </p>
                            {/* <h2>Our Products :</h2> */}
                            <p>


                                Our focus on customer satisfaction drives us to continually innovate and expand our product offerings, ensuring that we remain at the forefront of the industry.
                            </p>
                            <p>Mahir Sanitations specializes in high-quality bathroom solutions that emphasize durability, contemporary design, and practical functionality. Their products, crafted from premium stainless steel and finished with chrome, offer both style and resilience. Catering to both residential and commercial needs, Mahir Sanitations provides versatile and customizable options, supported by efficient bulk ordering capabilities to meet large-scale project requirements.</p>
                            {/* <p>Unmatched Expertise
                                With years of experience in the elevator industry, our skilled team brings unparalleled knowledge and proficiency to every project.</p> */}


                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/mahir1.webp"
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
                                                <li><span>Brand:</span> Mahir Sanitations</li>
                                                <li><span>Product:</span> Stainless Steel Triangle Shelf</li>
                                                <li><span>Material:</span> Durable, corrosion-resistant stainless steel built to withstand the test of time</li>
                                                <li><span>Shape:</span> Triangle - Perfect for maximizing corner spaces, ideal for compact areas</li>
                                                <li><span>Size:</span> 7 inches in width - Offers ample space for storing toiletries, kitchen essentials, or decorative items</li>
                                                <li><span>Number of Shelves:</span> 1 - Versatile single-shelf design suitable for various settings</li>
                                                <li><span>Color:</span> Sleek silver finish - Adds a touch of sophistication and blends seamlessly with any decor</li>
                                                <li><span>Mounting Type:</span> Wall-mounted - Sturdy, secure, and easy to install with included hardware</li>
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
                            MS
                        </span>

                        <div className="company_info">
                            <div className="company_name2">
                                <h1>
                                    Mahir Sanitation {" "}
                                    <div className="_oth_info">
                                        <a
                                            href="https://www.google.co.in/maps/dir//12.9715987,77.5945627"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>
                                                <b className="fa fa-map-marker" />
                                                Ghaziabad, Uttar Pradesh,  {" "}
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

export default EightCatalog;

