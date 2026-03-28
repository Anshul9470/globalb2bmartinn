import React from 'react';
import './commn.css';

const HealthAndBeauty = () => {
    const products = [
        {
            title: 'Animal Medicines & Health Care',
            imageSrc: '/assets/he2.webp',
            links: [
                { name: 'Pcd Pharma Franchise', url: '#' },
                { name: 'Anthelmintics', url: '#' },
                { name: 'Veterinary Drugs', url: '#' },
                { name: 'Veterinary Instruments', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Baby Care Products',
            imageSrc: '/assets/he1.webp',
            links: [
                { name: 'Diaper', url: '#' },
                { name: 'Baby Diapers', url: '#' },
                { name: 'Cradle', url: '#' },
                { name: 'Baby Oil', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Bath Products',
            imageSrc: '/assets/he3.webp',
            links: [
                { name: 'Toilet Paper', url: '#' },
                { name: 'Bath Soaps', url: '#' },
                { name: 'Toilet Paper Roll', url: '#' },
                { name: 'Bath Oil', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Beauty Equipment',
            imageSrc: '/assets/he4.jpg',
            links: [
                { name: 'Ultrasonic Machines', url: '#' },
                { name: 'Shaving Cream', url: '#' },
                { name: 'Shaving Brushes', url: '#' },
                { name: 'Salon Chair', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Body Care Products',
            imageSrc: '/assets/he5.jpg',
            links: [
                { name: 'Body Lotion', url: '#' },
                { name: 'Talcum Powder', url: '#' },
                { name: 'Body Oils', url: '#' },
                { name: 'Body Washes', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Body Fragrances',
            imageSrc: '/assets/he7.jpg',
            links: [
                { name: 'Perfumes', url: '#' },
                { name: 'Attar', url: '#' },
                { name: 'Deodorants', url: '#' },
                { name: 'Perfume Bottles', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },


    ];

    return (
        <>
            <div className="pagetitle">
                <h1>Health and Beauty Trade Directory & Networking Platform</h1>
            </div>
            <div className="l1-section">
                <div className="container">
                    <div className="row l1-box-wrap">
                        {products.map((product, index) => (
                            <div key={index} className="col-4">
                                <div className="l1-box">
                                    <h2 className="l1-heading">
                                        <a href="#">{product.title}</a>
                                    </h2>
                                    <div className="d-flex">
                                        <div>
                                            <figure className="cp" onClick={() => { }}>
                                                <img
                                                    src={product.imageSrc}
                                                    alt={product.title}
                                                    width={95}
                                                    height={95}
                                                    loading="lazy"
                                                />
                                            </figure>
                                        </div>
                                        <div>
                                            <ul>
                                                {product.links.map((link, linkIndex) => (
                                                    <li key={linkIndex}>
                                                        <a href={link.url}>{link.name}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="content-page">
                <p style={{ padding: '15px' }}>
                    Explore a wide range of health and beauty products including cosmetics, hair care, fitness equipment, and more. Find suppliers, manufacturers, and wholesalers worldwide.
                </p>
            </div>
        </>
    );
}

export default HealthAndBeauty;
