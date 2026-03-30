import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// import './country.css';

const cardData = [
    { id: 1, title: 'Delhi', imageUrl: './assets/city-delhi.webp' },
    { id: 2, title: 'Maharashtra', imageUrl: './assets/city-mumbai.webp' },
    { id: 3, title: 'Tamil Nadu', imageUrl: './assets/city-chennai.webp' },
    { id: 4, title: 'West-Bengal', imageUrl: './assets/city-kolkata.webp' },
    { id: 5, title: 'Karnataka', imageUrl: './assets/city-banglore.webp' },
    { id: 6, title: 'Gujarat', imageUrl: './assets/city-ahmedabad.webp' },
    { id: 7, title: 'Madhya Pradesh', imageUrl: './assets/city-kanpur.webp' },
    { id: 8, title: 'Bihar', imageUrl: './assets/city-patna.webp' },
    { id: 9, title: 'Uttar Pradesh', imageUrl: './assets/city-vizag.webp' },

];

export default function Country() {
    const appendNumber = useRef(cardData.length + 1);
    const [slides, setSlides] = useState(cardData);

    const append = () => {
        const newCard = { id: appendNumber.current++, title: `Card ${appendNumber.current}`, imageUrl: 'https://via.placeholder.com/150x150?text=Image' };
        setSlides([...slides, newCard]);
    };

    const sectionRef = useRef(null);
    const [parallaxY, setParallaxY] = useState(0);

    // Parallax scroll effect
    React.useEffect(() => {
        let animationFrameId;

        const handleScroll = () => {
            if (!sectionRef.current) return;
            
            const rect = sectionRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            
            // Check if element is in viewport
            if (rect.top <= viewportHeight && rect.bottom >= 0) {
                // Calculate scroll percentage relative to element position
                const scrollPercentage = (viewportHeight - rect.top) / (viewportHeight + rect.height);
                // Move background in opposite direction (parallax effect)
                // Range from -15% to 15% of container height
                const yPos = (scrollPercentage - 0.5) * 80; // pixels
                setParallaxY(yPos);
            }
        };

        const onScroll = () => {
            animationFrameId = requestAnimationFrame(handleScroll);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        // Initial call
        handleScroll();

        return () => {
            window.removeEventListener('scroll', onScroll);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="country-section state-modern-section" ref={sectionRef} style={{ background: '#fff4eb' }}>
            <div 
                className="parallax-bg-state" 
                style={{ transform: `translate3d(0, ${parallaxY}px, 0)` }}
            ></div>
            <div className="section-overlay"></div>
            
            <div className="country-content">
                <h1 className="country-title">Find Suppliers By State</h1>
                <p className="country-subtitle" style={{ color: '#4a3f35' }}>
                    The perfect way to choose your State Business Directory
                </p>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    navigation={true}
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 20 },
                        640: { slidesPerView: 3, spaceBetween: 30 },
                        768: { slidesPerView: 5, spaceBetween: 40 },
                        1024: { slidesPerView: 6, spaceBetween: 30 },
                    }}
                    className="country-swiper"
                >
                    {slides.map((card) => (
                        <SwiperSlide key={card.id}>
                            <a href={`#cardxx${card.id}`} className="country-card">
                                <div className="country-flag-wrapper state-flag-wrapper">
                                    <img src={card.imageUrl} alt={card.title} />
                                </div>
                                <span className="country-name" style={{ color: '#2b2218' }}>{card.title}</span>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
                
                <div className="view-all-btn-wrapper">
                    <a href="/" className="view-all-countries-btn" style={{ background: '#ff7a00', boxShadow: '0 8px 30px rgba(255, 122, 0, 0.4)' }}>
                        View All States <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '10px' }} />
                    </a>
                </div>
            </div>
        </div>
    );
}
