import React, { useState, useEffect } from "react";
import "./OnionBuy.css"; // Assuming the same CSS file can be used
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Whyglobal from "../Components/Whyglobal";

// Sample data for T-shirt buyers
const TshirtBuys = [
  {
    name: "Fashion Hub",
    email: "fashionhub@example.com",
    mobileNumber: "9876543210",
    lookingFor: "Casual T-shirts",
    locationandDate: "Mumbai 19-11-2024",
    productOrService: "T-shirts",
    quantity: 100,
    unit: "pcs",
  },
  {
    name: "Trendsetters",
    email: "trendsetters@example.com",
    mobileNumber: "9988776655",
    lookingFor: "Graphic T-shirts urgently required",
    locationandDate: "Delhi 19-11-2024",
    productOrService: "Graphic T-shirts",
    quantity: 150,
    unit: "pcs",
  },
  {
    name: "Style Corner",
    email: "stylecorner@example.com",
    mobileNumber: "9123456789",
    lookingFor: "Premium Quality T-shirts",
    locationandDate: "Bangalore 18-11-2024",
    productOrService: "Premium T-shirts",
    quantity: 80,
    unit: "pcs",
  },
  {
    name: "Urban Threads",
    email: "urbanthreads@example.com",
    mobileNumber: "9988776611",
    lookingFor: "Eco-friendly T-shirts",
    locationandDate: "Hyderabad 17-11-2024",
    productOrService: "Eco-friendly T-shirts",
    quantity: 120,
    unit: "pcs",
  },
  {
    name: "Chic Apparel",
    email: "chicapparel@example.com",
    mobileNumber: "9876543201",
    lookingFor: "Designer T-shirts",
    locationandDate: "Kolkata 17-11-2024",
    productOrService: "Designer T-shirts",
    quantity: 200,
    unit: "pcs",
  },
  {
    name: "Trendy Tees",
    email: "trendytees@example.com",
    mobileNumber: "9123456790",
    lookingFor: "Slogan T-shirts",
    locationandDate: "Pune 16-11-2024",
    productOrService: "Slogan T-shirts",
    quantity: 150,
    unit: "pcs",
  },
  {
    name: "Fashion Fiesta",
    email: "fashionfiesta@example.com",
    mobileNumber: "9999888877",
    lookingFor: "Sports T-shirts",
    locationandDate: "Chennai 15-11-2024",
    productOrService: "Sports T-shirts",
    quantity: 90,
    unit: "pcs",
  },
  {
    name: "Classic Wear",
    email: "classicwear@example.com",
    mobileNumber: "8888776655",
    lookingFor: "Classic Fit T-shirts",
    locationandDate: "Ahmedabad 15-11-2024",
    productOrService: "Classic Fit T-shirts",
    quantity: 110,
    unit: "pcs",
  },
  {
    name: "Vibrant Styles",
    email: "vibrantstyles@example.com",
    mobileNumber: "7676767676",
    lookingFor: "Colorful T-shirts",
    locationandDate: "Jaipur 12-11-2024",
    productOrService: "Colorful T-shirts",
    quantity: 130,
    unit: "pcs",
  },
  {
    name: "Casual Chic",
    email: "casualchic@example.com",
    mobileNumber: "6543219870",
    lookingFor: "Fashionable T-shirts",
    locationandDate: "Surat 10-11-2024",
    productOrService: "Fashionable T-shirts",
    quantity: 140,
    unit: "pcs",
  },
  {
    name: "Ethereal Fashion",
    email: "etherealfashion@example.com",
    mobileNumber: "5555555555",
    lookingFor: "Minimalistic T-shirts",
    locationandDate: "Indore 24-10-2024",
    productOrService: "Minimalistic T-shirts",
    quantity: 75,
    unit: "pcs",
  },
  {
    name: "The Tee Gallery",
    email: "theteegallery@example.com",
    mobileNumber: "1234567890",
    lookingFor: "Graphic Novelty T-shirts",
    locationandDate: "Bhopal 19-10-2024",
    productOrService: "Graphic Novelty T-shirts",
    quantity: 160,
    unit: "pcs",
  },
  {
    name: "Fashion Factory",
    email: "fashionfactory@example.com",
    mobileNumber: "4444444444",
    lookingFor: "Printed T-shirts",
    locationandDate: "Nagpur 23-09-2024",
    productOrService: "Printed T-shirts",
    quantity: 85,
    unit: "pcs",
  },
];

const TshirtBuy = () => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [leadsViewed, setLeadsViewed] = useState(0);

  useEffect(() => {
    if (!userId) return;

    // Load the viewed leads from local storage
    const storedViewedLeads =
      JSON.parse(localStorage.getItem(`tshirtViewedLeads_${userId}`)) || [];
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
      `tshirtViewedLeads_${userId}`,
      JSON.stringify(updatedShownNumbers)
    );

    const buyer = TshirtBuys[index]; // Get the buyer information

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
          <h3 style={{ marginTop: "30px" }}>Browse by Category</h3>
          <ul className="flt-list cust-scroll" id="category-lists">
            <li>
              <Link to="#">All Categories</Link>
            </li>
            <li>
              <Link to="#">Casual Wear</Link>
            </li>
            <li>
              <Link to="#">Formal Wear</Link>
            </li>
            <li>
              <Link to="#">Sports Wear</Link>
            </li>
            <li>
              <Link to="#">Graphic Tees</Link>
            </li>
          </ul>
        </div>
        <div className="buyers">
          {TshirtBuys.map((buyer, index) => (
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
        <div className="sidebar">
          <div className="mains-slide">
            <div className="tk23-hkCont_onergt">
              <div className="tk23-hkCont_premserv__box">
                <h1 className="tk23-hkCont_premserv__ttl">
                  Our Membership Plans
                </h1>
                <div className="tk23-hkCont_premserv__list">
                  <Link to={"/packages"}>
                    <div className="tk23-hkCont_premservs">
                      <span
                        className="fontss"
                        style={{ backgroundColor: "#fff" }}
                      >
                        Standard Plan
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="tk23-hkCont_premserv__list">
                  <Link to={"/packages"}>
                    <div className="tk23-hkCont_premservs">
                      <span
                        className="fontss"
                        style={{ backgroundColor: "#fff" }}
                      >
                        Advance Plan
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="tk23-hkCont_premserv__list">
                  <Link to={"/packages"}>
                    <div className="tk23-hkCont_premservs">
                      <span
                        className="fontss"
                        style={{ backgroundColor: "#fff" }}
                      >
                        Premium Plan
                      </span>
                    </div>
                  </Link>
                  <Link to={"/packages"}>
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

export default TshirtBuy;
