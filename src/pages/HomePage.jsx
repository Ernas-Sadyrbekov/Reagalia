import React from "react";
import Carousel from "../components/Content/Carousel/Carousel";

import Collection from "../components/Content/Colection";
import Index from "../components/Content/Slider";
import Advantages from "../components/Content/Advantages/Advantages";
import Popular from "../components/Content/Popular/Popular";
const HomePage = () => {
  return (
    <div>
      <Index />
      <Carousel />
      <Advantages />
      <Popular />
      {/* <Collection /> */}
    </div>
  );
};

export default HomePage;
