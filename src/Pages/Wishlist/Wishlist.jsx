import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import styles from "../../Components//Products/Products.module.scss";
import axios from "axios";

const Wishlist = () => {
  const [data, setdata] = useState([]);

  const getData = () => {
    axios
      .get("https://664c587c35bbda10987ff83d.mockapi.io/Wishlist")
      .then((res) => {
        setdata(res.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteItem = (id) => {
    axios.delete(`https://664c587c35bbda10987ff83d.mockapi.io/Wishlist/${id}`);
    setTimeout(() => {
        getData();
    }, 500);
  };

  return (
    <div>
      <Header />
      <marquee
        style={{ fontSize: "30px", fontWeight: "bold" }}
        behavior=""
        direction=""
      >
        WISHLIST
      </marquee>

      <div className={styles.Products}>
        <div className={styles.Product}>
          {data &&
            data.map((id) => (
              <div className={styles.ProductsCards}>
                <img src={id.image} alt="" />
                <p>{id.title}</p>
                <p>{id.category}</p>
                <p>{id.price}$</p>
                <button onClick={() => deleteItem(id.id)}>sil</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};


export default Wishlist;
