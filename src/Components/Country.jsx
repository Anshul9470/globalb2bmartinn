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

    return (<>
        <h2 style={{ margin: '10px 20px' }}>Find suppliers by State</h2>
        <a href="/">
            <button id='view-all' style={{ float: 'right', backgroundColor: 'transparent', color: 'black', border: 'none', marginRight: '29px', cursor: 'pointer' }}>View All <FontAwesomeIcon icon={faArrowRight} /></button>
        </a>
        <div className="swiper-container">
            <div className="swiper-wrapper">
                <Swiper
                    slidesPerView={10} // Default slides per view for larger screens
                    spaceBetween={10}
                    pagination={{ clickable: true }}
                    navigation={true}
                    className="mySwiper"
                    breakpoints={{
                        // Responsive breakpoints
                        1024: {
                            slidesPerView: 7, // Render 6 cards per view on tablets
                        },
                        768: {
                            slidesPerView: 4, // Render 4 cards per view on mobile landscape
                        },
                        210: {
                            slidesPerView: 3, // Render 3 cards per view on mobile portrait
                        },
                    }}
                >
                    {slides.map((card) => (
                        <SwiperSlide key={card.id}>
                            <div className="swiper-slide circle-slide">
                                <a href={`#cardxx${card.id}`}>
                                    <img width={180} height={180} style={{ borderRadius: '50%' }} src={card.imageUrl} alt={card.title} />
                                    <span>{card.title}</span>
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    </>
    );
}
