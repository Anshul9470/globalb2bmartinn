import React, { useState, useEffect } from "react";
import "./OnionBuy.css"; // Reuse or create a new CSS file as needed
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Whyglobal from "../Components/Whyglobal";
import BuyerSide from "./BuyerSidebuyer";

// Sample random data for coco products buyers
const CocoBuys = [
  {
    _id: "12345abcd67890coco",
    name: "Anil Kumar",
    email: "anilkumar@gmail.com",
    mobileNumber: "9123456789",
    lookingFor: "Fresh Coconuts",
    locationandDate: "Chennai 12-08-2024",
    productOrService: "Fresh Coconuts",
    quantity: 200,
    unit: "pcs",
  },
  {
    _id: "67890abcd12345coco",
    name: "Sita Rao",
    email: "sitarrao@gmail.com",
    mobileNumber: "9812345670",
    lookingFor: "Coconut Shells",
    locationandDate: "Mumbai 13-08-2024",
    productOrService: "Coconut Shells",
    quantity: 500,
    unit: "kg",
  },
  {
    _id: "23456abcd78901coco",
    name: "Ramesh Gupta",
    email: "rameshgupta@gmail.com",
    mobileNumber: "9345678901",
    lookingFor: "Dried Coconuts",
    locationandDate: "Hyderabad 15-08-2024",
    productOrService: "Dried Coconuts",
    quantity: 100,
    unit: "pcs",
  },
  {
    _id: "78901abcd23456coco",
    name: "Kavita Singh",
    email: "kavitasingh@gmail.com",
    mobileNumber: "9734567890",
    lookingFor: "Coconut Water",
    locationandDate: "Bangalore 17-08-2024",
    productOrService: "Coconut Water",
    quantity: 1000,
    unit: "liters",
  },
  {
    _id: "34567abcd89012coco",
    name: "Ravi Kumar",
    email: "ravikumar@gmail.com",
    mobileNumber: "9654321098",
    lookingFor: "Coconut Fiber",
    locationandDate: "Delhi 18-08-2024",
    productOrService: "Coconut Fiber",
    quantity: 200,
    unit: "kg",
  },
  {
    _id: "67001b299f2cecbc7cc11450",
    name: "Amit",
    email: "amit.kumar@gmail.com",
    mobileNumber: "9876543211",
    lookingFor: "Bulk Purchase: High-Quality Coco Powder",
    locationandDate: "Mumbai, 05-11-2024",
    productOrService: "Coco Supplier",
    quantity: 1000,
    unit: "kg",
  },
  {
    _id: "67001b299f2cecbc7cc11451",
    name: "Neha",
    email: "neha.patel@gmail.com",
    mobileNumber: "9876543212",
    lookingFor: "Large Order: Organic Coco Beans",
    locationandDate: "Chennai, 05-11-2024",
    productOrService: "Coco Supplier",
    quantity: 3000,
    unit: "kg",
  },
  {
    _id: "67001b299f2cecbc7cc11452",
    name: "Rajesh",
    email: "rajesh.malhotra@gmail.com",
    mobileNumber: "9876543213",
    lookingFor: "Bulk Coco Husk Fibers Needed",
    locationandDate: "Kolkata, 04-11-2024",
    productOrService: "Coco Supplier",
    quantity: 2000,
    unit: "kg",
  },
  {
    _id: "67001b299f2cecbc7cc11453",
    name: "Meera",
    email: "meera.sharma@gmail.com",
    mobileNumber: "9876543214",
    lookingFor: "Coco Coir for Agricultural Use",
    locationandDate: "Pune, 03-11-2024",
    productOrService: "Coco Supplier",
    quantity: 500,
    unit: "kg",
  },
  {
    _id: "67001b299f2cecbc7cc11454",
    name: "Karan",
    email: "karan.singh@gmail.com",
    mobileNumber: "9876543215",
    lookingFor: "Bulk Coco Chips",
    locationandDate: "Delhi, 03-11-2024",
    productOrService: "Coco Supplier",
    quantity: 800,
    unit: "kg",
  },
];

const CocoBuy = () => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [leadsViewed, setLeadsViewed] = useState(0);

  useEffect(() => {
    if (!userId) return;

    const storedViewedLeads =
      JSON.parse(localStorage.getItem(`cocoViewedLeads_${userId}`)) || [];
    setShownNumbers(storedViewedLeads);

    fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/getUserWithPremiumStatus/${userId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setUserIsPremium(data.isPremium);
        setLeadsViewed(data.leadsViewed);
        console.log("Premium Status:", data.isPremium);
      })
      .catch((error) => {
        console.error("Error fetching user information:", error);
      });
  }, [userId]);

  const toggleNumber = async (index) => {
    if (!userIsPremium) return;

    if (leadsViewed >= 25) {
      alert("You have reached the limit of 25 leads viewed per month.");
      return;
    }

    if (shownNumbers.includes(index)) return;

    const updatedShownNumbers = [...shownNumbers, index];
    setShownNumbers(updatedShownNumbers);

    localStorage.setItem(
      `cocoViewedLeads_${userId}`,
      JSON.stringify(updatedShownNumbers)
    );

    const buyer = CocoBuys[index];

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}/incrementLeadsViewed/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            buyerName: buyer.name,
            mobileNo: buyer.mobileNumber,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setLeadsViewed(data.leadsViewed);
      } else {
        const errorData = await response.json();
        console.error("Error incrementing leads viewed:", errorData.error);
      }
    } catch (error) {
      console.error("Error incrementing leads viewed:", error.message);
    }
  };

  return (
    <>
      <div className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to={"/"}>Home</Link>
          </li>
          <li>/</li>
          <li className="breadcrumb-item active">Fresh Leads</li>
        </ol>
      </div>
      <div className="containersx">
        <div className="browsers">
          <h3>Browse by State</h3>
          <ul className="flt-list cust-scroll" id="state-lists">
            <li>
              <Link to="#">All India</Link>
            </li>
            <li>
              <Link to="#">Delhi</Link>
            </li>
            <li>
              <Link to="#">Maharashtra</Link>
            </li>
          </ul>
          <h3>All Category</h3>
          <ul className="flt-list cust-scroll">
            <li>
              <Link to="#">Coco Powder</Link>
            </li>
            <li>
              <Link to="#">Coco Beans</Link>
            </li>
          </ul>
        </div>
        <div className="buyers">
          {CocoBuys.map((buyer, index) => (
            <div key={index} className="buyer-card">
              <h2 style={{ color: "red" }}>{buyer.lookingFor}</h2>
              <p>
                <strong>Buyer Name:</strong> {buyer.name}
              </p>
              <p>
                <strong>Quantity:</strong> {buyer.quantity} {buyer.unit}
              </p>
              <p>
                <strong>Location & Date:</strong> {buyer.locationandDate}
              </p>
              <p>
                <strong>Mobile No.:</strong>{" "}
                {userIsPremium
                  ? shownNumbers.includes(index)
                    ? buyer.mobileNumber
                    : "********"
                  : "********"}
              </p>
              <div style={{ display: "flex", gap: "10px" }}>
                {userIsPremium && (
                  <button
                    className="detail-btn"
                    style={{
                      padding: "5px 10px",
                      background: "#f7f1f1",
                      color: "orange",
                      borderRadius: "3px",
                      cursor: "pointer",
                    }}
                    onClick={() => toggleNumber(index)}
                  >
                    Click to see
                  </button>
                )}
              </div>
              <div className="btns-imp">
                <Link to={"/login"}>
                  <button className="detailing-btn">View More</button>
                </Link>
                <Link to={"/register-Company"}>
                  <button className="regis-btn">Register Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <BuyerSide />
        <Whyglobal />
      </div>
    </>
  );
};

export default CocoBuy;
