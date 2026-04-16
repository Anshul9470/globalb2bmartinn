import React, { useState, useEffect } from "react";
import "./OnionBuy.css"; // Assuming a new CSS file for snacks food buyer styles
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Whyglobal from "../Components/Whyglobal";
import BuyerSide from "./BuyerSidebuyer";

const SnacksFoodBuyers = [
  {
    name: "Ravi Kumar",
    email: "ravi.kumar@gmail.com",
    mobileNumber: "9888776655",
    locationandDate: "Hyderabad, 21-11-2024",
    lookingFor: "Looking to purchase bulk salted snacks for retail.",
    productOrService: "Salted Snacks",
    quantity: 500,
    unit: "kg",
    _id: "unique_id_for_salted_snacks_buyer_1",
  },
  {
    name: "Anjali Patel",
    email: "anjali.patel@gmail.com",
    mobileNumber: "8877665544",
    lookingFor: "Need healthy snacks for supermarket chain.",
    productOrService: "Healthy Snacks",
    locationandDate: "Mumbai, 19-11-2024",
    quantity: 300,
    unit: "kg",
  },
  {
    name: "Vikram Singh",
    email: "vikram.singh@gmail.com",
    mobileNumber: "7766554433",
    lookingFor: "Purchasing assorted flavored snacks for hospitality industry.",
    productOrService: "Assorted Flavored Snacks",
    locationandDate: "Delhi, 18-11-2024",
    quantity: 400,
    unit: "kg",
  },
  {
    name: "Meera Joshi",
    email: "meera.joshi@gmail.com",
    mobileNumber: "6655443322",
    lookingFor: "Looking for organic snacks for health-conscious customers.",
    productOrService: "Organic Snacks",
    locationandDate: "Bangalore, 17-11-2024",
    quantity: 600,
    unit: "kg",
  },
  {
    name: "Amit Sharma",
    email: "amit.sharma@gmail.com",
    mobileNumber: "5544332211",
    lookingFor: "Bulk purchase of packaged snacks for supermarket chain.",
    productOrService: "Packaged Snacks",
    locationandDate: "Chennai, 16-11-2024",
    quantity: 350,
    unit: "kg",
  },
];

const SnacksFoodBuy = () => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [leadsViewed, setLeadsViewed] = useState(0);

  useEffect(() => {
    if (!userId) return;

    // Load the viewed leads from local storage
    const storedViewedLeads =
      JSON.parse(localStorage.getItem(`snacksViewedLeads_${userId}`)) || [];
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
      `snacksViewedLeads_${userId}`,
      JSON.stringify(updatedShownNumbers)
    );

    const buyer = SnacksFoodBuyers[index]; // Get the buyer information

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
              <Link to="#">Salted Snacks</Link>
            </li>
            <li>
              <Link to="#">Healthy Snacks</Link>
            </li>
            <li>
              <Link to="#">Assorted Flavored Snacks</Link>
            </li>
            <li>
              <Link to="#">Organic Snacks</Link>
            </li>
            <li>
              <Link to="#">Packaged Snacks</Link>
            </li>
          </ul>
        </div>
        <div className="buyers">
          {SnacksFoodBuyers.map((buyer, index) => (
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

export default SnacksFoodBuy;
