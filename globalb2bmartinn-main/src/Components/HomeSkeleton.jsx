import React from "react";
import "./skeleton.css";

const HomeSkeleton = () => {
  return (
    <div className="skeleton-container">
      {/* HEADER SKELETON */}
      <div className="skeleton-header-wrap">
        <div className="skeleton-item sk-logo"></div>
        <div className="skeleton-item sk-nav-buttons"></div>
      </div>

      {/* SUPER HERO BANNER SKELETON (As per Image 1) */}
      <div className="skeleton-hero-super">
         <div className="skeleton-item sk-hero-title-main"></div>
         <div className="skeleton-item sk-hero-title-sub"></div>
         
         <div className="sk-hero-badges">
             <div className="skeleton-item sk-badge"></div>
             <div className="skeleton-item sk-badge"></div>
             <div className="skeleton-item sk-badge"></div>
             <div className="skeleton-item sk-badge"></div>
         </div>

         <div className="skeleton-item sk-search-bar-huge"></div>
      </div>

      {/* EXPLORE PREMIUM CATEGORIES SKELETON (As per Image 2) */}
      <div className="sk-section">
        <div className="skeleton-item skeleton-title center-title"></div>
        <div className="skeleton-grid-5">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="skeleton-item sk-premium-cat-card"></div>
          ))}
        </div>
      </div>

      {/* WHY PARTNER SECTION */}
      <div className="sk-section">
        <div className="skeleton-item skeleton-title center-title"></div>
        <div className="skeleton-grid-4">
          <div className="skeleton-item sk-partner-card"></div>
          <div className="skeleton-item sk-partner-card"></div>
          <div className="skeleton-item sk-partner-card"></div>
          <div className="skeleton-item sk-partner-card"></div>
        </div>
      </div>

      {/* FEATURED PRODUCTS (ALL CATEGORY) */}
      <div className="sk-section">
        <div className="skeleton-item skeleton-title center-title"></div>
        <div className="skeleton-grid-allcat">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="sk-cat-card">
              <div className="skeleton-item sk-cat-img"></div>
              <div className="skeleton-item sk-cat-text"></div>
              <div className="skeleton-item sk-cat-text short"></div>
              <div className="skeleton-item sk-cat-btn"></div>
            </div>
          ))}
        </div>
      </div>

      {/* TOP COUNTRIES */}
      <div className="sk-section">
        <div className="skeleton-item skeleton-title center-title"></div>
        <div className="skeleton-grid-countries">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="skeleton-item sk-country-badge"></div>
          ))}
        </div>
      </div>

      {/* FRESH BUYING LEADS */}
      <div className="sk-section">
        <div className="skeleton-item skeleton-title center-title"></div>
        <div className="skeleton-leads">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="skeleton-item skeleton-lead-row"></div>
          ))}
        </div>
      </div>

      {/* HOW GLOBAL TRADE WORKS */}
      <div className="sk-section">
        <div className="skeleton-item skeleton-title center-title"></div>
        <div className="skeleton-grid-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="skeleton-item sk-partner-card"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSkeleton;
