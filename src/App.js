import "./App.css";

import { Routes } from "react-router-dom";
import Index from "./components/Content/Slider";

import Header from "./components/Header/Header";
import Carousel from "./components/Content/Carousel/Carousel";

import Collection from "./components/Content/Colection";

import Advantages from "./components/Content/Advantages/Advantages";
import Popular from "./components/Content/Popular/Popular";


function App() {
  return (
    <>

        <Index />
        <Header />
        <Carousel />
        <Collection />

      <Index />
      <Header />
      <Carousel />
      <Advantages />
      <Popular />

    </>
  );
}

export default App;
