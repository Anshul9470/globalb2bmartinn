import React, { useState, useEffect } from 'react';
import './OnionBuy.css'; // Assuming the same CSS file can be used, otherwise create a new CSS file.
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import Whyglobal from '../Components/Whyglobal';

const WheatBuys = [
    {
        "name": "Dilip",
        "email": "dilip296@hotmail.com",
        "mobileNumber": "+918448102872",
        "lookingFor": "Seeking dependable suppliers of high-quality wheat for bulk needs",
        "locationandDate": "Ghaziabad, Uttar Pradesh 06-09-2024",
        "productOrService": "Wheat",
        "quantity": 4,
        "unit": "ton",
        "__v": 0
    },

    {
        "name": "huzaifa",
        "email": "huzaifa@gmail.com",
        "mobileNumber": "9999945614",
        "lookingFor": "Reselling Purpose Fresh Wheat Required",
        "locationandDate": "delhi, 5/07/2024",
        "productOrService": "wheat",
        "quantity": 100,
        "unit": "kg",
        "_id": "667c0f639644befaa9548015"
    },

    {
        "name": "Amit Kumar Verma",
        "email": "amitkv955@gmail.com",
        "mobileNumber": "8400588577",
        "locationandDate": "28-06-2024",
        "lookingFor": "Urgently Required",
        "productOrService": "wheat",
        "quantity": 100,
        "unit": "Ton",
        "_id": "667c0f639644befaa9548015"
    },
    {
        "name": "Pushkar Kesarwani",
        "email": "pushkarkesarwani2003@gmail.com",
        "mobileNumber": "6306884381",
        "locationandDate": "28-06-2024",
        "lookingFor": "Required For Reselling Purpose",
        "productOrService": "wheat",
        "quantity": 100,
        "unit": "Ton",
        "_id": "667c0fb59644befaa9548017"
    },
    {
        "name": "Rohit Pal",
        "email": "imrohitpal@gmail.com",
        "mobileNumber": "7249864921",
        "locationandDate": "28-06-2024",
        "lookingFor": "Required Long Wheat",
        "productOrService": "wheat",
        "quantity": 1000,
        "unit": "Ton",
        "_id": "667c0fe09644befaa9548019"
    },
    {
        "name": "KisanDeals, User",
        "email": "sashwatbhatt606@gmail.com",
        "mobileNumber": "9997109807",
        "locationandDate": "28-06-2024",
        "lookingFor": "Bulk Purchase",
        "productOrService": "wheat",
        "quantity": 50000,
        "unit": "kg",
        "_id": "667d57e89644befaa9548074"
    },
    {
        "name": "KisanDeals, User",
        "email": "sashwatbhatt606@gmail.com",
        "mobileNumber": "9997109807",
        "locationandDate": "28-06-2024",
        "lookingFor": "Bulk Purchase",
        "productOrService": "wheat",
        "quantity": 50000,
        "unit": "kg",
        "_id": "667d58159644befaa9548076"
    },
    {
        "name": "Anuj Yadav",
        "email": "ay552570@gmail.com",
        "mobileNumber": "7772817129",
        "locationandDate": "28-06-2024",
        "lookingFor": "Wholesale",
        "productOrService": "wheat",
        "quantity": 50,
        "unit": "Ton",
        "_id": "667d58449644befaa9548078"
    },
    {
        "name": "Pavan Bagalkot",
        "email": "pavandbagalkot@gmail.com",
        "mobileNumber": "9902533123",
        "locationandDate": "28-06-2024",
        "lookingFor": "Small Scale Purchase",
        "productOrService": "wheat",
        "quantity": 30,
        "unit": "Ton",
        "_id": "667d58689644befaa954807a"
    },
    {
        "name": "Prashant",
        "email": "prashant.kumar430@outlook.com",
        "mobileNumber": "9198669080",
        "locationandDate": "28-06-2024",
        "lookingFor": "Small Scale Purchase",
        "productOrService": "wheat",
        "quantity": 200,
        "unit": "kg",
        "_id": "667d589a9644befaa954807c"
    },
    {
        "name": "Dhananjay Kumar Dhiraj",
        "email": "dhananjaydhiraj@gmail.com",
        "mobileNumber": "7367024992",
        "locationandDate": "28-06-2024",
        "lookingFor": "Wholesale",
        "productOrService": "wheat",
        "quantity": 10000,
        "unit": "kg",
        "_id": "667d58cf9644befaa954807e"
    },
    {
        "name": "Pardeep Kumar",
        "email": "rajkmr4886@gmail.com",
        "mobileNumber": "9911322633",
        "locationandDate": "28-06-2024",
        "lookingFor": "Wholesale",
        "productOrService": "wheat",
        "quantity": 10,
        "unit": "Ton",
        "_id": "667d58f49644befaa9548080"
    },
    {
        "name": "Abhishek Yadav",
        "email": "abhishekyadav4737@gmail.com",
        "mobileNumber": "9696668878",
        "locationandDate": "28-06-2024",
        "lookingFor": "Resale",
        "productOrService": "wheat",
        "quantity": 50,
        "unit": "Ton",
        "_id": "667d59209644befaa9548082"
    },
    {
        "name": "Vivek",
        "email": "bhartidikshant@gmail.com",
        "mobileNumber": "9939990369",
        "locationandDate": "28-06-2024",
        "lookingFor": "Bulk Purchase",
        "productOrService": "wheat",
        "quantity": 30,
        "unit": "Ton",
        "_id": "667d59489644befaa9548084"
    },
    {
        "name": "Shyam Sunder",
        "email": "sundershyam677@gmail.com",
        "mobileNumber": "8368827954",
        "locationandDate": "28-06-2024",
        "lookingFor": "Large Scale Purchase",
        "productOrService": "wheat",
        "quantity": 600,
        "unit": "Ton",
        "_id": "667d596b9644befaa9548086"
    },
    {
        "name": "Yuvraj Singh Naruka",
        "email": "yuvrajnaruka4@gmail.com",
        "mobileNumber": "9783514436",
        "locationandDate": "28-06-2024",
        "lookingFor": "Wholesale",
        "productOrService": "wheat",
        "quantity": 10000,
        "unit": "kg",
        "_id": "667d59869644befaa9548088"
    },
    {
        "name": "Prince Sharma",
        "email": "princepandit698@gmail.com",
        "mobileNumber": "7534011794",
        "locationandDate": "28-06-2024",
        "lookingFor": "Small Scale Purchase",
        "productOrService": "wheat",
        "quantity": 500,
        "unit": "kg",
        "_id": "667d59b39644befaa954808a"
    },
    {
        "name": "Deepak Mishra",
        "email": "gautamdeepak937@gmail.com",
        "mobileNumber": "8009771117",
        "locationandDate": "28-06-2024",
        "lookingFor": "Small Scale Purchase",
        "productOrService": "wheat",
        "quantity": 100,
        "unit": "kg",
        "_id": "667d59d39644befaa954808c"
    },
    {
        "name": "Satyendra Sharma",
        "email": "satyendra.kumar19855@gmail.com",
        "mobileNumber": "8839220425",
        "locationandDate": "28-06-2024",
        "lookingFor": "Small Scale Purchase",
        "productOrService": "wheat",
        "quantity": 100,
        "unit": "kg",
        "_id": "667d59f39644befaa954808e"
    },
    {
        "name": "Aditi Jaiswal",
        "email": "aditijaiswal0506@gmail.com",
        "mobileNumber": "6205629246",
        "locationandDate": "28-06-2024",
        "lookingFor": "Small Scale Purchase",
        "productOrService": "wheat",
        "quantity": 100,
        "unit": "kg",
        "_id": "667d5a299644befaa9548090"
    },
    {
        "name": "Omraj Traders",
        "email": "omsuslade51@gmail.com",
        "mobileNumber": "7249274651",
        "locationandDate": "28-06-2024",
        "lookingFor": "Wholesale",
        "productOrService": "wheat",
        "quantity": 20,
        "unit": "Ton",
        "_id": "667d5a4a9644befaa9548092"
    },

    {
        name: "Amit Kumar verma",
        email: "amitkv955@gmail.com",
        mobileNumber: "8400588577",
        locationandDate: "26-06-2024",
        lookingFor: " Urgently Required",
        productOrService: "wheat",
        quantity: 100,
        unit: "Ton",
        _id: "667c0f639644befaa9548015"
    },
    {
        name: "Pushkar Kesarwani",
        email: "pushkarkesarwani2003@gmail.com",
        mobileNumber: "6306884381",
        lookingFor: " Required For Reselling Purpose",
        productOrService: "wheat",
        locationandDate: "27-06-2024",
        quantity: 100,
        unit: "Ton",
        _id: "667c0fb59644befaa9548017"
    },
    {
        name: "Rohit pal",
        email: "imrohitpal@gmail.com",
        mobileNumber: "7249864921",
        lookingFor: " Required Long Wheat",
        productOrService: "wheat",
        locationandDate: "25-06-2024",
        quantity: 1000,
        unit: "ton",
        _id: "667c0fe09644befaa9548019"
    },
    {
        name: "IMRAN KHAN",
        email: "imranklonar@gmail.com",
        mobileNumber: "8484085280",
        lookingFor: " Required Urgently",
        productOrService: "wheat",
        locationandDate: "28-06-2024",
        quantity: 1000,
        unit: "kg",
        _id: "667c10079644befaa954801b"
    },

    {
        name: "Hakim Mohammed Shaikh",
        email: "hakim.shaikh@yahoo.com",
        mobileNumber: "8879658986",
        lookingFor: "Looking For Wheat",
        productOrService: "wheat",
        locationandDate: "26-06-2024",
        quantity: 1,
        unit: "Ton",
        _id: "667c10389644befaa954801d"
    },
    {
        name: "Ajaysingh Tak",
        email: "ajaysingh1384@gmail.com",
        mobileNumber: "8378035473",
        lookingFor: " Required Fresh Wheat",
        productOrService: "wheat",
        locationandDate: "25-06-2024",
        quantity: 1,
        unit: "ton",
        _id: "667c10639644befaa954801f"
    },
    {
        name: "Krishna",
        email: "udayrinku35@gmail.com",
        mobileNumber: "7863090977",
        lookingFor: " Required Urgently",
        locationandDate: "26-06-2024",
        productOrService: "wheat",
        quantity: 200,
        unit: "kg",
        _id: "667c10639644befaa954801f"
    }
];

const WheatBuy = () => {
    const { userId } = useAuth();
    const [userIsPremium, setUserIsPremium] = useState(false);
    const [shownNumbers, setShownNumbers] = useState([]);
    const [leadsViewed, setLeadsViewed] = useState(0);

    useEffect(() => {
        if (!userId) return;

        // Load the viewed leads from local storage
        const storedViewedLeads = JSON.parse(localStorage.getItem(`wheatViewedLeads_${userId}`)) || [];
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
        localStorage.setItem(`wheatViewedLeads_${userId}`, JSON.stringify(updatedShownNumbers));

        const buyer = WheatBuys[index]; // Get the buyer information

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
                        <li><Link to="#">Fresh Wheat</Link></li>
                        <li><Link to="#">Red Wheat</Link></li>
                        <li><Link to="#">Yellow Wheat</Link></li>
                        <li><Link to="#">Green Wheat</Link></li>
                    </ul>
                </div>
                <div className="buyers">
                    {WheatBuys.map((buyer, index) => (
                        <div key={index} className="buyer-card">
                            <h2 style={{ color: 'red' }}> {buyer.lookingFor}</h2>
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

export default WheatBuy;
