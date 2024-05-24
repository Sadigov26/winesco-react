import React, { useEffect } from "react";
import styles from "./Products.module.scss";
import { useState } from "react";
import axios from "axios";

const Products = () => {
  const [data, setdata] = useState([]);
  const [searchTerm, setSearchitem] = useState("");

  const getData = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setdata(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const addToCard = (id) => {
    axios
      .post("https://664c587c35bbda10987ff83d.mockapi.io/Basket", id)
      .then((res) => {
        console.log(res.data);
      });
  };
  const addToWishlist = (id) => {
    axios
      .post("https://664c587c35bbda10987ff83d.mockapi.io/Wishlist", id)
      .then((res) => {
        console.log(res.data);
      });
  };

  const sortedDataAZ = () => {       
    const sortedData = [...data].sort((a, b) => a.title.localeCompare(b.title));
    setdata(sortedData);
  };
  const sortedDataZA = () => {
    const sortedData = [...data].sort((a, b) => b.title.localeCompare(a.title));
    setdata(sortedData);
  };

  const handleSearchChange = (id) => {
    setSearchitem(id.target.value);
  };

  const filtereData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <button onClick={sortedDataAZ}>a-z</button>
      <button onClick={sortedDataZA}>z-a</button>
      <input type="text" placeholder="axtar..." onChange={handleSearchChange}/>
      <div className={styles.Products}>
        <div className={styles.Product}>
          {data &&
            filtereData.map((id) => (
              <div className={styles.ProductsCards}>
                <img src={id.image} alt="" />
                <p>{id.title}</p>
                <p>{id.category}</p>
                <p>{id.price}$</p>
                <button onClick={() => addToCard(id)}>add card</button>
                <button onClick={() => addToWishlist(id)}>add WISH</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
