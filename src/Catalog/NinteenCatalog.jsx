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
    { id: 1, name: 'Cardamom Tea', image: './assets/celebria1.webp' },
    { id: 3, name: 'Lemon Tea', image: './assets/celebria2.webp' },
    { id: 5, name: 'Premium Coffee Chocolate Premix', image: './assets/celebria3.webp' },
    { id: 6, name: 'Masala Tea Premix', image: './assets/celebria4.webp' },
    { id: 4, name: 'Jaggery Tea', image: './assets/celebria1.webp' },
    { id: 8, name: 'Ginger Tea', image: './assets/celebria6.webp' },
    { id: 2, name: 'Choclate coffee Premix', image: './assets/celebria7.webp' },
    { id: 9, name: 'Lemon Tea', image: './assets/celebria2.webp' }
];

const NineteenCatalogs = () => {
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
                                            src="./assets/celebria2.webp"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Lemon Tea Premix</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                        <li><span>Product:</span> Premium Lemongrass Tea Premix</li>
<li><span>Brand:</span> Celebria</li>
<li><span>Flavors:</span> Lemongrass</li>
<li><span>Features:</span>
    <ul>
        <li><span>Premium Ingredients:</span> Uses top-grade tea leaves and natural lemongrass for a fragrant and revitalizing taste.</li>
        <li><span>Instant Convenience:</span> Easy to prepare, allowing you to enjoy a perfectly brewed lemongrass tea with minimal effort.</li>
        <li><span>Refreshing Flavor:</span> Offers a distinctive citrusy kick, perfect for a refreshing break or a soothing sip at any time of day.</li>
        <li><span>Versatile Use:</span> Ideal for home, office, or hospitality environments, adding a touch of elegance to any setting.</li>
        <li><span>Natural Composition:</span> Free from artificial colors and preservatives, preserving the pure and natural essence of lemongrass.</li>
    </ul>
</li>
<li><span>Usage:</span> Enjoy the crisp, clean flavor of lemongrass tea, and elevate your tea-drinking experience with this premium blend.</li>



                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/celebria3.webp"  // Replace this with the appropriate image path for Iranian Saffron Threads
                                            title="Iranian Saffron Threads"
                                            alt="Iranian Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Premium Coffee Chocolate Premix</h3>
                                        </div>
                                        <div className="pro_det_sec">

                                        <li><span>Product:</span> Premium Coffee Chocolate Premix</li>
<li><span>Brand:</span> Celebria</li>
<li><span>Flavors:</span> Coffee and Chocolate</li>
<li><span>Features:</span>
    <ul>
        <li><span>High-Quality Ingredients:</span> Made with premium coffee beans and fine cocoa for a rich and balanced flavor profile.</li>
        <li><span>Instant Delight:</span> Conveniently crafted for quick preparation, offering a perfectly blended coffee-chocolate experience in minutes.</li>
        <li><span>Bold & Creamy Flavor:</span> Combines the robust richness of coffee with the smooth sweetness of chocolate, creating a luxurious treat.</li>
        <li><span>Versatile Use:</span> Ideal for home, office, cafes, or any setting where a special cup of coffee can elevate the moment.</li>
        <li><span>No Artificial Additives:</span> Free from artificial colors and preservatives, preserving the natural flavors of coffee and chocolate.</li>
    </ul>
</li>
<li><span>Usage:</span> Enjoy a rich and luxurious blend of coffee and chocolate, perfect for a delightful experience any time of day.</li>



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
                        Celebria is a premium brand that relies on the manufacture and export of a plethora of tea and coffee premixes and vending machines to its dealers and its clientele.
                        </p>
                        <p>Developed by Celebria Mahila Laghu Udyog, the brand relies on trusted sources for its creations while ensuring a streamlined process for serving them through high-quality vending machines.</p>

                        {/* <h3>All Kind of  We Do</h3> */}
                        <p>
                        Leveraging the magical aroma of tea and the caffeinated brilliance of coffee, Celebria introduces unadulterated premixes that maintain the homemade taste for both beverages that connect with the Indian milieu, intrinsically, in-all their flavors.
                        </p>
                        <p>celebriaaraafashion combines tradition and modern elegance with sarees like Checked Kalyani Cotton, Lata Gadwal Paithani, and Kalyani Silk Pattern, ideal for weddings and special occasions.
                        </p>
                        <p>Celebria is a premium brand specializing in the manufacture and export of top-quality tea and coffee premixes, complemented by advanced vending machines. Established by Celebria Mahila Laghu Udyog, we prioritize authentic flavors by sourcing the finest ingredients and maintaining a streamlined production process.</p>
                        <p>Celebria is a brand known for offering high-quality tea and coffee premixes, as well as reliable vending machines. Created by Celebria Mahila Laghu Udyog, we focus on bringing the taste of homemade, authentic beverages to our customers. Our products include a variety of tea flavors like Masala, Ginger, Cardamom, and Lemongrass, along with rich coffee blends.</p>
                        <p>
                        We use only the best ingredients to ensure natural, pure flavors with no artificial additives. Celebria’s vending machines make it easy to enjoy our products at home, in the office, or in cafes. With a commitment to quality and tradition, Celebria has become a trusted name in tea and coffee.
                        </p>
                    

                        <div className="video-container">
                            <img src="./assets/ce-celebriaaraa Fashion.webp" alt="" />
                        </div>

                    </div>
                </div >
                    ;
            case 'contact':
                return <div> <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p><strong>Address:</strong>Enfield Store, Above Aglowmed, Harpale Wasti, Phursungi - 412308, Pune.</p>
                    <p>Contact Person : Azhar Ji</p>
                    {/* <p><strong>Contact Person:</strong>Mr. Rohit Patel</p> */}
                </div>
                    <div className="map-container">
                        <h3>Our Location</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.13434105086!2d73.96020817423633!3d18.4775730704881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e95efa4b60fd%3A0x6951aa63dd9cf219!2sRoyal%20Enfield%20Genuine%20Parts%20Distributor%20-%20Shree%20Spares!5e0!3m2!1sen!2sin!4v1726473608897!5m2!1sen!2sin"
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
                            <h1>Welcome to the Celebria Company</h1>
                            <p>
                            Celebria, crafted by Celebria Mahila Laghu Udyog, delivers premium tea and coffee premixes alongside top-notch vending machines. We blend the finest ingredients to create authentic, homemade flavors that resonate with Indian traditions. </p>
                            <p>
                            Celebria is a premium brand specializing in the manufacture and export of top-quality tea and coffee premixes, complemented by advanced vending machines. Established by Celebria Mahila Laghu Udyog, we prioritize authentic flavors by sourcing the finest ingredients and maintaining a streamlined production process.
                            </p>



                            <p>Celebria is a brand known for offering high-quality tea and coffee premixes, as well as reliable vending machines. Created by Celebria Mahila Laghu Udyog, we focus on bringing the taste of homemade, authentic beverages to our customers. Our products include a variety of tea flavors like Masala, Ginger, Cardamom, and Lemongrass, along with rich coffee blends.</p>
                            <h2>We Deals in All  Kind of Tea And Coffee Premix</h2>
                            <p>
                            We use only the best ingredients to ensure natural, pure flavors with no artificial additives. Celebria’s vending machines make it easy to enjoy our products at home, in the office, or in cafes. With a commitment to quality and tradition, Celebria has become a trusted name in tea and coffee.
                            </p>
                            {/* <h2>High-Quality Fabrics: Premium Kalyani cotton and silk for comfort and durability.:</h2> */}
                            <p>
                            Celebria is a premium brand that relies on the manufacture and export of a plethora of tea and coffee premixes and vending machines to its dealers and its clientele.
                            </p>
                            <p>Developed by Celebria Mahila Laghu Udyog, the brand relies on trusted sources for its creations while ensuring a streamlined process for serving them through high-quality vending machines.</p>

                            <p>Leveraging the magical aroma of tea and the caffeinated brilliance of coffee, Celebria introduces unadulterated premixes that maintain the homemade taste for both beverages that connect with the Indian milieu, intrinsically, in-all their flavors.</p>
                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/celebria3.webp"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Masala Tea</h3>
                                        </div>
                                        <div className="pro_det_sec">

                                        <li><span>Product:</span> Premium Masala Tea Premix</li>
<li><span>Brand:</span> Celebria</li>
<li><span>Flavors:</span> Cardamom, Cinnamon, Ginger, Cloves</li>
<li><span>Features:</span>
    <ul>
        <li><span>Authentic Indian Spices:</span> Blended with premium tea leaves and traditional masala spices for a rich and flavorful taste.</li>
        <li><span>Instant Preparation:</span> Designed for quick and easy brewing, offering a perfect cup of Masala Tea in minutes.</li>
        <li><span>Robust Flavor:</span> Bold and spicy flavor profile, ideal for those who enjoy strong, aromatic teas.</li>
        <li><span>Versatile Use:</span> Suitable for home, office, or hospitality settings, providing a comforting tea experience for any occasion.</li>
        <li><span>Natural Ingredients:</span> Free from artificial additives, colors, or preservatives, ensuring a pure and natural flavor with every sip.</li>
    </ul>
</li>
<li><span>Usage:</span> Enjoy in the comfort of your home or workplace for a warming and flavorful tea experience.</li>



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
                                Celebria Tea {" "}
                                    <div className="_oth_info">
                                        <a
                                            href="https://www.google.co.in/maps/dir//12.9715987,77.5945627"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>
                                                <b className="fa fa-map-marker" />
                                               Phursungi  Pune.{" "}
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

export default NineteenCatalogs;

