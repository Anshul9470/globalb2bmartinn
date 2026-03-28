import React, { useState, useEffect } from "react";
import "./OnionBuy.css"; // Assuming you have a separate CSS file for the TerracottaBuyer component
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Whyglobal from "../Components/Whyglobal";
import BuyerSide from "./BuyerSidebuyer";

const TerracottaBuyers = [
  {
    _id: "12345abcd67890terra1",
    name: "Meera Jain",
    email: "meerajain@gmail.com",
    mobileNumber: "9123456789",
    lookingFor: "Terracotta Pots",
    locationandDate: "Delhi 08-11-2024",
    productOrService: "Terracotta Pots",
    quantity: 100,
    unit: "pcs",
  },
  {
    _id: "12345abcd67890terra2",
    name: "Rajesh Sharma",
    email: "rajesh.sharma@example.com",
    mobileNumber: "9876543210",
    lookingFor: "Terracotta Tiles",
    locationandDate: "Mumbai 09-11-2024",
    productOrService: "Terracotta Tiles",
    quantity: 200,
    unit: "pcs",
  },
  {
    _id: "12345abcd67890terra3",
    name: "Aarti Patel",
    email: "aartipatel@gmail.com",
    mobileNumber: "9988776655",
    lookingFor: "Terracotta Sculptures",
    locationandDate: "Kolkata 10-11-2024",
    productOrService: "Terracotta Sculptures",
    quantity: 50,
    unit: "pcs",
  },
  {
    _id: "12345abcd67890terra4",
    name: "Vikram Singh",
    email: "vikram.singh@example.com",
    mobileNumber: "9333445566",
    lookingFor: "Terracotta Vases",
    locationandDate: "Chennai 11-11-2024",
    productOrService: "Terracotta Vases",
    quantity: 150,
    unit: "pcs",
  },
  {
    _id: "12345abcd67890terra5",
    name: "Anjali Gupta",
    email: "anjali.gupta@example.com",
    mobileNumber: "9444332211",
    lookingFor: "Terracotta Flower Pots",
    locationandDate: "Bangalore 12-11-2024",
    productOrService: "Terracotta Flower Pots",
    quantity: 300,
    unit: "pcs",
  },
];

const TerracottaBuy = () => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [leadsViewed, setLeadsViewed] = useState(0);

  useEffect(() => {
    if (!userId) return;

    // Load the viewed leads from local storage
    const storedViewedLeads =
      JSON.parse(localStorage.getItem(`terracottaViewedLeads_${userId}`)) || [];
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
      `terracottaViewedLeads_${userId}`,
      JSON.stringify(updatedShownNumbers)
    );

    const buyer = TerracottaBuyers[index]; // Get the buyer information

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
              <Link to="#">West Bengal</Link>
            </li>
            <li>
              <Link to="#">Tamil Nadu</Link>
            </li>
          </ul>

          <ul style={{ marginTop: "20px" }} className="flt-list cust-scroll">
            <h3>All Category</h3>
            <li>
              <Link to="#">Terracotta Pots</Link>
            </li>
            <li>
              <Link to="#">Terracotta Tiles</Link>
            </li>
            <li>
              <Link to="#">Terracotta Sculptures</Link>
            </li>
            <li>
              <Link to="#">Terracotta Vases</Link>
            </li>
            <li>
              <Link to="#">Terracotta Flower Pots</Link>
            </li>
          </ul>
        </div>
        <div className="buyers">
          {TerracottaBuyers.map((buyer, index) => (
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
      <Whyglobal />
    </>
  );
};

export default TerracottaBuy;
