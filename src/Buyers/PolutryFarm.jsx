import React, { useState, useEffect } from "react";
import "./OnionBuy.css"; // Assuming a new CSS file for poultry farm styles
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Whyglobal from "../Components/Whyglobal";
import BuyerSide from "./BuyerSidebuyer";

const PoultryFarmBuys = [
  {
    name: "Suresh Kumar",
    email: "sureshkumar@gmail.com",
    mobileNumber: "9123456789",
    locationandDate: "Lucknow, 17-11-2024",
    lookingFor: "Looking for bulk chicken suppliers!",
    productOrService: "Chicken",
    quantity: 1000,
    unit: "kg",
    _id: "unique_id_for_chicken_buyer",
  },
  {
    name: "Anil Sharma",
    email: "anilsharma@gmail.com",
    mobileNumber: "9812345678",
    lookingFor: "Fresh poultry chicken required at the best price",
    productOrService: "Chicken",
    locationandDate: "Agra, 18-11-2024",
    quantity: 1500,
    unit: "kg",
  },
  {
    name: "Rajesh Gupta",
    email: "rajeshgupta@gmail.com",
    mobileNumber: "9654321098",
    lookingFor: "Need bulk chicken for wholesale distribution",
    productOrService: "Chicken",
    locationandDate: "Kanpur, 18-11-2024",
    quantity: 2000,
    unit: "kg",
  },
  {
    name: "Deepak Yadav",
    email: "deepakyadav@gmail.com",
    mobileNumber: "9876543210",
    lookingFor: "Premium quality chicken required for restaurant supply",
    productOrService: "Chicken",
    locationandDate: "Varanasi, 19-11-2024",
    quantity: 500,
    unit: "kg",
  },
  {
    name: "Vijay Kumar",
    email: "vijaykumar@gmail.com",
    mobileNumber: "9988776655",
    lookingFor: "Bulk chicken needed for processing plant",
    productOrService: "Chicken",
    locationandDate: "Delhi, 19-11-2024",
    quantity: 3000,
    unit: "kg",
  },
];

const PoultryFarmBuy = () => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [leadsViewed, setLeadsViewed] = useState(0);

  useEffect(() => {
    if (!userId) return;

    // Load the viewed leads from local storage
    const storedViewedLeads =
      JSON.parse(localStorage.getItem(`poultryFarmViewedLeads_${userId}`)) ||
      [];
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
      `poultryFarmViewedLeads_${userId}`,
      JSON.stringify(updatedShownNumbers)
    );

    const buyer = PoultryFarmBuys[index]; // Get the buyer information

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
              <Link to="#">3D Ceramic Floor Tiles</Link>
            </li>
            <li>
              <Link to="#">Eye Drops</Link>
            </li>
            <li>
              <Link to="#">Maize</Link>
            </li>
            <li>
              <Link to="#">Rice</Link>
            </li>
            <li>
              <Link to="#">Wheat</Link>
            </li>
            <li>
              <Link to="#">Barley</Link>
            </li>
            <li>
              <Link to="#">Soybean</Link>
            </li>
          </ul>
        </div>
        <div className="buyers">
          {PoultryFarmBuys.map((buyer, index) => (
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

export default PoultryFarmBuy;
