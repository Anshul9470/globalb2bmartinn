import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    _id: "667bb8e29644befaa9547ffa",
    name: "Bharat Trading Company",
    email: "bharatagrotrading@gmail.com",
    mobileNumber: "7204294443",
    companyName: "Bharat Trading Company",
    productOrService: "Agro products",
    imgSrc: "/assets/agros.jpeg", // You need to provide the correct image path
    mainProducts: "Rice, Wheat, Pulses, Spices",
    altText: "Agro Products - Bharat Trading Company",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "789 Agro Market, Dadar, Mumbai, India",
    rating: "4.7",
    ratingPercent: "95%",
    ratingsCount: "120",
    responseRate: "97%",
  },
  {
    name: "Chetan",
    email: "abc@gmail.com",
    mobileNumber: "8208040966",
    companyName: "Slotan Solutions",
    productOrService: "Grains Processing Plant Manufacturer",
    imgSrc: "/assets/grains.jpeg",
    altText: "Grains Processing Plant Manufacturer - Slotan Solutions",
    mainProducts:
      "Grain Mills, Processing Equipment, Packaging Machines, Cleaning Systems",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "456 Industrial Park, Machinery Lane, Delhi, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "400",
    responseRate: "93%",
  },
  {
    _id: "c1d2e3f4g5h678901234567", // Random unique ID
    name: "Ashish",
    email: "ashish@gmail.com",
    password: "ashish@123", // Including the password as specified
    mobileNumber: "9413304884",
    companyName: "Sudarshan & Company",
    productOrService: "Food Grains & Seeds",
    imgSrc: "/assets/seeds.jpeg", // Example image path
    mainProducts: "Rice, Wheat, Pulses, Seeds",
    altText: "Food Grains & Seeds - Sudarshan & Company",
    years: "1 YRS",
    location: "Kolkata, India",
    tooltipText: "789 Grains Market, Kolkata, India",
    rating: "4.7",
    ratingPercent: "95%",
    ratingsCount: "120",
    responseRate: "98%",
  },

  {
    _id: "d5e6f7g8h9i0123456789abc", // Random unique ID
    name: "Gourishankar Yadav",
    email: "gourishanka@gmail.com",
    password: "gourishankar yadav", // Including the password as specified
    mobileNumber: "7000488119",
    companyName: "Ram Multiplier Krishi kendra Bandol",
    productOrService: "Agricultural Products",
    imgSrc: "/assets/agro7.jpeg", // Example image path
    mainProducts: "Seeds, Fertilizers, Pesticides",
    altText: "Agricultural Products -am Multiplier Krishi kendra Bandol",
    years: "1 YRS",
    location: "Bundol, India",
    tooltipText: "789 Agriculture Road, Bundol, India",
    rating: "4.3",
    ratingPercent: "87%",
    ratingsCount: "40",
    responseRate: "90%",
  },

  {
    name: "Moreshwar Narayan Sirse",
    email: "sheemo.exim@gmail.com",
    mobileNumber: "8668923801",
    companyName: "Sheemo Agro Food Product",
    productOrService: "Vegetable & Food Product",
    imgSrc: "/assets/agro2.jpeg", // You need to provide the correct image path
    mainProducts:
      "Fresh vegetables, Organic fruits, Processed food items, etc.",
    altText: "Vegetable & Food Product - Sheemo Agro Food Product",
    years: "1 YRS",
    location: "Pune, Maharashtra, India",
    tooltipText: "Plot No. 12, MIDC, Pune - 411026, Maharashtra, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "300",
    responseRate: "95%",
  },
  {
    name: "Geetanjali",
    email: "Geetanjali@gmail.com",
    mobileNumber: "7032855846",
    companyName: "Modi Care",
    productOrService: "Grocery",
    imgSrc: "/assets/agro1.avif", // You need to provide the correct image path
    mainProducts: "Rice, Pulses, Spices, Cooking oils, etc.",
    altText: "Grocery - Modi Care",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "789, Chandni Chowk, Delhi - 110006, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "180",
    responseRate: "96%",
  },
  {
    _id: "667bb8e29644befaa9547ffa",
    name: "Darmesh",
    email: "darmesh123@gmail.com",
    password: "darmesh123", // Assuming you want to include the password here as well
    mobileNumber: "8483889862",
    companyName: "Shrihaan Agro & Exim Private Limited",
    productOrService: "Agro",
    imgSrc: "/assets/agro6.jpeg", // You need to provide the correct image path
    mainProducts: "Rice, Wheat, Pulses, Spices",
    altText: "Agro Products - Shrihaan Agro & Exim Private Limited",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "789 Agro Market, Dadar, Mumbai, India",
    rating: "4.7",
    ratingPercent: "95%",
    ratingsCount: "120",
    responseRate: "97%",
  },
  {
    _id: "s345678901abcdef234587", // Random unique ID
    name: "Ayush Raj",
    email: "info@verticalsupports.com",
    password: "ayush@123",
    mobileNumber: "8076226141",
    companyName: "Vertical Supports",
    productOrService: "Agro Product",
    imgSrc: "/assets/agro8.jpeg", // Example image path
    mainProducts: "Agro Products, Organic Fertilizers",
    altText: "Agro Product - Vertical Supports",
    years: "1 YRS",
    location: "Patna, India",
    tooltipText: "Farm 9, Agro Zone, Patna, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "40",
    responseRate: "87%",
    whatsappConfirmed: true,
  },
  {
    _id: "s345678901abcdef234588", // Random unique ID
    name: "Mr. Kajal Mohanta",
    email: "ngc921@gmail.com",
    password: "kajal@123",
    mobileNumber: "9932539968",
    companyName: "Royal Crops Traders",
    productOrService: "Trader of Seeds",
    imgSrc: "/assets/seeds1.jpeg", // Example image path
    mainProducts: "Seeds, Agricultural Products",
    altText: "Trader of Seeds - Royal Crops Traders",
    years: "1 YRS",
    location: "Kolkata, India",
    tooltipText: "Warehouse 7, Agricultural Market, Kolkata, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "50",
    responseRate: "83%",
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890bcdef012347",
    name: "ASHWINI SINDE",
    email: "kaivalyaorganics@gmail.com",
    password: "ashwini@123",
    mobileNumber: "9552533026",
    companyName: "KAIVALYA ORGANICS PVT.LTD.",
    productOrService: "Pulses and agro products",
    imgSrc: "/assets/pulses1.jpeg",
    mainProducts: "Pulses, Lentils, Grains",
    altText: "Pulses and Agro Products - KAIVALYA ORGANICS PVT.LTD.",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "Sector 12, Agro Market, Mumbai, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "75",
    responseRate: "89%",
    whatsappConfirmed: true,
  },
  {
    _id: "j1234567890k012347",
    name: "Ashok Gangadhar Shinde",
    email: "ashok765@gmail.com",
    password: "ashok@123",
    mobileNumber: "9049860144",
    companyName: "Kaveri Gul V Sheti Utpadane",
    productOrService: "Rice & Agro Product Exporter",
    imgSrc: "/assets/rice1.jpeg",
    mainProducts: "Basmati Rice, Organic Rice, Agro Products",
    altText: "Rice & Agro Product Exporter - Kaveri Gul V Sheti Utpadane",
    years: "1 YRS",
    location: "Nashik, Maharashtra, India",
    tooltipText: "Sector 5, Agricultural Zone, Nashik, Maharashtra, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "60",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "l1234567890m012347",
    name: "Thummar",
    email: "thummar@gmail.com",
    password: "thummar123",
    mobileNumber: "8347294643",
    companyName: "Troth Exports LLP",
    productOrService: "Agro Products",
    imgSrc: "/assets/agro9.jpeg",
    mainProducts: "Organic Grains, Pulses, Spices",
    altText: "Agro Products - Troth Exports LLP",
    years: "1 YRS",
    location: "Ahmedabad, Gujarat, India",
    tooltipText: "Sector 8, Agro Market, Ahmedabad, Gujarat, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "65",
    responseRate: "87%",
    whatsappConfirmed: true,
  },
  {
    _id: "b1234567890c012347",
    name: "Ashok Sharma",
    email: "ashoksharma@gmail.com",
    password: "ashok sharma",
    mobileNumber: "8638276537",
    companyName: "Ashok Sharma Dairy Farm",
    productOrService: "Agro Products",
    imgSrc: "/assets/agro10.jpeg",
    mainProducts: "Dairy Products, Organic Vegetables, Fresh Milk",
    altText: "Agro Products - Ashok Sharma Dairy Farm",
    years: "1 YRS",
    location: "Jaipur, Rajasthan, India",
    tooltipText: "Sector 21, Agricultural Zone, Jaipur, Rajasthan, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "75",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "b8901234567c890123",
    name: "Yogesh",
    email: "AgrohubOverseas125566@gmail.com",
    password: "yogesh1234",
    mobileNumber: "8484961358",
    companyName: "Agrohub Overseas",
    productOrService: "Agrohub Overseas",
    imgSrc: "/assets/agro11.jpeg",
    mainProducts: "Agricultural Products, Export Services",
    altText: "Agrohub Overseas",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Kalkaji, Delhi, India",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "50",
    responseRate: "80%",
    whatsappConfirmed: true,
  },
  {
    _id: "d0123456789e012345",
    name: "Shree Omkar Exports",
    email: "shreemkarexports@gmail.com",
    password: "12345678",
    mobileNumber: "9982609497",
    companyName: "Shree Omkar Exports",
    productOrService: "Agro Products",
    imgSrc: "/assets/agro19.jpeg",
    mainProducts: "Agricultural Products, Grains, Spices",
    altText: "Agro Products - Shree Omkar Exports",
    years: "1 YRS",
    location: "Ahmedabad, Gujarat, India",
    tooltipText: "Naroda, Ahmedabad, Gujarat, India",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "60",
    responseRate: "84%",
    whatsappConfirmed: false,
  },
  {
    _id: "a1234567890wxyz5692",
    name: "PRAJJWAL KANTI GHOSH",
    email: "prajjwalg@gmail.com",
    password: "p123456#",
    mobileNumber: "9501453034",
    companyName: "MPGS India Agrotech",
    productOrService: "Agro",
    imgSrc: "/assets/agro12.jpeg", // Placeholder for image path
    mainProducts: "Agricultural Products, Seeds, Fertilizers",
    altText: "Agricultural Products - MPGS India Agrotech",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "MPGS India Agrotech, India",
    rating: "4.5", // Placeholder for rating
    ratingPercent: "90%", // Placeholder for rating percentage
    ratingsCount: "85", // Placeholder for ratings count
    responseRate: "88%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890wxyz5693",
    name: "ANSHUMANANDA BHARALI",
    email: "anshumanandabharali1@gmail.com",
    password: "123456789",
    mobileNumber: "9395655584",
    companyName: "FRESHHLY PICKED",
    productOrService: "Agro",
    imgSrc: "/assets/agrp13.jpeg", // Placeholder for image path
    mainProducts: "Fresh Produce, Organic Products, Agricultural Products",
    altText: "Fresh Produce - FRESHHLY PICKED",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "FRESHHLY PICKED, India",
    rating: "4.6", // Placeholder for rating
    ratingPercent: "92%",
    ratingsCount: "120", // Placeholder for ratings count
    responseRate: "90%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "k3456789012qrst6789",
    name: "Gurinder Singh",
    email: "jaswantagriculture@gmail.com",
    password: "jaswantagriculture",
    mobileNumber: "9216000900",
    companyName: "Jaswant Agriculture Works",
    productOrService: "Agricultural Machinery Manufacturer",
    imgSrc: "/assets/agri15.jpeg",
    mainProducts: "Tractors, Plows, Harvesters",
    altText: "Jaswant Agriculture Works - Agricultural Machinery",
    years: "1 YRS",
    location: "India",
    tooltipText: "Jaswant Agriculture Works, India",
    rating: "4.2",
    ratingPercent: "84%",
    ratingsCount: "39",
    responseRate: "80%",
    whatsappConfirmed: true,
  },

  {
    _id: "l1234567890abc5678",
    name: "Karthick Palanisamy",
    email: "karthick.psp.632@gmail.com",
    password: "9043960632",
    mobileNumber: "9043960632",
    companyName: "PSP Agro Traders",
    productOrService: "Agricultural Products",
    imgSrc: "/assets/agro15.jpeg", // Placeholder for image path
    mainProducts: "Rice, Vegetables, Fruits",
    altText: "PSP Agro Traders - Agricultural Products",
    years: "1 YRS", // Placeholder for years of experience
    location: "Gobichettipalayam, Tamil Nadu, India", // Placeholder for location
    tooltipText: "PSP Agro Traders, Gobichettipalayam",
    rating: "4.6", // Placeholder for rating
    ratingPercent: "92%", // Placeholder for rating percentage
    ratingsCount: "85", // Placeholder for ratings count
    responseRate: "88%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "m1234567890abc5678",
    name: "Mariprakash",
    email: "Mariprakash57@gmail.com",
    password: "9791528012",
    mobileNumber: "9791528012",
    companyName: "BL Brothers",
    productOrService: "Agri",
    imgSrc: "/assets/agro20.jpeg", // Placeholder for image path
    mainProducts: "Crops, Seeds, Fertilizers",
    altText: "BL Brothers - Agri Products",
    years: "1 YRS", // Placeholder for years of experience
    location: "Virudhunagar, Tamil Nadu, India", // Placeholder for location
    tooltipText: "BL Brothers, Virudhunagar",
    rating: "4.7", // Placeholder for rating
    ratingPercent: "94%", // Placeholder for rating percentage
    ratingsCount: "95", // Placeholder for ratings count
    responseRate: "87%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "b1234567890seds-traders",
    name: "Kareem",
    email: "kareem@gmail.com",
    password: "8375000867",
    mobileNumber: "8979449541",
    companyName: "Seds Traders",
    productOrService: "Seeds",
    imgSrc: "/assets/seed3.jpeg",
    mainProducts: "Seeds, Agricultural Products",
    altText: "Seds Traders - Seeds",
    years: "1 YRS",
    location: "Haryana, Haryana, India",
    tooltipText: "Seds Traders, Haryana",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "72",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    name: "Mukesh Joshi",
    email: "jmukesh63@yahoo.com",
    password: "Mukesh Joshi",
    mobileNumber: "9909955432",
    companyName: "MPJoshi",
    productOrService: "Agro Products",
    imgSrc: "/assets/agro16.jpeg",
    mainProducts: "Agro Products, Seeds, Fertilizers",
    altText: "MPJoshi - Agro Products",
    years: "1 YRS",
    location: "Banaskantha, Gujarat, India",
    tooltipText: "MPJoshi, Banaskantha",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "110",
    responseRate: "89%",
    whatsappConfirmed: true,
  },
  {
    name: "Rajendra Takawane",
    email: "raj@rsonagrotech.com",
    password: "Rajendra Takawane",
    mobileNumber: "8830062121",
    companyName: "R-SON Agrotech",
    productOrService: "Agro Products",
    imgSrc: "/assets/agro17.jpeg",
    mainProducts: "Agro Products, Seeds, Fertilizers",
    altText: "R-SON Agrotech - Agro Products",
    years: "1 YRS",
    location: "Pune, Maharashtra, India",
    tooltipText: "R-SON Agrotech, Pune",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "85",
    responseRate: "87%",
    whatsappConfirmed: true,
  },
  {
    name: "Moorthy N",
    email: "moorthynms.mba@gmail.com",
    password: "Moorthy N",
    mobileNumber: "8220958398",
    companyName: "Hombale Export",
    productOrService: "Jaggery",
    imgSrc: "/assets/jaggery4.jpeg",
    mainProducts: "Jaggery, Organic Sweeteners",
    altText: "Hombale Export - Jaggery",
    years: "1 YRS",
    location: "Bangalore, Karnataka, India",
    tooltipText: "Hombale Export, Bangalore",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "70",
    responseRate: "89%",
    whatsappConfirmed: true,
  },
  {
    name: "Rajendra Takawane",
    email: "raj@rsonagrotech.com",
    password: "Rajendra Takawane",
    mobileNumber: "8830062121",
    companyName: "R-SON Agrotech",
    productOrService: "Agro",
    imgSrc: "/assets/agro21.jpeg",
    mainProducts: "Agro Products, Fertilizers, Seeds",
    altText: "R-SON Agrotech - Agro Products",
    years: "1 YRS",
    location: "Pune, Maharashtra, India",
    tooltipText: "R-SON Agrotech, Pune",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "85",
    responseRate: "87%",
    whatsappConfirmed: true,
  },
  {
    _id: "chetak-bioplantech-maharashtra",
    name: "Tushar Rajput",
    email: "vitthalrajput999@gmail.com",
    password: "Tushar Rajput",
    mobileNumber: "7030385697",
    companyName: "Chetak Bioplantech",
    productOrService: "Agri Commodity",
    imgSrc: "/assets/agro18.jpg",
    mainProducts: "Agricultural Products, Biotech Solutions",
    altText: "Chetak Bioplantech - Agri Commodity",
    years: "1 YRS",
    location: "Dhule, Maharashtra, India",
    tooltipText: "Chetak Bioplantech, Agri Commodity, Dhule",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "40",
    responseRate: "95%",
    whatsappConfirmed: false,
  },
  {
    _id: "dvp-groups-pune",
    name: "Yuvraj",
    email: "abc@gmail.com",
    password: "yuvraj@123",
    mobileNumber: "8275932047",
    companyName: "DVP Groups",
    productOrService: "Agro",
    imgSrc: "/assets/agro22.jpg",
    mainProducts: "Agro Products",
    altText: "DVP Groups - Agro",
    years: "1 YRS",
    location: "Pune, Maharashtra, India",
    tooltipText: "DVP Groups, Agro, Pune",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "35",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "vyankatesh-marketing-mp",
    name: "Pradeep Hotwani",
    email: "abc@gmail.com",
    password: "pradeep@123",
    mobileNumber: "9425327596",
    companyName: "Vyankatesh Marketing",
    productOrService: "Agro",
    imgSrc: "/assets/agro1.avif",
    mainProducts: "Agro Products",
    altText: "Vyankatesh Marketing - Agro",
    years: "1 YRS",
    location: "MP, India",
    tooltipText: "Vyankatesh Marketing, Agro, MP",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "28",
    responseRate: "87%",
    whatsappConfirmed: true,
  },
  {
    _id: "psp-agro-traders-gobichettipalayam",
    name: "Karthick Palanisamy",
    email: "karthick.psp.632@gmail.com",
    password: "9043960632",
    mobileNumber: "9043960632",
    companyName: "PSP AGRO TRADERS",
    productOrService: "AGRO",
    imgSrc: "/assets/agro23.jpg",
    mainProducts: "AGRO Products",
    altText: "PSP AGRO TRADERS - AGRO",
    years: "1 YRS",
    location: "Gobichettipalayam, Tamil Nadu, India",
    tooltipText: "PSP AGRO TRADERS, AGRO, Gobichettipalayam",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "30",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "sarvesh-gujrat",
    name: "Sarvesh",
    email: "Sarvesh@gmail.com",
    password: "12345678",
    mobileNumber: "9325703002",
    companyName: "Sarvesh",
    productOrService: "agro",
    imgSrc: "/assets/agro26.jpg",
    mainProducts: "agro",
    altText: "Sarvesh - Agro Products",
    years: "1 YRS",
    location: "Gujrat, India",
    tooltipText: "Sarvesh, Agro, Gujrat",
    rating: "4.1",
    ratingPercent: "82%",
    ratingsCount: "10",
    responseRate: "70%",
    whatsappConfirmed: true,
  },
  {
    _id: "l-naresh-sumuka-traders-chennai",
    name: "L Naresh",
    email: "nareshmadras555@gmail.com",
    password: "9884714774",
    mobileNumber: "9884714774",
    companyName: "sumuka traders",
    productOrService: "agro products",
    imgSrc: "/assets/agro24.jpg",
    mainProducts: "agro products",
    altText: "sumuka traders - agro products",
    years: "1 YRS",
    location: "Chennai, Tamil Nadu, India",
    tooltipText: "sumuka traders, agro products, Chennai",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "30",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "agri-food-industry-gurugram",
    name: "Shail",
    email: "shail123@gmail.com",
    password: "shail1234",
    mobileNumber: "8928205212",
    companyName: "Agri Food Industry",
    productOrService: "Agro Products",
    imgSrc: "/assets/agro27.jpg",
    mainProducts: "Agro Products",
    altText: "Agri Food Industry - Agro Products",
    years: "1 YRS", // Random value
    location: "Gurugram, Delhi, India",
    tooltipText: "Agri Food Industry, Agro Products, Gurugram",
    rating: "4.7", // Random value
    ratingPercent: "93%", // Random value
    ratingsCount: "20", // Random value
    responseRate: "88%", // Random value
    whatsappConfirmed: true,
  },
  {
    _id: "vignesh-agro-noida",
    name: "Vignesh Rao",
    email: "vigneshrao12@gmail.com",
    password: "123456789",
    mobileNumber: "9818169130",
    companyName: "Vignesh Agro",
    productOrService: "Trading",
    imgSrc: "/assets/vignesh-agro.jpg",
    mainProducts: "Agricultural Trading",
    altText: "Vignesh Agro - Trading",
    years: "1 YRS",
    location: "Noida, Uttar Pradesh, India",
    tooltipText: "Vignesh Agro, Trading, Noida, Uttar Pradesh",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "38",
    responseRate: "78%",
    whatsappConfirmed: true,
  },
  {
    _id: "rajnish-natani-surat-gujrat",
    name: "Rajnish Natani",
    email: "Rajnish123@gmail.com",
    password: "Rajnish@1234",
    mobileNumber: "9227701326",
    companyName: "SHREE RAM AGRO BIOTECH",
    statename: "Gujrat",
    cityname: "Surat",
    productOrService: "Sari",
    imgSrc: "/assets/biotech1.jpg",
    mainProducts: "Sari",
    altText: "SHREE RAM AGRO BIOTECH - Surat",
    years: "1 YRS",
    location: "Surat, Gujrat",
    tooltipText: "SHREE RAM AGRO BIOTECH, Surat",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "150",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "shaileshsomatkar-washim-maharashtra",
    name: "Shailesh Somatkar",
    email: "somatkarshailesh1989@gmail.com",
    password: "Shailesh Somatkar",
    mobileNumber: "9860684499",
    companyName: "Shailesh Somatkar Enterprises",
    statename: "Maharashtra",
    cityname: "Washim",
    productOrService: "Chia Seeds",
    imgSrc: "/assets/chia1.jpg",
    mainProducts: "Chia Seeds",
    altText: "Shailesh Somatkar Enterprises - Washim",
    years: "1 YRS",
    location: "Washim, Maharashtra",
    tooltipText: "Shailesh Somatkar Enterprises, Washim",
    rating: "4.3",
    ratingPercent: "89%",
    ratingsCount: "78",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "izaan-ujjain-agro",
    name: "Izaan",
    email: "izaanindiaent@gmail.com",
    password: "12345678",
    mobileNumber: "8889991238",
    companyName: "Izaan India Enterprises",
    statename: "",
    cityname: "Ujjain",
    productOrService: "Agro",
    imgSrc: "/assets/agro30.jpg",
    mainProducts: "Agro Products",
    altText: "Izaan India Enterprises - Agro Supplier in Ujjain",
    years: "1 YRS",
    location: "Ujjain",
    tooltipText: "Izaan India Enterprises - Trusted Agro Supplier",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "125",
    responseRate: "84%",
    whatsappConfirmed: true,
  },
];

const AgroProductsSupplier = () => {
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
                  <Link to="#">Rice</Link>
                </li>
                <li>
                  <Link to="#">Wheat</Link>
                </li>
                <li>
                  <Link to="#">Pulses</Link>
                </li>
                <li>
                  <Link to="#">Spices</Link>
                </li>
                <li>
                  <Link to="#">Fruits</Link>
                </li>
                <li>
                  <Link to="#">Vegetables</Link>
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
                  <Link to="#">Maharashtra</Link>
                </li>
                <li>
                  <Link to="#">Gujarat</Link>
                </li>
                <li>
                  <Link to="#">Uttar Pradesh</Link>
                </li>
                <li>
                  <Link to="#">Punjab</Link>
                </li>
                <li>
                  <Link to="#">Andhra Pradesh</Link>
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
                      src="/assets/agro1.avif"
                      width={55}
                      height={55}
                      alt="Rice"
                    />
                  </figure>
                  <p className="title">Rice</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/agro2.jpeg"
                      width={55}
                      height={55}
                      alt="Wheat"
                    />
                  </figure>
                  <p className="title">Wheat</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/agro3.jpeg"
                      width={55}
                      height={55}
                      alt="Pulses"
                    />
                  </figure>
                  <p className="title">Pulses</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/agro5.jpeg"
                      width={55}
                      height={55}
                      alt="Spices"
                    />
                  </figure>
                  <p className="title">Spices</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/agro4.jpeg"
                      width={55}
                      height={55}
                      alt="Fruits"
                    />
                  </figure>
                  <p className="title">Fruits</p>
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
                      <div className="ca-box">
                        <p>
                          <i className="l3icon resp-icon" />
                        </p>
                        <p>
                          <span>Response Rate</span> <b>{item.responseRate}</b>
                        </p>
                      </div>
                      <p>
                        <span>Main Products:</span> <b>{item.mainProducts}</b>
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

export default AgroProductsSupplier;
