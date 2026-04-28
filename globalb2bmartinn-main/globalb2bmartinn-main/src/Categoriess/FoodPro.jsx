import React from 'react';
import './commn.css'
const FoodPro = () => {
    const products = [
        {
            title: 'Herbal Foods',
            imageSrc: './assets/fo1.jpeg',
            links: [
                { name: 'Herbal Supplements', url: '#' },
                { name: 'Wheat Grass Powder', url: '#' },
                { name: 'Aloe Drinks', url: '#' },
                { name: 'Dry Amla', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Meat & Poultry',
            imageSrc: './assets/fo2.jpeg',
            links: [
                { name: 'Chicken', url: '#' },
                { name: 'Eggs', url: '#' },
                { name: 'Mutton', url: '#' },
                { name: 'Buffalo Meat', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Organic Food',
            imageSrc: './assets/fo3.jpeg',
            links: [
                { name: 'Organic Products', url: '#' },
                { name: 'Organic Honey', url: '#' },
                { name: 'Raw Honey', url: '#' },
                { name: 'Forest Honey', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Ready to Eat & Frozen Foods',
            imageSrc: './assets/fo4.jpeg',
            alt: 'Ready to Eat & Frozen Foods',
            links: [
                { name: 'Rice Bran', url: '#' },
                { name: 'Dosa', url: '#' },
                { name: 'Instant Mixes', url: '#' },
                { name: 'Frozen Chicken', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Seafood',
            imageSrc: './assets/fo5.jpeg',
            links: [
                { name: 'Fish', url: '#' },
                { name: 'Shrimps', url: '#' },
                { name: 'Frozen Fish', url: '#' },
                { name: 'Squid', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Spices',
            imageSrc: './assets/fo6.jpeg',
            links: [
                { name: 'Garlic', url: '#' },
                { name: 'Ginger', url: '#' },
                { name: 'Masala', url: '#' },
                { name: 'Red Chilli', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Sweeteners',
            imageSrc: './assets/fo7.jpeg',
            links: [
                { name: 'Sugar', url: '#' },
                { name: 'Glucose', url: '#' },
                { name: 'Jaggery', url: '#' },
                { name: 'Sugarcane', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Tea & Coffee',
            imageSrc: './assets/fo8.jpeg',
            links: [
                { name: 'Tea', url: '#' },
                { name: 'Coffee', url: '#' },
                { name: 'Green Tea', url: '#' },
                { name: 'Black Tea', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Tobacco & Tobacco Products',
            imageSrc: './assets/fo9.jpeg',
            links: [
                { name: 'Tobacco', url: '#' },
                { name: 'Cigarette', url: '#' },
                { name: 'Pan Masala', url: '#' },
                { name: 'Meat Masala', url: '#' },
                { name: 'View More', url: '#' },
            ],

        },
        {
            title: 'Beverages',
            imageSrc: './assets/fo10.jpeg',
            links: [
                { name: 'Fruit Juice', url: '#' },
                { name: 'Tea', url: '#' },
                { name: 'Coffee', url: '#' },
                { name: 'Soft Drinks', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Dairy Products',
            imageSrc: './assets/fo11.jpeg',
            links: [
                { name: 'Milk', url: '#' },
                { name: 'Cheese', url: '#' },
                { name: 'Butter', url: '#' },
                { name: 'Yogurt', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Snacks',
            imageSrc: './assets/fo12.jpeg',
            links: [
                { name: 'Chips', url: '#' },
                { name: 'Nuts', url: '#' },
                { name: 'Popcorn', url: '#' },
                { name: 'Cookies', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Fruits & Vegetables',
            imageSrc: './assets/fo13.jpeg',
            links: [
                { name: 'Fresh Fruits', url: '#' },
                { name: 'Leafy Greens', url: '#' },
                { name: 'Root Vegetables', url: '#' },
                { name: 'Berries', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Bakery Products',
            imageSrc: './assets/fo14.jpeg',
            links: [
                { name: 'Bread', url: '#' },
                { name: 'Pastries', url: '#' },
                { name: 'Cakes', url: '#' },
                { name: 'Biscuits', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Confectionery',
            imageSrc: './assets/fo15.jpeg',
            links: [
                { name: 'Chocolates', url: '#' },
                { name: 'Candies', url: '#' },
                { name: 'Gums', url: '#' },
                { name: 'Marshmallows', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Grains & Pulses',
            imageSrc: './assets/fo16.jpeg',
            links: [
                { name: 'Rice', url: '#' },
                { name: 'Wheat', url: '#' },
                { name: 'Lentils', url: '#' },
                { name: 'Chickpeas', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Nuts & Seeds',
            imageSrc: './assets/fo17.jpeg',
            links: [
                { name: 'Almonds', url: '#' },
                { name: 'Sunflower Seeds', url: '#' },
                { name: 'Walnuts', url: '#' },
                { name: 'Pumpkin Seeds', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Oils & Fats',
            imageSrc: './assets/fo18.jpeg',
            links: [
                { name: 'Olive Oil', url: '#' },
                { name: 'Coconut Oil', url: '#' },
                { name: 'Butter', url: '#' },
                { name: 'Ghee', url: '#' },
                { name: 'View More', url: '#' },
            ],
        },
        {
            title: 'Canned & Jarred Food',
            imageSrc: './assets/fo20.jpeg',
            links: [
                { name: 'Canned Vegetables', url: '#' },
                { name: 'Pickles', url: '#' },
                { name: 'Jams', url: '#' },
                { name: 'Canned Fruits', url: '#' },
                { name: 'View More', url: '#' },
            ],
        }
    ];

    return (
        <>
            <div className="pagetitle">
                <h1>Food Commerce Directory & Trade Platform</h1>
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
                    GlobalB2BMart is the leading Food Products B2B Marketplace and Food Business Directory, offering comprehensive business listings of Food Suppliers, Manufacturers, Exporters, Wholesalers, and Traders worldwide. Our extensive and verified database includes detailed information about Food Companies, a diverse catalog of Food Products, and up-to-date Food Price Lists and Quotations.
                </p>
            </div>
        </>
    );
}

export default FoodPro;
