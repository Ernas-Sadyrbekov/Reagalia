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

function App() {
    const [showModal, setShowModal] = useState(false);

    const toggleShowModal = () => {
        setShowModal(!showModal);
    };

  return (
    <>
      <Header show={showModal} toggleShowModal={toggleShowModal} />

      <Routes>
        <Route path="/all_products" element=<AllProducts /> />
        <Route path="/" element=<HomePage toggleShowModal={toggleShowModal} /> />
      </Routes>

      <Footer />
        <Modal show={showModal} onCloseButtonClick={toggleShowModal} />
    </>
  );
}

export default App;
