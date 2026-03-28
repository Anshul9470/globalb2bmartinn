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
  },
  {
    _id: "gbros-tirupur",
    name: "Gopal K",
    email: "gbrostirupur@gmail.com",
    password: "Gbros@2010",
    mobileNumber: "9443144461",
    companyName: "GBROS",
    statename: "Tamil Nadu",
    cityname: "Tirupur",
    productOrService: "Apparels",
    imgSrc: "/assets/gbgarment1.jpg",
    mainProducts: "Apparels",
    altText: "GBROS - Apparels",
    years: "1 YRS",
    location: "Tirupur, Tamil Nadu",
    tooltipText: "GBROS - Apparels, Tirupur",
    rating: "4.6",
    ratingPercent: "93%",
    ratingsCount: "180",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "mc-industry-shillong",
    name: "Mandaker Kharkongor",
    email: "abc@gmail.com",
    password: "mand@123",
    mobileNumber: "8415031408",
    companyName: "MC Industry",
    statename: "Shillong",
    cityname: "Meghalaya",
    productOrService: "Scottish costumes",
    imgSrc: "/assets/costume1.jpg",
    mainProducts: "Scottish costumes",
    altText: "MC Industry - Shillong",
    years: "1 YRS",
    location: "Shillong, Meghalaya",
    tooltipText: "MC Industry, Shillong",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "95",
    responseRate: "88%",
    whatsappConfirmed: true,
  },

  {
    name: "Mr. Sarwan",
    email: "sarwan@gmail.com",
    password: "sarwan@123",
    mobileNumber: "8820154190",
    companyName: "Sarik Garments",
    productOrService: "Kids Garments",
    imgSrc: "/assets/kids.jpg", // Provide the correct image path
    altText: "Kids Garments - Sarik Garments",
    mainProducts: "Children's Clothing, Babywear, Kids Accessories",
    years: "1 YRS",
    location: "Nagpur, India",
    tooltipText: "789 Kids Garments Lane, Industrial Park, Nagpur, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "88%",
  },
  {
    _id: "prateek-tyagi-talhata-ritika-enterprise",
    name: "Prateek Tyagi Talhata",
    email: "tyagiprateek9917@gmail.com",
    password: "Prateek9917!",
    mobileNumber: "9917580770",
    companyName: "Ritika Enterprise",
    statename: "Uttar Pradesh",
    cityname: "Talhata",
    productOrService: "T-Shirts, Shirts, All Kinds of Garments Manufacturing",
    imgSrc: "/assets/t-shirt10.jpg",
    mainProducts: "Garments Manufacturing",
    altText: "Ritika Enterprise - Garments Manufacturing in Talhata",
    years: "1 YRS",
    location: "Talhata, Uttar Pradesh",
    tooltipText:
      "Ritika Enterprise - T-Shirts, Shirts, and Garments Manufacturer in Talhata",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "320",
    responseRate: "93%",
    whatsappConfirmed: true,
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
    _id: "667426da14fe92087aaec7aa",
    name: "kanhaikumar",
    email: "kanha@gmail.com",
    mobileNumber: "7856916678",
    companyName: "Kanahai Garments",
    productOrService: "garments",
    imgSrc: "/assets/grs.jpeg", // You need to provide the correct image path
    mainProducts: "Men's Wear, Women's Wear, Kids' Wear",
    altText: "Garments - home",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "456 Fashion Street, Andheri, Mumbai, India",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "150",
    responseRate: "93%",
  },
  {
    name: "Mr. Mohit",
    email: "MOHIT@GMAIL.COM",
    password: "mohit@123",
    mobileNumber: "7447403552",
    companyName: "Swan Textiles",
    productOrService: "Hosiery Garments",
    imgSrc: "/assets/undergr.jpg", // Provide the correct image path
    altText: "Hosiery Garments - Swan Textiles",
    mainProducts: "Underwear, Socks, Tights",
    years: "1 YRS",
    location: "Nagpur, India",
    tooltipText: "789 Hosiery Lane, Industrial Park, Nagpur, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "88%",
  },
  {
    name: "Rodinliana",
    email: "Rodinliana@gmail.com",
    mobileNumber: "8787521346",
    companyName: "Vakul",
    productOrService: "T-shirts Manufacture",
    imgSrc: "/assets/tshirt1.jpeg",
    altText: "T-shirts Manufacture - Vakul",
    mainProducts: "T-shirts, Polo Shirts, Hoodies, Casual Wear",
    years: "1 YRS",
    location: "Bengaluru, India",
    tooltipText: "456 Apparel Avenue, Fashion District, Bengaluru, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "350",
    responseRate: "89%",
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
    name: "Vivek Jitenderbhai Jivani",
    email: "viviek@gmail.com",
    mobileNumber: "9313706005",
    companyName: "JB Overseas",
    productOrService: "Designer Tshirts",
    imgSrc: "/assets/gr8.jpeg",
    altText: "Designer Tshirts - JB Overseas",
    mainProducts: "Designer Tshirts, Casual Wear, Polo Shirts",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "123 Fashion Street, Trend Hub, Mumbai, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "450",
    responseRate: "92%",
  },

  {
    name: "Naman",
    email: "naman1234@gmail.com",
    mobileNumber: "9772222781",
    companyName: "The White Labeling",
    productOrService: "Shirt Manufacturers",
    imgSrc: "/assets/formal.jpg",
    mainProducts: "Formal shirts, Casual shirts, Designer shirts, etc.",
    altText: "Shirt Manufacturers - The White Labeling",
    years: "1 YRS",
    location: "Mumbai, Maharashtra, India",
    tooltipText: "456, Bandra West, Mumbai - 400050, Maharashtra, India",
    rating: "4.9",
    ratingPercent: "98%",
    ratingsCount: "250",
    responseRate: "99%",
  },
  {
    name: "Kapil",
    email: "rayeekapil@gmail.com",
    password: "KapilKapil",
    mobileNumber: "7396526000",
    companyName: "Noble Fashion",
    productOrService: "Men Garments",
    imgSrc: "/assets/gr6.jpg", // Provide the correct image path
    altText: "Men Garments - Noble Fashion",
    mainProducts: "Men's Clothing, Fashion Apparel",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "789 Fashion Lane, Industrial Park, Delhi, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "85",
    responseRate: "88%",
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
    name: "Mr. Mohit",
    email: "mohittomar717@gmail.com",
    mobileNumber: "9045674311",
    companyName: "ADHRIT",
    productOrService: "Saree and Mens Wear",
    imgSrc: "/assets/saree3.jpg",
    altText: "Saree and Mens Wear - ADHRIT",
    mainProducts: "Sarees, Kurtas, Sherwanis, Indo-Western Wear",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "456 Fashion Lane, Trendy City, Delhi, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "300",
    responseRate: "87%",
  },

  {
    name: "ujjwal pandey",
    email: "ujjwalpandey123@gmail.com",
    mobileNumber: "6206033473",
    companyName: "pandey garment",
    productOrService: "Garment Manufacturers",
    imgSrc: "/assets/gr3.jpeg",
    mainProducts: "Formal garments, Casual garments, Designer garments, etc.",
    altText: "Garment Manufacturers - Pandey Garment",
    years: "1 YRS",
    location: "Mumbai, Maharashtra, India",
    tooltipText: "456, Bandra West, Mumbai - 400050, Maharashtra, India",
    rating: "4.9",
    ratingPercent: "98%",
    ratingsCount: "250",
    responseRate: "99%",
  },
  {
    name: "Tamaal",
    email: "Qworld@gmail.com",
    mobileNumber: "7890301001",
    companyName: "Qworld - Graphic Clothing",
    productOrService: "Clothing Manufacturers",
    imgSrc: "/assets/gr1.jpeg",
    mainProducts: "Graphic T-shirts, Hoodies, Sweatshirts, etc.",
    altText: "Clothing Manufacturers - Qworld - Graphic Clothing",
    years: "1 YRS",
    location: "Mumbai, Maharashtra, India",
    tooltipText: "456, Bandra West, Mumbai - 400050, Maharashtra, India",
    rating: "4.9",
    ratingPercent: "98%",
    ratingsCount: "250",
    responseRate: "99%",
  },
  {
    name: "sk sofie",
    email: "sksofie@gmail.com",
    mobileNumber: "9007641115",
    companyName: "NEW MAHALAXMI TEXTILE",
    productOrService: "Clothing Manufacturers",
    imgSrc: "/assets/gr2.jpeg",
    mainProducts: "Sarees, Salwar Kameez, Dress Materials, etc.",
    altText: "Clothing Manufacturers - NEW MAHALAXMI TEXTILE",
    years: "1 YRS",
    location: "Mumbai, Maharashtra, India",
    tooltipText: "456, Bandra West, Mumbai - 400050, Maharashtra, India",
    rating: "4.9",
    ratingPercent: "98%",
    ratingsCount: "250",
    responseRate: "99%",
  },
  {
    _id: "b012345678901abcdef0123", // Random unique ID
    name: "Saim Rahman",
    email: "Saimrahman@gmail.com",
    password: "Saim Rahman", // Including the password as specified
    mobileNumber: "8420429303",
    companyName: "Rahman And Brothers Garments",
    productOrService: "Garments",
    imgSrc: "/assets/clo.jpeg", // Example image path
    mainProducts: "Men's Wear, Women's Wear, Kids' Wear, Ethnic Wear",
    altText: "Garments - Rahman And Brothers Garments",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "456 Fashion Avenue, Mumbai, India",
    rating: "4.3",
    ratingPercent: "88%",
    ratingsCount: "55",
    responseRate: "90%",
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
    _id: "s345678901abcdef234568", // Random unique ID
    name: "Kamal Sing",
    email: "kamalsing@gmail.com",
    password: "kamal sing",
    mobileNumber: "8209613079",
    companyName: "Sumer Cloth Company",
    productOrService: "Ladies Paticot",
    imgSrc: "/assets/patticoat1.jpeg", // Example image path
    mainProducts: "Paticots, Women's Clothing",
    altText: "Ladies Paticot - Sumer Cloth Company",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Shop 30, Textile Market, Delhi, India",
    rating: "4.7",
    ratingPercent: "93%",
    ratingsCount: "52",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "s345678901abcdef234569", // Random unique ID
    name: "Nilesh Aggarwal",
    email: "nileshaggarwal@gmail.com",
    password: "nilesh@123",
    mobileNumber: "9898176440",
    companyName: "Umang & Badi Factory Textile",
    productOrService: "Jeans Manufacturing",
    imgSrc: "/assets/jeans1.jpeg", // Example image path
    mainProducts: "Jeans, Denim Fabrics",
    altText: "Jeans Manufacturing - Umang & Badi Factory Textile",
    years: "1 YRS",
    location: "Mumbai, India",
    tooltipText: "Factory 12, Textile Industrial Area, Mumbai, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "78",
    responseRate: "88%",
    whatsappConfirmed: true,
  },
  {
    _id: "b1234567890cdef012347",
    name: "AJIT",
    email: "ajit1234@gmail.com",
    password: "ajit@1234",
    mobileNumber: "6377203362",
    companyName: "Yash Gallery",
    productOrService: "Garments",
    imgSrc: "/assets/garment1.jpeg",
    mainProducts: "Shirts, T-shirts, Casual Wear",
    altText: "Garments - Yash Gallery",
    years: "1 YRS",
    location: "Jaipur, India",
    tooltipText: "Sector 5, Textile Market, Jaipur, India",
    rating: "4.7",
    ratingPercent: "94%",
    ratingsCount: "60",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "c1234567890def012347",
    name: "Shoyab Malik",
    email: "Shoyab1234@gmail.com",
    password: "Shoyab@1234",
    mobileNumber: "9557424234",
    companyName: "Ghalib Garments",
    productOrService: "Garments",
    imgSrc: "/assets/garment2.jpeg",
    mainProducts: "Kurta, Pajama, Ethnic Wear",
    altText: "Garments - Ghalib Garments",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "Sector 3, Garment Hub, Delhi, India",
    rating: "4.5",
    ratingPercent: "91%",
    ratingsCount: "45",
    responseRate: "87%",
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
    _id: "g3456789012h345678",
    name: "Jagdesh",
    email: "jagdesh123@gmail.com",
    password: "jagdesh1234",
    mobileNumber: "6355907497",
    companyName: "Artificial Turf Shandong Lvchuang",
    productOrService: "Garment",
    imgSrc: "/assets/dress1.jpeg",
    mainProducts: "Sportswear, Casual Wear, Formal Wear",
    altText: "Garments - Artificial Turf Shandong Lvchuang",
    years: "1 YRS",
    location: "Shandong, China",
    tooltipText: "Economic Development Zone, Shandong, China",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "65",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "h5678901234i567890",
    name: "Dharmender",
    email: "dharmender123@gmail.com",
    password: "dharmender123",
    mobileNumber: "9999495859",
    companyName: "Rohilla Garments",
    productOrService: "Garments",
    imgSrc: "/assets/dress2.jpeg",
    mainProducts: "Men's Clothing, Women's Clothing, Kids' Wear",
    altText: "Garments - Rohilla Garments",
    years: "1 YRS",
    location: "New Delhi, India",
    tooltipText: "Sector 12, Industrial Area, New Delhi, India",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "72",
    responseRate: "87%",
    whatsappConfirmed: true,
  },
  {
    _id: "j6789012345k678901",
    name: "Surabh",
    email: "surabh123@gmail.com",
    password: "surabh1234",
    mobileNumber: "8178949565",
    companyName: "Shri Balaji Enterprisses",
    productOrService: "Garment",
    imgSrc: "/assets/indiandress1.jpeg",
    mainProducts: "Men's Wear, Women's Wear, Kids' Garments",
    altText: "Garments - Shri Balaji Enterprisses",
    years: "1 YRS",
    location: "Jaipur, Rajasthan, India",
    tooltipText: "Sector 8, Industrial Park, Jaipur, Rajasthan, India",
    rating: "4.8",
    ratingPercent: "95%",
    ratingsCount: "89",
    responseRate: "90%",
    whatsappConfirmed: true,
  },
  {
    _id: "a1234567890wxyz5689",
    name: "Kavery Creation",
    email: "kaveri@gmail.com",
    password: "83750000867",
    mobileNumber: "9785382009",
    companyName: "Kavery Creation",
    productOrService: "Dupatta",
    imgSrc: "/assets/duptta.jpeg", // Placeholder for image path
    mainProducts: "Dupatta, Scarves, Stoles",
    altText: "Dupatta - Kavery Creation",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "Kavery Creation, India",
    rating: "4.5", // Placeholder for rating
    ratingPercent: "90%", // Placeholder for rating percentage
    ratingsCount: "50", // Placeholder for ratings count
    responseRate: "85%", // Placeholder for response rate
    whatsappConfirmed: false,
  },
  {
    _id: "a1234567890abc5698",
    name: "Rustom",
    email: "roopnikhar@gmail.com",
    password: "8375000867",
    mobileNumber: "8000557617",
    companyName: "Roop Nikhar Fashion Pvt Ltd",
    productOrService: "Lehenga Saree",
    imgSrc: "/assets/garment3.jpeg", // Placeholder for image path
    mainProducts: "Lehenga, Sarees, Bridal Wear",
    altText: "Roop Nikhar Fashion - Lehenga & Saree Manufacturer",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "Roop Nikhar Fashion, India",
    rating: "4.7", // Placeholder for rating
    ratingPercent: "94%", // Placeholder for rating percentage
    ratingsCount: "150", // Placeholder for ratings count
    responseRate: "90%", // Placeholder for response rate
    whatsappConfirmed: true,
  },

  {
    _id: "f3456789012def4567",
    name: "Manish",
    email: "abc@gmail.com",
    password: "Manish@123",
    mobileNumber: "9422550535",
    companyName: "Manish Trading Co.",
    productOrService: "Ladies Undergarments",
    imgSrc: "/assets/under1.jpeg", // Placeholder for image path
    mainProducts: "Bras, Panties, Lingerie",
    altText: "Manish Trading Co. - Ladies Undergarments",
    years: "1 YRS", // Placeholder for years of experience
    location: "Mumbai, Maharashtra, India", // Placeholder for location
    tooltipText: "Manish Trading Co., Mumbai",
    rating: "4.6", // Placeholder for rating
    ratingPercent: "92%", // Placeholder for rating percentage
    ratingsCount: "130", // Placeholder for ratings count
    responseRate: "87%", // Placeholder for response rate
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
    _id: "i3456789012abc7890",
    name: "Md Irfan Ansari",
    email: "ansari123@gmail.com",
    password: "ansari1234",
    mobileNumber: "7905636511",
    companyName: "A M Sons",
    productOrService: "Kurti",
    imgSrc: "/assets/kurti1.jpeg", // Placeholder for image path
    mainProducts: "Designer Kurtis, Cotton Kurtis, Embroidered Kurtis",
    altText: "A M Sons - Kurti Collection",
    years: "1 YRS", // Placeholder for years of experience
    location: "Jaipur, Rajasthan, India", // Placeholder for location
    tooltipText: "A M Sons, Jaipur",
    rating: "4.6", // Placeholder for rating
    ratingPercent: "92%", // Placeholder for rating percentage
    ratingsCount: "78", // Placeholder for ratings count
    responseRate: "87%", // Placeholder for response rate
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
    _id: "k1234567890def5678",
    name: "Gagan",
    email: "gagan@gmail.com",
    password: "gaganclothes",
    mobileNumber: "9779955972",
    companyName: "Dadu Dayal Hosiery",
    productOrService: "Hosiery",
    imgSrc: "/assets/hoisery1.jpeg", // Placeholder for image path
    mainProducts: "Hosiery, Socks, Stockings",
    altText: "Dadu Dayal Hosiery - Hosiery Products",
    years: "1 YRS", // Placeholder for years of experience
    location: "India", // Placeholder for location
    tooltipText: "Dadu Dayal Hosiery, India",
    rating: "4.0", // Placeholder for rating
    ratingPercent: "80%", // Placeholder for rating percentage
    ratingsCount: "40", // Placeholder for ratings count
    responseRate: "75%", // Placeholder for response rate
    whatsappConfirmed: true,
  },
  {
    _id: "k0987654321abc1234",
    name: "Lavish",
    email: "Lavish123@gmail.com",
    password: "Lavish1234",
    mobileNumber: "8955766257",
    companyName: "Lavish Ganwani",
    productOrService: "Saree",
    imgSrc: "/assets/saree14.jpeg",
    mainProducts: "Sarees, Ethnic Wear, Silk Sarees",
    altText: "Lavish Ganwani - Saree Collection",
    years: "1 YRS",
    location: "India",
    tooltipText: "Lavish Ganwani, India",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "55",
    responseRate: "80%",
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
    _id: "b1c2d3e4f5g6h7i8j9k0l1m2", // Random unique ID
    name: "Pulkit Khandelwal",
    email: "shrinathdistributor9@gmail.com",
    mobileNumber: "7849811870",
    companyName: "Shri Nath Distributors",
    productOrService: "Garments",
    imgSrc: "/assets/garment4.jpeg", // Example image path
    mainProducts:
      "Men's Wear, Women's Wear, Kids' Clothing, Fashion Accessories",
    altText: "Garments - Shri Nath Distributors",
    years: "1 YRS",
    location: "Delhi, India",
    tooltipText: "23 Garment Lane, Delhi, India",
    rating: "4.3",
    ratingPercent: "88%",
    ratingsCount: "60",
    responseRate: "91%",
    whatsappConfirmed: true,
  },
  {
    _id: "b1234567890xyz5681",
    name: "My Style Look",
    email: "rb7610992@gmail.com",
    password: "8058632003",
    mobileNumber: "8058632003",
    companyName: "My Style Look",
    productOrService: "Kurtis",
    imgSrc: "/assets/kurti2.jpeg",
    mainProducts: "Designer Kurtis, Ethnic Wear, Women's Apparel",
    altText: "My Style Look - Kurtis",
    years: "1 YRS",
    location: "Jaipur, Rajasthan, India",
    tooltipText: "My Style Look, Jaipur",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "85",
    responseRate: "87%",
    whatsappConfirmed: true,
  },
  {
    _id: "66e03a2aaefc906f30ab3df5",
    name: "Sachin",
    email: "sachin123@gmail.com",
    password: "sachin1234",
    mobileNumber: "9983151386",
    companyName: "Zoya Garments Jaipur",
    productOrService: "Garment",
    imgSrc: "/assets/garment5.jpeg",
    mainProducts: "Garments, Apparel, Textiles",
    altText: "Zoya Garments Jaipur - Garments",
    years: "1 YRS",
    location: "Jaipur, Gujarat, India",
    tooltipText: "Zoya Garments Jaipur, Jaipur, Gujarat",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "75",
    responseRate: "88%",
    whatsappConfirmed: false,
  },
  {
    name: "Garvvit",
    email: "Garvvit@gmail.com",
    password: "12345678",
    mobileNumber: "8094655749",
    companyName: "DAMOZ",
    productOrService: "Garments",
    imgSrc: "/assets/gament1.jpg",
    mainProducts: "Garments, Clothing",
    altText: "DAMOZ - Garments",
    years: "1 YRS",
    location: "Jaipur, India",
    tooltipText: "DAMOZ, Jaipur",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "55",
    responseRate: "87%",
    whatsappConfirmed: true,
  },

  {
    name: "Silambarasan",
    email: "8610812075@gmail.com",
    password: "8610812075",
    mobileNumber: "8610812075",
    companyName: "Ik Enterprise",
    productOrService: "Clay Handicraft, Honey, Nuts",
    imgSrc: "/assets/garment7.jpg",
    mainProducts: "Clay Handicrafts, Honey, Nuts",
    altText: "Ik Enterprise - Clay Handicraft, Honey, Nuts",
    years: "1 YRS",
    location: "Tiruvallur, Tamil Nadu, India",
    tooltipText: "Ik Enterprise, Tamil Nadu",
    rating: "4.2",
    ratingPercent: "84%",
    ratingsCount: "60",
    responseRate: "90%",
    whatsappConfirmed: false,
  },
  {
    _id: "garments-industries-gujrat",
    name: "alok arya",
    email: "alok1234@gmail.com",
    password: "alok@1234",
    mobileNumber: "8946922964",
    companyName: "garments industries",
    productOrService: "garment",
    imgSrc: "/assets/garment6.jpg",
    mainProducts: "Garments",
    altText: "Garments Industries - Garment",
    years: "1 YRS",
    location: "Gujrat, Rajkot, India",
    tooltipText: "Garments Industries, Garment, Gujrat",
    rating: "4.2",
    ratingPercent: "85%",
    ratingsCount: "40",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    _id: "garment-enterprises-pune",
    name: "Umar Khan",
    email: "umar123@gmail.com",
    password: "umar1234",
    mobileNumber: "7905470034",
    companyName: "Garment Enterprises",
    productOrService: "Garments",
    imgSrc: "/assets/garment8.jpg", // Placeholder image path
    mainProducts: "Garments",
    altText: "Garment Enterprises - Garments",
    years: "1 YRS", // Random value
    location: "Pune, Mumbai, India",
    tooltipText: "Garment Enterprises, Garments, Pune",
    rating: "4.6", // Random value
    ratingPercent: "92%", // Random value
    ratingsCount: "25", // Random value
    responseRate: "85%", // Random value
    whatsappConfirmed: true,
  },
  {
    _id: "vmg-fashion-delhi",
    name: "Vijay",
    email: "abc@gmail.com",
    password: "vijay@123",
    mobileNumber: "9310704440",
    companyName: "VMG Fashion",
    productOrService: "Ladies Kurti",
    imgSrc: "/assets/vmg.jpg", // Placeholder image path
    mainProducts: "Ladies Kurti",
    altText: "VMG Fashion - Ladies Kurti",
    years: "1 YRS", // Random value
    location: "Delhi, Delhi, India",
    tooltipText: "VMG Fashion, Ladies Kurti, Delhi",
    rating: "4.7", // Random value
    ratingPercent: "93%", // Random value
    ratingsCount: "35", // Random value
    responseRate: "85%", // Random value
    whatsappConfirmed: true,
  },
  {
    _id: "pc-oswal-textile-pvt-ltd-rajasthan",
    name: "Ravi",
    email: "ravi@gmail.com",
    password: "12345678",
    mobileNumber: "9358592909",
    companyName: "Pc Oswal Textile Pvt Ltd",
    productOrService: "Garments",
    imgSrc: "/assets/pcgarment1.jpg",
    mainProducts: "Garments",
    altText: "Pc Oswal Textile Pvt Ltd - Garments",
    years: "1 YRS",
    location: "Rajasthan, India",
    tooltipText: "Pc Oswal Textile Pvt Ltd, Garments, Rajasthan",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "47",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "new-mahalaxmi-textile-kolkata",
    name: "Sk Sofie",
    email: "sksofie@gmail.com",
    password: "12345678",
    mobileNumber: "9007641115",
    companyName: "New Mahalaxmi Textile",
    productOrService: "Garments",
    imgSrc: "/assets/garment9.jpg",
    mainProducts: "Garments",
    altText: "New Mahalaxmi Textile - Garments",
    years: "1 YRS",
    location: "Kolkata, India",
    tooltipText: "New Mahalaxmi Textile, Garments, Kolkata",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "42",
    responseRate: "85%",
    whatsappConfirmed: true,
  },
  {
    _id: "gaurav-sharma-bahadrabad-haridwar",
    name: "Gaurav Sharma",
    email: "gauravsharma123@gmail.com",
    password: "gaurav@1234",
    mobileNumber: "9058716173",
    companyName: "Neel Kamal Traders",
    statename: "Haridwar",
    cityname: "Bahadrabad",
    productOrService: "Garment",
    imgSrc: "/assets/neelcloth.jpg",
    mainProducts: "Garments",
    altText: "Neel Kamal Traders - Bahadrabad",
    years: "1 YRS",
    location: "Bahadrabad, Haridwar",
    tooltipText: "Neel Kamal Traders, Bahadrabad",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "200",
    responseRate: "92%",
    whatsappConfirmed: true,
  },
  {
    _id: "himanshu-dwivedi-surat",
    name: "Himanshu Dwivedi",
    email: "HimanshuDwivedi@gmail.com",
    password: "12345678",
    mobileNumber: "7777979197",
    companyName: "Himanshu Dwivedi",
    statename: "",
    cityname: "Surat",
    productOrService: "Sherwani Garments Wholesale",
    imgSrc: "/assets/searwani-wholesalarer.jpg",
    mainProducts: "Sherwani Garments Wholesale",
    altText: "Himanshu Dwivedi - Surat",
    years: "1 YRS",
    location: "Surat",
    tooltipText: "Himanshu Dwivedi, Surat",
    rating: "4.6",
    ratingPercent: "92%",
    ratingsCount: "120",
    responseRate: "89%",
    whatsappConfirmed: false,
  },
  {
    _id: "ajay-upadhayay-surat-gujarat",
    name: "Ajay Upadhayay",
    email: "AjayUpadhayay123@gmail.com",
    password: "Ajay Upadhayay",
    mobileNumber: "8651646073",
    companyName: "SWEETYSTER (OPC) PRIVATE LIMITED",
    statename: "Gujarat",
    cityname: "Surat",
    productOrService: "Garment",
    imgSrc: "/assets/garmnt19.jpg",
    mainProducts: "Garment",
    altText: "SWEETYSTER (OPC) PRIVATE LIMITED - Surat",
    years: "1 YRS",
    location: "Surat, Gujarat",
    tooltipText: "SWEETYSTER (OPC) PRIVATE LIMITED, Surat",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "150",
    responseRate: "94%",
    whatsappConfirmed: true,
  },
  {
    _id: "bhura-ram-karnataka-bangalore",
    name: "Bhura Ram",
    email: "bhuraram123@gmail.com",
    password: "bhura ram",
    mobileNumber: "9901405623",
    companyName: "Bhagvathi Hi Fashion",
    statename: "Karnataka",
    cityname: "Bangalore",
    productOrService: "Shirt",
    imgSrc: "/assets/bhagwati-fashion.jpg",
    mainProducts: "Shirt",
    altText: "Bhagvathi Hi Fashion - Bangalore",
    years: "1 YRS",
    location: "Bangalore, Karnataka",
    tooltipText: "Bhagvathi Hi Fashion, Bangalore",
    rating: "4.2",
    ratingPercent: "88%",
    ratingsCount: "98",
    responseRate: "91%",
    whatsappConfirmed: true,
  },
  {
    _id: "motiurrahaman-kolkata",
    name: "Motiur Rahaman",
    email: "MotiurRahaman@gmail.com",
    password: "12345678",
    mobileNumber: "9330962226",
    companyName: "Motiur Rahaman",
    statename: "West Bengal",
    cityname: "Kolkata",
    productOrService: "Ladies Jeans",
    imgSrc: "/assets/ladies-jeans.jpg",
    mainProducts: "Ladies Jeans",
    altText: "Motiur Rahaman - Kolkata",
    years: "1 YRS",
    location: "Kolkata, West Bengal",
    tooltipText: "Motiur Rahaman, Kolkata",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "102",
    responseRate: "89%",
    whatsappConfirmed: true,
  },
  {
    name: "Glatus Belikanraj Nadar",
    email: "GlatusBelikanrajNadar123@gamil.com",
    password: "Glatus Belikanraj Nadar",
    mobileNumber: "9272100885",
    companyName: "GLASH CLOTHING",
    productOrService: "Garment",
    imgSrc: "/assets/garment10.jpeg",
    mainProducts: "Men's Wear, Women's Wear, Kids' Clothing",
    altText: "GLASH CLOTHING - Garments",
    years: "1 YRS",
    location: "Pune, Maharashtra, India",
    tooltipText: "GLASH CLOTHING, Pune",
    rating: "4.3",
    ratingPercent: "86%",
    ratingsCount: "70",
    responseRate: "83%",
    whatsappConfirmed: true,
  },
  {
    name: "Najeem",
    email: "Najeem123@gmail.com",
    password: "Najeem1234",
    mobileNumber: "7818870256",
    companyName: "NK PLUS",
    productOrService: "Garment",
    imgSrc: "/assets/garment-nkplus.jpg",
    mainProducts: "Men's Apparel, Women's Apparel, Kids' Clothing",
    altText: "NK PLUS - Garment",
    years: "1 YRS",
    location: "RK Puram, Delhi, India",
    tooltipText: "NK PLUS, RK Puram",
    rating: "4.4",
    ratingPercent: "88%",
    ratingsCount: "65",
    responseRate: "84%",
    whatsappConfirmed: true,
  },
  {
    _id: "lucifer-enterprises-dwarka",
    name: "Arpit Gupta",
    email: "ArpitGupta123@gamil.com",
    password: "Arpit Gupta",
    mobileNumber: "9368649215",
    companyName: "Lucifer Enterprises",
    statename: "Delhi",
    cityname: "Dwarka",
    productOrService: "Garment",
    imgSrc: "/assets/lucifer-garment.jpg",
    mainProducts: "Casual Wear, Formal Wear, Custom Garments",
    altText: "Lucifer Enterprises - Garment Manufacturer",
    years: "1 YRS",
    location: "Dwarka, Delhi, India",
    tooltipText: "Lucifer Enterprises - Quality Garments Manufacturer",
    rating: "4.5",
    ratingPercent: "90%",
    ratingsCount: "120",
    responseRate: "95%",
    whatsappConfirmed: false,
  },
];

const GarmentDealers = () => {
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
                  <Link to="#">Men's Wear</Link>
                </li>
                <li>
                  <Link to="#">Women's Wear</Link>
                </li>
                <li>
                  <Link to="#">Kids' Wear</Link>
                </li>
                <li>
                  <Link to="#">Ethnic Wear</Link>
                </li>
                <li>
                  <Link to="#">Formal Wear</Link>
                </li>
                <li>
                  <Link to="#">Casual Wear</Link>
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
                  <Link to="#">Delhi</Link>
                </li>
                <li>
                  <Link to="#">Tamil Nadu</Link>
                </li>
                <li>
                  <Link to="#">Uttar Pradesh</Link>
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
                      src="/assets/gr1.jpeg"
                      width={55}
                      height={55}
                      alt="Men's Wear"
                    />
                  </figure>
                  <p className="title">Men's Wear</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/gr2.jpeg"
                      width={55}
                      height={55}
                      alt="Women's Wear"
                    />
                  </figure>
                  <p className="title">Women's Wear</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/gr3.jpeg"
                      width={55}
                      height={55}
                      alt="Kids' Wear"
                    />
                  </figure>
                  <p className="title">Kids' Wear</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/gr5.jpeg"
                      width={55}
                      height={55}
                      alt="Ethnic Wear"
                    />
                  </figure>
                  <p className="title">Ethnic Wear</p>
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="#">
                <div className="horprd-box">
                  <figure>
                    <img
                      src="/assets/formal.jpg"
                      width={55}
                      height={55}
                      alt="Formal Wear"
                    />
                  </figure>
                  <p className="title">Formal Wear</p>
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

export default GarmentDealers;
