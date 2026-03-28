
import React from 'react'
import { Link } from 'react-router-dom';
import './countries.css';

const products = [
    {
        id: 1,
        link: "#",
        imgSrc: "/assets/uae1.jpeg",
        altText: "Luxury Watch",
        title: "Luxury Watch",
        companyName: "Elite Timepieces LLC"
    },
    {
        id: 2,
        link: "#",
        imgSrc: "/assets/uae2.jpeg",
        altText: "Smartphone",
        title: "Smartphone",
        companyName: "Tech Innovators Inc."
    },
    {
        id: 3,
        link: "#",
        imgSrc: "/assets/uae3.jpeg",
        altText: "Designer Handbag",
        title: "Designer Handbag",
        companyName: "Fashion House UAE"
    },
    {
        id: 4,
        link: "#",
        imgSrc: "/assets/uae4.jpeg",
        altText: "Air Purifier",
        title: "Air Purifier",
        companyName: "Pure Air Solutions"
    },
    {
        id: 5,
        link: "#",
        imgSrc: "/assets/uae5.jpeg",
        altText: "Gaming Laptop",
        title: "Gaming Laptop",
        companyName: "Gamer's Paradise Ltd."
    },
    {
        id: 6,
        link: "#",
        imgSrc: "/assets/uae6.jpeg",
        altText: "Luxury Car",
        title: "Luxury Car",
        companyName: "Auto Elegance Motors"
    },
    {
        id: 7,
        link: "#",
        imgSrc: "/assets/uae7.jpeg",
        altText: "Fitness Tracker",
        title: "Fitness Tracker",
        companyName: "FitTech Solutions"
    },
    {
        id: 8,
        link: "#",
        imgSrc: "/assets/uae8.jpeg",
        altText: "Coffee Machine",
        title: "Coffee Machine",
        companyName: "Brew Masters Inc."
    }
];



const industriesData = [
    {
        "name": "Bags, Belts, Wallets & Fashion Accessories",
        "link": "#",
        "icon": "/assets/usp12.png",
        "subItems": [
            {
                "name": "Fashion Accessories",
                "link": "#"
            },
            {
                "name": "Multiutility Bags, Pouches & Cases",
                "link": "#"
            },
            {
                "name": "View More",
                "link": "#"
            }
        ]
    }, {
        "name": "Auto & Automobile Accessories",
        "link": "#",
        "icon": "/assets/usp10.png",
        "subItems": [
            {
                "name": "Car Accessories",
                "link": "#"
            },
            {
                "name": "Motorcycle Accessories",
                "link": "#"
            },
            {
                "name": "Vehicle Parts",
                "link": "#"
            },
            {
                "name": "View More",
                "link": "#"
            }
        ]
    },




    {
        name: 'Business & Professional Services',
        link: '#',
        icon: '/assets/usp3.png',
        subItems: [
            {
                name: 'Business Support Services',
                link: '#'
            },
            {
                name: 'Designing Services',
                link: '#'
            },
            {
                name: 'Turnkey Project Services',
                link: '#'
            },
            {
                name: 'View More',
                link: '#'
            }
        ]
    },
    {
        name: 'Chemical',
        link: '#',
        icon: '/assets/usp4.png',
        subItems: [
            {
                name: 'Agrochemicals',
                link: '#'
            },
            {
                name: 'Chemical Compounds',
                link: '#'
            },
            {
                name: 'Chemical Machinery',
                link: '#'
            },
            {
                name: 'Cleaning Chemicals',
                link: '#'
            },
            {
                name: 'View More',
                link: '#'
            }
        ]
    },
    {
        name: 'Computers and Internet',
        link: '#',
        icon: '/assets/usp5.png',
        subItems: [
            {
                name: 'Computer Hardware',
                link: '#'
            },
            {
                name: 'Computer Printers',
                link: '#'
            },
            {
                name: 'Computer Stationery and Consumables',
                link: '#'
            },
            {
                name: 'Computer Systems',
                link: '#'
            },
            {
                name: 'View More',
                link: '#'
            }
        ]
    },
    {
        name: 'Construction & Building Material',
        link: '#',
        icon: '/assets/usp6.png',
        subItems: [
            {
                name: 'Bath & Toilet Appliances',
                link: '#'
            },
            {
                name: 'Brackets, Holders & Hardware Fittings',
                link: '#'
            },
            {
                name: 'Building Hardware',
                link: '#'
            },
            {
                name: 'Building Materials',
                link: '#'
            },
            {
                name: 'View More',
                link: '#'
            }
        ]
    },
    {
        name: 'Electronics & Electrical',
        link: '#',
        icon: '/assets/usp7.png',
        subItems: [
            {
                name: 'Air Conditioning Products',
                link: '#'
            },
            {
                name: 'Audio Video Products & Supplies',
                link: '#'
            },
            {
                name: 'Audio Video System',
                link: '#'
            },
            {
                name: 'Cable & Wire',
                link: '#'
            },
            {
                name: 'View More',
                link: '#'
            }
        ]
    },
    {
        "name": "Energy & Power",
        "link": "#",
        "icon": "/assets/usp8.png",
        "subItems": [
            {
                "name": "Renewable Energy",
                "link": "#"
            },
            {
                "name": "Power Generation",
                "link": "#"
            },
            {
                "name": "Energy Efficiency",
                "link": "#"
            },
            {
                "name": "View More",
                "link": "#"
            }
        ]
    },
    {
        name: 'Bags, Belts, Wallets & Fashion Accessories',
        link: '#',
        icon: '/assets/usp2.png',
        subItems: [
            {
                name: 'Fashion Accessories',
                link: '#'
            },
            {
                name: 'Multiutility Bags, Pouches & Cases',
                link: '#'
            },
            {
                name: 'View More',
                link: '#'
            }
        ]
    },
    {
        "name": "Apparel & Fashion",
        "link": "#",
        "icon": "/assets/usp9.png",
        "subItems": [
            {
                "name": "Men's Clothing",
                "link": "#"
            },
            {
                "name": "Women's Clothing",
                "link": "#"
            },
            {
                "name": "Accessories",
                "link": "#"
            },
            {
                "name": "View More",
                "link": "#"
            }
        ]
    },

    {
        "name": "Agriculture",
        "link": "#",
        "icon": "/assets/usp11.png",
        "subItems": [
            {
                "name": "Crop Production",
                "link": "#"
            },
            {
                "name": "Farm Machinery",
                "link": "#"
            },
            {
                "name": "Soil Health",
                "link": "#"
            },
            {
                "name": "View More",
                "link": "#"
            }
        ]
    },
    {
        name: 'Ayurveda & Herbal',
        link: '#',
        icon: '/assets/usp1.png',
        subItems: [
            {
                name: 'Herbal Products',
                link: '#'
            },
            {
                name: 'Natural Herbs',
                link: '#'
            },
            {
                name: 'View More',
                link: '#'
            }
        ]
    },



];



const DubaiCountry = () => {
    return (
        <>
            <div className="ffp">
                <div
                    className="iph-banner-d"
                    style={{
                        backgroundSize: "cover",
                        minHeight: 400
                    }}
                >
                    <div className="fw">
                        <div className="pt15px pb15px fo">
                            <div className="ffos fw6 white p15px iph-banner-title">
                                <h1 style={{ color: '#fff' }}>
                                    United Arab Emirates Trade Gateway</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="title2">
                <h1>
                    United Arab Emirates Trending Products</h1>
            </div>
            <div className="ftcomp-row row">
                {products.map(product => (
                    <div className="col-3" key={product.id}>
                        <div className="ftcomp">
                            <div className="ftcomprow">
                                <div className="ftcompimg">
                                    <Link to={product.link} >
                                        <figure>
                                            <img src={product.imgSrc} alt={product.altText} />
                                        </figure>
                                    </Link>
                                </div>
                                <div className="ftcomptext">
                                    <h3 className="title">
                                        <Link to={product.link}>
                                            {product.title}
                                        </Link>
                                    </h3>
                                    <Link to="" className="cname">
                                        {product.companyName}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div>
                    <h1 style={{ textAlign: 'center' }}>Browser By Categories</h1>

                    <div className="industry-box-wrap">
                        {industriesData.map((industry, index) => (
                            <div className="item" key={index}>
                                <div className="industry-box">
                                    <div className="d-flex">
                                        <div className="industry-icon">
                                            <Link to={industry.link}>
                                                <img src={industry.icon} alt={`${industry.name} icon`} />
                                            </Link>
                                        </div>
                                        <div className="industry-name">
                                            <Link to={industry.link}>
                                                <h2>{industry.name}</h2>
                                            </Link>
                                        </div>
                                    </div>
                                    <ul className="industry-list">
                                        {industry.subItems.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <Link to={subItem.link}>{subItem.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </>
    );
};

export default DubaiCountry;
