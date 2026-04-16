import React, { useState, useEffect } from "react";
import "./OnionBuy.css"; // Reuse the existing CSS or create a new one as per your need
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Whyglobal from "../Components/Whyglobal";

// Sample random data for bags buyers
const Pharmabuyers = [
  {
    _id: "66901a299f2cecbc7cc11453",
    name: "Vikram",
    email: "vikram.kumar@gmail.com",
    mobileNumber: "9876541234",
    lookingFor: "Bulk Purchase: Pain Relief Medications Required",
    locationandDate: "Mumbai, 23-10-2024",
    productOrService: "Pharmaceutical Drug Supplier",
    quantity: 10000,
    unit: "boxes",
  },
  {
    _id: "66901a299f2cecbc7cc11454",
    name: "Priya",
    email: "priya.sharma@gmail.com",
    mobileNumber: "9987654312",
    lookingFor: "Urgent Requirement: Antibiotics in Bulk",
    locationandDate: "Chennai, 23-10-2024",
    productOrService: "Pharmaceutical Drug Dealer",
    quantity: 5000,
    unit: "boxes",
  },
  {
    _id: "66901a299f2cecbc7cc11455",
    name: "Rajesh",
    email: "rajesh.verma@gmail.com",
    mobileNumber: "9123456711",
    lookingFor: "Immediate Need: Anti-allergy Medications",
    locationandDate: "Hyderabad, 22-10-2024",
    productOrService: "Pharmaceutical Drug Wholesaler",
    quantity: 8000,
    unit: "boxes",
  },
  {
    _id: "66901a299f2cecbc7cc11456",
    name: "Sonal",
    email: "sonal.kumar@gmail.com",
    mobileNumber: "9786543210",
    lookingFor: "Bulk Purchase: Vitamin Supplements",
    locationandDate: "Pune, 22-10-2024",
    productOrService: "Vitamin Supplement Supplier",
    quantity: 6000,
    unit: "bottles",
  },
  {
    _id: "66901a299f2cecbc7cc11457",
    name: "Manoj",
    email: "manoj.patel@gmail.com",
    mobileNumber: "9823456710",
    lookingFor: "Urgent Requirement: Cough Syrups in Bulk",
    locationandDate: "Kolkata, 21-10-2024",
    productOrService: "Pharmaceutical Syrup Dealer",
    quantity: 4000,
    unit: "bottles",
  },
];

const Pharmabuyer = () => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [leadsViewed, setLeadsViewed] = useState(0);

  useEffect(() => {
    if (!userId) return;

    // Load the viewed leads from local storage
    const storedViewedLeads =
      JSON.parse(localStorage.getItem(`PharmaViewedLeads_${userId}`)) || [];
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
      `PharmaViewedLeads_${userId}`,
      JSON.stringify(updatedShownNumbers)
    );

    const buyer = Pharmabuyers[index]; // Get the buyer information

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
              <Link to="#">Jute Bags</Link>
            </li>
            <li>
              <Link to="#">Cotton Bags</Link>
            </li>
            <li>
              <Link to="#">Eco-friendly Bags</Link>
            </li>
            <li>
              <Link to="#">Paper Bags</Link>
            </li>
            <li>
              <Link to="#">Rice Bags</Link>
            </li>
          </ul>
        </div>
        <div className="buyers">
          {Pharmabuyers.map((buyer, index) => (
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
        <Whyglobal />
      </div>
    </>
  );
};

export default Pharmabuyer;
