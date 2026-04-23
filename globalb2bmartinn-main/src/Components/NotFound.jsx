import React from 'react';
import './notfound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notFoundContainer">
            <div className="notFoundCard">
                <h1 className="errorNumber">404</h1>
                <h2 className="notFoundTitle">Oops! Nothing Found Here</h2>
                <p className="notFoundText">
                    The search result or page you are looking for doesn't exist in our directory. 
                    Try searching for a different keyword or explore our latest buyer and seller leads.
                </p>
                
                <div className="notFoundActions">
                    <Link to="/" className="actionBtn primaryBtn">
                        <i className="fa fa-home homeIcon"></i> Return Home
                    </Link>
                    <Link to="/buyer/grains" className="actionBtn secondaryBtn">
                        <i className="fa fa-users"></i> Explore Buyers
                    </Link>
                    <Link to="/agriculture-farm-tools-suppliers" className="actionBtn secondaryBtn">
                        <i className="fa fa-briefcase"></i> Explore Sellers
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
