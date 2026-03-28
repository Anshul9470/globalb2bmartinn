import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Topbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div
        className="container-fluid topbar"
        style={{ display: "flex", justifyContent: "left" }}
      >
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-md-19 pull-right">
                <ul>
                  <li>
                    <div>
                      <a>
                        <FontAwesomeIcon
                          style={{ marginRight: "5px" }}
                          icon={faPhone}
                        />
                        011-44760532
                      </a>
                    </div>
                  </li>
                  <li>|</li>
                  <li>
                    <div>
                      <a href="mailto:sales@globalb2bmart.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </a>
                      <a
                        className="hidden-xs hidden-sm"
                        href="mailto:sales@globalb2bmart.com"
                      >
                        sales@globalb2bmart.com
                      </a>
                    </div>
                  </li>
                  <li>|</li>
                  <li>
                    <div
                      className={`dropdown ${
                        isDropdownOpen ? "select-clicked" : ""
                      }`}
                    >
                      <div className="select" onClick={handleToggleDropdown}>
                        <span className="selected">Help</span>
                        <div
                          className={`caret ${
                            isDropdownOpen ? "caret-rotate" : ""
                          }`}
                        ></div>
                      </div>
                      <div
                        className={`menu ${isDropdownOpen ? "menu-open" : ""}`}
                      >
                        <Link to={"contact-us"}>
                          <li style={{ color: "black" }}>Call us</li>
                          <li style={{ color: "black" }}>Your Feedback</li>
                          <li style={{ color: "black" }} className="active">
                            Help
                          </li>
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
