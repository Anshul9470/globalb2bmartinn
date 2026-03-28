import React, { useState, useEffect } from "react";
import "./OnionBuy.css"; // Assuming a CSS file for potato buyer styles
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Whyglobal from "../Components/Whyglobal";
import BuyerSide from "./BuyerSidebuyer";

const PotatoBuyers = [
  {
    name: "Rajesh Gupta",
    email: "rajesh.gupta@gmail.com",
    mobileNumber: "9876543210",
    locationandDate: "Agra, 21-11-2024",
    lookingFor: "Looking for fresh potatoes for export purposes.",
    productOrService: "Fresh Potatoes",
    quantity: 20,
    unit: "tons",
    _id: "unique_id_potato_buyer_1",
  },
  {
    name: "Sunita Verma",
    email: "sunita.verma@gmail.com",
    mobileNumber: "8765432109",
    locationandDate: "Ahmedabad, 20-11-2024",
    lookingFor: "Need a bulk order of organic potatoes for retail.",
    productOrService: "Organic Potatoes",
    quantity: 15,
    unit: "tons",
  },
  {
    name: "Karan Mehta",
    email: "karan.mehta@gmail.com",
    mobileNumber: "7654321098",
    locationandDate: "Delhi, 19-11-2024",
    lookingFor: "Seeking potatoes for a chips manufacturing unit.",
    productOrService: "Potatoes for Chips",
    quantity: 25,
    unit: "tons",
  },
  {
    name: "Asha Rao",
    email: "asha.rao@gmail.com",
    mobileNumber: "6543210987",
    locationandDate: "Bangalore, 18-11-2024",
    lookingFor: "Interested in yellow potatoes for culinary use.",
    productOrService: "Yellow Potatoes",
    quantity: 10,
    unit: "tons",
  },
  {
    name: "Ramesh Yadav",
    email: "ramesh.yadav@gmail.com",
    mobileNumber: "5432109876",
    locationandDate: "Patna, 17-11-2024",
    lookingFor: "Looking for table potatoes for restaurant supply.",
    productOrService: "Table Potatoes",
    quantity: 30,
    unit: "tons",
  },
  {
    name: "Pooja Sharma",
    email: "pooja.sharma@gmail.com",
    mobileNumber: "4321098765",
    locationandDate: "Jaipur, 16-11-2024",
    lookingFor: "Need red potatoes for a wholesale business.",
    productOrService: "Red Potatoes",
    quantity: 12,
    unit: "tons",
  },
  {
    name: "Vikram Singh",
    email: "vikram.singh@gmail.com",
    mobileNumber: "3210987654",
    locationandDate: "Hyderabad, 15-11-2024",
    lookingFor: "Bulk order of frozen potatoes for distribution.",
    productOrService: "Frozen Potatoes",
    quantity: 40,
    unit: "tons",
  },
  {
    name: "Anjali Nair",
    email: "anjali.nair@gmail.com",
    mobileNumber: "2109876543",
    locationandDate: "Kochi, 14-11-2024",
    lookingFor: "Seeking premium potatoes for export to the Middle East.",
    productOrService: "Premium Potatoes",
    quantity: 18,
    unit: "tons",
  },
];

const PotatoBuy = () => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [leadsViewed, setLeadsViewed] = useState(0);

  useEffect(() => {
    if (!userId) return;

    const storedViewedLeads =
      JSON.parse(localStorage.getItem(`potatoViewedLeads_${userId}`)) || [];
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
      `potatoViewedLeads_${userId}`,
      JSON.stringify(updatedShownNumbers)
    );

    const buyer = PotatoBuyers[index];

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
          <li className="breadcrumb-item active">Potato Buyers</li>
        </ol>
      </div>
      <div className="containersx">
        <div style={{ width: "200px", padding: "10px" }} className="browsers">
          <h3>Browse by State</h3>
          <ul className="flt-list cust-scroll" id="state-lists">
            <li>
              <Link to="#">All India</Link>
            </li>
            <li>
              <Link to="#">Uttar Pradesh</Link>
            </li>
            <li>
              <Link to="#">Gujarat</Link>
            </li>
            <li>
              <Link to="#">Rajasthan</Link>
            </li>
            <li>
              <Link to="#">Kerala</Link>
            </li>
          </ul>
          <ul className="flt-list cust-scroll">
            <h3>All Varieties</h3>
            <li>
              <Link to="#">Organic Potatoes</Link>
            </li>
            <li>
              <Link to="#">Red Potatoes</Link>
            </li>
            <li>
              <Link to="#">Yellow Potatoes</Link>
            </li>
            <li>
              <Link to="#">Frozen Potatoes</Link>
            </li>
            <li>
              <Link to="#">Table Potatoes</Link>
            </li>
          </ul>
        </div>
        <div className="buyers">
          {PotatoBuyers.map((buyer, index) => (
            <div key={index} className="buyer-card">
              <h2 style={{ color: "blue" }}>{buyer.lookingFor}</h2>
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
              <div className="btns-imp">
                <Link to={"/login"}>
                  <button className="detailing-btn">View More</button>
                </Link>
                <Link to={"/register-Company"}>
                  <button className="regis-btn">Register Now</button>
                </Link>
              </div>
              <button
                className="detail-btn"
                onClick={() => toggleNumber(index)}
                disabled={!userIsPremium}
              >
                {/* {userIsPremium
                  ? shownNumbers.includes(index)
                    ? "Mobile Shown"
                    : "Click to See"
                  : "Premium Only"} */}
              </button>
            </div>
          ))}
        </div>
        <BuyerSide />
      </div>
      <Whyglobal />
    </>
  );
};

export default PotatoBuy;
