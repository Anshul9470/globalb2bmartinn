import React, { useState, useEffect } from "react";
import "./OnionBuy.css"; // Assuming a new CSS file for detergent buyer styles
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Whyglobal from "../Components/Whyglobal";
import BuyerSide from "./BuyerSidebuyer";

const DetergentBuyers = [
  {
    name: "Manoj Agarwal",
    email: "manoj.agarwal@gmail.com",
    mobileNumber: "9856473829",
    locationandDate: "Lucknow, 21-11-2024",
    lookingFor: "Looking to purchase bulk detergent powder for wholesale.",
    productOrService: "Detergent Powder",
    quantity: 1000,
    unit: "kg",
    _id: "unique_id_for_detergent_buyer_1",
  },
  {
    name: "Priya Sharma",
    email: "priya.sharma@gmail.com",
    mobileNumber: "9764532104",
    lookingFor: "Need liquid detergent for retail stores.",
    productOrService: "Liquid Detergent",
    locationandDate: "Pune, 20-11-2024",
    quantity: 500,
    unit: "liters",
  },
  {
    name: "Rajesh Verma",
    email: "rajesh.verma@gmail.com",
    mobileNumber: "9856741230",
    lookingFor: "Interested in eco-friendly detergent for supermarket chain.",
    productOrService: "Eco-Friendly Detergent",
    locationandDate: "Delhi, 19-11-2024",
    quantity: 800,
    unit: "kg",
  },
  {
    name: "Kavita Gupta",
    email: "kavita.gupta@gmail.com",
    mobileNumber: "9874563210",
    lookingFor: "Bulk purchase of detergent cakes for rural distribution.",
    productOrService: "Detergent Cakes",
    locationandDate: "Jaipur, 18-11-2024",
    quantity: 2000,
    unit: "pieces",
  },
  {
    name: "Amit Khanna",
    email: "amit.khanna@gmail.com",
    mobileNumber: "9897456123",
    lookingFor: "Need premium detergent pods for e-commerce platform.",
    productOrService: "Detergent Pods",
    locationandDate: "Mumbai, 19-11-2024",
    quantity: 300,
    unit: "packs",
  },
];

const DetergentBuy = () => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [leadsViewed, setLeadsViewed] = useState(0);

  useEffect(() => {
    if (!userId) return;

    const storedViewedLeads =
      JSON.parse(localStorage.getItem(`detergentViewedLeads_${userId}`)) || [];
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
      `detergentViewedLeads_${userId}`,
      JSON.stringify(updatedShownNumbers)
    );

    const buyer = DetergentBuyers[index];

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
              <Link to="#">Detergent Powder</Link>
            </li>
            <li>
              <Link to="#">Liquid Detergent</Link>
            </li>
            <li>
              <Link to="#">Eco-Friendly Detergent</Link>
            </li>
            <li>
              <Link to="#">Detergent Cakes</Link>
            </li>
            <li>
              <Link to="#">Detergent Pods</Link>
            </li>
          </ul>
        </div>
        <div className="buyers">
          {DetergentBuyers.map((buyer, index) => (
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

export default DetergentBuy;
