import React from "react";
import BuyerPageTemplate from "../Components/BuyerPageTemplate";

const SpiceBuyersData = [
  {
    name: "Rajesh Kumar",
    email: "rajesh.kumar@gmail.com",
    mobileNumber: "9998776655",
    locationandDate: "Delhi, 20-11-2024",
    lookingFor: "Looking for bulk purchase of cumin seeds for food processing.",
    productOrService: "Cumin Seeds",
    quantity: 200,
    unit: "kilograms",
    _id: "unique_id_for_cumin_seeds_buyer_1",
  },
  {
    name: "Sneha Desai",
    email: "sneha.desai@gmail.com",
    mobileNumber: "8888776655",
    lookingFor: "Need high-quality turmeric powder for retail sale.",
    productOrService: "Turmeric Powder",
    locationandDate: "Mumbai, 19-11-2024",
    quantity: 150,
    unit: "kilograms",
  },
  {
    name: "Vikram Singh",
    email: "vikram.singh@gmail.com",
    mobileNumber: "7777665544",
    lookingFor: "Looking for organic black pepper for restaurant use.",
    productOrService: "Black Pepper",
    locationandDate: "Bangalore, 19-11-2024",
    quantity: 100,
    unit: "kilograms",
  },
  {
    name: "Priya Mehta",
    email: "priya.mehta@gmail.com",
    mobileNumber: "6666554433",
    lookingFor: "Need chili powder in bulk for food processing.",
    productOrService: "Chili Powder",
    locationandDate: "Chennai, 18-11-2024",
    quantity: 300,
    unit: "kilograms",
  },
  {
    name: "Anil Yadav",
    email: "anil.yadav@gmail.com",
    mobileNumber: "5555443322",
    lookingFor:
      "Looking for high-quality coriander seeds for spice manufacturing.",
    productOrService: "Coriander Seeds",
    locationandDate: "Kolkata, 17-11-2024",
    quantity: 250,
    unit: "kilograms",
  },
];

const SpiceBuy = () => {
  return <BuyerPageTemplate keyword="Spices" title="Spices" initialData={SpiceBuyersData} />;
};

export default SpiceBuy;
