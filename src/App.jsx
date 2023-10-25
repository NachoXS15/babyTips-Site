import { React, useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Timer from "./components/Timer";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Product from "./components/Product";
import Modules from "./components/modules/Modules";

function App() {
  return(
    <div>
      <Timer />
      <Header />
      <Banner />
      <Product />
      <Info />
      <Modules />
      <Footer />
    </div>
  )
}

export default App;
