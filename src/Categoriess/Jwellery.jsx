import React from 'react';
import './commn.css';

const Jwellery = () => {
    const products = [
        {
            title: 'Fashion Jewelry',
            imageSrc: './assets/gi2.jpeg',
            links: [
                { name: 'Necklace Sets', url: '#' },
                { name: 'Pendant Set', url: '#' },
                { name: 'Anklets', url: '#' },
                { name: 'Brass Bangles', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Gemstones',
            imageSrc: './assets/gi3.jpeg',
            links: [
                { name: 'Pearls', url: '#' },
                { name: 'Semi Precious Stones', url: '#' },
                { name: 'Loose Gemstones', url: '#' },
                { name: 'Silver Gemstone', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Gold Jewelry',
            imageSrc: './assets/gi4.jpeg',
            links: [
                { name: 'Gold Bangles', url: '#' },
                { name: 'Gold Necklace', url: '#' },
                { name: 'Gold Rings', url: '#' },
                { name: 'Gold Pendants', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Jewelry Accessories',
            imageSrc: './assets/gi1.jpeg',
            alt: 'Jewelry Accessories',
            links: [
                { name: 'Bangle Boxes', url: '#' },
                { name: 'Watch Boxes', url: '#' },
                { name: 'Marble Jewelry Box', url: '#' },
                { name: 'Chain Jewelry Box', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Metal Jewelry',
            imageSrc: './assets/gi5.jpeg',
            links: [
                { name: 'Metal Rings', url: '#' },
                { name: 'Metal Necklaces', url: '#' },
                { name: 'Metal Bangles', url: '#' },
                { name: 'Copper Jewelry', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Necklaces',
            imageSrc: './assets/gi6.jpeg',
            links: [
                { name: 'Silver Gemstone Necklace', url: '#' },
                { name: 'Designer Diamond Necklace', url: '#' },
                { name: 'Diamond Silver Necklace', url: '#' },
                { name: 'Silver Chain Necklace', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
    ];

    return (
        <>
            <div className="pagetitle">
                <h1>Jewelry Business Trade Directory & Networking Platform</h1>
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
                                            <link rel="preload" as="image" href="#" />
                                            <figure className="cp" onClick={() => { }}>
                                                <img
                                                    src={product.imageSrc}
                                                    alt={product.alt}
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
                    GlobalB2BMart is the leading Jewelry B2B Marketplace and Jewelry Business Directory, offering comprehensive business listings of Jewelry Suppliers, Manufacturers, Exporters, Wholesalers, and Traders worldwide. Our extensive and verified database includes detailed information about Jewelry Companies, a diverse catalog of Jewelry Products, and up-to-date Jewelry Price Lists and Quotations.
                </p>
            </div>
        </>
    );
}

export default Jwellery;
