import React, { useState, useEffect } from "react";
import "./OnionBuy.css"; // Assuming you have a separate CSS file for the CoconutBuyer component
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Whyglobal from "../Components/Whyglobal";

const CoconutBuyers = [
  {
    _id: "12345abcd67890coco",
    name: "Anil Kumar",
    email: "anilkumar@gmail.com",
    mobileNumber: "9123456789",
    lookingFor: "Fresh Coconuts",
    locationandDate: "Chennai 12-08-2024",
    productOrService: "Fresh Coconuts",
    quantity: 200,
    unit: "pcs",
  },
  {
    _id: "67890abcd12345coco",
    name: "Sita Rao",
    email: "sitarrao@gmail.com",
    mobileNumber: "9812345670",
    lookingFor: "Coconut Shells",
    locationandDate: "Mumbai 13-08-2024",
    productOrService: "Coconut Shells",
    quantity: 500,
    unit: "kg",
  },
  {
    _id: "23456abcd78901coco",
    name: "Ramesh Gupta",
    email: "rameshgupta@gmail.com",
    mobileNumber: "9345678901",
    lookingFor: "Dried Coconuts",
    locationandDate: "Hyderabad 15-08-2024",
    productOrService: "Dried Coconuts",
    quantity: 100,
    unit: "pcs",
  },
  {
    _id: "78901abcd23456coco",
    name: "Kavita Singh",
    email: "kavitasingh@gmail.com",
    mobileNumber: "9734567890",
    lookingFor: "Coconut Water",
    locationandDate: "Bangalore 17-08-2024",
    productOrService: "Coconut Water",
    quantity: 1000,
    unit: "liters",
  },
  {
    _id: "34567abcd89012coco",
    name: "Ravi Kumar",
    email: "ravikumar@gmail.com",
    mobileNumber: "9654321098",
    lookingFor: "Coconut Fiber",
    locationandDate: "Delhi 18-08-2024",
    productOrService: "Coconut Fiber",
    quantity: 200,
    unit: "kg",
  },
];

const CoconutBuy = () => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [leadsViewed, setLeadsViewed] = useState(0);

  useEffect(() => {
    if (!userId) return;

    // Load the viewed leads from local storage
    const storedViewedLeads =
      JSON.parse(localStorage.getItem(`coconutViewedLeads_${userId}`)) || [];
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
      `coconutViewedLeads_${userId}`,
      JSON.stringify(updatedShownNumbers)
    );

    const buyer = CoconutBuyers[index]; // Get the buyer information

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
            Coconut Leads
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
              <Link to="#">Kerala</Link>
            </li>
            <li>
              <Link to="#">Tamil Nadu</Link>
            </li>
            <li>
              <Link to="#">Andhra Pradesh</Link>
            </li>
            <li>
              <Link to="#">Karnataka</Link>
            </li>
            <li>
              <Link to="#">Goa</Link>
            </li>
          </ul>

          <ul style={{ marginTop: "20px" }} className="flt-list cust-scroll">
            <h3>All Category</h3>
            <li>
              <Link to="#">Fresh Coconuts</Link>
            </li>
            <li>
              <Link to="#">Coconut Shells</Link>
            </li>
            <li>
              <Link to="#">Coconut Water</Link>
            </li>
            <li>
              <Link to="#">Coconut Fiber</Link>
            </li>
          </ul>
        </div>
        <div className="buyers">
          {CoconutBuyers.map((buyer, index) => (
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

export default CoconutBuy;
