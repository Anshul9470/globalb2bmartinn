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
    { id: 1, name: 'Luxary Elevators', image: './assets/ele1.jpeg' },
    { id: 3, name: 'Industrial Elevators', image: './assets/ele2.jpeg' },
    { id: 5, name: 'Residential Elevators', image: './assets/ele3.jpeg' },
    { id: 6, name: 'Commercial Elevators', image: './assets/ele4.jpeg' },
    { id: 4, name: 'Hotel Elevators', image: './assets/ele5.jpeg' },
    { id: 8, name: 'Mall Elevators', image: './assets/ele6.jpg' },
    { id: 2, name: 'Vacuum Elevators', image: './assets/ele7.webp' },
    { id: 9, name: 'Elevator paradox', image: './assets/ele8.jpeg' }
];

const SixthCatalog = () => {
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
                                            src="./assets/ele1.jpeg"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Luxary Elevators</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Brand:</span> AbhiTech Lift Co.</li>
                                                <li><span>Product:</span> Luxury Elevators</li>
                                                <li><span>Target Audience:</span> Upscale residential and commercial properties</li>
                                                <li><span>Features:</span>
                                                    <ul>
                                                        <li><strong>Exquisite Design:</strong> High-end materials like glass, marble, and polished metals</li>
                                                        <li><strong>Custom Interiors:</strong> Personalize with customizable finishes, lighting, and fixtures</li>
                                                        <li><strong>Smooth Operation:</strong> Advanced technology for a quiet, smooth ride</li>
                                                        <li><strong>State-of-the-Art Controls:</strong> Intuitive control panels with smart features</li>
                                                        <li><strong>Enhanced Safety:</strong> Includes emergency systems and backup power</li>
                                                    </ul>
                                                </li>
                                                <li><span>Why Choose Us:</span> Elevate your property with AbhiTech Lift Co.’s luxury elevators, combining elegance, safety, and reliability. Our customizable designs enhance your space’s value, comfort, and sophistication.</li>
                                            </ul>




                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/ele2.jpeg"  // Replace this with the appropriate image path for Iranian Saffron Threads
                                            title="Iranian Saffron Threads"
                                            alt="Iranian Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Industrial Elevators</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Brand:</span> AbhiTech Lift Co.</li>
                                                <li><span>Product:</span> Industrial Lifts</li>
                                                <li><span>Target Audience:</span> Industrial facilities and commercial spaces</li>
                                                <li><span>Features:</span>
                                                    <ul>
                                                        <li><strong>Heavy-Duty Construction:</strong> Built with high-strength materials to handle substantial loads</li>
                                                        <li><strong>High Capacity:</strong> Designed for lifting large and heavy items with ease</li>
                                                        <li><strong>Robust Performance:</strong> Engineered for reliability and efficiency in demanding environments</li>
                                                        <li><strong>Advanced Controls:</strong> Features intuitive controls for precise and safe operation</li>
                                                        <li><strong>Safety Features:</strong> Equipped with safety mechanisms including overload protection and emergency stop</li>
                                                    </ul>
                                                </li>
                                                <li><span>Why Choose Us:</span> Choose AbhiTech Lift Co.’s industrial lifts for unmatched durability, efficiency, and safety. Our lifts are designed to enhance operational productivity and provide reliable performance in tough industrial settings.</li>
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
                        <p><strong>AbhiTech Lift Co</strong>AbhiTech Lift Co., based in Ghaziabad, is a leading provider specializing in the installation, maintenance, and repair of all types of lifts and elevators. Our expertise covers a wide range of applications, including residential, commercial, and industrial sectors, ensuring that we meet the diverse needs of our clients.</p>

                        <h3>All Kind Lift</h3>
                        <p>We pride ourselves on delivering solutions that prioritize safety, reliability, and affordability. Our experienced team is dedicated to providing secure and efficient lift installations tailored to the specific requirements of each customer. Whether you need a compact residential elevator, a high-capacity commercial elevator, or a heavy-duty industrial lift, AbhiTech Lift Co. has the expertise and technology to deliver exceptional results.
                        </p>
                        <p> Choose AbhiTech Lift Co. for top-quality elevator solutions that combine safety, reliability, affordability, and innovation. Trust us to elevate your experience with exceptional service and superior lift technology.
                        </p>
                        {/* <p>Nunchucks: Perfect for martial arts practitioners, our nunchucks are constructed from durable materials such as hardwood or high-density plastic. They feature comfortable, non-slip grips and a balanced design for precise control and effective training.</p> */}



                        <div className="video-container">
                            <img src="./assets/ce-AbhiTech Lift Co.jpeg" alt="" />
                        </div>

                    </div>
                </div >
                    ;
            case 'contact':
                return <div> <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p><strong>Address:</strong>Bhupendra puri, Ambedkar park,Gali no. 3, Modinagar, Ghaziabad 201204</p>
                    {/* <p><strong>Contact Person:</strong>Mr. Rohit Patel</p> */}
                </div>
                    <div className="map-container">
                        <h3>Our Location</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223862.9954488466!2d77.298432018275!3d28.753617407335234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb027d7bf473%3A0x806b43657662fec!2sAmbedkar%20Park!5e0!3m2!1sen!2sin!4v1724844230399!5m2!1sen!2sin"
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
                            <h1>Welcome to the  AbhiTech Lift Co Company</h1>
                            <p>
                                AbhiTech Lift Co., based in Ghaziabad, is a leading provider specializing in the installation, maintenance, and repair of all types of lifts and elevators. Our expertise covers a wide range of applications, including residential, commercial, and industrial sectors, ensuring that we meet the diverse needs of our clients.

                                We pride ourselves on delivering solutions that prioritize safety, reliability, and affordability. Our experienced team is dedicated to providing secure and efficient lift installations tailored to the specific requirements of each customer. Whether you need a compact residential elevator, a high-capacity commercial elevator, or a heavy-duty industrial lift, AbhiTech Lift Co. has the expertise and technology to deliver exceptional results.  </p>
                            <h2>We Deals in All kind of Lifts</h2>
                            <p>
                                AbhiTech Lift Co., based in Ghaziabad, excels in installing and maintaining all types of lifts and elevators, ensuring safety, reliability, and affordability for residential, commercial, and industrial applications.
                            </p>
                            {/* <h2>Our Products :</h2> */}
                            <p>
                                Affordability Without Compromise
                                We believe in delivering high-quality services at competitive prices, ensuring that you get the best value for your investment. Transparent pricing and flexible p
                            </p>
                            <p>Innovative Technology
                                Our elevators are equipped with the latest technology for smooth and efficient operation. Energy-efficient designs help reduce operational costs and environmental impact.

                                Commitment to Safety
                                Safety is our top priority, and we incorporate advanced safety features in all our installations. Regular maintenance and rigorous safety checks ensure that our elevators meet the highest safety standards, providing peace of mind.</p>
                            <p>Unmatched Expertise
                                With years of experience in the elevator industry, our skilled team brings unparalleled knowledge and proficiency to every project.</p>


                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/ele5.jpeg"
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
                                                <li><span>Brand:</span> AbhiTech Lift Co.</li>
                                                <li><span>Product:</span> Luxury Elevators</li>
                                                <li><span>Target Audience:</span> Upscale residential and commercial properties</li>
                                                <li><span>Features:</span>
                                                    <ul>
                                                        <li><strong>Exquisite Design:</strong> High-end materials such as glass, marble, and polished metals for an elegant look</li>
                                                        <li><strong>Custom Interiors:</strong> Personalize the interior with customizable finishes, lighting, and fixtures</li>
                                                        <li><strong>Smooth Operation:</strong> Advanced technology ensures a whisper-quiet, smooth ride</li>
                                                        <li><strong>State-of-the-Art Controls:</strong> Intuitive control panels and smart features enhance the experience</li>
                                                        <li><strong>Enhanced Safety:</strong> Equipped with emergency communication systems and backup power for peace of mind</li>
                                                    </ul>
                                                </li>
                                                <li><span>Advantages:</span>
                                                    <ul>
                                                        <li><strong>Unmatched Elegance:</strong> Elevates the aesthetic appeal of your property, reflecting luxury and sophistication</li>
                                                        <li><strong>Increased Property Value:</strong> Adding a luxury elevator boosts the value and attractiveness of high-end properties</li>
                                                        <li><strong>Superior Comfort:</strong> Enjoy a smooth, quiet, and comfortable ride</li>
                                                        <li><strong>Customizable Options:</strong> Tailor the elevator to match the style and design of your space</li>
                                                        <li><strong>Reliability and Safety:</strong> Trust in the top-tier safety features and reliable performance</li>
                                                    </ul>
                                                </li>
                                                <li><span>Why Choose Us:</span> At AbhiTech Lift Co., we provide a seamless blend of style, functionality, and safety, ensuring that your luxury elevator adds a lasting impression to your property.</li>
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
                            AT
                        </span>

                        <div className="company_info">
                            <div className="company_name2">
                                <h1>
                                    AbhiTech Lift Co {" "}
                                    <div className="_oth_info">
                                        <a
                                            href="https://www.google.co.in/maps/dir//12.9715987,77.5945627"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>
                                                <b className="fa fa-map-marker" />
                                                Modi Nagar, Ghaziabad {" "}
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

export default SixthCatalog;

