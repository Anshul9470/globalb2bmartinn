import React, { useState, useEffect } from "react";
import "./OnionBuy.css"; // Assuming the same CSS file can be used
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Whyglobal from "../Components/Whyglobal";

const GoldRingBuys = [
  {
    _id: "670782e6c4b59040461da085",
    name: "Meera Kapoor",
    email: "meerajewels@gmail.com",
    lookingFor: "Looking for Gold necklace with antique finish",
    mobileNumber: "+919987654321",
    locationandDate: "Mumbai, 06-11-2024",
    productOrService: "gold necklace",
    quantity: 3,
    unit: "pcs",
  },
  {
    _id: "670782e6c4b59040461da086",
    name: "Arjun Desai",
    email: "arjunjewelers@gmail.com",
    lookingFor: "Need Gold necklace with diamond accents",
    mobileNumber: "+919876543210",
    locationandDate: "Ahmedabad, 05-11-2024",
    productOrService: "gold necklace",
    quantity: 7,
    unit: "pcs",
  },
  {
    _id: "670782e6c4b59040461da087",
    name: "Neha Patel",
    email: "nehapatelgold@gmail.com",
    lookingFor: "Want Gold necklace in a modern design",
    mobileNumber: "+919912345678",
    locationandDate: "Surat, 05-11-2024",
    productOrService: "gold necklace",
    quantity: 5,
    unit: "pcs",
  },
  {
    _id: "670782e6c4b59040461da088",
    name: "Ravi Gupta",
    email: "ravijewelstore@gmail.com",
    lookingFor: "Interested in Gold necklace with intricate detailing",
    mobileNumber: "+919998877665",
    locationandDate: "Delhi, 05-11-2024",
    productOrService: "gold necklace",
    quantity: 4,
    unit: "pcs",
  },
  {
    _id: "670782e6c4b59040461da089",
    name: "Sakshi Mehta",
    email: "saksjewels@gmail.com",
    lookingFor: "Need Gold necklace with traditional patterns",
    mobileNumber: "+919876543209",
    locationandDate: "Jaipur, 04-11-2024",
    productOrService: "gold necklace",
    quantity: 6,
    unit: "pcs",
  },

  {
    _id: "12345",
    name: "Lalit",
    email: "kingpure89@gmail.com",
    mobileNumber: "+919856478952",
    lookingFor: "Urgently required Gold Rings With unique designs",
    locationandDate: "Delhi, 04-11-2024",
    productOrService: "Gold Ring",
    quantity: 20,
    unit: "pcs",
  },
  {
    _id: "670782e6c4b59040461da084",
    name: "Sandesh Durgawale",
    email: "liladharenterprice@gmail.com",
    lookingFor: " Need Gold necklace With latest designs",
    mobileNumber: "+919632587452",
    locationandDate: "Botad,  09-10-2024",
    productOrService: "gold necklace",
    quantity: 5,
    unit: "pcs",
  },
  {
    _id: "12345",
    name: "Basha",
    email: "kingpure89@gmail.com",
    mobileNumber: "+919754820365",
    lookingFor: "Required Gold Jewellery unique patterns",
    locationandDate: "Rangareddy,  09-10-2024",
    productOrService: "Jewellery",
    quantity: 50,
    unit: "pcs",
  },
  {
    _id: "670782e6c4b59040461da085",
    name: "Aarti Verma",
    email: "aartijewels@gmail.com",
    lookingFor: "Looking for Gold Rings with intricate designs",
    mobileNumber: "+919812345678",
    locationandDate: "Mumbai, 10-10-2024",
    productOrService: "gold rings",
    quantity: 10,
    unit: "pcs",
  },
  {
    _id: "670782e6c4b59040461da086",
    name: "Rajesh Singh",
    email: "rajeshjewelstore@gmail.com",
    lookingFor: "Need Gold Earrings with studded gemstones",
    mobileNumber: "+919876543210",
    locationandDate: "Delhi, 11-10-2024",
    productOrService: "gold earrings",
    quantity: 15,
    unit: "pcs",
  },
  {
    _id: "670782e6c4b59040461da087",
    name: "Priya Sharma",
    email: "priyasharmajewels@gmail.com",
    lookingFor: "Want Gold Bangles with traditional patterns",
    mobileNumber: "+919654321234",
    locationandDate: "Jaipur, 12-10-2024",
    productOrService: "gold bangles",
    quantity: 8,
    unit: "pairs",
  },
  {
    _id: "670782e6c4b59040461da088",
    name: "Sunil Mehta",
    email: "mehtagoldshop@gmail.com",
    lookingFor: "Interested in Gold Chains with unique designs",
    mobileNumber: "+919998877665",
    locationandDate: "Ahmedabad, 13-10-2024",
    productOrService: "gold chains",
    quantity: 20,
    unit: "pcs",
  },
  {
    _id: "670782e6c4b59040461da089",
    name: "Suman Joshi",
    email: "sumanjewels@gmail.com",
    lookingFor: "Need Gold Bracelets with minimalistic style",
    mobileNumber: "+919876543209",
    locationandDate: "Chennai, 14-10-2024",
    productOrService: "gold bracelets",
    quantity: 12,
    unit: "pcs",
  },
];

const GoldRingBuy = () => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [leadsViewed, setLeadsViewed] = useState(0);

  useEffect(() => {
    if (!userId) return;

    // Load the viewed leads from local storage
    const storedViewedLeads =
      JSON.parse(localStorage.getItem(`goldRingViewedLeads_${userId}`)) || [];
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
      `goldRingViewedLeads_${userId}`,
      JSON.stringify(updatedShownNumbers)
    );

    const buyer = GoldRingBuys[index]; // Get the buyer information

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
        <div style={{ width: "200px", padding: "10px" }} className="browsers">
          <h3 style={{ marginTop: "30px" }}>Browse by State</h3>
          <ul className="flt-list cust-scroll">
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
              <Link to="#">3D Ceramic Floor Tiles</Link>
            </li>
            <li>
              <Link to="#">Eye Drops</Link>
            </li>
            <li>
              <Link to="#">Maize</Link>
            </li>
            <li>
              <Link to="#">Rice</Link>
            </li>
            <li>
              <Link to="#">Wheat</Link>
            </li>
            <li>
              <Link to="#">Barley</Link>
            </li>
            <li>
              <Link to="#">Soybean</Link>
            </li>
          </ul>
        </div>
        <div className="buyers">
          {GoldRingBuys.map((buyer, index) => (
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

export default GoldRingBuy;
