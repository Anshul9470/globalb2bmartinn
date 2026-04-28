import React from "react";
import BuyerPageTemplate from "../Components/BuyerPageTemplate";

const MustardBuysData = [
  {
    "name": "Khan Khan",
    "email": "khankhan@gmail.com",
    "mobileNumber": "+919846020977",
    "lookingFor": "looking for premium quality mustard oil suppliers",
    "locationandDate": "Palakkad, Kerala 06-09-2024",
    "productOrService": "Mustard Oil",
    "quantity": 250,
    "unit": "kg",
  },
  {
    "name": "Sham RM",
    "email": "shamrm@gmail.com",
    "mobileNumber": "+918778589609",
    "lookingFor": "In need of a consistent supply of top-grade mustard oil",
    "locationandDate": "Erode, Tamil Nadu 06-09-2024",
    "productOrService": "Mustard Oil",
    "quantity": 2000,
    "unit": "kg",
  },
  {
    "name": "Vikas Pal",
    "email": "vk443222@gmail.com",
    "mobileNumber": "+918171808945",
    "lookingFor": "Seeking large quantities of premium mustard oil for bulk distribution",
    "locationandDate": "Muzaffarnagar, Uttar Pradesh 06-09-2024",
    "productOrService": "Mustard Oil",
    "quantity": 20000,
    "unit": "ton",
  },
  {
    "name": "Krishna Kumar",
    "email": "sagarsolanki32321984@gmail.com",
    "mobileNumber": "+918273783019",
    "lookingFor": "Always on the lookout for reliable bulk suppliers of mustard oil",
    "locationandDate": "Tawang, Arunachal Pradesh 06-09-2024",
    "productOrService": "Mustard Oil",
    "quantity": 1000,
    "unit": "ton",
  },
  {
    "name": "A&C NETWORK SRL",
    "email": "andcnetwork@gmail.com",
    "mobileNumber": "+4094502792",
    "lookingFor": "Urgently required Yellow Mustard Seeds in bulk.",
    "locationandDate": "Braila, Romania 03-09-2024",
    "productOrService": "Yellow Mustard Seeds",
    "quantity": 1000,
    "unit": "ton"
  },
  {
    "name": "Khan",
    "email": "khan@gmail.com",
    "mobileNumber": "+91 98460 20977",
    "lookingFor": "Mustard oil in bulk Quantity.",
    "locationandDate": "Palakkad, India 03-09-2024",
    "productOrService": "Mustard Oil",
    "quantity": "2000",
    "unit": "ton"
  },
  {
    "name": "SOUMYA,MONDAL",
    "email": "pm92365@gmail.com",
    "mobileNumber": "7063609354",
    "lookingFor": "Looking for yellow mustard seed in bulk.",
    "locationandDate": "South 24, Parganas 23-07-2024",
    "productOrService": "yellow mustard seed ",
    "quantity": 2,
    "unit": "ton"
  },
  {
    "name": "Rais",
    "email": "rahisdihatti@gmail.com",
    "mobileNumber": "9015508395",
    "lookingFor": "Need mustard in bulk.",
    "locationandDate": "Delhi 12-07-2024",
    "productOrService": "Mustard",
    "quantity": 1,
    "unit": "ton",
  },
];

const MustardBuy = () => {
  return <BuyerPageTemplate keyword="Mustard" title="Mustard Oil" initialData={MustardBuysData} />;
};

export default MustardBuy;
