import React, { useState, useEffect } from "react";
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
import HomeSkeleton from "./HomeSkeleton";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading sequence for data and images
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds skeleton display time
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <HomeSkeleton />;
  }

  return (
    <>
      <meta
        name="google-site-verification"
        content="AFagnd_SXMi3-v9tyoxnZq959dxgX4xKmDekJKReaBY"
      />
      
      {/* <Maincategory /> */}
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
