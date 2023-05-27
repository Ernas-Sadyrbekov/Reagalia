import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Carousel from "./components/Content/Carousel/Carousel";
function App() {
  return (
    <>
      <Header />
      <Carousel />
    </>
  );
}

export default App;
