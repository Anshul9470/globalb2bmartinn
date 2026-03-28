import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "brindavan-udyog-india-new-delhi",
    name: "Samarth Gupta",
    email: "sales.themilling@gmail.com",
    password: "Sales@ 103",
    mobileNumber: "9555849888",
    companyName: "Brindavan Udyog India",
    productOrService: "Industrial Equipments",
    imgSrc: "/assets/sewing.jpg", // Placeholder image path
    mainProducts: "Industrial Equipments",
    altText: "Brindavan Udyog India - Industrial Equipments",
    years: "1 YRS", // Random value
    location: "New Delhi, Delhi, India",
    tooltipText: "Brindavan Udyog India, Industrial Equipments, New Delhi",
    rating: "4.7", // Random value
    ratingPercent: "92%", // Random value
    ratingsCount: "50", // Random value
    responseRate: "88%", // Random value
    whatsappConfirmed: true,
  },

  {
    name: "Prince Industry",
    email: "",
    mobileNumber: "",
    companyName: "Prince Industry",
    productOrService: "Agarbati Machine, Scrubber Machine, Toothbrush Machine",
    imgSrc: "/assets/pm2.webp",
    mainProducts: "Agarbati Machines, Scrubber Machines, Toothbrush Machines",
    altText: "Prince Industry - Machinery",
    years: "1 YRS",
    location: "Karnataka,India",
    tooltipText: "Prince Industry, India",
    rating: "4.0",
    ratingPercent: "80%",
    ratingsCount: "40",
    responseRate: "90%",
    path: "/Prince-industry",
  },

  {
    name: "Krishna",
    email: "Krishna123@gmail.com",
    mobileNumber: "8149504811",
    companyName: "Krishna Enterprises",
    productOrService: "Machine Manufacturer",
    imgSrc: "/assets/machine.jpg", // Correct image path needed
    mainProducts: "Industrial machines, Machine tools, Automated systems, etc.",
    altText: "Machine Manufacturer - Krishna Enterprises",
    years: "1 YRS",
    location: "Pune, Maharashtra, India",
    tooltipText: "456, Hinjewadi, Pune - 411057, Maharashtra, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "150",
    responseRate: "92%",
  },
  {
    name: "MK Singh",
    email: "kunalengineering97@gmail.com",
    mobileNumber: "9971304385",
    companyName: "KUNAL ENGINEERING WORKS",
    productOrService: "Machine Manufacturer",
    imgSrc: "/assets/indus6.jpg",
    altText: "Machine Manufacturer - KUNAL ENGINEERING WORKS",
    mainProducts: "Industrial Machines, CNC Machines, Hydraulic Presses",
    years: "1 YRS",
    location: "Uttar Pradesh, India",
    tooltipText: "789 Machinery Lane, Industrial City, Uttar Pradesh, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "420",
    responseRate: "93%",
  },
  {
    name: "Mr. Monish K. Malek",
    email: "perfectfabwork@gmail.com",
    mobileNumber: "9723108082",
    companyName: "Perfect Mechanical & Fabrication Work",
    productOrService: "Industrial Lift & Crane Manufacturer",
    imgSrc: "/assets/machine6.jpeg",
    altText:
      "Industrial Lift & Crane Manufacturer - Perfect Mechanical & Fabrication Work",
    mainProducts: "Industrial Lifts, Cranes, Hoists, Fabrication Services",
    years: "1 YRS",
    location: "Ahmedabad, India",
    tooltipText: "789 Industrial Hub, Engineering Park, Ahmedabad, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "400",
    responseRate: "91%",
  },
  {
    _id: "l456789012345abcdef0123", // Random unique ID
    name: "Samvidbhai Ajudiya",
    email: "Samvidbhai@gmail.com",
    password: "Samvidbhai Ajudiya", // Including the password as specified
    mobileNumber: "9408046303",
    companyName: "Guru Alankar Engineering",
    productOrService: "Swing Machine Stand",
    imgSrc: "/assets/machine7.jpeg", // Example image path
    mainProducts: "Swing Machine Stands, Sewing Machine Parts",
    altText: "Swing Machine Stand - Guru Alankar Engineering",
    years: "1 YRS",
    location: "Surat, India",
    tooltipText: "456 Engineering Lane, Surat, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "78",
    responseRate: "96%",
    whatsappConfirmed: true,
  },

  {
    _id: "p890123456789abcdef0123", // Random unique ID
    name: "Kashmir Singh",
    email: "kashmirsingh24126@gmail.com",
    password: "kashmir@123", // Including the password as specified
    mobileNumber: "9815316558",
    companyName: "Industrial Darpan",
    productOrService: "Engineering Works, Industrial Machines",
    imgSrc: "/assets/machine8.jpeg", // Example image path
    mainProducts: "Industrial Machinery, Engineering Equipment, Machine Parts",
    altText: "Engineering Works - Industrial Darpan",
    years: "1 YRS",
    location: "Ludhiana, India",
    tooltipText: "123 Industrial Estate, Ludhiana, India",
    rating: "4.4",
    ratingPercent: "89%",
    ratingsCount: "55",
    responseRate: "93%",
    whatsappConfirmed: true,
  },
  {
    _id: "s890123456789abcdef01236", // Random unique ID
    name: "Puneet",
    email: "abc@gmail.com",
    mobileNumber: "8308821108",
    companyName: "BRIGHT STARS ELECTRONICS",
    productOrService: "Machinery Manufacturer",
    imgSrc: "/assets/machine9.jpeg", // Example image path
    mainProducts:
      "Industrial Machinery, Manufacturing Equipment, Automation Systems",
    altText: "Machinery Manufacturer - BRIGHT STARS ELECTRONICS",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "Sector 7, Industrial Hub, Mumbai, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "78",
    responseRate: "96%",
    whatsappConfirmed: true,
  },
  {
    _id: "c9012345678d901234",
    name: "MR. NIKHIL PAWAR",
    email: "nikhil@gmail.com",
    password: "12345678",
    mobileNumber: "9558978407",
    companyName: "SHREEJI ENGINEERING",
    productOrService: "Welding Machine",
    imgSrc: "/assets/welding.jpeg",
    mainProducts: "Welding Machines, Welding Equipment",
    altText: "Welding Machine - SHREEJI ENGINEERING",
    years: "1 YRS",
    location: "Pune, Maharashtra, India",
    tooltipText: "MIDC, Pune, Maharashtra, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "85",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "e1234567890f123456",
    name: "Balashaeb",
    email: "balashaeb@gmail.com",
    password: "12345678",
    mobileNumber: "7057243875",
    companyName: "Weldtech Corporation",
    productOrService: "Welding Machine",
    imgSrc: "/assets/weldingmachine.jpeg",
    mainProducts: "Welding Machines, Welding Accessories",
    altText: "Welding Machine - Weldtech Corporation",
    years: "1 YRS",
    location: "Mumbai, Maharashtra, India",
    tooltipText: "Andheri, Mumbai, Maharashtra, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "90",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "a9876543210wxyz9876",
    name: "Neeraj",
    email: "abc@gmail.com",
    password: "neer@123",
    mobileNumber: "9319418507",
    companyName: "Ambition Weld Industries",
    productOrService: "Welding Machines",
    imgSrc: "/assets/welding-machine.jpeg",
    mainProducts: "Welding Machines, Industrial Welders, Welding Accessories",
    altText: "Welding Machines - Ambition Weld Industries",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Ambition Weld Industries, Delhi, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "150",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890wxyz5680",
    name: "Dixit Patel",
    email: "dixitpatel@gmail.com",
    password: "12345678",
    mobileNumber: "9924214702",
    companyName: "Noble Electrodes Private Limited",
    productOrService: "Welding Machine",
    imgSrc: "/assets/welding12.jpeg",
    mainProducts: "Welding Machines, Electrodes, Welding Accessories",
    altText: "Welding Machines - Noble Electrodes Private Limited",
    years: "1 YRS",
    location: "Ahmedabad, India",
    tooltipText: "Noble Electrodes Private Limited, Ahmedabad, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "150",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890wxyz5681",
    name: "Jignesh",
    email: "jignesh@gmail.com",
    password: "12345678",
    mobileNumber: "9825722897",
    companyName: "J K Machine Tools",
    productOrService: "Welding Machine",
    imgSrc: "/assets/welding13.jpeg",
    mainProducts: "Welding Machines, Machine Tools, Industrial Equipment",
    altText: "Welding Machines - J K Machine Tools",
    years: "1 YRS",
    location: "Rajkot, India",
    tooltipText: "J K Machine Tools, Rajkot, India",
    rating: "4.6",
    ratingPercent: "93%",
    ratingsCount: "120",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890wxyz5682",
    name: "Mayur",
    email: "mayur@gmail.com",
    password: "12345678",
    mobileNumber: "8000801571",
    companyName: "hdenterprises",
    productOrService: "Welding Machine",
    imgSrc: "/assets/welding14.jpeg",
    mainProducts: "Welding Machines, Welding Equipment, Industrial Tools",
    altText: "Welding Machines - hdenterprises",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "hdenterprises, Mumbai, India",
    rating: "4.4",
    ratingPercent: "89%",
    ratingsCount: "80",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890wxyz5683",
    name: "Nikhil",
    email: "nikhil@gmail.com",
    password: "12345678",
    mobileNumber: "9558978407",
    companyName: "SHREEJI ENGINEERING",
    productOrService: "Welding Machine",
    imgSrc: "/assets/welding15.jpeg",
    mainProducts: "Welding Machines, Welding Equipment, Spare Parts",
    altText: "Welding Machines - SHREEJI ENGINEERING",
    years: "1 YRS",
    location: "Rajkot, India",
    tooltipText: "SHREEJI ENGINEERING, Rajkot, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "110",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890wxyz5685",
    name: "Binny",
    email: "bkengineersChaMaking6735355@gmail.com",
    password: "binny1234",
    mobileNumber: "9061408881",
    companyName: "BK Engineers Chapati Making",
    productOrService: "Chapati Making Machines",
    imgSrc: "/assets/machine11.jpeg",
    mainProducts:
      "Chapati Making Machines, Dough Kneaders, Commercial Kitchen Equipment",
    altText: "Chapati Making Machines - BK Engineers",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "BK Engineers Chapati Making, Mumbai, India",
    rating: "4.2",
    ratingPercent: "84%",
    ratingsCount: "45",
    responseRate: "82%",
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890wxyz5686",
    name: "Binny",
    email: "bkengineersChaMaking6735355@gmail.com",
    password: "binny1234",
    mobileNumber: "9061408881",
    companyName: "BK Engineers Chapati Making",
    productOrService: "Chapati Making Machines",
    imgSrc: "/assets/machine13.jpeg",
    mainProducts: "Chapati Making Machines, Dough Kneaders",
    altText: "Chapati Making Machines - BK Engineers Chapati Making",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "BK Engineers Chapati Making, Mumbai, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "32",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890wxyz5802",
    name: "Prakash Machinery Store",
    email: "PRAKASHMACHINERYSTORE@gmail.com",
    password: "12345678",
    mobileNumber: "9559745745",
    companyName: "Prakash Machinery Store",
    productOrService: "Welding Machine",
    imgSrc: "/assets/welding16.jpeg", // Placeholder for image path
    mainProducts: "Welding Machines, Industrial Equipment, Tools",
    altText: "Welding Machine - Prakash Machinery Store",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "Prakash Machinery Store, India",
    rating: "4.6", // Placeholder for rating
    ratingPercent: "93%", // Placeholder for rating percentage
    ratingsCount: "120", // Placeholder for ratings count
    responseRate: "90%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890wxyz5804",
    name: "Balaji Engineerings",
    email: "BalajiEngineerings@gmail.com",
    password: "12345678",
    mobileNumber: "9830578434",
    companyName: "Balaji Engineerings",
    productOrService: "Machines",
    imgSrc: "/assets/machine12.jpeg", // Placeholder for image path
    mainProducts: "Industrial Machines, Automation Equipment",
    altText: "Industrial Machines - Balaji Engineerings",
    years: "1 YRS", // Placeholder for years of experience
    location: "Kolkata, India", // Placeholder for location
    tooltipText: "Balaji Engineerings, Kolkata, India",
    rating: "4.9", // Placeholder for rating
    ratingPercent: "97%", // Placeholder for rating percentage
    ratingsCount: "200", // Placeholder for ratings count
    responseRate: "90%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "d1234567890wxyz5692",
    name: "Hindustan Machinery",
    email: "HindustanMachinery@gmail.com",
    password: "12345678",
    mobileNumber: "9665599911",
    companyName: "Hindustan Machinery",
    productOrService: "Hydraulic Machine",
    imgSrc: "/assets/hydrolic2.jpeg", // Placeholder for image path
    mainProducts: "Hydraulic Machines, Industrial Equipment",
    altText: "Hindustan Machinery - Hydraulic Machine Manufacturer",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "Hindustan Machinery, India",
    rating: "4.7", // Placeholder for rating
    ratingPercent: "92%", // Placeholder for rating percentage
    ratingsCount: "150", // Placeholder for ratings count
    responseRate: "85%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "h1234567890abc5693",
    name: "Hasmukh Chauhan",
    email: "HasmukhChauhan@gmail.com",
    password: "12345678",
    mobileNumber: "9892667473",
    companyName: "Hasmukh Chauhan",
    productOrService: "Hydraulic Machine",
    imgSrc: "/assets/hydrolic3.jpeg", // Placeholder for image path
    mainProducts: "Hydraulic Machines, Industrial Equipment",
    altText: "Hasmukh Chauhan - Hydraulic Machine Manufacturer",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "Hasmukh Chauhan, India",
    rating: "4.8", // Placeholder for rating
    ratingPercent: "94%", // Placeholder for rating percentage
    ratingsCount: "120", // Placeholder for ratings count
    responseRate: "90%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890abc5694",
    name: "Amol Hydro Engineers",
    email: "Amolhydroengineers@gmail.com",
    password: "12345678",
    mobileNumber: "9372411254",
    companyName: "Amol Hydro Engineers",
    productOrService: "Hydraulic Machine",
    imgSrc: "/assets/hydro1.jpeg", // Placeholder for image path
    mainProducts: "Hydraulic Machines, Engineering Solutions",
    altText: "Amol Hydro Engineers - Hydraulic Machine Manufacturer",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "Amol Hydro Engineers, India",
    rating: "4.7", // Placeholder for rating
    ratingPercent: "92%", // Placeholder for rating percentage
    ratingsCount: "110", // Placeholder for ratings count
    responseRate: "88%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "panshi-weld-suppliers-ahmedabad",
    name: "Ramesh Patel",
    email: "gasoweld1899@gmail.com",
    password: "Ramesh Patel",
    mobileNumber: "9974492449",
    companyName: "Panshi Weld Suppliers",
    productOrService:
      "GAS-O-WELD Brand Gas Welding Rods in Aluminium and Cast Iron",
    imgSrc: "/assets/welding9.jpg",
    mainProducts: "Gas Welding Rods, Aluminium, Cast Iron",
    altText: "Panshi Weld Suppliers - Gas Welding Rods",
    years: "1 YRS",
    location: "Ahmedabad, Gujarat, India",
    tooltipText: "Panshi Weld Suppliers, Gas Welding Rods, Ahmedabad",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "50",
    responseRate: "98%",
    whatsappConfirmed: true,
  },
  {
    _id: "kingsly-a-crystal-traders-nagercoil",
    name: "Kingsly A",
    email: "kingslyzoom90@gmail.com",
    password: "8825514680",
    mobileNumber: "8825514680",
    companyName: "Crystal Traders",
    productOrService: "welding Electrode",
    imgSrc: "/assets/electrode1.jpg",
    mainProducts: "welding Electrode",
    altText: "Crystal Traders - welding Electrode",
    years: "1 YRS",
    location: "Nagercoil, Tamil Nadu, India",
    tooltipText: "Crystal Traders, welding Electrode, Nagercoil",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "shree-shyam-engg-works-faridabad",
    name: "Sanjay Yadav",
    email: "abc@gmail.com",
    password: "sanj@123",
    mobileNumber: "9891963990",
    companyName: "Shree Shyam Engg Works",
    productOrService: "CNC Machine",
    imgSrc: "/assets/cnc1.jpg",
    mainProducts: "CNC Machine",
    altText: "Shree Shyam Engg Works - CNC Machine",
    years: "1 YRS",
    location: "Faridabad, Haryana, India",
    tooltipText: "Shree Shyam Engg Works, CNC Machine, Faridabad",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "32",
    responseRate: "87%",
    whatsappConfirmed: true,
  },
  {
    _id: "mahi-hydro-mechanic-morbi",
    name: "Paresh Rathod",
    email: "mahihydromechanic@gmail.com",
    password: "paresh rathod",
    mobileNumber: "9409016256",
    companyName: "Mahi Hydro Mechanic",
    productOrService: "Construction Machinery",
    imgSrc: "/assets/machine112.jpg",
    mainProducts: "Construction Machinery",
    altText: "Mahi Hydro Mechanic - Construction Machinery",
    years: "1 YRS",
    location: "Morbi, Gujrat, India",
    tooltipText: "Mahi Hydro Mechanic, Construction Machinery, Morbi",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "45",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "spoorthi-enterprises-karnataka",
    name: "Siddu",
    email: "siddu@gmail.com",
    password: "12345678",
    mobileNumber: "9663769809",
    companyName: "Spoorthi Enterprises",
    productOrService: "machine",
    imgSrc: "/assets/machine14.jpg",
    mainProducts: "machine",
    altText: "Spoorthi Enterprises - Karnataka",
    years: "1 YRS",
    location: "Karnataka",
    tooltipText: "Spoorthi Enterprises, Karnataka",
    rating: "4.2",
    ratingPercent: "84%",
    ratingsCount: "9",
    responseRate: "80%",
    whatsappConfirmed: true,
  },
  {
    _id: "guizhou-sinodrills-equipment",
    name: "Summer Yang",
    email: "sales5@sinodrills.com",
    password: "sinodrills0708",
    mobileNumber: "8518680073",
    companyName: "Guizhou Sinodrills Equipment Co.,Ltd",
    productOrService: "Guizhou",
    imgSrc: "/assets/sandal-drill1.jpg",
    mainProducts: "Drilling Equipment",
    altText: "Guizhou Sinodrills Equipment Co., Ltd",
    years: "1 YRS",
    location: "Guiyang",
    tooltipText: "Guizhou Sinodrills Equipment Co., Ltd, Guiyang",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "15",
    responseRate: "85%",
    whatsappConfirmed: false,
  },
  {
    _id: "arhina-enterprise-up",
    name: "Arjumand Bano",
    email: "arjumandbano@gmail.com",
    password: "12345678",
    mobileNumber: "7007752622",
    companyName: "Arhina Enterprise",
    productOrService: "Dona Machine",
    imgSrc: "/assets/donamachine1.jpg",
    mainProducts: "Dona Machines",
    altText: "Arhina Enterprise - Dona Machine",
    years: "1 YRS",
    location: "UP, India",
    tooltipText: "Arhina Enterprise, Dona Machine, UP",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "28",
    responseRate: "78%",
    whatsappConfirmed: true,
  },
  {
    _id: "karthik-ram-erode-tamilnadu",
    name: "Karthik Ram",
    email: "rki1969@gmail.com",
    password: "9843252959",
    mobileNumber: "9843252959",
    companyName: "Ramakumar Industries",
    statename: "Tamilnadu",
    cityname: "Erode",
    productOrService:
      "POST HOLE DIGGER, Multi purpose leveler, 5 tyne mini cultivator",
    imgSrc: "/assets/holedigger1.jpg",
    mainProducts:
      "POST HOLE DIGGER, Multi purpose leveler, 5 tyne mini cultivator",
    altText: "Ramakumar Industries - Erode",
    years: "1YRS",
    location: "Erode, Tamilnadu",
    tooltipText: "Ramakumar Industries, Erode",
    rating: "4.7",
    ratingPercent: "95%",
    ratingsCount: "150",
    responseRate: "98%",
    whatsappConfirmed: true,
  },
  {
    _id: "rakesh-ahemdabad-gujarat",
    name: "Rakesh",
    email: "rudraengineers19@gmail.com",
    password: "Rakesh Sadhu",
    mobileNumber: "8734093142",
    companyName: "Rudra Engineers",
    statename: "Gujarat",
    cityname: "Ahmedabad",
    productOrService: "Construction Equipment",
    imgSrc: "/assets/contruction-eqipment1.jpg",
    mainProducts: "Construction Equipment",
    altText: "Rudra Engineers - Ahmedabad",
    years: "1 YRS",
    location: "Ahmedabad, Gujarat",
    tooltipText: "Rudra Engineers, Ahmedabad",
    rating: "4.7",
    ratingPercent: "93%",
    ratingsCount: "215",
    responseRate: "96%",
    whatsappConfirmed: true,
  },
  {
    _id: "someshwar-pune-billing-machine",
    name: "Someshwar",
    email: "someshwar@gmail.com",
    password: "12345678",
    mobileNumber: "7276764140",
    companyName: "Someshwar",
    statename: "Maharashtra",
    cityname: "Pune",
    productOrService: "Billing Machine",
    imgSrc: "/assets/Billing-machine.jpg",
    mainProducts: "Billing Machine",
    altText: "Someshwar - Billing Machine Supplier in Pune",
    years: "1 YRS",
    location: "Pune, Maharashtra",
    tooltipText: "Someshwar - Trusted Billing Machine Supplier",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "198",
    responseRate: "91%",
    whatsappConfirmed: true,
  },
  {
    _id: "chhoker-and-sons-panipat",
    name: "Mr. Rajinder Singh Chhoker",
    email: "9354928601@gmail.com",
    password: "9354928601",
    mobileNumber: "9354928601",
    companyName: "Chhoker & Sons",
    statename: "Haryana",
    cityname: "Panipat",
    productOrService: "Generator",
    imgSrc: "/assets/genrator.jpg",
    mainProducts: "Generators, Industrial Generators, Diesel Generators",
    altText: "Chhoker & Sons - Generator Supplier",
    years: "1 YRS",
    location: "Panipat, Haryana, India",
    tooltipText: "Chhoker & Sons - Reliable Generator Supplier",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "210",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "thomas-international-chennai",
    name: "Mr. Rajiveer Pinheiro",
    email: "artp@thomaseximp.com",
    password: "9840104708",
    mobileNumber: "9840104708",
    companyName: "THOMAS INTERNATIONAL",
    statename: "Tamil Nadu",
    cityname: "Chennai",
    productOrService:
      "Maize / Corn Processing Machine, Peanut / Groundnut Processing Machine",
    imgSrc: "/assets/maizemachine.jpg",
    mainProducts:
      "Maize Processing Machines, Groundnut Processing Machines, Agricultural Equipment",
    altText: "THOMAS INTERNATIONAL - Agricultural Machinery Manufacturer",
    years: "1 YRS",
    location: "Chennai, Tamil Nadu, India",
    tooltipText: "THOMAS INTERNATIONAL - Trusted Name in Agro Machines",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "245",
    responseRate: "97%",
    whatsappConfirmed: true,
  },
  {
    _id: "ajay-enterprises-surat",
    name: "Mr Ajay Athavia & Mr Kishan",
    email: "aj@ajayenterprise.net",
    password: "9825861456",
    mobileNumber: "9825861456",
    companyName: "AJAY ENTERPRISES",
    statename: "Gujarat",
    cityname: "Surat",
    productOrService:
      "Generator, Industrial Panels, Control Centers, Diesel Generators",
    imgSrc: "/assets/generator.jpg",
    mainProducts:
      "Generators, Industrial Panels, Diesel Generators, Control Centers",
    altText: "AJAY ENTERPRISES - Manufacturer of Industrial Equipment",
    years: "1 YRS",
    location: "Surat, Gujarat, India",
    tooltipText: "AJAY ENTERPRISES - Trusted Solutions in Industrial Equipment",
    rating: "4.6",
    ratingPercent: "94%",
    ratingsCount: "320",
    responseRate: "98%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const MachineManufacturer = () => {
  return (
    <div className="main-box">
      <aside>
        <div className="flt-box-wrap">
          <div className="flt-box mb-0 flt-head">Filters By</div>
          <div className="flt-box bdrt-0">
            <p className="flt-title">Related Categories</p>
            <div className="flt-content">
              <ul className="flt-list cust-scroll">
                <li>
                  <Link to="#">Industrial Machines</Link>
                </li>
                <li>
                  <Link to="#">Machine Tools</Link>
                </li>
                <li>
                  <Link to="#">Automated Systems</Link>
                </li>
                <li>
                  <Link to="#">Heavy Machinery</Link>
                </li>
                {/* Add more categories as needed */}
              </ul>
            </div>
          </div>
          <div className="flt-box">
            <p className="flt-title">By State</p>
            <div className="flt-content">
              <div className="flt-search">
                <input
                  type="text"
                  name="state_id"
                  placeholder="Search State"
                  id="state-search-input"
                />
              </div>
              <ul className="flt-list cust-scroll" id="state-lists">
                <li>
                  <Link to="#">All India</Link>
                </li>
                <li>
                  <Link to="#">Maharashtra</Link>
                </li>
                <li>
                  <Link to="#">Gujarat</Link>
                </li>
                <li>
                  <Link to="#">Tamil Nadu</Link>
                </li>
                <li>
                  <Link to="#">Karnataka</Link>
                </li>
                <li>
                  <Link to="#">Delhi</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
      <main>
        <section className="section">
          <p className="sect-title">Explore by Categories</p>
          <div className="horprd expcatg" id="expcatg">
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/machine1.jpg"
                      width={55}
                      height={55}
                      alt="Industrial Machines"
                    />
                  </figure>
                  <p className="title">Industrial Machines</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/machine2.jpg"
                      width={55}
                      height={55}
                      alt="Machine Tools"
                    />
                  </figure>
                  <p className="title">Machine Tools</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/machine3.jpg"
                      width={55}
                      height={55}
                      alt="Automated Systems"
                    />
                  </figure>
                  <p className="title">Automated Systems</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/machine4.jpg"
                      width={55}
                      height={55}
                      alt="Heavy Machinery"
                    />
                  </figure>
                  <p className="title">Heavy Machinery</p>
                </div>
              </Link>
            </div>
            {/* Add more categories as needed */}
          </div>
        </section>
        <ul className="classfied-wrap">
          {classifiedData.map((item, index) => (
            <li key={index}>
              <div className="classified">
                <div className="prd-info">
                  <div className="prd-box">
                    <img
                      src={item.imgSrc}
                      alt={item.altText}
                      width={250}
                      height={250}
                    />
                  </div>
                </div>
                <div className="cinfo">
                  <div className="cbox">
                    <figure>
                      <span className="cmp-year">{item.years}</span>
                    </figure>
                    <div className="cboxr">
                      <Link to={item.path}>
                        <h4 className="title">{item.companyName}</h4>
                      </Link>
                      <p className="cloc tooltip ellipsis">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi-location"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                        {item.location}
                        <span className="tooltiptext">{item.tooltipText}</span>
                      </p>
                      <div className="rating-wrap">
                        <span className="rtbox">{item.rating}</span>
                        <span
                          className="crate"
                          style={{ "--_score": item.ratingPercent }}
                        />
                        <span className="rate-text">
                          {item.ratingsCount} Ratings
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="caddit">
                    <div className="item">
                      <div className="ca-box">
                        <p>
                          <i className="l3icon resp-icon" />
                        </p>
                        <p>
                          <span>Response Rate</span> <b>{item.responseRate}</b>
                        </p>
                      </div>
                      <p>
                        <span>Main Products</span> <b>{item.mainProducts}</b>
                      </p>
                    </div>
                  </div>
                  <div className="caction">
                    <Link to={"/register-buyer"}>
                      <p>Contact Supplier</p>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default MachineManufacturer;
