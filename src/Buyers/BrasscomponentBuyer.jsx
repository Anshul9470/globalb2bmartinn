import React, { useState, useEffect } from "react";
import "./OnionBuy.css"; // Assuming the same CSS file can be used, otherwise create a new CSS file.
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Whyglobal from "../Components/Whyglobal";

const BrassCoilsBuys = [
  {
    _id: "66869a299f2cecbc7cc11432",
    name: "Brass Coils required in bulk",
    email: "buyerfromindia@gmail.com", // Assuming the email
    mobileNumber: "9890767167", // Assuming a placeholder phone number
    lookingFor: "Brass Coils required in bulk",
    locationandDate: "Gujarat 14-11-2024",
    productOrService: "Brass Coils",
    quantity: 50,
    unit: "ton",
    specifications: "Size: 63:37 0.40 X 40 0.40 X 53",
    shippingTerms: "CIF",
    destinationPort: "Gujarat, India",
    paymentTerms: "To be discussed with sellers",
  },
  {
    _id: "56869a299f2cecbc7cc11440",
    name: "Brass Electric Fittings bulk purchase",
    email: "electricfittingsbuyer@gmail.com",
    mobileNumber: "9176530911",
    lookingFor: "Brass Electric Fittings bulk purchase",
    locationandDate: "Maharashtra 15-11-2024",
    productOrService: "Brass Electric Fittings",
    quantity: 100,
  },
  {
    _id: "46869a299f2cecbc7cc11441",
    name: "Brass Plumbing Fittings required",
    email: "plumbingfittingsbuyer@gmail.com",
    mobileNumber: "9821034557",
    lookingFor: "Brass Plumbing Fittings required",
    locationandDate: "Tamil Nadu 14-11-2024",
    productOrService: "Brass Plumbing Fittings",
    quantity: 200,
  },
  {
    _id: "36869a299f2cecbc7cc11442",
    name: "Brass Pipe Fittings for installation",
    email: "pipefittingsbuyer@gmail.com",
    mobileNumber: "9418765410",
    lookingFor: "Brass Pipe Fittings for installation",
    locationandDate: "Andhra Pradesh 13-11-2024",
    productOrService: "Brass Pipe Fittings",
    quantity: 50,
  },
  {
    _id: "26869a299f2cecbc7cc11443",
    name: "Brass Valves for industrial use",
    email: "valvesbuyer@gmail.com",
    mobileNumber: "9933421002",
    lookingFor: "Brass Valves for industrial use",
    locationandDate: "Delhi 12-11-2024",
    productOrService: "Brass Valves",
    quantity: 300,
  },
  {
    _id: "16869a299f2cecbc7cc11444",
    name: "Brass Faucet Fittings for homes",
    email: "faucetbuyer@gmail.com",
    mobileNumber: "9876543210",
    lookingFor: "Brass Faucet Fittings for homes",
    locationandDate: "Uttar Pradesh 13-11-2024",
    productOrService: "Brass Faucet Fittings",
    quantity: 75,
  },
  {
    _id: "06869a299f2cecbc7cc11445",
    name: "Brass Hose Fittings required",
    email: "hosefittingsbuyer@gmail.com",
    mobileNumber: "9801122334",
    lookingFor: "Brass Hose Fittings required",
    locationandDate: "Haryana 11-11-2024",
    productOrService: "Brass Hose Fittings",
    quantity: 120,
  },
  {
    _id: "56869a299f2cecbc7cc11446",
    name: "Brass Couplings for machinery",
    email: "couplingsbuyer@gmail.com",
    mobileNumber: "9123456789",
    lookingFor: "Brass Couplings for machinery",
    locationandDate: "Rajasthan 10-11-2024",
    productOrService: "Brass Couplings",
    quantity: 150,
  },
  {
    _id: "46869a299f2cecbc7cc11447",
    name: "Brass Fittings for gas lines",
    email: "gasfittingsbuyer@gmail.com",
    mobileNumber: "9754312589",
    lookingFor: "Brass Fittings for gas lines",
    locationandDate: "Gujarat 12-11-2024",
    productOrService: "Brass Fittings",
    quantity: 50,
  },
  {
    _id: "36869a299f2cecbc7cc11448",
    name: "Brass Flange Fittings for pipeline",
    email: "flangeboughtbuyer@gmail.com",
    mobileNumber: "9532768543",
    lookingFor: "Brass Flange Fittings for pipeline",
    locationandDate: "Karnataka 10-11-2024",
    productOrService: "Brass Flange Fittings",
    quantity: 80,
  },
  {
    _id: "26869a299f2cecbc7cc11449",
    name: "Brass Compression Fittings for high pressure",
    email: "compressionfittingsbuyer@gmail.com",
    mobileNumber: "9465721098",
    lookingFor: "Brass Compression Fittings for high pressure",
    locationandDate: "Bihar 10-11-2024",
    productOrService: "Brass Compression Fittings",
    quantity: 200,
  },
];

const BrassCoilsBuy = () => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [leadsViewed, setLeadsViewed] = useState(0);

  useEffect(() => {
    if (!userId) return;

    // Load the viewed leads from local storage
    const storedViewedLeads =
      JSON.parse(localStorage.getItem(`brassCoilsViewedLeads_${userId}`)) || [];
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
      `brassCoilsViewedLeads_${userId}`,
      JSON.stringify(updatedShownNumbers)
    );

    const buyer = BrassCoilsBuys[index]; // Get the buyer information

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
          {BrassCoilsBuys.map((buyer, index) => (
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

export default BrassCoilsBuy;
