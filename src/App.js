import "./App.css";

import Header from "./components/Header/Header";
import Carousel from "./components/Content/Carousel/Carousel";

import Collection from "./components/Content/Colection";

import Advantages from "./components/Content/Advantages/Advantages";
import Popular from "./components/Content/Popular/Popular";
import Slider
    from "./components/Content/Slider";
import Index
    from "./components/Footer";
import Modal
    from "./components/Content/Modal";
import {
    useState
} from "react";


function App() {
    const [showModal, setShowModal] = useState(false);

    const toggleShowModal = () => {
        setShowModal(!showModal);
    };
  return (
    <>
        <Slider toggleShowModal={toggleShowModal} />
        <Header />
        <Carousel />
        <Advantages />
        <Popular toggleShowModal={toggleShowModal}  />
        <Collection toggleShowModal={toggleShowModal} />
        <Index />
        <Modal show={showModal} onCloseButtonClick={toggleShowModal} />
        {/*<button className="blue-button" onClick={toggleShowModal}>*/}
        {/*    Open Modal*/}
        {/*</button>*/}
    </>
  );
}

export default App;
