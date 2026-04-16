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
    { id: 1, name: 'Masala Machine', image: './assets/pm1.webp' },
    { id: 3, name: 'Scrubber Machine', image: './assets/pm2.webp' },
    { id: 5, name: 'Agarbati Machine', image: './assets/pm3.webp' },
    { id: 6, name: 'Roti Machine', image: './assets/pm4.webp' },
    { id: 4, name: 'Camphoor Machine', image: './assets/pm5.webp' },
    { id: 8, name: 'Tooth Brush Machine', image: './assets/pm6.webp' },
    { id: 2, name: 'Four Dye Machine', image: './assets/pm7.webp' },
    { id: 9, name: 'scrubber Machine', image: './assets/pm8.webp' }
];

const FifteenCatalog = () => {
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
                                            src="./assets/pm3.webp"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Agarbati Machine</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Precision Manufacturing:</span> The agarbati machines are equipped with advanced automation and precision controls to ensure consistent production of incense sticks, with accurate dimensions and uniform fragrance distribution.</li>
                                                <li><span>Durable Construction:</span> Built with high-quality, durable materials, these machines are designed to handle continuous operation and demanding production environments, extending their operational life and reliability.</li>
                                                <li><span>Adjustable Settings:</span> The machines come with customizable settings for various production needs, including adjustable stick lengths, fragrance concentrations, and production speeds, allowing for versatile manufacturing capabilities.</li>
                                                <li><span>User-Friendly Design:</span> Featuring intuitive controls and an ergonomic design, the agarbati machines are easy to operate and maintain, minimizing operator fatigue and enhancing overall efficiency.</li>
                                                <li><span>Efficiency and Cost-Effectiveness:</span> Engineered for energy efficiency, these machines reduce operational costs while delivering high production output. Their precise manufacturing capabilities minimize waste and optimize resource use.</li>
                                                <li><span>Safety Features:</span> Integrated safety mechanisms, such as automatic shut-off systems and protective covers, ensure safe operation, safeguarding both the user and the machine.</li>
                                            </ul>




                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/pm4.webp"  // Replace this with the appropriate image path for Iranian Saffron Threads
                                            title="Iranian Saffron Threads"
                                            alt="Iranian Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Roti And Pani Puri making Machine</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Advanced Automation:</span> The machines are equipped with cutting-edge automation technology that ensures precise and uniform production of rotis and pani puris. This feature eliminates manual inconsistencies and enhances overall product quality.</li>
                                                <li><span>Durable Construction:</span> Built from high-quality, corrosion-resistant materials, Prince Industry’s machines are designed to withstand the rigors of continuous use in busy kitchens. Their robust construction guarantees long-lasting performance and reliability.</li>
                                                <li><span>Adjustable Settings:</span> With customizable settings, these machines can accommodate various sizes and thicknesses for both rotis and pani puris. Operators can easily adjust parameters such as cooking temperature, dough thickness, and frying time to suit different recipes and preferences.</li>
                                                <li><span>User-Friendly Interface:</span> The machines are designed with intuitive controls and an ergonomic layout, making them easy to operate and maintain. This user-centric design reduces the learning curve and operational complexity, ensuring a smooth workflow in busy kitchens.</li>
                                                <li><span>Efficiency and Cost-Effectiveness:</span> Engineered for energy efficiency, the machines optimize resource use, reducing operational costs. Their high production capacity and consistent output minimize waste and the need for additional labor, contributing to overall cost savings.</li>
                                                <li><span>Safety Features:</span> Equipped with safety mechanisms such as automatic shut-off, overheat protection, and non-slip handles, the machines ensure safe operation, protecting both the user and the equipment.</li>
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
                        <p><strong>Prince Industry</strong>Prince Industries is a leading manufacturer renowned for producing high-quality, advanced machinery designed to meet a wide range of industrial needs. Our commitment to innovation and precision drives us to deliver exceptional products that enhance efficiency and performance across various applications, including agarbati, mustard, camphor, and cleaning equipment.</p>
                        <p>Our machines feature state-of-the-art technology that ensures precise and consistent results. Constructed from robust, corrosion-resistant materials, they are built to withstand rigorous use and provide long-lasting durability. With customizable settings, our equipment can be tailored to meet specific production requirements, offering versatility and flexibility. The user-friendly design simplifies operation and minimizes training time, making our machines accessible and easy to integrate into any workflow.</p>

                        <h3>All Kind of Machine Available</h3>
                        <p>
                            At Prince Industries, we prioritize energy efficiency, aiming to reduce power consumption and operational costs while maximizing output and minimizing waste. Our focus on quality and reliability ensures that our machinery delivers superior performance and value.
                        </p>
                        <p>Prince Industry, led by Sant Jain, specializes in a diverse range of tires for various vehicles and machinery:
                        </p>
                        <p>Prince Industries stands at the forefront of manufacturing, specializing in high-quality, advanced machinery tailored to diverse industrial applications.  camphor, and cleaning.

                            Affordability Without Compromise
                            We believe in delivering high-quality services at competitive prices, ensuring that you get the best value for your investment.</p>
                        <p>Innovative Technology
                            Our elevators are equipped with the latest technology for smooth and efficient operation. Energy-efficient designs help reduce operational costs and environmental impact.</p>
                        <p>Commitment to Safety
                            Safety is our top priority, and we incorporate advanced safety features in all our installations. Regular maintenance and rigorous safety checks ensure that our elevators meet the highest safety standards, providing peace of mind.
                        </p>
                        <p>Unmatched Expertise
                            With years of experience in the elevator industry, our skilled team brings unparalleled knowledge and proficiency to every project.</p>

                        <div className="video-container">
                            <img src="./assets/ce-Prince Industry.webp" alt="" />
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
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.896487020574!2d75.12915727326282!3d15.327859558861817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d7001cabd853%3A0xb4658cd7ce715853!2sNimbuwala%20plot!5e0!3m2!1sen!2sin!4v1725360537735!5m2!1sen!2sin"
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
                            <h1>Welcome to the  Prince Industry Company</h1>
                            <p>
                                Prince Industries is a leading manufacturer renowned for producing high-quality, advanced machinery designed to meet a wide range of industrial needs. Our commitment to innovation and precision drives us to deliver exceptional products that enhance efficiency and performance across various applications, including agarbati, mustard, camphor, and cleaning equipment.             </p>
                            <h2>We Deals in All Kind of Machines</h2>
                            <p>
                                Our machines feature state-of-the-art technology that ensures precise and consistent results. Constructed from robust, corrosion-resistant materials, they are built to withstand rigorous use and provide long-lasting durability. With customizable settings, our equipment can be tailored to meet specific production requirements, offering versatility and flexibility. The user-friendly design simplifies operation and minimizes training time, making our machines accessible and easy to integrate into any workflow.
                                At Prince Industries, we prioritize energy efficiency, aiming to reduce power consumption and operational costs while maximizing output and minimizing waste. Our focus on quality and reliability ensures that our machinery delivers superior performance and value.
                            </p>
                            <h2>Our Machines Features Are :</h2>
                            <p>
                                Prince Industries stands at the forefront of manufacturing, specializing in high-quality, advanced machinery tailored to diverse industrial applications.  camphor, and cleaning.

                                Affordability Without Compromise
                                We believe in delivering high-quality services at competitive prices, ensuring that you get the best value for your investment.
                            </p>
                            <p>Innovative Technology
                                Our elevators are equipped with the latest technology for smooth and efficient operation. Energy-efficient designs help reduce operational costs and environmental impact.

                                Commitment to Safety
                                Safety is our top priority, and we incorporate advanced safety features in all our installations. Regular maintenance and rigorous safety checks ensure that our elevators meet the highest safety standards, providing peace of mind.</p>


                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/pm2.webp"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Scrubber Machine</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Brand:</span> Prince Industry</li>
                                                <li><span>Product:</span> Scrubber Machines</li>
                                                <li><span>Application:</span> Commercial and Industrial Cleaning</li>
                                                <li><span>Powerful Cleaning:</span> Equipped with high-performance motors and rotating brushes for effective dirt, grime, and stain removal</li>
                                                <li><span>Durable Construction:</span> Built with high-quality, durable materials to withstand rigorous use and extend operational life</li>
                                                <li><span>Adjustable Settings:</span> Customizable brush speeds and water flow rates for versatile cleaning applications</li>
                                                <li><span>User-Friendly Design:</span> Intuitive controls and ergonomic design for easy operation and maneuverability, reducing operator fatigue</li>
                                                <li><span>Efficiency and Cost-Effectiveness:</span> Energy-efficient design reduces operational costs and minimizes the need for additional cleaning agents and labor</li>
                                                <li><span>Safety Features:</span> Includes safety mechanisms such as automatic shut-off and non-slip handles to ensure safe operation</li>
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
                            PI
                        </span>

                        <div className="company_info">
                            <div className="company_name2">
                                <h1>
                                    Prince Industry {" "}
                                    <div className="_oth_info">
                                        <a
                                            href="https://www.google.co.in/maps/dir//12.9715987,77.5945627"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>
                                                <b className="fa fa-map-marker" />
                                                Hubballi,Karnataka   {" "}
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

export default FifteenCatalog;

