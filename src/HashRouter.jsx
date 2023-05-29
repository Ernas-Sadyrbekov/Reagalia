import { Modal } from "@mui/material";
import React from "react";
import AllProducts from "./components/Content/AllProducts/AllProducts";
import { Route, Routes } from "react-router-dom";
import Index from "./components/Content/Slider";

import Header from "./components/Header/Header";
import Carousel from "./components/Content/Carousel/Carousel";

import Collection from "./components/Content/Colection";

import Advantages from "./components/Content/Advantages/Advantages";
import Popular from "./components/Content/Popular/Popular";
const HashRouter = () => {
  return (
    <Routes>
      <Route path="/all_products" element=<AllProducts /> />
    </Routes>
  );
};

export default HashRouter;
