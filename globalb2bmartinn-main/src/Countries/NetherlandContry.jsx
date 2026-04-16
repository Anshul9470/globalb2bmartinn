
import React from 'react'
import { Link } from 'react-router-dom';
import './countries.css';

const products = [
    {
        id: 1,
        link: "#",
        imgSrc: "/assets/neth1.jpeg",
        altText: "Dutch Cheese",
        title: "Dutch Cheese",
        companyName: "Gouda Delights"
    },
    {
        id: 2,
        link: "#",
        imgSrc: "/assets/neth2.jpeg",
        altText: "Stroopwafels",
        title: "Stroopwafels",
        companyName: "Sweet Holland"
    },
    {
        id: 3,
        link: "#",
        imgSrc: "/assets/neth3.jpeg",
        altText: "Tulip Bulbs",
        title: "Tulip Bulbs",
        companyName: "Tulip Gardens"
    },
    {
        id: 4,
        link: "#",
        imgSrc: "/assets/neth4.jpeg",
        altText: "Dutch Clogs",
        title: "Dutch Clogs",
        companyName: "Wooden Shoes Co."
    },
    {
        id: 5,
        link: "#",
        imgSrc: "/assets/neth5.jpeg",
        altText: "Dutch Beer",
        title: "Dutch Beer",
        companyName: "Brew Masters NL"
    },
    {
        id: 6,
        link: "#",
        imgSrc: "/assets/neth6.jpeg",
        altText: "Delft Blue Pottery",
        title: "Delft Blue Pottery",
        companyName: "Royal Delft"
    },
    {
        id: 7,
        link: "#",
        imgSrc: "/assets/neth7.jpeg",
        altText: "Dutch Licorice",
        title: "Dutch Licorice",
        companyName: "Licorice Land"
    },
    {
        id: 8,
        link: "#",
        imgSrc: "/assets/neth8.jpeg",
        altText: "Windmill Models",
        title: "Windmill Models",
        companyName: "Miniature Holland"
    }
];



const industriesData = [

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
                "name": "Irrigation Systems",
                "link": "#"
            },
            {
                "name": "Organic Farming",
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
                "name": "Handbags",
                "link": "#"
            },
            {
                "name": "Belts",
                "link": "#"
            },
            {
                "name": "Wallets",
                "link": "#"
            },
            {
                "name": "Travel Bags",
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
        "name": "Business & Professional Services",
        "link": "#",
        "icon": "/assets/usp3.png",
        "subItems": [
            {
                "name": "Business Support Services",
                "link": "#"
            },
            {
                "name": "Designing Services",
                "link": "#"
            },
            {
                "name": "Turnkey Project Services",
                "link": "#"
            },
            {
                "name": "Consulting Services",
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
                "name": "GPS & Navigation",
                "link": "#"
            },
            {
                "name": "Car Care Products",
                "link": "#"
            },


        ]
    },







];



const NetherlandCountry = () => {
    return (
        <>
            <div className="ffp">
                <div
                    className="iph-banner-netherland"
                    style={{
                        backgroundSize: "cover",
                        minHeight: 400
                    }}
                >
                    <div className="fw">
                        {/* <div className="pt15px pb15px fo">
                            <div className="ffos fw6 white p15px iph-banner-title">
                                <h1 style={{ color: 'yellow' }}>
                                    NetherlandsProducts Marketplace</h1>
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
                            <h1 style={{ color: '#fff' }}>
                                Netherlands Trade Gateway
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="title2">
                <h1>
                    NetherlandsTrending Products</h1>
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

export default NetherlandCountry;
