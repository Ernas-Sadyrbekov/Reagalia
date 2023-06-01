import "./App.css";

import Header from "./components/Header/Header";

import { Route, Routes } from "react-router-dom";
import AllProducts from "./components/Content/AllProducts/AllProducts";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/about_us" element=<AboutUs /> />
        <Route path="/all_products" element=<AllProducts /> />
        <Route path="/" element=<HomePage /> />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
