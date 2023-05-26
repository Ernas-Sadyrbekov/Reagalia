import React from "react";
import Logo from "./logo-v1.svg";
const Header = () => {
  return (
    <header>
      <img
        src={Logo}
        style={{
          color: "white",
          backgroundColor: "black",
        }}
      />
    </header>
  );
};

export default Header;
