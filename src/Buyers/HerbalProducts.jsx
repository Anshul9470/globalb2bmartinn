import React, { useState, useEffect } from "react";
import "./OnionBuy.css"; // Assuming a new CSS file for herbal product buyer styles
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Whyglobal from "../Components/Whyglobal";
import BuyerSide from "./BuyerSidebuyer";

const HerbalProductsBuyers = [
  {
    name: "Ankita Verma",
    email: "ankita.verma@gmail.com",
    mobileNumber: "9876543210",
    locationandDate: "Pune, 20-11-2024",
    lookingFor: "Looking for bulk supply of organic herbal teas.",
    productOrService: "Herbal Teas",
    quantity: 200,
    unit: "kg",
    _id: "unique_id_for_herbal_buyer_1",
  },
  {
    name: "Rajesh Gupta",
    email: "rajesh.gupta@gmail.com",
    mobileNumber: "9874532109",
    locationandDate: "Delhi, 18-11-2024",
    lookingFor: "Need herbal skincare products for retail distribution.",
    productOrService: "Herbal Skincare Products",
    quantity: 500,
    unit: "units",
  },
  {
    name: "Meera Iyer",
    email: "meera.iyer@gmail.com",
    mobileNumber: "9991234567",
    locationandDate: "Bangalore, 16-11-2024",
    lookingFor: "Interested in purchasing ayurvedic herbal oils.",
    productOrService: "Ayurvedic Oils",
    quantity: 300,
    unit: "liters",
  },
  {
    name: "Amit Tiwari",
    email: "amit.tiwari@gmail.com",
    mobileNumber: "9123456789",
    locationandDate: "Jaipur, 14-11-2024",
    lookingFor: "Looking to source herbal supplements for export.",
    productOrService: "Herbal Supplements",
    quantity: 1000,
    unit: "bottles",
  },
  {
    name: "Rashmi Patel",
    email: "rashmi.patel@gmail.com",
    mobileNumber: "9009876543",
    locationandDate: "Mumbai, 12-11-2024",
    lookingFor: "Need bulk herbal powders for health products.",
    productOrService: "Herbal Powders",
    quantity: 500,
    unit: "kg",
  },
];

const HerbalProductsBuy = () => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [leadsViewed, setLeadsViewed] = useState(0);

  useEffect(() => {
    if (!userId) return;

    const storedViewedLeads =
      JSON.parse(localStorage.getItem(`herbalViewedLeads_${userId}`)) || [];
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
      `herbalViewedLeads_${userId}`,
      JSON.stringify(updatedShownNumbers)
    );

    const buyer = HerbalProductsBuyers[index];

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
              <Link to="#">Herbal Teas</Link>
            </li>
            <li>
              <Link to="#">Skincare Products</Link>
            </li>
            <li>
              <Link to="#">Ayurvedic Oils</Link>
            </li>
            <li>
              <Link to="#">Supplements</Link>
            </li>
            <li>
              <Link to="#">Herbal Powders</Link>
            </li>
          </ul>
        </div>
        <div className="buyers">
          {HerbalProductsBuyers.map((buyer, index) => (
            <div key={index} className="buyer-card">
              <h2 style={{ color: "green" }}>{buyer.lookingFor}</h2>
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

export default HerbalProductsBuy;
