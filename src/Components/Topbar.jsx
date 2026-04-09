import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Topbar.css";

function Topbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="topbar">
      <div className="container">
        <div className="topbarContent">
          <div className="topbarLeft">
            <a href="tel:011-44760532" className="topbarLink">
              <FontAwesomeIcon icon={faPhone} className="topbarIcon" />
              <span>011-44760532</span>
            </a>
            <span className="separator">|</span>
            <a href="mailto:sales@globalb2bmart.com" className="topbarLink">
              <FontAwesomeIcon icon={faEnvelope} className="topbarIcon" />
              <span className="hidden-xs">sales@globalb2bmart.com</span>
            </a>
          </div>
          
          <div className="topbarRight">
            <div className={`topbarDropdown ${isDropdownOpen ? "open" : ""}`}>
              <div className="dropdownToggle" onClick={handleToggleDropdown}>
                <span>Help</span>
                <FontAwesomeIcon icon={faChevronDown} className={`caretIcon ${isDropdownOpen ? "rotate" : ""}`} />
              </div>
              {isDropdownOpen && (
                <div className="dropdownMenu">
                  <Link to="/contact-us" onClick={() => setIsDropdownOpen(false)}>Call us</Link>
                  <Link to="/contact-us" onClick={() => setIsDropdownOpen(false)}>Your Feedback</Link>
                  <Link to="/contact-us" onClick={() => setIsDropdownOpen(false)}>Help Center</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
