import React, { useState, useEffect } from 'react';
import './OnionBuy.css'; // Reuse the same CSS file, or create a new one if necessary.
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import Whyglobal from '../Components/Whyglobal';

const AppleBuys = [
    {
        "name": "Amit Nagar",
        "email": "nagaramit442@gmail.com",
        "mobileNumber": "+919929872176",
        "locationandDate": "06-09-2024", // Use the current date or a specified date
        "lookingFor": "Required Good Quality Apples For Bulk Quantity",
        "productOrService": "Apple",
        "quantity": 20000,
        "unit": "kg",
        "_id": "667c0f639644befaa9548019" // Unique ID for this buyer
    },
    {
        "name": "Ishwar Morwal",
        "email": "ishwarmorwal1993@gmail.com",
        "mobileNumber": "+919068266652",
        "lookingFor": "In search of a large-scale supplier for fresh apples",
        "locationandDate": "Shimla, Himachal Pradesh 06-09-2024",
        "productOrService": "Apple",
        "quantity": 50,
        "unit": "ton",
        "__v": 0
    },
    {
        "name": "Amit Nagar",
        "email": "nagaramit442@gmail.com",
        "mobileNumber": "+919929872176",
        "lookingFor": "Always seeking large quantities of premium apples for distribution",
        "locationandDate": "Solan, Himachal Pradesh 06-09-2024",
        "productOrService": "Apple",
        "quantity": 20000,
        "unit": "kg",
        "__v": 0
    },
    {
        "_id": "66d96302aefc906f30ab3cbf",
        "name": "Narayan B. Mali",
        "email": "narayanmagre1978.nm@gmail.com",
        "mobileNumber": "+919860315078",
        "lookingFor": "Looking for quality apple suppliers",
        "locationandDate": "Dhule, Maharashtra 06-09-2024",
        "productOrService": "Apple",
        "quantity": 200,
        "unit": "ton",
        "__v": 0
    },
    {
        "_id": "66d96f53aefc906f30ab3cc1",
        "name": "Yogesh",
        "email": "vashisthaji10899@gmail.com",
        "mobileNumber": "+919991951161",
        "lookingFor": "Seeking reliable apple suppliers",
        "locationandDate": "Bhiwani, Haryana 06-09-2024",
        "productOrService": "Apple",
        "quantity": 1000,
        "unit": "ton",
        "__v": 0
    },
    {
        "_id": "66d970cbaefc906f30ab3cf2",
        "name": "Ck12",
        "email": "ck@gmail.com",
        "mobileNumber": "+917005008910",
        "lookingFor": "Searching for apple suppliers",
        "locationandDate": "Jalpaiguri, West Bengal 06-09-2024",
        "productOrService": "Apple",
        "quantity": 10,
        "unit": "ton",
        "__v": 0
    }
    , {
        "_id": "66d97148aefc906f30ab3cf4",
        "name": "Yogesh",
        "email": "vashisthaji10899@gmail.com",
        "mobileNumber": "+919991951161",
        "lookingFor": "Looking for apple suppliers",
        "locationandDate": "Bhiwani, Haryana 06-09-2024",
        "productOrService": "Apple",
        "quantity": 1000,
        "unit": "ton",
        "__v": 0
    }
    ,
    {
        "_id": "66d97712aefc906f30ab3d0d",
        "name": "Srinivas",
        "email": "foodsmorale@gmail.com",
        "mobileNumber": "+918861111313",
        "lookingFor": "Looking for suppliers of Red Fuji apples",
        "locationandDate": "Jammu, Jammu and Kashmir 06-09-2024",
        "productOrService": "Red Fuji Apple",
        "quantity": 100,
        "unit": "ton",
        "__v": 0
    },
    {
        "_id": "66d97801aefc906f30ab3d0f",
        "name": "Narayan B. Mali",
        "email": "narayanmagre1978.nm@gmail.com",
        "mobileNumber": "+919860315078",
        "lookingFor": "Seeking quality apple suppliers",
        "locationandDate": "Dhule, Maharashtra 06-09-2024",
        "productOrService": "Apple",
        "quantity": 200,
        "unit": "ton",
        "__v": 0
    },
    {
        "_id": "66d978eeaefc906f30ab3d11",
        "name": "R.D. Makwana",
        "email": "r.d.makwana123@gmail.com",
        "mobileNumber": "+919428191788",
        "lookingFor": "Searching for Kashmiri apple ber plant suppliers",
        "locationandDate": "Amreli, Gujarat 06-09-2024",
        "productOrService": "Kashmiri Apple Ber Plant",
        "quantity": 300,
        "unit": "pcs",
        "__v": 0
    },

    {
        "_id": "66d971c6aefc906f30ab3cf6",
        "name": "SN Sharma",
        "email": "snsharma@gmail.com",
        "mobileNumber": "+919997165801",
        "lookingFor": "Looking for apple suppliers",
        "locationandDate": "Dehradun, Uttarakhand 06-09-2024",
        "productOrService": "Apple",
        "quantity": 1,
        "unit": "ton",
        "__v": 0
    },
    {
        "_id": "66d97225aefc906f30ab3cf8",
        "name": "Ajay",
        "email": "vbdbooks@gmail.com",
        "mobileNumber": "+919823156567",
        "lookingFor": "Seeking quality custard apple suppliers",
        "locationandDate": "Nagpur, Maharashtra 06-09-2024",
        "productOrService": "Custard Apple",
        "quantity": 2,
        "unit": "ton",
        "__v": 0
    },
    {
        "_id": "66d972c4aefc906f30ab3cfa",
        "name": "Siva Chandra Anil Chuttugulla",
        "email": "sivachandra@gmail.com",
        "mobileNumber": "+919666816817",
        "lookingFor": "Searching for apple suppliers",
        "locationandDate": "East Godavari, Andhra Pradesh 06-09-2024",
        "productOrService": "Apple",
        "quantity": 3,
        "unit": "ton",
        "__v": 0
    }






];

const AppleBuy = () => {
    const { userId } = useAuth();
    const [userIsPremium, setUserIsPremium] = useState(false);
    const [shownNumbers, setShownNumbers] = useState([]);
    const [leadsViewed, setLeadsViewed] = useState(0);

    useEffect(() => {
        if (!userId) return;

        // Load the viewed leads from local storage
        const storedViewedLeads = JSON.parse(localStorage.getItem(`appleViewedLeads_${userId}`)) || [];
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
        localStorage.setItem(`appleViewedLeads_${userId}`, JSON.stringify(updatedShownNumbers));

        const buyer = AppleBuys[index]; // Get the buyer information

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
                        <li><Link to="#">Himachal Pradesh</Link></li>
                        <li><Link to="#">Delhi</Link></li>
                        <li><Link to="#">Maharashtra</Link></li>
                        <li><Link to="#">Karnataka</Link></li>
                        <li><Link to="#">West Bengal</Link></li>
                        <li><Link to="#">Tamil Nadu</Link></li>
                    </ul>

                    <ul style={{ marginTop: '20px' }} className="flt-list cust-scroll">
                        <h3>All Category</h3>
                        <li><Link to="#">Apple</Link></li>
                        <li><Link to="#">Peanuts</Link></li>
                        <li><Link to="#">Rice</Link></li>
                        <li><Link to="#">Wheat</Link></li>
                        <li><Link to="#">Barley</Link></li>
                        <li><Link to="#">Soybean</Link></li>
                    </ul>
                </div>
                <div className="buyers">
                    {AppleBuys.map((buyer, index) => (
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

export default AppleBuy;
