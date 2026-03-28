import React from "react";
import { Helmet } from "react-helmet";
import "./commn.css";

const Fashion = () => {
  const products = [
    {
      title: "Beachwear",
      imageSrc: "/assets/app1.jpg",
      links: [
        { name: "Swimsuits", url: "/undergarment-seller" },
        { name: "Cover-ups", url: "/undergarment-seller" },
        { name: "Boardshorts", url: "/undergarment-seller" },
        { name: "Beach Dresses", url: "/undergarment-seller" },
        { name: "View More", url: "/undergarment-seller" },
      ],
    },
    {
      title: "Women's Clothing",
      imageSrc: "/assets/app2.jpg",
      links: [
        { name: "Dresses", url: "/clothes" },
        { name: "Skirts", url: "/clothes" },
        { name: "Blouses", url: "/clothes" },
        { name: "Jumpsuits", url: "/clothes" },
        { name: "View More", url: "/clothes" },
      ],
    },

    {
      title: "Embroidered Apparel & Garments",
      imageSrc: "/assets/app4.jpg",
      links: [
        { name: "Embroidered Jackets", url: "leatherproducts" },
        { name: "Embroidered Skirts", url: "clothes" },
        { name: "Embroidered Blouses", url: "clothes" },
        { name: "Embroidered Shawls", url: "clothes" },
        { name: "View More", url: "" },
      ],
    },
    {
      title: "Fashion Garments",
      imageSrc: "/assets/app5.webp",
      links: [
        { name: "Evening Gowns", url: "#" },
        { name: "Cocktail Dresses", url: "#" },
        { name: "Blazers", url: "#" },
        { name: "Jumpsuits", url: "#" },
        { name: "View More", url: "#" },
      ],
    },

    {
      title: "Industrial Clothing & Work Wear",
      imageSrc: "/assets/app9.jpg",
      links: [
        { name: "Coveralls", url: "#" },
        { name: "High-Visibility Vests", url: "#" },
        { name: "Work Boots", url: "#" },
        { name: "Hard Hats", url: "#" },
        { name: "View More", url: "#" },
      ],
    },
    {
      title: "Infant & Baby Clothing",
      imageSrc: "/assets/app8.jpg",
      links: [
        { name: "Baby Onesies", url: "#" },
        { name: "Baby T-Shirts", url: "#" },
        { name: "Baby Leggings", url: "#" },
        { name: "Baby Dresses", url: "#" },
        { name: "View More", url: "#" },
      ],
    },
    {
      title: "Kids Clothing & Dresses",
      imageSrc: "/assets/app10.jpg",
      links: [
        { name: "Kids T-Shirts", url: "#" },
        { name: "Kids Jeans", url: "#" },
        { name: "Kids Dresses", url: "#" },
        { name: "Kids Jackets", url: "#" },
        { name: "View More", url: "#" },
      ],
    },
    {
      title: "Animal Clothing & Accessories",
      imageSrc: "/assets/app12.avif",
      links: [
        { name: "Pet Coats", url: "#" },
        { name: "Horse Blankets", url: "#" },
        { name: "Dog Sweaters", url: "#" },
        { name: "Cat Harnesses", url: "#" },
        { name: "View More", url: "#" },
      ],
    },
    {
      title: "Hand Gloves & Mittens",
      imageSrc: "/assets/app3.jpg",
      links: [
        { name: "Leather Gloves", url: "#" },
        { name: "Winter Mittens", url: "#" },
        { name: "Touchscreen Gloves", url: "#" },
        { name: "Driving Gloves", url: "#" },
        { name: "View More", url: "#" },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Best clothing and apparel suppliers in india | globalb2bmart
        </title>{" "}
        {/* Title Tag */}
        <meta
          name="description"
          content="Globalb2bmart is the best b2b portal in india and is ready to connect you with some big clothing and apparel suppliers in india"
        />{" "}
        {/* Meta Description */}
      </Helmet>

      <div className="pagetitle">
        <h1>
          Your Premier Destination for Apparel & Fashion Industry Connections &
          B2B Trade Hub
        </h1>
      </div>
      <div className="l1-section">
        <div className="container">
          <div className="row l1-box-wrap">
            {products.map((product, index) => (
              <div key={index} className="col-4">
                <div className="l1-box">
                  <h2 className="l1-heading">
                    <a href="#">{product.title}</a>
                  </h2>
                  <div className="d-flex">
                    <div>
                      <figure className="cp" onClick={() => {}}>
                        <img
                          src={product.imageSrc}
                          alt={product.title}
                          width={95}
                          height={95}
                          loading="lazy"
                        />
                      </figure>
                    </div>
                    <div>
                      <ul>
                        {product.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a href={link.url}>{link.name}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="content-page">
        <p style={{ padding: "15px" }}>
          Explore a wide range of apparel and fashion products including
          beachwear, women's clothing, hand gloves, fashion garments, and more.
          Connect with suppliers, manufacturers, and wholesalers worldwide.
        </p>
      </div>
    </>
  );
};

export default Fashion;
