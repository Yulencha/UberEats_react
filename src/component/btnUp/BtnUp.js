import React from "react";
import "./style.css";

const BtnUp = () => {
  const handlerScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return <div className="button-scroll-up" onClick={handlerScrollUp}></div>;
};

export default BtnUp;
