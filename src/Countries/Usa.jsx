// import React from 'react'
// import { Link } from 'react-router-dom';
// import './countries.css';
// const Usacountry = () => {
//     return (
//         <>
//             <div className="ffp">
//                 <div
//                     className="iph-banner"
//                     style={{

//                         backgroundSize: "cover",
//                         minHeight: 292
//                     }}
//                 >
//                     <div className="fw">
//                         <div className="pt15px pb15px fo">
//                             <div className="ffos fw6 white p15px iph-banner-title">
//                                 <h2>USA  Trade Gateway</h2>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="title2"><h1>Hot and Trendy USA Products</h1></div>
//             <div className="ftcomp-row row">
//                 <div className="col-3">
//                     <div className="ftcomp">
//                         <div className="ftcomprow">
//                             <div className="ftcompimg">
//                                 <Link to="research-chemicals-pdid-3792837.htm" >
//                                     <figure>
//                                         <img src="/assets/us1.jpeg" alt="Research Chemicals" />
//                                     </figure>
//                                 </Link>
//                             </div>
//                             <div className="ftcomptext">
//                                 <h3 className="title">
//                                     <Link to="research-chemicals-pdid-3792837.htm">
//                                         Research Che
//                                     </Link>
//                                 </h3>
//                                 <Link to="" className="cname">
//                                     Ephedrine Methylone LTD
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-3">
//                     <div className="ftcomp">
//                         <div className="ftcomprow">
//                             <div className="ftcompimg">
//                                 <Link to="feed-wheat-pdid-2586327.htm" >
//                                     <figure>
//                                         <img src="/assets/us2.jpeg" alt="Feed Wheat" />
//                                     </figure>
//                                 </Link>
//                             </div>
//                             <div className="ftcomptext">
//                                 <h3 className="title">
//                                     <Link to="feed-wheat-pdid-2586327.htm">
//                                         Feed Wheat
//                                     </Link>
//                                 </h3>
//                                 <Link to="" className="cname">
//                                     Matts Global PTY LTD
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-3">
//                     <div className="ftcomp">
//                         <div className="ftcomprow">
//                             <div className="ftcompimg">
//                                 <Link to="cow-ghee-pdid-2246471.htm" >
//                                     <figure>
//                                         <img src="/assets/us3.jpeg" alt="Cow Ghee" />
//                                     </figure>
//                                 </Link>
//                             </div>
//                             <div className="ftcomptext">
//                                 <h3 className="title">
//                                     <Link to="cow-ghee-pdid-2246471.htm">
//                                         Cow Ghee
//                                     </Link>
//                                 </h3>
//                                 <Link to="" className="cname">
//                                     Nzac Foods
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-3">
//                     <div className="ftcomp">
//                         <div className="ftcomprow">
//                             <div className="ftcompimg">
//                                 <Link to="air-conditioning-equipment-pdid-2042669.htm" >
//                                     <figure>
//                                         <img src="/assets/us5.jpeg" alt="Air Conditioning Equipment" />
//                                     </figure>
//                                 </Link>
//                             </div>
//                             <div className="ftcomptext">
//                                 <h3 className="title">
//                                     <Link to="air-conditioning-equipment-pdid-2042669.htm">
//                                         Air Conditio
//                                     </Link>
//                                 </h3>
//                                 <Link to="" className="cname">
//                                     The refrigerant oil company
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-3">
//                     <div className="ftcomp">
//                         <div className="ftcomprow">
//                             <div className="ftcompimg">
//                                 <Link to="address-books-pdid-2010356.htm" >
//                                     <figure>
//                                         <img src="/assets/us6.jpeg" alt="Address Books" />
//                                     </figure>
//                                 </Link>
//                             </div>
//                             <div className="ftcomptext">
//                                 <h3 className="title">
//                                     <Link to="address-books-pdid-2010356.htm">
//                                         Address Book
//                                     </Link>
//                                 </h3>
//                                 <Link to="" className="cname">
//                                     Statmart pty ltd
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-3">
//                     <div className="ftcomp">
//                         <div className="ftcomprow">
//                             <div className="ftcompimg">
//                                 <Link to="door-hardware-pdid-2005033.htm" >
//                                     <figure>
//                                         <img src="/assets/us7.jpeg" alt="Door Hardware" />
//                                     </figure>
//                                 </Link>
//                             </div>
//                             <div className="ftcomptext">
//                                 <h3 className="title">
//                                     <Link to="door-hardware-pdid-2005033.htm">
//                                         Door Hardwar
//                                     </Link>
//                                 </h3>
//                                 <Link to="" className="cname">
//                                     Ib marketing pty ltd
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-3">
//                     <div className="ftcomp">
//                         <div className="ftcomprow">
//                             <div className="ftcompimg">
//                                 <Link to="cashew-pdid-1852217.htm" >
//                                     <figure>
//                                         <img src="/assets/us8.jpeg" alt="Cashew" />
//                                     </figure>
//                                 </Link>
//                             </div>
//                             <div className="ftcomptext">
//                                 <h3 className="title">
//                                     <Link to="cashew-pdid-1852217.htm">
//                                         CASHEW
//                                     </Link>
//                                 </h3>
//                                 <Link to="" className="cname">
//                                     Shivana's Import & Export
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-3">
//                     <div className="ftcomp">
//                         <div className="ftcomprow">
//                             <div className="ftcompimg">
//                                 <Link to="edible-oil-pdid-1838942.htm" >
//                                     <figure>
//                                         <img src="/assets/us9.jpeg" alt="Edible Oil" />
//                                     </figure>
//                                 </Link>
//                             </div>
//                             <div className="ftcomptext">
//                                 <h3 className="title">
//                                     <Link to="edible-oil-pdid-1838942.htm">
//                                         Edible Oil
//                                     </Link>
//                                 </h3>
//                                 <Link to="" className="cname">
//                                     Sydney trading group pty ltd
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </>
//     )
// }

// export default Usacountry

import React from 'react'
import { Link } from 'react-router-dom';
import './countries.css';

const products = [
    {
        id: 1,
        link: "#",
        imgSrc: "/assets/us1.jpeg",
        altText: "Research Chemicals",
        title: "Research Che",
        companyName: "Ephedrine Methylone LTD"
    },
    {
        id: 2,
        link: "#",
        imgSrc: "/assets/us2.jpeg",
        altText: "Feed Wheat",
        title: "Feed Wheat",
        companyName: "Matts Global PTY LTD"
    },
    {
        id: 3,
        link: "#",
        imgSrc: "/assets/us3.jpeg",
        altText: "Cow Ghee",
        title: "Cow Ghee",
        companyName: "Nzac Foods"
    },
    {
        id: 4,
        link: "#",
        imgSrc: "/assets/us5.jpeg",
        altText: "Air Conditioning Equipment",
        title: "Air Condition",
        companyName: "The refrigerant oil company"
    },
    {
        id: 5,
        link: "#",
        imgSrc: "/assets/us6.jpeg",
        altText: "Address Books",
        title: "Address Book",
        companyName: "Statmart pty ltd"
    },
    {
        id: 6,
        link: "#",
        imgSrc: "/assets/us7.jpeg",
        altText: "Door Hardware",
        title: "Door Hardware",
        companyName: "Ib marketing pty ltd"
    },
    {
        id: 7,
        link: "#",
        imgSrc: "/assets/us8.jpeg",
        altText: "Cashew",
        title: "CASHEW",
        companyName: "Shivana's Import & Export"
    },
    {
        id: 8,
        link: "#",
        imgSrc: "/assets/us9.jpeg",
        altText: "Edible Oil",
        title: "Edible Oil",
        companyName: "Sydney trading group pty ltd"
    }
];


const industriesData = [
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
    }



];



const Usacountry = () => {
    return (
        <>
            <div className="ffp">
                <div
                    className="iph-banner"
                    style={{
                        backgroundSize: "cover",
                        minHeight: 400
                    }}
                >
                    <div className="fw">
                        <div className="pt15px pb15px fo">
                            <div className="ffos fw6 white p15px iph-banner-title">
                                <h2>USA Trade Gateway</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="title2">
                <h1>USA Trendsetting Essentials</h1>
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

export default Usacountry;
