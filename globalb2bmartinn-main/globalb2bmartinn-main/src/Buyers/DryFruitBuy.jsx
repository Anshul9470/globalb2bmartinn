import React from "react";
import BuyerPageTemplate from "../Components/BuyerPageTemplate";

const DryFruitBuysData = [
    {
        "name": "Shashank Gupta",
        "email": "shashankgupta.307@gmail.com",
        "mobileNumber": "9891009001",
        "locationandDate": "Delhi, 28-06-2024",
        "lookingFor": "Plastic Dry Fruit Box",
        "productOrService": "Plastic Dry Fruit Box",
        "quantity": 30,
        "unit": "boxes",
        "_id": "667c0f639644befaa9548018"
    },
];

const DryFruitBuy = () => {
  return <BuyerPageTemplate keyword="Dry Fruit" title="Dry Fruits" initialData={DryFruitBuysData} />;
};

export default DryFruitBuy;
