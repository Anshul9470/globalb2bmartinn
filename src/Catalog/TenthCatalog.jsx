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
    { id: 1, name: 'Glass Set', image: './assets/ashi1.jpeg' },
    { id: 3, name: 'Plate Set', image: './assets/ashi2.jpeg' },
    { id: 5, name: 'Bowl Set', image: './assets/ashi3.jpeg' },
    { id: 6, name: 'Decorative Glass Set', image: './assets/ashi4.jpeg' },
    { id: 1, name: 'Decorative Plate Set', image: './assets/ashi5.jpeg' },
    { id: 3, name: 'Decorative Glass set', image: './assets/ashi2.jpeg' },
    { id: 5, name: 'Designer Crystal Glass set', image: './assets/ashi3.jpeg' },
    { id: 6, name: '6 pcs Glass Set', image: './assets/ashi4.jpeg' },
    // { id: 4, name: 'ashi Powder', image: './assets/ashi.jpeg' },
    // { id: 8, name: 'ashi Leaves', image: './assets/ashi.jpeg' },
    // { id: 2, name: 'ashi Exracts', image: './assets/ashi2.jpeg' },
    // { id: 9, name: 'ashi Powder', image: './assets/ashi3.jpeg' }
];

const TenthCatalog = () => {
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
                                            src="./assets/ashi2.jpeg"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Indoor Plants</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Plant Selection:</span> Diverse Indoor Plants - Includes a range of varieties from low-maintenance succulents to vibrant flowering plants and air-purifying species</li>
                                                <li><span>Types:</span> Varied Indoor Plants - Ideal for enhancing indoor spaces with options suitable for different lighting and care requirements</li>
                                                <li><span>Quality:</span> Healthy and Robust - Carefully maintained to ensure they thrive indoors with proper care</li>
                                                <li><span>Expert Guidance:</span> Personalized Care Tips - Advice on potting, watering, light needs, and plant maintenance to ensure optimal growth</li>
                                                <li><span>Sustainability:</span> Eco-Friendly Practices - Encourages natural growing methods and environmentally friendly cultivation techniques</li>
                                                <li><span>Support:</span> Ongoing Assistance - Continuous support to help you care for and maintain your indoor plants for a thriving indoor garden</li>
                                                <li><span>Ideal For:</span> Homes, Offices, and Indoor Spaces - Plants suited to a variety of indoor environments, enhancing décor and air quality</li>
                                                <li><span>Minimum Order Quantity:</span> Customizable Orders - Flexible options to meet both individual and bulk needs for indoor plants</li>
                                            </ul>








                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/ashi3.jpeg"  // Replace this with the appropriate image path for Iranian Saffron Threads
                                            title="Iranian Saffron Threads"
                                            alt="Iranian Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Outdoor Plants</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Plant Selection:</span> Diverse Outdoor Plants - Includes a wide variety of options such as shrubs, trees, flowering plants, and ground covers</li>
                                                <li><span>Types:</span> Seasonal and Perennial - Features both seasonal blooms for temporary beauty and perennials for long-lasting greenery</li>
                                                <li><span>Quality:</span> Healthy and Hardy - Well-maintained plants suited for various outdoor conditions, ensuring robust growth and resilience</li>
                                                <li><span>Expert Guidance:</span> Tailored Planting Advice - Personalized recommendations on soil preparation, watering, sunlight exposure, and maintenance for optimal outdoor performance</li>
                                                <li><span>Sustainability:</span> Eco-Friendly Practices - Emphasis on organic cultivation methods and natural fertilizers to promote sustainable gardening</li>
                                                <li><span>Support:</span> Ongoing Assistance - Continuous support for outdoor plant care to help achieve a thriving and beautiful garden</li>
                                                <li><span>Ideal For:</span> Gardens, Landscapes, and Public Spaces - Plants designed to enhance outdoor areas with vibrant color and texture</li>
                                                <li><span>Minimum Order Quantity:</span> Flexible Orders - Customizable options to meet both individual and bulk needs for outdoor plants</li>
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
                        <p><strong>Ashifa Nursery</strong> offers a diverse range of vibrant flowers, decorative plants, and healthy vegetable options. With expert advice on plant care, they help customers achieve thriving gardens. Ashifa Nursery offers a wide variety of flower plants, from roses and marigolds to exotic orchids and lilies. They provide healthy, well-maintained plants suited for various climates and growing conditions. With expert advice on plant care and a focus on eco-friendly practices, Ashifa Nursery ensures beautiful, sustainable gardens for all customers.</p>

                        <h3>All Kind of Plants Availale</h3>
                        <p>Ashifa Nursery is a trusted plant nursery dedicated to offering a wide variety of plants, including vibrant flowers, lush outdoor greenery, thriving indoor plants, and healthy fruit and vegetable plants. With a commitment to quality and sustainability, Ashifa Nursery carefully cultivates each plant to ensure it flourishes in its environment. We emphasize eco-friendly practices, promoting the use of organic fertilizers and natural care methods.
                        </p>
                        <p>  Diverse Selection
                            We offer a wide range of plants, from vibrant flowers and indoor plants to fruit-bearing trees and vegetable plants, catering to all your gardening needs.
                        </p>
                        <p>Quality Plants
                            Our plants are carefully nurtured to ensure they are healthy, resilient, and ready to thrive in various environments.</p>

                        <p>Eco-Friendly Practices
                            We prioritize sustainability by using organic fertilizers and promoting natural, eco-friendly gardening techniques.</p>
                        <p>Customer Satisfaction
                            We are committed to helping our customers succeed in their gardening journeys with ongoing support and expert tips for long-term plant health.</p>
                        <div className="video-container">
                            <img src="./assets/ce-Ashifa Nursery.jpeg" alt="" />
                        </div>

                    </div>
                </div >
                    ;
            case 'contact':
                return <div> <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p><strong>Address:</strong>Boheragachi Rd, West Bengal 743704, India</p>
                    {/* <p><strong>Contact Person:</strong>Mr. Rohit Patel</p> */}
                </div>
                    <div className="map-container">
                        <h3>Our Location</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.0329015793764!2d88.6820717734976!3d22.76416022592563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8ae5888a45f35%3A0x73a66e4a991b03bb!2sBoheragachi%20Rd%2C%20West%20Bengal%20743424!5e0!3m2!1sen!2sin!4v1725010878686!5m2!1sen!2sin"
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
                                            {/* <p>{product.name}</p> */}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className='welcome'>
                            <h1>Welcome to the  Ashifa Nursery Company</h1>
                            <p>We are known offers a diverse range of vibrant flowers, decorative plants, and healthy vegetable options. With expert advice on plant care, they help customers achieve thriving gardens. </p>
                            <h2>We Deals in All kind of Plants</h2>
                            <p>
                                Ashifa Nursery specializes in a wide variety of plants, flowers, and vegetable plants. They offer a diverse selection, catering to both gardening enthusiasts and commercial landscapers. With expert guidance, Ashifa Nursery ensures customers find the perfect plants for their needs, promoting healthy, sustainable growth.
                            </p>
                            <p>Ashifa Nursery is a trusted plant nursery dedicated to offering a wide variety of plants, including vibrant flowers, lush outdoor greenery, thriving indoor plants, and healthy fruit and vegetable plants. With a commitment to quality and sustainability, Ashifa Nursery carefully cultivates each plant to ensure it flourishes in its environment. We emphasize eco-friendly practices, promoting the use of organic fertilizers and natural care methods.

                                Our knowledgeable team provides expert guidance on plant selection and care, helping customers create beautiful, sustainable gardens and green spaces. Whether you are a seasoned gardener or just starting, Ashifa Nursery is here to support your journey with healthy plants and personalized advice.

                            </p>
                            <h2>Our Plants :</h2>
                            <p>


                                Flowers: Wide range of vibrant, blooming flowers.
                            </p>
                            <p>Ornamentals: Diverse selection of decorative plants.</p>
                            <p>Vegetables: Healthy vegetable plants for gardens</p>
                            <p>Expert Advice: Personalized plant care guidance.</p>


                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/ashi1.jpeg"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Fruit Plants </h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Plant Selection:</span> Wide Range of Flower Plants - From classic blooms like roses, marigolds, and hibiscus to exotic varieties like orchids and lilies</li>
                                                <li><span>Types:</span> Seasonal and Perennial Plants - Offering year-round color and beauty for gardens and landscapes</li>
                                                <li><span>Quality:</span> Healthy and Well-Maintained - Ready to thrive in various environments with proper care</li>
                                                <li><span>Expert Guidance:</span> Personalized Advice - Tailored recommendations on soil preparation, watering, sunlight exposure, and plant care</li>
                                                <li><span>Sustainability:</span> Eco-Friendly Practices - Promoting organic methods, natural fertilizers, and sustainable gardening techniques</li>
                                                <li><span>Support:</span> Ongoing Customer Support - Helping customers nurture their plants for vibrant, long-lasting blooms</li>
                                                <li><span>Ideal For:</span> Gardens, Landscapes, and Indoor Spaces - Plants suited for diverse climates and growing conditions</li>
                                                <li><span>Minimum Order Quantity:</span> Customizable Orders - Catering to both individual gardeners and commercial clients</li>
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
                            AN
                        </span>

                        <div className="company_info">
                            <div className="company_name2">
                                <h1>
                                    Ashifa Nursery {" "}
                                    <div className="_oth_info">
                                        <a
                                            href="https://www.google.co.in/maps/dir//12.9715987,77.5945627"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>
                                                <b className="fa fa-map-marker" />
                                                West Bengal,India  {" "}
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

export default TenthCatalog;

