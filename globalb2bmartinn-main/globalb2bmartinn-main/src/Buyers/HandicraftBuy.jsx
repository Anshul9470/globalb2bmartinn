import React from "react";
import BuyerPageTemplate from "../Components/BuyerPageTemplate";

const HandicraftBuysData = [
  {
    _id: "11223344556677889900",
    name: "Priya Sharma",
    email: "priya.sharma@gmail.com",
    mobileNumber: "9876543210",
    lookingFor: "Wooden Carvings",
    locationandDate: "Jaipur, Rajasthan 17-10-2024",
    productOrService: "Handcrafted Wooden Items",
    quantity: 200,
    unit: "pieces",
  },
  {
    _id: "11223344556677889901",
    name: "Rahul Mehta",
    email: "rahul.mehta@gmail.com",
    mobileNumber: "9987654321",
    lookingFor: "Handmade Pottery",
    locationandDate: "Bhopal, Madhya Pradesh 16-10-2024",
    productOrService: "Pottery Supplier",
    quantity: 100,
    unit: "pieces",
  },
  {
    _id: "11223344556677889902",
    name: "Aarti Verma",
    email: "aarti.verma@gmail.com",
    mobileNumber: "9123456789",
    lookingFor: "Woven Handbags",
    locationandDate: "Delhi, 15-10-2024",
    productOrService: "Handcrafted Bags Manufacturer",
    quantity: 50,
    unit: "pieces",
  },
];

const HandicraftBuy = () => {
  return <BuyerPageTemplate keyword="Handicraft" title="Handicrafts" initialData={HandicraftBuysData} />;
};

export default HandicraftBuy;
