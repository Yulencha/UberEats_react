import React from "react";
import "./style.css";
// import btnBack from "./../../img/btn-up.svg";
import { NavLink } from "react-router-dom";

const BtnBack = () => {
  return (
    <NavLink to="/" className="button-back">
      На главную
    </NavLink>
  );
};

export default BtnBack;
