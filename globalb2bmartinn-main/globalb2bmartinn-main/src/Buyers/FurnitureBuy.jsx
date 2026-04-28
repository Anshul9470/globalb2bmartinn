import React from "react";
import BuyerPageTemplate from "../Components/BuyerPageTemplate";

const FurnitureBuysData = [
  {
    "name": "Abhi Gupta",
    "email": "abhi123@gmail.com",
    "mobileNumber": "8871650343",
    "lookingFor": "Furniture Sofa Leg",
    "locationandDate": "Indore, Madhya Pradesh 25-06-2024",
    "productOrService": "Furniture Sofa Leg",
    "quantity": 10,
    "unit": "piece",
    "_id": "667a73f69644befaa9546059"
  },
  {
    "name": "Abhi Gupta",
    "email": "abhi123@gmail.com",
    "mobileNumber": "8871650343",
    "lookingFor": "Furniture Sofa Leg",
    "locationandDate": "Indore, Madhya Pradesh 25-06-2024",
    "productOrService": "Furniture Sofa Leg",
    "quantity": 10,
    "unit": "piece",
    "_id": "667a74079644befaa9546061"
  },
  {
    "name": "Siddharth Jaiswal",
    "email": "siddharthjaiswal02@gmail.com",
    "mobileNumber": "9109555621",
    "lookingFor": "Furniture Hardware",
    "locationandDate": "Indore, Madhya Pradesh 25-06-2024",
    "productOrService": "Furniture Hardware",
    "quantity": 100,
    "unit": "piece",
    "_id": "667a7c889644befaa9546200"
  }
];

const FurnitureBuy = () => {
  return <BuyerPageTemplate keyword="Furniture" title="Furniture" initialData={FurnitureBuysData} />;
};

export default FurnitureBuy;
