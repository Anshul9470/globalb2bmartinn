import React, { useState, useEffect } from 'react';
import './OnionBuy.css'; // Assuming the same CSS file can be used, otherwise create a new CSS file.
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import Whyglobal from '../Components/Whyglobal';

const MustardBuys = [
    {
        "name": "Khan Khan",
        "email": "khankhan@gmail.com",
        "mobileNumber": "+919846020977",
        "lookingFor": "looking for premium quality mustard oil suppliers",
        "locationandDate": "Palakkad, Kerala 06-09-2024",
        "productOrService": "Mustard Oil",
        "quantity": 250,
        "unit": "kg",
        "__v": 0
    },
    {
        "name": "Sham RM",
        "email": "shamrm@gmail.com",
        "mobileNumber": "+918778589609",
        "lookingFor": "In need of a consistent supply of top-grade mustard oil",
        "locationandDate": "Erode, Tamil Nadu 06-09-2024",
        "productOrService": "Mustard Oil",
        "quantity": 2000,
        "unit": "kg",
        "__v": 0
    },
    {
        "name": "Vikas Pal",
        "email": "vk443222@gmail.com",
        "mobileNumber": "+918171808945",
        "lookingFor": "Seeking large quantities of premium mustard oil for bulk distribution",
        "locationandDate": "Muzaffarnagar, Uttar Pradesh 06-09-2024",
        "productOrService": "Mustard Oil",
        "quantity": 20000,
        "unit": "ton",
        "__v": 0
    },
    {
        "name": "Krishna Kumar",
        "email": "sagarsolanki32321984@gmail.com",
        "mobileNumber": "+918273783019",
        "lookingFor": "Always on the lookout for reliable bulk suppliers of mustard oil",
        "locationandDate": "Tawang, Arunachal Pradesh 06-09-2024",
        "productOrService": "Mustard Oil",
        "quantity": 1000,
        "unit": "ton",
        "__v": 0
    },




    {
        "name": "A&C NETWORK SRL",
        "email": "andcnetwork@gmail.com",
        "mobileNumber": "+4094502792",
        "lookingFor": "Urgently required Yellow Mustard Seeds in bulk.",
        "locationandDate": "Braila, Romania 03-09-2024",
        "productOrService": "Yellow Mustard Seeds",
        "quantity": 1000,
        "unit": "ton"
    },
    ,
    {
        "name": "Khan",
        "email": "khan@gmail.com",
        "mobileNumber": "+91 98460 20977",
        "lookingFor": "Mustard oil in bulk Quantity.",
        "locationandDate": "Palakkad, India 03-09-2024",
        "productOrService": "Mustard Oil",
        "quantity": "2000",
        "unit": "ton"
    },

    {
        "name": "SOUMYA,MONDAL",
        "email": "pm92365@gmail.com",
        "mobileNumber": "7063609354",
        "lookingFor": "Looking for yellow mustard seed in bulk.",
        "locationandDate": "South 24, Parganas 23-07-2024",
        "productOrService": "yellow mustard seed ",
        "quantity": 2,
        "unit": "ton"
    },
    {
        "name": "Rais",
        "email": "rahisdihatti@gmail.com",
        "mobileNumber": "9015508395",
        "lookingFor": "Need mustard in bulk.",
        "locationandDate": "Delhi 12-07-2024",
        "productOrService": "Mustard",
        "quantity": 1,
        "unit": "ton",
        "__v": 0
    },


];

const MustardBuy = () => {
    const { userId } = useAuth();
    const [userIsPremium, setUserIsPremium] = useState(false);
    const [shownNumbers, setShownNumbers] = useState([]);
    const [leadsViewed, setLeadsViewed] = useState(0);

    useEffect(() => {
        if (!userId) return;

        // Load the viewed leads from local storage
        const storedViewedLeads = JSON.parse(localStorage.getItem(`mustardViewedLeads_${userId}`)) || [];
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
        localStorage.setItem(`mustardViewedLeads_${userId}`, JSON.stringify(updatedShownNumbers));

        const buyer = MustardBuys[index]; // Get the buyer information

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
                        <li><Link to="#">Peanuts</Link></li>
                        <li><Link to="#">Rice</Link></li>
                        <li><Link to="#">Wheat</Link></li>
                        <li><Link to="#">Barley</Link></li>
                        <li><Link to="#">Soybean</Link></li>
                    </ul>
                </div>
                <div className="buyers">
                    {MustardBuys.map((buyer, index) => (
                        <div key={index} className="buyer-card">
                            <h2 style={{ color: 'green' }}>{buyer.lookingFor}</h2>
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

export default MustardBuy;
