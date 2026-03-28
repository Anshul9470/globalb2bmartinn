import React, { useState, useEffect } from "react";
import "./OnionBuy.css"; // Add your CSS for styling
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Whyglobal from "../Components/Whyglobal";
import BuyerSide from "./BuyerSidebuyer";

// Sample random data for granules buyers
const GranulesBuys = [
  {
    _id: "66901a299f2cecbc7cc12350",
    name: "Ravi Kumar",
    email: "ravi.kumar@gmail.com",
    mobileNumber: "9876543210",
    lookingFor: "Bulk Purchase: High Quality Pharmaceutical Granules",
    locationandDate: "Mumbai, 07-11-2024",
    productOrService: "Granules Supplier",
    quantity: 500,
    unit: "kg",
  },
  {
    _id: "66901a299f2cecbc7cc12351",
    name: "Priya Sharma",
    email: "priya.sharma@gmail.com",
    mobileNumber: "9998765432",
    lookingFor: "Bulk Purchase: Granules for Chemical Industry",
    locationandDate: "Delhi, 06-11-2024",
    productOrService: "Granules Supplier",
    quantity: 1000,
    unit: "kg",
  },
  {
    _id: "66901a299f2cecbc7cc12352",
    name: "Amit Verma",
    email: "amit.verma@gmail.com",
    mobileNumber: "9812345678",
    lookingFor: "Bulk Purchase: Plastic Granules for Manufacturing",
    locationandDate: "Kolkata, 06-11-2024",
    productOrService: "Granules Supplier",
    quantity: 1500,
    unit: "kg",
  },
  {
    _id: "66901a299f2cecbc7cc12353",
    name: "Anjali Singh",
    email: "anjali.singh@gmail.com",
    mobileNumber: "9734567890",
    lookingFor: "Bulk Purchase: Granules for Food Processing",
    locationandDate: "Bangalore, 05-11-2024",
    productOrService: "Granules Supplier",
    quantity: 2000,
    unit: "kg",
  },
  {
    _id: "66901a299f2cecbc7cc12354",
    name: "Neha Gupta",
    email: "neha.gupta@gmail.com",
    mobileNumber: "9701234567",
    lookingFor: "Bulk Purchase: Granules for Animal Feed",
    locationandDate: "Chennai, 05-11-2024",
    productOrService: "Granules Supplier",
    quantity: 1000,
    unit: "kg",
  },
  {
    _id: "66901a299f2cecbc7cc12355",
    name: "Ravi Jain",
    email: "ravi.jain@gmail.com",
    mobileNumber: "9612345678",
    lookingFor: "Bulk Purchase: Granules for Textile Industry",
    locationandDate: "Hyderabad, 04-11-2024",
    productOrService: "Granules Supplier",
    quantity: 1200,
    unit: "kg",
  },
];

const GranulesBuy = () => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [leadsViewed, setLeadsViewed] = useState(0);

  useEffect(() => {
    if (!userId) return;

    // Load the viewed leads from local storage
    const storedViewedLeads =
      JSON.parse(localStorage.getItem(`granulesViewedLeads_${userId}`)) || [];
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
    if (!userIsPremium) return; // Only premium users can see numbers

    if (leadsViewed >= 25) {
      alert("You have reached the limit of 25 leads viewed per month.");
      return;
    }

    if (shownNumbers.includes(index)) return; // If already shown, do nothing

    const updatedShownNumbers = [...shownNumbers, index];
    setShownNumbers(updatedShownNumbers);

    // Update local storage
    localStorage.setItem(
      `granulesViewedLeads_${userId}`,
      JSON.stringify(updatedShownNumbers)
    );

    const buyer = GranulesBuys[index]; // Get the buyer information

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
          <li className="breadcrumb-item active">Granules Leads</li>
        </ol>
      </div>
      <div className="containersx">
        <div style={{ width: "200px", padding: "10px" }} className="browsers">
          <h3 style={{ marginTop: "30px" }}>Browse by Industry</h3>
          <ul className="flt-list cust-scroll" id="industry-lists">
            <li>
              <Link to="#">All Industries</Link>
            </li>
            <li>
              <Link to="#">Pharmaceutical</Link>
            </li>
            <li>
              <Link to="#">Chemical</Link>
            </li>
            <li>
              <Link to="#">Textile</Link>
            </li>
            <li>
              <Link to="#">Animal Feed</Link>
            </li>
            <li>
              <Link to="#">Food Processing</Link>
            </li>
          </ul>
        </div>
        <div className="buyers">
          {GranulesBuys.map((buyer, index) => (
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
      </div>
    </>
  );
};

export default GranulesBuy;
