import React, { useState, useEffect } from 'react';
import './OnionBuy.css'; // Assuming a new CSS file for styling
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import Whyglobal from '../Components/Whyglobal';

const LeggingsBuys = [
    {
        "id": "1",
        "name": "Fashionista",
        "email": "fashionista@example.com",
        "mobileNumber": "9876543210",
        "lookingFor": "High Waist Leggings",
        "locationandDate": "Mumbai 27-09-2024",
        "productOrService": "Leggings",
        "quantity": 50,
        "unit": "pcs"
    },
    {
        "id": "2",
        "name": "Active Wear",
        "email": "activewear@example.com",
        "mobileNumber": "8765432109",
        "lookingFor": "Comfortable Yoga Leggings",
        "locationandDate": "Bangalore 27-09-2024",
        "productOrService": "Leggings",
        "quantity": 100,
        "unit": "pcs"
    },
    {
        "id": "3",
        "name": "Trendsetter",
        "email": "trendsetter@example.com",
        "mobileNumber": "7654321098",
        "lookingFor": "Printed Leggings",
        "locationandDate": "Delhi 26-09-2024",
        "productOrService": "Leggings",
        "quantity": 75,
        "unit": "pcs"
    },
    
        {
            "id": "4",
            "name": "Fit & Fabulous",
            "email": "fitfabulous@example.com",
            "mobileNumber": "6543210987",
            "lookingFor": "High Performance Leggings",
            "locationandDate": "Hyderabad 26-09-2024",
            "productOrService": "Leggings",
            "quantity": 60,
            "unit": "pcs"
        },
        {
            "id": "5",
            "name": "Luxe Leggings",
            "email": "luxeleggings@example.com",
            "mobileNumber": "5432109876",
            "lookingFor": "Luxury Fabric Leggings",
            "locationandDate": "Chennai 26-09-2024",
            "productOrService": "Leggings",
            "quantity": 40,
            "unit": "pcs"
        },
        {
            "id": "6",
            "name": "Yoga Flow",
            "email": "yogaflow@example.com",
            "mobileNumber": "4321098765",
            "lookingFor": "Flexible Yoga Leggings",
            "locationandDate": "Pune 26-09-2024",
            "productOrService": "Leggings",
            "quantity": 80,
            "unit": "pcs"
        },
        {
            "id": "7",
            "name": "Comfort Fit",
            "email": "comfortfit@example.com",
            "mobileNumber": "3210987654",
            "lookingFor": "Everyday Leggings",
            "locationandDate": "Kolkata 26-09-2024",
            "productOrService": "Leggings",
            "quantity": 90,
            "unit": "pcs"
        },
        {
            "id": "8",
            "name": "Trendy Fit",
            "email": "trendyfit@example.com",
            "mobileNumber": "2109876543",
            "lookingFor": "Stylish Printed Leggings",
            "locationandDate": "Jaipur 26-09-2024",
            "productOrService": "Leggings",
            "quantity": 70,
            "unit": "pcs"
        },
        {
            "id": "9",
            "name": "Ultimate Comfort",
            "email": "ultimatecomfort@example.com",
            "mobileNumber": "1098765432",
            "lookingFor": "Ultra Soft Leggings",
            "locationandDate": "Surat 25-09-2024",
            "productOrService": "Leggings",
            "quantity": 110,
            "unit": "pcs"
        },
        {
            "id": "10",
            "name": "Everyday Active",
            "email": "everydayactive@example.com",
            "mobileNumber": "9870987654",
            "lookingFor": "Casual Active Leggings",
            "locationandDate": "Ahmedabad 25-09-2024",
            "productOrService": "Leggings",
            "quantity": 85,
            "unit": "pcs"
        },
        {
            "id": "11",
            "name": "Gym Ready",
            "email": "gymready@example.com",
            "mobileNumber": "8765431234",
            "lookingFor": "Performance Gym Leggings",
            "locationandDate": "Nagpur 25-09-2024",
            "productOrService": "Leggings",
            "quantity": 95,
            "unit": "pcs"
        },
        {
            "id": "12",
            "name": "Style Statement",
            "email": "stylestatement@example.com",
            "mobileNumber": "7654321324",
            "lookingFor": "Fashion Leggings",
            "locationandDate": "Indore 24-09-2024",
            "productOrService": "Leggings",
            "quantity": 65,
            "unit": "pcs"
        },
        {
            "id": "13",
            "name": "Legging Lovers",
            "email": "legginglovers@example.com",
            "mobileNumber": "6543212432",
            "lookingFor": "Versatile Leggings",
            "locationandDate": "Vadodara 24-09-2024",
            "productOrService": "Leggings",
            "quantity": 120,
            "unit": "pcs"
        }
    
    
];

const LeggingsBuy = () => {
    const { userId } = useAuth();
    const [userIsPremium, setUserIsPremium] = useState(false);
    const [shownNumbers, setShownNumbers] = useState([]);
    const [leadsViewed, setLeadsViewed] = useState(0);

    useEffect(() => {
        if (!userId) return;

        const storedViewedLeads = JSON.parse(localStorage.getItem(`leggingsViewedLeads_${userId}`)) || [];
        setShownNumbers(storedViewedLeads);

        fetch(`${process.env.REACT_APP_API_ENDPOINT}/getUserWithPremiumStatus/${userId}`)
            .then(response => response.json())
            .then(data => {
                setUserIsPremium(data.isPremium);
                setLeadsViewed(data.leadsViewed);
            })
            .catch(error => {
                console.error('Error fetching user information:', error);
            });
    }, [userId]);

    const toggleNumber = async (index) => {
        if (!userIsPremium) return;

        if (leadsViewed >= 25) {
            alert('You have reached the limit of 25 leads viewed per month.');
            return;
        }

        if (shownNumbers.includes(index)) return;

        const updatedShownNumbers = [...shownNumbers, index];
        setShownNumbers(updatedShownNumbers);

        localStorage.setItem(`leggingsViewedLeads_${userId}`, JSON.stringify(updatedShownNumbers));

        const buyer = LeggingsBuys[index];

        try {
            const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/incrementLeadsViewed/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ buyerName: buyer.name, mobileNo: buyer.mobileNumber })
            });

            if (response.ok) {
                const data = await response.json();
                setLeadsViewed(data.leadsViewed);
            } else {
                const errorData = await response.json();
                console.error('Error incrementing leads viewed:', errorData.error);
            }
        } catch (error) {
            console.error('Error incrementing leads viewed:', error.message);
        }
    };

    return (
        <>
            <div className="container">
                <ol className="breadcrumb">
                    <li style={{ display: 'flex', justifyContent: 'center', margin: '5px 30px' }} className="breadcrumb-item">
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li style={{ display: 'flex', justifyContent: 'center', margin: '5px -25px' }}>/</li>
                    <li style={{ display: 'flex', justifyContent: 'center', margin: '5px 30px' }} className="breadcrumb-item active">Fresh Leads</li>
                </ol>
            </div>
            <div className="containersx">
                <div style={{ width: '200px', padding: '10px' }} className="browsers">
                    <h3 style={{ marginTop: '30px' }}>Browse by Category</h3>
                    <ul className="flt-list cust-scroll" id="category-lists">
                        <li><Link to="#">Leggings</Link></li>
                        <li><Link to="#">T-shirts</Link></li>
                        <li><Link to="#">Shorts</Link></li>
                        <li><Link to="#">Dresses</Link></li>
                    </ul>
                </div>
                <div className="buyers">
                    {LeggingsBuys.map((buyer, index) => (
                        <div key={buyer.id} className="buyer-card">
                            <h2 style={{ color: 'blue' }}>{buyer.lookingFor}</h2>
                            <p><strong>Buyer Name:</strong> {buyer.name}</p>
                            <p><strong>Quantity:</strong> {buyer.quantity} {buyer.unit}</p>
                            <p><strong>Location & Date:</strong> {buyer.locationandDate}</p>
                            <p><strong>Mobile No.:</strong> {userIsPremium ? (shownNumbers.includes(index) ? buyer.mobileNumber : '********') : '********'}</p>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                {userIsPremium && (
                                    <button
                                        className="detail-btn"
                                        style={{
                                            padding: '5px 10px',
                                            background: '#f7f1f1',
                                            color: 'blue',
                                            borderRadius: '3px',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => toggleNumber(index)}
                                    >
                                        Click to see
                                    </button>
                                )}
                            </div>
                            <div className='btns-imp'>
                                <Link to={'/login'}>
                                    <button className="detailing-btn">View More</button>
                                </Link>
                                <Link to={'/register-Company'}>
                                    <button className="regis-btn">Register Now</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="sidebar">
                    <div className="mains-slide">
                        <div className="tk23-hkCont_onergt">
                            <div className="tk23-hkCont_premserv__box">
                                <h1 className="tk23-hkCont_premserv__ttl">Our Membership Plans</h1>
                                <div className="tk23-hkCont_premserv__list">
                                    <Link to={'/packages'}>
                                        <div className="tk23-hkCont_premservs">
                                            <span className='fontss' style={{ backgroundColor: '#fff' }}>Standard Plan</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="tk23-hkCont_premserv__list">
                                    <Link to={'/packages'}>
                                        <div className="tk23-hkCont_premservs">
                                            <span className='fontss' style={{ backgroundColor: '#fff' }}>Advance Plan</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="tk23-hkCont_premserv__list">
                                    <Link to={'/packages'}>
                                        <div className="tk23-hkCont_premservs">
                                            <span className='fontss' style={{ backgroundColor: '#fff' }}>Premium Plan</span>
                                        </div>
                                    </Link>
                                    <Link to={'/packages'}>
                                        <div className="reach">
                                            <span className="reahhere">Call Now</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Whyglobal />
            </div>
        </>
    );
};

export default LeggingsBuy;
