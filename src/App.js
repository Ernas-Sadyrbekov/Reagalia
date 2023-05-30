import "./App.css";

import Header from "./components/Header/Header";


import { Route, Routes } from "react-router-dom";
import AllProducts from "./components/Content/AllProducts/AllProducts";
import HomePage from "./pages/HomePage";

function App() {

  return (
    <>

      <Header />

      <Routes>
        <Route path="/all_products" element=<AllProducts /> />
        <Route path="/" element=<HomePage /> />
      </Routes>

    </>
  );
}

export default App;
