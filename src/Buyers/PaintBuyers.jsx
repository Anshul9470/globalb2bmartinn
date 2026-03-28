import React, { useState, useEffect } from "react";
import "./OnionBuy.css"; // Assuming a new CSS file for paint buyer styles
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Whyglobal from "../Components/Whyglobal";
import BuyerSide from "./BuyerSidebuyer";

const PaintBuyers = [
  {
    name: "Amit Patel",
    email: "amit.patel@gmail.com",
    mobileNumber: "9999888777",
    locationandDate: "Delhi, 19-11-2024",
    lookingFor:
      "Looking for bulk purchase of industrial paint for construction projects.",
    productOrService: "Industrial Paint",
    quantity: 500,
    unit: "liters",
    _id: "unique_id_for_industrial_paint_buyer_1",
  },
  {
    name: "Sunil Sharma",
    email: "sunil.sharma@gmail.com",
    mobileNumber: "8888776655",
    lookingFor:
      "Need high-quality exterior wall paint for residential buildings.",
    productOrService: "Exterior Wall Paint",
    locationandDate: "Mumbai, 17-11-2024",
    quantity: 200,
    unit: "liters",
  },
  {
    name: "Priya Verma",
    email: "priya.verma@gmail.com",
    mobileNumber: "7777666555",
    lookingFor: "Looking for eco-friendly paint for office spaces.",
    productOrService: "Eco-friendly Paint",
    locationandDate: "Bangalore, 15-11-2024",
    quantity: 100,
    unit: "liters",
  },
  {
    name: "Ravi Mehta",
    email: "ravi.mehta@gmail.com",
    mobileNumber: "6666554433",
    lookingFor: "Need automotive paint for vehicle body shops.",
    productOrService: "Automotive Paint",
    locationandDate: "Chennai, 14-11-2024",
    quantity: 300,
    unit: "liters",
  },
  {
    name: "Neha Agarwal",
    email: "neha.agarwal@gmail.com",
    mobileNumber: "5555443322",
    lookingFor: "Looking for premium interior paint for luxury apartments.",
    productOrService: "Interior Paint",
    locationandDate: "Kolkata, 10-11-2024",
    quantity: 150,
    unit: "liters",
  },
];

const PaintBuy = () => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [leadsViewed, setLeadsViewed] = useState(0);

  useEffect(() => {
    if (!userId) return;

    // Load the viewed leads from local storage
    const storedViewedLeads =
      JSON.parse(localStorage.getItem(`paintViewedLeads_${userId}`)) || [];
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
      `paintViewedLeads_${userId}`,
      JSON.stringify(updatedShownNumbers)
    );

    const buyer = PaintBuyers[index]; // Get the buyer information

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
              <Link to="#">Industrial Paint</Link>
            </li>
            <li>
              <Link to="#">Exterior Wall Paint</Link>
            </li>
            <li>
              <Link to="#">Eco-friendly Paint</Link>
            </li>
            <li>
              <Link to="#">Automotive Paint</Link>
            </li>
            <li>
              <Link to="#">Interior Paint</Link>
            </li>
          </ul>
        </div>
        <div className="buyers">
          {PaintBuyers.map((buyer, index) => (
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

export default PaintBuy;
