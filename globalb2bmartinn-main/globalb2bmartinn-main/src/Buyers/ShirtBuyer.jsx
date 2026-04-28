import React from "react";
import BuyerPageTemplate from "../Components/BuyerPageTemplate";

const ShirtBuysData = [
  {
    "name": "Arun Kumar",
    "email": "arunkumar@gmail.com",
    "mobileNumber": "9876543210",
    "lookingFor": "Men's Formal Shirts",
    "locationandDate": "Chennai, Tamil Nadu 25-11-2024",
    "productOrService": "Formal Shirts",
    "quantity": 500,
    "unit": "pieces"
  },
  {
    "name": "Priya Singh",
    "email": "priyasingh@gmail.com",
    "mobileNumber": "9123456789",
    "lookingFor": "Casual Cotton Shirts",
    "locationandDate": "Lucknow, Uttar Pradesh 24-11-2024",
    "productOrService": "Cotton Shirts",
    "quantity": 300,
    "unit": "pieces"
  }
];

const ShirtBuyer = () => {
  return <BuyerPageTemplate keyword="Shirt" title="Shirts" initialData={ShirtBuysData} />;
};

export default ShirtBuyer;
