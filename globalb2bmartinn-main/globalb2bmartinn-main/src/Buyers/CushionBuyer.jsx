import React, { useState, useEffect } from "react";
import "./OnionBuy.css"; // Add your CSS for styling
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Whyglobal from "../Components/Whyglobal";

// Sample random data for cushion buyers
const CushionBuyers = [
  {
    _id: "99876ab4cd3efabc12345601",
    name: "Anjali Patel",
    email: "anjali.patel@gmail.com",
    mobileNumber: "9876543210",
    lookingFor: "Bulk Purchase: Cushions for Furniture",
    locationandDate: "Mumbai, 08-11-2024",
    productOrService: "Cushion Supplier",
    quantity: 500,
    unit: "pieces",
  },
  {
    _id: "99876ab4cd3efabc12345602",
    name: "Rajeev Soni",
    email: "rajeev.soni@gmail.com",
    mobileNumber: "9988776655",
    lookingFor: "Bulk Purchase: Decorative Cushions",
    locationandDate: "Delhi, 07-11-2024",
    productOrService: "Cushion Supplier",
    quantity: 300,
    unit: "pieces",
  },
  {
    _id: "99876ab4cd3efabc12345603",
    name: "Sita Kumari",
    email: "sita.kumari@gmail.com",
    mobileNumber: "9912345678",
    lookingFor: "Bulk Purchase: Sofa Cushions",
    locationandDate: "Kolkata, 06-11-2024",
    productOrService: "Cushion Supplier",
    quantity: 400,
    unit: "pieces",
  },
  {
    _id: "99876ab4cd3efabc12345604",
    name: "Mohan Sharma",
    email: "mohan.sharma@gmail.com",
    mobileNumber: "9879879879",
    lookingFor: "Bulk Purchase: Pillow Cushions",
    locationandDate: "Bangalore, 06-11-2024",
    productOrService: "Cushion Supplier",
    quantity: 600,
    unit: "pieces",
  },
  {
    _id: "99876ab4cd3efabc12345605",
    name: "Ravi Kumar",
    email: "ravi.kumar@gmail.com",
    mobileNumber: "9812345678",
    lookingFor: "Bulk Purchase: Cotton Cushions",
    locationandDate: "Chennai, 05-11-2024",
    productOrService: "Cushion Supplier",
    quantity: 1000,
    unit: "pieces",
  },
  {
    _id: "99876ab4cd3efabc12345606",
    name: "Preeti Gupta",
    email: "preeti.gupta@gmail.com",
    mobileNumber: "9776543210",
    lookingFor: "Bulk Purchase: Memory Foam Cushions",
    locationandDate: "Hyderabad, 05-11-2024",
    productOrService: "Cushion Supplier",
    quantity: 800,
    unit: "pieces",
  },
];

const CushionBuyer = () => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [leadsViewed, setLeadsViewed] = useState(0);

  useEffect(() => {
    if (!userId) return;

    // Load the viewed leads from local storage
    const storedViewedLeads =
      JSON.parse(localStorage.getItem(`cushionViewedLeads_${userId}`)) || [];
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
      `cushionViewedLeads_${userId}`,
      JSON.stringify(updatedShownNumbers)
    );

    const buyer = CushionBuyers[index]; // Get the buyer information

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
          <li className="breadcrumb-item active">Cushion Leads</li>
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
        </div>
        <div className="buyers">
          {CushionBuyers.map((buyer, index) => (
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

export default CushionBuyer;
