import "./App.css";

import Header from "./components/Header/Header";

import { Route, Routes } from "react-router-dom";
import AllProducts from "./components/Content/AllProducts/AllProducts";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

import {
    useState
} from "react";
import Modal
    from "./components/Content/Modal";

import AboutUs from "./pages/AboutUs";


function App() {
    const [showModal, setShowModal] = useState(false);

    const toggleShowModal = () => {
        setShowModal(!showModal);
    };

  return (
    <>
      <Header toggleShowModal={toggleShowModal} />

      <Routes>
        <Route path="/about_us" element=<AboutUs /> />
        <Route path="/all_products" element=<AllProducts /> />
        <Route path="/" element=<HomePage toggleShowModal={toggleShowModal} /> />
      </Routes>

      <Footer toggleShowModal={toggleShowModal} />
        <Modal show={showModal} onCloseButtonClick={toggleShowModal} />
    </>
  );
}

export default App;
