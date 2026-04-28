import React from "react";
import "./commn.css";

const HomeSupplies = () => {
  const products = [
    {
      title: "Artificial & Decorative Candles",
      imageSrc: "/assets/hom1.jpg",
      links: [
        { name: "Candle", url: "/candledealer" },
        { name: "Decorative Candles", url: "/candledealer" },
        { name: "Wax Candles", url: "/candledealer" },
        { name: "Votive Candle", url: "/candledealer" },
        { name: "View More", url: "/candledealer" },
      ],
    },
    {
      title: "Bags",
      imageSrc: "/assets/hom2.webp",
      links: [
        {
          name: "Woven Bags",
          url: "/https://www.globalb2bmart.com/bags-and-belt-supplier-in-india",
        },
        {
          name: "Shopping Bags",
          url: "/https://www.globalb2bmart.com/bags-and-belt-supplier-in-india",
        },
        {
          name: "Ladies Bags",
          url: "/https://www.globalb2bmart.com/bags-and-belt-supplier-in-india",
        },
        {
          name: "Cotton Bags",
          url: "/https://www.globalb2bmart.com/bags-and-belt-supplier-in-india",
        },
        {
          name: "View More",
          url: "/https://www.globalb2bmart.com/bags-and-belt-supplier-in-india",
        },
      ],
    },
    {
      title: "Bar Accessories",
      imageSrc: "/assets/hom3.jpg",
      links: [
        { name: "Wine Coolers", url: "/bathwaredealers" },
        { name: "Beer Mug", url: "#" },
        { name: "Wine Holder", url: "/bathwaredealers" },
        { name: "Drinking Horn", url: "/bathwaredealers" },
        { name: "View More", url: "/bathwaredealers" },
      ],
    },
    {
      title: "Buckets, Mugs & Storage Bins",
      imageSrc: "/assets/hom4.webp",
      links: [
        { name: "Bucket", url: "/bathwaredealers" },
        { name: "Dustbins", url: "/bathwaredealers" },
        { name: "Plastic Basket", url: "/bathwaredealers" },
        { name: "Plastic Bins", url: "/bathwaredealers" },
        { name: "View More", url: "#" },
      ],
    },
    {
      title: "Candle Stands & Candelabra",
      imageSrc: "/assets/hom5.avif",
      links: [
        { name: "Candle Holder", url: "/candledealers" },
        { name: "Brass Stand", url: "/candledealers" },
        { name: "Candle Pillars", url: "/candledealers" },
        { name: "View More", url: "/candledealers" },
      ],
    },
    {
      title: "Chandeliers & Wall Sconces",
      imageSrc: "/assets/hom6.jpg",
      links: [
        { name: "Led Lantern", url: "#" },
        { name: "Hanging Lamps", url: "#" },
        { name: "Ceiling Lamps", url: "#" },
        { name: "Pendant Lamps", url: "#" },
        { name: "View More", url: "#" },
      ],
    },
    {
      title: "Outdoor Furniture",
      imageSrc: "/assets/hom7.jpg",
      links: [
        {
          name: "Patio Sets",
          url: "/https://www.globalb2bmart.com/best-furniture-suppliers-in-india",
        },
        {
          name: "Hammocks",
          url: "/https://www.globalb2bmart.com/best-furniture-suppliers-in-india",
        },
        {
          name: "Outdoor Chairs",
          url: "/https://www.globalb2bmart.com/best-furniture-suppliers-in-india",
        },
        { name: "Fire Pits", url: "#" },
        { name: "View More", url: "#" },
      ],
    },
    {
      title: "Home Office",
      imageSrc: "/assets/hom8.jpg",
      links: [
        {
          name: "Desks",
          url: "/https://www.globalb2bmart.com/best-furniture-suppliers-in-india",
        },
        {
          name: "Office Chairs",
          url: "/https://www.globalb2bmart.com/best-furniture-suppliers-in-india",
        },
        {
          name: "Bookshelves",
          url: "/https://www.globalb2bmart.com/best-furniture-suppliers-in-india",
        },
        {
          name: "Desk Lamps",
          url: "/https://www.globalb2bmart.com/best-furniture-suppliers-in-india",
        },
        { name: "View More", url: "#" },
      ],
    },
    {
      title: "Dining Room",
      imageSrc: "/assets/hom9.jpeg",
      links: [
        {
          name: "Dining Tables",
          url: "/https://www.globalb2bmart.com/best-furniture-suppliers-in-india",
        },
        {
          name: "Dining Chairs",
          url: "/https://www.globalb2bmart.com/best-furniture-suppliers-in-india",
        },
        {
          name: "Tableware",
          url: "/https://www.globalb2bmart.com/best-furniture-suppliers-in-india",
        },
        {
          name: "Dining Sets",
          url: "/https://www.globalb2bmart.com/utensils-seller",
        },
        { name: "View More", url: "#" },
      ],
    },
    {
      title: "Storage Solutions",
      imageSrc: "/assets/hom10.webp",
      links: [
        { name: "Closet Organizers", url: "//packingclips" },
        { name: "Storage Bins", url: "//packingclips" },
        { name: "Shelving Units", url: "//packingclips" },
        { name: "Cabinets", url: "/packingclips" },
        { name: "View More", url: "/packingclips" },
      ],
    },
  ];

  return (
    <>
      <div className="pagetitle">
        <h1>Home Supplies Trade Directory & Networking Platform</h1>
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
          Discover a diverse range of home supplies including artificial
          candles, bags, bar accessories, and more. Connect with suppliers,
          manufacturers, and wholesalers globally.
        </p>
      </div>
    </>
  );
};

export default HomeSupplies;
