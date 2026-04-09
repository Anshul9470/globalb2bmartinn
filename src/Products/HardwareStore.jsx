import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "g1234567890h012347",
    name: "Shashikant",
    email: "polyanaplasticprofile@gmail.com",
    password: "Shashikant@123",
    mobileNumber: "+91 9823705852",
    companyName: "Polyana PVC Pipes and Plastic Profile",
    productOrService: "PVC Pipes and Plastic Profiles",
    imgSrc: "/assets/pvc6.jpeg",
    mainProducts: "PVC Pipes, Plastic Profiles, Fittings",
    altText:
      "PVC Pipes and Plastic Profiles - Polyana PVC Pipes and Plastic Profile",
    years: "1 YRS",
    location: "Pune, Maharashtra, India",
    tooltipText: "Gate No. 1403, Pune, Maharashtra, India - 411062",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "65",
    responseRate: "90%",
    whatsappConfirmed: true,
  },

  {
    name: "Mr. Mustafa Halai",
    email: "mshalai@gmail.com",
    password: "mustafa halai",
    mobileNumber: "9725273753",
    companyName: "M.S HALAI",
    productOrService: "Garden Pipes",
    imgSrc: "/assets/pipe1.jpg", // Provide the correct image path
    altText: "Garden Pipes - M.S HALAI",
    mainProducts: "Garden Hoses, Water Pipes, Irrigation Tubes",
    years: "1 YRS",
    location: "Nagpur, India",
    tooltipText: "789 Garden Lane, Industrial Park, Nagpur, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "88%",
  },
  {
    name: "Mr. Rishit",
    email: "rishit@gmail.com",
    password: "rishit@123",
    mobileNumber: "8000644892",
    companyName: "RIYON PUMP",
    productOrService: "Submersible Pump",
    imgSrc: "/assets/Submersible.jpg", // Provide the correct image path
    altText: "Submersible Pump - RIYON PUMP",
    mainProducts: "Submersible Pumps, Water Handling Solutions",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "789 Pump Lane, Industrial Park, Nagpur, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "88%",
  },
  {
    name: "Malik Sultan",
    email: "maliksultan@gmail.com",
    password: "malik@123",
    mobileNumber: "7622011486",
    companyName: "Sultan Fastners",
    productOrService: "fastners",
    imgSrc: "/assets/fas5.jpeg",
    altText: "fastners - Sultan Fastners",
    mainProducts: "Bolts, Nuts, Screws",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "456 Industrial Zone, Delhi, India",
    rating: "4.8",
    ratingPercent: "97%",
    ratingsCount: "350",
    responseRate: "95%",
  },

  {
    name: "Kurnal Patel",
    email: "kunal@gmail.com",
    mobileNumber: "9979921219",
    companyName: "Silver Fasteners",
    productOrService: "Fasteners Manufacturing",
    imgSrc: "/assets/fas1.jpeg", // Provide the correct image path
    altText: "Fasteners - Silver Fasteners",
    mainProducts: "Bolts, Nuts, Screws, Washers",
    years: "1 YRS",
    location: "Ahmedabad, Gujarat, India",
    tooltipText:
      "567 Fasteners Lane, Industrial Park, Ahmedabad, Gujarat, India",
    rating: "4.8",
    ratingPercent: "97%",
    ratingsCount: "150",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    name: "Jas",
    email: "jas123@gmail.com",
    mobileNumber: "7069381223",
    companyName: "Ravi Fasteners",
    productOrService: "Critical Fasteners",
    imgSrc: "/assets/fas2.jpeg", // Provide the correct image path
    altText: "Critical Fasteners - Ravi Fasteners",
    mainProducts:
      "High-Strength Bolts, Aerospace Fasteners, Precision Screws, Specialized Nuts",
    years: "1 YRS",
    location: "Chennai, Tamil Nadu, India",
    tooltipText:
      "890 Fasteners Street, Industrial Hub, Chennai, Tamil Nadu, India",
    rating: "4.9",
    ratingPercent: "98%",
    ratingsCount: "170",
    responseRate: "96%",
  },
  {
    name: "Raghav Kapoor",
    email: "atulindustries@gmail.com",
    mobileNumber: "9988013327",
    companyName: "Atul Industries",
    productOrService: "Fasteners Manufacturing",
    imgSrc: "/assets/fas3.jpeg", // Provide the correct image path
    altText: "Fasteners - Atul Industries",
    mainProducts: "Bolts, Nuts, Screws, Washers",
    years: "1 YRS",
    location: "Mumbai, Maharashtra, India",
    tooltipText:
      "234 Industrial Road, Manufacturing Zone, Mumbai, Maharashtra, India",
    rating: "4.8",
    ratingPercent: "97%",
    ratingsCount: "220",
    responseRate: "93%",
  },

  {
    name: "Ocean Vidya",
    email: "abc@gmail.com",
    password: "ocean@123",
    mobileNumber: "9307715948",
    companyName: "Ocean Vidya Pipe Udyog",
    productOrService: "Pipes & Fittings",
    imgSrc: "/assets/pipe3.jpg", // Provide the correct image path
    altText: "Pipes & Fittings - Ocean Vidya Pipe Udyog",
    mainProducts: "Pipes, Fittings, Plumbing Solutions",
    years: "1 YRS",
    location: "Varanasi, India",
    tooltipText: "789 Pipe Lane, Industrial Park, Varanasi, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "88%",
  },
  {
    _id: "6e4f2b3a7c8e6d001f2b4a7c", // Random unique ID
    name: "Mufaddal Kanchwala",
    email: "mufaddal.kanchwala@alphapiping.com", // Unique email
    password: "mufa@123", // Including the password as specified
    mobileNumber: "7721818776",
    companyName: "ALPHA PIPING SYSTEM PVT.LTD.",
    productOrService: "Pipes & Fittings",
    imgSrc: "/assets/pipe5.jpeg", // Example image path
    mainProducts: "PVC Pipes, Metal Pipes, Pipe Fittings, Valves",
    altText: "Pipes & Fittings - ALPHA PIPING SYSTEM PVT.LTD.",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "456 Piping Avenue, Delhi, India",
    rating: "4.6",
    ratingPercent: "93%",
    ratingsCount: "200",
    responseRate: "95%",
  },

  {
    _id: "5f3b4e1f8c4e7f001f1e8a4b", // Random unique ID
    name: "Gopal Mohta",
    email: "gopal.mohta@caltrading.com", // Unique email
    password: "gopal@123", // Including the password as specified
    mobileNumber: "9830076440",
    companyName: "Calcutta Trading Centre",
    productOrService: "Pipes",
    imgSrc: "/assets/pipe4.jpeg", // Example image path
    mainProducts: "PVC Pipes, Metal Pipes, Couplings, Fittings",
    altText: "Pipes - Calcutta Trading Centre",
    years: "1 YRS",
    location: "Kolkata, India",
    tooltipText: "123 Pipe Street, Kolkata, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "150",
    responseRate: "92%",
  },

  {
    name: "Mr. Parvin Patel",
    email: "parvinpatel@gmail.com",
    password: "parvin@123",
    mobileNumber: "9913107474",
    companyName: "Kalindi Pumps",
    productOrService: "Submersible Pump",
    imgSrc: "/assets/bore.jpg", // Provide the correct image path
    altText: "Submersible Pump - Kalindi Pumps",
    mainProducts: "Submersible Pumps, Water Pumps, Borewell Pumps",
    years: "1 YRS",
    location: "Ahmedabad, India",
    tooltipText: "789 Pump Lane, Industrial Park, Ahmedabad, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "88%",
  },
  {
    name: "RN Marketing",
    email: "abc@gmail.com",
    password: "rnm@12345",
    mobileNumber: "9226514132",
    companyName: "RN Marketing",
    productOrService: "Pipes & Fittings",
    imgSrc: "/assets/pipe2.jpg", // Provide the correct image path
    altText: "Pipes & Fittings - RN Marketing",
    mainProducts: "Pipes, Fittings, Plumbing Solutions",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "789 Fittings Lane, Industrial Park, Mumbai, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "88%",
  },

  {
    name: "Vyom",
    email: "vyom1234@gmail.com",
    mobileNumber: "7069556768",
    companyName: "STAR BRASS INDUSTRIES",
    productOrService: "Brass & Fasteners Manufacturing",
    imgSrc: "/assets/fas4.jpeg",
    altText: "Brass & Fasteners - STAR BRASS INDUSTRIES",
    mainProducts: "Brass Components, Fasteners",
    years: "1 YRS",
    location: "Mumbai, Maharashtra, India",
    tooltipText:
      "234 Industrial Road, Manufacturing Zone, Mumbai, Maharashtra, India",
    rating: "4.5",
    ratingPercent: "92%",
    ratingsCount: "180",
    responseRate: "88%",
  },
  {
    name: "Kailash",
    email: "kailsh@gmail.com",
    mobileNumber: "9662622641",
    companyName: "Greatbolt Industries",
    productOrService: "Fasteners Manufacturing",
    imgSrc: "/assets/fas7.jpeg", // Provide the correct image path
    mainProducts: "Nuts, Bolts, Screws, Washers",
    altText: "Fasteners Manufacturing - Greatbolt Industries",
    years: "1 YRS",
    location: "Pune, India",
    tooltipText: "Location details not provided",
    rating: "78%",
    ratingPercent: "80%",
    ratingsCount: "30",
    responseRate: "75%",
  },
  {
    _id: "d234567890123abcdef0123", // Random unique ID
    name: "Ajay Chavda",
    email: "prajwalpolyplast@gmail.com",
    mobileNumber: "6359078730",
    companyName: "PRAJWAL POLYPLAST",
    productOrService: "Bopp Adhesive Tapes",
    imgSrc: "/assets/tape.jpeg", // Example image path
    mainProducts: "Bopp Adhesive Tapes, Packaging Tapes, Industrial Tapes",
    altText: "Bopp Adhesive Tapes - PRAJWAL POLYPLAST",
    years: "1 YRS",
    location: "Ahmedabad, India",
    tooltipText: "123 Industrial Area, Ahmedabad, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "60",
    responseRate: "93%",
    whatsappConfirmed: true,
  },

  {
    name: "Deepak",
    email: "Deepakbhai@gmail.com",
    mobileNumber: "9173391509",
    companyName: "Asha Pure Hardware",
    productOrService: "Hardware products",
    imgSrc: "/assets/hw3.jpg", // Provide the correct image path
    altText: "Hardware Products - Asha Pure Hardware",
    mainProducts: "Nails, Screws, Tools, Construction Hardware",
    years: "1 YRS",
    location: "Ahmedabad, India",
    tooltipText: "789 Tool Avenue, Hardware District, Ahmedabad, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "75",
    responseRate: "88%",
  },
  {
    name: "Mr. Upendra Mani Tripathi",
    email: "info@patnipump.com",
    password: "upendra@123",
    mobileNumber: "9811778912",
    companyName: "PATNI PUMPS LLP",
    productOrService: "Water pump manufacturer",
    imgSrc: "/assets/waterpump.jpeg", // Provide the correct image path
    altText: "Water Pump - PATNI PUMPS LLP",
    mainProducts: "Water Pumps, Pumping Solutions",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "123 Industrial Area, Mumbai, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "120",
    responseRate: "92%",
  },
  {
    _id: "9e5c4a7b8d6f2e001f7b8a6c", // Random unique ID
    name: "Ramesh",
    email: "rameshkumar16@gmail.com",
    password: "ramesh123456", // Including the password as specified
    mobileNumber: "9921278857",
    companyName: "Laxminarayan Industries Plastic Tanks",
    productOrService: "HDPE Pipes",
    imgSrc: "/assets/hde1.jpeg", // Example image path
    mainProducts: "HDPE Pipes, Fittings, Tubes, Connectors",
    altText: "HDPE Pipes - Laxminarayan Industries Plastic Tanks",
    years: "1 YRS",
    location: "Ahmedabad, India",
    tooltipText: "456 Plastic Road, Ahmedabad, India",
    rating: "4.5",
    ratingPercent: "91%",
    ratingsCount: "100",
    responseRate: "96%",
  },
  {
    _id: "j890123456789abcdef0123", // Random unique ID
    name: "Dinesh Mali",
    email: "abc@gmail.com",
    password: "dinesh@123", // Including the password as specified
    mobileNumber: "9715904611",
    companyName: "MAHADEV PIPE COMPANY",
    productOrService: "Pipes & Fittings",
    imgSrc: "/assets/pipe6.jpeg", // Example image path
    mainProducts: "PVC Pipes, HDPE Pipes, Pipe Fittings, Valves",
    altText: "Pipes & Fittings - MAHADEV PIPE COMPANY",
    years: "1 YRS",
    location: "Ahmedabad, India",
    tooltipText: "789 Industrial Area, Ahmedabad, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "120",
    responseRate: "97%",
    whatsappConfirmed: true,
  },
  {
    _id: "j890123456789abcdef0123", // Random unique ID
    name: "Dinesh Mali",
    email: "abc@gmail.com",
    password: "dinesh@123", // Including the password as specified
    mobileNumber: "9715904611",
    companyName: "MAHADEV PIPE COMPANY",
    productOrService: "Pipes & Fittings",
    imgSrc: "/assets/pipe6.jpeg", // Example image path
    mainProducts: "PVC Pipes, HDPE Pipes, Pipe Fittings, Valves",
    altText: "Pipes & Fittings - MAHADEV PIPE COMPANY",
    years: "1 YRS",
    location: "jaipur, India",
    tooltipText: "789 Industrial Area, Ahmedabad, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "120",
    responseRate: "97%",
    whatsappConfirmed: true,
  },
  {
    _id: "q901234567890abcdef0123", // Random unique ID
    name: "Mitesh Gandhi",
    email: "abc@gmail.com",
    password: "mitesh@123", // Including the password as specified
    mobileNumber: "9920399043",
    companyName: "Miloni International",
    productOrService: "Pipes & Fittings",
    imgSrc: "/assets/fitting.jpeg", // Example image path
    mainProducts: "PVC Pipes, HDPE Pipes, Pipe Fittings, Valves",
    altText: "Pipes & Fittings - Miloni International",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "789 Industrial Zone, Mumbai, India",
    rating: "4.6",
    ratingPercent: "91%",
    ratingsCount: "80",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "y789012345678abcdef0123", // Random unique ID
    name: "Praveen Shah",
    email: "abc@gmail.com",
    password: "shah@123", // Including the password as specified
    mobileNumber: "9820234934",
    companyName: "STEELCO METAL AND ALLOYS",
    productOrService: "Steel Pipes",
    imgSrc: "/assets/steelpipe.jpeg", // Example image path
    mainProducts: "Steel Pipes, Alloy Pipes, Seamless Pipes, Welded Pipes",
    altText: "Steel Pipes - STEELCO METAL AND ALLOYS",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "456 Steel Street, Mumbai, India",
    rating: "4.6",
    ratingPercent: "93%",
    ratingsCount: "85",
    responseRate: "95%",
    whatsappConfirmed: true,
  },

  {
    _id: "i789012345678abcdef0123", // Random unique ID
    name: "Arif Khan Pathan",
    email: "arifpathan@gmail.com",
    mobileNumber: "9420903414",
    companyName: "HI-TECH POLYPLAST NAGPUR PVT. LTD.",
    productOrService: "HDPE Pipe",
    imgSrc: "/assets/hdpepipe.jpeg", // Example image path
    mainProducts: "HDPE Pipes, Pipe Fittings, Industrial Pipes",
    altText: "HDPE Pipe - HI-TECH POLYPLAST NAGPUR PVT. LTD.",
    years: "1 YRS",
    location: "Nagpur, India",
    tooltipText: "789 Plastics Complex, Nagpur, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "70",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "o123456789012abcdef0123", // Random unique ID
    name: "Mr. Anish Chauhan",
    email: "maxiflojayhydraulic@gmail.com",
    mobileNumber: "7505538048",
    companyName: "MAXIFLO JAY HYDRAULIC PRIVATE LIMITED",
    productOrService: "Hydraulic Pump Wholesaler",
    imgSrc: "/assets/pump.jpeg", // Example image path
    mainProducts: "Hydraulic Pumps, Hydraulic Valves, Hydraulic Systems",
    altText:
      "Hydraulic Pump Wholesaler - MAXIFLO JAY HYDRAULIC PRIVATE LIMITED",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "789 Hydraulic Street, Mumbai, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "78",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "h123456789012abcdef0123", // Random unique ID
    name: "Mohd Afzal Imam",
    email: "hydotechhydraulics@gmail.com",
    mobileNumber: "9999695464",
    companyName: "HYDOTECH HYDRAULICS ENTERPRISES",
    productOrService: "Hydraulic Pump Wholesaler",
    imgSrc: "/assets/pump1.jpeg", // Example image path
    mainProducts: "Hydraulic Pumps, Hydraulic Valves, Hydraulic Cylinders",
    altText: "Hydraulic Pump Wholesaler - HYDOTECH HYDRAULICS ENTERPRISES",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "456 Industrial Road, Delhi, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "85",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "s234567890123abcdef0123", // Random unique ID
    name: "SACHIN",
    email: "sales@hydraulicvanepump.com",
    mobileNumber: "9821423821",
    companyName: "S. M. Shah & Company",
    productOrService: "Hydraulic Pump Wholesaler",
    imgSrc: "/assets/pump2.jpeg", // Example image path
    mainProducts:
      "Hydraulic Vane Pumps, Hydraulic Gear Pumps, Hydraulic Motors",
    altText: "Hydraulic Pump Wholesaler - S. M. Shah & Company",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "789 Hydraulic Lane, Mumbai, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "150",
    responseRate: "98%",
    whatsappConfirmed: true,
  },
  {
    _id: "s345678901234bcdef0123", // Random unique ID
    name: "SBK Hydraulic",
    email: "SBKHydraulic@gmail.com",
    mobileNumber: "7942841184",
    companyName: "SBK Hydraulic Industries",
    productOrService: "Hydraulic Pump Manufacturer",
    imgSrc: "/assets/pump3.jpeg", // Example image path
    mainProducts: "Hydraulic Pumps, Hydraulic Cylinders, Hydraulic Systems",
    altText: "Hydraulic Pump Manufacturer - SBK Hydraulic Industries",
    years: "1 YRS",
    location: "Ahmedabad, India",
    tooltipText: "123 Industrial Area, Ahmedabad, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "120",
    responseRate: "97%",
    whatsappConfirmed: true,
  },
  {
    _id: "s1234567890abcdef012345", // Random unique ID
    name: "Atul",
    email: "abc@gmail.com",
    mobileNumber: "9175672448",
    companyName: "VISHWAS SALES CORPORATION",
    productOrService: "Pipes & Fittings",
    imgSrc: "/assets/pipe7.jpeg", // Example image path
    mainProducts: "Pipes, Fittings, Plumbing Supplies",
    altText: "Pipes & Fittings - VISHWAS SALES CORPORATION",
    years: "1 YRS",
    location: "Ahmedabad, India",
    tooltipText: "Sector 9, Industrial Area, Ahmedabad, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "65",
    responseRate: "93%",
    whatsappConfirmed: true,
  },
  {
    _id: "s1234567890abcdef012345", // Random unique ID
    name: "Tanmoy Chatterjee",
    email: "abc@gmail.com",
    password: "tanmoy@123",
    mobileNumber: "9331863516",
    companyName: "K.K.ENTERPRISE",
    productOrService: "Oil Seal",
    imgSrc: "/assets/oil-seal.jpeg", // Example image path
    mainProducts: "Oil Seals, Gaskets, O-rings",
    altText: "Oil Seals - K.K.ENTERPRISE",
    years: "1 YRS",
    location: "Kolkata, India",
    tooltipText: "Block B, Industrial Estate, Kolkata, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "50",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    _id: "s1234567890abcdef012349", // Random unique ID
    name: "Harshil Sanghavi",
    email: "abc@gmail.com",
    password: "harshil@123",
    mobileNumber: "8097840018",
    companyName: "Hem Engineers",
    productOrService: "Oil Seal",
    imgSrc: "/assets/oil-seal1.jpeg", // Example image path
    mainProducts: "Oil Seals, Hydraulic Seals, Mechanical Seals",
    altText: "Oil Seal - Hem Engineers",
    years: "1 YRS",
    location: "Ahmedabad, India",
    tooltipText: "Industrial Area, Ahmedabad, India",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "50",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    _id: "z6789012345a678901",
    name: "Jay Patel",
    email: "jaypatel@gmail.com",
    password: "Jay Patel",
    mobileNumber: "7778999203",
    companyName: "STIBA PIPE & FITTINGS",
    productOrService: "PVC Pipe, UPVC Pipe, All Bibcock & Showers",
    imgSrc: "/assets/pvcpipe.jpeg",
    mainProducts: "PVC Pipes, UPVC Pipes, Bibcocks, Showers, Fittings",
    altText: "Pipe & Fittings - STIBA PIPE & FITTINGS",
    years: "1 YRS",
    location: "Vadodara, Gujarat, India",
    tooltipText: "GIDC, Vadodara, Gujarat, India",
    rating: "4.9",
    ratingPercent: "97%",
    ratingsCount: "200",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890wxyz5694",
    name: "HITESH",
    email: "navkarforge23@gmail.com",
    password: "navkarforge6433",
    mobileNumber: "9969259019",
    companyName: "NAVKAR FORGE INDUSTRIES",
    productOrService: "Manufacturing and Stockist of Fittings and Flanges",
    imgSrc: "/assets/fittings1.jpeg", // Placeholder for image path
    mainProducts: "Fittings, Flanges, Industrial Components",
    altText: "Industrial Fittings and Flanges - NAVKAR FORGE INDUSTRIES",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "NAVKAR FORGE INDUSTRIES, India",
    rating: "4.7", // Placeholder for rating
    ratingPercent: "94%", // Placeholder for rating percentage
    ratingsCount: "180", // Placeholder for ratings count
    responseRate: "93%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890wxyz5683",
    name: "Rafi Md",
    email: "rafimd@gmail.com",
    password: "12345678",
    mobileNumber: "9666555558",
    companyName: "Universal Hydraulics",
    productOrService: "Hydraulics",
    imgSrc: "/assets/pump9.jpeg", // Placeholder for image path
    mainProducts: "Hydraulic Pumps, Cylinders, Valves, Hoses",
    altText: "Hydraulics - Universal Hydraulics",
    years: "1 YRS", // Placeholder for years of experience
    location: "Hyderabad, India", // Placeholder for location
    tooltipText: "Universal Hydraulics, Hyderabad, India",
    rating: "4.5", // Placeholder for rating
    ratingPercent: "90%", // Placeholder for rating percentage
    ratingsCount: "120", // Placeholder for ratings count
    responseRate: "92%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890abc5696",
    name: "Dinesh",
    email: "dinesh@gmsil.com",
    password: "dineshpipes",
    mobileNumber: "9986365209",
    companyName: "Mysore Pipes & Tubes",
    productOrService: "GI pipes",
    imgSrc: "/assets/gipipes.jpeg", // Placeholder for image path
    mainProducts: "GI Pipes, Tubes",
    altText: "Mysore Pipes & Tubes - GI Pipes Manufacturer",
    years: "1 YRS", // Placeholder for years of experience
    location: "Mysore, India", // Placeholder for location
    tooltipText: "Mysore Pipes & Tubes, Mysore, India",
    rating: "4.7", // Placeholder for rating
    ratingPercent: "92%", // Placeholder for rating percentage
    ratingsCount: "110", // Placeholder for ratings count
    responseRate: "88%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "b1234567890hardware-tools-information",
    name: "Sunal Seth",
    email: "Sunal123@gmail.com",
    password: "Sunal1234",
    mobileNumber: "9999295067",
    companyName: "Hardware Tools Information",
    productOrService: "Hardware",
    imgSrc: "/assets/harware1.jpeg",
    mainProducts: "Hardware Tools, Construction Tools",
    altText: "Hardware Tools Information - Hardware",
    years: "1 YRS",
    location: "Rajkot, Gujarat, India",
    tooltipText: "Hardware Tools Information, Rajkot, Gujarat",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "89%",
    whatsappConfirmed: true,
  },
  {
    _id: "megha-manufacture-rajkot",
    name: "vikram bhai",
    email: "meghamanufacture@gmail.com",
    password: "vikram bhai",
    mobileNumber: "9481480643",
    companyName: "MEGHA MANUFACTURE",
    productOrService: "Hardware products",
    imgSrc: "/assets/hard3.jpg",
    mainProducts: "Hardware products",
    altText: "MEGHA MANUFACTURE - Hardware products",
    years: "1 YRS",
    location: "Rajkot, Gujarat, India",
    tooltipText: "MEGHA MANUFACTURE, Hardware products, Rajkot",
    rating: "4.0",
    ratingPercent: "80%",
    ratingsCount: "25",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    _id: "alshifa-hardware-aligarh",
    name: "aslam",
    email: "alshifahardware@gmail.com",
    password: "aslam aslam",
    mobileNumber: "8791766754",
    companyName: "alshifa hardware",
    productOrService: "Hardware products",
    imgSrc: "/assets/hardware1.jpg",
    mainProducts: "Hardware Products",
    altText: "alshifa hardware - Hardware Products",
    years: "1 YRS",
    location: "Aligarh, Uttar Pradesh, India",
    tooltipText: "alshifa hardware, Hardware products, Aligarh",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "20",
    responseRate: "85%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const HardwareStore = () => {
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
                  <Link to="#">Nails</Link>
                </li>
                <li>
                  <Link to="#">Screws</Link>
                </li>
                <li>
                  <Link to="#">Tools</Link>
                </li>
                <li>
                  <Link to="#">Construction Hardware</Link>
                </li>
                <li>
                  <Link to="#">Door Hardware</Link>
                </li>
                <li>
                  <Link to="#">Fasteners</Link>
                </li>
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
                  <Link to="#">Gujarat</Link>
                </li>
                <li>
                  <Link to="#">Maharashtra</Link>
                </li>
                <li>
                  <Link to="#">Rajasthan</Link>
                </li>
                <li>
                  <Link to="#">Punjab</Link>
                </li>
                <li>
                  <Link to="#">Tamil Nadu</Link>
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
                      src="/assets/hard1.jpg"
                      width={55}
                      height={55}
                      alt="Nails"
                    />
                  </figure>
                  <p className="title">Nails</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/hw2.jpg"
                      width={55}
                      height={55}
                      alt="Screws"
                    />
                  </figure>
                  <p className="title">Screws</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/hw3.jpg"
                      width={55}
                      height={55}
                      alt="Tools"
                    />
                  </figure>
                  <p className="title">Tools</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/hw4.jpg"
                      width={55}
                      height={55}
                      alt="Construction Hardware"
                    />
                  </figure>
                  <p className="title">Construction Hardware</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/hw5.jpg"
                      width={55}
                      height={55}
                      alt="Door Hardware"
                    />
                  </figure>
                  <p className="title">Door Hardware</p>
                </div>
              </Link>
            </div>
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
                      <Link to="#" target="_blank">
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
                      <div
                        className="ca-box modal-btn"
                        data-modal="motc"
                        data-src={item.trustCertificateUrl}
                      >
                        <p>
                          <i className="l3icon motc-icon" />
                        </p>
                      </div>
                    </div>
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

export default HardwareStore;
