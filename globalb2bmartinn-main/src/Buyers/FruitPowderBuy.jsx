import React, { useState, useEffect } from "react";
import "./OnionBuy.css"; // Assuming a new CSS file for fruit powder buyer styles
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Whyglobal from "../Components/Whyglobal";
import BuyerSide from "./BuyerSidebuyer";

const FruitPowderBuyers = [
  {
    name: "John Smith",
    email: "john.smith@abc.com",
    mobileNumber: "1234567890",
    locationandDate: "USA, 22-11-2024",
    lookingFor: "Looking for bulk supply of mango powder.",
    productOrService: "Mango Powder",
    quantity: 50,
    unit: "ton",
    _id: "unique_id_for_fruit_powder_buyer_1",
  },
  {
    name: "Sofia Martinez",
    email: "sofia.martinez@xyz.com",
    mobileNumber: "9876543210",
    locationandDate: "Mexico, 20-11-2024",
    lookingFor: "Interested in sourcing apple powder for snacks.",
    productOrService: "Apple Powder",
    quantity: 30,
    unit: "ton",
  },
  {
    name: "Liam O'Neill",
    email: "liam.oneill@fruit.com",
    mobileNumber: "9123456789",
    locationandDate: "Ireland, 18-11-2024",
    lookingFor: "Looking to purchase berry powder in bulk.",
    productOrService: "Berry Powder",
    quantity: 40,
    unit: "ton",
  },
  {
    name: "Ayesha Patel",
    email: "ayesha.patel@herbal.com",
    mobileNumber: "9208745632",
    locationandDate: "India, 15-11-2024",
    lookingFor: "Need guava powder for food manufacturing.",
    productOrService: "Guava Powder",
    quantity: 60,
    unit: "ton",
  },
  {
    name: "James Wilson",
    email: "james.wilson@outlook.com",
    mobileNumber: "9871122334",
    locationandDate: "Australia, 12-11-2024",
    lookingFor: "Seeking papaya powder for cosmetic products.",
    productOrService: "Papaya Powder",
    quantity: 35,
    unit: "ton",
  },
  {
    name: "Emma Brown",
    email: "emma.brown@fruitworld.com",
    mobileNumber: "9088776655",
    locationandDate: "Canada, 10-11-2024",
    lookingFor: "Purchasing pineapple powder for smoothies.",
    productOrService: "Pineapple Powder",
    quantity: 45,
    unit: "ton",
  },
  {
    name: "Olivia Taylor",
    email: "olivia.taylor@freshfruit.com",
    mobileNumber: "9091234567",
    locationandDate: "UK, 08-11-2024",
    lookingFor: "In need of strawberry powder for snacks production.",
    productOrService: "Strawberry Powder",
    quantity: 25,
    unit: "ton",
  },
  {
    name: "Luca Romano",
    email: "luca.romano@italy.com",
    mobileNumber: "9109876543",
    locationandDate: "Italy, 05-11-2024",
    lookingFor: "Looking for citrus fruit powders for juice companies.",
    productOrService: "Citrus Powder",
    quantity: 70,
    unit: "ton",
  },
  {
    name: "Rashid Al-Farsi",
    email: "rashid.alfarsi@uae.com",
    mobileNumber: "9807654321",
    locationandDate: "UAE, 02-11-2024",
    lookingFor: "Interested in purchasing watermelon powder.",
    productOrService: "Watermelon Powder",
    quantity: 55,
    unit: "ton",
  },
  {
    name: "Isabella Garcia",
    email: "isabella.garcia@latinfruit.com",
    mobileNumber: "9876432109",
    locationandDate: "Brazil, 30-10-2024",
    lookingFor: "Purchasing banana powder for health supplements.",
    productOrService: "Banana Powder",
    quantity: 80,
    unit: "ton",
  },
  {
    name: "Zara Khan",
    email: "zara.khan@fruitpower.com",
    mobileNumber: "9632587410",
    locationandDate: "Pakistan, 28-10-2024",
    lookingFor: "Looking for peach powder for bakery products.",
    productOrService: "Peach Powder",
    quantity: 50,
    unit: "ton",
  },
  {
    name: "George Harris",
    email: "george.harris@fruittrade.com",
    mobileNumber: "9207561234",
    locationandDate: "South Africa, 25-10-2024",
    lookingFor: "Bulk order of mixed fruit powders for smoothies.",
    productOrService: "Mixed Fruit Powder",
    quantity: 90,
    unit: "ton",
  },
];

const FruitPowderBuy = () => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [leadsViewed, setLeadsViewed] = useState(0);

  useEffect(() => {
    if (!userId) return;

    // Load the viewed leads from local storage
    const storedViewedLeads =
      JSON.parse(localStorage.getItem(`fruitPowderViewedLeads_${userId}`)) ||
      [];
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

    // Update local storage
    localStorage.setItem(
      `fruitPowderViewedLeads_${userId}`,
      JSON.stringify(updatedShownNumbers)
    );

    const buyer = FruitPowderBuyers[index];

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
            Fruit Powder Leads
          </li>
        </ol>
      </div>
      <div className="containersx">
        <div style={{ width: "200px", padding: "10px" }} className="browsers">
          <h3 style={{ marginTop: "30px" }}>Browse by Country</h3>
          <ul className="flt-list cust-scroll" id="country-lists">
            <li>
              <Link to="#">USA</Link>
            </li>
            <li>
              <Link to="#">Mexico</Link>
            </li>
            <li>
              <Link to="#">Ireland</Link>
            </li>
            <li>
              <Link to="#">India</Link>
            </li>
            <li>
              <Link to="#">Australia</Link>
            </li>
          </ul>

          <ul style={{ marginTop: "20px" }} className="flt-list cust-scroll">
            <h3>Fruit Powder Types</h3>
            <li>
              <Link to="#">Mango Powder</Link>
            </li>
            <li>
              <Link to="#">Apple Powder</Link>
            </li>
            <li>
              <Link to="#">Berry Powder</Link>
            </li>
            <li>
              <Link to="#">Guava Powder</Link>
            </li>
            <li>
              <Link to="#">Papaya Powder</Link>
            </li>
          </ul>
        </div>

        <div className="buyers">
          {FruitPowderBuyers.map((buyer, index) => (
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

export default FruitPowderBuy;
