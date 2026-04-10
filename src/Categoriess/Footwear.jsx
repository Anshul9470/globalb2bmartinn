import React from 'react';
import './commn.css';

const Footwear = () => {
    const products = [
        {
            title: 'Sandals',
            imageSrc: './assets/foot11.jpg',
            links: [
                { name: 'Casual Sandals', url: '#' },
                { name: 'Formal Sandals', url: '#' },
                { name: 'Sport Sandals', url: '#' },
                { name: 'Beach Sandals', url: '#' },
            ],
        },
        {
            title: 'Shoes',
            imageSrc: './assets/foot2.jpg',
            links: [
                { name: 'Running Shoes', url: '#' },
                { name: 'Casual Shoes', url: '#' },
                { name: 'Formal Shoes', url: '#' },
                { name: 'Boots', url: '#' },
            ],
        },
        {
            title: 'Flip Flops',
            imageSrc: './assets/foot3.jpg',
            links: [
                { name: 'Casual Flip Flops', url: '#' },
                { name: 'Beach Flip Flops', url: '#' },
                { name: 'Sport Flip Flops', url: '#' },
                { name: 'Designer Flip Flops', url: '#' },
            ],
        },
        {
            title: 'Heels',
            imageSrc: './assets/foot44.jpg',
            links: [
                { name: 'High Heels', url: '#' },
                { name: 'Wedges', url: '#' },
                { name: 'Pumps', url: '#' },
                { name: 'Stilettos', url: '#' },
            ],
        },
        {
            title: 'Boots',
            imageSrc: './assets/foot5.jpg',
            links: [
                { name: 'Ankle Boots', url: '#' },
                { name: 'Knee-high Boots', url: '#' },
                { name: 'Chelsea Boots', url: '#' },
                { name: 'Combat Boots', url: '#' },
            ],
        },
        {
            title: 'Slippers',
            imageSrc: './assets/foot6.jpg',
            links: [
                { name: 'House Slippers', url: '#' },
                { name: 'Outdoor Slippers', url: '#' },
                { name: 'Fur Slippers', url: '#' },
                { name: 'Memory Foam Slippers', url: '#' },
            ],
        },
        {
            title: 'Sports Shoes',
            imageSrc: './assets/foot7.jpg',
            links: [
                { name: 'Running Shoes', url: '#' },
                { name: 'Training Shoes', url: '#' },
                { name: 'Basketball Shoes', url: '#' },
                { name: 'Football Shoes', url: '#' },
            ],
        },
        {
            title: 'Loafers',
            imageSrc: './assets/foot8.jpg',
            links: [
                { name: 'Penny Loafers', url: '#' },
                { name: 'Tassel Loafers', url: '#' },
                { name: 'Bit Loafers', url: '#' },
                { name: 'Moccasin Loafers', url: '#' },
            ],
        },
        {
            title: 'Dress Shoes',
            imageSrc: './assets/foot9.jpg',
            links: [
                { name: 'Oxfords', url: '#' },
                { name: 'Derby Shoes', url: '#' },
                { name: 'Monk Strap Shoes', url: '#' },
                { name: 'Brogues', url: '#' },
            ],
        },
    ];

    return (
        <>
            <div className="pagetitle">
                <h1>Footwear Trade Directory & Networking Platform</h1>
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
                                            <figure className="cp" onClick="#">
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
                                                {product.links.map((link, index) => (
                                                    <li key={index}>
                                                        <a href={link.url}>{link.name}</a>
                                                    </li>
                                                ))}
                                                <li>
                                                    <a href="#">View More</a>
                                                </li>
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
                    GlobalB2BMart is the leading Footwear B2B Marketplace and Footwear Business Directory, offering comprehensive business listings of Footwear Suppliers, Manufacturers, Exporters, Wholesalers, and Traders worldwide. Our extensive and verified database includes detailed information about Footwear Companies, a diverse catalog of Footwear Products, and up-to-date Footwear Price Lists and Quotations.
                </p>
            </div>
        </>
    );
};

export default Footwear;
