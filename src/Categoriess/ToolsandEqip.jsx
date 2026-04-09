import React from 'react';
import './commn.css';

const ToolsAndEquipment = () => {
    const products = [
        {
            title: 'Hand Tools',
            imageSrc: '/assets/eqip1.jpg',
            links: [
                { name: 'Hammers', url: '#' },
                { name: 'Screwdrivers', url: '#' },
                { name: 'Pliers', url: '#' },
                { name: 'Wrenches', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Power Tools',
            imageSrc: '/assets/eqip2.jpg',
            links: [
                { name: 'Drills', url: '#' },
                { name: 'Grinders', url: '#' },
                { name: 'Saws', url: '#' },
                { name: 'Sanders', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Garden Tools',
            imageSrc: '/assets/eqip3.webp',
            links: [
                { name: 'Pruning Shears', url: '#' },
                { name: 'Rakes', url: '#' },
                { name: 'Shovels', url: '#' },
                { name: 'Hoes', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Automotive Tools',
            imageSrc: '/assets/eqip4.jpg',
            links: [
                { name: 'Jacks', url: '#' },
                { name: 'Wrenches', url: '#' },
                { name: 'Diagnostic Tools', url: '#' },
                { name: 'Lifts', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Measuring Tools',
            imageSrc: '/assets/eqip5.avif',
            links: [
                { name: 'Tape Measures', url: '#' },
                { name: 'Calipers', url: '#' },
                { name: 'Levels', url: '#' },
                { name: 'Laser Measures', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Cutting Tools',
            imageSrc: '/assets/eqip6.jpg',
            links: [
                { name: 'Knives', url: '#' },
                { name: 'Scissors', url: '#' },
                { name: 'Blades', url: '#' },
                { name: 'Chisels', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Construction Tools',
            imageSrc: '/assets/eqip7.avif',
            links: [
                { name: 'Concrete Mixers', url: '#' },
                { name: 'Masonry Tools', url: '#' },
                { name: 'Tile Cutters', url: '#' },
                { name: 'Trowels', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Welding Tools',
            imageSrc: '/assets/eqip8.webp',
            links: [
                { name: 'Welding Machines', url: '#' },
                { name: 'Welding Helmets', url: '#' },
                { name: 'Welding Rods', url: '#' },
                { name: 'Welding Gloves', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Plumbing Tools',
            imageSrc: '/assets/eqip9.jpg',
            links: [
                { name: 'Pipe Wrenches', url: '#' },
                { name: 'Pipe Cutters', url: '#' },
                { name: 'Plungers', url: '#' },
                { name: 'Pipe Benders', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },

    ];

    return (
        <>
            <div className="pagetitle">
                <h1>Tools and Equipment Trade Directory & Networking Platform</h1>
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
                    Discover a wide range of tools and equipment including hand tools, power tools, automotive tools, and more. Connect with suppliers, manufacturers, and wholesalers globally.
                </p>
            </div>
        </>
    );
}

export default ToolsAndEquipment;
