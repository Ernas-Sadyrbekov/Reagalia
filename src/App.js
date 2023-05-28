import "./App.css";

import {Routes} from "react-router-dom";
import Index from "./components/Content/Slider";

import Header from "./components/Header/Header";
import Carousel from "./components/Content/Carousel/Carousel";
import Collection from "./components/Content/Colection";

function App() {


  return (
    <>
        <Index />
        <Header />
        <Carousel />
        <Collection />
    </>
  );
}

export default App;
