import React, { useState, useEffect } from "react";
import "./OnionBuy.css"; // Assuming the same CSS file can be reused
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Whyglobal from "../Components/Whyglobal";
import BuyerSide from "./BuyerSidebuyer";

const SolarEnergyBuys = [
  {
    _id: "12345abcde",
    name: "Ravi Kumar",
    email: "ravikumar@gmail.com",
    mobileNumber: "9876543210",
    lookingFor: "Solar Energy Plant",
    locationandDate: "Gujarat 24-11-2024",
    productOrService: "Solar Energy",
    quantity: 10,
    unit: "MW",
  },
  {
    _id: "12345abcde",
    name: "Ravi Kumar",
    email: "ravikumar@gmail.com",
    mobileNumber: "9876543210",
    lookingFor: "Urgent - Solar Energy Plant",
    locationandDate: "Gujarat 23-11-2024",
    productOrService: "Solar Energy",
    quantity: 10,
    unit: "MW",
  },
  {
    _id: "67890fghij",
    name: "Anita Sharma",
    email: "anita.sharma@gmail.com",
    mobileNumber: "8765432109",
    lookingFor: "High Priority - Wind Turbines",
    locationandDate: "Rajasthan 23-11-2024",
    productOrService: "Wind Energy",
    quantity: 20,
    unit: "Turbines",
  },
  {
    _id: "11223klmno",
    name: "Manoj Tiwari",
    email: "manoj.tiwari@gmail.com",
    mobileNumber: "7654321098",
    lookingFor: "Immediate - Biomass Power Plant",
    locationandDate: "Punjab 22-11-2024",
    productOrService: "Biomass Energy",
    quantity: 5,
    unit: "MW",
  },
  {
    _id: "44556pqrst",
    name: "Pooja Verma",
    email: "pooja.verma@gmail.com",
    mobileNumber: "6543210987",
    lookingFor: "Urgent - Geothermal Energy Setup",
    locationandDate: "Himachal Pradesh 21-11-2024",
    productOrService: "Geothermal Energy",
    quantity: 15,
    unit: "MW",
  },
  {
    _id: "77889uvwxy",
    name: "Ramesh Patel",
    email: "ramesh.patel@gmail.com",
    mobileNumber: "5432109876",
    lookingFor: "High Priority - Hydropower Station",
    locationandDate: "Kerala 21-11-2024",
    productOrService: "Hydropower",
    quantity: 25,
    unit: "MW",
  },
  {
    _id: "99001zabcd",
    name: "Suman Gupta",
    email: "suman.gupta@gmail.com",
    mobileNumber: "4321098765",
    lookingFor: "Immediate - Rooftop Solar Panels",
    locationandDate: "Delhi 20-11-2024",
    productOrService: "Solar Panels",
    quantity: 200,
    unit: "Units",
  },
  {
    _id: "22334efghi",
    name: "Rahul Jain",
    email: "rahul.jain@gmail.com",
    mobileNumber: "3210987654",
    lookingFor: "Urgent - EV Charging Stations",
    locationandDate: "Maharashtra 20-11-2024",
    productOrService: "Electric Vehicle Infrastructure",
    quantity: 50,
    unit: "Stations",
  },
];

const SolarEnergyBuy = () => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [leadsViewed, setLeadsViewed] = useState(0);

  useEffect(() => {
    if (!userId) return;

    const storedViewedLeads =
      JSON.parse(localStorage.getItem(`solarEnergyViewedLeads_${userId}`)) ||
      [];
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
      `solarEnergyViewedLeads_${userId}`,
      JSON.stringify(updatedShownNumbers)
    );

    const buyer = SolarEnergyBuys[index];

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
          <li className="breadcrumb-item active">Solar Energy Leads</li>
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
              <Link to="#">Gujarat</Link>
            </li>
            <li>
              <Link to="#">Rajasthan</Link>
            </li>
            <li>
              <Link to="#">Madhya Pradesh</Link>
            </li>
          </ul>
          <ul className="flt-list cust-scroll">
            <h3>All Category</h3>
            <li>
              <Link to="#">Solar Panels</Link>
            </li>
            <li>
              <Link to="#">Wind Energy</Link>
            </li>
            <li>
              <Link to="#">Hydro Power</Link>
            </li>
          </ul>
        </div>
        <div className="buyers">
          {SolarEnergyBuys.map((buyer, index) => (
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
              <div>
                {userIsPremium && (
                  <button
                    className="detail-btn"
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
        <Whyglobal />
      </div>
    </>
  );
};

export default SolarEnergyBuy;
