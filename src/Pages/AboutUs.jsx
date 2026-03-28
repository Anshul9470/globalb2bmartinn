import React from 'react';
import './login.css';
import Whyglobal from '../Components/Whyglobal';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="image-container">
                <img src="./assets/rocket.png" alt="Global B2B Mart" />
            </div>
            <div className="text-container">
                <h1>INTRODUCING GLOBALB2BMART</h1>
                <h2>Your Gateway To Global Business Opportunities</h2>
                <p>
                    Welcome to GlobalB2BMart, your premier destination for unlocking the vast potential of business-to-business (B2B) commerce on a global scale. At GlobalB2BMart, we understand the importance of fostering meaningful connections and facilitating seamless transactions between businesses worldwide. Whether you're a seasoned multinational corporation or a burgeoning startup, our platform offers the tools and resources you need to thrive in today's interconnected business landscape.
                </p>

                <h2>CONNECTING BUSINESSES ACROSS BORDERS</h2>
                <p>
                    GlobalB2BMart serves as a dynamic hub where businesses from diverse industries and geographical locations converge to explore new opportunities, forge valuable partnerships, and drive mutual growth. With our extensive network of verified suppliers, buyers, and service providers, you can confidently expand your reach into new markets and establish lucrative business relationships with partners around the globe.
                </p>
            </div>
            <div class="containerss">
                <div class="half">
                    <h2>STREAMLINED B2B TRANSACTIONS</h2>
                    <p style={{ lineHeight: '50px' }}>
                        Our platform is designed to streamline the B2B transaction process, making it easier than ever for businesses to buy and sell goods and services with efficiency and transparency. Through advanced search filters, intuitive messaging tools, and secure payment solutions, GlobalB2BMart empowers businesses to navigate the complexities of international trade with ease, facilitating smooth transactions every step of the way.
                    </p>
                </div>
                <div class="half">
                    <h2>EMPOWERING BUSINESS GROWTH</h2>
                    <p style={{ lineHeight: '50px' }}>
                        At GlobalB2BMart, we are committed to empowering businesses of all sizes to achieve their growth objectives and unlock their full potential. Whether you're looking to source high-quality products, expand your customer base, or optimize your supply chain, our platform offers a comprehensive suite of services and resources tailored to meet your unique needs and fuel your success in the global marketplace.
                    </p>
                </div>
            </div>

            <Whyglobal />

            <div className="why-containss">
                <h2 >Why Choose Us ?</h2>
                <ul>
                    <li><strong>GLOBAL REACH:</strong> Access a diverse network of businesses from around the world, opening doors to new markets and opportunities.</li>
                    <li><strong>EFFICIENCY AND CONVENIENCE:</strong> Streamline your B2B transactions with user-friendly tools and seamless communication features, saving time and resources.</li>
                    <li><strong>TRUST AND RELIABILITY:</strong> Rest assured knowing that all users on our platform undergo rigorous verification processes, ensuring the integrity and security of every transaction.</li>
                    <li><strong>PERSONALIZED SUPPORT:</strong> Receive dedicated assistance from our team of experts, who are committed to providing personalized guidance and support to help you achieve your business objectives.</li>
                </ul>

                <p>
                    Join GlobalB2BMart today and embark on a journey of limitless possibilities in the world of B2B commerce. Whether you're looking to expand your business horizons, forge strategic partnerships, or simply explore new opportunities, GlobalB2BMart is your trusted partner every step of the way. Let's connect, collaborate, and succeed together on the global stage.
                </p>

            </div>
        </div>
    );
}

export default AboutUs;
