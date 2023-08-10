import React from "react";
import "./style.css";
import logo from "./../../img/white-logo.svg";
import worldIcon from "./../../img/world.svg";
import appStore from "./../../img/appStore.svg";
import googlePlay from "./../../img/google_play.svg";
import facebook from "./../../img/icons/facebook.svg";
import instagram from "./../../img/icons/instagram.svg";
import twitter from "./../../img/icons/twitter.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__logo">
          <img src={logo} className="footer__logo-img" alt="Логотип" />
        </div>
        <div className="footer__menu">
          <div className="footer__col">
            <div className="footer__language">
              <img src={worldIcon} className="footer__world-img" alt="world" />
              <select name="language">
                <option value="ru">Русский</option>
                <option value="en">English</option>
              </select>
            </div>
            <div className="uber-eats">UberEats</div>
            <div className="footer__social-networks">
              <a href="#">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="#">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="#">
                <img src={instagram} alt="instagram" />
              </a>
            </div>
          </div>
          <div className="footer__col">
            <a href="#">Об UberEats</a>
            <a href="#">Станьте партнёром по доставке</a>
            <a href="#">Станьте парнёром-рестораном</a>
          </div>
          <div className="footer__col">
            <a href="#">Все города</a>
            <a href="#">Цены</a>
            <a href="#">Помощь</a>
            <a href="#">FAQs</a>
          </div>
        </div>
        <div className="footer__app-links">
          <a href="#">
            <img src={appStore} alt="AppStore" />
          </a>
          <a href="#">
            <img src={googlePlay} alt="Google play" />
          </a>
        </div>
        <div className="footer__info">
          <a href="#">© 2017 Uber Technologies Inc.</a>
          <a href="#">Обработка персональных данных</a>
          <a href="#">Пользовательское соглашение</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
