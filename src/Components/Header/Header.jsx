import React from "react";
import styles from "./Header.module.scss";
import logo from "../../About/logo (18).png";

const Header = () => {
  return (
    <div>
      <header>
        <div className={styles.HeaderContainer}>
          <div className={styles.HeaderContainerLogo}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.HeaderContainerNavbar}>
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="/basket">BASKET</a></li>
              <li><a href="/wishlist">WISHLIST</a></li>
              <li><a href="/dashboard">DASHBOARD</a></li>
              <li><a href="">CONTACT</a></li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
