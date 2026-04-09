import React, { useState, useEffect } from "react";
import "./OnionBuy.css"; // Assuming a similar CSS file is used.
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Whyglobal from "../Components/Whyglobal";

const GarmentBuys = [
  {
    _id: "1",
    name: "Anjali Sharma",
    email: "anjali.sharma@example.com",
    mobileNumber: "9812345678",
    lookingFor: "Urgent Requirement for Bulk Purchase of Girls Jeans.",
    locationandDate: "Mumbai 11-11-2024",
    productOrService: "Girls Jeans",
    quantity: 150,
    unit: "pcs",
  },
  {
    _id: "2",
    name: "Meera Patel",
    email: "meera.patel@example.com",
    mobileNumber: "9823456789",
    lookingFor: "Bulk Purchase of Trendy Girls Jeans.",
    locationandDate: "Bangalore 10-11-2024",
    productOrService: "Girls Jeans",
    quantity: 120,
    unit: "pcs",
  },
  {
    _id: "3",
    name: "Pooja Verma",
    email: "pooja.verma@example.com",
    mobileNumber: "9765432109",
    lookingFor: "High-Quality Girls Jeans for Retail Sale.",
    locationandDate: "Hyderabad 09-11-2024",
    productOrService: "Girls Jeans",
    quantity: 200,
    unit: "pcs",
  },
  {
    _id: "4",
    name: "Sanya Gupta",
    email: "sanya.gupta@example.com",
    mobileNumber: "9876541230",
    lookingFor: "Bulk Order of Fashionable Girls Jeans.",
    locationandDate: "Kolkata 09-11-2024",
    productOrService: "Girls Jeans",
    quantity: 180,
    unit: "pcs",
  },
  {
    _id: "5",
    name: "Priya Joshi",
    email: "priya.joshi@example.com",
    mobileNumber: "9456781230",
    lookingFor: "Bulk Purchase of Comfortable and Stylish Girls Jeans.",
    locationandDate: "Delhi 08-11-2024",
    lookingFor: "Girls Jeans",
    quantity: 160,
    unit: "pcs",
  },
  {
    _id: "66869a299f2cecbc7cc11440",
    name: "Ravi Kumar",
    email: "ravi.kumar@example.com",
    mobileNumber: "9876543210",
    lookingFor:
      "Urgent Requirement for Bulk Purchase of Cotton T-Shirts and Hoodies.",
    locationandDate: "Delhi 05-11-2024",
    productOrService: "Cotton T-Shirts, Hoodies",
    quantity: 100,
    unit: "pcs",
  },
  {
    _id: "66869a299f2cecbc7cc11441",
    name: "Suresh Mehta",
    email: "suresh.mehta@example.com",
    mobileNumber: "8765432109",
    lookingFor: "Looking for Wholesale Supplier of Denim Jeans.",
    locationandDate: "Mumbai 03-11-2024",
    productOrService: "Denim Jeans",
    quantity: 200,
    unit: "pcs",
  },
  {
    _id: "66869a299f2cecbc7cc11442",
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    mobileNumber: "7654321098",
    lookingFor: "Bulk Order Requirement for Cotton Kurtis and Salwar Suits.",
    locationandDate: "Jaipur 03-11-2024",
    productOrService: "Cotton Kurtis, Salwar Suits",
    quantity: 150,
    unit: "pcs",
  },
  {
    _id: "66869a299f2cecbc7cc11443",
    name: "Rajesh Verma",
    email: "rajesh.verma@example.com",
    mobileNumber: "6543210987",
    lookingFor: "Immediate Supply of Winter Jackets and Sweaters.",
    locationandDate: "Hyderabad 02-11-2024",
    productOrService: "Winter Jackets, Sweaters",
    quantity: 300,
    unit: "pcs",
  },
  {
    _id: "66869a299f2cecbc7cc11444",
    name: "Anita Patel",
    email: "anita.patel@example.com",
    mobileNumber: "5432109876",
    lookingFor: "Need Bulk Supplier for Children's School Uniforms.",
    locationandDate: "Ahmedabad 01-11-2024",
    productOrService: "School Uniforms",
    quantity: 500,
    unit: "sets",
  },
  {
    _id: "66869a299f2cecbc7cc11440",
    name: "Ravi Kumar",
    email: "ravi.kumar@example.com",
    mobileNumber: "9876543210",
    lookingFor:
      "Urgent Requirement for Bulk Purchase of Cotton T-Shirts and Hoodies.",
    locationandDate: "Delhi 12-10-2024",
    productOrService: "Cotton T-Shirts, Hoodies",
    quantity: 100,
    unit: "pcs",
  },
  {
    _id: "66869a299f2cecbc7cc11441",
    name: "Sita Sharma",
    email: "sita.sharma@example.com",
    mobileNumber: "9123456780",
    lookingFor: "Looking for Bulk Purchase of Formal Wear for Upcoming Event.",
    locationandDate: "Mumbai 14-10-2024",
    productOrService: "Formal Shirts, Suits",
    quantity: 200,
    unit: "pcs",
  },
  {
    _id: "66869a299f2cecbc7cc11442",
    name: "Anjali Gupta",
    email: "anjali.gupta@example.com",
    mobileNumber: "9988776655",
    lookingFor: "Need Urgent Supply of Winter Jackets for Distribution.",
    locationandDate: "Bangalore 15-10-2024",
    productOrService: "Winter Jackets",
    quantity: 150,
    unit: "pcs",
  },
];

const GarmentBuy = () => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [leadsViewed, setLeadsViewed] = useState(0);

  useEffect(() => {
    if (!userId) return;

    // Load the viewed leads from local storage
    const storedViewedLeads =
      JSON.parse(localStorage.getItem(`garmentViewedLeads_${userId}`)) || [];
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
      `garmentViewedLeads_${userId}`,
      JSON.stringify(updatedShownNumbers)
    );

    const buyer = GarmentBuys[index]; // Get the buyer information

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
            Garment Leads
          </li>
        </ol>
      </div>
      <div className="containersx">
        <div style={{ width: "200px", padding: "10px" }} className="browsers">
          <h3 style={{ marginTop: "30px" }}>Browse by Category</h3>
          <ul className="flt-list cust-scroll" id="category-lists">
            <li>
              <Link to="#">All Garments</Link>
            </li>
            <li>
              <Link to="#">T-Shirts</Link>
            </li>
            <li>
              <Link to="#">Formal Wear</Link>
            </li>
            <li>
              <Link to="#">Winter Wear</Link>
            </li>
          </ul>
        </div>
        <div className="buyers">
          {GarmentBuys.map((buyer, index) => (
            <div key={index} className="buyer-card">
              <h2 style={{ color: "red" }}>{buyer.productOrService}</h2>
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
                <strong>Looking For:</strong> {buyer.lookingFor}
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

export default GarmentBuy;
