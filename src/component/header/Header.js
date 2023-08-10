import React from "react";
import "./style.css";
import logo from "../../img/logo.svg";
import basket from "../../img/basket.svg";

const Header = () => {
  return (
    <header className="header" id="top">
      <div className="container">
        <div className="header__row">
          <a href="./index.html" className="logo">
            <img src={logo} className="logo__img" alt="Логотип" />
          </a>
          <div className="header__wrap">
            <button className="header__btn-sign-in">Войти</button>
            <input
              type="image"
              src={basket}
              alt="Корзина"
              className="header__btn-basket"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
