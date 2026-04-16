
import React from 'react'
import { Link } from 'react-router-dom';
import './countries.css';

const products = [
    {
        id: 1,
        link: "#",
        imgSrc: "/assets/cana1.jpeg",
        altText: "Maple Syrup",
        title: "Maple Syrup",
        companyName: "Maple Farms Co."
    },
    {
        id: 2,
        link: "#",
        imgSrc: "/assets/cana2.jpeg",
        altText: "Ice Wine",
        title: "Ice Wine",
        companyName: "Frost Vineyards Ltd."
    },
    {
        id: 3,
        link: "#",
        imgSrc: "/assets/cana3.jpeg",
        altText: "Smoked Salmon",
        title: "Smoked Salmon",
        companyName: "Ocean's Bounty Inc."
    },
    {
        id: 4,
        link: "#",
        imgSrc: "/assets/cana4.jpeg",
        altText: "Poutine",
        title: "Poutine",
        companyName: "Canadian Comfort Foods"
    },
    {
        id: 5,
        link: "#",
        imgSrc: "/assets/cana5.jpeg",
        altText: "Canadian Whisky",
        title: "Canadian Whisky",
        companyName: "Northern Spirits"
    },
    {
        id: 6,
        link: "#",
        imgSrc: "/assets/cana6.jpeg",
        altText: "Winter Jacket",
        title: "Winter Jacket",
        companyName: "Arctic Wear Co."
    },
    {
        id: 7,
        link: "#",
        imgSrc: "/assets/cana7.jpeg",
        altText: "Hockey Stick",
        title: "Hockey Stick",
        companyName: "ProHockey Gear"
    },
    {
        id: 8,
        link: "#",
        imgSrc: "/assets/cana8.jpeg",
        altText: "Canoe",
        title: "Canoe",
        companyName: "Great Outdoors Ltd."
    }
];






const industriesData = [
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




];



const CanadaCountry = () => {
    return (
        <>
            <div className="ffp">
                <div
                    className="iph-banner-can"
                    style={{
                        backgroundSize: "cover",
                        minHeight: 400
                    }}
                >
                    <div className="fw">
                        {/* <div className="pt15px pb15px fo">
                            <div className="ffos fw6 white p15px iph-banner-title">
                                <h1 style={{ color: 'yellow' }}>
                                    Canada Products Marketplace</h1>
                            </div>
                        </div> */}
                        <div style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            color: 'white',
                            padding: '15px',
                            fontWeight: '600',
                            borderRadius: '10px',
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.3)'
                        }} className="iph-banner-title">
                            <h1 style={{ color: 'white' }}>
                                Canada Trade Gateway
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="title2">
                <h1>
                    Canada Trending Products</h1>
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

export default CanadaCountry;
