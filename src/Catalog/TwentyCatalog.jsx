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
    { id: 1, name: 'Masking Tape', image: './assets/craft1.webp' },
    { id: 3, name: 'Paper packaging tape', image: './assets/craft2.webp' },
    { id: 5, name: 'Double Side Tissue Tape', image: './assets/craft3.webp' },
    { id: 6, name: 'Cotton Tape', image: './assets/craft4.webp' },
    { id: 4, name: 'Synthetic Tape', image: './assets/craft1.webp' },
    { id: 8, name: 'Double side Tape', image: './assets/craft6.webp' },
    { id: 2, name: 'Top Line Tape', image: './assets/craft7.webp' },
    { id: 9, name: 'Paper Packing Tape', image: './assets/craft2.webp' }
];

const TwentyCatalogs = () => {
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
                                            src="./assets/craft1.webp"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Masking Tape</h3>
                                        </div>
                                        <div className="pro_det_sec">

<li><span>Product:</span> Premium Masking Tape</li>
<li><span>Brand:</span> Crafter Tapes</li>
<li><span>Features:</span>
    <ul>
        <li><span>Superior Performance:</span> Designed for a variety of tasks with high-quality adhesive for strong sticking power.</li>
        <li><span>Clean Removal:</span> Allows for residue-free removal without damaging surfaces, ensuring a neat finish.</li>
        <li><span>Versatile Application:</span> Applies easily to walls, wood, metal, and glass, creating sharp, clean lines.</li>
        <li><span>Heat and Solvent Resistant:</span> Suitable for industrial applications, providing durability under various conditions.</li>
        <li><span>Perfect for Any Project:</span> Ideal for DIY projects or professional jobs, guaranteeing reliable results.</li>
    </ul>
</li>
<li><span>Usage:</span> Perfect for painting, crafting, and general use, delivering precision and ease for all your needs.</li>

</div>

                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/craft2.webp"  // Replace this with the appropriate image path for Iranian Saffron Threads
                                            title="Iranian Saffron Threads"
                                            alt="Iranian Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Papper Packing Tape</h3>
                                        </div>
                                        <div className="pro_det_sec">

<li><span>Product:</span> Premium Paper Packaging Tape</li>
<li><span>Brand:</span> Crafter Tapes</li>
<li><span>Features:</span>
    <ul>
        <li><span>Eco-Friendly Adhesion:</span> Provides strong adhesion for secure sealing of boxes and packages while being environmentally friendly.</li>
        <li><span>Durable Material:</span> Made from durable paper, ensuring reliability and sturdiness for various packaging needs.</li>
        <li><span>Easy Application:</span> Can be easily applied and torn by hand, offering hassle-free use in any setting.</li>
        <li><span>Residue-Free:</span> Leaves no residue upon removal, ensuring a clean and professional finish.</li>
        <li><span>Biodegradable:</span> Supports sustainability, making it suitable for eco-conscious consumers.</li>
    </ul>
</li>
<li><span>Usage:</span> Ideal for shipping, general packaging, and suitable for home, office, or industrial applications, ensuring reliable performance.</li>

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
                     

                    </div>
                    <div className="company-info">
                    <h1>Welcome to in Our Company</h1>
                        <h2>About Us</h2>
                        <p>
                        Crafter Tapes: Your Trusted Adhesive Tape Manufacturer
                        </p>
                        <p>At Crafter Tapes, we specialize in creating high-quality adhesive tapes that meet a variety of needs. Our products include packaging tapes, masking tapes, double-sided tapes, specialty tapes, and decorative tapes, suitable for both personal and professional projects. We are dedicated to being environmentally friendly, using sustainable materials and practices to reduce our impact on the planet.</p>

                        {/* <h3>All Kind of  We Do</h3> */}
                        <p>
                        Our goal is to help you succeed in your creative endeavors by providing reliable products that empower your projects.
                        </p>
                        <p>About Us Founded in 2023, Crafter Tapes has quickly become a well-known manufacturer of adhesive tapes. We are recognized for our innovative solutions, excellent quality, and commitment to sustainability. 
                        </p>
                        <p>craft is a premium brand specializing in the manufacture and export of top-quality tea and coffee premixes, complemented by advanced vending machines. Established by craft Mahila Laghu Udyog, we prioritize authentic flavors by sourcing the finest ingredients and maintaining a streamlined production process.</p>
                        <p> Our diverse range of tapes serves many applications, ensuring we meet the needs of our customers while also caring for the environment. We aim to inspire creativity and foster innovation, making us a trusted partner for businesses seeking dependable adhesive solutions.

</p>
                     
                    

                        <div className="video-container">
                            <img src="./assets/ce-craftaraa Fashion.webp" alt="" />
                        </div>

                    </div>
                </div >
                    ;
            case 'contact':
                return <div> <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p><strong>Address:</strong>C-09 Khasra No. 2013/2, Runkata, Agra, Agra, Uttar Pradesh, 282007</p>
                    <p>Contact Person :  ABHISHEK JAIN</p>
                    {/* <p><strong>Contact Person:</strong>Mr. Rohit Patel</p> */}
                </div>
                    <div className="map-container">
                        <h3>Our Location</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7094.84114856345!2d77.86512839165052!3d27.23733598698958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973864932582cb9%3A0x9414a7a83b8cff7e!2sRunkata%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1727254546368!5m2!1sen!2sin"
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
                            <h1>Welcome to the craft Tape Company</h1>
                            <p>
                            Crafter Tapes is a dynamic adhesive tape manufacturer dedicated to providing high-quality, innovative solutions. Our wide range of products includes packaging, masking, double-sided, specialty, and decorative tapes, catering to both personal and professional needs. We pride ourselves on our commitment to sustainability,
                            using eco-friendly materials and processes to minimize our impact on the environment. With a strong focus on customer satisfaction, we strive to empower creativity and make every project a success. At Crafter Tapes, we believe in delivering reliable products that help you achieve your goals with ease and confidence.
                           </p>
                          



                            <p>Established in 2023, Crafter Tapes is a prominent manufacturer of adhesive tapes, celebrated for its innovative approach, exceptional quality, and sustainable practices. Our extensive product lineup includes packaging, masking, double-sided, specialty, and decorative tapes, designed to cater to a wide array of applications. Committed to customer satisfaction and environmental stewardship, Crafter Tapes inspires creativity and fosters innovation, positioning us as a trusted ally for businesses in need of reliable adhesive solutions.</p>
                            <h2>We Deals in All  Kind of Tapes</h2>
                            <p>
                            We use only the best ingredients to ensure natural, pure flavors with no artificial additives. craft’s vending machines make it easy to enjoy our products at home, in the office, or in cafes. With a commitment to quality and tradition, craft has become a trusted name in tea and coffee.
                            </p>
                            {/* <h2>High-Quality Fabrics: Premium Kalyani cotton and silk for comfort and durability.:</h2> */}
                            <p>
                            Premium Masking Tape by Crafter Tapes is designed to provide superior performance for a variety of tasks. Made with high-quality adhesive, it ensures strong sticking power while allowing for clean removal without leaving residue or damaging surfaces. Perfect for painting, crafting, and general use, it applies easily to walls, wood, metal, and glass, creating sharp, clean lines. Its heat and solvent resistance make it suitable for industrial applications as well.
                            </p>
                            <p>Crafter Tapes’ Premium Paper Packaging Tape provides eco-friendly, strong adhesion for secure sealing of boxes and packages. Made from durable paper, it is easy to apply and tear by hand, offering hassle-free use. Ideal for shipping and general packaging, it leaves no residue and is biodegradable. Suitable for home, office, or industrial applications, this tape ensures reliable performance while supporting sustainability.</p>

                            <p>Premium Double-Sided Tissue Tape by Crafter Tapes is a versatile adhesive solution designed for bonding and mounting across various materials like paper, plastic, and fabric. Its strong adhesion and lightweight tissue backing ensure a secure, flexible hold, making it ideal for intricate applications. Easy to tear by hand and free from residue upon removal, this tape delivers a clean, professional finish.</p>
                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/craft3.webp"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Double Side Tissue Tape</h3>
                                        </div>
                                        <div className="pro_det_sec">

<li><span>Product:</span> Premium Double-Sided Tissue Tape</li>
<li><span>Brand:</span> Crafter Tapes</li>
<li><span>Features:</span>
    <ul>
        <li><span>Versatile Adhesive:</span> Designed for bonding and mounting across various materials like paper, plastic, and fabric.</li>
        <li><span>Strong Adhesion:</span> Lightweight tissue backing ensures a secure, flexible hold for intricate applications.</li>
        <li><span>Easy to Use:</span> Can be easily torn by hand, providing convenience in crafting and other applications.</li>
        <li><span>Residue-Free Removal:</span> Leaves no residue upon removal, delivering a clean and professional finish.</li>
        <li><span>Durable Performance:</span> Perfect for crafting, packaging, and industrial uses, ensuring reliability in any environment.</li>
    </ul>
</li>
<li><span>Usage:</span> Ideal for various applications, from crafting projects to packaging needs, offering dependable performance and durability.</li>

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
                            CT
                        </span>

                        <div className="company_info">
                            <div className="company_name2">
                                <h1>
                                Crafter Tapes {" "}
                                    <div className="_oth_info">
                                        <a
                                            href="https://www.google.co.in/maps/dir//12.9715987,77.5945627"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>
                                                <b className="fa fa-map-marker" />
                                            Agra, Uttar Pradesh,{" "}
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

export default TwentyCatalogs;

