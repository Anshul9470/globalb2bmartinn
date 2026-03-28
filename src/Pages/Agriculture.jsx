import React from "react";
import "./agricul.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const Agriculture = () => {
  return (
    <>
      <Helmet>
        <title>Best suppliers of agriculture and farm tools in India</title>
        <meta
          name="description"
          content="We are GlobalB2BMart best B2B portal in India, providing the best suppliers and buyers of agriculture and farm tools. GlobalB2BMart believes in trust and quality"
        />
      </Helmet>
      <div class="pagetitle">
        <h1>Agriculture Trade Directory & Networking Platform</h1>
      </div>
      <div className="l1-section">
        <div className="container">
          <div className="row l1-box-wrap">
            <div className="col-4">
              <div className="l1-box">
                <h2 className="l1-heading">
                  <Link to="vegetable-supplier">Vegetables</Link>
                </h2>
                <div className="d-flex">
                  <div>
                    <figure className="cp" onclick="/">
                      <img
                        src="./assets/agri1.jpg"
                        alt="Vegetables"
                        width={95}
                        height={95}
                        loading="lazy"
                      />
                    </figure>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <Link to="/onion-seeds-dehydrated-onions-white">
                          Onions
                        </Link>
                      </li>
                      <li>
                        <Link to="/potatosupplier">potato</Link>
                      </li>
                      <li>
                        <Link to="/mushroom-supplier">Mushrooms</Link>
                      </li>
                      <li>
                        <Link to="https://www.globalb2bmart.com/tomato-powder">
                          Tomatoes
                        </Link>
                      </li>

                      <li>
                        <Link to="/vegetable-supplier">View More</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="l1-box">
                <h2 className="l1-heading">
                  <a href="#">Chicken &amp; Eggs</a>
                </h2>
                <div className="d-flex">
                  <div>
                    <figure className="cp" onclick="/">
                      <img
                        src="./assets/agri3.avif"
                        alt="Eggs $ Chicken"
                        width={95}
                        height={95}
                        loading="lazy"
                      />
                    </figure>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <Link to="/egg-supplier">Farm Egg</Link>
                      </li>
                      <li>
                        <Link to="/egg-supplier">Quail Eggs </Link>
                      </li>
                      <li>
                        <Link to="/poulitryfarmstore">Chicken</Link>
                      </li>
                      <li>
                        <Link to="/poulitryfarmstore">Mutton</Link>
                      </li>

                      <li>
                        <a href="/poulitryfarmstore">View More</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="l1-box">
                <h2 className="l1-heading">
                  <a href="/">Legumes</a>
                </h2>
                <div className="d-flex">
                  <div>
                    <link rel="preload" as="image" href="/" />
                    <figure className="cp" onclick="/'">
                      <img
                        src="./assets/agri4.webp"
                        alt="Legumes"
                        width={95}
                        height={95}
                        loading="lazy"
                      />
                    </figure>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <Link to="/pulses">Soyabeans</Link>
                      </li>
                      <li>
                        <a href="/pulses">Lentils</a>
                      </li>
                      <li>
                        <a href="/pulses">Kidney Beans</a>
                      </li>
                      <li>
                        <a href="/pulses">Black Beans</a>
                      </li>
                      <li>
                        <a href="/pulses">View More</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="l1-box">
                <h2 className="l1-heading">
                  <a href="/">Exotic &amp; Juicy Fruits</a>
                </h2>
                <div className="d-flex">
                  <div>
                    <link rel="preload" as="image" href="/" />
                    <figure className="cp" onclick="/">
                      <img
                        src="./assets/agri13.jpg"
                        alt="Exotic & Juicy Fruits"
                        width={95}
                        height={95}
                        loading="lazy"
                      />
                    </figure>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <Link to="/apple-seller">Apple</Link>
                      </li>
                      <li>
                        <Link to="/https://www.globalb2bmart.com/fresh-yellow-banana-fresh-organic-bananas">
                          Banana
                        </Link>
                      </li>
                      <li>
                        <Link to="/fruitscomponent">Mangoe</Link>
                      </li>
                      <li>
                        <Link to="/coconut-selleres">Coconut</Link>
                      </li>
                      <li>
                        <Link to="/fruitscomponent">View More</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="l1-box">
                <h2 className="l1-heading">
                  <a href="/">Plant Nutrition &amp; Soil Enhancers</a>
                </h2>
                <div className="d-flex">
                  <div>
                    <link rel="preload" as="image" href="/" />
                    <figure className="cp" onclick="/">
                      <img
                        src="./assets/agri7.jpg"
                        alt="Plant Nutrition & Soil Enhancers"
                        width={95}
                        height={95}
                        loading="lazy"
                      />
                    </figure>
                  </div>
                  <div>
                    <ul>
                      <li>
                        {/* <a href="#">Nitrogen Fertilizers</a> */}
                        <Link to="/fertilizermanufacturer">
                          Nitrogen Fertilizers
                        </Link>
                      </li>
                      <li>
                        <Link to="/fertilizermanufacturer">
                          Organic Compost
                        </Link>
                      </li>
                      <li>
                        <Link to="/fertilizermanufacturer">
                          Growth Stimulants
                        </Link>
                      </li>
                      <li>
                        <Link to="/fertilizermanufacturer">
                          Soil Conditioners
                        </Link>
                      </li>
                      <li>
                        <Link to="/fertilizermanufacturer">View More</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="l1-box">
                <h2 className="l1-heading">
                  <a href="#">Cereals &amp; Pulses</a>
                </h2>
                <div className="d-flex">
                  <div>
                    <link rel="preload" as="image" href="#" />
                    <figure className="cp" onclick="/">
                      <img
                        src="./assets/agri8.jpg"
                        alt="Cereals & Pulses"
                        width={95}
                        height={95}
                        loading="lazy"
                      />
                    </figure>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <Link to="/maizemanu">Corn</Link>
                      </li>
                      <li>
                        <Link to="/maizemanu">Barely</Link>
                      </li>
                      <li>
                        <Link to="/pulses">Pulses</Link>
                      </li>
                      <li>
                        <Link to="/pulses">Pulses</Link>
                      </li>
                      <li>
                        <Link to="/pulses">View More</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="l1-box">
                <h2 className="l1-heading">
                  <a href="#">Gardening Essentials &amp; Outdoor Equipment</a>
                </h2>
                <div className="d-flex">
                  <div>
                    <link rel="preload" as="image" href="/" />
                    <figure className="cp" onclick="/">
                      <img
                        src="./assets/agri10.jpg"
                        alt="Gardening Essentials & Outdoor Equipment"
                        width={95}
                        height={95}
                        loading="lazy"
                      />
                    </figure>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <a href="#">Grass Shears</a>
                      </li>
                      <li>
                        <a href="#">Plant Containers</a>
                      </li>
                      <li>
                        <a href="#">Hand Rake</a>
                      </li>
                      <li>
                        <a href="#">Pruning Shears</a>
                      </li>
                      <li>
                        <a href="#">View More</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="l1-box">
                <h2 className="l1-heading">
                  <a href="/">Farming Solutions &amp; Services</a>
                </h2>
                <div className="d-flex">
                  <div>
                    <link rel="preload" as="image" href="/" />
                    <figure className="cp" onclick="location.href='/">
                      <img
                        src="./assets/agri5.jpg"
                        alt="Farming Solutions & Services"
                        width={95}
                        height={95}
                        loading="lazy"
                      />
                    </figure>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <a href="/">Crop Protection Services</a>
                      </li>
                      <li>
                        <a href="/">Soil Conservation</a>
                      </li>
                      <li>
                        <a href="/">Irrigation Solutions</a>
                      </li>
                      <li>
                        <a href="/">Precision Agriculture</a>
                      </li>
                      <li>
                        <a href="/">View More</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="l1-box">
                <h2 className="l1-heading">
                  <a href="#">Tractor &amp; Tractor Parts</a>
                </h2>
                <div className="d-flex">
                  <div>
                    <figure className="cp" onclick="/">
                      <img
                        src="./assets/agri2.webp"
                        alt="Tractor & Tractor Parts"
                        width={95}
                        height={95}
                        loading="lazy"
                      />
                    </figure>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <a href="#">Tractor Engines</a>
                      </li>
                      <li>
                        <a href="#">Tractor Seats</a>
                      </li>
                      <li>
                        <a href="#">Tractor Radiators</a>
                      </li>
                      <li>
                        <a href="#">Tractor Axles</a>
                      </li>
                      <li>
                        <a href="#">View More</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="l1-box">
                <h2 className="l1-heading">
                  <a href="/">Agricultural Implements &amp; Machinery</a>
                </h2>
                <div className="d-flex">
                  <div>
                    <link rel="preload" as="image" href="/" />
                    <figure className="cp" onclick="/">
                      <img
                        src="./assets/agri6.webp"
                        alt="Agricultural Implements & Machinery"
                        width={95}
                        height={95}
                        loading="lazy"
                      />
                    </figure>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <a href="/">Seed Drills</a>
                      </li>
                      <li>
                        <a href="/">Tractors</a>
                      </li>
                      <li>
                        <a href="/">Sprayers</a>
                      </li>
                      <li>
                        <a href="/">Combine Harvesters</a>
                      </li>
                      <li>
                        <a href="/">View More</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="l1-box">
                <h2 className="l1-heading">
                  <a href="/">Floral Arrangements &amp; Greenery</a>
                </h2>
                <div className="d-flex">
                  <div>
                    <link rel="preload" as="image" href="/" />
                    <figure className="cp" onclick="/">
                      <img
                        src="./assets/agri9.jpg"
                        alt="Floral Arrangements & Greenery"
                        width={95}
                        height={95}
                        loading="lazy"
                      />
                    </figure>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <a href="#">Orchids</a>
                      </li>
                      <li>
                        <a href="#">Floral Bouquets</a>
                      </li>
                      <li>
                        <a href="#">Roses</a>
                      </li>
                      <li>
                        <a href="#">Indoor Plants</a>
                      </li>
                      <li>
                        <a href="#">View More</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="l1-box">
                <h2 className="l1-heading">
                  <a href="#">Water Management &amp; Irrigation Solutions</a>
                </h2>
                <div className="d-flex">
                  <div>
                    <link rel="preload" as="image" href="/" />
                    <figure className="cp" onclick="/">
                      <img
                        src="./assets/agri11.jpg"
                        alt="Water Management & Irrigation Solutions"
                        width={95}
                        height={95}
                        loading="lazy"
                      />
                    </figure>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <a href="#">Water Pumps</a>
                      </li>
                      <li>
                        <a href="#">Drainage Systems</a>
                      </li>
                      <li>
                        <a href="#">Drip Irrigation</a>
                      </li>
                      <li>
                        <a href="#">Sprinkler Heads</a>
                      </li>
                      <li>
                        <a href="#">View More</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-page">
            <p>
              GlobalB2BMart is the leading Agriculture B2B Marketplace and
              Agriculture Business Directory, offering comprehensive business
              listings of Agriculture Suppliers, Manufacturers, Exporters,
              Wholesalers, and Traders worldwide. Our extensive and verified
              database includes detailed information about Agriculture
              Companies, a diverse catalog of Agriculture Products, and
              up-to-date Agriculture Price Lists and Quotations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agriculture;
