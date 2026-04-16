import React, { useState, useEffect } from "react";
import "./OnionBuy.css"; // Reuse the same CSS file, or create a new one if necessary.
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import Whyglobal from "../Components/Whyglobal";

const GheeBuys = [
  {
    name: "Sham, RM",
    email: "shamrm@gmail.com",
    mobileNumber: "+918778589609",
    locationandDate: "07-11-2024", // Use the current date or a specified date
    lookingFor: "Looking For Ghee In Large Quantity",
    productOrService: "Ghee",
    quantity: 1000,
    unit: "kg",
    _id: "667c0f639644befaa9548020", // Unique ID for this buyer
  },
  {
    name: "KisanDeals User",
    email: "kisandealuser@gmail.com",
    mobileNumber: "+919911443387",
    lookingFor:
      "searching for top-tier cow ghee suppliers for premium distribution",
    locationandDate: "South Delhi, Delhi 06-11-2024",
    productOrService: "Cow Ghee",
    quantity: 1,
    unit: "ton",
    __v: 0,
  },
  {
    name: "Suvidha Jain",
    email: "suvidha.mall7@gmail.com",
    mobileNumber: "+917303477777",
    lookingFor:
      "Seeking reliable suppliers of high-quality ghee for regular procurement",
    locationandDate: "Mumbai City, Maharashtra 06-11-2024",
    productOrService: "Ghee",
    quantity: 3,
    unit: "kg",
    __v: 0,
  },
  {
    name: "Pawan Yadav",
    email: "pawanyadav@gmail.com",
    mobileNumber: "+918318037947",
    lookingFor: "Always seeking premium ghee suppliers for bulk purchase",
    locationandDate: "Lalitpur, Uttar Pradesh 06-09-2024",
    productOrService: "Ghee",
    quantity: 50,
    unit: "kg",
    __v: 0,
  },
  {
    name: "Shivam",
    email: "shivam@gmail.com",
    mobileNumber: "+917830916010",
    lookingFor:
      "In search of large-scale ghee suppliers for extensive distribution",
    locationandDate: "Etawah, Uttar Pradesh 06-09-2024",
    productOrService: "Ghee",
    quantity: 1000,
    unit: "ton",
    __v: 0,
  },
  {
    name: "Dhurwendhar Sing",
    email: "dhurwendharsing@gmail.com",
    mobileNumber: "+917500648691",
    lookingFor: "Always on the lookout for high-quality cow ghee suppliers",
    locationandDate: "Hyderabad, Kachiguda, Telangana 06-09-2024",
    productOrService: "Cow Ghee",
    quantity: 4,
    unit: "ton",
    __v: 0,
  },
];

const GheeBuy = () => {
  const { userId } = useAuth();
  const [userIsPremium, setUserIsPremium] = useState(false);
  const [shownNumbers, setShownNumbers] = useState([]);
  const [leadsViewed, setLeadsViewed] = useState(0);

  useEffect(() => {
    if (!userId) return;

    // Load the viewed leads from local storage
    const storedViewedLeads =
      JSON.parse(localStorage.getItem(`gheeViewedLeads_${userId}`)) || [];
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
      `gheeViewedLeads_${userId}`,
      JSON.stringify(updatedShownNumbers)
    );

    const buyer = GheeBuys[index]; // Get the buyer information

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
              <Link to="#">Tamil Nadu</Link>
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
          </ul>

          <ul style={{ marginTop: "20px" }} className="flt-list cust-scroll">
            <h3>All Category</h3>
            <li>
              <Link to="#">Ghee</Link>
            </li>
            <li>
              <Link to="#">Peanuts</Link>
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
          {GheeBuys.map((buyer, index) => (
            <div key={index} className="buyer-card">
              <h2 style={{ color: "red" }}>{buyer.lookingFor}</h2>
              <p>
                <strong>Buyer Name:</strong> {buyer.name}
              </p>
              <p>
                <strong>Quantity:</strong> {buyer.quantity} {buyer.unit}
              </p>
              <p>
                <strong>Date:</strong> {buyer.locationandDate}{" "}
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

export default GheeBuy;
