import React, { useState, useEffect } from "react";
import "./OnionBuy.css"; // Assuming a new CSS file for door handle buyer styles
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Whyglobal from "../Components/Whyglobal";
import BuyerSide from "./BuyerSidebuyer";

const DoorHandleBuyers = [
  {
    name: "Arun Mehta",
    email: "arun.mehta@gmail.com",
    mobileNumber: "9988776655",
    locationandDate: "Chandigarh, 20-11-2024",
    lookingFor: "Looking to purchase brass door handles for luxury villas.",
    productOrService: "Brass Door Handles",
    quantity: 300,
    unit: "pieces",
    _id: "unique_id_for_door_handle_buyer_1",
  },
  {
    name: "Sonia Kapoor",
    email: "sonia.kapoor@gmail.com",
    mobileNumber: "9876543210",
    locationandDate: "Mumbai, 19-11-2024",
    lookingFor: "Need stainless steel door handles for a commercial project.",
    productOrService: "Stainless Steel Door Handles",
    quantity: 500,
    unit: "pieces",
  },
  {
    name: "Raj Malhotra",
    email: "raj.malhotra@gmail.com",
    mobileNumber: "9123456789",
    locationandDate: "Bangalore, 18-11-2024",
    lookingFor: "Interested in modern door handles with unique designs.",
    productOrService: "Designer Door Handles",
    quantity: 200,
    unit: "pieces",
  },
  {
    name: "Pooja Sinha",
    email: "pooja.sinha@gmail.com",
    mobileNumber: "8901234567",
    locationandDate: "Kolkata, 17-11-2024",
    lookingFor:
      "Bulk purchase of aluminum door handles for residential buildings.",
    productOrService: "Aluminum Door Handles",
    quantity: 1000,
    unit: "pieces",
  },
  {
    name: "Vikram Singh",
    email: "vikram.singh@gmail.com",
    mobileNumber: "9012345678",
    locationandDate: "Hyderabad, 16-11-2024",
    lookingFor: "High-quality wooden door handles for boutique hotels.",
    productOrService: "Wooden Door Handles",
    quantity: 150,
    unit: "pieces",
  },
];

const DoorHandleBuy = () => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [leadsViewed, setLeadsViewed] = useState(0);

  useEffect(() => {
    if (!userId) return;

    const storedViewedLeads =
      JSON.parse(localStorage.getItem(`doorHandleViewedLeads_${userId}`)) || [];
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
      `doorHandleViewedLeads_${userId}`,
      JSON.stringify(updatedShownNumbers)
    );

    const buyer = DoorHandleBuyers[index];

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
          <li className="breadcrumb-item active">Fresh Leads</li>
        </ol>
      </div>
      <div className="containersx">
        <div className="browsers">
          <h3>Browse by State</h3>
          <ul className="flt-list cust-scroll" id="state-lists">
            <li>
              <Link to="#">All India</Link>
            </li>
            <li>
              <Link to="#">Punjab</Link>
            </li>
            <li>
              <Link to="#">Maharashtra</Link>
            </li>
            <li>
              <Link to="#">Tamil Nadu</Link>
            </li>
          </ul>
        </div>
        <div className="buyers">
          {DoorHandleBuyers.map((buyer, index) => (
            <div key={index} className="buyer-card">
              <h2>{buyer.lookingFor}</h2>
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
                <button onClick={() => toggleNumber(index)}>
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
      </div>
      <Whyglobal />
    </>
  );
};

export default DoorHandleBuy;
