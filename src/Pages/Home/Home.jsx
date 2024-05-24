import React from "react";
import Header from "../../Components/Header/Header";
import Products from "../../Components/Products/Products";


const Home = () => {
  return (
    <div>
      <Header />
      <marquee
        style={{ fontSize: "30px", fontWeight: "bold" }}
        behavior=""
        direction=""
      >
        HOME
      </marquee>

      <Products/>
    </div>
  );
};

export default Home;
