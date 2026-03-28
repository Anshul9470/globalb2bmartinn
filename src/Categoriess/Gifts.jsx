import React from "react";
import "./commn.css";

const Gifts = () => {
  const products = [
    {
      title: "Wooden Handicrafts",
      imageSrc: "./assets/gi2.jpeg",
      links: [
        { name: "Wooden Storage Boxes", url: "/decorativeItems" },
        { name: "Wooden Miniatures", url: "/decorativeItems" },
        { name: "Wooden Sculptures", url: "/decorativeItems" },
        { name: "Decorative Wooden Artifacts", url: "/decorativeItems" },
      ],
    },
    {
      title: "Religious Statue",
      imageSrc: "./assets/gi3.jpeg",
      links: [
        { name: "Radha Krishna Sculpture", url: "/arts" },
        { name: "Buddha Figurine", url: "/arts" },
        { name: "Lord Shiva Statue", url: "/arts" },
        { name: "God Father Statue", url: "/arts" },
      ],
    },
    {
      title: "Metal Handicrafts",
      imageSrc: "./assets/gi4.jpeg",
      links: [
        { name: "Metallic Table Lamps", url: "/handicraftItems" },
        { name: "Metal Storage Boxes", url: "/handicraftItems" },
        { name: "Metallic Gifts", url: "/handicraftItems" },
        { name: "Metal Decorative Balls", url: "/handicraftItems" },
      ],
    },
    {
      title: "Acrylic Crafts",
      imageSrc: "./assets/gi1.jpeg",
      alt: "Acrylic Crafts",
      links: [
        { name: "Transparent Board", url: "/arts" },
        { name: "Acrylic Letters", url: "/arts" },
        { name: "Clear Acrylic Boxes", url: "/arts" },
        { name: "Acrylic Photo Frame", url: "/arts" },
      ],
    },
    {
      title: "Greeting Cards",
      imageSrc: "./assets/gi5.jpeg",
      links: [
        { name: "Anniversary Card", url: "//businesslicense" },
        { name: "Thank You Card", url: "//businesslicense" },
        { name: "Holiday Greeting Card", url: "//businesslicense" },
        { name: "Custom Greeting Cards", url: "//businesslicense" },
      ],
    },
    {
      title: "Gifts",
      imageSrc: "./assets/gi6.jpeg",
      links: [
        { name: "Gift Hampers", url: "/giftsstore" },
        { name: "Personalized Gifts", url: "/giftsstore" },
        { name: "Gift Vouchers", url: "/giftsstore" },
        { name: "Luxury Gifts", url: "/giftsstore" },
      ],
    },
    {
      title: "Clocks",
      imageSrc: "./assets/gi7.jpeg",
      links: [
        { name: "Digital Clock", url: "#" },
        { name: "Desk Clocks", url: "#" },
        { name: "Grandfather Clocks", url: "#" },
        { name: "Mantel Clocks", url: "#" },
      ],
    },
    {
      title: "Candles Crafts",
      imageSrc: "./assets/gi8.jpeg",
      links: [
        { name: "Tealight Candles", url: "/candledealers" },
        { name: "Scented Candles", url: "/candledealers" },
        { name: "Decorative Candles", url: "/candledealers" },
        { name: "Taper Candles", url: "/candledealers" },
      ],
    },
    {
      title: "Bead Crafts",
      imageSrc: "./assets/gi9.jpeg",
      links: [
        { name: "Glass Beads", url: "#" },
        { name: "Seed Beads", url: "#" },
        { name: "Crystal Beads", url: "#" },
        { name: "Wooden Beads", url: "#" },
      ],
    },
    {
      title: "Antiques & Collectibles",
      imageSrc: "./assets/gi10.jpeg",
      links: [
        {
          name: "Vintage Watches",
          url: "/https://www.globalb2bmart.com/best-furniture-suppliers-in-india",
        },
        {
          name: "Antique Furniture",
          url: "/https://www.globalb2bmart.com/best-furniture-suppliers-in-india",
        },
        {
          name: "Rare Stamps",
          url: "/https://www.globalb2bmart.com/best-furniture-suppliers-in-india",
        },
        {
          name: "Old Paintings",
          url: "/https://www.globalb2bmart.com/best-furniture-suppliers-in-india",
        },
      ],
    },
    {
      title: "Balloons",
      imageSrc: "./assets/gi11.jpeg",
      links: [
        { name: "Birthday Balloons", url: "#" },
        { name: "Helium Balloons", url: "#" },
        { name: "Foil Balloons", url: "#" },
        { name: "Water Balloons", url: "#" },
      ],
    },
    {
      title: "Bone, Horn & Shell Crafts",
      imageSrc: "./assets/gi12.jpeg",
      links: [
        { name: "Bone Jewelry", url: "/jewellery-seller" },
        { name: "Horn Handicrafts", url: "/decorativeItems" },
        { name: "Shell Decorations", url: "/decorativeItems" },
        { name: "Horn Buttons", url: "/decorativeItems" },
      ],
    },
  ];

  return (
    <>
      <div className="pagetitle">
        <h1>Gifts & Crafts Trade Directory & Networking Platform</h1>
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
                      <link rel="preload" as="image" href="#" />
                      <figure className="cp" onclick="#">
                        <img
                          src={product.imageSrc}
                          alt={product.alt}
                          width={95}
                          height={95}
                          loading="lazy"
                        />
                      </figure>
                    </div>
                    <div>
                      <ul>
                        {product.links.map((link, index) => (
                          <li key={index}>
                            <a href={link.url}>{link.name}</a>
                          </li>
                        ))}
                        <li>
                          <a href="#">View More</a>
                        </li>
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
          GlobalB2BMart is the leading Agriculture B2B Marketplace and
          Agriculture Business Directory, offering comprehensive business
          listings of Agriculture Suppliers, Manufacturers, Exporters,
          Wholesalers, and Traders worldwide. Our extensive and verified
          database includes detailed information about Agriculture Companies, a
          diverse catalog of Agriculture Products, and up-to-date Agriculture
          Price Lists and Quotations.
        </p>
      </div>
    </>
  );
};

export default Gifts;
