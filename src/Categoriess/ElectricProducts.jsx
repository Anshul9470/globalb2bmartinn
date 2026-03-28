import React from 'react';
import './commn.css';

const ElectricProducts = () => {
    const products = [
        {
            title: 'Home Appliances',
            imageSrc: './assets/ho1.jpg',
            links: [
                { name: 'Refrigerators', url: '#' },
                { name: 'Washing Machines', url: '#' },
                { name: 'Microwaves', url: '#' },
                { name: 'Air Conditioners', url: '#' },
            ],
        },
        {
            title: 'Electronics Gadgets',
            imageSrc: './assets/ho2.jpg',
            links: [
                { name: 'Smartphones', url: '#' },
                { name: 'Laptops', url: '#' },
                { name: 'Tablets', url: '#' },
                { name: 'Smart Watches', url: '#' },
            ],
        },
        {
            title: 'Kitchen Appliances',
            imageSrc: './assets/ho3.jpg',
            links: [
                { name: 'Blenders', url: '#' },
                { name: 'Coffee Makers', url: '#' },
                { name: 'Toasters', url: '#' },
                { name: 'Food Processors', url: '#' },
            ],
        },
        {
            title: 'Entertainment Systems',
            imageSrc: './assets/ho4.jpg',
            links: [
                { name: 'Televisions', url: '#' },
                { name: 'Home Theaters', url: '#' },
                { name: 'Sound Systems', url: '#' },
                { name: 'Projectors', url: '#' },
            ],
        },
        {
            title: 'Office Electronics',
            imageSrc: './assets/ho5.jpg',
            links: [
                { name: 'Printers', url: '#' },
                { name: 'Scanners', url: '#' },
                { name: 'Photocopiers', url: '#' },
                { name: 'Fax Machines', url: '#' },
            ],
        },
        {
            title: 'Personal Care Appliances',
            imageSrc: './assets/ho6.jpg',
            links: [
                { name: 'Electric Shavers', url: '#' },
                { name: 'Hair Dryers', url: '#' },
                { name: 'Electric Toothbrushes', url: '#' },
                { name: 'Massagers', url: '#' },
            ],
        },
        {
            title: 'Fitness Electronics',
            imageSrc: './assets/ho7.jpg',
            links: [
                { name: 'Treadmills', url: '#' },
                { name: 'Elliptical Trainers', url: '#' },
                { name: 'Exercise Bikes', url: '#' },
                { name: 'Fitness Trackers', url: '#' },
            ],
        },
        {
            title: 'Smart Home Devices',
            imageSrc: './assets/ho8.jpg',
            links: [
                { name: 'Smart Speakers', url: '#' },
                { name: 'Smart Bulbs', url: '#' },
                { name: 'Smart Thermostats', url: '#' },
                { name: 'Home Security Systems', url: '#' },
            ],
        },
        {
            title: 'Power Tools',
            imageSrc: './assets/ho9.jpg',
            links: [
                { name: 'Drills', url: '#' },
                { name: 'Saws', url: '#' },
                { name: 'Sanders', url: '#' },
                { name: 'Grinders', url: '#' },
            ],
        },
        {
            title: 'Electronic Accessories',
            imageSrc: './assets/ho1.jpg',
            links: [
                { name: 'Phone Cases', url: '#' },
                { name: 'Chargers', url: '#' },
                { name: 'Cables', url: '#' },
                { name: 'Headphones', url: '#' },
            ],
        },
        {
            title: 'Robotics',
            imageSrc: './assets/ho10.jpg',
            links: [
                { name: 'Robotic Vacuums', url: '#' },
                { name: 'Robot Kits', url: '#' },
                { name: 'Robot Arms', url: '#' },
                { name: 'Industrial Robots', url: '#' },
            ],
        },
    ];

    return (
        <>
            <div className="pagetitle">
                <h1>Electric Products Trade Directory & Networking Platform</h1>
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
                    GlobalB2BMart is the leading Electric Products B2B Marketplace and Electric Products Business Directory, offering comprehensive business listings of Electric Products Suppliers, Manufacturers, Exporters, Wholesalers, and Traders worldwide. Our extensive and verified database includes detailed information about Electric Products Companies, a diverse catalog of Electric Products, and up-to-date Electric Products Price Lists and Quotations.
                </p>
            </div>
        </>
    );
};

export default ElectricProducts;
