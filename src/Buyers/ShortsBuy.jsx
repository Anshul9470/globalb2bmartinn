import React, { useState, useEffect } from 'react';
import './OnionBuy.css'; // Assuming a new CSS file for styling
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import Whyglobal from '../Components/Whyglobal';

const ShortsBuys = [
    {
        "id": "4",
        "name": "Quick Style",
        "email": "quickstyle@example.com",
        "mobileNumber": "9781234567",
        "lookingFor": "Men's Casual Shorts Needed Urgently",
        "locationandDate": "Mumbai 27-09-2024",
        "productOrService": "Shorts",
        "quantity": 70,
        "unit": "pcs"
    },
    {
        "id": "5",
        "name": "Athletic Edge",
        "email": "athleticedge@example.com",
        "mobileNumber": "9765432109",
        "lookingFor": "Urgent Order for Men's Sports Shorts",
        "locationandDate": "Delhi 27-09-2024",
        "productOrService": "Shorts",
        "quantity": 90,
        "unit": "pcs"
    },
    {
        "id": "6",
        "name": "Active Lifestyle",
        "email": "activelifestyle@example.com",
        "mobileNumber": "9654321098",
        "lookingFor": "Men's Running Shorts Required ASAP",
        "locationandDate": "Pune 26-09-2024",
        "productOrService": "Shorts",
        "quantity": 50,
        "unit": "pcs"
    },
    {
        "id": "7",
        "name": "Summer Sprint",
        "email": "summersprint@example.com",
        "mobileNumber": "9543210987",
        "lookingFor": "Urgent Supply of Men's Summer Shorts",
        "locationandDate": "Bangalore 26-09-2024",
        "productOrService": "Shorts",
        "quantity": 75,
        "unit": "pcs"
    },
    {
        "id": "8",
        "name": "Chill & Grill",
        "email": "chillgrill@example.com",
        "mobileNumber": "9432109876",
        "lookingFor": "Board Shorts for Men Needed Immediately",
        "locationandDate": "Kochi 26-09-2024",
        "productOrService": "Shorts",
        "quantity": 110,
        "unit": "pcs"
    },
    {
        "id": "9",
        "name": "Cool Comfort",
        "email": "coolcomfort@example.com",
        "mobileNumber": "9321098765",
        "lookingFor": "Men's Comfort Shorts Required Urgently",
        "locationandDate": "Chandigarh 25-09-2024",
        "productOrService": "Shorts",
        "quantity": 65,
        "unit": "pcs"
    },
    {
        "id": "10",
        "name": "Quick Response",
        "email": "quickresponse@example.com",
        "mobileNumber": "9210987654",
        "lookingFor": "Men's Athletic Shorts Needed Urgently",
        "locationandDate": "Ahmedabad 25-09-2024",
        "productOrService": "Shorts",
        "quantity": 85,
        "unit": "pcs"
    },
    {
        "id": "11",
        "name": "Last-Minute Styles",
        "email": "lastminutestyles@example.com",
        "mobileNumber": "9109876543",
        "lookingFor": "Urgent Order for Stylish Men's Shorts",
        "locationandDate": "Jaipur 25-09-2024",
        "productOrService": "Shorts",
        "quantity": 40,
        "unit": "pcs"
    },
    {
        "id": "12",
        "name": "Fresh Fit",
        "email": "freshfit@example.com",
        "mobileNumber": "9098765432",
        "lookingFor": "Men's Fashion Shorts Required ASAP",
        "locationandDate": "Lucknow 24-09-2024",
        "productOrService": "Shorts",
        "quantity": 95,
        "unit": "pcs"
    },
    {
        "id": "13",
        "name": "Vibrant Ventures",
        "email": "vibrantventures@example.com",
        "mobileNumber": "8987654321",
        "lookingFor": "Quick Supply of Men's Vibrant Shorts",
        "locationandDate": "Nagpur 24-09-2024",
        "productOrService": "Shorts",
        "quantity": 120,
        "unit": "pcs"
    }
];


const ShortsBuy = () => {
    const { userId } = useAuth();
    const [userIsPremium, setUserIsPremium] = useState(false);
    const [shownNumbers, setShownNumbers] = useState([]);
    const [leadsViewed, setLeadsViewed] = useState(0);

    useEffect(() => {
        if (!userId) return;

        const storedViewedLeads = JSON.parse(localStorage.getItem(`shortsViewedLeads_${userId}`)) || [];
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

        localStorage.setItem(`shortsViewedLeads_${userId}`, JSON.stringify(updatedShownNumbers));

        const buyer = ShortsBuys[index];

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
                        <li><Link to="#">Shorts</Link></li>
                        <li><Link to="#">T-shirts</Link></li>
                        <li><Link to="#">Leggings</Link></li>
                        <li><Link to="#">Dresses</Link></li>
                    </ul>
                </div>
                <div className="buyers">
                    {ShortsBuys.map((buyer, index) => (
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

export default ShortsBuy;
