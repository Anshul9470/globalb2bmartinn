import React, { useState, useEffect } from "react";
import "./OnionBuy.css"; // Assuming a CSS file for door lock buyer styles
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Whyglobal from "../Components/Whyglobal";
import BuyerSide from "./BuyerSidebuyer";

const DoorLockBuyers = [
  {
    name: "Rakesh Mehta",
    email: "rakesh.mehta@gmail.com",
    mobileNumber: "9876543210",
    locationandDate: "Delhi, 21-11-2024",
    lookingFor: "Looking for bulk purchase of smart locks for apartments.",
    productOrService: "Smart Door Locks",
    quantity: 500,
    unit: "pieces",
    _id: "unique_id_for_door_lock_buyer_1",
  },
  {
    name: "Sanjay Kumar",
    email: "sanjay.kumar@gmail.com",
    mobileNumber: "8765432109",
    locationandDate: "Mumbai, 20-11-2024",
    lookingFor: "Need high-security locks for a commercial complex.",
    productOrService: "High-Security Door Locks",
    quantity: 300,
    unit: "pieces",
  },
  {
    name: "Neha Verma",
    email: "neha.verma@gmail.com",
    mobileNumber: "7654321098",
    locationandDate: "Bangalore, 19-11-2024",
    lookingFor: "Interested in purchasing digital locks for a housing project.",
    productOrService: "Digital Door Locks",
    quantity: 200,
    unit: "pieces",
  },
  {
    name: "Arun Tiwari",
    email: "arun.tiwari@gmail.com",
    mobileNumber: "6543210987",
    locationandDate: "Pune, 18-11-2024",
    lookingFor: "Need mechanical door locks for a hotel renovation project.",
    productOrService: "Mechanical Door Locks",
    quantity: 800,
    unit: "pieces",
  },
  {
    name: "Priyanka Sharma",
    email: "priyanka.sharma@gmail.com",
    mobileNumber: "5432109876",
    locationandDate: "Chennai, 17-11-2024",
    lookingFor: "Bulk order for electronic locks for an office building.",
    productOrService: "Electronic Door Locks",
    quantity: 400,
    unit: "pieces",
  },
];

const DoorLockBuy = () => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [leadsViewed, setLeadsViewed] = useState(0);

  useEffect(() => {
    if (!userId) return;

    const storedViewedLeads =
      JSON.parse(localStorage.getItem(`doorLockViewedLeads_${userId}`)) || [];
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
      `doorLockViewedLeads_${userId}`,
      JSON.stringify(updatedShownNumbers)
    );

    const buyer = DoorLockBuyers[index];

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
          <li
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "5px 30px",
            }}
            className="breadcrumb-item"
          >
            <Link to={"/"}>Home</Link>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "5px -25px",
            }}
          >
            /
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "5px 30px",
            }}
            className="breadcrumb-item active"
          >
            Fresh Leads
          </li>
        </ol>
      </div>
      <div className="containersx">
        <div style={{ width: "200px", padding: "10px" }} className="browsers">
          <h3 style={{ marginTop: "30px" }}>Browse by State</h3>
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
            <li>
              <Link to="#">Karnataka</Link>
            </li>
            <li>
              <Link to="#">Uttar Pradesh</Link>
            </li>
          </ul>

          <ul style={{ marginTop: "20px" }} className="flt-list cust-scroll">
            <h3>All Category</h3>
            <li>
              <Link to="#">Smart Door Locks</Link>
            </li>
            <li>
              <Link to="#">High-Security Locks</Link>
            </li>
            <li>
              <Link to="#">Digital Locks</Link>
            </li>
            <li>
              <Link to="#">Mechanical Locks</Link>
            </li>
            <li>
              <Link to="#">Electronic Locks</Link>
            </li>
          </ul>
        </div>
        <div className="buyers">
          {DoorLockBuyers.map((buyer, index) => (
            <div key={index} className="buyer-card">
              <h2 style={{ color: "blue" }}>{buyer.lookingFor}</h2>
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
                      color: "green",
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
      <Whyglobal />
    </>
  );
};

export default DoorLockBuy;
