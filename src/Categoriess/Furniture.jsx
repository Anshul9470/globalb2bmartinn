import React from "react";
import "./commn.css";

const Furniture = () => {
  const products = [
    {
      title: "Living Room Furniture",
      imageSrc: "./assets/fu1.jpeg",
      links: [
        { name: "Sofas", url: "/best-furniture-suppliers-in-india" },
        { name: "Coffee Tables", url: "/best-furniture-suppliers-in-india" },
        { name: "TV Stands", url: "/best-furniture-suppliers-in-india" },
        { name: "Bookshelves", url: "/best-furniture-suppliers-in-india" },
        { name: "View More", url: "/best-furniture-suppliers-in-india" },
      ],
    },
    {
      title: "Office Furniture",
      imageSrc: "./assets/fu2.jpeg",
      links: [
        { name: "Office Desks", url: "/best-furniture-suppliers-in-india" },
        { name: "Office Chairs", url: "/best-furniture-suppliers-in-india" },
        {
          name: "Conference Tables",
          url: "/best-furniture-suppliers-in-india",
        },
        { name: "Filing Cabinets", url: "/best-furniture-suppliers-in-india" },
        { name: "View More", url: "/best-furniture-suppliers-in-india" },
      ],
    },
    {
      title: "Outdoor Furniture",
      imageSrc: "./assets/fu3.jpeg",
      links: [
        { name: "Patio Sets", url: "/best-furniture-suppliers-in-india" },
        { name: "Outdoor Benches", url: "/best-furniture-suppliers-in-india" },
        { name: "Hammocks", url: "/best-furniture-suppliers-in-india" },
        { name: "Garden Chairs", url: "/best-furniture-suppliers-in-india" },
        { name: "View More", url: "/best-furniture-suppliers-in-india" },
      ],
    },
    {
      title: "Kitchen Furniture",
      imageSrc: "./assets/fu4.jpeg",
      alt: "Kitchen Furniture",
      links: [
        { name: "Kitchen Islands", url: "/best-furniture-suppliers-in-india" },
        { name: "Bar Stools", url: "/best-furniture-suppliers-in-india" },
        { name: "Pantry Cabinets", url: "/best-furniture-suppliers-in-india" },
        { name: "Dining Tables", url: "/best-furniture-suppliers-in-india" },
        { name: "View More", url: "/best-furniture-suppliers-in-india" },
      ],
    },
    {
      title: "Dining Room Furniture",
      imageSrc: "./assets/fu5.jpeg",
      links: [
        { name: "Dining Tables", url: "/best-furniture-suppliers-in-india" },
        { name: "Dining Chairs", url: "/best-furniture-suppliers-in-india" },
        { name: "Buffets", url: "/best-furniture-suppliers-in-india" },
        { name: "Dining Sets", url: "/best-furniture-suppliers-in-india" },
        { name: "View More", url: "/best-furniture-suppliers-in-india" },
      ],
    },
    {
      title: "Home Office Furniture",
      imageSrc: "./assets/fu6.jpeg",
      links: [
        { name: "Computer Desks", url: "/best-furniture-suppliers-in-india" },
        { name: "Ergonomic Chairs", url: "/best-furniture-suppliers-in-india" },
        { name: "Bookcases", url: "/best-furniture-suppliers-in-india" },
        { name: "Desk Lamps", url: "/best-furniture-suppliers-in-india" },
        { name: "View More", url: "/best-furniture-suppliers-in-india" },
      ],
    },
    {
      title: "Home Theater Furniture",
      imageSrc: "./assets/fu7.jpeg",
      links: [
        {
          name: "Entertainment Centers",
          url: "/best-furniture-suppliers-in-india",
        },
        { name: "Media Storage", url: "/best-furniture-suppliers-in-india" },
        { name: "Recliners", url: "/best-furniture-suppliers-in-india" },
        { name: "Speaker Stands", url: "/best-furniture-suppliers-in-india" },
        { name: "View More", url: "/best-furniture-suppliers-in-india" },
      ],
    },
    {
      title: "Entryway Furniture",
      imageSrc: "./assets/fu8.jpeg",
      links: [
        { name: "Console Tables", url: "/best-furniture-suppliers-in-india" },
        { name: "Coat Racks", url: "/best-furniture-suppliers-in-india" },
        { name: "Shoe Storage", url: "/best-furniture-suppliers-in-india" },
        { name: "Entryway Benches", url: "/best-furniture-suppliers-in-india" },
        { name: "View More", url: "/best-furniture-suppliers-in-india" },
      ],
    },
    {
      title: "Nursery Furniture",
      imageSrc: "./assets/fu9.jpeg",
      links: [
        { name: "Cribs", url: "/best-furniture-suppliers-in-india" },
        { name: "Changing Tables", url: "/best-furniture-suppliers-in-india" },
        {
          name: "Nursery Rocking Chairs",
          url: "/best-furniture-suppliers-in-india",
        },
        { name: "Storage Baskets", url: "/best-furniture-suppliers-in-india" },
        { name: "View More", url: "/best-furniture-suppliers-in-india" },
      ],
    },
    {
      title: "Library Furniture",
      imageSrc: "./assets/fu10.jpeg",
      alt: "Library Furniture",
      links: [
        { name: "Bookshelves", url: "/best-furniture-suppliers-in-india" },
        { name: "Reading Chairs", url: "/best-furniture-suppliers-in-india" },
        { name: "Library Tables", url: "/best-furniture-suppliers-in-india" },
        { name: "Magazine Racks", url: "/best-furniture-suppliers-in-india" },
        { name: "View More", url: "/best-furniture-suppliers-in-india" },
      ],
    },
    {
      title: "Reception Furniture",
      imageSrc: "./assets/fu11.jpeg",
      links: [
        { name: "Reception Desks", url: "/best-furniture-suppliers-in-india" },
        {
          name: "Waiting Room Chairs",
          url: "/best-furniture-suppliers-in-india",
        },
        { name: "Coffee Tables", url: "/best-furniture-suppliers-in-india" },
        { name: "Guest Sofas", url: "/best-furniture-suppliers-in-india" },
        { name: "View More", url: "/best-furniture-suppliers-in-india" },
      ],
    },
    {
      title: "Garage Furniture",
      imageSrc: "./assets/fu12.jpeg",
      links: [
        { name: "Workbenches", url: "/best-furniture-suppliers-in-india" },
        { name: "Storage Cabinets", url: "/best-furniture-suppliers-in-india" },
        { name: "Tool Racks", url: "/best-furniture-suppliers-in-india" },
        { name: "Utility Shelves", url: "/best-furniture-suppliers-in-india" },
        { name: "View More", url: "/best-furniture-suppliers-in-india" },
      ],
    },
    {
      title: "Outdoor Furniture",
      imageSrc: "./assets/fu13.jpeg",
      links: [
        { name: "Patio Sets", url: "/best-furniture-suppliers-in-india" },
        { name: "Outdoor Benches", url: "/best-furniture-suppliers-in-india" },
        { name: "Hammocks", url: "/best-furniture-suppliers-in-india" },
        { name: "Garden Tables", url: "/best-furniture-suppliers-in-india" },
        { name: "View More", url: "/best-furniture-suppliers-in-india" },
      ],
    },
    {
      title: "Office Furniture",
      imageSrc: "./assets/fu14.jpeg",
      links: [
        { name: "Office Desks", url: "/best-furniture-suppliers-in-india" },
        { name: "Ergonomic Chairs", url: "/best-furniture-suppliers-in-india" },
        { name: "Filing Cabinets", url: "/best-furniture-suppliers-in-india" },
        {
          name: "Conference Tables",
          url: "/best-furniture-suppliers-in-india",
        },
        { name: "View More", url: "/best-furniture-suppliers-in-india" },
      ],
    },
    {
      title: "Dining Room Furniture",
      imageSrc: "./assets/fu15.jpeg",
      links: [
        { name: "Dining Tables", url: "/best-furniture-suppliers-in-india" },
        { name: "Dining Chairs", url: "/best-furniture-suppliers-in-india" },
        { name: "Buffets", url: "/best-furniture-suppliers-in-india" },
        { name: "Bar Carts", url: "/best-furniture-suppliers-in-india" },
        { name: "View More", url: "/best-furniture-suppliers-in-india" },
      ],
    },
    {
      title: "Living Room Furniture",
      imageSrc: "./assets/fu16.jpeg",
      alt: "Living Room Furniture",
      links: [
        { name: "Sofas", url: "/best-furniture-suppliers-in-india" },
        { name: "Coffee Tables", url: "/best-furniture-suppliers-in-india" },
        { name: "TV Stands", url: "/best-furniture-suppliers-in-india" },
        { name: "Bookcases", url: "/best-furniture-suppliers-in-india" },
        { name: "View More", url: "/best-furniture-suppliers-in-india" },
      ],
    },
  ];

  return (
    <>
      <div className="pagetitle">
        <h1>Furniture Trade Directory & Networking Platform</h1>
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
                      <figure className="cp" onClick={() => {}}>
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
          GlobalB2BMart is the leading Furniture B2B Marketplace and Furniture
          Business Directory, offering comprehensive business listings of
          Furniture Suppliers, Manufacturers, Exporters, Wholesalers, and
          Traders worldwide. Our extensive and verified database includes
          detailed information about Furniture Companies, a diverse catalog of
          Furniture Products, and up-to-date Furniture Price Lists and
          Quotations.
        </p>
      </div>
    </>
  );
};

export default Furniture;
