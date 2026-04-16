import React, { useState, useEffect } from "react";
import "./OnionBuy.css"; // Assuming the same CSS file can be used, otherwise create a new CSS file.
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Whyglobal from "../Components/Whyglobal";

const CeramicFloorTilesBuys = [
  {
    name: "Sanju Cherian Varghese",
    email: "sanjucherianvarghese@gmail.com",
    mobileNumber: "+919875896478",
    lookingFor: "digital wall tiles",
    locationandDate: "Palakkad 17-10-2024",
    productOrService: "digital wall tiles urgent required",
    quantity: 25,
    unit: "ton",
  },
  {
    name: "Mr. Ram Krishna",
    email: "lalit.dora92@gmail.com",
    mobileNumber: "+918754896585",
    lookingFor: "digital wall tiles",
    locationandDate: "Belgaum 17-10-2024",
    productOrService: "digital wall tiles Required in bulk",
    quantity: 10,
    unit: "ton",
  },
  {
    name: "Lalit",
    email: "liladharenterprice@gmail.com",
    mobileNumber: "+918547845896",
    lookingFor: "Ceramic Digital Wall Tile",
    locationandDate: "Ranaghat 17-10-2024",
    productOrService: "Ceramic Digital Wall Tile",
    quantity: 100000,
    unit: "meter",
  },
  {
    name: "Hemant Karne",
    email: "hemantkarne@gmail.com",
    mobileNumber: "+9198658748589",
    lookingFor: "ceramic digital wall tiles",
    locationandDate: "Mumbai 17-10-2024",
    productOrService: "ceramic digital wall tiles",
    quantity: 50000,
    unit: "meter",
  },

  {
    name: "imthiyas",
    email: "mail.imthiyas1978@gmail.com",
    mobileNumber: "9718605089",
    lookingFor: "3D Ceramic Floor Tiles",
    locationandDate: "Mohali 15-10-2024",
    productOrService: "3D Ceramic Floor Tiles",
    quantity: 50,
    unit: "ton",
  },
  {
    name: "saltanat",
    email: "saltanat.yelgonova@gmail.com",
    mobileNumber: "9715079157",
    lookingFor: "Mosaic Tiles",
    locationandDate: "Dubai 15-10-2024",
    productOrService: "Mosaic Tiles",
    quantity: 40,
    unit: "ton",
  },
  {
    name: "arjun",
    email: "arjun@example.com",
    mobileNumber: "9876543210",
    lookingFor: "Luxury Vinyl Plank Flooring",
    locationandDate: "Panchkula 15-10-2024",
    productOrService: "Luxury Vinyl Plank Flooring",
    quantity: 30,
    unit: "ton",
  },
  {
    name: "preeti",
    email: "preeti@mail.com",
    mobileNumber: "9988776655",
    lookingFor: "High-Quality Porcelain Tiles",
    locationandDate: "Chandigarh 12-07-2024",
    productOrService: "High-Quality Porcelain Tiles",
    quantity: 20,
    unit: "ton",
  },
  {
    name: "siddharth",
    email: "siddharth123@gmail.com",
    mobileNumber: "8765432109",
    lookingFor: "Marble Floor Tiles",
    locationandDate: "Mohali 15-07-2024",
    productOrService: "Marble Floor Tiles",
    quantity: 40,
    unit: "ton",
  },
  {
    name: "tanvi",
    email: "tanvi@mail.com",
    mobileNumber: "7654321098",
    lookingFor: "Rustic Wooden Tiles",
    locationandDate: "Ambala 15-10-2024",
    productOrService: "Rustic Wooden Tiles",
    quantity: 25,
    unit: "ton",
  },
  {
    name: "rajiv",
    email: "rajiv1975@gmail.com",
    mobileNumber: "6543210987",
    lookingFor: "Granite Floor Tiles",
    locationandDate: "Mohali 20-07-2024",
    productOrService: "Granite Floor Tiles",
    quantity: 60,
    unit: "ton",
  },
  {
    name: "tanvi",
    email: "tanvi@mail.com",
    mobileNumber: "7654321098",
    lookingFor: "Rustic Wooden Tiles",
    locationandDate: "Ambala 15-10-2024",
    productOrService: "Rustic Wooden Tiles",
    quantity: 25,
    unit: "ton",
  },
];

const CeramicFloorTilesBuy = () => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [leadsViewed, setLeadsViewed] = useState(0);

  useEffect(() => {
    if (!userId) return;

    // Load the viewed leads from local storage
    const storedViewedLeads =
      JSON.parse(
        localStorage.getItem(`ceramicFloorTilesViewedLeads_${userId}`)
      ) || [];
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
      `ceramicFloorTilesViewedLeads_${userId}`,
      JSON.stringify(updatedShownNumbers)
    );

    const buyer = CeramicFloorTilesBuys[index]; // Get the buyer information

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
          {CeramicFloorTilesBuys.map((buyer, index) => (
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

export default CeramicFloorTilesBuy;
