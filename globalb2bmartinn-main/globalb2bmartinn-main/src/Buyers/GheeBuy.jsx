import React from "react";
import BuyerPageTemplate from "../Components/BuyerPageTemplate";

const GheeBuysData = [
  {
    "name": "Brijesh Mishra",
    "email": "brijeshmishra@gmail.com",
    "mobileNumber": "9876543210",
    "lookingFor": "Pure Cow Ghee",
    "locationandDate": "Varanasi, Uttar Pradesh 25-11-2024",
    "productOrService": "Cow Ghee",
    "quantity": 100,
    "unit": "kg"
  },
  {
    "name": "Anjali Patel",
    "email": "anjalipatel@gmail.com",
    "mobileNumber": "9123456789",
    "lookingFor": "Buffalo Ghee in bulk",
    "locationandDate": "Surat, Gujarat 24-11-2024",
    "productOrService": "Buffalo Ghee",
    "quantity": 200,
    "unit": "kg"
  }
];

const GheeBuy = () => {
  return <BuyerPageTemplate keyword="Ghee" title="Desi Ghee" initialData={GheeBuysData} />;
};

export default GheeBuy;
