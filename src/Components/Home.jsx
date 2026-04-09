import React from "react";
import Maincategory from "./Maincategory";
import Allcategory from "./Allcategory";
import FeaturedProduct from "./Featured";
import Supplier from "./Supplier";
import Leads from "./Leads";
import Testimonial from "./Testimonial";
import Country from "./Country";
import Whyglobal from "./Whyglobal";
import StateCon from "./StatesCon";
import Burst from "./Burst";

const Home = () => {
  // <meta name="google-site-verification" content="Ffxs4dsvRDAd65tNEiOMAZjBmxSwADxdcxXBMQil02c" />
  <meta
    name="google-site-verification"
    content="AFagnd_SXMi3-v9tyoxnZq959dxgX4xKmDekJKReaBY"
  />;
  return (
    <>
      {/* <Maincategory /> */}
      {/* <Burst />
      <Burst /> */}
      <Allcategory />

      {/* <FeaturedProduct /> */}

      <Country />

      {/* <Supplier /> */}
      <Leads />

      <Whyglobal />
      <Testimonial />
      <StateCon />
    </>
  );
};

export default Home;
