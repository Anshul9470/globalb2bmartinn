import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./catet.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Maincategory = () => {
  // const [formOpen, setFormOpen] = useState(false);
  // const [formData, setFormData] = useState({
  //     name: '',
  //     email: '',
  //     mobileNumber: '',
  //     productSupplier: '',
  //     userType: 'Seller'
  // });

  // const toggleForm = () => {
  //     setFormOpen(!formOpen);
  // };

  // const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // Handle form submission
  //     console.log(formData);
  // };
  // const [formOpen, setFormOpen] = useState(false);
  // // const [barOpen, setBarOpen] = useState(false);
  // const [formData, setFormData] = useState({
  //     name: '',
  //     email: '',
  //     mobileNumber: '',
  //     productSupplier: '',
  //     userType: 'Seller'
  // });

  // const toggleForm = () => {
  //     setFormOpen(!formOpen);
  // };
  // // const toggleForm = () => {
  // //     if (!barOpen) {
  // //         setBarOpen(true);
  // //         setTimeout(() => {
  // //             setFormOpen(true);
  // //         }, 500); // Wait for the bar to slide out first
  // //     } else {
  // //         setFormOpen(false);
  // //         setTimeout(() => {
  // //             setBarOpen(false);
  // //         }, 500); // Wait for the form to slide back first
  // //     }
  // // };

  // const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //         const response = await fetch('http://localhost:3005/submit-call', {
  //             method: 'POST',
  //             headers: {
  //                 'Content-Type': 'application/json',
  //             },
  //             body: JSON.stringify(formData),
  //         });
  //         const result = await response.json();
  //         console.log(result);
  //         // Handle success (e.g., display a success message, reset form, etc.)
  //     } catch (error) {
  //         console.error('Error submitting call:', error);
  //         // Handle error (e.g., display an error message)
  //     }
  // };

  // const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //         const response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/submit-call`, formData);
  //         console.log(response.data);
  //         setSuccessMessage('Form submitted successfully!');
  //         setFormData({
  //             name: '',
  //             email: '',
  //             mobileNumber: '',
  //             productSupplier: '',
  //             userType: []
  //         });
  //         // Clear the success message after a few seconds
  //         setTimeout(() => {
  //             setSuccessMessage('');
  //         }, 5000); // Adjust the time as needed
  //     } catch (error) {
  //         console.error('Error submitting call:', error);
  //         // Handle error (e.g., display an error message)
  //     }
  // };

  return (
    <>
      <nav id="category-slide" className="nav">
        <div className="container">
          <ul className="full-nav">
            <li className="item fnav-icon-wrap">
              <span className="cp nav-item fnav-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={19}
                  height={18}
                >
                  <path d="M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z" />
                </svg>{" "}
                All Categories
              </span>
              <div className="top-nav">
                <ul className="top-nav-links">
                  <li>
                    {/* <a href="/"> */}
                    <Link to="agriculture-farm-tools-suppliers">
                      <h4>Agriculture</h4>{" "}
                      <FontAwesomeIcon icon={faAngleRight} />
                    </Link>
                    {/* <div className="hover-links">
                                            <div className="row">
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/">
                                                                Vegetables
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Potato
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Onion
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Tomato
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/green-pea">
                                                                {" "}
                                                                Green Peas
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                agriculture-farm-tools-suppliers Seed
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Cumin Seeds
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Sesame Seeds
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Coriander Seeds
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Cotton Seeds
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Farming Equipment &amp; Supplies
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Cultivators
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Harrow
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Harvesters
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Jaw Crusher
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Farming Consultancy Services
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Pest Control Services
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Soil Testing Services
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Rainwater Harvesting
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Organic Farming
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Fresh Fruits
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Pineapple
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Banana
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Orange
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Apple
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Fresh Flowers, Plants &amp; Trees
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Lily
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Orchids
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Red Rose
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Sunflower
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Food Grains
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Wheat
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Maize
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Yellow Corn
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Kidney Beans
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Rice
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Brown Rice
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Basmati Rice{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Non Basmati Rice
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Long Grain Rice
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Tractor &amp; Tractor Parts
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Hitch Pins
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Walking Tractor
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Tractor Seats
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Tractor Trolleys
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <a
                                                    href="/"
                                                    className="view-all"
                                                >
                                                    View All Categories in agriculture-farm-tools-suppliers
                                                </a>
                                            </div>
                                        </div> */}

                    <div className="hover-links">
                      {/* <div className="row">
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <Link to="/">
                                                                Vegetables
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/potatosupplier?search=potato">
                                                                Potato
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/farming/onions?search=onion">
                                                                Onion
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Tomato
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/green-pea">
                                                                Green Peas
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <Link to="/">
                                                                agriculture-farm-tools-suppliers Seed
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/sesameseeds?search=%20sesame">
                                                                Cumin Seeds
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/sesameseeds?search=%20sesame">
                                                                Sesame Seeds
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Coriander Seeds
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Cotton Seeds
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <Link to="/">
                                                                Farming Equipment & Supplies
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Cultivators
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Harrow
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Harvesters
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Jaw Crusher
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <Link to="/">
                                                                Farming Consultancy Services
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Pest Control Services
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Soil Testing Services
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Rainwater Harvesting
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Organic Farming
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <Link to="/">
                                                                Fresh Fruits
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Pineapple
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Banana
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Orange
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Apple
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <Link to="/">
                                                                Fresh Flowers, Plants & Trees
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/plants/dealer?search=plants">
                                                                Lily
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/plants/dealer?search=plants">
                                                                Orchids
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/plants/dealer?search=plants">
                                                                Red Rose
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/plants/dealer?search=plants">
                                                                Sunflower
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <Link to="/">
                                                                Food Grains
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/whearsupplier?search=wheat">
                                                                Wheat
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/maizemanu?search=maize">
                                                                Maize
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/maizemanu?search=maize">
                                                                Yellow Corn
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Kidney Beans
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <Link to="/agroproducts?search=rice">
                                                                Rice
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/agroproducts?search=rice">
                                                                Brown Rice
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/agroproducts?search=rice">
                                                                Basmati Rice
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Non Basmati Rice
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/agroproducts?search=rice">
                                                                Long Grain Rice
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <Link to="/caraccessories?search=car">
                                                                Tractor & Tractor Parts
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/caraccessories?search=car">
                                                                Hitch Pins
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">
                                                                Walking Tractor
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/caraccessories?search=car">
                                                                Tractor Seats
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/caraccessories?search=car">
                                                                Tractor Trolleys
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div> */}
                      <div className="row">
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/fruitscomponent">Fruits</Link>
                            </li>
                            <li>
                              <Link to="/apple-seller">Apple</Link>
                            </li>
                            <li>
                              <Link to="/banana-seller">Banana</Link>
                            </li>
                            <li>
                              <Link to="/fruitscomponent">Grapes</Link>
                            </li>
                            <li>
                              <Link to="/fruitscomponent">Watermelon</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Flowers, Plants & Trees</Link>
                            </li>
                            <li>
                              <Link to="/plants/dealer?search=plants">
                                Jasmine
                              </Link>
                            </li>
                            <li>
                              <Link to="/plants/dealer?search=plants">
                                Tulip
                              </Link>
                            </li>
                            <li>
                              <Link to="/plants/dealer?search=plants">
                                Hibiscus
                              </Link>
                            </li>
                            <li>
                              <Link to="/plants/dealer?search=plants">
                                Gardenia
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/whearsupplier">Wheat</Link>
                            </li>
                            <li>
                              <Link to="/pulses">pulses</Link>
                            </li>
                            <li>
                              <Link to="/maizemanu?search=maize">
                                Yellow Corn
                              </Link>
                            </li>
                            <li>
                              <Link to="/maizemanu?search=maize">Maize</Link>
                            </li>
                            <li>
                              <Link to="/whearsupplier?search=wheat">
                                Wheat
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/agroproducts?search=rice">Rice</Link>
                            </li>
                            <li>
                              <Link to="/agroproducts?search=rice">
                                Arborio Rice
                              </Link>
                            </li>
                            <li>
                              <Link to="/agroproducts?search=rice">
                                Sona Masoori Rice
                              </Link>
                            </li>
                            <li>
                              <Link to="/agroproducts?search=rice">
                                Normal Rice
                              </Link>
                            </li>
                            <li>
                              <Link to="/agroproducts?search=rice">
                                Basmati Rice
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Farming Equipment & Supplies</Link>
                            </li>
                            <li>
                              <Link to="/">Jaw Crusher</Link>
                            </li>
                            <li>
                              <Link to="/">Harvesters</Link>
                            </li>
                            <li>
                              <Link to="/">Harrow</Link>
                            </li>
                            <li>
                              <Link to="/">Cultivators</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Organic Seed Varieties</Link>
                            </li>
                            <li>
                              <Link to="/">Sunflower Seeds</Link>
                            </li>
                            <li>
                              <Link to="/">Flax Seeds</Link>
                            </li>
                            <li>
                              <Link to="/sesameseeds?search=sesame">
                                Chia Seeds
                              </Link>
                            </li>
                            <li>
                              <Link to="/sesameseeds?search=sesame">
                                Mustard Seeds
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Vegetables</Link>
                            </li>
                            <li>
                              <Link to="/">Cabbage</Link>
                            </li>
                            <li>
                              <Link to="/">Spinach</Link>
                            </li>
                            <li>
                              <Link to="/onion-seeds-dehydrated-onions-white">
                                Onion
                              </Link>
                            </li>
                            <li>
                              <Link to="/potatosupplier?search=potato">
                                Potato
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/caraccessories?search=car">
                                Agricultural Machinery & Components
                              </Link>
                            </li>
                            <li>
                              <Link to="/caraccessories?search=car">
                                Heavy-duty Farm Trailers
                              </Link>
                            </li>
                            <li>
                              <Link to="/caraccessories?search=car">
                                Ergonomic Tractor Seats
                              </Link>
                            </li>
                            <li>
                              <Link to="/">Compact Walking Tractors</Link>
                            </li>
                            <li>
                              <Link to="/caraccessories?search=car">
                                Durable Hitch Pins
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">
                                Sustainable agriculture-farm-tools-suppliers
                                Solutions
                              </Link>
                            </li>
                            <li>
                              <Link to="/">Regenerative Farming</Link>
                            </li>
                            <li>
                              <Link to="/">Water Conservation Practices</Link>
                            </li>
                            <li>
                              <Link to="/">Soil Health Analysis</Link>
                            </li>
                            <li>
                              <Link to="/">Eco-friendly Pest Management</Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="text-center">
                        <Link
                          to="/agriculture-farm-tools-suppliers"
                          className="view-all"
                        >
                          View All Categories in
                          agriculture-farm-tools-suppliers
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to="/clothing-apparel-suppliers">
                      <h4>Clothing and Fashion</h4>{" "}
                      <FontAwesomeIcon icon={faAngleRight} />
                    </Link>

                    <div className="hover-links">
                      <div className="row">
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/garmentdedealer?search=footwear">
                                Footwear Collection
                              </Link>
                            </li>
                            <li>
                              <Link to="/footweardealers">Stylish Boots</Link>
                            </li>
                            <li>
                              <Link to="/footweardealers">
                                Comfortable Shoes
                              </Link>
                            </li>
                            <li>
                              <Link to="/footweardealers">
                                Sandals & Slippers
                              </Link>
                            </li>
                            <li>
                              <Link to="/footweardealers">
                                Casual Flip-Flops
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/garmentdedealer?search=casualwear">
                                Everyday Casual Wear
                              </Link>
                            </li>
                            <li>
                              <Link to="/garmentdedealer?search=casualwear">
                                Denim Jeans
                              </Link>
                            </li>
                            <li>
                              <Link to="/tshirt-seller">Casual T-Shirts</Link>
                            </li>
                            <li>
                              <Link to="/garmentdedealer?search=casualwear">
                                Casual Trousers
                              </Link>
                            </li>
                            <li>
                              <Link to="/garmentdedealer?search=casualwear">
                                Button-Down Shirts
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/undergarment-seller">
                                Intimate Wear & Nightwear
                              </Link>
                            </li>
                            <li>
                              <Link to="/undergarment-seller">
                                Comfortable Bras
                              </Link>
                            </li>
                            <li>
                              <Link to="/undergarment-seller">
                                Cotton Panties
                              </Link>
                            </li>
                            <li>
                              <Link to="/undergarment-seller">
                                Sleeveless Vests
                              </Link>
                            </li>
                            <li>
                              <Link to="/undergarment-seller">
                                Soft Night Suits
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/garmentdedealer?search=fashionaccessories">
                                Fashion Accessories Collection
                              </Link>
                            </li>
                            <li>
                              <Link to="/">Stylish Sunglasses</Link>
                            </li>
                            <li>
                              <Link to="/bagsandbeltdealer?search=wallet">
                                Leather Wallets
                              </Link>
                            </li>
                            <li>
                              <Link to="/bagsandbeltdealer?search=belt">
                                Fashionable Belts
                              </Link>
                            </li>
                            <li>
                              <Link to="/garmentdedealer?search=fashionaccessories">
                                Elegant Scarves
                              </Link>
                            </li>
                          </ul>
                        </div>

                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/fabrics">Winter Wear Collection</Link>
                            </li>
                            <li>
                              <Link to="/fabrics">Cozy Shawls</Link>
                            </li>
                            <li>
                              <Link to="/fabrics">Warm Mufflers</Link>
                            </li>
                            <li>
                              <Link to="/fabrics">Sweaters</Link>
                            </li>
                            <li>
                              <Link to="/fabrics">Sweatshirts & Hoodies</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/sareesdealer">
                                Ethnic Wear - Sarees
                              </Link>
                            </li>
                            <li>
                              <Link to="/sareesdealer">Designer Sarees</Link>
                            </li>
                            <li>
                              <Link to="/sareesdealer">Silk Sarees</Link>
                            </li>
                            <li>
                              <Link to="/sareesdealer">Georgette Sarees</Link>
                            </li>
                            <li>
                              <Link to="/sareesdealer">Printed Sarees</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/garmentdedealer?search=womensclothing">
                                Women's Apparel & Accessories
                              </Link>
                            </li>
                            <li>
                              <Link to="/garmentdedealer?search=womensclothing">
                                Stylish Blouses
                              </Link>
                            </li>
                            <li>
                              <Link to="/garmentdedealer?search=womensclothing">
                                Lehenga & Choli Sets
                              </Link>
                            </li>
                            <li>
                              <Link to="/garmentdedealer?search=womensclothing">
                                Cotton Tops & Tunics
                              </Link>
                            </li>
                            <li>
                              <Link to="/garmentdedealer?search=womensclothing">
                                Salwar Suits & Sets
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/garmentdedealer?search=kidsclothing">
                                Children's Apparel & Accessories
                              </Link>
                            </li>
                            <li>
                              <Link to="/garmentdedealer?search=kidsclothing">
                                Kid's Formal Suits
                              </Link>
                            </li>
                            <li>
                              <Link to="/tshirt-seller">Trendy T-Shirts</Link>
                            </li>
                            <li>
                              <Link to="/garmentdedealer?search=kidsclothing">
                                Comfortable Shorts
                              </Link>
                            </li>
                            <li>
                              <Link to="/garmentdedealer?search=kidsclothing">
                                Denim Jeans for Kids
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/garmentdedealer?search=mensclothing">
                                Men's Apparel & Accessories
                              </Link>
                            </li>
                            <li>
                              <Link to="/tshirt-seller">Casual T-Shirts</Link>
                            </li>
                            <li>
                              <Link to="/garmentdedealer?search=mensclothing">
                                Denim Jeans
                              </Link>
                            </li>
                            <li>
                              <Link to="/garmentdedealer?search=mensclothing">
                                Formal Shirts
                              </Link>
                            </li>
                            <li>
                              <Link to="/garmentdedealer?search=mensclothing">
                                Trousers & Pants
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="text-center">
                        <Link
                          to="/clothing-apparel-suppliers"
                          className="view-all"
                        >
                          View All Categories in Apparel & Fashion
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to="industrial-chemicals-cleaning-chemicals">
                      <h4>Chemicals</h4> <FontAwesomeIcon icon={faAngleRight} />{" "}
                    </Link>

                    {/* <div className="hover-links">
                                            <div className="row">
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/acids">
                                                                {" "}
                                                                Acids{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/lead-acid">
                                                                {" "}
                                                                Lead Acid{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/amino-acid">
                                                                {" "}
                                                                Amino Acid{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/hydrochloric-acid">
                                                                {" "}
                                                                Hydrochloric Acid{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/phosphoric-acid">
                                                                {" "}
                                                                Phosphoric Acid{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/dyes-pigments">
                                                                {" "}
                                                                Dyes &amp; Pigments{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/acid-dyes">
                                                                {" "}
                                                                Acid Dyes{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/direct-dyes">
                                                                {" "}
                                                                Direct Dyes{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/reactive-dyes">
                                                                {" "}
                                                                Reactive Dyes{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/blue-pigment">
                                                                {" "}
                                                                Blue Pigment{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/chemical-machinery">
                                                                {" "}
                                                                Chemical Machinery{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/crystallizers">
                                                                {" "}
                                                                Crystallizers{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/compression-machine">
                                                                {" "}
                                                                Compression Machine{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/centrifuge-machine">
                                                                {" "}
                                                                Centrifuge Machine{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/distillation-columns">
                                                                {" "}
                                                                Distillation Columns{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/agrochemicals">
                                                                {" "}
                                                                Agrochemicals{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/fertilizer">
                                                                {" "}
                                                                Fertilizer{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/insecticides">
                                                                {" "}
                                                                Insecticides{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/urea">
                                                                {" "}
                                                                Urea{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/potassium-humate">
                                                                {" "}
                                                                Potassium Humate{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/chemical-equipment">
                                                                {" "}
                                                                Chemical Equipment{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/reactors">
                                                                {" "}
                                                                Reactors{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/chemical-tank">
                                                                {" "}
                                                                Chemical Tank{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/air-tank">
                                                                {" "}
                                                                Air Tank Air Tank{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/chemical-mixers">
                                                                {" "}
                                                                Chemical Mixers{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/paint-amp-coating-chemical">
                                                                {" "}
                                                                Paint &amp; Coating Chemical{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/thinner">
                                                                {" "}
                                                                Thinner{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/varnish">
                                                                {" "}
                                                                Varnish{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/spray-paints">
                                                                {" "}
                                                                Spray Paints{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/clay-powder">
                                                                {" "}
                                                                Clay Powder{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/baking-powder">
                                                                {" "}
                                                                Specialty Chemicals{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/baking-powder">
                                                                {" "}
                                                                Baking Powder{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/sodium-benzoate">
                                                                {" "}
                                                                Sodium Benzoate{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/laboratory-chemicals">
                                                                {" "}
                                                                Laboratory Chemicals{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/sodium-tripolyphosphate">
                                                                {" "}
                                                                Sodium Tripolyphosphate{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/industrial-chemicals">
                                                                {" "}
                                                                Industrial Chemicals{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/methyl">
                                                                {" "}
                                                                Methyl{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/mercury">
                                                                {" "}
                                                                Mercury{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/iron-oxide">
                                                                {" "}
                                                                Iron Oxide{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/calcium-carbonate">
                                                                {" "}
                                                                Calcium Carbonate{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/resin">
                                                                {" "}
                                                                Resin{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/pvc-resins">
                                                                {" "}
                                                                PVC Resins{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/epoxy-resins">
                                                                {" "}
                                                                Epoxy Resins{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/polyester-resins">
                                                                {" "}
                                                                Polyester Resins{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/phenolic-resins">
                                                                {" "}
                                                                Phenolic Resins{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <a
                                                    href="/"
                                                    className="view-all"
                                                >
                                                    View All Categories in Chemicals
                                                </a>
                                            </div>
                                        </div> */}

                    <div className="hover-links">
                      <div className="row">
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Polymers & Resins</Link>
                            </li>
                            <li>
                              <Link to="/pvcrresins?search=pvc%20resin">
                                PVC Polymers
                              </Link>
                            </li>
                            <li>
                              <Link to="/pvcrresins?search=epoxy%20resin">
                                Epoxy Polymers
                              </Link>
                            </li>
                            <li>
                              <Link to="/pvcrresins?search=polyester%20resin">
                                Polyester Polymers
                              </Link>
                            </li>
                            <li>
                              <Link to="/pvcrresins?search=phenolic%20resin">
                                Phenolic Polymers
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Chemical Processing Equipment</Link>
                            </li>
                            <li>
                              <Link to="/">Industrial Reactors</Link>
                            </li>
                            <li>
                              <Link to="/">Storage Tanks</Link>
                            </li>
                            <li>
                              <Link to="/">Pressure Tanks</Link>
                            </li>
                            <li>
                              <Link to="/">Mixing Systems</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Chemical Raw Materials</Link>
                            </li>
                            <li>
                              <Link to="/">Calcium Compounds</Link>
                            </li>
                            <li>
                              <Link to="/">Iron Compounds</Link>
                            </li>
                            <li>
                              <Link to="/">Mercury Compounds</Link>
                            </li>
                            <li>
                              <Link to="/">Methyl Compounds</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Advanced Chemicals</Link>
                            </li>
                            <li>
                              <Link to="/">Baking Agents</Link>
                            </li>
                            <li>
                              <Link to="/">Preservatives</Link>
                            </li>
                            <li>
                              <Link to="/">Lab Reagents</Link>
                            </li>
                            <li>
                              <Link to="/">Cleaning Agents</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/paints">Coatings & Paints</Link>
                            </li>
                            <li>
                              <Link to="/paints">Solvents</Link>
                            </li>
                            <li>
                              <Link to="/paints">Protective Coatings</Link>
                            </li>
                            <li>
                              <Link to="/paints">Aerosol Paints</Link>
                            </li>
                            <li>
                              <Link to="paints/">Clay-Based Products</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Pigments & Dyes</Link>
                            </li>
                            <li>
                              <Link to="/">Colorant Dyes</Link>
                            </li>
                            <li>
                              <Link to="/">Fabric Dyes</Link>
                            </li>
                            <li>
                              <Link to="/">Reactive Colorants</Link>
                            </li>
                            <li>
                              <Link to="/">Pigment Powders</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Agricultural Chemicals</Link>
                            </li>
                            <li>
                              <Link to="/">Soil Nutrients</Link>
                            </li>
                            <li>
                              <Link to="/">Pesticides</Link>
                            </li>
                            <li>
                              <Link to="/">Nitrogen Fertilizers</Link>
                            </li>
                            <li>
                              <Link to="/">Organic Additives</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Chemical Production Machinery</Link>
                            </li>
                            <li>
                              <Link to="/">Crystallization Units</Link>
                            </li>
                            <li>
                              <Link to="/">Compression Equipment</Link>
                            </li>
                            <li>
                              <Link to="/">Centrifuge Units</Link>
                            </li>
                            <li>
                              <Link to="/">Distillation Equipment</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Acids & Solutions</Link>
                            </li>
                            <li>
                              <Link to="/">Hydrochloric Solutions</Link>
                            </li>
                            <li>
                              <Link to="/">Phosphoric Solutions</Link>
                            </li>
                            <li>
                              <Link to="/">Amino Compounds</Link>
                            </li>
                            <li>
                              <Link to="/">Lead-Based Solutions</Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="text-center">
                        <Link
                          to="/industrial-chemicals-cleaning-chemicals"
                          className="view-all"
                        >
                          View All Categories in Chemicals
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to="gifts-items">
                      <h4>Gifts &amp; Crafts</h4>{" "}
                      <FontAwesomeIcon icon={faAngleRight} />
                    </Link>

                    <div className="hover-links">
                      <div className="row">
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Beaded Crafts</Link>
                            </li>
                            <li>
                              <Link to="/">Decorative Beads</Link>
                            </li>
                            <li>
                              <Link to="/">Geometric Beads</Link>
                            </li>
                            <li>
                              <Link to="/gemstones">Gemstone Beads</Link>
                            </li>
                            <li>
                              <Link to="/">Beaded Artworks</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/candledealers">Candle Crafts</Link>
                            </li>
                            <li>
                              <Link to="/candledealers">Candle Holders</Link>
                            </li>
                            <li>
                              <Link to="/candledealers">
                                Decorative Candle Lamps
                              </Link>
                            </li>
                            <li>
                              <Link to="/candledealers">Gel-Based Candles</Link>
                            </li>
                            <li>
                              <Link to="/candledealers">Candle Stands</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Ceramic Art</Link>
                            </li>
                            <li>
                              <Link to="/">Ceramic Bongs</Link>
                            </li>
                            <li>
                              <Link to="/">Ceramic Dishware</Link>
                            </li>
                            <li>
                              <Link to="/">Ceramic Glassware</Link>
                            </li>
                            <li>
                              <Link to="/">Ceramic Pottery</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Gift Items</Link>
                            </li>
                            <li>
                              <Link to="/">Branded Gifts</Link>
                            </li>
                            <li>
                              <Link to="/">Corporate Gifts</Link>
                            </li>
                            <li>
                              <Link to="/">Gift Accessories</Link>
                            </li>
                            <li>
                              <Link to="arts?search=artist">Keepsakes</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="arts?search=artist">
                                Artworks & Sculptures
                              </Link>
                            </li>
                            <li>
                              <Link to="arts?search=artist">Canvas Art</Link>
                            </li>
                            <li>
                              <Link to="arts?search=artist">Figurines</Link>
                            </li>
                            <li>
                              <Link to="arts?search=artist">
                                Religious Figures
                              </Link>
                            </li>
                            <li>
                              <Link to="arts?search=artist">
                                Artistic Sculptures
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Holiday Decorations</Link>
                            </li>
                            <li>
                              <Link to="/">Christmas Bag</Link>
                            </li>
                            <li>
                              <Link to="/">Christmas Gifts</Link>
                            </li>
                            <li>
                              <Link to="/">Christmas Ornaments</Link>
                            </li>
                            <li>
                              <Link to="/">Christmas Trees</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Wooden Crafts</Link>
                            </li>
                            <li>
                              <Link to="/arts">Wood-Framed Mirrors</Link>
                            </li>
                            <li>
                              <Link to="/arts">Wooden Decorations</Link>
                            </li>
                            <li>
                              <Link to="/arts">Wooden Figurines</Link>
                            </li>
                            <li>
                              <Link to="/arts">Carved Wood Art</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/brasscomponents?search=brass">
                                Brass Artifacts
                              </Link>
                            </li>
                            <li>
                              <Link to="/brasscomponents?search=brass">
                                Brass Figurines
                              </Link>
                            </li>
                            <li>
                              <Link to="/brasscomponents?search=brass">
                                Brass Incense Holders
                              </Link>
                            </li>
                            <li>
                              <Link to="/brasscomponents?search=brass">
                                Brass Memorials
                              </Link>
                            </li>
                            <li>
                              <Link to="/brasscomponents?search=brass">
                                Brass Ornaments
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Vintage Collectibles</Link>
                            </li>
                            <li>
                              <Link to="/">Historical Telescopes</Link>
                            </li>
                            <li>
                              <Link to="/">Nautical Instruments</Link>
                            </li>
                            <li>
                              <Link to="/">Antique Lanterns</Link>
                            </li>
                            <li>
                              <Link to="/">Field Glasses</Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="text-center">
                        <Link to="/gifts-items" className="view-all">
                          View All Categories in Gifts & Crafts
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to={"/best-furnitures-supplier-in-india"}>
                      <h4>Furniture</h4> <FontAwesomeIcon icon={faAngleRight} />
                    </Link>

                    <div className="hover-links">
                      <div className="row">
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Vintage Desks
                              </Link>
                            </li>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Classic Lounge Chairs
                              </Link>
                            </li>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Antique Dressers
                              </Link>
                            </li>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Vintage Cabinets
                              </Link>
                            </li>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Classic Wardrobes
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Wooden Storage Units
                              </Link>
                            </li>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Wooden Side Tables
                              </Link>
                            </li>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Wooden Filing Cabinets
                              </Link>
                            </li>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Rustic Wooden Benches
                              </Link>
                            </li>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Wooden Bookcases
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Iron Display Racks</Link>
                            </li>
                            <li>
                              <Link to="/">Iron Bed Frames</Link>
                            </li>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Metal Shelving Units
                              </Link>
                            </li>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Steel Workstations
                              </Link>
                            </li>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Brass Desk Lamps
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Retail Checkout Counters</Link>
                            </li>
                            <li>
                              <Link to="/">Promotional Display Stands</Link>
                            </li>
                            <li>
                              <Link to="/">Glass Display Cases</Link>
                            </li>
                            <li>
                              <Link to="/">Adjustable Display Racks</Link>
                            </li>
                            <li>
                              <Link to="/">Retail Shelving Units</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Sleek Kitchen Cabinets
                              </Link>
                            </li>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Stylish Coffee Tables
                              </Link>
                            </li>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Modern Recliners
                              </Link>
                            </li>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Designer Sectionals
                              </Link>
                            </li>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Contemporary Sofas
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Surgical Operating Tables
                              </Link>
                            </li>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                School Furniture
                              </Link>
                            </li>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Laboratory Workstations
                              </Link>
                            </li>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Hospital Bedside Tables
                              </Link>
                            </li>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Medical Examination Tables
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/plastic?search=plastic">
                                Plastic Storage Bins
                              </Link>
                            </li>
                            <li>
                              <Link to="/plastic?search=plastic">
                                Plastic Outdoor Tables
                              </Link>
                            </li>
                            <li>
                              <Link to="/plastic?search=plastic">
                                Stackable Plastic Stools
                              </Link>
                            </li>
                            <li>
                              <Link to="/plastic?search=plastic">
                                Molded Plastic Chairs
                              </Link>
                            </li>
                            <li>
                              <Link to="/plastic?search=plastic">
                                Plastic Garden Furniture
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Sofa Armrests
                              </Link>
                            </li>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Adjustable Footrests
                              </Link>
                            </li>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Cushion Covers
                              </Link>
                            </li>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Recliner Mechanisms
                              </Link>
                            </li>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Chair Base Accessories
                              </Link>
                            </li>
                          </ul>
                        </div>

                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Chair Cushions
                              </Link>
                            </li>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Drawer Mechanisms
                              </Link>
                            </li>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Adjustable Chair Bases
                              </Link>
                            </li>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Furniture Slides
                              </Link>
                            </li>
                            <li>
                              <Link to="/best-furniture-suppliers-in-india?search=furniture">
                                Chair Armrests
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="text-center">
                        <Link
                          to="/best-furniture-suppliers-in-india?search=furniture"
                          className="view-all"
                        >
                          View All Categories in Furniture
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link
                      to={
                        "/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers"
                      }
                    >
                      <h4>Food Products &amp; Beverage</h4>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </Link>

                    <div className="hover-links">
                      <div className="row">
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Candy</Link>
                            </li>
                            <li>
                              <Link to="/">Chewy Toffees</Link>
                            </li>
                            <li>
                              <Link to="/">Crispy Wafers</Link>
                            </li>
                            <li>
                              <Link to="/">Fruity Lollipops</Link>
                            </li>
                            <li>
                              <Link to="/">Sweet Treats</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/dairyprocts-supplier">
                                Cottage Cheese
                              </Link>
                            </li>
                            <li>
                              <Link to="/dairyprocts-supplier">Cream</Link>
                            </li>
                            <li>
                              <Link to="/dairyprocts-supplier">
                                Clarified Butter
                              </Link>
                            </li>
                            <li>
                              <Link to="/dairyprocts-supplier">Fresh Milk</Link>
                            </li>
                            <li>
                              <Link to="/dairyprocts-supplier">
                                Milk Products
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/teasupplier">Classic Tea</Link>
                            </li>
                            <li>
                              <Link to="/teasupplier">Green Tea</Link>
                            </li>
                            <li>
                              <Link to="/coffee">Instant Brew Coffee</Link>
                            </li>
                            <li>
                              <Link to="/coffee">Premium Coffee</Link>
                            </li>
                            <li>
                              <Link to="/coffee">Hot Beverages</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Extra Virgin Olive Oil</Link>
                            </li>
                            <li>
                              <Link to="/">Mustard Cooking Oil</Link>
                            </li>
                            <li>
                              <Link to="/">Refined Cooking Oil</Link>
                            </li>
                            <li>
                              <Link to="/">Sunflower Cooking Oil</Link>
                            </li>
                            <li>
                              <Link to="/">Cooking Oils</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/dryfruitsmanu?search=dry%20fruit">
                                Almonds
                              </Link>
                            </li>
                            <li>
                              <Link to="/dryfruitsmanu?search=dry%20fruit">
                                Cashew Nuts
                              </Link>
                            </li>
                            <li>
                              <Link to="/dryfruitsmanu?search=dry%20fruit">
                                Fresh Walnuts
                              </Link>
                            </li>
                            <li>
                              <Link to="/dryfruitsmanu?search=dry%20fruit">
                                Juicy Raisins
                              </Link>
                            </li>
                            <li>
                              <Link to="/dryfruitsmanu?search=dry%20fruit">
                                Nuts & Dried Fruits
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/spices/dealers?search=spices">
                                Crushed Red Chilli
                              </Link>
                            </li>
                            <li>
                              <Link to="/spices/dealers?search=spices">
                                Flavoring Spices
                              </Link>
                            </li>
                            <li>
                              <Link to="/spices/dealers?search=spices">
                                Golden Turmeric
                              </Link>
                            </li>
                            <li>
                              <Link to="/spices/dealers?search=spices">
                                Ground Coriander
                              </Link>
                            </li>
                            <li>
                              <Link to="/spices/dealers?search=spices">
                                Tamarind Paste
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/poulitryfarmstore?search=poultry">
                                Brown Eggs
                              </Link>
                            </li>
                            <li>
                              <Link to="/poulitryfarmstore?search=poultry">
                                Chicken
                              </Link>
                            </li>
                            <li>
                              <Link to="/poulitryfarmstore?search=poultry">
                                Eggs
                              </Link>
                            </li>
                            <li>
                              <Link to="/poulitryfarmstore?search=poultry">
                                Mutton
                              </Link>
                            </li>
                            <li>
                              <Link to="/poulitryfarmstore?search=poultry">
                                Organic Brown Eggs
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Corn Shellers</Link>
                            </li>
                            <li>
                              <Link to="/">Maize Sheller</Link>
                            </li>
                            <li>
                              <Link to="/">Roti Makers</Link>
                            </li>
                            <li>
                              <Link to="/">Shawarma Grills</Link>
                            </li>
                            <li>
                              <Link to="/">Sugarcane Juicers</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Cold Brew Coffee</Link>
                            </li>
                            <li>
                              <Link to="/">Espresso</Link>
                            </li>
                            <li>
                              <Link to="/">Iced Coffee</Link>
                            </li>
                            <li>
                              <Link to="/">Mocha</Link>
                            </li>
                            <li>
                              <Link to="/">Vanilla Latte</Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="text-center">
                        <Link
                          to="/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers"
                          className="view-all"
                        >
                          View All Categories in Food Products & Beverage
                        </Link>
                      </div>
                    </div>
                  </li>
                  {/* <li>

                                        <Link to={'/jewellery-necklaces-suppliers'}>
                                            <h4>Jewellery</h4>{" "}
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </Link>

                                        <div className="hover-links">
                                            <div className="row">
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/gold-jewelry">
                                                                {" "}
                                                                Gold Jewelry{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/gold-rings">
                                                                {" "}
                                                                Gold Rings{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/gold-bangles">
                                                                {" "}
                                                                Gold Bangles{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/gold-earrings">
                                                                {" "}
                                                                Gold Earrings{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/gold-necklace">
                                                                {" "}
                                                                Gold Necklace{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/silver-jewelry">
                                                                {" "}
                                                                Silver Jewelry{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/silver-earrings-wholesale">
                                                                {" "}
                                                                Silver Earrings{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/silver-bracelets-wholesale">
                                                                {" "}
                                                                Silver Bracelets{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/silver-necklace-wholesale">
                                                                {" "}
                                                                Silver Necklace{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/silver-bangles-wholesale">
                                                                {" "}
                                                                Silver Bangles{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/diamond-jewelry">
                                                                {" "}
                                                                Diamond Jewelry{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/diamond-bangles">
                                                                {" "}
                                                                Diamond Bangles{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/diamond-bracelets">
                                                                {" "}
                                                                Diamond Bracelets{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/diamond-rings">
                                                                {" "}
                                                                Diamond Rings{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/diamond-necklaces">
                                                                {" "}
                                                                Diamond Necklaces{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/fashion-jewelry">
                                                                {" "}
                                                                Fashion Jewelry{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/wrist-bands">
                                                                {" "}
                                                                Wrist Bands{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/stone-bracelet">
                                                                {" "}
                                                                Stone Bracelet{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/pearl-bangle">
                                                                {" "}
                                                                Pearl Bangle{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/necklace-sets">
                                                                {" "}
                                                                Necklace Sets{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/beaded-jewelry">
                                                                {" "}
                                                                Beaded Jewelry{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/beaded-necklace">
                                                                {" "}
                                                                Beaded Necklace{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/beaded-earrings">
                                                                {" "}
                                                                Beaded Earrings{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/beaded-rings">
                                                                {" "}
                                                                Beaded Rings{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/beaded-bangles">
                                                                {" "}
                                                                Beaded Bangles{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/bangles">
                                                                {" "}
                                                                Bangles{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/designer-bangles">
                                                                {" "}
                                                                Designer Bangles{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/acrylic-bangles">
                                                                {" "}
                                                                Acrylic Bangles{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/metal-bangles">
                                                                {" "}
                                                                Metal Bangles{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/lac-bangle">
                                                                {" "}
                                                                Lac Bangles{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/gemstones">
                                                                {" "}
                                                                Gemstones{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/rhinestone">
                                                                {" "}
                                                                Rhinestone{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/rose-quartz">
                                                                {" "}
                                                                Rose Quartz{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/emerald-stone">
                                                                {" "}
                                                                Emerald Stone{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/garnet-stone">
                                                                {" "}
                                                                Garnet Stone{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/jewelry-accessories">
                                                                {" "}
                                                                Jewelry Accessories{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/watch-boxes">
                                                                {" "}
                                                                Watch Boxes{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/bangle-boxes">
                                                                {" "}
                                                                Bangle Boxes{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/jewelry-box">
                                                                {" "}
                                                                Jewelry Box{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/silver-jewelry-box">
                                                                {" "}
                                                                Silver Jewelry Box{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/precious-stones-amp-gemstone-jewelry">
                                                                {" "}
                                                                Precious Stones &amp; Gemstone Jewelry{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/blue-sapphire">
                                                                {" "}
                                                                Blue Sapphire{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/quartz-stone">
                                                                {" "}
                                                                Quartz Stone{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/tourmaline-ring">
                                                                {" "}
                                                                Tourmaline Ring{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/kundan-necklaces">
                                                                {" "}
                                                                Kundan Necklaces{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <a
                                                    href="/"
                                                    className="view-all"
                                                >
                                                    View All Categories in Jewelry
                                                </a>
                                            </div>
                                        </div>
                                    </li> */}
                  <li>
                    <Link to={"/jewellery-necklaces-suppliers"}>
                      <h4>Jewellery</h4> <FontAwesomeIcon icon={faAngleRight} />
                    </Link>

                    {/* <div className="hover-links">
                                            <div className="row">
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/gold-jewelry">
                                                                {" "}
                                                                Gold Jewelry{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/gold-rings">
                                                                {" "}
                                                                Gold Rings{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/gold-bangles">
                                                                {" "}
                                                                Gold Bangles{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/gold-earrings">
                                                                {" "}
                                                                Gold Earrings{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/gold-necklace">
                                                                {" "}
                                                                Gold Necklace{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/silver-jewelry">
                                                                {" "}
                                                                Silver Jewelry{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/silver-earrings-wholesale">
                                                                {" "}
                                                                Silver Earrings{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/silver-bracelets-wholesale">
                                                                {" "}
                                                                Silver Bracelets{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/silver-necklace-wholesale">
                                                                {" "}
                                                                Silver Necklace{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/silver-bangles-wholesale">
                                                                {" "}
                                                                Silver Bangles{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/diamond-jewelry">
                                                                {" "}
                                                                Diamond Jewelry{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/diamond-bangles">
                                                                {" "}
                                                                Diamond Bangles{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/diamond-bracelets">
                                                                {" "}
                                                                Diamond Bracelets{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/diamond-rings">
                                                                {" "}
                                                                Diamond Rings{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/diamond-necklaces">
                                                                {" "}
                                                                Diamond Necklaces{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/fashion-jewelry">
                                                                {" "}
                                                                Fashion Jewelry{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/wrist-bands">
                                                                {" "}
                                                                Wrist Bands{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/stone-bracelet">
                                                                {" "}
                                                                Stone Bracelet{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/pearl-bangle">
                                                                {" "}
                                                                Pearl Bangle{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/necklace-sets">
                                                                {" "}
                                                                Necklace Sets{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/beaded-jewelry">
                                                                {" "}
                                                                Beaded Jewelry{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/beaded-necklace">
                                                                {" "}
                                                                Beaded Necklace{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/beaded-earrings">
                                                                {" "}
                                                                Beaded Earrings{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/beaded-rings">
                                                                {" "}
                                                                Beaded Rings{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/beaded-bangles">
                                                                {" "}
                                                                Beaded Bangles{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/bangles">
                                                                {" "}
                                                                Bangles{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/designer-bangles">
                                                                {" "}
                                                                Designer Bangles{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/acrylic-bangles">
                                                                {" "}
                                                                Acrylic Bangles{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/metal-bangles">
                                                                {" "}
                                                                Metal Bangles{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/lac-bangle">
                                                                {" "}
                                                                Lac Bangles{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/gemstones">
                                                                {" "}
                                                                Gemstones{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/rhinestone">
                                                                {" "}
                                                                Rhinestone{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/rose-quartz">
                                                                {" "}
                                                                Rose Quartz{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/emerald-stone">
                                                                {" "}
                                                                Emerald Stone{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/garnet-stone">
                                                                {" "}
                                                                Garnet Stone{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/jewelry-accessories">
                                                                {" "}
                                                                Jewelry Accessories{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/watch-boxes">
                                                                {" "}
                                                                Watch Boxes{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/bangle-boxes">
                                                                {" "}
                                                                Bangle Boxes{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/jewelry-box">
                                                                {" "}
                                                                Jewelry Box{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/silver-jewelry-box">
                                                                {" "}
                                                                Silver Jewelry Box{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/precious-stones-amp-gemstone-jewelry">
                                                                {" "}
                                                                Precious Stones &amp; Gemstone Jewelry{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/blue-sapphire">
                                                                {" "}
                                                                Blue Sapphire{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/quartz-stone">
                                                                {" "}
                                                                Quartz Stone{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/tourmaline-ring">
                                                                {" "}
                                                                Tourmaline Ring{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/kundan-necklaces">
                                                                {" "}
                                                                Kundan Necklaces{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <a
                                                    href="/"
                                                    className="view-all"
                                                >
                                                    View All Categories in Jewelry
                                                </a>
                                            </div>
                                        </div> */}

                    <div className="hover-links">
                      <div className="row">
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Artificial Diamond Jewelry</Link>
                            </li>
                            <li>
                              <Link to="/">Diamond Bracelets</Link>
                            </li>
                            <li>
                              <Link to="/">Diamond Earrings</Link>
                            </li>
                            <li>
                              <Link to="/">Diamond Necklaces</Link>
                            </li>
                            <li>
                              <Link to="/">Silver Jewelry</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/gemstones">Artificial Gemstones</Link>
                            </li>
                            <li>
                              <Link to="/">Diamond Stones</Link>
                            </li>
                            <li>
                              <Link to="/">Emerald Stone</Link>
                            </li>
                            <li>
                              <Link to="/">Garnet Stones</Link>
                            </li>
                            <li>
                              <Link to="/">Rose Quartz</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Bangle Boxes</Link>
                            </li>
                            <li>
                              <Link to="/">Jewelry Accessories</Link>
                            </li>
                            <li>
                              <Link to="/">Jewelry Box</Link>
                            </li>
                            <li>
                              <Link to="/">Silver Jewelry Box</Link>
                            </li>
                            <li>
                              <Link to="/">Watch Boxes</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Stunning Gold Earrings</Link>
                            </li>
                            <li>
                              <Link to="/">Luxury Gold Necklaces</Link>
                            </li>
                            <li>
                              <Link to="/">Elegant Gold Rings</Link>
                            </li>
                            <li>
                              <Link to="/">Designer Gold Bangles</Link>
                            </li>
                            <li>
                              <Link to="/">Classic Gold Jewelry</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Stylish Silver Bracelets</Link>
                            </li>
                            <li>
                              <Link to="/">Fine Silver Jewelry</Link>
                            </li>
                            <li>
                              <Link to="/">Exquisite Silver Necklaces</Link>
                            </li>
                            <li>
                              <Link to="/">Elegant Silver Earrings</Link>
                            </li>
                            <li>
                              <Link to="/">Classic Silver Bangles</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Tourmaline Ring</Link>
                            </li>
                            <li>
                              <Link to="/">Quartz Stone</Link>
                            </li>
                            <li>
                              <Link to="/">Kundan Necklaces</Link>
                            </li>
                            <li>
                              <Link to="/">Blue Sapphire</Link>
                            </li>
                            <li>
                              <Link to="/gemstones">
                                Precious Stones & Gemstone Jewelry
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Stone Bracelet</Link>
                            </li>
                            <li>
                              <Link to="/">Wrist Bands</Link>
                            </li>
                            <li>
                              <Link to="/">Pearl Bangle</Link>
                            </li>
                            <li>
                              <Link to="/">Fashion Jewelry</Link>
                            </li>
                            <li>
                              <Link to="/">Beaded Jewelry</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/gemstones">Rhinestone</Link>
                            </li>
                            <li>
                              <Link to="/gemstones">Rose Quartz</Link>
                            </li>
                            <li>
                              <Link to="/gemstones">Emerald Stone</Link>
                            </li>
                            <li>
                              <Link to="/gemstones">Garnet Stone</Link>
                            </li>
                            <li>
                              <Link to="/gemstones">Gemstones</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Jewelry Box</Link>
                            </li>
                            <li>
                              <Link to="/">Silver Jewelry Box</Link>
                            </li>
                            <li>
                              <Link to="/">Bangle Boxes</Link>
                            </li>
                            <li>
                              <Link to="/">Watch Boxes</Link>
                            </li>
                            <li>
                              <Link to="/">Jewelry Accessories</Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="text-center">
                        <Link to="/" className="view-all">
                          View All Categories in Jewelry
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    {/* <a href="/industry/health-beauty">
                                            <h4>Health &amp; Beauty</h4>{" "}
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </a> */}
                    <Link to={"/health-beauty"}>
                      <h4>Health &amp; Beauty</h4>{" "}
                      <FontAwesomeIcon icon={faAngleRight} />
                    </Link>
                    {/* <div className="hover-links">
                                            <div className="row">
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/cosmetic-makeup-products">
                                                                {" "}
                                                                Cosmetic &amp; Makeup Products{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/bindis">
                                                                {" "}
                                                                Bindis{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/face-packs">
                                                                {" "}
                                                                Face Packs{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/rose-water">
                                                                {" "}
                                                                Rose Water{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/hair-extension">
                                                                {" "}
                                                                Hair Extension{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/baby-care-products">
                                                                {" "}
                                                                Baby Care Products{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/baby-oil">
                                                                {" "}
                                                                Baby Oil{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/baby-powder">
                                                                {" "}
                                                                Baby Powder{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/baby-walkers">
                                                                {" "}
                                                                Baby Walkers{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/baby-diapers">
                                                                {" "}
                                                                Baby Diapers{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/ayurvedic-products">
                                                                {" "}
                                                                Ayurvedic Products{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/amla-powder">
                                                                {" "}
                                                                Amla Powder{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/ayurvedic-oil">
                                                                {" "}
                                                                Ayurvedic Oil{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/ayurvedic-soap">
                                                                {" "}
                                                                Ayurvedic Soap{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/neem-products">
                                                                {" "}
                                                                Neem Products{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/beauty-equipment">
                                                                {" "}
                                                                Beauty Equipment{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/razor-blade">
                                                                {" "}
                                                                Razor Blade{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/tattoo-machine">
                                                                {" "}
                                                                Tattoo Machine{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/plastic-combs">
                                                                {" "}
                                                                Plastic Combs{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/hair-removal-machine">
                                                                {" "}
                                                                Hair Removal Machine{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/body-fragrances">
                                                                {" "}
                                                                Body Fragrance{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/attar">
                                                                {" "}
                                                                Attar{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/deodorants">
                                                                {" "}
                                                                Deodorants{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/perfume-set">
                                                                {" "}
                                                                Perfume Set{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/hair-fragrance">
                                                                {" "}
                                                                Hair Fragrance{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/eye-care-products">
                                                                {" "}
                                                                Eye Care Products{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/contact-lenses">
                                                                {" "}
                                                                Contact Lenses{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/optical-lens">
                                                                {" "}
                                                                Optical Lens{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/safety-goggles">
                                                                {" "}
                                                                Safety Goggles{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/spectacle-frames">
                                                                {" "}
                                                                Spectacle Frames{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/fitness-equipment">
                                                                {" "}
                                                                Fitness Equipment{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/body-massager">
                                                                {" "}
                                                                Body Massager{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/motorized-treadmill">
                                                                {" "}
                                                                Motorized Treadmill{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/morning-walker">
                                                                {" "}
                                                                Morning Walker{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/shoulder-press">
                                                                {" "}
                                                                Shoulder Press{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/pharmaceutical-machinery">
                                                                {" "}
                                                                Pharmaceutical Machinery{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/tablet-press">
                                                                {" "}
                                                                Tablet Press{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/vibro-sifter">
                                                                {" "}
                                                                Vibro Sifter{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/multi-mill">
                                                                {" "}
                                                                Multi Mill{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/octagonal-blender">
                                                                {" "}
                                                                Octagonal Blender{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/medical-equipment-amp-supplies">
                                                                {" "}
                                                                Medical Equipment &amp; Supplies{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/digital-thermometers">
                                                                {" "}
                                                                Digital Thermometers{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/surgical-instruments">
                                                                {" "}
                                                                Surgical Instruments{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/vertical-autoclave">
                                                                {" "}
                                                                Vertical Autoclave{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/x-ray-machine ">
                                                                {" "}
                                                                X Ray Machine{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <a
                                                    href="/"
                                                    className="view-all"
                                                >
                                                    View All Categories in Health &amp; Beauty
                                                </a>
                                            </div>
                                        </div> */}

                    <div className="hover-links">
                      <div className="row">
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Professional Beauty Tools</Link>
                            </li>
                            <li>
                              <Link to="/beautyproductsdealer?search=cosmetic">
                                Durable Plastic Combs
                              </Link>
                            </li>
                            <li>
                              <Link to="/beautyproductsdealer?search=cosmetic">
                                Efficient Hair Removal Devices
                              </Link>
                            </li>
                            <li>
                              <Link to="/">Advanced Tattoo Machines</Link>
                            </li>
                            <li>
                              <Link to="/">Precision Razor Blades</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Luxurious Body Fragrances</Link>
                            </li>
                            <li>
                              <Link to="/beautyproductsdealer?search=cosmetic">
                                Long-Lasting Hair Fragrances
                              </Link>
                            </li>
                            <li>
                              <Link to="/beautyproductsdealer?search=cosmetic">
                                Exclusive Perfume Sets
                              </Link>
                            </li>
                            <li>
                              <Link to="/beautyproductsdealer?search=cosmetic">
                                Refreshing Deodorants
                              </Link>
                            </li>
                            <li>
                              <Link to="/beautyproductsdealer?search=cosmetic">
                                Elegant Attars
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">
                                High-Performance Motorized Treadmills
                              </Link>
                            </li>
                            <li>
                              <Link to="/">Relaxing Body Massagers</Link>
                            </li>
                            <li>
                              <Link to="/">Convenient Morning Walkers</Link>
                            </li>
                            <li>
                              <Link to="/">
                                Versatile Shoulder Press Machines
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                Comprehensive Fitness Equipment
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Robust Vertical Autoclaves</Link>
                            </li>
                            <li>
                              <Link to="/">Precision Surgical Instruments</Link>
                            </li>
                            <li>
                              <Link to="/">Accurate Digital Thermometers</Link>
                            </li>
                            <li>
                              <Link to="/">
                                Essential Medical Equipment &amp; Supplies
                              </Link>
                            </li>
                            <li>
                              <Link to="/">Advanced X-Ray Machines</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">
                                Innovative Pharmaceutical Machinery
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                High-Capacity Octagonal Blenders
                              </Link>
                            </li>
                            <li>
                              <Link to="/">Advanced Multi Mills</Link>
                            </li>
                            <li>
                              <Link to="/">Reliable Vibro Sifters</Link>
                            </li>
                            <li>
                              <Link to="/">
                                Efficient Tablet Press Machines
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Versatile Spectacle Frames</Link>
                            </li>
                            <li>
                              <Link to="/">Protective Safety Goggles</Link>
                            </li>
                            <li>
                              <Link to="/">Precision Optical Lenses</Link>
                            </li>
                            <li>
                              <Link to="/">High-Quality Contact Lenses</Link>
                            </li>
                            <li>
                              <Link to="/beautyproductsdealer?search=cosmetic">
                                Advanced Eye Care Solutions
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/beautyproductsdealer?search=cosmetic">
                                Revitalizing Face Masks
                              </Link>
                            </li>
                            <li>
                              <Link to="/beautyproductsdealer?search=cosmetic">
                                Decorative Bindis
                              </Link>
                            </li>
                            <li>
                              <Link to="/beautyproductsdealer?search=cosmetic">
                                Makeup &amp; Beauty Essentials
                              </Link>
                            </li>
                            <li>
                              <Link to="/beautyproductsdealer?search=cosmetic">
                                Hydrating Rose Water
                              </Link>
                            </li>
                            <li>
                              <Link to="/beautyproductsdealer?search=cosmetic">
                                Premium Hair Extensions
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Comfortable Baby Diapers</Link>
                            </li>
                            <li>
                              <Link to="/">Sturdy Baby Walkers</Link>
                            </li>
                            <li>
                              <Link to="/">Gentle Baby Powder</Link>
                            </li>
                            <li>
                              <Link to="/">Soothing Baby Oil</Link>
                            </li>
                            <li>
                              <Link to="/">Infant Care Essentials</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Purifying Neem Products</Link>
                            </li>
                            <li>
                              <Link to="/">Organic Ayurvedic Soap</Link>
                            </li>
                            <li>
                              <Link to="/">Healing Ayurvedic Oil</Link>
                            </li>
                            <li>
                              <Link to="/">Nourishing Amla Powder</Link>
                            </li>
                            <li>
                              <Link to="/">Holistic Ayurvedic Remedies</Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="text-center">
                        <Link to="/health-beauty" className="view-all">
                          View All Categories in Health &amp; Beauty
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to={"/homeSupplies"}>
                      {" "}
                      <h4>Home Supplies</h4>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </Link>
                    <div className="hover-links">
                      <div className="row">
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Bags & Suitcases</Link>
                            </li>
                            <li>
                              <Link to="/suitcasemanufacturer?search=suitcase">
                                Backpack
                              </Link>
                            </li>
                            <li>
                              <Link to="/suitcasemanufacturer?search=suitcase">
                                Briefcase
                              </Link>
                            </li>
                            <li>
                              <Link to="/suitcasemanufacturer?search=suitcase">
                                School Bags
                              </Link>
                            </li>
                            <li>
                              <Link to="/bagsandbeltdealer?search=Leather%20Bags">
                                Shopping Bags
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Beauty Equipment</Link>
                            </li>
                            <li>
                              <Link to="/beautyproductsdealer?search=cosmetic">
                                Hair Removal Machine
                              </Link>
                            </li>
                            <li>
                              <Link to="/">Razor Blade</Link>
                            </li>
                            <li>
                              <Link to="/">Tattoo Machine</Link>
                            </li>
                            <li>
                              <Link to="/beautyproductsdealer?search=cosmetic">
                                Plastic Combs
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Fitness Equipment</Link>
                            </li>
                            <li>
                              <Link to="/">Body Massager</Link>
                            </li>
                            <li>
                              <Link to="/">Motorized Treadmill</Link>
                            </li>
                            <li>
                              <Link to="/">Morning Walker</Link>
                            </li>
                            <li>
                              <Link to="/">Shoulder Press</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Household Items</Link>
                            </li>
                            <li>
                              <Link to="/">Automatic Dispenser</Link>
                            </li>
                            <li>
                              <Link to="/">Dry Iron</Link>
                            </li>
                            <li>
                              <Link to="/">Geyser</Link>
                            </li>
                            <li>
                              <Link to="/">Hand Blender</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Home Cleaning Products</Link>
                            </li>
                            <li>
                              <Link to="/">Brooms</Link>
                            </li>
                            <li>
                              <Link to="/">Floor Cleaner</Link>
                            </li>
                            <li>
                              <Link to="/">Mops</Link>
                            </li>
                            <li>
                              <Link to="/">Phenyle</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Home Decorations</Link>
                            </li>
                            <li>
                              <Link to="/">Lamp Shades</Link>
                            </li>
                            <li>
                              <Link to="/">Posters</Link>
                            </li>
                            <li>
                              <Link to="/">Table Lamps</Link>
                            </li>
                            <li>
                              <Link to="/">Vases</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Kitchenware</Link>
                            </li>
                            <li>
                              <Link to="/">Bowls</Link>
                            </li>
                            <li>
                              <Link to="/">Cutlery Set</Link>
                            </li>
                            <li>
                              <Link to="/">Kettles</Link>
                            </li>
                            <li>
                              <Link to="/">Water Jugs</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/plastic?search=plastic">
                                Buckets, Mugs & Storage Bins
                              </Link>
                            </li>
                            <li>
                              <Link to="/plastic?search=plastic">Bucket</Link>
                            </li>
                            <li>
                              <Link to="/plastic?search=plastic">Dustbins</Link>
                            </li>
                            <li>
                              <Link to="/plastic?search=plastic">
                                Plastic Basket
                              </Link>
                            </li>
                            <li>
                              <Link to="/plastic?search=plastic">
                                Plastic Mugs
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/rugsandcarpets?search=carpet">
                                Door Mats & Bath Mats
                              </Link>
                            </li>
                            <li>
                              <Link to="/rugsandcarpets?search=carpet">
                                Cotton Mat
                              </Link>
                            </li>
                            <li>
                              <Link to="/rugsandcarpets?search=carpet">
                                Foot Mats
                              </Link>
                            </li>
                            <li>
                              <Link to="/rugsandcarpets?search=carpet">
                                Welcome Mat
                              </Link>
                            </li>
                            <li>
                              <Link to="/rugsandcarpets?search=carpet">
                                Yoga Mat
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Medical Equipment & Supplies</Link>
                            </li>
                            <li>
                              <Link to="/">Digital Thermometers</Link>
                            </li>
                            <li>
                              <Link to="/">Surgical Instruments</Link>
                            </li>
                            <li>
                              <Link to="/">Vertical Autoclave</Link>
                            </li>
                            <li>
                              <Link to="/">X Ray Machine</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Pharmaceutical Machinery</Link>
                            </li>
                            <li>
                              <Link to="/">Multi Mill</Link>
                            </li>
                            <li>
                              <Link to="/">Octagonal Blender</Link>
                            </li>
                            <li>
                              <Link to="/">Tablet Press</Link>
                            </li>
                            <li>
                              <Link to="/">Vibro Sifter</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Tableware</Link>
                            </li>
                            <li>
                              <Link to="/">Coasters</Link>
                            </li>
                            <li>
                              <Link to="/">Dinner Sets</Link>
                            </li>
                            <li>
                              <Link to="/">Glass Sheets</Link>
                            </li>
                            <li>
                              <Link to="/">Napkin Rings</Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="text-center">
                        <Link to="/homeSupplies" className="view-all">
                          View All Categories in Home Supply
                        </Link>
                      </div>
                    </div>
                  </li>
                  {/* <li>
                    <Link to={"/homeSupplies"}>
                      {" "}
                      <h4>Home Supplies</h4>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </Link>
                    <div className="hover-links">
                      <div className="row">
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Bags & Suitcases</Link>
                            </li>
                            <li>
                              <Link to="/suitcasemanufacturer?search=suitcase">
                                Backpack
                              </Link>
                            </li>
                            <li>
                              <Link to="/suitcasemanufacturer?search=suitcase">
                                Briefcase
                              </Link>
                            </li>
                            <li>
                              <Link to="/suitcasemanufacturer?search=suitcase">
                                School Bags
                              </Link>
                            </li>
                            <li>
                              <Link to="/bagsandbeltdealer?search=Leather%20Bags">
                                Shopping Bags
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Beauty Equipment</Link>
                            </li>
                            <li>
                              <Link to="/beautyproductsdealer?search=cosmetic">
                                Hair Removal Machine
                              </Link>
                            </li>
                            <li>
                              <Link to="/">Razor Blade</Link>
                            </li>
                            <li>
                              <Link to="/">Tattoo Machine</Link>
                            </li>
                            <li>
                              <Link to="/beautyproductsdealer?search=cosmetic">
                                Plastic Combs
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Fitness Equipment</Link>
                            </li>
                            <li>
                              <Link to="/">Body Massager</Link>
                            </li>
                            <li>
                              <Link to="/">Motorized Treadmill</Link>
                            </li>
                            <li>
                              <Link to="/">Morning Walker</Link>
                            </li>
                            <li>
                              <Link to="/">Shoulder Press</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Household Items</Link>
                            </li>
                            <li>
                              <Link to="/">Automatic Dispenser</Link>
                            </li>
                            <li>
                              <Link to="/">Dry Iron</Link>
                            </li>
                            <li>
                              <Link to="/">Geyser</Link>
                            </li>
                            <li>
                              <Link to="/">Hand Blender</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Home Cleaning Products</Link>
                            </li>
                            <li>
                              <Link to="/">Brooms</Link>
                            </li>
                            <li>
                              <Link to="/">Floor Cleaner</Link>
                            </li>
                            <li>
                              <Link to="/">Mops</Link>
                            </li>
                            <li>
                              <Link to="/">Phenyle</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Home Decorations</Link>
                            </li>
                            <li>
                              <Link to="/">Lamp Shades</Link>
                            </li>
                            <li>
                              <Link to="/">Posters</Link>
                            </li>
                            <li>
                              <Link to="/">Table Lamps</Link>
                            </li>
                            <li>
                              <Link to="/">Vases</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Kitchenware</Link>
                            </li>
                            <li>
                              <Link to="/">Bowls</Link>
                            </li>
                            <li>
                              <Link to="/">Cutlery Set</Link>
                            </li>
                            <li>
                              <Link to="/">Kettles</Link>
                            </li>
                            <li>
                              <Link to="/">Water Jugs</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/plastic?search=plastic">
                                Buckets, Mugs & Storage Bins
                              </Link>
                            </li>
                            <li>
                              <Link to="/plastic?search=plastic">Bucket</Link>
                            </li>
                            <li>
                              <Link to="/plastic?search=plastic">Dustbins</Link>
                            </li>
                            <li>
                              <Link to="/plastic?search=plastic">
                                Plastic Basket
                              </Link>
                            </li>
                            <li>
                              <Link to="/plastic?search=plastic">
                                Plastic Mugs
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/rugsandcarpets?search=carpet">
                                Door Mats & Bath Mats
                              </Link>
                            </li>
                            <li>
                              <Link to="/rugsandcarpets?search=carpet">
                                Cotton Mat
                              </Link>
                            </li>
                            <li>
                              <Link to="/rugsandcarpets?search=carpet">
                                Foot Mats
                              </Link>
                            </li>
                            <li>
                              <Link to="/rugsandcarpets?search=carpet">
                                Welcome Mat
                              </Link>
                            </li>
                            <li>
                              <Link to="/rugsandcarpets?search=carpet">
                                Yoga Mat
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Medical Equipment & Supplies</Link>
                            </li>
                            <li>
                              <Link to="/">Digital Thermometers</Link>
                            </li>
                            <li>
                              <Link to="/">Surgical Instruments</Link>
                            </li>
                            <li>
                              <Link to="/">Vertical Autoclave</Link>
                            </li>
                            <li>
                              <Link to="/">X Ray Machine</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Pharmaceutical Machinery</Link>
                            </li>
                            <li>
                              <Link to="/">Multi Mill</Link>
                            </li>
                            <li>
                              <Link to="/">Octagonal Blender</Link>
                            </li>
                            <li>
                              <Link to="/">Tablet Press</Link>
                            </li>
                            <li>
                              <Link to="/">Vibro Sifter</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Tableware</Link>
                            </li>
                            <li>
                              <Link to="/">Coasters</Link>
                            </li>
                            <li>
                              <Link to="/">Dinner Sets</Link>
                            </li>
                            <li>
                              <Link to="/">Glass Sheets</Link>
                            </li>
                            <li>
                              <Link to="/">Napkin Rings</Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="text-center">
                        <Link to="/homeSupplies" className="view-all">
                          View All Categories in Home Supply
                        </Link>
                      </div>
                    </div>
                  </li> */}
                  <li>
                    <Link to={"/industrial-machinery"}>
                      <h4> Industrial Machinery </h4>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </Link>
                  </li>
                  <div className="hover-links">
                    <div className="row">
                      <div className="col-4">
                        <ul>
                          <li>
                            <Link to="#">Agricultural Machines & Plant</Link>
                          </li>
                          <li>
                            <Link to="#">Machine Parts</Link>
                          </li>
                          <li>
                            <Link to="#">Tiller Blades</Link>
                          </li>
                          <li>
                            <Link to="#">Mist Sprayers</Link>
                          </li>
                          <li>
                            <Link to="#">Trigger Sprayers</Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-4">
                        <ul>
                          <li>
                            <Link to="#">Bakery & Dairy Machinery</Link>
                          </li>
                          <li>
                            <Link to="#">Biscuit Machines</Link>
                          </li>
                          <li>
                            <Link to="#">Pizza Oven</Link>
                          </li>
                          <li>
                            <Link to="#">Rotary Rack Oven</Link>
                          </li>
                          <li>
                            <Link to="#">Kneading Machines</Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-4">
                        <ul>
                          <li>
                            <Link to="#">Boilers & Furnace</Link>
                          </li>
                          <li>
                            <Link to="#">Heat Exchangers</Link>
                          </li>
                          <li>
                            <Link to="#">Steam Boilers</Link>
                          </li>
                          <li>
                            <Link to="#">Industrial Burners</Link>
                          </li>
                          <li>
                            <Link to="#">Gas Burners</Link>
                          </li>
                        </ul>
                      </div>

                      <div className="text-center">
                        <Link className="view-all" to="#">
                          View All Categories in Industrial Machinery
                        </Link>
                      </div>
                    </div>
                  </div>
                  <li>
                    <Link to={"/industrySupplies"}>
                      <h4> Industrial Supplies </h4>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </Link>

                    <div className="hover-links">
                      <div className="row">
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/hardwarestore?search=bolt">
                                Universal Fasteners
                              </Link>
                            </li>
                            <li>
                              <Link to="/hardwarestore?search=bolt">
                                Threaded Screws
                              </Link>
                            </li>
                            <li>
                              <Link to="/hardwarestore?search=bolt">
                                Flanged Bolts
                              </Link>
                            </li>
                            <li>
                              <Link to="/hardwarestore?search=bolt">
                                Coupling Connectors
                              </Link>
                            </li>
                            <li>
                              <Link to="/hardwarestore?search=bolt">
                                Anchor Bolts
                              </Link>
                            </li>
                          </ul>
                        </div>

                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Rubber Rollers</Link>
                            </li>
                            <li>
                              <Link to="/">Rubber Sheets</Link>
                            </li>
                            <li>
                              <Link to="/">Rubber Lining</Link>
                            </li>
                            <li>
                              <Link to="/">Rubber Belts</Link>
                            </li>
                            <li>
                              <Link to="/">Anti-Vibration Belts</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Programmable Controllers</Link>
                            </li>
                            <li>
                              <Link to="/">Pressure Measuring Devices</Link>
                            </li>
                            <li>
                              <Link to="/">Precision Scales</Link>
                            </li>
                            <li>
                              <Link to="/">Industrial Gauges</Link>
                            </li>
                            <li>
                              <Link to="/">Digital Flow Meters</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Used Industrial Cranes</Link>
                            </li>
                            <li>
                              <Link to="/">Mobile Cranes</Link>
                            </li>
                            <li>
                              <Link to="/">Industrial Conveyors</Link>
                            </li>
                            <li>
                              <Link to="/">Heavy-Duty Trolleys</Link>
                            </li>
                            <li>
                              <Link to="/">Automatic Jacks</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Precision Abrasives</Link>
                            </li>
                            <li>
                              <Link to="/">Mounting Brackets</Link>
                            </li>
                            <li>
                              <Link to="/">Heavy-Duty Ropes</Link>
                            </li>
                            <li>
                              <Link to="/">Diamond Cutting Tools</Link>
                            </li>
                            <li>
                              <Link to="/">Abrasive Tools</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Pressure Regulating Filters</Link>
                            </li>
                            <li>
                              <Link to="/">Mechanical Filters</Link>
                            </li>
                            <li>
                              <Link to="/">Hydraulic Oil Filters</Link>
                            </li>
                            <li>
                              <Link to="/">Industrial Cloth Filters</Link>
                            </li>
                            <li>
                              <Link to="/">Cartridge Filters</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Renewable Energy Turbines</Link>
                            </li>
                            <li>
                              <Link to="/">Portable Generators</Link>
                            </li>
                            <li>
                              <Link to="/">Power Generator</Link>
                            </li>
                            <li>
                              <Link to="/">Diesel Power Engines</Link>
                            </li>
                            <li>
                              <Link to="/">Commercial Generators</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Waterproof Tapes</Link>
                            </li>
                            <li>
                              <Link to="/">Thickening Agents</Link>
                            </li>
                            <li>
                              <Link to="/">Packaging Tapes</Link>
                            </li>
                            <li>
                              <Link to="/">Industrial Sealants</Link>
                            </li>
                            <li>
                              <Link to="/">Construction Adhesives</Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="text-center">
                        <Link className="view-all" to="/industrySupplies">
                          View All Categories in Industrial Supplies
                        </Link>
                      </div>
                    </div>
                  </li>
                  {/* <li>
                    <Link to={"/industrial-machinery"}>
                      <h4> Industrial machinery </h4>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </Link>
                  </li> */}

                  <li>
                    {/* <a href="/industry/tools-equipment">
                                            <h4>Tools &amp; Equipment </h4>{" "}
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </a> */}
                    <Link to={"/toolsequipment"}>
                      {" "}
                      <h4>Tools &amp; Equipment </h4>{" "}
                      <FontAwesomeIcon icon={faAngleRight} />
                    </Link>
                    {/* <div className="hover-links">
                                            <div className="row">
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/hand-tools">
                                                                {" "}
                                                                Hand Tools{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/hand-saws">
                                                                {" "}
                                                                Hand Saws{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/t-wrenches">
                                                                {" "}
                                                                T Wrenches{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/power-tools">
                                                                {" "}
                                                                Power Tools{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/four-way-spanner">
                                                                {" "}
                                                                Four Way Spanner{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/molds-and-dies">
                                                                {" "}
                                                                Molds and Dies{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/pvc-moulds">
                                                                {" "}
                                                                PVC Moulds{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/blow-molds">
                                                                {" "}
                                                                Blow Molds{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/cutting-dies">
                                                                {" "}
                                                                Cutting Dies{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/die-casting-dies">
                                                                {" "}
                                                                Die Casting Dies{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/testing-equipment">
                                                                {" "}
                                                                Testing Equipment{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/moisture-meter">
                                                                {" "}
                                                                Moisture Meter{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/hardness-tester">
                                                                {" "}
                                                                Hardness Tester{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/insulation-tester">
                                                                {" "}
                                                                Insulation Tester{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/sound-level-meters">
                                                                {" "}
                                                                Sound Level Meters{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/cutting-tools">
                                                                {" "}
                                                                Cutting Tools{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/saw-blades">
                                                                {" "}
                                                                Saw Blades{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/concrete-saw">
                                                                {" "}
                                                                Concrete Saw{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/circular-blade">
                                                                {" "}
                                                                Circular Blade{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/carbide-tools">
                                                                {" "}
                                                                Carbide Tools{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/heat-treating-equipment">
                                                                {" "}
                                                                Heat Treating Equipment{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/hot-plates">
                                                                {" "}
                                                                Hot Plates{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/autoclaves">
                                                                {" "}
                                                                Autoclaves{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/rotary-dryers">
                                                                {" "}
                                                                Rotary Dryers{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/cartridge-heaters">
                                                                {" "}
                                                                Cartridge Heaters{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/welding-equipment">
                                                                {" "}
                                                                Welding Equipment{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/solder">
                                                                {" "}
                                                                Solder{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/welding-rectifier">
                                                                {" "}
                                                                Welding Rectifier{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/welding-electrodes">
                                                                {" "}
                                                                Welding Electrodes{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/tig-welding-machine">
                                                                {" "}
                                                                TIG Welding Machine{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/machine-tools">
                                                                {" "}
                                                                Machine Tools{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/spindles">
                                                                {" "}
                                                                Spindles{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/expansion-joints">
                                                                {" "}
                                                                Expansion Joints{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/shearing-machines">
                                                                {" "}
                                                                Shearing Machines{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/in-well-drilling-rig">
                                                                {" "}
                                                                In Well Drilling Rig{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/laboratory-equipment">
                                                                {" "}
                                                                Laboratory Equipment{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/ph-meter">
                                                                {" "}
                                                                PH Meter{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/micrometer">
                                                                {" "}
                                                                Micrometer{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/laboratory-glassware">
                                                                {" "}
                                                                Laboratory Glassware{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/binocular-microscope">
                                                                {" "}
                                                                Binocular Microscope{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/fluid-handling-equipment">
                                                                {" "}
                                                                Fluid Handling Equipment{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/c-ring">
                                                                {" "}
                                                                C Rings{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/check-valves">
                                                                {" "}
                                                                Check Valves{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/gate-valves">
                                                                {" "}
                                                                Gate Valves{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/submersible-pumps ">
                                                                {" "}
                                                                Submersible Pumps{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <a
                                                    href="/"
                                                    className="view-all"
                                                >
                                                    View All Categories in Tools &amp; Equipment
                                                </a>
                                            </div>
                                        </div> */}

                    <div className="hover-links">
                      <div className="row">
                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Welding Rectifiers</Link>
                            </li>
                            <li>
                              <Link to="/">Welding Electrodes</Link>
                            </li>
                            <li>
                              <Link to="/">TIG Welding Machines</Link>
                            </li>
                            <li>
                              <Link to="/">Soldering Supplies</Link>
                            </li>
                            <li>
                              <Link to="/">Welding Equipment</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Sound Measurement Instruments</Link>
                            </li>
                            <li>
                              <Link to="/">Moisture Analysis Devices</Link>
                            </li>
                            <li>
                              <Link to="/">Insulation Testers</Link>
                            </li>
                            <li>
                              <Link to="/">Hardness Measurement Tools</Link>
                            </li>
                            <li>
                              <Link to="/">Testing Equipment</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">T-Wrenches</Link>
                            </li>
                            <li>
                              <Link to="/">Power Tools</Link>
                            </li>
                            <li>
                              <Link to="/">Hand Saws</Link>
                            </li>
                            <li>
                              <Link to="/">Hand Tools</Link>
                            </li>
                            <li>
                              <Link to="/">Four-Way Spanners</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Die Casting Molds</Link>
                            </li>
                            <li>
                              <Link to="/">Cutting Dies</Link>
                            </li>
                            <li>
                              <Link to="/">Blow Molds</Link>
                            </li>
                            <li>
                              <Link to="/">PVC Molds</Link>
                            </li>
                            <li>
                              <Link to="/">Molds and Dies</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Spindles</Link>
                            </li>
                            <li>
                              <Link to="/">Shearing Machines</Link>
                            </li>
                            <li>
                              <Link to="/">In-Well Drilling Rigs</Link>
                            </li>
                            <li>
                              <Link to="/">Expansion Joints</Link>
                            </li>
                            <li>
                              <Link to="/">Machine Tools</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">PH Meters</Link>
                            </li>
                            <li>
                              <Link to="/">Micrometers</Link>
                            </li>
                            <li>
                              <Link to="/">Laboratory Glassware</Link>
                            </li>
                            <li>
                              <Link to="/">Binocular Microscopes</Link>
                            </li>
                            <li>
                              <Link to="/">Laboratory Equipment</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Rotary Dryers</Link>
                            </li>
                            <li>
                              <Link to="/">Hot Plates</Link>
                            </li>
                            <li>
                              <Link to="/">Heat Treating Equipment</Link>
                            </li>
                            <li>
                              <Link to="/">Cartridge Heaters</Link>
                            </li>
                            <li>
                              <Link to="/">Autoclaves</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Submersible Pump Systems</Link>
                            </li>
                            <li>
                              <Link to="/">Gate Valves</Link>
                            </li>
                            <li>
                              <Link to="/">Check Valves</Link>
                            </li>
                            <li>
                              <Link to="/">C-Rings</Link>
                            </li>
                            <li>
                              <Link to="/">Fluid Handling Equipment</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="col-4">
                          <ul>
                            <li>
                              <Link to="/">Saw Blades</Link>
                            </li>
                            <li>
                              <Link to="/">Circular Blades</Link>
                            </li>
                            <li>
                              <Link to="/">Concrete Saws</Link>
                            </li>
                            <li>
                              <Link to="/">Carbide Tools</Link>
                            </li>
                            <li>
                              <Link to="/">Cutting Tools</Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="text-center">
                        <Link to="/toolsequipment" className="view-all">
                          View All Categories in Tools &amp; Equipment
                        </Link>
                      </div>
                    </div>
                  </li>
                  {/* <li>
                                        <a
                                            href="companies"
                                            className="all-catg"
                                        >
                                            <h4>All Categories</h4>
                                        </a>
                                    </li> */}
                  <li>
                    {/* <a href="/industry/furniture">
                                            <h4>Furniture</h4>{" "}
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </a> */}
                    {/* <Link to={'/best-furniture-suppliers-in-india?search=furniture'}>
                                            <h4>Furniture</h4>{" "}
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </Link>
                                        <div className="hover-links">
                                            <div className="row">
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/antique-furniture">
                                                                {" "}
                                                                Antique Furniture{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/arm-chairs">
                                                                {" "}
                                                                Arm Chairs{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/antique-tables">
                                                                {" "}
                                                                Antique Tables{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/antique-cabinets">
                                                                {" "}
                                                                Antique Cabinets{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/antique-almirah">
                                                                {" "}
                                                                Antique Almirah{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/wood-furniture">
                                                                {" "}
                                                                Wood Furniture{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/wooden-sofa">
                                                                {" "}
                                                                Wooden Sofa{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/wooden-almirah">
                                                                {" "}
                                                                Wooden Almirah{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/wooden-wine-rack">
                                                                {" "}
                                                                Wooden Wine Rack{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/wooden-dining-table">
                                                                {" "}
                                                                Wooden Dining Table{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/market/wood-furniture">
                                                                {" "}
                                                                Metal Furniture{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/steel-chair">
                                                                {" "}
                                                                Steel Chair{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/brass-stand">
                                                                {" "}
                                                                Brass Stand{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/iron-table">
                                                                {" "}
                                                                Iron Table{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/iron-furniture">
                                                                {" "}
                                                                Iron Furniture{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Commercial Use Furniture{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/executive-table">
                                                                {" "}
                                                                Executive Table{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/revolving-chairs">
                                                                {" "}
                                                                Revolving Chairs{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/computer-chair">
                                                                {" "}
                                                                Computer Chair{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/drawer-cabinets">
                                                                {" "}
                                                                Drawer Cabinets{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Plastic Furniture{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/plastic-chairs">
                                                                {" "}
                                                                Plastic Chairs{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/plastic-stool">
                                                                {" "}
                                                                Plastic Stool{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/plastic-tables">
                                                                {" "}
                                                                Plastic Tables{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/plastic-rack">
                                                                {" "}
                                                                Plastic Rack{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Home Furniture{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/recliner">
                                                                {" "}
                                                                Recliner{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/designer-sofa-set">
                                                                {" "}
                                                                Designer Sofa Set{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/designer-chair">
                                                                {" "}
                                                                Designer Chair{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/kitchen-cabinets">
                                                                {" "}
                                                                Kitchen Cabinets{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Institutional &amp; Hospital Furniture{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                I V Stand{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                School Furniture{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/operating-table">
                                                                {" "}
                                                                Operating Table{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/laboratory-furniture">
                                                                {" "}
                                                                Laboratory Furniture{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Retail Displays &amp; Fixtures{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Supermarket Rack{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Letter Boards{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Display Box{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Glass Shelves{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-4">
                                                    <ul>
                                                        <li>
                                                            <a href="/">
                                                                {" "}
                                                                Furniture Accessories{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/armrest">
                                                                {" "}
                                                                Armrest{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/stretcher">
                                                                {" "}
                                                                Stretcher{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/chair-base">
                                                                {" "}
                                                                Chair Base{" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/drawer-slides">
                                                                {" "}
                                                                Drawer Slides{" "}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                               
                                                <Link className="view" to={'/best-furniture-suppliers-in-india?search=furniture'}>     View All Categories in Home Supplies{" "}</Link>
                                            </div>
                                        </div> */}
                  </li>
                </ul>
              </div>
            </li>
            <li className="item">
              {/* <a
                                href="agriculture-farm-tools-suppliers"
                                className="nav-item"
                            >
                                agriculture-farm-tools-suppliers
                            </a> */}
              <Link className="nav-item" to={"/homeSupplies"}>
                Home and Supplies
              </Link>
              <div className="submenu" style={{ display: "none" }}>
                <div className="container">
                  <ul className="submenu-wrap">
                    <li>
                      <Link
                        to="/suitcasemanufacturer?search=bags"
                        className="title"
                      >
                        Bags &amp; Suitcase
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/suitcasemanufacturer?search=bags">
                            Travel Bags
                          </Link>
                        </li>
                        <li>
                          <Link to="/suitcasemanufacturer?search=bags">
                            Carry Bags
                          </Link>
                        </li>
                        <li>
                          <Link to="/suitcasemanufacturer?search=bags">
                            Cotton Bags
                          </Link>
                        </li>
                        <li>
                          <Link to="/bagsandbeltdealer?search=Leather%20Bags">
                            Ladies Bags
                          </Link>
                        </li>
                        <li>
                          <Link to="/suitcasemanufacturer?search=bags">
                            Shopping Bags
                          </Link>
                        </li>
                        <li>
                          <Link to="/suitcasemanufacturer?search=bags">
                            Suitcase
                          </Link>
                        </li>
                        <li>
                          <Link to="/bagsandbeltdealer?search=Leather%20Bags">
                            Leather Suitcase
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/steel/utensils?search=plate" className="title">
                        Kitchenware
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/steel/utensils?search=plate">Blender</Link>
                        </li>
                        <li>
                          <Link to="/steel/utensils?search=plate">
                            Mixer Grinder
                          </Link>
                        </li>
                        <li>
                          <Link to="/steel/utensils?search=plate">Plates</Link>
                        </li>
                        <li>
                          <Link to="/steel/utensils?search=plate">Bowls</Link>
                        </li>
                        <li>
                          <Link to="/steel/utensils?search=plate">Pans</Link>
                        </li>
                        <li>
                          <Link to="/steel/utensils?search=plate">Trays</Link>
                        </li>
                        <li>
                          <Link to="/steel/utensils?search=plate">
                            Cutlery Set
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/homeSupplies" className="title">
                        Home Decorations
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/arts?search=statues">Statues</Link>
                        </li>
                        <li>
                          <Link to="/homeSupplies">Flower Vases</Link>
                        </li>
                        <li>
                          <Link to="/homeSupplies">Lamp Shades</Link>
                        </li>
                        <li>
                          <Link to="/arts?search=statues">Posters</Link>
                        </li>
                        <li>
                          <Link to="/homeSupplies">Key Hanger</Link>
                        </li>
                        <li>
                          <Link to="/homeSupplies">Flower Stand</Link>
                        </li>
                        <li>
                          <Link to="/homeSupplies">Lamp Stands</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/homeSupplies" className="title">
                        Home Cleaning Products
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/homeSupplies">Brooms</Link>
                        </li>
                        <li>
                          <Link to="/homeSupplies">Sponges</Link>
                        </li>
                        <li>
                          <Link to="/homeSupplies">Mops</Link>
                        </li>
                        <li>
                          <Link to="/homeSupplies">Toilet Cleaners</Link>
                        </li>
                        <li>
                          <Link to="/homeSupplies">Glass Cleaner</Link>
                        </li>
                        <li>
                          <Link to="/homeSupplies">Garbage Bags</Link>
                        </li>
                        <li>
                          <Link to="/homeSupplies">Floor Cleaner</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/detergent?search=detergent" className="title">
                        Soaps &amp; Detergents
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/detergent?search=detergent">
                            Detergent Powder
                          </Link>
                        </li>
                        <li>
                          <Link to="/detergent?search=detergent">
                            Washing Powder
                          </Link>
                        </li>
                        <li>
                          <Link to="/detergent?search=detergent">
                            Detergent Cake
                          </Link>
                        </li>
                        <li>
                          <Link to="/detergent?search=detergent">
                            Liquid Hand Wash
                          </Link>
                        </li>
                        <li>
                          <Link to="/detergent?search=detergent">
                            Handmade Soap
                          </Link>
                        </li>
                        <li>
                          <Link to="/detergent?search=detergent">
                            Herbal Soaps
                          </Link>
                        </li>
                        <li>
                          <Link to="/detergent?search=detergent">
                            Neem Soap
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="text-center">
                    <Link to="/homeSupplies" className="view view-main">
                      View All Categories in Home Supplies{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="item">
              <Link
                className="nav-item"
                to={
                  "seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers"
                }
              >
                Food Products & Beverage
              </Link>
              <div className="submenu" style={{ display: "none" }}>
                <div className="container">
                  <ul className="submenu-wrap">
                    <li>
                      <Link
                        to="/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers"
                        className="title"
                      >
                        Beverages
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers">
                            Juice
                          </Link>
                        </li>
                        <li>
                          <Link to="/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers">
                            Mineral Water
                          </Link>
                        </li>
                        <li>
                          <Link to="/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers">
                            Beer
                          </Link>
                        </li>
                        <li>
                          <Link to="/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers">
                            Shakes
                          </Link>
                        </li>
                        <li>
                          <Link to="/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers">
                            Amla Juice
                          </Link>
                        </li>
                        <li>
                          <Link to="/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers">
                            Mango Juice
                          </Link>
                        </li>
                        <li>
                          <Link to="/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers">
                            Health Drinks
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        to="/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers"
                        className="title"
                      >
                        Food Additives
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers">
                            Guar Gum
                          </Link>
                        </li>
                        <li>
                          <Link to="/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers">
                            Ice Cream Powders
                          </Link>
                        </li>
                        <li>
                          <Link to="/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers">
                            Citric Acid
                          </Link>
                        </li>
                        <li>
                          <Link to="/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers">
                            Food Flavour
                          </Link>
                        </li>
                        <li>
                          <Link to="/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers">
                            Vinegar
                          </Link>
                        </li>
                        <li>
                          <Link to="/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers">
                            Food Colors
                          </Link>
                        </li>
                        <li>
                          <Link to="/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers">
                            Camphor
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="spices/dealers?search=spices" className="title">
                        Spices
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/spices/dealers?search=spices">
                            Turmeric
                          </Link>
                        </li>
                        <li>
                          <Link to="spices/dealers?search=spices">Pepper</Link>
                        </li>
                        <li>
                          <Link to="spices/dealers?search=spices">
                            Coriander
                          </Link>
                        </li>
                        <li>
                          <Link to="/spices/dealers?search=spices">
                            Cardamom
                          </Link>
                        </li>
                        <li>
                          <Link to="spices/dealers?search=spices">
                            Black Pepper
                          </Link>
                        </li>
                        <li>
                          <Link to="spices/dealers?search=spices">
                            Red Chilli
                          </Link>
                        </li>
                        <li>
                          <Link to="spices/dealers?search=spices">
                            Tamarind
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        to="/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers"
                        className="title"
                      >
                        Edible Oils
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers">
                            Refined Oil
                          </Link>
                        </li>
                        <li>
                          <Link to="/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers">
                            Seed Oil
                          </Link>
                        </li>
                        <li>
                          <Link to="/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers">
                            Sunflower Oil
                          </Link>
                        </li>
                        <li>
                          <Link to="/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers">
                            Coconut Oil
                          </Link>
                        </li>
                        <li>
                          <Link to="/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers">
                            Olive Oil
                          </Link>
                        </li>
                        <li>
                          <Link to="/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers">
                            Neem Oil
                          </Link>
                        </li>
                        <li>
                          <Link to="/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers">
                            Mustard Oil
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/dryfruitsmanu?search=dry" className="title">
                        Dry Fruits &amp; Nuts
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/dryfruitsmanu?search=drys">Dates</Link>
                        </li>
                        <li>
                          <Link to="/dryfruitsmanu?search=dry">Almond</Link>
                        </li>
                        <li>
                          <Link to="/dryfruitsmanu?search=dry">
                            Cashew Nuts
                          </Link>
                        </li>
                        <li>
                          <Link to="/dryfruitsmanu?search=dry">Walnuts</Link>
                        </li>
                        <li>
                          <Link to="/dryfruitsmanu?search=dry">Groundnut</Link>
                        </li>
                        <li>
                          <Link to="/dryfruitsmanu?search=dry">Peanut</Link>
                        </li>
                        <li>
                          <Link to="/dryfruitsmanu?search=dry">Raisins</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="text-center">
                    <Link
                      className="view view-main"
                      to={
                        "/seafood-spices-beverages-dairy-products-snacks-confectionery-nuts-seeds-suppliers"
                      }
                    >
                      View All Categories in Food Products &amp; Beverage
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="item">
              {/* <a
                                href="chemicals"
                                className="nav-item"
                            >
                                Chemicals
                            </a> */}
              <Link className="nav-item" to={"/toolsequipment"}>
                Equipments
              </Link>
              <div className="submenu" style={{ display: "none" }}>
                <div className="container">
                  <ul className="submenu-wrap">
                    <li>
                      <Link to="/toolsequipment" className="title">
                        Nuts, Bolts, Screws &amp; Fasteners
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/toolsequipment">Screws</Link>
                        </li>
                        <li>
                          <Link to="/toolsequipment">Nuts</Link>
                        </li>
                        <li>
                          <Link to="/toolsequipment">Bolts</Link>
                        </li>
                        <li>
                          <Link to="/toolsequipment">U Bolts</Link>
                        </li>
                        <li>
                          <Link to="/toolsequipment">Washers</Link>
                        </li>
                        <li>
                          <Link to="/toolsequipment">Connectors</Link>
                        </li>
                        <li>
                          <Link to="/toolsequipment">Rivets</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/toolsequipment" className="title">
                        Adhesives &amp; Sealants
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/toolsequipment">Tapes</Link>
                        </li>
                        <li>
                          <Link to="/toolsequipment">Self Adhesives</Link>
                        </li>
                        <li>
                          <Link to="/toolsequipment">Bopp Tapes</Link>
                        </li>
                        <li>
                          <Link to="/toolsequipment">Sealants</Link>
                        </li>
                        <li>
                          <Link to="/toolsequipment">Elastic Tapes</Link>
                        </li>
                        <li>
                          <Link to="/toolsequipment">Tile Adhesives</Link>
                        </li>
                        <li>
                          <Link to="/toolsequipment">Admixtures</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/toolsequipment" className="title">
                        Industrial Chains &amp; Belts
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/toolsequipment">Conveyor Belts</Link>
                        </li>
                        <li>
                          <Link to="/toolsequipment">Sprockets</Link>
                        </li>
                        <li>
                          <Link to="/toolsequipment">Chain Blocks</Link>
                        </li>
                        <li>
                          <Link to="/toolsequipment">Industrial Rollers</Link>
                        </li>
                        <li>
                          <Link to="/toolsequipment">Worm Wheel</Link>
                        </li>
                        <li>
                          <Link to="/toolsequipment">Transmission Belts</Link>
                        </li>
                        <li>
                          <Link to="/toolsequipment">Augers</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/toolsequipment" className="title">
                        Measurement Instruments
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/toolsequipment">Flow Meter</Link>
                        </li>
                        <li>
                          <Link to="/toolsequipment">Weighing Scale</Link>
                        </li>
                        <li>
                          <Link to="/toolsequipment">Pressure Gauges</Link>
                        </li>
                        <li>
                          <Link to="/toolsequipment">Digital Controller</Link>
                        </li>
                        <li>
                          <Link to="/toolsequipment">Sensors</Link>
                        </li>
                        <li>
                          <Link to="/toolsequipment">Regulators</Link>
                        </li>
                        <li>
                          <Link to="/toolsequipment">Thermocouple</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/toolsequipment" className="title">
                        Pumps
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/toolsequipment">Water Pumps</Link>
                        </li>
                        <li>
                          <Link to="/toolsequipment">Centrifugal Pumps</Link>
                        </li>
                        <li>
                          <Link to="/toolsequipment">Vacuum Pumps</Link>
                        </li>
                        <li>
                          <Link to="/toolsequipment">Diesel Pumps</Link>
                        </li>
                        <li>
                          <Link to="/toolsequipment">Gear Pump</Link>
                        </li>
                        <li>
                          <Link to="/toolsequipment">Hydraulic Pumps</Link>
                        </li>
                        <li>
                          <Link to="/toolsequipment">Oil Pump</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="text-center">
                    <Link to="/toolsequipment" className="view">
                      View All Categories in Industrial Supplies
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="item">
              <Link className="nav-item" to={"gifts-items"}>
                Gifts & Items
              </Link>
              <div className="submenu" style={{ display: "none" }}>
                {/* <div className="container">
                                    <ul className="submenu-wrap">
                                        <li>
                                            <a
                                                href="/"
                                                className="title"
                                            >
                                                Electric Fans
                                            </a>
                                            <ul className="sublinks">
                                                <li>
                                                    <a href="/">
                                                        Electric Fans
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        Ceiling Fans
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        Exhaust Fans
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        Table Fans
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        Pedestal Fan
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        Wall Fan
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        Axial Fans
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                className="title"
                                            >
                                                Cable &amp; Wire
                                            </a>
                                            <ul className="sublinks">
                                                <li>
                                                    <a href="/">
                                                        Copper Wires
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        Cable Gland
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/galvanized-wire">
                                                        Galvanized Wire
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/barbed-wire">
                                                        Barbed Wire
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/power-cables">
                                                        Power Cables
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/pvc-cables">
                                                        PVC Cables
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/brass-cables">
                                                        Brass Cables
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                className="title"
                                            >
                                                Consumer Electronics
                                            </a>
                                            <ul className="sublinks">
                                                <li>
                                                    <a href="/led-tv">
                                                        LED TV
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/air-conditioners">
                                                        Air Conditioners
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/refrigerator">
                                                        Refrigerator
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/cameras">
                                                        Cameras
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/heaters">
                                                        Heaters
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/speakers">
                                                        Speakers
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/air-coolers">
                                                        Air Coolers
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                className="title"
                                            >
                                                Lamps and Lighting Fixtures
                                            </a>
                                            <ul className="sublinks">
                                                <li>
                                                    <a href="/led-bulb">
                                                        Led Bulb
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/emergency-light">
                                                        Emergency Light
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/garden-lamp">
                                                        Garden Lamp
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/fog-lamp">
                                                        Fog Lamp
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/security-lights">
                                                        Security Lights
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/fluorescent-lights">
                                                        Fluorescent Lights
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/energy-saving-lamp">
                                                        Energy Saving Lamp
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                className="title"
                                            >
                                                Switches, Sockets &amp; Relays
                                            </a>
                                            <ul className="sublinks">
                                                <li>
                                                    <a href="/sockets">
                                                        Sockets
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/relays">
                                                        Relays
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/condensers">
                                                        Condensers
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/electrical-switches">
                                                        Electrical Switches
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/rotary-switches">
                                                        Rotary Switches
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/control-panels">
                                                        Control Panels
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/plc-panel">
                                                        PLC Panel
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="text-center">
                                        <a
                                            href="industry/electronics-electrical"
                                            className="view"
                                        >
                                            View All Categories in Electronics &amp; Electrical{" "}
                                            {" "}
                                        </a>
                                    </div>
                                </div> */}
                <div className="container">
                  <ul className="submenu-wrap">
                    <li>
                      <Link to="/toysupplier?search=toys" className="title">
                        Toys
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/toysupplier?search=toys">
                            Action Figures
                          </Link>
                        </li>
                        <li>
                          <Link to="/toysupplier?search=toys">Puzzles</Link>
                        </li>
                        <li>
                          <Link to="/toysupplier?search=toys">Board Games</Link>
                        </li>
                        <li>
                          <Link to="/toysupplier?search=toys">
                            Stuffed Animals
                          </Link>
                        </li>
                        <li>
                          <Link to="/toysupplier?search=toys">
                            Building Sets
                          </Link>
                        </li>
                        <li>
                          <Link to="/toysupplier?search=toys">Dolls</Link>
                        </li>
                        <li>
                          <Link to="/toysupplier?search=toys">
                            Outdoor Toys
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/gifts-items" className="title">
                        Books
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/gifts-items">Fiction</Link>
                        </li>
                        <li>
                          <Link to="/gifts-items">Non-Fiction</Link>
                        </li>
                        <li>
                          <Link to="/gifts-items">Biographies</Link>
                        </li>
                        <li>
                          <Link to="/gifts-items">Science Fiction</Link>
                        </li>
                        <li>
                          <Link to="/gifts-items">Fantasy</Link>
                        </li>
                        <li>
                          <Link to="/gifts-items">Mystery</Link>
                        </li>
                        <li>
                          <Link to="/gifts-items">Children's Books</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        to="/computerssupllier?search=computer"
                        className="title"
                      >
                        Gadgets
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/mobile/accessories?search=mobile">
                            Smartphones
                          </Link>
                        </li>
                        <li>
                          <Link to="/mobile/accessories?search=mobile">
                            Tablets
                          </Link>
                        </li>
                        <li>
                          <Link to="/gifts-items">Smartwatches</Link>
                        </li>
                        <li>
                          <Link to="/mobile/accessories?search=mobile">
                            Headphones
                          </Link>
                        </li>
                        <li>
                          <Link to="/computerssupllier?search=computer">
                            Speakers
                          </Link>
                        </li>
                        <li>
                          <Link to="/computerssupllier?search=computer">
                            Drones
                          </Link>
                        </li>
                        <li>
                          <Link to="/computerssupllier?search=computer">
                            Cameras
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/arts?search=art" className="title">
                        Home Decor
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/gifts-items">Vases</Link>
                        </li>
                        <li>
                          <Link to="/arts?search=art">Picture Frames</Link>
                        </li>
                        <li>
                          <Link to="/candledealers?search=candles">
                            Candles
                          </Link>
                        </li>
                        <li>
                          <Link to="/rugsandcarpets?search=rugs">Rugs</Link>
                        </li>
                        <li>
                          <Link to="/gifts-items">Lamps</Link>
                        </li>
                        <li>
                          <Link to="/arts?search=art">Wall Art</Link>
                        </li>
                        <li>
                          <Link to="/gifts-items">Throws</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        to="/garmentdedealer?search=garment"
                        className="title"
                      >
                        Fashion Accessories
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/gifts-items">Watches</Link>
                        </li>
                        <li>
                          <Link to="/gifts-items">Sunglasses</Link>
                        </li>
                        <li>
                          <Link to="/gifts-items">Hats</Link>
                        </li>
                        <li>
                          <Link to="/gifts-items">Scarves</Link>
                        </li>
                        <li>
                          <Link to="/bagsandbeltdealer?search=belt">Belts</Link>
                        </li>
                        <li>
                          <Link to="/gifts-items">Jewelry</Link>
                        </li>
                        <li>
                          <Link to="/bagsandbeltdealer?search=belt">Bags</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="text-center">
                    <Link to="/gifts-items" className="view">
                      View All Categories in Gifts
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="item">
              <Link className="nav-item" to={"jewellery-necklaces-suppliers"}>
                jewellery
              </Link>
              <div className="submenu" style={{ display: "none" }}>
                <div className="container">
                  <ul className="submenu-wrap">
                    <li>
                      <Link
                        to="/jewellery-necklaces-suppliers"
                        className="title"
                      >
                        Rings
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Engagement Rings
                          </Link>
                        </li>
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Wedding Bands
                          </Link>
                        </li>
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Cocktail Rings
                          </Link>
                        </li>
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Statement Rings
                          </Link>
                        </li>
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Stackable Rings
                          </Link>
                        </li>
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Promise Rings
                          </Link>
                        </li>
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Birthstone Rings
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        to="/jewellery-necklaces-suppliers"
                        className="title"
                      >
                        Necklaces
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Pendants
                          </Link>
                        </li>
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Chains
                          </Link>
                        </li>
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Chokers
                          </Link>
                        </li>
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Lockets
                          </Link>
                        </li>
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Beaded Necklaces
                          </Link>
                        </li>
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Layered Necklaces
                          </Link>
                        </li>
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Statement Necklaces
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        to="/jewellery-necklaces-suppliers"
                        className="title"
                      >
                        Earrings
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Stud Earrings
                          </Link>
                        </li>
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Hoop Earrings
                          </Link>
                        </li>
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Dangle Earrings
                          </Link>
                        </li>
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Drop Earrings
                          </Link>
                        </li>
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Cluster Earrings
                          </Link>
                        </li>
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Huggie Earrings
                          </Link>
                        </li>
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Chandelier Earrings
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        to="/jewellery-necklaces-suppliers"
                        className="title"
                      >
                        Bracelets
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Cuff Bracelets
                          </Link>
                        </li>
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Charm Bracelets
                          </Link>
                        </li>
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Bangle Bracelets
                          </Link>
                        </li>
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Beaded Bracelets
                          </Link>
                        </li>
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Chain Bracelets
                          </Link>
                        </li>
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Link Bracelets
                          </Link>
                        </li>
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Tennis Bracelets
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        to="/jewellery-necklaces-suppliers"
                        className="title"
                      >
                        Jewelry Sets
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Necklace and Earring Sets
                          </Link>
                        </li>
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Bracelet and Ring Sets
                          </Link>
                        </li>
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Complete Sets
                          </Link>
                        </li>
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Matching Sets
                          </Link>
                        </li>
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Wedding Sets
                          </Link>
                        </li>
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Vintage Sets
                          </Link>
                        </li>
                        <li>
                          <Link to="/jewellery-necklaces-suppliers">
                            Fashion Sets
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="text-center">
                    <Link to="/jewellery-necklaces-suppliers" className="view">
                      View All Categories in Jewelry
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="item">
              <Link
                className="nav-item"
                to={"industrial-chemicals-cleaning-chemicals"}
              >
                Chemicals
              </Link>
              <div className="submenu" style={{ display: "none" }}>
                <div className="container">
                  <ul className="submenu-wrap">
                    <li>
                      <Link
                        to="/industrial-chemicals-cleaning-chemicals"
                        className="title"
                      >
                        Industrial Chemicals
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/industrial-chemicals-cleaning-chemicals">
                            Acids
                          </Link>
                        </li>
                        <li>
                          <Link to="/industrial-chemicals-cleaning-chemicals">
                            Alkalis
                          </Link>
                        </li>
                        <li>
                          <Link to="/industrial-chemicals-cleaning-chemicals">
                            Solvents
                          </Link>
                        </li>
                        <li>
                          <Link to="/industrial-chemicals-cleaning-chemicals">
                            Catalysts
                          </Link>
                        </li>
                        <li>
                          <Link to="/industrial-chemicals-cleaning-chemicals">
                            Polymers
                          </Link>
                        </li>
                        <li>
                          <Link to="/industrial-chemicals-cleaning-chemicals">
                            Specialty Chemicals
                          </Link>
                        </li>
                        <li>
                          <Link to="/industrial-chemicals-cleaning-chemicals">
                            Chemical Reagents
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        to="/industrial-chemicals-cleaning-chemicals"
                        className="title"
                      >
                        Agricultural Chemicals
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/fertilizermanufacturer?search=fertilizer">
                            Fertilizers
                          </Link>
                        </li>
                        <li>
                          <Link to="/fertilizermanufacturer?search=fertilizer">
                            Pesticides
                          </Link>
                        </li>
                        <li>
                          <Link to="/fertilizermanufacturer?search=fertilizer">
                            Herbicides
                          </Link>
                        </li>
                        <li>
                          <Link to="/fertilizermanufacturer?search=fertilizer">
                            Insecticides
                          </Link>
                        </li>
                        <li>
                          <Link to="/fertilizermanufacturer?search=fertilizer">
                            Plant Growth Regulators
                          </Link>
                        </li>
                        <li>
                          <Link to="/fertilizermanufacturer?search=fertilizer">
                            Soil Conditioners
                          </Link>
                        </li>
                        <li>
                          <Link to="/fertilizermanufacturer?search=fertilizer">
                            Adjuvants
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/pvcrresins?search=chemical" className="title">
                        Pharmaceutical Chemicals
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/industrial-chemicals-cleaning-chemicals">
                            Active Pharmaceutical Ingredients
                          </Link>
                        </li>
                        <li>
                          <Link to="/industrial-chemicals-cleaning-chemicals">
                            Excipients
                          </Link>
                        </li>
                        <li>
                          <Link to="/industrial-chemicals-cleaning-chemicals">
                            Intermediates
                          </Link>
                        </li>
                        <li>
                          <Link to="/industrial-chemicals-cleaning-chemicals">
                            Biopharmaceuticals
                          </Link>
                        </li>
                        <li>
                          <Link to="/industrial-chemicals-cleaning-chemicals">
                            Nutraceuticals
                          </Link>
                        </li>
                        <li>
                          <Link to="/industrial-chemicals-cleaning-chemicals">
                            Veterinary Chemicals
                          </Link>
                        </li>
                        <li>
                          <Link to="/industrial-chemicals-cleaning-chemicals">
                            Pharmaceutical Solvents
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        to="/beautyproductsdealer?search=cosmetic"
                        className="title"
                      >
                        Cosmetic Chemicals
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/industrial-chemicals-cleaning-chemicals">
                            Emollients
                          </Link>
                        </li>
                        <li>
                          <Link to="/industrial-chemicals-cleaning-chemicals">
                            Surfactants
                          </Link>
                        </li>
                        <li>
                          <Link to="/beautyproductsdealer?search=cosmetic">
                            Preservatives
                          </Link>
                        </li>
                        <li>
                          <Link to="/beautyproductsdealer?search=cosmetic">
                            Fragrances
                          </Link>
                        </li>
                        <li>
                          <Link to="/beautyproductsdealer?search=cosmetic">
                            Colorants
                          </Link>
                        </li>
                        <li>
                          <Link to="/beautyproductsdealer?search=cosmetic">
                            Humectants
                          </Link>
                        </li>
                        <li>
                          <Link to="/beautyproductsdealer?search=cosmetic">
                            Thickeners
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        to="/industrial-chemicals-cleaning-chemicals"
                        className="title"
                      >
                        Laboratory Chemicals
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/industrial-chemicals-cleaning-chemicals">
                            Analytical Reagents
                          </Link>
                        </li>
                        <li>
                          <Link to="/industrial-chemicals-cleaning-chemicals">
                            Biochemicals
                          </Link>
                        </li>
                        <li>
                          <Link to="/industrial-chemicals-cleaning-chemicals">
                            Laboratory Acids
                          </Link>
                        </li>
                        <li>
                          <Link to="/industrial-chemicals-cleaning-chemicals">
                            Laboratory Solvents
                          </Link>
                        </li>
                        <li>
                          <Link to="/industrial-chemicals-cleaning-chemicals">
                            Organic Chemicals
                          </Link>
                        </li>
                        <li>
                          <Link to="/industrial-chemicals-cleaning-chemicals">
                            Inorganic Chemicals
                          </Link>
                        </li>
                        <li>
                          <Link to="/industrial-chemicals-cleaning-chemicals">
                            Chromatography Reagents
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="text-center">
                    <Link
                      to="/industrial-chemicals-cleaning-chemicals"
                      className="view"
                    >
                      View All Categories in Chemicals
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            <li className="item">
              {/* <a
                                href="furnitures"
                                className="nav-item"
                            >
                                Furnitures
                            </a> */}
              <Link
                className="nav-item"
                to={"/best-furnitures-supplier-in-india"}
              >
                {" "}
                Furnitures
              </Link>
              <div className="submenu" style={{ display: "none" }}>
                <div className="container">
                  <ul className="submenu-wrap">
                    <li>
                      <Link
                        to="/best-furniture-suppliers-in-india?search=furniture"
                        className="title"
                      >
                        Antique Furniture
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/best-furniture-suppliers-in-india?search=furniture">
                            Antique Chairs
                          </Link>
                        </li>
                        <li>
                          <Link to="/best-furniture-suppliers-in-india?search=furniture">
                            Antique Beds
                          </Link>
                        </li>
                        <li>
                          <Link to="/best-furniture-suppliers-in-india?search=furniture">
                            Antique Tables
                          </Link>
                        </li>
                        <li>
                          <Link to="/best-furniture-suppliers-in-india?search=furniture">
                            Wooden Bed
                          </Link>
                        </li>
                        <li>
                          <Link to="/best-furniture-suppliers-in-india?search=furniture">
                            Antique Almirah
                          </Link>
                        </li>
                        <li>
                          <Link to="/best-furniture-suppliers-in-india?search=furniture">
                            Antique Wood Tables
                          </Link>
                        </li>
                        <li>
                          <Link to="/best-furniture-suppliers-in-india?search=furniture">
                            Antique Furniture
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        to="/best-furniture-suppliers-in-india?search=furniture"
                        className="title"
                      >
                        Home Furniture
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/best-furniture-suppliers-in-india?search=furniture">
                            Sofa Set
                          </Link>
                        </li>
                        <li>
                          <Link to="/best-furniture-suppliers-in-india?search=furniture">
                            Center Tables
                          </Link>
                        </li>
                        <li>
                          <Link to="/best-furniture-suppliers-in-india?search=furniture">
                            Double Bed
                          </Link>
                        </li>
                        <li>
                          <Link to="/best-furniture-suppliers-in-india?search=furniture">
                            Rack
                          </Link>
                        </li>
                        <li>
                          <Link to="/best-furniture-suppliers-in-india?search=furniture">
                            TV Stand
                          </Link>
                        </li>
                        <li>
                          <Link to="/best-furniture-suppliers-in-india?search=furniture">
                            Stool
                          </Link>
                        </li>
                        <li>
                          <Link to="/best-furniture-suppliers-in-india?search=furniture">
                            Bedroom Wardrobe
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        to="/best-furniture-suppliers-in-india?search=furniture"
                        className="title"
                      >
                        Commercial Use Furniture
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/best-furniture-suppliers-in-india?search=furniture">
                            Executive Table
                          </Link>
                        </li>
                        <li>
                          <Link to="/best-furniture-suppliers-in-india?search=furniture">
                            Wall Racks
                          </Link>
                        </li>
                        <li>
                          <Link to="/best-furniture-suppliers-in-india?search=furniture">
                            Banquet Tables
                          </Link>
                        </li>
                        <li>
                          <Link to="/best-furniture-suppliers-in-india?search=furniture">
                            Cafe Furniture
                          </Link>
                        </li>
                        <li>
                          <Link to="/best-furniture-suppliers-in-india?search=furniture">
                            Computer Table
                          </Link>
                        </li>
                        <li>
                          <Link to="/best-furniture-suppliers-in-india?search=furniture">
                            Revolving Chairs
                          </Link>
                        </li>
                        <li>
                          <Link to="/best-furniture-suppliers-in-india?search=furniture">
                            Wine Racks
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/plastic?search=plastic" className="title">
                        Plastic Furniture
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/plastic?search=plastic">
                            Plastic Chairs
                          </Link>
                        </li>
                        <li>
                          <Link to="/plastic?search=plastic">
                            Plastic Tables
                          </Link>
                        </li>
                        <li>
                          <Link to="/plastic?search=plastic">
                            Plastic Stool
                          </Link>
                        </li>
                        <li>
                          <Link to="/plastic?search=plastic">
                            Plastic Cabinets
                          </Link>
                        </li>
                        <li>
                          <Link to="/plastic?search=plastic">Plastic Rack</Link>
                        </li>
                        <li>
                          <Link to="/plastic?search=plastic">PVC Chair</Link>
                        </li>
                        <li>
                          <Link to="/plastic?search=plastic">PVC Table</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        to="/best-furniture-suppliers-in-india?search=furniture"
                        className="title"
                      >
                        Furniture Accessories
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/best-furniture-suppliers-in-india?search=furniture">
                            Table Top
                          </Link>
                        </li>
                        <li>
                          <Link to="/best-furniture-suppliers-in-india?search=furniture">
                            Stretcher
                          </Link>
                        </li>
                        <li>
                          <Link to="/best-furniture-suppliers-in-india?search=furniture">
                            Bed Frames
                          </Link>
                        </li>
                        <li>
                          <Link to="/best-furniture-suppliers-in-india?search=furniture">
                            Chair Base
                          </Link>
                        </li>
                        <li>
                          <Link to="/best-furniture-suppliers-in-india?search=furniture">
                            Chair Handles
                          </Link>
                        </li>
                        <li>
                          <Link to="/best-furniture-suppliers-in-india?search=furniture">
                            Sofa Leg
                          </Link>
                        </li>
                        <li>
                          <Link to="/best-furniture-suppliers-in-india?search=furniture">
                            Rack Panels
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="text-center">
                    <Link
                      to="/best-furniture-suppliers-in-india?search=furniture"
                      className="view"
                    >
                      View All Categories in Furniture
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="item">
              <Link to={"/clothing-apparel-suppliers"} className="nav-item">
                {" "}
                Clothing and Fashion
              </Link>
              <div className="submenu" style={{ display: "none" }}>
                {/* <div className="container">
                                    <ul className="submenu-wrap">
                                        <li>
                                            <a
                                                href="#"
                                                className="title"
                                            >
                                                Antique Furniture
                                            </a>
                                            <ul className="sublinks">
                                                <li>
                                                    <a href="/">
                                                        Antique Chairs
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        Antique Beds
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        Antique Tables
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        Wooden Bed
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        Antique Almirah
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        Antique Wood Tables
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        Antique Furniture
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                className="title"
                                            >
                                                Home Furniture
                                            </a>
                                            <ul className="sublinks">
                                                <li>
                                                    <a href="/sofa-set">
                                                        Sofa Set
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/center-tables">
                                                        Center Tables
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/double-bed">
                                                        Double Bed
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/rack">
                                                        Rack
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/tv-stand">
                                                        TV Stand
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/stool">
                                                        Stool
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/bedroom-wardrobe">
                                                        Bedroom Wardrobe
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                className="title"
                                            >
                                                Commercial Use Furniture
                                            </a>
                                            <ul className="sublinks">
                                                <li>
                                                    <a href="/">
                                                        Executive Table
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/wall-racks">
                                                        Wall Racks
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/banquet-tables">
                                                        Banquet Tables
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/cafe-furniture">
                                                        Cafe Furniture
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/computer-table">
                                                        Computer Table
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/revolving-chairs">
                                                        Revolving Chairs
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/wine-racks">
                                                        Wine Racks
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                className="title"
                                            >
                                                Plastic Furniture{" "}
                                            </a>
                                            <ul className="sublinks">
                                                <li>
                                                    <a href="/plastic-chairs">
                                                        Plastic Chairs
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/plastic-tables">
                                                        Plastic Tables
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/plastic-stool">
                                                        Plastic Stool
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/plastic-cabinets">
                                                        Plastic Cabinets
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/plastic-rack">
                                                        Plastic Rack
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/pvc-chair">
                                                        PVC Chair
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/pvc-table">
                                                        PVC Table
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                className="title"
                                            >
                                                Furniture Accessories
                                            </a>
                                            <ul className="sublinks">
                                                <li>
                                                    <a href="/table-top">
                                                        Table Top
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/stretcher">
                                                        Stretcher
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/bed-frames">
                                                        Bed Frames
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/chair-base">
                                                        Chair Base
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/chair-handles">
                                                        Chair Handles
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/sofa-leg">
                                                        Sofa Leg
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/rack-panels">
                                                        Rack Panels
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="text-center">
                                        <a
                                            href="/"
                                            className="view"
                                        >
                                            View All Categories in Furniture{" "}
                                            {" "}
                                        </a>
                                    </div>
                                </div> */}
                <div className="container">
                  <ul className="submenu-wrap">
                    <li>
                      <Link
                        to="/garmentdedealer?search=garment"
                        className="title"
                      >
                        Men's Clothing
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/garmentdedealer?search=garment">
                            T-Shirts
                          </Link>
                        </li>
                        <li>
                          <Link to="/garmentdedealer?search=garment">
                            Shirts
                          </Link>
                        </li>
                        <li>
                          <Link to="/garmentdedealer?search=garment">
                            Jeans
                          </Link>
                        </li>
                        <li>
                          <Link to="/garmentdedealer?search=garment">
                            Trousers
                          </Link>
                        </li>
                        <li>
                          <Link to="/garmentdedealer?search=garment">
                            Suits
                          </Link>
                        </li>
                        <li>
                          <Link to="/garmentdedealer?search=garment">
                            Jackets
                          </Link>
                        </li>
                        <li>
                          <Link to="/garmentdedealer?search=garment">
                            Activewear
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        to="/garmentdedealer?search=garment"
                        className="title"
                      >
                        Women's Clothing
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/garmentdedealer?search=garment">
                            Dresses
                          </Link>
                        </li>
                        <li>
                          <Link to="/garmentdedealer?search=garment">Tops</Link>
                        </li>
                        <li>
                          <Link to="/garmentdedealer?search=garment">
                            Skirts
                          </Link>
                        </li>
                        <li>
                          <Link to="/garmentdedealer?search=garment">
                            Pants
                          </Link>
                        </li>
                        <li>
                          <Link to="/garmentdedealer?search=garment">
                            Blouses
                          </Link>
                        </li>
                        <li>
                          <Link to="/garmentdedealer?search=garment">
                            Sweaters
                          </Link>
                        </li>
                        <li>
                          <Link to="/garmentdedealer?search=garment">
                            Outerwear
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        to="/garmentdedealer?search=garment"
                        className="title"
                      >
                        Kid's Clothing
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/garmentdedealer?search=garment">
                            Baby Clothing
                          </Link>
                        </li>
                        <li>
                          <Link to="/garmentdedealer?search=garment">
                            Toddler Clothing
                          </Link>
                        </li>
                        <li>
                          <Link to="//garmentdedealer?search=garment">
                            Boy's Clothing
                          </Link>
                        </li>
                        <li>
                          <Link to="/clothing-apparel-suppliers">
                            Girl's Clothing
                          </Link>
                        </li>
                        <li>
                          <Link to="/garmentdedealer?search=garment">
                            School Uniforms
                          </Link>
                        </li>
                        <li>
                          <Link to="/garmentdedealer?search=garment">
                            Sleepwear
                          </Link>
                        </li>
                        <li>
                          <Link to="/garmentdedealer?search=garment">
                            Activewear
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/clothing-apparel-suppliers" className="title">
                        Footwear
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/clothing-apparel-suppliers">
                            Men's Footwear
                          </Link>
                        </li>
                        <li>
                          <Link to="/clothing-apparel-suppliers">
                            Women's Footwear
                          </Link>
                        </li>
                        <li>
                          <Link to="/clothing-apparel-suppliers">
                            Kid's Footwear
                          </Link>
                        </li>
                        <li>
                          <Link to="/clothing-apparel-suppliers">
                            Sports Shoes
                          </Link>
                        </li>
                        <li>
                          <Link to="/clothing-apparel-suppliers">
                            Casual Shoes
                          </Link>
                        </li>
                        <li>
                          <Link to="/clothing-apparel-suppliers">
                            Formal Shoes
                          </Link>
                        </li>
                        <li>
                          <Link to="/clothing-apparel-suppliers">
                            Sandals & Slippers
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/clothing-apparel-suppliers" className="title">
                        Accessories
                      </Link>
                      <ul className="sublinks">
                        <li>
                          <Link to="/bagsandbeltdealer?search=belt">
                            Bags & Purses
                          </Link>
                        </li>
                        <li>
                          <Link to="/bagsandbeltdealer?search=belt">Belts</Link>
                        </li>
                        <li>
                          <Link to="/clothing-apparel-suppliers">
                            Hats & Caps
                          </Link>
                        </li>
                        <li>
                          <Link to="/clothing-apparel-suppliers">Scarves</Link>
                        </li>
                        <li>
                          <Link to="/clothing-apparel-suppliers">
                            Sunglasses
                          </Link>
                        </li>
                        <li>
                          <Link to="/clothing-apparel-suppliers">Watches</Link>
                        </li>
                        <li>
                          <Link to="/clothing-apparel-suppliers">Jewelry</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="text-center">
                    <Link to="/clothing-apparel-suppliers" className="view">
                      View All Categories in Fashion
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <h2 id="trending-category"> Trending Categories </h2>

      <div id="phone-category" className="tc-list">
        <div className="tcl-iteam">
          <Link to="/footweardealers?search=footwear">
            <div className="tc-img">
              <img
                src="./assets/1foot.jpeg"
                alt="Footwear for Men, Women, and Kids"
                width={200}
                height={200}
                decoding="async"
                fetchpriority="low"
              />
            </div>
            <div className="tc-title">Men, Women &amp; Kids Footwear</div>
          </Link>
        </div>
        <div className="tcl-iteam">
          <Link to="/best-furniture-suppliers-in-india?search=furniture">
            <div className="tc-img">
              <img
                src="./assets/images-bed.jpeg"
                alt="Furniture"
                width={200}
                height={200}
                decoding="async"
                fetchpriority="low"
              />
            </div>
            <div className="tc-title">Wood and Lumber</div>
          </Link>
        </div>
        <div className="tcl-iteam">
          <Link to="/">
            <div className="tc-img">
              <img
                src="/assets/curt.jpeg"
                alt="Drapes and Curtains"
                width={200}
                height={200}
                decoding="async"
                fetchpriority="low"
              />
            </div>
            <div className="tc-title">Curtains and Drapers</div>
          </Link>
        </div>
        <div className="tcl-iteam">
          <Link to="/">
            <div className="tc-img">
              <img
                src="./assets/agri.jpeg"
                alt="agriculture-farm-tools-suppliers Equipment and Supplies"
                width={200}
                height={200}
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </div>
            <div className="tc-title">
              agriculture-farm-tools-suppliers Equipment and Supplies
            </div>
          </Link>
        </div>
        <div className="tcl-iteam">
          <Link to="/foodproductstore?search=food">
            <div className="tc-img">
              <img
                src="./assets/food.jpeg"
                alt="Food & agriculture-farm-tools-suppliers"
                width={200}
                height={200}
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </div>
            <div className="tc-title">
              Food & agriculture-farm-tools-suppliers
            </div>
          </Link>
        </div>
        <div className="tcl-iteam">
          <Link to="/suitcasemanufacturer?search=suitcase">
            <div className="tc-img">
              <img
                src="./assets/suitcase.jpeg"
                alt="Portfolio, Suitcase, Briefcases, & Laptop Bags"
                width={200}
                height={200}
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </div>
            <div className="tc-title">
              Portfolio, Suitcase, Briefcases, & Laptop Bags
            </div>
          </Link>
        </div>
        <div className="tcl-iteam">
          <Link to="/garmentdedealer?search=garment">
            <div className="tc-img">
              <img
                src="./assets/dress.jpeg"
                alt="Clothing & Dress"
                width={200}
                height={200}
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </div>
            <div className="tc-title">Clothing & Dress</div>
          </Link>
        </div>
        <div className="tcl-iteam">
          <Link to="/medicinestore?search=medicine">
            <div className="tc-img">
              <img
                src="./assets/needles.jpeg"
                alt="Surgical Needles & Scissors"
                width={200}
                height={200}
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </div>
            <div className="tc-title">Surgical Needles &amp; Scissors</div>
          </Link>
        </div>
        <div className="tcl-iteam">
          <Link to="/seat/covers?search=covers">
            <div className="tc-img">
              <img
                src="./assets/tent.jpeg"
                alt="Covers, Tarpaulins & Tents"
                width={200}
                height={200}
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </div>
            <div className="tc-title">Covers, Tarpaulins &amp; Tents</div>
          </Link>
        </div>
        <div className="tcl-iteam">
          <Link to="/steel/utensils?search=kitchenware">
            <div className="tc-title">Kitchenware</div>
          </Link>
        </div>
        <div className="tcl-iteam">
          <Link to="steel/utensils?search=kitchenware">
            <div className="tc-img">
              <img
                src="./assets/ac.jpeg"
                alt="Domestic Fans, AC & Coolers"
                width={200}
                height={200}
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </div>
            <div className="tc-title">Domestic Fans, AC &amp; Coolers</div>
          </Link>
        </div>
        <div className="tcl-iteam">
          <Link to="/bathwaredealers?search=bucket">
            <div className="tc-img">
              <img
                src="./assets/washroom.jpeg"
                alt="Storage Bins & Buckets, Mugs"
                width={200}
                height={200}
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </div>
            <div className="tc-title">Storage Bins &amp; Buckets, Mugs</div>
          </Link>
        </div>
        <div className="tcl-iteam">
          <Link to="/beautyproductsdealer?search=beauty">
            <div className="tc-img">
              <img
                src="./assets/health.jpeg"
                alt="Health & Beauty Products"
                width={200}
                height={200}
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </div>
            <div className="tc-title">Health & Beauty Products</div>
          </Link>
        </div>
        <div className="tcl-iteam">
          <Link to="/pvcrresins?search=chemical">
            <div className="tc-img">
              <img
                src="./assets/industrial-chemicals-cleaning-chemicals.jpeg"
                alt="Chemicals"
                width={200}
                height={200}
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </div>
            <div className="tc-title">Chemicals</div>
          </Link>
        </div>
      </div>
      {/* <div className="main-slider-container">
                <div className="main-slide">
                    <div className="slider-wrapper">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img height={120} src="./assets/banner5.jpeg" alt="Slide 1" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img height={120} src="./assets/banner6.png" alt="Slide 2" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img height={120} src="./assets/banner7.png" alt="Slide 3" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img height={120} src="./assets/banner8.png" alt="Slide 4" />
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
                <div className="mains-slide">

                    <div className="tk23-hkCont_onergt">
                        <div className="tk23-hkCont_premserv__box">
                            <h1 className="tk23-hkCont_premserv__ttl">

                                Our Membership Plans

                            </h1>
                            <div className="tk23-hkCont_premserv__list">
                                <Link to={'/packages'}>


                                    <div className="tk23-hkCont_premservs">

                                        <span className="" style={{ backgroundColor: '#fff' }}>Standard Plan</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="tk23-hkCont_premserv__list">
                                <Link to={'/packages'}>
                                    <div className="tk23-hkCont_premservs">

                                        <span className="" style={{ backgroundColor: '#fff' }}>Advance plan</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="tk23-hkCont_premserv__list">
                                <Link to={'/packages'}>
                                    <div className="tk23-hkCont_premservs">

                                        <span className="" style={{ backgroundColor: '#fff' }}>Premium Plan</span>
                                    </div>
                                </Link>
                                <Link to={'/packages'}>
                                    <div className="reach">

                                        <span className="reahhere">Call Now</span>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div> */}
      {/* <div className="main-slider-container">
                <div className="main-slide">
                    <div className="slider-wrapper">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img height={120} src="./assets/banner5.jpeg" alt="Slide 1" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img height={120} src="./assets/banner6.png" alt="Slide 2" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img height={120} src="./assets/banner7.png" alt="Slide 3" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img height={120} src="./assets/banner8.png" alt="Slide 4" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="mains-slide">
                    <div className="tk23-hkCont_onergt">
                        <div className="tk23-hkCont_premserv__box">
                            <h1 className="tk23-hkCont_premserv__ttl">Our Membership Plans</h1>
                            <div className="tk23-hkCont_premserv__list">
                                <Link to={'/packages'}>
                                    <div className="tk23-hkCont_premservs">
                                        <span style={{ backgroundColor: '#fff' }}>Standard Plan</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="tk23-hkCont_premserv__list">
                                <Link to={'/packages'}>
                                    <div className="tk23-hkCont_premservs">
                                        <span style={{ backgroundColor: '#fff' }}>Advance plan</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="tk23-hkCont_premserv__list">
                                <Link to={'/packages'}>
                                    <div className="tk23-hkCont_premservs">
                                        <span style={{ backgroundColor: '#fff' }}>Premium Plan</span>
                                    </div>
                                </Link>
                                <Link to={'/packages'}>
                                    <div className="reach">
                                        <span className="reahhere">Call Now</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fixed-form-bar" onClick={toggleForm}></div>
                <div className={`fixed-form-container ${formOpen ? 'open' : ''}`}>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Full Name*
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Email Address*
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Contact Number*
                            <input
                                type="text"
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Product / Supplier*
                            <input
                                type="text"
                                name="productSupplier"
                                value={formData.productSupplier}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            I am a*
                            <select
                                name="userType"
                                value={formData.userType}
                                onChange={handleChange}
                                required
                            >
                                <option value="Seller">Seller</option>
                                <option value="Buyer">Buyer</option>
                            </select>
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div> */}
      <div className="main-slider-container">
        <div className="mains-slide">
          <div className="tk23-hkCont_onergt">
            <div className="tk23-hkCont_premserv__box">
              <h1 className="tk23-hkCont_premserv__ttl">
                Our Membership Plans
              </h1>
              <div className="tk23-hkCont_premserv__list">
                <Link to={"/globalb2b-prices"}>
                  <div className="tk23-hkCont_premservs">
                    <span
                      className="fontss"
                      style={{ backgroundColor: "#fff" }}
                    >
                      Standard Plan
                    </span>
                  </div>
                </Link>
              </div>
              <div className="tk23-hkCont_premserv__list">
                <Link to={"/globalb2b-prices"}>
                  <div className="tk23-hkCont_premservs">
                    <span
                      className="fontssx"
                      style={{ backgroundColor: "#fff" }}
                    >
                      Advanced Plan
                    </span>
                  </div>
                </Link>
              </div>
              <div className="tk23-hkCont_premserv__list">
                <Link to={"/globalb2b-prices"}>
                  <div className="tk23-hkCont_premservs">
                    <span
                      className="fontss"
                      style={{ backgroundColor: "#fff" }}
                    >
                      Premium Plan
                    </span>
                  </div>
                </Link>
                <Link to={"/packages"}>
                  <div className="reach">
                    <span className="reahhere">Call Now</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="main-slide">
          <div className="slider-wrapper">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  height={120}
                  src="./assets/blog-banner.jpeg"
                  alt="Slide 3"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img height={120} src="./assets/banner8e.jpeg" alt="Slide 3" />
              </SwiperSlide>
              <SwiperSlide>
                <img height={120} src="./assets/shaktitex.jpeg" alt="Slide 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img height={120} src="./assets/baner12.png" alt="Slide 2" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* <div className="fixed-form-bar" onClick={toggleForm}></div>
                <div className={`fixed-form-container ${formOpen ? 'open' : ''}`}>
                    <div className={`vertical-call-bar ${formOpen ? 'open' : ''}`} onClick={toggleForm}>
                        Call Us Now
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label className='type-form'>
                            Full Name*
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label className='type-form'>
                            Email Address*
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label className='type-form'>
                            Contact Number*
                            <input
                                type="text"
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label className='type-form'>
                            Product / Supplier*
                            <input
                                type="text"
                                name="productSupplier"
                                value={formData.productSupplier}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label className='type-form'>
                            I am a*
                            <select
                                name="userType"
                                value={formData.userType}
                                onChange={handleChange}
                                required
                            >
                                <option value="Seller">Seller</option>
                                <option value="Buyer">Buyer</option>
                            </select>
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div> */}
        {/* <div>
                    <div className="fixed-form-bar" onClick={toggleForm}>
                        <span className="call-us-text">Call Us Now</span>
                        <i className={`fas ${formOpen ? 'fa-angle-right' : 'fa-angle-left'}`}></i>
                    </div>
                    <div className={`fixed-form-container ${formOpen ? 'open' : ''}`}>
                        <form onSubmit={handleSubmit}>
                            <label style={{ margin: '30px 0px', fontSize: '18px', textAlign: 'center', color: 'green' }} className='type-form'>Don't Miss Out on Our Business Resources</label>
                            <label style={{ margin: '5px 0px', fontSize: '18px', textAlign: 'center', color: 'orange' }} className='type-form'>Connect with Verified Buyers</label>
                            <label className='type-form'>
                                Full Name*
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label className='type-form'>
                                Email Address*
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label className='type-form'>
                                Contact Number*
                                <input
                                    type="text"
                                    name="mobileNumber"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label className='type-form'>
                                Product / Supplier*
                                <input
                                    type="text"
                                    name="productSupplier"
                                    value={formData.productSupplier}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label className='type-form'>
                                I am a*
                                <select
                                    name="userType"
                                    value={formData.userType}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="Seller">Seller</option>
                                    <option value="Buyer">Buyer</option>
                                </select>
                            </label>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div> */}
        {/* <div>
                    <div className="fixed-form-bar" onClick={toggleForm} >
                        <span className="call-us-text">Call Us Now</span>
                        <i className={`fas ${formOpen ? 'fa-angle-right' : 'fa-angle-left'}`}></i>
                    </div>
                    <div className={`fixed-form-container ${formOpen ? 'open' : ''}`}>
                        <form onSubmit={handleSubmit}>
                            <img src="./assets/form-logo.png" style={{ width: '190px', display: 'flex', height: '100px', margin: 'auto' }} alt="" />
                            <label style={{ fontSize: '18px', textAlign: 'center', color: 'green' }} className='type-form'>Don't Miss Out on Our Business Resources</label>
                            <label style={{ margin: '5px 0px', fontSize: '18px', textAlign: 'center', color: 'orange' }} className='type-form'>Connect with Verified Buyers</label>
                            <label className='type-form'>
                                Full Name*
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label className='type-form'>
                                Email Address*
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label className='type-form'>
                                Contact Number*
                                <input
                                    type="text"
                                    name="mobileNumber"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label className='type-form'>
                                Product / Supplier*
                                <input
                                    type="text"
                                    name="productSupplier"
                                    value={formData.productSupplier}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label className='type-form'>
                                I am a*
                                <div>
                                    <label className='type-form'>
                                        <input
                                            type="checkbox"
                                            name="userType"
                                            value="Seller"
                                            checked={formData.userType.includes("Seller")}
                                            onChange={handleChange}
                                            required
                                        />
                                        Seller
                                    </label >
                                    <label className='type-form'>
                                        <input
                                            type="checkbox"
                                            name="userType"
                                            value="Buyer"
                                            checked={formData.userType.includes("Buyer")}
                                            onChange={handleChange}
                                            required
                                        />
                                        Buyer
                                    </label>
                                </div>
                            </label>

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div> */}
        {/* <div>
                   
                    <div className={`fixed-form-bar ${barOpen ? 'open' : ''}`} onClick={toggleForm}>
                        <div className="border-animation">
                            <span className="call-us-text">Book A Call</span>
                            <i className={`fas ${formOpen ? 'fa-angle-right' : 'fa-angle-left'}`}></i>
                        </div>
                    </div>

                    <div className={`fixed-form-container ${formOpen ? 'open' : ''}`}>
                       
                        <div>
                            {successMessage && (
                                <div style={messageContainerStyle}>
                                    {successMessage}
                                </div>
                            )}
                            <form onSubmit={handleSubmit}>
                                <img src="./assets/form-logo.png" style={{ width: '190px', display: 'flex', height: '100px', margin: 'auto' }} alt="" />
                                <label style={{ fontSize: '18px', textAlign: 'center', color: 'green' }} className='type-form'>Don't Miss Out on Our Business Resources</label>
                                <label style={{ margin: '5px 0px', fontSize: '18px', textAlign: 'center', color: 'orange' }} className='type-form'>Connect with Verified Buyers</label>
                                <label className='type-form'>
                                    Full Name*
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                                <label className='type-form'>
                                    Email Address*
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                                <label className='type-form'>
                                    Contact Number*
                                    <input
                                        type="text"
                                        name="mobileNumber"
                                        value={formData.mobileNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                                <label className='type-form'>
                                    Product / Supplier*
                                    <input
                                        type="text"
                                        name="productSupplier"
                                        value={formData.productSupplier}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                                <label className='type-form'>
                                    I am a*
                                    <div>
                                        <label className='type-form' style={{ display: 'inline-block', marginRight: '10px' }}>
                                            <input
                                                type="checkbox"
                                                name="userType"
                                                value="Seller"
                                                checked={formData.userType.includes("Seller")}
                                                onChange={handleCheckboxChange}
                                            />
                                            Seller
                                        </label>
                                        <label className='type-form' style={{ display: 'inline-block' }}>
                                            <input
                                                type="checkbox"
                                                name="userType"
                                                value="Buyer"
                                                checked={formData.userType.includes("Buyer")}
                                                onChange={handleCheckboxChange}
                                            />
                                            Buyer
                                        </label>
                                    </div>
                                </label>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div> */}
        {/* <div className="fixed-form-wrapper">
                    <div className={`fixed-form-bar ${formOpen ? 'open' : ''}`} onClick={toggleForm}>
                        <span className="call-us-text">Call Us Now</span>
                        <i className="fas fa-angle-right"></i>
                    </div>
                    <div className={`fixed-form-container ${formOpen ? 'open' : ''}`}>
                        <form onSubmit={handleSubmit}>
                            <label className='type-form'>
                                Full Name*
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label className='type-form'>
                                Email Address*
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label className='type-form'>
                                Contact Number*
                                <input
                                    type="text"
                                    name="mobileNumber"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label className='type-form'>
                                Product / Supplier*
                                <input
                                    type="text"
                                    name="productSupplier"
                                    value={formData.productSupplier}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label className='type-form'>
                                I am a*
                                <select
                                    name="userType"
                                    value={formData.userType}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="Seller">Seller</option>
                                    <option value="Buyer">Buyer</option>
                                </select>
                            </label>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div> */}
      </div>
    </>
  );
};

export default Maincategory;
