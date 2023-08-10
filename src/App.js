import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/main.css";
import Main from "./pages/Main";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import BtnUp from "./component/btnUp/BtnUp";
import Restaurant from "./pages/Restaurant";
import ScrollToTop from "./helpers/scrollToTop";

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/restaurant/:id/*" element={<Restaurant />} />
      </Routes>
      <Footer />
      <BtnUp />
    </div>
  );
}

export default App;
