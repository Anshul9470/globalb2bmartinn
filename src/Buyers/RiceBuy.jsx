import React, { useState, useEffect } from "react";
import "./OnionBuy.css"; // Assuming the same CSS file can be used, otherwise create a new CSS file.
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Whyglobal from "../Components/Whyglobal";

const RiceBuys = [
  {
    name: "Ravi Kumar",
    email: "ravi.kumar@gmail.com",
    mobileNumber: "9876543211",
    lookingFor: "Bulk Fresh Rice for export",
    productOrService: "rice",
    locationandDate: "Jaipur, 14-11-2024",
    quantity: 150,
    unit: "ton",
  },
  {
    name: "Amit Singh",
    email: "amit.singh@gmail.com",
    mobileNumber: "9876543212",
    lookingFor: "Bulk Rice for export",
    productOrService: "rice",
    locationandDate: "Delhi, 13-11-2024",
    quantity: 100,
    unit: "ton",
  },
  {
    name: "Suresh Kumar",
    email: "suresh.kumar@gmail.com",
    mobileNumber: "9876543213",
    lookingFor: "Bulk Rice for export",
    productOrService: "rice",
    locationandDate: "Chennai, 12-11-2024",
    quantity: 200,
    unit: "ton",
  },
  {
    name: "Deepak Sharma",
    email: "deepak.sharma@gmail.com",
    mobileNumber: "9876543214",
    lookingFor: "Bulk Rice for export",
    productOrService: "rice",
    locationandDate: "Mumbai, 11-11-2024",
    quantity: 120,
    unit: "ton",
  },
  {
    name: "Vijay Mehta",
    email: "vijay.mehta@gmail.com",
    mobileNumber: "9876543215",
    lookingFor: "Bulk Rice for export",
    productOrService: "rice",
    locationandDate: "Kolkata, 10-11-2024",
    quantity: 180,
    unit: "ton",
  },
  {
    name: "Sunil Yadav",
    email: "sunil.yadav@gmail.com",
    mobileNumber: "9876543216",
    lookingFor: "Bulk Rice for export",
    productOrService: "rice",
    locationandDate: "Bangalore, 09-11-2024",
    quantity: 250,
    unit: "ton",
  },
  {
    name: "Anjali Sharma",
    email: "anjali.sharma@yahoo.com",
    mobileNumber: "9988776650",
    lookingFor: "Long Grain Rice for retail",
    productOrService: "rice",
    locationandDate: "Bangalore, 05-11-2024",
    quantity: 80,
    unit: "ton",
  },
  {
    name: "Deepak Singh",
    email: "deepak.singh@hotmail.com",
    mobileNumber: "9123456788",
    lookingFor: "Organic Rice for local market",
    productOrService: "rice",
    locationandDate: "Chennai, 06-11-2024",
    quantity: 100,
    unit: "ton",
  },
  {
    name: "Suman Gupta",
    email: "suman.gupta@gmail.com",
    mobileNumber: "8887776666",
    lookingFor: "Best Quality Rice for distribution",
    productOrService: "rice",
    locationandDate: "Mumbai, 04-11-2024",
    quantity: 200,
    unit: "ton",
  },
  {
    name: "Vikram Yadav",
    email: "vikram.yadav@outlook.com",
    mobileNumber: "7676767676",
    lookingFor: "White Rice for manufacturing",
    productOrService: "rice",
    locationandDate: "Lucknow, 06-11-2024",
    quantity: 120,
    unit: "ton",
  },
  {
    name: "Rajeev Mehta",
    email: "rajeeve.mehta@gmail.com",
    mobileNumber: "9543216789",
    lookingFor: "Export Grade Rice in bulk",
    productOrService: "rice",
    locationandDate: "Kolkata, 07-11-2024",
    quantity: 300,
    unit: "ton",
  },
  {
    name: "Priya Rani",
    email: "priya.rani@gmail.com",
    mobileNumber: "8223344555",
    lookingFor: "High-Quality Rice for commercial use",
    productOrService: "rice",
    locationandDate: "Delhi, 05-11-2024",
    quantity: 250,
    unit: "ton",
  },
  {
    name: "Rajat k",
    email: "www.shabbysam143@gmail.com",
    mobileNumber: "7986997981",
    lookingFor: "Best Quantity Rice Required urgently",
    productOrService: "rice",
    locationandDate: "Alipurduar, 10-08-2024",
    quantity: 80,
    unit: "ton",
  },

  {
    name: "Leena Pathak",
    email: "leenaag.pathak@gmail.com",
    mobileNumber: "8810122922",
    lookingFor: "required 64 5% broken rice",
    locationandDate: "Nagpur 09-08-2024",
    productOrService: "Ir 64 5% broken rice",
    quantity: 65,
    unit: "ton",
  },

  {
    name: "jesudas choudhary",
    email: "jesudaschoudhary@gmail.com",
    mobileNumber: "8328034370",
    lookingFor: "Sona Masoori Rice",
    locationandDate: "Visakhapatnam 09-08-2024",
    productOrService: "Sona Masoori Rice",
    quantity: 2,
    unit: "ton",
  },
  {
    name: "praveen vinnakota",
    email: "praveen.vinnakota@gmail.com",
    mobileNumber: "8885630891",
    lookingFor: "1121 Golden Sella Basmati Rice",
    locationandDate: "Visakhapatnam 08-08-2024",
    productOrService: "1121 Golden Sella Basmati Rice",
    quantity: 5,
    unit: "ton",
  },

  {
    name: "Madhu",
    email: "madhu@manasatraders.com",
    mobileNumber: "9666433110",
    lookingFor: "High Quality Rice",
    locationandDate: "08-08-2024",
    productOrService: "rice",
    quantity: 500,
    unit: "ton",
  },
  {
    name: "Manasa Traders",
    email: "madhu@manasatraders.com",
    mobileNumber: "9666433110",
    lookingFor: "Bulk Rice Purchase",
    locationandDate: "07-08-2024",
    productOrService: "rice",
    quantity: 26,
    unit: "ton",
  },
  {
    name: "Prajwal P R",
    email: "prajwalpr207@gmail.com",
    mobileNumber: "6362329130",
    lookingFor: "Retail Rice Supply",
    productOrService: "rice",
    locationandDate: "07-08-2024",
    quantity: 200,
    unit: "kg",
  },
  {
    name: "Ramya Mutsuddi",
    email: "ramyamutsuddi@yahoo.co.in",
    mobileNumber: "9903785437",
    lookingFor: "Regular Rice",
    productOrService: "rice",
    locationandDate: "04-08-2024",
    quantity: 10,
    unit: "ton",
  },
  {
    name: "Ravikiran Kulkarni",
    email: "kulkarnirb567@gmail.com",
    mobileNumber: "9823817567",
    lookingFor: "Small Quantities",
    productOrService: "rice",
    locationandDate: "03-08-2024",
    quantity: 100,
    unit: "kg",
  },
  {
    name: "pawan",
    email: "since052@gmail.com",
    mobileNumber: "9264470402",
    lookingFor: "unique uretly",
    productOrService: "Broken rice",
    locationandDate: "Bhojpur, 10-08-2024",
    quantity: 100,
    unit: "ton",
  },
];

const RiceBuy = () => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [leadsViewed, setLeadsViewed] = useState(0);

  useEffect(() => {
    if (!userId) return;

    // Load the viewed leads from local storage
    const storedViewedLeads =
      JSON.parse(localStorage.getItem(`riceViewedLeads_${userId}`)) || [];
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
      `riceViewedLeads_${userId}`,
      JSON.stringify(updatedShownNumbers)
    );

    const buyer = RiceBuys[index]; // Get the buyer information

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
              <Link to="#">Rice</Link>
            </li>
          </ul>
        </div>
        <div className="buyers">
          {RiceBuys.map((buyer, index) => (
            <div key={index} className="buyer-card">
              <h2 style={{ color: "red" }}> {buyer.lookingFor}</h2>
              {/* <p >{buyer.productOrService}</p> */}
              <p>
                <strong>Buyer Name:</strong> {buyer.name}
              </p>
              <p>
                <strong>Quantity:</strong> {buyer.quantity} {buyer.unit}
              </p>
              <p>
                <strong>Date:</strong> {buyer.locationandDate}
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

export default RiceBuy;
