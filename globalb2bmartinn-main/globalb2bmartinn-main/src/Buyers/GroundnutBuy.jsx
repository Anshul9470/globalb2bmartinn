import React, { useState, useEffect } from 'react';
import './OnionBuy.css'; // Assuming the same CSS file can be used, otherwise create a new CSS file.
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import Whyglobal from '../Components/Whyglobal';

const GroundnutBuys = [
    {
        "name": "Dilesh Modi",
        "email": "dileshmodi@gmail.com",
        "mobileNumber": "9427522244",
        "locationandDate": "gujarat, 5/07/2024",
        "productOrService": "groundnut",
        "quantity": 5,
        "unit": "ton",
        "lookingFor": "High quality groundnuts needed immediately",
        "__v": 0,
        "_id": "66869b859f2cecbc7cc1143a"
    },
    {
        "name": "Gopalbhai",
        "email": "algotargopal1995@gmail.com",
        "mobileNumber": "9106010429",
        "locationandDate": "gujarat, 5/07/2024",
        "productOrService": "groundnut",
        "quantity": 500,
        "unit": "kg",
        "lookingFor": "Urgent requirement for groundnuts",
        "__v": 0,
        "_id": "66869bb89f2cecbc7cc1143c"
    },
    {
        "name": "Preetam",
        "email": "preetampghatkar@gmail.com",
        "mobileNumber": "7058259999",
        "locationandDate": "maharashtra, 5/07/2024",
        "productOrService": "groundnut",
        "quantity": 10,
        "unit": "ton",
        "lookingFor": "Need large quantity of groundnuts urgently",
        "__v": 0,
        "_id": "66869bee9f2cecbc7cc1143e"
    },
    {
        "name": "raja sekar",
        "email": "rajasekarrase@gmail.com",
        "mobileNumber": "9360340679",
        "locationandDate": "tamil nadu, 5/07/2024",
        "productOrService": "groundnut",
        "quantity": 100,
        "unit": "kg",
        "lookingFor": "Immediate groundnut supply required",
        "__v": 0,
        "_id": "66869c269f2cecbc7cc11440"
    },
    {
        "name": "PRAVINKUMAR",
        "email": "jatpravin870@gmail.com",
        "mobileNumber": "9724062631",
        "locationandDate": "gujarat, 5/07/2024",
        "productOrService": "groundnut",
        "quantity": 100,
        "unit": "kg",
        "lookingFor": "Looking for quick delivery of groundnuts",
        "__v": 0,
        "_id": "66869c599f2cecbc7cc11442"
    },
    {
        "name": "Karthikeyan",
        "email": "karthikeyangovindarajan171@gmail.com",
        "mobileNumber": "8825806853",
        "locationandDate": "tamil nadu, 5/07/2024",
        "productOrService": "groundnut",
        "quantity": 100,
        "unit": "kg",
        "lookingFor": "Need groundnuts on an urgent basis",
        "__v": 0,
        "_id": "66869c599f2cecbc7cc11444"
    },
    {
        "name": "Venkat",
        "email": "vnvsateesh@gmail.com",
        "mobileNumber": "9848312388",
        "locationandDate": "andhra pradesh, 5/07/2024",
        "productOrService": "groundnut",
        "quantity": 1,
        "unit": "ton",
        "lookingFor": "Urgent need for quality groundnuts",
        "__v": 0,
        "_id": "66869cba9f2cecbc7cc11448"
    },
    {
        "name": "Archana",
        "email": "archanad.140@gmail.com",
        "mobileNumber": "9902233335",
        "locationandDate": "karnataka, 5/07/2024",
        "productOrService": "groundnut",
        "quantity": 200,
        "unit": "kg",
        "lookingFor": "Looking for immediate groundnut supply",
        "__v": 0,
        "_id": "66869cec9f2cecbc7cc1144a"
    },
    {
        "name": "Nuthankumar",
        "email": "nuthankumar213@gmwil.com",
        "mobileNumber": "9964113034",
        "locationandDate": "karnataka, 5/07/2024",
        "productOrService": "groundnut",
        "quantity": 3,
        "unit": "ton",
        "lookingFor": "In urgent need of groundnuts",
        "__v": 0,
        "_id": "66869cec9f2cecbc7cc1144c"
    }

];

const GroundnutBuy = () => {
    const { userId } = useAuth();
    const [userIsPremium, setUserIsPremium] = useState(false);
    const [shownNumbers, setShownNumbers] = useState([]);
    const [leadsViewed, setLeadsViewed] = useState(0);

    useEffect(() => {
        if (!userId) return;

        // Load the viewed leads from local storage
        const storedViewedLeads = JSON.parse(localStorage.getItem(`groundnutViewedLeads_${userId}`)) || [];
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
        localStorage.setItem(`groundnutViewedLeads_${userId}`, JSON.stringify(updatedShownNumbers));

        const buyer = GroundnutBuys[index]; // Get the buyer information

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
                        <li><Link to="#">Delhi</Link></li>
                        <li><Link to="#">Maharashtra</Link></li>
                        <li><Link to="#">Karnataka</Link></li>
                        <li><Link to="#">West Bengal</Link></li>
                        <li><Link to="#">Tamil Nadu</Link></li>
                    </ul>

                    <ul style={{ marginTop: '20px' }} className="flt-list cust-scroll">
                        <h3>All Category</h3>
                        <li><Link to="#">3D Ceramic Floor Tiles</Link></li>
                        <li><Link to="#">Eye Drops</Link></li>
                        <li><Link to="#">Maize</Link></li>
                        <li><Link to="#">Rice</Link></li>
                        <li><Link to="#">Wheat</Link></li>
                        <li><Link to="#">Barley</Link></li>
                        <li><Link to="#">Soybean</Link></li>
                    </ul>
                </div>
                <div className="buyers">
                    {GroundnutBuys.map((buyer, index) => (
                        <div key={index} className="buyer-card">
                            <h2 style={{ color: 'red' }}>{buyer.lookingFor}</h2>
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

export default GroundnutBuy;
