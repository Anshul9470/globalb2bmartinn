import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Buyers/AuthContext';
import './SearchResults.css';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userId } = useAuth();
  const { results = [], searchType, searchQuery, noResults, error } = location.state || { results: [], searchType: 'all' };
  const query = new URLSearchParams(location.search).get('query');
  const typeParam = new URLSearchParams(location.search).get('type') || searchType;

  const maskEmail = (email) => {
    if (!email) return '';
    const [user, domain] = email.split('@');
    return `${user.substring(0, 2)}***@${domain}`;
  };

  const maskPhone = (phone) => {
    if (!phone) return '';
    return `${phone.substring(0, 2)}*******${phone.substring(phone.length - 2)}`;
  };

  const handleViewMore = () => {
    if (userId) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  const getTitle = () => {
    if (typeParam === 'buyer') {
      return 'Available Buyers';
    } else if (typeParam === 'company') {
      return 'Available Sellers';
    } else if (query) {
      return `Search Results for "${query}"`;
    } else {
      return 'Search Results';
    }
  };

  const isBuyerSearch = typeParam === 'buyer';
  const isSellerSearch = typeParam === 'company';

  return (
    <div className="search-results">
      <h1>{getTitle()}</h1>
      
      {error && (
        <div className="error-message">
          <p>Error fetching results. Please try again.</p>
        </div>
      )}
      
      {noResults && results.length === 0 && (
        <div className="no-results-message">
          <p>No {isBuyerSearch ? 'buyers' : 'sellers'} found matching "{query}". Showing all {isBuyerSearch ? 'buyers' : 'sellers'}.</p>
        </div>
      )}
      
      <p className="result-count">Found {results.length} result{results.length !== 1 ? 's' : ''}</p>
      
      {results.length > 0 ? (
        <div className="results-grid">
          {results.map((item, index) => (
            <div key={index} className="result-card">
              <div className="entity-info">
                {isBuyerSearch ? (
                  // Display Buyer Information
                  <>
                    <h3>{item.name}</h3>
                    <div className="info-section">
                      <p><strong>Email:</strong> {maskEmail(item.email)}</p>
                      <p><strong>Mobile:</strong> {maskPhone(item.mobileNumber)}</p>
                      <p><strong>City:</strong> {item.city}</p>
                      <p><strong>Looking For:</strong> {item.productOrService}</p>
                      <p><strong>Quantity Required:</strong> {item.quantity} {item.unit}</p>
                    </div>
                    <button 
                      onClick={handleViewMore}
                      className="contact-btn view-more-btn"
                    >
                      View More Details
                    </button>
                  </>
                ) : (
                  // Display Seller Information
                  <>
                    <h3>{item.name}</h3>
                    <div className="info-section">
                      <p><strong>Company:</strong> {item.companyName}</p>
                      <p><strong>Email:</strong> {maskEmail(item.email)}</p>
                      <p><strong>Mobile:</strong> {maskPhone(item.mobileNumber)}</p>
                      {item.statename && <p><strong>State:</strong> {item.statename}</p>}
                      {item.cityname && <p><strong>City:</strong> {item.cityname}</p>}
                      {item.productOrService && <p><strong>Product/Service:</strong> {item.productOrService}</p>}
                      {item.role && <p><strong>Role:</strong> {item.role}</p>}
                    </div>
                    {item.images && item.images.length > 0 && (
                      <div className="seller-images">
                        {item.images.slice(0, 3).map((img, imgIdx) => (
                          <img 
                            key={imgIdx} 
                            src={`http://localhost:3005${img}`} 
                            alt="Seller" 
                            className="seller-image"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        ))}
                      </div>
                    )}
                    <button 
                      onClick={handleViewMore}
                      className="contact-btn view-more-btn"
                    >
                      View More Details
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>No {isBuyerSearch ? 'buyers' : 'sellers'} found matching your search.</p>
          <Link to="/" className="back-btn">Back to Home</Link>
        </div>
      )}
    </div>
  );
};

export default SearchResults;