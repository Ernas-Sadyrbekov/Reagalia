import Carousel from "../components/Content/Carousel/Carousel";
import Advantages from "../components/Content/Advantages/Advantages";
import Popular from "../components/Content/Popular/Popular";
import Slider from "../components/Content/Slider/index";
import Modal from "../components/Content/Modal";
import Collection from "../components/Content/Colection/index";
import { useState } from "react";

const HomePage = ({ showModal, toggleShowModal }) => {
  return (
    <div>
      <Slider toggleShowModal={toggleShowModal} />

      <Carousel />
      <Advantages />
      <Popular toggleShowModal={toggleShowModal} />
      <Collection toggleShowModal={toggleShowModal} />
    </div>
  );
};

export default HomePage;
