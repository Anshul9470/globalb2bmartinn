import React from "react";
import BuyerPageTemplate from "../Components/BuyerPageTemplate";

const PulsesBuyersData = [
  {
    name: "Akash Sharma",
    email: "akashsharma@gmail.com",
    mobileNumber: "9876543210",
    locationandDate: "Indore, Madhya Pradesh 25-11-2024",
    lookingFor: "Bulk purchase of Chana Dal for food retail.",
    productOrService: "Chana Dal",
    quantity: 500,
    unit: "kg",
  },
  {
    name: "Megha Verma",
    email: "meghaverma@gmail.com",
    mobileNumber: "9123456789",
    locationandDate: "Bhopal, Madhya Pradesh 24-11-2024",
    lookingFor: "Requirement for Moong Dal in high volume.",
    productOrService: "Moong Dal",
    quantity: 300,
    unit: "kg",
  },
  {
    name: "Suresh Gupta",
    email: "sureshgupta@gmail.com",
    mobileNumber: "9988776655",
    locationandDate: "Jabalpur, Madhya Pradesh 23-11-2024",
    lookingFor: "Toor Dal needed for wholesale distribution.",
    productOrService: "Toor Dal",
    quantity: 1000,
    unit: "kg",
  },
  {
    name: "Kiran Patel",
    email: "kiranpatel@gmail.com",
    mobileNumber: "8877665544",
    locationandDate: "Gwalior, Madhya Pradesh 22-11-2024",
    lookingFor: "Looking for high-quality Urad Dal for catering.",
    productOrService: "Urad Dal",
    quantity: 200,
    unit: "kg",
  },
  {
    name: "Rahul Singh",
    email: "rahulsingh@gmail.com",
    mobileNumber: "7766554433",
    locationandDate: "Ujjain, Madhya Pradesh 21-11-2024",
    lookingFor: "Need Masoor Dal for organic food supply chain.",
    productOrService: "Masoor Dal",
    quantity: 400,
    unit: "kg",
  },
];

const PulsesBuy = () => {
  return <BuyerPageTemplate keyword="Pulses" title="Pulses" initialData={PulsesBuyersData} />;
};

export default PulsesBuy;
