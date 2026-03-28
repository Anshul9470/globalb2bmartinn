import React, { useState, useEffect } from "react";
import "./OnionBuy.css"; // Reuse the existing CSS or create a new one as per your need
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Whyglobal from "../Components/Whyglobal";

// Sample random data for tape buyers
const TapeBuys = [
  {
    _id: "86901a299f2cecbc7cc11463",
    name: "Rohit Sharma",
    email: "rohit.sharma@gmail.com",
    mobileNumber: "9012345678",
    lookingFor: "Bulk Order for Duct Tape",
    locationandDate: "Delhi, 27-10-2024",
    productOrService: "Tape Supplier",
    quantity: 2000,
    unit: "rolls",
  },
  {
    _id: "86901a299f2cecbc7cc11464",
    name: "Priya Singh",
    email: "priya.singh@gmail.com",
    mobileNumber: "9023456789",
    lookingFor: "Custom Printed Tape Supplier Needed",
    locationandDate: "Pune, 27-10-2024",
    productOrService: "Printed Tape Dealer",
    quantity: 800,
    unit: "rolls",
  },
  {
    _id: "86901a299f2cecbc7cc11465",
    name: "Vikas Patel",
    email: "vikas.patel@gmail.com",
    mobileNumber: "9934567890",
    lookingFor: "Colored Masking Tape for Arts",
    locationandDate: "Ahmedabad, 27-10-2024",
    productOrService: "Masking Tape Supplier",
    quantity: 600,
    unit: "rolls",
  },
  {
    _id: "86901a299f2cecbc7cc11466",
    name: "Kavita Mehta",
    email: "kavita.mehta@gmail.com",
    mobileNumber: "9123456789",
    lookingFor: "Looking for Heat Resistant Tape",
    locationandDate: "Hyderabad, 27-10-2024",
    productOrService: "Industrial Tape Supplier",
    quantity: 1200,
    unit: "rolls",
  },
  {
    _id: "86901a299f2cecbc7cc11467",
    name: "Anil Kumar",
    email: "anil.kumar@gmail.com",
    mobileNumber: "9321654789",
    lookingFor: "Bulk Double-Sided Foam Tape",
    locationandDate: "Chennai, 26-10-2024",
    productOrService: "Foam Tape Distributor",
    quantity: 900,
    unit: "rolls",
  },
  {
    _id: "86901a299f2cecbc7cc11468",
    name: "Sneha Chatterjee",
    email: "sneha.chatterjee@gmail.com",
    mobileNumber: "9871234560",
    lookingFor: "Anti-Slip Tape in Large Quantity",
    locationandDate: "Jaipur, 26-10-2024",
    productOrService: "Safety Tape Supplier",
    quantity: 700,
    unit: "rolls",
  },

  {
    _id: "86901a299f2cecbc7cc11460",
    name: "Amit Verma",
    email: "amit.verma@gmail.com",
    mobileNumber: "9876543211",
    lookingFor: "Buying: Masking Tape in Bulk",
    locationandDate: "Mumbai, 17-10-2024",
    productOrService: "Tape Supplier",
    quantity: 1000,
    unit: "rolls",
  },
  {
    _id: "86901a299f2cecbc7cc11461",
    name: "Neha Jain",
    email: "neha.jain@gmail.com",
    mobileNumber: "9987654311",
    lookingFor: "Need Double-sided Adhesive Tape",
    locationandDate: "Bangalore, 16-10-2024",
    productOrService: "Adhesive Tape Dealer",
    quantity: 500,
    unit: "rolls",
  },
  {
    _id: "86901a299f2cecbc7cc11462",
    name: "Manoj Gupta",
    email: "manoj.gupta@gmail.com",
    mobileNumber: "9123456781",
    lookingFor: "Transparent Tape Urgently Required",
    locationandDate: "Kolkata, 15-10-2024",
    productOrService: "Packaging Tape Wholesaler",
    quantity: 1500,
    unit: "rolls",
  },
];

const TapeBuy = () => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [leadsViewed, setLeadsViewed] = useState(0);

  useEffect(() => {
    if (!userId) return;

    // Load the viewed leads from local storage
    const storedViewedLeads =
      JSON.parse(localStorage.getItem(`tapeViewedLeads_${userId}`)) || [];
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
      `tapeViewedLeads_${userId}`,
      JSON.stringify(updatedShownNumbers)
    );

    const buyer = TapeBuys[index]; // Get the buyer information

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
              <Link to="#">Gujarat</Link>
            </li>
            <li>
              <Link to="#">Karnataka</Link>
            </li>
            <li>
              <Link to="#">West Bengal</Link>
            </li>
          </ul>

          <ul style={{ marginTop: "20px" }} className="flt-list cust-scroll">
            <h3>All Category</h3>
            <li>
              <Link to="#">Masking Tape</Link>
            </li>
            <li>
              <Link to="#">Adhesive Tape</Link>
            </li>
            <li>
              <Link to="#">Transparent Tape</Link>
            </li>
            <li>
              <Link to="#">Duct Tape</Link>
            </li>
            <li>
              <Link to="#">Packaging Tape</Link>
            </li>
          </ul>
        </div>
        <div className="buyers">
          {TapeBuys.map((buyer, index) => (
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
                <div class="tk23-hkCont_premserv__list">
                  <Link to={"/packages"}>
                    <div class="tk23-hkCont_premservs">
                      <span class="fontss" style={{ backgroundColor: "#fff" }}>
                        Standard Plan
                      </span>
                    </div>
                  </Link>
                </div>
                <div class="tk23-hkCont_premserv__list">
                  <Link to={"/packages"}>
                    <div class="tk23-hkCont_premservs">
                      <span class="fontss" style={{ backgroundColor: "#fff" }}>
                        Advance Plan
                      </span>
                    </div>
                  </Link>
                </div>
                <div class="tk23-hkCont_premserv__list">
                  <Link to={"/packages"}>
                    <div class="tk23-hkCont_premservs">
                      <span class="fontss" style={{ backgroundColor: "#fff" }}>
                        Premium Plan
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

export default TapeBuy;
