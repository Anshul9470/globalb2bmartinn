import React from 'react';
import './commn.css';

const IndustrialSupplies = () => {
    const products = [
        {
            title: 'Bearings',
            imageSrc: '/assets/indus.jpg',
            links: [
                { name: 'Ball Bearings', url: '#' },
                { name: 'Roller Bearings', url: '#' },
                { name: 'Thrust Bearings', url: '#' },
                { name: 'Needle Bearings', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Fasteners',
            imageSrc: '/assets/indus1.jpg',
            links: [
                { name: 'Bolts', url: '#' },
                { name: 'Nuts', url: '#' },
                { name: 'Screws', url: '#' },
                { name: 'Washers', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Gears',
            imageSrc: '/assets/indus2.jpg',
            links: [
                { name: 'Spur Gears', url: '#' },
                { name: 'Helical Gears', url: '#' },
                { name: 'Bevel Gears', url: '#' },
                { name: 'Worm Gears', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Industrial Tools',
            imageSrc: '/assets/indus3.jpg',
            links: [
                { name: 'Hand Tools', url: '#' },
                { name: 'Power Tools', url: '#' },
                { name: 'Cutting Tools', url: '#' },
                { name: 'Measuring Tools', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Hydraulics',
            imageSrc: '/assets/indus4.jpg',
            links: [
                { name: 'Hydraulic Pumps', url: '#' },
                { name: 'Hydraulic Cylinders', url: '#' },
                { name: 'Hydraulic Valves', url: '#' },
                { name: 'Hydraulic Motors', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Machinery & Parts',
            imageSrc: '/assets/indus5.webp',
            links: [
                { name: 'CNC Machines', url: '#' },
                { name: 'Lathe Machines', url: '#' },
                { name: 'Drilling Machines', url: '#' },
                { name: 'Milling Machines', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        // {
        //     title: 'Material Handling Equipment',
        //     imageSrc: '/assets/is7.jpg',
        //     links: [
        //         { name: 'Forklifts', url: '#' },
        //         { name: 'Conveyors', url: '#' },
        //         { name: 'Hoists', url: '#' },
        //         { name: 'Pallet Jacks', url: '#' },
        //         { name: 'View More', url: '#' },
        //     ],
        // },
        // {
        //     title: 'Pneumatics',
        //     imageSrc: '/assets/is8.jpg',
        //     links: [
        //         { name: 'Pneumatic Cylinders', url: '#' },
        //         { name: 'Pneumatic Valves', url: '#' },
        //         { name: 'Pneumatic Fittings', url: '#' },
        //         { name: 'Air Compressors', url: '#' },
        //         { name: 'View More', url: '#' },
        //     ],
        // },
        // {
        //     title: 'Pumps & Pumping Equipment',
        //     imageSrc: '/assets/is9.jpg',
        //     links: [
        //         { name: 'Centrifugal Pumps', url: '#' },
        //         { name: 'Submersible Pumps', url: '#' },
        //         { name: 'Gear Pumps', url: '#' },
        //         { name: 'Vacuum Pumps', url: '#' },
        //         { name: 'View More', url: '#' },
        //     ],
        // },
        // {
        //     title: 'Valves',
        //     imageSrc: '/assets/is10.jpg',
        //     links: [
        //         { name: 'Ball Valves', url: '#' },
        //         { name: 'Gate Valves', url: '#' },
        //         { name: 'Globe Valves', url: '#' },
        //         { name: 'Check Valves', url: '#' },
        //         { name: 'View More', url: '#' },
        //     ],
        // },
        // {
        //     title: 'Welding & Soldering Supplies',
        //     imageSrc: '/assets/is11.jpg',
        //     links: [
        //         { name: 'Welding Machines', url: '#' },
        //         { name: 'Welding Rods', url: '#' },
        //         { name: 'Soldering Irons', url: '#' },
        //         { name: 'Welding Helmets', url: '#' },
        //         { name: 'View More', url: '#' },
        //     ],
        // },
        // {
        //     title: 'Safety Equipment',
        //     imageSrc: '/assets/is12.jpg',
        //     links: [
        //         { name: 'Safety Helmets', url: '#' },
        //         { name: 'Safety Gloves', url: '#' },
        //         { name: 'Safety Shoes', url: '#' },
        //         { name: 'Safety Goggles', url: '#' },
        //         { name: 'View More', url: '#' },
        //     ],
        // },
        // {
        //     title: 'Industrial Chemicals',
        //     imageSrc: '/assets/is13.jpg',
        //     links: [
        //         { name: 'Acids', url: '#' },
        //         { name: 'Solvents', url: '#' },
        //         { name: 'Adhesives', url: '#' },
        //         { name: 'Lubricants', url: '#' },
        //         { name: 'View More', url: '#' },
        //     ],
        // },
        // {
        //     title: 'Electrical Equipment',
        //     imageSrc: '/assets/is14.jpg',
        //     links: [
        //         { name: 'Switches', url: '#' },
        //         { name: 'Circuit Breakers', url: '#' },
        //         { name: 'Transformers', url: '#' },
        //         { name: 'Motors', url: '#' },
        //         { name: 'View More', url: '#' },
        //     ],
        // },
        // {
        //     title: 'Instrumentation & Controls',
        //     imageSrc: '/assets/is15.jpg',
        //     links: [
        //         { name: 'Sensors', url: '#' },
        //         { name: 'Transducers', url: '#' },
        //         { name: 'Controllers', url: '#' },
        //         { name: 'Data Loggers', url: '#' },
        //         { name: 'View More', url: '#' },
        //     ],
        // },
    ];

    return (
        <>
            <div className="pagetitle">
                <h1>Industrial Supplies Trade Directory & Networking Platform</h1>
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
                    Explore a wide range of industrial supplies including bearings, fasteners, gears, and more. Find suppliers, manufacturers, and wholesalers worldwide.
                </p>
            </div>
        </>
    );
}

export default IndustrialSupplies;
