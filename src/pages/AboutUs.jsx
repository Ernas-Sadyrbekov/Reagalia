import React from "react";
import AboutUsPage from "../components/AboutUsContent/AboutUsPage/AboutUsPage";
import AboutUsWelcome from "../components/AboutUsContent/AboutUsWelcome/AboutUsWelcome";
import AboutUsInfo from "../components/AboutUsContent/AboutUsInfo/AboutUsInfo";
import AboutUsBrand from "../components/AboutUsContent/AbouUsBarand/AboutUsBrand";
import AboutUsStoreFirst from "../components/AboutUsContent/AboutUsStore/AboutUsStoreFirst/AboutUsStoreFirst";
import AboutUsStoreSecond from "../components/AboutUsContent/AboutUsStore/AboutUsStoreSecond/AboutUsStoreSecond";

const AboutUs = () => {
  return (
    <div>
      <AboutUsPage />
      <AboutUsWelcome />
      <AboutUsInfo />
      <AboutUsBrand />
      <AboutUsStoreFirst />
      <AboutUsStoreSecond />
    </div>
  );
};

export default AboutUs;
