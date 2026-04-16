import React, { useState, useEffect } from 'react';
import './OnionBuy.css'; // Reuse the same CSS file, or create a new one if necessary.
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import Whyglobal from '../Components/Whyglobal';

const BananaBuys = [
    {
        "name": "Surya Prakash Verma",
        "email": "suryaverma2299@gmail.com",
        "mobileNumber": "+917081773345",
        "locationandDate": "06-09-2024", // Use the current date or a specified date
        "lookingFor": "Looking Good Quality Bananas",
        "productOrService": "Banana",
        "quantity": 100,
        "unit": "kg",
        "_id": "667c0f639644befaa9548021" // Unique ID for this buyer
    },
    {
        "_id": "66d97f7caefc906f30ab3d27",
        "name": "Sunny",
        "email": "shetul.r@gmail.com",
        "mobileNumber": "+919916793593",
        "lookingFor": "Seeking suppliers of Nendran/Sringeri bananas",
        "locationandDate": "Chamarajanagar, Karnataka 06-09-2024",
        "productOrService": "Nendran Banana / Sringeri Banana",
        "quantity": 10,
        "unit": "ton",
        "__v": 0
    },
    {
        "_id": "66d98009aefc906f30ab3d29",
        "name": "Rohtash Singh Singh",
        "email": "rohtashsingh@gmail.com",
        "mobileNumber": "+916375509033",
        "lookingFor": "Looking for quality banana suppliers",
        "locationandDate": "Karauli, Rajasthan 06-09-2024",
        "productOrService": "Banana",
        "quantity": 10,
        "unit": "ton",
        "__v": 0
    },
    {
        "_id": "66d98069aefc906f30ab3d2b",
        "name": "Lal Bhatia",
        "email": "mbarts55@gmail.com",
        "mobileNumber": "+918847597641",
        "lookingFor": "Searching for banana suppliers in bulk",
        "locationandDate": "Burhanpur, Madhya Pradesh 06-09-2024",
        "productOrService": "Banana",
        "quantity": 200,
        "unit": "ton",
        "__v": 0
    },
    {
        "_id": "66d9813eaefc906f30ab3d2e",
        "name": "Shyam Lal",
        "email": "shyam.lal46@gmail.com",
        "mobileNumber": "+918219090872",
        "lookingFor": "Seeking banana suppliers",
        "locationandDate": "Sirmaur (Sirmour), Himachal Pradesh 06-09-2024",
        "productOrService": "Banana",
        "quantity": 2,
        "unit": "ton",
        "__v": 0
    },
    {
        "_id": "66d98141aefc906f30ab3d2f",
        "name": "Sunny",
        "email": "sribalajienterprises1981@gmail.com",
        "mobileNumber": "+919916793593",
        "lookingFor": "Looking for Sringeri banana suppliers",
        "locationandDate": "Bengaluru (Bangalore) Urban, Karnataka 06-09-2024",
        "productOrService": "Sringeri Banana",
        "quantity": 2,
        "unit": "ton",
        "__v": 0
    },
    {
        "_id": "66d981a7aefc906f30ab3d31",
        "name": "Aamir",
        "email": "aamirkhan786us@gmail.com",
        "mobileNumber": "+919653445540",
        "lookingFor": "Searching for bulk banana suppliers",
        "locationandDate": "Gwalior, Madhya Pradesh 06-09-2024",
        "productOrService": "Banana",
        "quantity": 108,
        "unit": "ton",
        "__v": 0
    },
    {
        "_id": "66d9841aaefc906f30ab3d35",
        "name": "Faraz Manegar",
        "email": "farazmanegar@gmail.com",
        "mobileNumber": "+918296291991",
        "lookingFor": "Looking for Nendran banana suppliers",
        "locationandDate": "Dakshina Kannada, Karnataka 06-09-2024",
        "productOrService": "Nendran Banana",
        "quantity": 500,
        "unit": "kg",
        "__v": 0
    },
    {
        "_id": "66d9849faefc906f30ab3d37",
        "name": "Ganesh",
        "email": "ganeshbab@gmail.com",
        "mobileNumber": "+919791242007",
        "lookingFor": "Seeking Nendran banana suppliers",
        "locationandDate": "Erode, Tamil Nadu 06-09-2024",
        "productOrService": "Nendran Banana",
        "quantity": 1,
        "unit": "ton",
        "__v": 0
    },
    {
        "_id": "66d98650aefc906f30ab3d3f",
        "name": "Narsi",
        "email": "narsi@gmail.com",
        "mobileNumber": "+918463942368",
        "lookingFor": "Looking for banana suppliers",
        "locationandDate": "YSR Kadapa, Andhra Pradesh 06-09-2024",
        "productOrService": "Banana",
        "quantity": 5,
        "unit": "ton",
        "__v": 0
    },
    {
        "_id": "66d98650aefc906f30ab3d3f",
        "name": "Polotopo, Kulathoor",
        "email": "polotopo03@gmail.com",
        "mobileNumber": "+919544990192",
        "lookingFor": "Seeking banana suppliers in bulk",
        "locationandDate": "Theni, Tamil Nadu 06-09-2024",
        "productOrService": "Banana",
        "quantity": 1000,
        "unit": "ton",
        "__v": 0
    },
    {
        "_id": "66d986e4aefc906f30ab3d41",
        "name": "Atul V. Patil",
        "email": "contact@agriamps.com",
        "mobileNumber": "+919082790488",
        "lookingFor": "Searching for green banana suppliers",
        "locationandDate": "Thane, Maharashtra 06-09-2024",
        "productOrService": "Green Banana",
        "quantity": 18,
        "unit": "ton",
        "__v": 0
    }
    ,

];

const BananaBuy = () => {
    const { userId } = useAuth();
    const [userIsPremium, setUserIsPremium] = useState(false);
    const [shownNumbers, setShownNumbers] = useState([]);
    const [leadsViewed, setLeadsViewed] = useState(0);

    useEffect(() => {
        if (!userId) return;

        // Load the viewed leads from local storage
        const storedViewedLeads = JSON.parse(localStorage.getItem(`bananaViewedLeads_${userId}`)) || [];
        setShownNumbers(storedViewedLeads);

        fetch(`${process.env.REACT_APP_API_ENDPOINT}/getUserWithPremiumStatus/${userId}`)
            .then(response => response.json())
            .then(data => {
                setUserIsPremium(data.isPremium);
                setLeadsViewed(data.leadsViewed);
                console.log('Premium Status:', data.isPremium);
            })
            .catch(error => {
                console.error('Error fetching user information:', error);
            });
    }, [userId]);

    const toggleNumber = async (index) => {
        if (!userIsPremium) return; // Only premium users can see numbers

        if (leadsViewed >= 25) {
            alert('You have reached the limit of 25 leads viewed per month.');
            return;
        }

        if (shownNumbers.includes(index)) return; // If already shown, do nothing

        const updatedShownNumbers = [...shownNumbers, index];
        setShownNumbers(updatedShownNumbers);

        // Update local storage
        localStorage.setItem(`bananaViewedLeads_${userId}`, JSON.stringify(updatedShownNumbers));

        const buyer = BananaBuys[index]; // Get the buyer information

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
                    <h3 style={{ marginTop: '30px' }}>Browse by State</h3>
                    <ul className="flt-list cust-scroll" id="state-lists">
                        <li><Link to="#">All India</Link></li>
                        <li><Link to="#">Uttar Pradesh</Link></li>
                        <li><Link to="#">Himachal Pradesh</Link></li>
                        <li><Link to="#">Delhi</Link></li>
                        <li><Link to="#">Maharashtra</Link></li>
                        <li><Link to="#">Karnataka</Link></li>
                        <li><Link to="#">West Bengal</Link></li>
                        <li><Link to="#">Tamil Nadu</Link></li>
                    </ul>

                    <ul style={{ marginTop: '20px' }} className="flt-list cust-scroll">
                        <h3>All Category</h3>
                        <li><Link to="#">Banana</Link></li>
                        <li><Link to="#">Apple</Link></li>
                        <li><Link to="#">Peanuts</Link></li>
                        <li><Link to="#">Rice</Link></li>
                        <li><Link to="#">Wheat</Link></li>
                        <li><Link to="#">Barley</Link></li>
                        <li><Link to="#">Soybean</Link></li>
                    </ul>
                </div>
                <div className="buyers">
                    {BananaBuys.map((buyer, index) => (
                        <div key={index} className="buyer-card">
                            <h2 style={{ color: 'red' }}>{buyer.lookingFor}</h2>
                            <p><strong>Buyer Name:</strong> {buyer.name}</p>
                            <p><strong>Quantity:</strong> {buyer.quantity} {buyer.unit}</p>
                            <p><strong>Date:</strong> {buyer.locationandDate} </p>
                            <p><strong>Mobile No.:</strong> {userIsPremium ? (shownNumbers.includes(index) ? buyer.mobileNumber : '********') : '********'}</p>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                {userIsPremium && (
                                    <button
                                        className="detail-btn"
                                        style={{
                                            padding: '5px 10px',
                                            background: '#f7f1f1',
                                            color: 'orange',
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

export default BananaBuy;
