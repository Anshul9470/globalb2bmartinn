// import React, { useState } from 'react';
// import './Catalog.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGauge, faShieldHalved, faMessage } from '@fortawesome/free-solid-svg-icons';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Link } from 'react-router-dom';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// const products = [
//     { id: 1, name: 'Kashmiri Saffron', image: './assets/saf1.jpeg', link: '#' },
//     { id: 3, name: 'Iranian Saffron', image: './assets/saf2.jpeg', link: '/industrySupplies' },
//     { id: 5, name: 'Spanish Saffron', image: './assets/saf3.jpeg', link: '/foodsProdcts' },
//     { id: 6, name: 'Afghan Saffron', image: './assets/saf4.jpeg', link: '/fashion/apprarels' },
//     { id: 4, name: 'Omani Saffron', image: './assets/saff2.jpeg', link: '/gifts-items' },
//     { id: 8, name: 'Moroccan Saffron', image: './assets/saf5.jpeg', link: '/medicinestore?search=medicine' },
//     { id: 2, name: 'Kashmiri Mongra Saffron', image: './assets/saf6.jpeg', link: '/footwear' },
//     { id: 9, name: 'Persian Saffron', image: './assets/saf7.jpeg', link: '/fashion/apprarels' }
// ];

// const FirstCatlog = () => {
//     const [activeSection, setActiveSection] = useState('home');
//     const [highlight, setHighlight] = useState(false);
//     const [swiperInstance, setSwiperInstance] = useState(null);

//     const handleReachEnd = () => {
//         if (swiperInstance) {
//             const isEnd = swiperInstance.isEnd;
//             const navigationButton = document.querySelector('.swiper-button-next');
//             if (navigationButton) {
//                 navigationButton.style.display = isEnd ? 'none' : 'block';
//             }
//         }
//     };

//     const handleReachStart = () => {
//         if (swiperInstance) {
//             const isBeginning = swiperInstance.isBeginning;
//             const navigationButton = document.querySelector('.swiper-button-prev');
//             if (navigationButton) {
//                 navigationButton.style.display = isBeginning ? 'none' : 'block';
//             }
//         }
//     };

//     const renderContent = () => {
//         switch (activeSection) {
//             case 'products':
//                 return (
//                     <div className="swiper-container">
//                         <Swiper
//                             modules={[Autoplay, Navigation, Pagination]}
//                             slidesPerView={1}
//                             spaceBetween={10}
//                             pagination={{ clickable: true }}
//                             navigation={true}
//                             autoplay={{
//                                 delay: 2500,
//                                 disableOnInteraction: false,
//                             }}
//                             onSwiper={setSwiperInstance}
//                             onReachEnd={handleReachEnd}
//                             onReachBeginning={handleReachStart}
//                             breakpoints={{
//                                 640: { slidesPerView: 2, spaceBetween: 20 },
//                                 768: { slidesPerView: 4, spaceBetween: 40 },
//                                 1024: { slidesPerView: 7, spaceBetween: 30 },
//                             }}
//                             className="mySwiper"
//                         >
//                             {products.map(product => (
//                                 <SwiperSlide key={`product-${product.id}`}>
//                                     <Link to={product.link}>
//                                         <div className="card">
//                                             <img src={product.image} alt={product.name} />
//                                             <p>{product.name}</p>
//                                         </div>
//                                     </Link>
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </div>
//                 );
//             case 'about':
//                 return <div>Welcome to the About Us section. Here you can add information about the company.</div>;
//             case 'contact':
//                 return <div>Welcome to the Contact Us section. Here you can add contact details.</div>;
//             default:
//                 return <div>
//                     <div className="swiper-container">
//                         <Swiper
//                             modules={[Autoplay, Navigation, Pagination]}
//                             slidesPerView={1}
//                             spaceBetween={10}
//                             pagination={{ clickable: true }}
//                             navigation={true}
//                             autoplay={{
//                                 delay: 2500,
//                                 disableOnInteraction: false,
//                             }}
//                             onSwiper={setSwiperInstance}
//                             onReachEnd={handleReachEnd}
//                             onReachBeginning={handleReachStart}
//                             breakpoints={{
//                                 640: { slidesPerView: 2, spaceBetween: 20 },
//                                 768: { slidesPerView: 4, spaceBetween: 40 },
//                                 1024: { slidesPerView: 7, spaceBetween: 30 },
//                             }}
//                             className="mySwiper"
//                         >
//                             {products.map(product => (
//                                 <SwiperSlide key={`product-${product.id}`}>
//                                     <Link to={product.link}>
//                                         <div className="card">
//                                             <img src={product.image} alt={product.name} />
//                                             <p>{product.name}</p>
//                                         </div>
//                                     </Link>
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </div>


//                     <div className='welcome'>
//                         <h1>Welcome to the Shoolini Saffron Pvt. Ltd. Company</h1>
//                         <p>
//                             Shoolini Saffron Pvt. Ltd., located in Solan, Himachal Pradesh, offers comprehensive training in saffron farming through both online and offline modes as part of their broader effort to promote agricultural education and innovation.
//                         </p>
//                         <h2>Online Training</h2>
//                         <p>
//                             Shoolini Saffron Pvt. Ltd. utilizes a robust digital infrastructure, incorporating platforms for online courses. These platforms support a variety of online learning modules, ensuring students can access high-quality educational content remotely. The online saffron farming training includes theoretical knowledge, practical tips, and interactive sessions to help learners understand the complexities of saffron cultivation.
//                         </p>
//                         <h2>Offline Training</h2>
//                         <p>
//                             The Shoolini Saffron Pvt. Ltd. offline training is conducted on its farm in Solan, Himachal Pradesh. This hands-on training allows students to engage directly with the cultivation process, from planting to harvesting. The training programs aim to educate and empower individuals interested in saffron cultivation, which is known for its high economic value and specific cultivation requirements.
//                         </p>

//                         <h1>Our Products</h1>

//                         <li>
//                             <div className="pro_inner">
//                                 <div className="pro_img_sec">

//                                     <img
//                                         src="./assets/saf1.jpeg"
//                                         title="Kashmiri Saffron Threads"
//                                         alt="Kashmiri Saffron Threads"
//                                         width="202"
//                                         height="299"
//                                         decoding="async"
//                                     />
//                                 </div>
//                                 <div className="products_info">
//                                     <div className="pro_title">
//                                         <h3>Kashmiri Saffron Threads</h3>
//                                     </div>

//                                     <div className="pro_det_sec">
//                                         <ul className="attributes">
//                                             <li><span>Brand Name:</span> VS Saffron</li>
//                                             <li><span>Origin:</span> India</li>
//                                             <li><span>Type:</span> Saffron Threads</li>
//                                             <li><span>Style:</span> Dried</li>
//                                             <li><span>Cultivation Type:</span> Natural, Organic</li>
//                                             <li><span>Shelf Life:</span> 18 Months</li>
//                                             <li><span>Color:</span> Red</li>
//                                             <li><span>Form:</span> Thread</li>
//                                             <li><span>Thickness:</span> 1.5cm to 5cm</li>
//                                             <li><span>Packaging Type:</span> Glass Jar</li>
//                                             <li><span>Packaging Size:</span> 200g</li>
//                                             <li><span>Usage:</span> Cosmetic, Medicinal, Culinary Purposes</li>
//                                             <li><span>MOQ:</span> 100g</li>
//                                             <li><span>Port:</span> As per order</li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </li>

//                     </div>


//                 </div>;
//         }
//     };

//     return (
//         <>
//             <div className="company_header">
//                 <div className="top_head">
//                     <div className="company_left zdasds">
//                         <span className="logo_img2" style={{ background: "#d1d786" }}>
//                             SS
//                         </span>
//                         <div className="company_info">
//                             <div className="company_name2">
//                                 <h1>
//                                     Shoolini Saffron Pvt ltd{" "}
//                                     <div className="_oth_info">
//                                         <a
//                                             href="https://www.google.co.in/maps/dir//12.9715987,77.5945627"
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                         >
//                                             <span>
//                                                 <b className="fa fa-map-marker" />
//                                                 Himachal Pradesh{" "}
//                                             </span>
//                                         </a>
//                                     </div>
//                                 </h1>
//                             </div>
//                             <div className="company_other">
//                                 <div className="_oth_rating">
//                                     <span
//                                         className="write_a_review"
//                                         style={{ marginLeft: "0 5px" }}
//                                         onClick={() => { }}
//                                     >
//                                         {" "}
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width={12}
//                                             height={12}
//                                             fill="#4B72E5"
//                                             style={{ marginRight: 5 }}
//                                             viewBox="3 2.01 18.99 18.99"
//                                         >
//                                         </svg>{" "}
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className={`Premium-Header ${highlight ? 'highlight' : ''}`}>
//                 <ul>
//                     <li onClick={() => setActiveSection('home')}>
//                         Home <FontAwesomeIcon icon={faGauge} />
//                     </li>
//                     <li onClick={() => setActiveSection('products')}>
//                         Products <FontAwesomeIcon icon={faShieldHalved} />
//                         <ul className="dropdown">
//                             <li>Saffron Powder</li>
//                             <li>Kashmiri Saffron</li>
//                             <li>Iranian Saffron</li>
//                         </ul>
//                     </li>
//                     <li onClick={() => setActiveSection('about')}>
//                         About Us <FontAwesomeIcon icon={faMessage} />
//                         <ul className="dropdown"></ul>
//                     </li>
//                     <li onClick={() => setActiveSection('contact')}>
//                         Contact Us <FontAwesomeIcon icon={faShieldHalved} />
//                         <ul className="dropdown"></ul>
//                     </li>
//                 </ul>
//             </div>

//             {renderContent()}
//         </>
//     );
// };

// export default FirstCatlog;
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
    { id: 1, name: 'Kashmiri Saffron', image: './assets/saf1.jpeg' },
    { id: 3, name: 'Iranian Saffron', image: './assets/saf2.jpeg' },
    { id: 5, name: 'Spanish Saffron', image: './assets/saf3.jpeg' },
    { id: 6, name: 'Afghan Saffron', image: './assets/saf4.jpeg' },
    { id: 4, name: 'Omani Saffron', image: './assets/saff2.jpeg' },
    { id: 8, name: 'Moroccan Saffron', image: './assets/saf5.jpeg' },
    { id: 2, name: 'Kashmiri Mongra Saffron', image: './assets/saf6.jpeg' },
    { id: 9, name: 'Persian Saffron', image: './assets/saf7.jpeg' }
];

const FirstCatlog = () => {
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
                                            src="./assets/saf1.jpeg"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Kashmiri Saffron Threads</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Brand Name:</span> VS Saffron</li>
                                                <li><span>Origin:</span> India</li>
                                                <li><span>Type:</span> Saffron Threads</li>
                                                <li><span>Style:</span> Dried</li>
                                                <li><span>Cultivation Type:</span> Natural, Organic</li>
                                                <li><span>Shelf Life:</span> 18 Months</li>
                                                <li><span>Color:</span> Red</li>
                                                <li><span>Form:</span> Thread</li>
                                                <li><span>Thickness:</span> 1.5cm to 5cm</li>
                                                <li><span>Packaging Type:</span> Glass Jar</li>
                                                <li><span>Packaging Size:</span> 200g</li>
                                                <li><span>Usage:</span> Cosmetic, Medicinal, Culinary Purposes</li>
                                                <li><span>MOQ:</span> 100g</li>
                                                <li><span>Port:</span> As per order</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/saf2.jpeg"  // Replace this with the appropriate image path for Iranian Saffron Threads
                                            title="Iranian Saffron Threads"
                                            alt="Iranian Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Iranian Saffron Threads</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Brand Name:</span> VS Saffron</li>
                                                <li><span>Origin:</span> Iran</li>
                                                <li><span>Type:</span> Saffron Threads</li>
                                                <li><span>Style:</span> Dried</li>
                                                <li><span>Cultivation Type:</span> Natural, Organic</li>
                                                <li><span>Shelf Life:</span> 18 Months</li>
                                                <li><span>Color:</span> Red</li>
                                                <li><span>Form:</span> Thread</li>
                                                <li><span>Thickness:</span> 1.5cm to 5cm</li>
                                                <li><span>Packaging Type:</span> Glass Jar</li>
                                                <li><span>Packaging Size:</span> 200g</li>
                                                <li><span>Usage:</span> Cosmetic, Medicinal, Culinary Purposes</li>
                                                <li><span>MOQ:</span> 100g</li>
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
                        <p><strong>Shoolini Saffron Pvt. Ltd.</strong>, located in Solan, Himachal Pradesh, is dedicated to advancing agricultural education through specialized saffron farming training. Our comprehensive training programs, available both online and offline, are designed to promote innovation and educate individuals about the nuances of saffron cultivation.</p>

                        <h3>Online Training</h3>
                        <p>Our online training leverages advanced digital platforms to provide accessible and high-quality educational content. Through a variety of online learning modules, participants gain theoretical knowledge, practical tips, and interactive insights into saffron farming. This format ensures that students can learn at their convenience while mastering the complexities of saffron cultivation.</p>

                        <h3>Offline Training</h3>
                        <p>For those seeking hands-on experience, our offline training is conducted directly on our farm in Solan. This immersive approach allows students to actively participate in the cultivation process, from planting to harvesting. Shoolini Saffron Pvt. Ltd. offers training programs in saffron farming through both online and offline modes, aiming to educate and empower individuals interested in saffron cultivation, which is known for its high economic value and specific cultivation requirements.</p>

                        <div className="video-container">
                            <iframe
                                width="560"
                                height="615"
                                src="https://www.youtube.com/embed/os1HVBUkiy4"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                    </div>
                </div>
                    ;
            case 'contact':
                return <div> <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p><strong>Address:</strong> Amar Complex, The Mall, Solan, Himachal Pradesh, 173211</p>
                    <p><strong>Contact Person:</strong> Gaurav Sabharwal</p>
                </div>
                    <div className="map-container">
                        <h3>Our Location</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.181133305426!2d77.09876887386748!3d30.90956077706837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f86b5415faadf%3A0x10f2ff82fc97f370!2sAmar%20Complex%2C%20Mall%20Rd%2C%20Mall%20Road%2C%20Bajoral%20Khurd%2C%20Solan%2C%20Himachal%20Pradesh%20173212!5e0!3m2!1sen!2sin!4v1724409200132!5m2!1sen!2sin"
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
                            <h1>Welcome to the Shoolini Saffron Pvt. Ltd. Company</h1>
                            <p>
                                Shoolini Saffron Pvt. Ltd., located in Solan, Himachal Pradesh, offers comprehensive training in saffron farming through both online and offline modes as part of their broader effort to promote agricultural education and innovation.
                            </p>
                            <h2>Online Training</h2>
                            <p>
                                Shoolini Saffron Pvt. Ltd. utilizes a robust digital infrastructure, incorporating platforms for online courses. These platforms support a variety of online learning modules, ensuring students can access high-quality educational content remotely. The online saffron farming training includes theoretical knowledge, practical tips, and interactive sessions to help learners understand the complexities of saffron cultivation.
                            </p>
                            <h2>Offline Training</h2>
                            <p>
                                The Shoolini Saffron Pvt. Ltd. offline training is conducted on its farm in Solan, Himachal Pradesh. This hands-on training allows students to engage directly with the cultivation process, from planting to harvesting. The training programs aim to educate and empower individuals interested in saffron cultivation, which is known for its high economic value and specific cultivation requirements.
                            </p>



                            <li>
                                <div className="pro_inner">
                                    <div className="pro_img_sec">
                                        <img
                                            src="./assets/saf1.jpeg"
                                            title="Kashmiri Saffron Threads"
                                            alt="Kashmiri Saffron Threads"
                                            width="202"
                                            height="299"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="products_info">
                                        <div className="pro_title">
                                            <h3>Kashmiri Saffron Threads</h3>
                                        </div>
                                        <div className="pro_det_sec">
                                            <ul className="attributes">
                                                <li><span>Brand Name:</span> VS Saffron</li>
                                                <li><span>Origin:</span> India</li>
                                                <li><span>Type:</span> Saffron Threads</li>
                                                <li><span>Style:</span> Dried</li>
                                                <li><span>Cultivation Type:</span> Natural, Organic</li>
                                                <li><span>Shelf Life:</span> 18 Months</li>
                                                <li><span>Color:</span> Red</li>
                                                <li><span>Form:</span> Thread</li>
                                                <li><span>Thickness:</span> 1.5cm to 5cm</li>
                                                <li><span>Packaging Type:</span> Glass Jar</li>
                                                <li><span>Packaging Size:</span> 200g</li>
                                                <li><span>Usage:</span> Cosmetic, Medicinal, Culinary Purposes</li>
                                                <li><span>MOQ:</span> 100g</li>
                                                <li><span>Port:</span> As per order</li>
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
                            SS
                        </span>
                        <div className="company_info">
                            <div className="company_name2">
                                <h1>
                                    Shoolini Saffron Pvt ltd{" "}
                                    <div className="_oth_info">
                                        <a
                                            href="https://www.google.co.in/maps/dir//12.9715987,77.5945627"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>
                                                <b className="fa fa-map-marker" />
                                                Himachal Pradesh{" "}
                                            </span>
                                        </a>
                                    </div>
                                </h1>
                            </div>

                        </div>
                    </div>
                    <div className="company_right">
                        <Link to="tel:9327973636" className="contact_link">
                            <FontAwesomeIcon icon={faGauge} /> Contact Supplier
                        </Link>
                    </div>
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

export default FirstCatlog;
