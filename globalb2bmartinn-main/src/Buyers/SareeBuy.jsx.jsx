import React, { useState, useEffect } from "react";
import "./OnionBuy.css"; // Assuming a similar CSS file is used.
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Whyglobal from "../Components/Whyglobal";

const SareeBuys = [
  {
    _id: "66869a299f2cecbc7cc11443",
    name: "Ramesh",
    email: "ramesh@example.com",
    mobileNumber: "9876543210",
    lookingFor: "Silk Saree unique pattern designs",
    locationandDate: "Chennai 25-10-2024",
    productOrService: "Silk Saree",
    quantity: 2500,
    unit: "pcs",
  },
  {
    _id: "66869a299f2cecbc7cc11444",
    name: "Anjali",
    email: "anjali@example.com",
    mobileNumber: "9123456789",
    lookingFor: "Silk Saree unique pattern designs",
    locationandDate: "Delhi 25-10-2024",
    productOrService: "Silk Saree",
    quantity: 3500,
    unit: "pcs",
  },
  {
    _id: "66869a299f2cecbc7cc11445",
    name: "Priya",
    email: "priya@example.com",
    mobileNumber: "9234567890",
    lookingFor: "Silk Saree unique pattern designs",
    locationandDate: "Mumbai 25-10-2024",
    productOrService: "Silk Saree",
    quantity: 4000,
    unit: "pcs",
  },
  {
    _id: "66869a299f2cecbc7cc11446",
    name: "Vikram",
    email: "vikram@example.com",
    mobileNumber: "9345678901",
    lookingFor: "Silk Saree unique pattern designs",
    locationandDate: "Hyderabad 25-10-2024",
    productOrService: "Silk Saree",
    quantity: 2000,
    unit: "pcs",
  },
  {
    _id: "66869a299f2cecbc7cc11447",
    name: "Nisha",
    email: "nisha@example.com",
    mobileNumber: "9456789012",
    lookingFor: "Silk Saree unique pattern designs",
    locationandDate: "Pune 25-10-2024",
    productOrService: "Silk Saree",
    quantity: 3200,
    unit: "pcs",
  },
  {
    _id: "66869a299f2cecbc7cc11448",
    name: "Amit",
    email: "amit@example.com",
    mobileNumber: "9567890123",
    lookingFor: "Silk Saree unique pattern designs",
    locationandDate: "Kolkata 25-10-2024",
    productOrService: "Silk Saree",
    quantity: 2700,
    unit: "pcs",
  },
  {
    _id: "66869a299f2cecbc7cc11449",
    name: "Sunita",
    email: "sunita@example.com",
    mobileNumber: "9678901234",
    lookingFor: "Silk Saree unique pattern designs",
    locationandDate: "Bangalore 25-10-2024",
    productOrService: "Silk Saree",
    quantity: 2900,
    unit: "pcs",
  },
  {
    _id: "66869a299f2cecbc7cc11450",
    name: "Rajesh",
    email: "rajesh@example.com",
    mobileNumber: "9789012345",
    lookingFor: "Silk Saree unique pattern designs",
    locationandDate: "Ahmedabad 25-10-2024",
    productOrService: "Silk Saree",
    quantity: 3300,
    unit: "pcs",
  },
  {
    _id: "66869a299f2cecbc7cc11451",
    name: "Sneha",
    email: "sneha@example.com",
    mobileNumber: "9890123456",
    lookingFor: "Silk Saree unique pattern designs",
    locationandDate: "Surat 25-10-2024",
    productOrService: "Silk Saree",
    quantity: 3100,
    unit: "pcs",
  },
  {
    _id: "66869a299f2cecbc7cc11452",
    name: "Manoj",
    email: "manoj@example.com",
    mobileNumber: "9901234567",
    lookingFor: "Silk Saree unique pattern designs",
    locationandDate: "Coimbatore 25-10-2024",
    productOrService: "Silk Saree",
    quantity: 2800,
    unit: "pcs",
  },
  {
    name: "Meena Gupta",
    email: "meena.gupta@gmail.com",
    mobileNumber: "9765432109",
    lookingFor: "Cotton Saree Required urgently",
    locationandDate: "Chennai 16-10-2024",
    productOrService: "Cotton Saree",
    quantity: 100,
    unit: "pcs",
  },

  {
    name: "Anita Kapoor",
    email: "anita.kapoor@gmail.com",
    mobileNumber: "8765432109",
    lookingFor: "Banarasi Saree Required urgently",
    locationandDate: "Kolkata 16-10-2024",
    productOrService: "Banarasi Saree",
    quantity: 25,
    unit: "pcs",
  },

  {
    name: "Nidhi Sharma",
    email: "nidhi.sharma@gmail.com",
    mobileNumber: "9876543210",
    lookingFor: "Chiffon Saree Required urgently",
    locationandDate: "Jaipur 16-10-2024",
    productOrService: "Chiffon Saree",
    quantity: 75,
    unit: "pcs",
  },

  {
    _id: "saree004",
    name: "Nidhi Sharma",
    email: "nidhi.sharma@gmail.com",
    mobileNumber: "+919876543210",
    locationandDate: "Jaipur 16-10-2024",
    productOrService: "Chiffon Sarees",
    quantity: 75,
    unit: "pcs",
    lookingFor: "Urgent saree, best party wear design",
  },

  {
    _id: "66869a299f2cecbc7cc11440",
    name: "Anjali",
    email: "anjali@example.com",
    mobileNumber: "9876543210",
    lookingFor: "banarasi  Saree Required urgently",
    locationandDate: "Delhi 16-10-2024",
    productOrService: "banarasi  Saree",
    quantity: 400,
    unit: "pcs",
  },
  {
    name: "Ritika Jain",
    email: "ritika.jain@gmail.com",
    mobileNumber: "9834567890",
    lookingFor: "Silk Saree Required urgently",
    locationandDate: "Surat 16-10-2024",
    productOrService: "Silk Saree",
    quantity: 50,
    unit: "pcs",
  },

  {
    _id: "66869a299f2cecbc7cc11441",
    name: "Priya",
    email: "priya@example.com",
    mobileNumber: "9123456780",
    lookingFor: "Bandni Saree for bulk purchase",
    locationandDate: "Mumbai 14-10-2024",
    productOrService: "Bandni Saree",
    quantity: 2000,
    unit: "pcs",
  },
  {
    _id: "66869a299f2cecbc7cc11442",
    name: "Geeta",
    email: "geeta@example.com",
    mobileNumber: "9988776655",
    lookingFor: "Silk Saree unique pattern designs",
    locationandDate: "Bangalore 15-10-2024",
    productOrService: "Silk Saree",
    quantity: 3000,
    unit: "pcs",
  },
];

const SareeBuy = () => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [leadsViewed, setLeadsViewed] = useState(0);

  useEffect(() => {
    if (!userId) return;

    // Load the viewed leads from local storage
    const storedViewedLeads =
      JSON.parse(localStorage.getItem(`sareeViewedLeads_${userId}`)) || [];
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
      `sareeViewedLeads_${userId}`,
      JSON.stringify(updatedShownNumbers)
    );

    const buyer = SareeBuys[index]; // Get the buyer information

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
            Saree Leads
          </li>
        </ol>
      </div>
      <div className="containersx">
        <div style={{ width: "200px", padding: "10px" }} className="browsers">
          <h3 style={{ marginTop: "30px" }}>Browse by Category</h3>
          <ul className="flt-list cust-scroll" id="category-lists">
            <li>
              <Link to="#">All Sarees</Link>
            </li>
            <li>
              <Link to="#">banarasi Sarees</Link>
            </li>
            <li>
              <Link to="#">Bandni Sarees</Link>
            </li>
            <li>
              <Link to="#">Silk Sarees</Link>
            </li>
          </ul>
        </div>
        <div className="buyers">
          {SareeBuys.map((buyer, index) => (
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

export default SareeBuy;
