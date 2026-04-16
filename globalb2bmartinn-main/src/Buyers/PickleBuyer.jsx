import React, { useState, useEffect } from "react";
import "./OnionBuy.css";
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Whyglobal from "../Components/Whyglobal";
import BuyerSide from "./BuyerSidebuyer";

const PicklesBuys = [
  {
    _id: "12345a299f2cecbc7cc11432",
    name: "Rajesh Sharma",
    email: "rajesh@gmail.com",
    mobileNumber: "9876543210",
    lookingFor: " Mango Pickles (Urgent Requirement!)",
    locationandDate: "Delhi 04-11-2024",
    productOrService: "Pickles",
    quantity: 100,
    unit: "kg",
  },
  {
    _id: "22345a299f2cecbc7cc11433",
    name: "Meena Kapoor",
    email: "meenak@gmail.com",
    mobileNumber: "9988776655",
    lookingFor: " Mix Pickles (High Demand!)",
    locationandDate: "Mumbai 02-11-2024",
    productOrService: "Pickles",
    quantity: 202,
    unit: "kg",
  },
  {
    _id: "32345a299f2cecbc7cc11434",
    name: "Vikram Joshi",
    email: "vikram@gmail.com",
    mobileNumber: "9123456789",
    lookingFor: " Chilli Pickles (Immediate Need!)",
    locationandDate: "Chennai 01-11-2024",
    productOrService: "Pickles",
    quantity: 500,
    unit: "kg",
  },
  {
    _id: "42345a299f2cecbc7cc11435",
    name: "Aarti Singh",
    email: "aartis@gmail.com",
    mobileNumber: "9911223344",
    lookingFor: "Mix Pickles (Limited Time Offer!)",
    locationandDate: "Bangalore 29-10-2024",
    productOrService: "Pickles",
    quantity: 300,
    unit: "kg",
  },
  {
    _id: "52345a299f2cecbc7cc11436",
    name: "Rohan Mehta",
    email: "rohanm@gmail.com",
    mobileNumber: "9090909090",
    lookingFor: "Lemon Pickles (Stock Needed ASAP!)",
    locationandDate: "Pune 27-10-2024",
    productOrService: "Pickles",
    quantity: 15,
    unit: "kg",
  },
];

const PicklesBuy = () => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [leadsViewed, setLeadsViewed] = useState(0);

  useEffect(() => {
    if (!userId) return;

    const storedViewedLeads =
      JSON.parse(localStorage.getItem(`picklesViewedLeads_${userId}`)) || [];
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
    if (!userIsPremium) return;

    if (leadsViewed >= 25) {
      alert("You have reached the limit of 25 leads viewed per month.");
      return;
    }

    if (shownNumbers.includes(index)) return;

    const updatedShownNumbers = [...shownNumbers, index];
    setShownNumbers(updatedShownNumbers);
    localStorage.setItem(
      `picklesViewedLeads_${userId}`,
      JSON.stringify(updatedShownNumbers)
    );

    const buyer = PicklesBuys[index];

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
            Pickles Leads
          </li>
        </ol>
      </div>
      <div className="containersx">
        <div className="buyers">
          {PicklesBuys.map((buyer, index) => (
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
              {userIsPremium && (
                <button
                  className="detail-btn"
                  onClick={() => toggleNumber(index)}
                >
                  Click to see
                </button>
              )}
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
        <Whyglobal />
      </div>
    </>
  );
};

export default PicklesBuy;
