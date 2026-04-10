import React from "react";
import "./commn.css";

const IndustrialMachinery = () => {
  const products = [
    {
      title: "Agricultural Machines & Plant",
      imageSrc: "/assets/Agrif1.jpg",
      links: [
        { name: "Machine Parts", url: "#" },
        { name: "Tiller Blades", url: "#" },
        { name: "Mist Sprayers", url: "#" },
        { name: "Trigger Sprayers", url: "#" },
        { name: "View More", url: "#" },
      ],
    },
    {
      title: "Bakery & Dairy Machinery",
      imageSrc: "/assets/Agrif1.jpg",
      links: [
        { name: "Biscuit Machines", url: "#" },
        { name: "Pizza Oven", url: "#" },
        { name: "Rotary Rack Oven", url: "#" },
        { name: "Kneading Machines", url: "#" },
        { name: "View More", url: "#" },
      ],
    },
    {
      title: "Boilers & Furnace",
      imageSrc: "/assets/Agrif3.jpg",
      links: [
        { name: "Steam Boilers", url: "#" },
        { name: "Industrial Boilers", url: "#" },
        { name: "Water Treatment Systems", url: "#" },
        { name: "Non Ibr Boilers", url: "#" },
        { name: "View More", url: "#" },
      ],
    },
    {
      title: "Broaching Machines",
      imageSrc: "/assets/Agrif4.jpg",
      links: [
        { name: "Broaching Machine", url: "#" },
        { name: "Vertical Broaching Machine", url: "#" },
        { name: "Horizontal Broaching Machine", url: "#" },
        { name: "Broaching Components", url: "#" },
        { name: "View More", url: "#" },
      ],
    },
    {
      title: "Casting and Moulding Equipments",
      imageSrc: "/assets/Agrif7.jpg",
      links: [
        { name: "Injection Molding Machines", url: "#" },
        { name: "Automatic Die Machine", url: "#" },
        { name: "Pet Blow Moulding Machines", url: "#" },
        { name: "Pressure Die Casting Machines", url: "#" },
        { name: "View More", url: "#" },
      ],
    },
    {
      title: "Chemical Plants & Machinery",
      imageSrc: "/assets/Agrif6.jpg",
      links: [
        { name: "Industrial Agitator", url: "#" },
        { name: "Ipc Container", url: "#" },
        { name: "High Speed Disperser", url: "#" },
        { name: "Epoxy System", url: "#" },
        { name: "View More", url: "#" },
      ],
    },
  ];

  return (
    <>
      <div className="pagetitle">
        <h1>Industrial Machinery Trade Directory & Networking Platform</h1>
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
          Explore a wide range of industrial machinery including agricultural
          machines, bakery machinery, boilers, casting equipment, and more.
          Connect with global suppliers and manufacturers.
        </p>
      </div>
    </>
  );
};

export default IndustrialMachinery;
