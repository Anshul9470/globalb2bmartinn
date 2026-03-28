import React from "react";
import { Link } from "react-router-dom";
import "./common.css";

const classifiedData = [
  {
    name: "Soma Sundaram",
    email: "sakthitex23@gmail.com",
    mobileNumber: "8447255579",
    companyName: "Sakthi Tex",
    productOrService: "Sarees",
    imgSrc: "/assets/saree1.jpg", // Provide the correct image path
    altText: "Sarees - Sakthi Tex",
    mainProducts: "Silk Sarees, Cotton Sarees, Designer Sarees",
    years: "1 YRS",
    location: "Chinnalapatti Tamil Nadu, India",
    tooltipText: "456 Saree Lane, Textile District, Kolkata, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "120",
    responseRate: "92%",
    path: "/sakthi-tex",
  },
  {
    _id: "b1234567890nobaraa-fashion",
    name: "Nobaraa Fashion",
    email: "nasreenyasin83@gmail.com",
    password: "nasreen@123",
    mobileNumber: "+91 70105 54775",
    companyName: "Nobaraa Fashion",
    productOrService: "Sarees",
    imgSrc: "/assets/nob3.webp",
    mainProducts: "Sarees, Traditional Wear",
    altText: "Nobaraa Fashion - Sarees and Traditional Wear",
    years: "1 YRS",
    location: "Salem, Tamil Nadu, India - 637101",
    tooltipText: "Nobaraa Fashion, Salem, Tamil Nadu",
    rating: "4.7",
    ratingPercent: "92%",
    ratingsCount: "45",
    responseRate: "88%",
    path: "/nobaraa-fashion",
  },
  {
    _id: "silkmart-bhagalpur",
    name: "Mohommad Kaif",
    email: "kaifhandloom700@gmail.com",
    password: "mohommad kaif",
    mobileNumber: "6204775346",
    companyName: "Silkmart",
    statename: "Bihar",
    cityname: "Bhagalpur",
    productOrService: "SAREE, DUPATTA",
    imgSrc: "/assets/silk-mart1.jpg",
    mainProducts: "Silk Sarees, Dupattas, Handloom Fabrics",
    altText: "Silkmart - Authentic Silk Sarees and Dupattas",
    years: "1 YRS",
    location: "Bhagalpur, Bihar, India",
    tooltipText: "Silkmart - Quality Handloom Products",
    rating: "4.8",
    ratingPercent: "95%",
    ratingsCount: "310",
    responseRate: "92%",
    whatsappConfirmed: true,
  },

  {
    _id: "monty-handloom-bhagalpur",
    name: "Abdul Malik Ansari",
    email: "abdulmalikansari160@gmail.com",
    password: "abdul malik ansari",
    mobileNumber: "9534793466",
    companyName: "Monty Handloom",
    productOrService: "Saree, Dupatta",
    imgSrc: "/assets/montysaree.jpg",
    mainProducts: "Saree, Dupatta",
    altText: "Monty Handloom - Saree, Dupatta",
    years: "1 YRS",
    location: "Bhagalpur, Bihar, India",
    tooltipText: "Monty Handloom, Saree, Dupatta, Bhagalpur",
    rating: "4.4",
    ratingPercent: "95%",
    ratingsCount: "36",
    responseRate: "98%",
    whatsappConfirmed: true,
  },

  {
    name: "Mrs Sadhana",
    email: "sadhana241054@gmail.com",
    mobileNumber: "7011860634",
    companyName: "SIDDHI COLLECTION",
    productOrService: "Chanderi Saree",
    imgSrc: "/assets/saree2.jpg",
    altText: "Chanderi Saree - SIDDHI COLLECTION",
    mainProducts: "Chanderi Sarees, Silk Sarees, Handloom Sarees",
    years: "1 YRS",
    location: "Madhya Pradesh, India",
    tooltipText: "456 Saree Street, Weave Town, Madhya Pradesh, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "320",
    responseRate: "88%",
  },
  {
    _id: "c123456789012abcdef0123", // Random unique ID
    name: "Subhanath Patra",
    email: "Patrafashion@gmail.com",
    password: "Subhanath Patra", // Including the password as specified
    mobileNumber: "6294950556",
    companyName: "Patra Fashion",
    productOrService: "Saree",
    imgSrc: "/assets/saree6.jpeg", // Example image path
    mainProducts: "Silk Sarees, Cotton Sarees, Designer Sarees",
    altText: "Saree - Patra Fashion",
    years: "1 YRS",
    location: "Kolkata, India",
    tooltipText: "789 Fashion Street, Kolkata, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "75",
    responseRate: "92%",
  },

  {
    name: "Arun Bera",
    email: "arun123123@gmail.com",
    mobileNumber: "8168636892",
    companyName: "Rupali Bengal Textile",
    productOrService: "Ladies Saree",
    imgSrc: "/assets/saree.jpeg", // Provide the correct image path
    altText: "Ladies Saree - Rupali Bengal Textile",
    mainProducts: "Silk Sarees, Cotton Sarees, Designer Sarees",
    years: "1 YRS",
    location: "Kolkata, India",
    tooltipText: "456 Saree Lane, Textile District, Kolkata, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "120",
    responseRate: "92%",
  },
  {
    name: "Shiv Shahi Paithani",
    email: "shishahipaithani@gmail.com",
    mobileNumber: "9665217917",
    companyName: "Shiv Shahi",
    productOrService: "Sarees",
    imgSrc: "/assets/saree15.jpeg", // Placeholder for image path
    altText: "Shiv Shahi - Sarees Collection",
    mainProducts: "Paithani Sarees, Silk Sarees, Traditional Wear",
    years: "1 YRS",
    location: "India",
    tooltipText: "Shiv Shahi, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "52",
    responseRate: "83%",
    whatsappConfirmed: true,
  },
  {
    name: "Ashish",
    email: "basutextile@gmail.com",
    mobileNumber: "9832155429",
    companyName: "M/S Basu Textile",
    productOrService: "Textile, Sarees",
    imgSrc: "/assets/saree5.jpeg",
    altText: "Textile and Sarees - M/S Basu Textile",
    mainProducts: "Textiles, Sarees, Fabrics, Ethnic Wear",
    years: "1 YRS",
    location: "Kolkata, India",
    tooltipText: "789 Fabric Lane, Textile Hub, Kolkata, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "350",
    responseRate: "90%",
  },

  {
    _id: "s234567890abcdef123456", // Random unique ID
    name: "Mohammad Atif",
    email: "mohdatifmkp@gmail.com",
    mobileNumber: "9554479529",
    companyName: "Haffan Silk",
    productOrService: "Banarsi Silk Saree",
    imgSrc: "/assets/saree7.jpeg", // Example image path
    mainProducts: "Banarsi Silk Sarees, Designer Sarees",
    altText: "Banarsi Silk Saree - Haffan Silk",
    years: "1 YRS",
    location: "Varanasi, India",
    tooltipText: "Shop No. 15, Silk Market, Varanasi, India",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "70",
    responseRate: "97%",
    whatsappConfirmed: true,
  },
  {
    _id: "s345678901abcdef234567", // Random unique ID
    name: "Rocky Kumar",
    email: "mannathandloom@gmail.com",
    mobileNumber: "8670562617",
    companyName: "Mannat Handloom",
    productOrService: "Saree, Dupatta",
    imgSrc: "/assets/saree8.webp", // Example image path
    mainProducts: "Sarees, Dupattas, Handloom Fabrics",
    altText: "Saree & Dupatta - Mannat Handloom",
    years: "1 YRS",
    location: "Kolkata, India",
    tooltipText: "Shop 45, Handloom Market, Kolkata, India",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "45",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "h8905370168i012356",
    name: "Rehan",
    email: "rehan123@gmail.com",
    password: "rehan1234",
    mobileNumber: "9305415054",
    companyName: "Nisa Fabric",
    productOrService: "Sari",
    imgSrc: "/assets/saree9.jpeg",
    mainProducts: "Silk Saris, Cotton Saris, Designer Saris",
    altText: "Saris - Nisa Fabric",
    years: "1 YRS",
    location: "Varanasi, Uttar Pradesh, India",
    tooltipText: "Lanka, Varanasi, Uttar Pradesh, India",
    rating: "4.6",
    ratingPercent: "93%",
    ratingsCount: "85",
    responseRate: "89%",
    whatsappConfirmed: true,
  },
  {
    _id: "g5678901234abc7890",
    name: "Mahendra",
    email: "abc@gmail.com",
    password: "Mahendra@123",
    mobileNumber: "9377297791",
    companyName: "Mokshit Drapes",
    productOrService: "Curtains & Ladies Blouse",
    imgSrc: "/assets/blouse.jpeg", // Placeholder for image path
    mainProducts: "Curtains, Ladies Blouse, Drapery Fabric",
    altText: "Mokshit Drapes - Curtains & Ladies Blouse",
    years: "1 YRS", // Placeholder for years of experience
    location: "Ahmedabad, Gujarat, India", // Placeholder for location
    tooltipText: "Mokshit Drapes, Ahmedabad",
    rating: "4.7", // Placeholder for rating
    ratingPercent: "94%", // Placeholder for rating percentage
    ratingsCount: "110", // Placeholder for ratings count
    responseRate: "89%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "h6789012345def8901",
    name: "Lavish",
    email: "Lavish123@gmail.com",
    password: "Lavish1234",
    mobileNumber: "8955766257",
    companyName: "Lavish Ganwani",
    productOrService: "Saree",
    imgSrc: "/assets/saree11.jpeg", // Placeholder for image path
    mainProducts: "Sarees, Designer Sarees, Silk Sarees",
    altText: "Lavish Ganwani - Saree Collection",
    years: "1 YRS", // Placeholder for years of experience
    location: "Surat, Gujarat, India", // Placeholder for location
    tooltipText: "Lavish Ganwani, Surat",
    rating: "4.6", // Placeholder for rating
    ratingPercent: "92%", // Placeholder for rating percentage
    ratingsCount: "95", // Placeholder for ratings count
    responseRate: "87%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "s2345678901abc6789",
    name: "Sonu",
    email: "sonu123@gmail.com",
    password: "sonu1234",
    mobileNumber: "7007245901",
    companyName: "B M Artss Silk",
    productOrService: "Saree",
    imgSrc: "/assets/saree12.jpeg", // Placeholder for image path
    mainProducts: "Silk Sarees, Handloom Sarees, Designer Sarees",
    altText: "B M Artss Silk - Silk Saree Collection",
    years: "6 YRS", // Placeholder for years of experience
    location: "Varanasi, Uttar Pradesh, India", // Placeholder for location
    tooltipText: "B M Artss Silk, Varanasi",
    rating: "4.7", // Placeholder for rating
    ratingPercent: "94%", // Placeholder for rating percentage
    ratingsCount: "85", // Placeholder for ratings count
    responseRate: "88%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "g1234567890def5678",
    name: "Rubina Mandal",
    email: "rubina123@gmail.com",
    password: "rubina123",
    mobileNumber: "7501445734",
    companyName: "Bengal Saree House",
    productOrService: "Sarees",
    imgSrc: "/assets/bengal-saree.jpeg", // Placeholder for image path
    mainProducts: "Traditional Sarees, Designer Sarees, Silk Sarees",
    altText: "Bengal Saree House - Sarees",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "Bengal Saree House, India",
    rating: "4.6", // Placeholder for rating
    ratingPercent: "92%", // Placeholder for rating percentage
    ratingsCount: "80", // Placeholder for ratings count
    responseRate: "88%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "i1234567890def6789",
    name: "Javed Ansari",
    email: "Javed123@gmail.com",
    password: "Javed1234",
    mobileNumber: "6387941255",
    companyName: "Banarasi Saree Collection",
    productOrService: "Saree",
    imgSrc: "/assets/saree13.jpeg", // Placeholder for image path
    mainProducts: "Banarasi Sarees, Traditional Sarees",
    altText: "Banarasi Saree Collection - Saree",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "Banarasi Saree Collection, India",
    rating: "4.6", // Placeholder for rating
    ratingPercent: "92%", // Placeholder for rating percentage
    ratingsCount: "80", // Placeholder for ratings count
    responseRate: "85%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "k1239874567bcdef3456",
    name: "Shiv Shahi Paithani",
    email: "shishahipaithani@gmail.com",
    password: "8375000867",
    mobileNumber: "9665217917",
    companyName: "Shiv Shahi",
    productOrService: "Sarees",
    imgSrc: "/assets/saree15.jpeg",
    mainProducts: "Paithani Sarees, Silk Sarees, Traditional Wear",
    altText: "Shiv Shahi - Sarees Collection",
    years: "1 YRS",
    location: "India",
    tooltipText: "Shiv Shahi, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "52",
    responseRate: "83%",
    whatsappConfirmed: true,
  },
  {
    _id: "r2s3t4u5v6w7x8y9z0a1b2c3", // Random unique ID
    name: "Shilpa",
    email: "mail@dharohars.com",
    mobileNumber: "8103053680",
    companyName: "Dharohar Blocks & Prints",
    productOrService: "Hand Block Saree Wholesaler",
    imgSrc: "/assets/saree16.jpeg", // Example image path
    mainProducts:
      "Hand Block Printed Sarees, Traditional Sarees, Designer Sarees, Handcrafted Fabrics",
    altText: "Hand Block Sarees - Dharohar Blocks & Prints",
    years: "1 YRS",
    location: "Jaipur, India",
    tooltipText: "34 Saree Street, Jaipur, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "70",
    responseRate: "95%",
    whatsappConfirmed: true,
  },
  {
    _id: "arishfa-silk-varanasi",
    name: "azmat hamza",
    email: "azmathamza@gmail.com",
    password: "azmat hamza",
    mobileNumber: "6387926027",
    companyName: "Arishfa Silk",
    productOrService: "Banarasi Saree",
    imgSrc: "/assets/banarsi1.jpg", // Placeholder image path
    mainProducts: "Banarasi Sarees",
    altText: "Arishfa Silk - Banarasi Sarees",
    years: "1 YRS", // Random value
    location: "Varanasi, Uttar Pradesh, India",
    tooltipText: "Arishfa Silk, Banarasi Sarees, Varanasi",
    rating: "4.9", // Random value
    ratingPercent: "98%", // Random value
    ratingsCount: "25", // Random value
    responseRate: "85%", // Random value
    whatsappConfirmed: true,
  },
  {
    _id: "surat-saree-wholesaler-surat",
    name: "Manish",
    email: "manish@gmail.com",
    password: "12345678",
    mobileNumber: "9979225495",
    companyName: "Surat Saree Wholesaler",
    productOrService: "Saree",
    imgSrc: "/assets/surat-saree1.jpg",
    mainProducts: "Saree",
    altText: "Surat Saree Wholesaler - Saree",
    years: "1 YRS",
    location: "Surat, India",
    tooltipText: "Surat Saree Wholesaler, Saree, Surat",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "45",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "the-saree-story-india",
    name: "Asif",
    email: "asif@gmail.com",
    password: "12345678",
    mobileNumber: "6393308383",
    companyName: "TheSaree Story",
    productOrService: "saree",
    imgSrc: "/assets/sareestory.jpg",
    mainProducts: "saree",
    altText: "TheSaree Story - India",
    years: "1 YRS",
    location: "India",
    tooltipText: "TheSaree Story, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "12",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "aarav-silk-collection-bhagalpur",
    name: "Aarav Dev",
    email: "aaravdev466@gmail.com",
    password: "Aarav dev",
    mobileNumber: "8210737909",
    companyName: "Aarav Silk Collection",
    productOrService: "Saree, Dupatta",
    imgSrc: "/assets/silksaree.jpg",
    mainProducts: "Saree, Dupatta",
    altText: "Aarav Silk Collection - Saree, Dupatta",
    years: "1 YRS",
    location: "Bhagalpur, Bihar, India",
    tooltipText: "Aarav Silk Collection, Saree, Dupatta, Bhagalpur",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "42",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "osman-handloom-bhagalpur",
    name: "Osman",
    email: "Osmanhandloom@gmail.com",
    password: "Osman Osman",
    mobileNumber: "7544831988",
    companyName: "Osman Handloom",
    productOrService: "Saree, Dupatta",
    imgSrc: "/assets/saree19.jpg",
    mainProducts: "Saree, Dupatta",
    altText: "Osman Handloom - Saree, Dupatta",
    years: "1 YRS",
    location: "Bhagalpur, Bihar, India",
    tooltipText: "Osman Handloom, Saree, Dupatta, Bhagalpur",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "38",
    responseRate: "87%",
    whatsappConfirmed: true,
  },
  {
    _id: "black-rose-bhagalpur",
    name: "Shahid",
    email: "BLACKROSE@gmail.com",
    password: "shahidshahid",
    mobileNumber: "8582066745",
    companyName: "BLACK ROSE",
    statename: "Bihar",
    cityname: "Bhagalpur",
    productOrService: "SAREE, DUPATTA",
    imgSrc: "/assets/saree-black1.jpg",
    mainProducts: "SAREE, DUPATTA",
    altText: "BLACK ROSE - Bhagalpur",
    years: "1 YRS",
    location: "Bhagalpur, Bihar",
    tooltipText: "BLACK ROSE, Bhagalpur",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "98",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "rehan-bhagalpur-bihar",
    name: "Rehan",
    email: "mdrehan86518@gmail.com",
    password: "RehanRehan",
    mobileNumber: "8252392725",
    companyName: "Aqsha Handloom Fabric",
    statename: "Bihar",
    cityname: "Bhagalpur",
    productOrService: "SAREE, DUPATTA",
    imgSrc: "/assets/saree17.jpg",
    mainProducts: "SAREE, DUPATTA",
    altText: "Aqsha Handloom Fabric - Bhagalpur",
    years: "1 YRS",
    location: "Bhagalpur, Bihar",
    tooltipText: "Aqsha Handloom Fabric, Bhagalpur",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "250",
    responseRate: "89%",
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
    imgSrc: "/assets/saree21.jpg",
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
    _id: "ashraf-jaipur-rajasthan",
    name: "Ashraf",
    email: "asrafali@gmail.com",
    password: "ashrafashraf",
    mobileNumber: "7568321542",
    companyName: "Bagru Handprint",
    statename: "Rajasthan",
    cityname: "Jaipur",
    productOrService: "SAREE, DUPATTA",
    imgSrc: "/assets/bagru1.jpg",
    mainProducts: "Saree, Dupatta",
    altText: "Bagru Handprint - Jaipur",
    years: "1 YRS",
    location: "Jaipur, Rajasthan",
    tooltipText: "Bagru Handprint, Jaipur",
    rating: "4.6",
    ratingPercent: "94%",
    ratingsCount: "180",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "prahlad-mudara-surat-gujarat",
    name: "Prahlad Mudara",
    email: "Prahladmudara@gmail.com",
    password: "Prahlad Mudara",
    mobileNumber: "7817914465",
    companyName: "Prahlad Mudara",
    statename: "Gujarat",
    cityname: "Surat",
    productOrService: "SAREE, DUPATTA",
    imgSrc: "/assets/saree89.jpg",
    mainProducts: "SAREE, DUPATTA",
    altText: "Prahlad Mudara - Surat",
    years: "1 YRS",
    location: "Surat, Gujarat",
    tooltipText: "Prahlad Mudara, Surat",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "180",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    _id: "kashif-ansari-bhagalpur-bihar",
    name: "Kashif Ansari",
    email: "kahandloom@gmail.com",
    password: "Kashif Ansari",
    mobileNumber: "8298920251",
    companyName: "KA Handloom",
    statename: "Bihar",
    cityname: "Bhagalpur",
    productOrService: "SAREE, DUPATTA",
    imgSrc: "/assets/kandloom-saree.jpg",
    mainProducts: "SAREE, DUPATTA",
    altText: "KA Handloom - Bhagalpur",
    years: "1 YRS",
    location: "Bhagalpur, Bihar",
    tooltipText: "KA Handloom, Bhagalpur",
    rating: "4.5",
    ratingPercent: "91%",
    ratingsCount: "150",
    responseRate: "94%",
    whatsappConfirmed: true,
  },
  {
    _id: "shahid-bhagalpur-bihar",
    name: "Shahid",
    email: "mrrhandloom04@gmail.com",
    password: "shahidshahid",
    mobileNumber: "7479571648",
    companyName: "MMR Handloom",
    statename: "Bihar",
    cityname: "Bhagalpur",
    productOrService: "SAREE, DUPATTA",
    imgSrc: "/assets/handloom-saree.jpg",
    mainProducts: "SAREE, DUPATTA",
    altText: "MMR Handloom - Bhagalpur",
    years: "1 YRS",
    location: "Bhagalpur, Bihar",
    tooltipText: "MMR Handloom, Bhagalpur",
    rating: "4.3",
    ratingPercent: "88%",
    ratingsCount: "134",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    name: "Tanvika Gupta",
    email: "tanvikabeautY@gmail.com",
    password: "tanvika gupta",
    mobileNumber: "8529124659",
    companyName: "Tanvika Beauty Center",
    productOrService: "Saree, Bedsheet",
    imgSrc: "/assets/saree20.jpg",
    mainProducts: "Sarees, Bedsheets, Dress Materials",
    altText: "Tanvika Beauty Center - Saree and Bedsheet",
    years: "1 YRS",
    location: "Jaipur, Rajasthan, India",
    tooltipText: "Tanvika Beauty Center, Jaipur",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "120",
    responseRate: "89%",
    whatsappConfirmed: true,
  },
  {
    name: "Md Ayaan",
    email: "aftab76512@gmail.com",
    password: "md ayaan",
    mobileNumber: "6392301469",
    companyName: "Afreen Sarees",
    productOrService: "Saree, Dupatta",
    imgSrc: "/assets/Afeen-saree.jpg",
    mainProducts: "Sarees, Dupattas, Ethnic Wear",
    altText: "Afreen Sarees - Saree and Dupatta",
    years: "1 YRS",
    location: "Varanasi, Uttar Pradesh, India",
    tooltipText: "Afreen Sarees, Varanasi",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "110",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "paranthaman-mnk-tirunelveli",
    name: "Paranthaman",
    email: "paranthamanmnk@gmail.com",
    password: "7667712608",
    mobileNumber: "7667712608",
    companyName: "Paranthaman Mnk",
    statename: "Tamil Nadu",
    cityname: "Tirunelveli",
    productOrService: "Saree",
    imgSrc: "/assets/saree23.jpg",
    mainProducts: "Sarees",
    altText: "Paranthaman Mnk - Saree",
    years: "1 YRS",
    location: "Tirunelveli, Tamil Nadu, India",
    tooltipText: "Paranthaman Mnk - Saree Manufacturer",
    rating: "4.6",
    ratingPercent: "93%",
    ratingsCount: "150",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "shantiniketan-kathastitch-manufacturing-unit-bolpur",
    name: "Mir Sinekadir Ali",
    email: "mirsinekadirali@gmail.com",
    password: "mir sinekadir ali",
    mobileNumber: "7908969018",
    companyName: "Shantiniketan Kathastitch Manufacturing Unit",
    statename: "West Bengal",
    cityname: "Bolpur",
    productOrService: "Saree, Dupatta",
    imgSrc: "/assets/shanti.jpg",
    mainProducts: "Saree, Dupatta, Handwoven Textiles",
    altText:
      "Shantiniketan Kathastitch Manufacturing Unit - Saree & Dupatta Manufacturer",
    years: "1 YRS",
    location: "Bolpur, West Bengal, India",
    tooltipText:
      "Shantiniketan Kathastitch Manufacturing Unit - Quality Handwoven Sarees & Dupattas",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "200",
    responseRate: "97%",
    whatsappConfirmed: false,
  },
  {
    _id: "ns-enterprises-wazirabad",
    name: "Nasiruddin Sheikh",
    email: "NasiruddinSheikh123@gmail.com",
    password: "Nasiruddin Sheikh",
    mobileNumber: "8076927660",
    companyName: "NS Enterprises",
    statename: "Delhi",
    cityname: "Wazirabad",
    productOrService: "Sari",
    imgSrc: "/assets/ns-enterprises.jpg",
    mainProducts: "Designer Sarees, Silk Sarees, Cotton Sarees",
    altText: "NS Enterprises - Sari Manufacturer",
    years: "1 YRS",
    location: "Wazirabad, Delhi, India",
    tooltipText: "NS Enterprises - Premium Sari Manufacturer",
    rating: "4.8",
    ratingPercent: "96%",
    ratingsCount: "200",
    responseRate: "97%",
    whatsappConfirmed: false,
  },
  {
    _id: "moumita-garai-birbhum",
    name: "Moumita Garai",
    email: "shivangihandicraft@gmail.com",
    password: "Moumita Garai",
    mobileNumber: "9593365185",
    companyName: "Shivangi Handicraft and Textile",
    statename: "West Bengal",
    cityname: "Birbhum",
    productOrService: "Kantha Stitch Saree",
    imgSrc: "/assets/saree30.jpg",
    mainProducts: "Handcrafted Kantha Stitch Sarees, Traditional Textiles",
    altText: "Moumita Garai - Expert in Kantha Stitch Sarees from Birbhum",
    years: "1 YRS",
    location: "Birbhum, West Bengal, India",
    tooltipText:
      "Moumita Garai - Your Trusted Supplier for Kantha Stitch Sarees",
    rating: "4.9",
    ratingPercent: "96%",
    ratingsCount: "175",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    _id: "henil-soni-kachh",
    name: "Henil Soni",
    email: "Bhandejhouse@gmail.com",
    password: "Henil Soni",
    mobileNumber: "7041413238",
    companyName: "Bhandej House",
    statename: "Gujarat",
    cityname: "Kachh",
    productOrService: "Saree, Dupatta",
    imgSrc: "/assets/saree9.jpg",
    mainProducts: "Traditional Sarees, Designer Dupattas, Handwoven Fabrics",
    altText: "Bhandej House - Premium Saree and Dupatta Supplier in Kachh",
    years: "1 YRS",
    location: "Kachh, Gujarat, India",
    tooltipText: "Bhandej House - Trusted Saree and Dupatta Manufacturer",
    rating: "4.7",
    ratingPercent: "92%",
    ratingsCount: "180",
    responseRate: "89%",
    whatsappConfirmed: true,
  },

  // Add more items if needed
];

const Sarees = () => {
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
                  <Link to="#">Paithani Sarees</Link>
                </li>
                <li>
                  <Link to="#">Silk Sarees</Link>
                </li>
                <li>
                  <Link to="#">Traditional Wear</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flt-box">
            <p className="flt-title">By Location</p>
            <div className="flt-content">
              <div className="flt-search">
                <input
                  type="text"
                  name="location_id"
                  placeholder="Search Location"
                  id="location-search-input"
                />
              </div>
              <ul className="flt-list cust-scroll" id="location-lists">
                <li>
                  <Link to="#">All India</Link>
                </li>
                <li>
                  <Link to="#">Maharashtra</Link>
                </li>
                <li>
                  <Link to="#">Karnataka</Link>
                </li>
                <li>
                  <Link to="#">Tamil Nadu</Link>
                </li>
                <li>
                  <Link to="#">Gujarat</Link>
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
                      src="/assets/sareep.jpeg"
                      width={55}
                      height={55}
                      alt="Paithani Sarees"
                    />
                  </figure>
                  <p className="title">Paithani Sarees</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/saree2sil.jpeg"
                      width={55}
                      height={55}
                      alt="Silk Sarees"
                    />
                  </figure>
                  <p className="title">Silk Sarees</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/saree14.jpeg"
                      width={55}
                      height={55}
                      alt="Traditional Wear"
                    />
                  </figure>
                  <p className="title">Traditional Wear</p>
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

export default Sarees;
