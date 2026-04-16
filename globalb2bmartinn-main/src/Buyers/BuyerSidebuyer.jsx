import React from "react";
import { Link } from "react-router-dom";
import "./OnionBuy.css"; // Assuming you have CSS in an external file for styling

const BuyerSide = () => {
  return (
    <div className="sidebar">
      <div className="mains-slide">
        <div className="tk23-hkCont_onergt">
          <div className="tk23-hkCont_premserv__box">
            <h1 className="tk23-hkCont_premserv__ttl">Our Membership Plans</h1>

            <div className="tk23-hkCont_premserv__list">
              <Link to="/packages">
                <div className="tk23-hkCont_premservs">
                  <span className="fontss" style={{ backgroundColor: "#fff" }}>
                    Standard Plan
                  </span>
                </div>
              </Link>
            </div>

            <div className="tk23-hkCont_premserv__list">
              <Link to="/packages">
                <div className="tk23-hkCont_premservs">
                  <span className="fontss" style={{ backgroundColor: "#fff" }}>
                    Advance Plan
                  </span>
                </div>
              </Link>
            </div>

            <div className="tk23-hkCont_premserv__list">
              <Link to="/packages">
                <div className="tk23-hkCont_premservs">
                  <span className="fontss" style={{ backgroundColor: "#fff" }}>
                    Premium Plan
                  </span>
                </div>
              </Link>
              <Link to="/packages">
                <div className="reach">
                  <span className="reahhere">Call Now</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerSide;
