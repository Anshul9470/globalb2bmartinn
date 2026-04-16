import React, { useState, useEffect } from "react";
import "./OnionBuy.css"; // Add your CSS for styling
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Whyglobal from "../Components/Whyglobal";

// Sample random data for shirt buyers
const ShirtBuyers = [
  {
    _id: "12345abcde67890123456701",
    name: "Ravi Kumar",
    email: "ravi.kumar@gmail.com",
    mobileNumber: "9998887777",
    lookingFor: "Bulk Purchase: Cotton Shirts",
    locationandDate: "Delhi, 10-11-2024",
    productOrService: "Shirt Manufacturer",
    quantity: 1000,
    unit: "pieces",
  },
  {
    _id: "12345abcde67890123456702",
    name: "Sneha Sharma",
    email: "sneha.sharma@gmail.com",
    mobileNumber: "9988776655",
    lookingFor: "Bulk Purchase: Linen Shirts",
    locationandDate: "Mumbai, 09-11-2024",
    productOrService: "Shirt Manufacturer",
    quantity: 800,
    unit: "pieces",
  },
  {
    _id: "12345abcde67890123456703",
    name: "Arvind Singh",
    email: "arvind.singh@gmail.com",
    mobileNumber: "9876543210",
    lookingFor: "Bulk Purchase: Formal Shirts",
    locationandDate: "Bangalore, 08-11-2024",
    productOrService: "Shirt Manufacturer",
    quantity: 1200,
    unit: "pieces",
  },
  {
    _id: "12345abcde67890123456704",
    name: "Nisha Reddy",
    email: "nisha.reddy@gmail.com",
    mobileNumber: "9812345678",
    lookingFor: "Bulk Purchase: Casual Shirts",
    locationandDate: "Chennai, 07-11-2024",
    productOrService: "Shirt Manufacturer",
    quantity: 600,
    unit: "pieces",
  },
  {
    _id: "12345abcde67890123456705",
    name: "Suresh Kumar",
    email: "suresh.kumar@gmail.com",
    mobileNumber: "9701234567",
    lookingFor: "Bulk Purchase: Printed Shirts",
    locationandDate: "Hyderabad, 06-11-2024",
    productOrService: "Shirt Manufacturer",
    quantity: 500,
    unit: "pieces",
  },
  {
    _id: "12345abcde67890123456706",
    name: "Vikram Gupta",
    email: "vikram.gupta@gmail.com",
    mobileNumber: "9801234567",
    lookingFor: "Bulk Purchase: Branded Shirts",
    locationandDate: "Kolkata, 05-11-2024",
    productOrService: "Shirt Manufacturer",
    quantity: 1000,
    unit: "pieces",
  },
];

const ShirtBuyer = () => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [leadsViewed, setLeadsViewed] = useState(0);

  useEffect(() => {
    if (!userId) return;

    // Load the viewed leads from local storage
    const storedViewedLeads =
      JSON.parse(localStorage.getItem(`shirtViewedLeads_${userId}`)) || [];
    setShownNumbers(storedViewedLeads);

    fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/getUserWithPremiumStatus/${userId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setUserIsPremium(data.isPremium);
        setLeadsViewed(data.leadsViewed);
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
      `shirtViewedLeads_${userId}`,
      JSON.stringify(updatedShownNumbers)
    );

    const buyer = ShirtBuyers[index]; // Get the buyer information

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
          <li className="breadcrumb-item active">Shirt Buyers Leads</li>
        </ol>
      </div>
      <div className="containersx">
        <div style={{ width: "200px", padding: "10px" }} className="browsers">
          <h3 style={{ marginTop: "30px" }}>Browse by Category</h3>
          <ul className="flt-list cust-scroll" id="category-lists">
            <li>
              <Link to="#">All Shirts</Link>
            </li>
            <li>
              <Link to="#">Cotton Shirts</Link>
            </li>
            <li>
              <Link to="#">Linen Shirts</Link>
            </li>
            <li>
              <Link to="#">Formal Shirts</Link>
            </li>
            <li>
              <Link to="#">Casual Shirts</Link>
            </li>
          </ul>
        </div>
        <div className="buyers">
          {ShirtBuyers.map((buyer, index) => (
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
                        Premium Plan
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <Whyglobal />
    </>
  );
};

export default ShirtBuyer;
